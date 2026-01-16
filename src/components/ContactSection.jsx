import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackEvent, trackFacebookEvent } from './Analytics';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsLoading(true);
      
      // Track analytics events
      trackEvent('contact_form_submit', 'Contact', 'Form Submission', 1);
      trackFacebookEvent('Contact', { content_name: 'Contact Form' });
      
      // Simulate processing time
      setTimeout(() => {
        const subject = `Zapytanie od ${formData.name} - ${formData.company || 'Firma niespecjalnie'}`;
        const body = `
Imię i nazwisko: ${formData.name}
Firma: ${formData.company || 'Nie podano'}
Email: ${formData.email}

Wiadomość:
${formData.message}
      `;
        
        const mailtoLink = `mailto:kontakt@selectcentre.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
        
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Masz pytania? Potrzebujesz wyceny? Napisz do nas - odpowiemy w ciągu 24 godzin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-navy mb-8">Dane kontaktowe</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">kontakt@selectcentre.pl</p>
                  <p className="text-sm text-gray-500">Odpowiadamy w ciągu 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p className="text-gray-600">+48 22 123 45 67</p>
                  <p className="text-sm text-gray-500">Pon-Pt 9:00-17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p className="text-gray-600">
                    SelectCentre Sp. z o.o.<br />
                    ul. Wiertnicza 89<br />
                    02-952 Warszawa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Godziny pracy</h4>
                  <p className="text-gray-600">
                    Poniedziałek - Piątek: 9:00 - 17:00<br />
                    Weekend: Wsparcie mailowe
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-navy mb-2">Preferujesz szybki kontakt?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Napisz bezpośrednio na email - otrzymasz odpowiedź najszybciej.
              </p>
              <button
                onClick={() => window.open('mailto:kontakt@selectcentre.pl', '_blank')}
                className="text-navy font-medium hover:underline"
              >
                kontakt@selectcentre.pl →
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Napisz do nas</h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Firma (opcjonalnie)
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    placeholder="Nazwa firmy"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Wiadomość *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all resize-none"
                    placeholder="Opisz czego potrzebujesz - rodzaj danych, branża, region..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-navy text-white py-4 px-6 rounded-xl font-semibold hover:bg-navy-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Przygotowywanie...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Wyślij wiadomość
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  Klikając "Wyślij" otworzysz program pocztowy z wypełnioną wiadomością
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-lg font-semibold text-green-800 mb-2">Program pocztowy został uruchomiony!</h4>
                <p className="text-gray-600">Wyślij wiadomość z programu pocztowego, aby dotarła do nas.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;