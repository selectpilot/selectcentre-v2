const express = require('express');
const nodemailer = require('nodemailer');
// Konfiguracja transportu SMTP dla Gmail (Google Workspace)
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // np. kontakt@selectcentre.pl
    pass: process.env.GMAIL_PASS  // hasło aplikacji Gmail (App Password)
  }
});

const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3001;

// Trust proxy (required when behind Cloudflare/nginx)
app.set('trust proxy', 1);

// Initialize Firestore with fallback to in-memory storage for development
let firestore;
let inMemoryDb = {
  contacts: [],
  leads: [],
  optouts: []
};
let useInMemory = !process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!useInMemory) {
  try {
    const { Firestore } = require('@google-cloud/firestore');
    firestore = new Firestore({
      projectId: process.env.GOOGLE_CLOUD_PROJECT || 'selectcentre-database',
      databaseId: process.env.FIRESTORE_DATABASE_ID || 'selectcentre',
    });
    console.log('📊 Firestore initialized');
  } catch (error) {
    console.warn('⚠️  Firestore not available, using in-memory storage (data will not persist)');
    useInMemory = true;
  }
} else {
  console.log('⚠️  No GOOGLE_APPLICATION_CREDENTIALS set, using in-memory storage (data will not persist)');
}

// Helper function to add document (works with both Firestore and in-memory)
const addDocument = async (collection, data) => {
  if (useInMemory) {
    const id = `${collection}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const doc = { id, ...data, createdAt: new Date().toISOString() };
    inMemoryDb[collection].push(doc);
    console.log(`[IN-MEMORY] Added to ${collection}:`, doc);
    return { id };
  } else {
    const { Firestore } = require('@google-cloud/firestore');
    const docRef = await firestore.collection(collection).add({
      ...data,
      createdAt: Firestore.Timestamp.now()
    });
    return docRef;
  }
};

// Helper function to query documents
const queryDocuments = async (collection, field, value) => {
  if (useInMemory) {
    return {
      empty: !inMemoryDb[collection].some(doc => doc[field] === value)
    };
  } else {
    return await firestore.collection(collection)
      .where(field, '==', value)
      .limit(1)
      .get();
  }
};

// Security middleware
app.use(helmet());
app.use(hpp());

// CORS configuration
const allowedOrigins = process.env.FRONTEND_URL 
  ? [process.env.FRONTEND_URL, process.env.FRONTEND_URL.replace('https://', 'https://www.')]
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Body parser
app.use(express.json({ limit: '10kb' }));

// Rate limiting - prevent brute force/spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Zbyt wiele zapytań, spróbuj ponownie później.' }
});
app.use('/api/', limiter);

// Stricter rate limit for form submissions
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { error: 'Zbyt wiele zgłoszeń, spróbuj ponownie za godzinę.' }
});

// Simple XSS sanitization function
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Middleware to sanitize all string inputs
const sanitizeBody = (req, res, next) => {
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = sanitizeInput(req.body[key].trim());
      }
    });
  }
  next();
};

// Validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      error: 'Błąd walidacji',
      details: errors.array().map(e => e.msg)
    });
  }
  next();
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form submission
app.post('/api/contact',
  formLimiter,
  sanitizeBody,
  [
    body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Imię i nazwisko musi mieć 2-100 znaków'),
    body('email').trim().isEmail().normalizeEmail().withMessage('Podaj prawidłowy adres email'),
    body('company').optional().trim().isLength({ max: 200 }).withMessage('Nazwa firmy może mieć maksymalnie 200 znaków'),
    body('message').trim().isLength({ min: 10, max: 5000 }).withMessage('Wiadomość musi mieć 10-5000 znaków')
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const { name, email, company, message } = req.body;
      
      const docRef = await addDocument('contacts', {
        name,
        email,
        company: company || null,
        message,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        status: 'new'
      });

      // Wysyłka maila do właściciela skrzynki
      const mailOptions = {
        from: `SelectCentre <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: 'Nowa wiadomość z formularza kontaktowego SelectCentre',
        text: `Imię i nazwisko: ${name}\nEmail: ${email}\nFirma: ${company || '-'}\nWiadomość: ${message}`,
        html: `<b>Imię i nazwisko:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Firma:</b> ${company || '-'}<br/><b>Wiadomość:</b><br/>${message.replace(/\n/g, '<br/>')}`
      };

      try {
        await mailTransport.sendMail(mailOptions);
        console.log(`[MAIL] Wysłano powiadomienie do ${process.env.GMAIL_USER}`);
      } catch (mailErr) {
        console.error('[MAIL] Błąd wysyłki maila:', mailErr);
      }

      console.log(`[CONTACT] New submission: ${docRef.id} from ${email}`);
      res.status(201).json({ 
        success: true,
        message: 'Wiadomość została wysłana. Odpowiemy w ciągu 24 godzin.',
        id: docRef.id
      });
    } catch (error) {
      console.error('[CONTACT] Error:', error);
      res.status(500).json({ error: 'Wystąpił błąd. Spróbuj ponownie później.' });
    }
  }
);

// CallCenter audit request
app.post('/api/leads',
  formLimiter,
  sanitizeBody,
  [
    body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Imię i nazwisko musi mieć 2-100 znaków'),
    body('email').trim().isEmail().normalizeEmail().withMessage('Podaj prawidłowy adres email'),
    body('company').optional().trim().isLength({ max: 200 }).withMessage('Nazwa firmy może mieć maksymalnie 200 znaków'),
    body('teamSize').optional().trim().isLength({ max: 50 }).withMessage('Rozmiar zespołu może mieć maksymalnie 50 znaków'),
    body('challenges').optional().trim().isLength({ max: 200 }).withMessage('Wyzwania mogą mieć maksymalnie 200 znaków')
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const { name, email, company, teamSize, challenges } = req.body;
      
      // Check if email already requested audit
      const existingQuery = await queryDocuments('leads', 'email', email);
      
      if (!existingQuery.empty) {
        return res.status(400).json({ 
          error: 'Ten adres email już otrzymał audyt call center. Skontaktuj się z nami bezpośrednio.'
        });
      }
      
      const docRef = await addDocument('leads', {
        name,
        email,
        company: company || null,
        teamSize: teamSize || null,
        challenges: challenges || null,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        status: 'audit-requested',
        auditScheduled: false
      });

      console.log(`[LEAD] New audit request: ${docRef.id} from ${email}`);
      
      res.status(201).json({ 
        success: true,
        message: 'Dziękujemy! Nasz ekspert skontaktuje się z Tobą w ciągu 2 godzin.',
        id: docRef.id
      });
    } catch (error) {
      console.error('[LEAD] Error:', error);
      res.status(500).json({ error: 'Wystąpił błąd. Spróbuj ponownie później.' });
    }
  }
);

// Opt-out / GDPR request
app.post('/api/optout',
  formLimiter,
  sanitizeBody,
  [
    body('fullName').trim().isLength({ min: 2, max: 100 }).withMessage('Imię i nazwisko musi mieć 2-100 znaków'),
    body('email').trim().isEmail().normalizeEmail().withMessage('Podaj prawidłowy adres email'),
    body('phone').optional({ checkFalsy: true }).trim().matches(/^[0-9+\s()-]{6,20}$/).withMessage('Podaj prawidłowy numer telefonu'),
    body('nip').optional({ checkFalsy: true }).trim().matches(/^[0-9]{10}$/).withMessage('NIP musi składać się z 10 cyfr')
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const { fullName, email, phone, nip } = req.body;
      
      if (!phone && !nip) {
        return res.status(400).json({ 
          error: 'Podaj numer telefonu lub NIP w celu identyfikacji.'
        });
      }
      
      const docRef = await addDocument('optouts', {
        fullName,
        email,
        phone: phone || null,
        nip: nip || null,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent'),
        status: 'pending',
        processedAt: null
      });

      console.log(`[OPTOUT] New request: ${docRef.id} from ${email}`);
      
      res.status(201).json({ 
        success: true,
        message: 'Zgłoszenie zostało przyjęte. Zostanie przetworzone w ciągu 24 godzin.',
        id: docRef.id
      });
    } catch (error) {
      console.error('[OPTOUT] Error:', error);
      res.status(500).json({ error: 'Wystąpił błąd. Spróbuj ponownie później.' });
    }
  }
);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint nie znaleziony' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('[ERROR]', err);
  res.status(500).json({ error: 'Wewnętrzny błąd serwera' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  const storageType = useInMemory ? 'In-Memory (development)' : 'Google Cloud Firestore';
  console.log(`📊 Storage: ${storageType}`);
  if (useInMemory) {
    console.log('⚠️  Warning: Data will not persist after restart. Set up Firestore for production.');
  }
});
