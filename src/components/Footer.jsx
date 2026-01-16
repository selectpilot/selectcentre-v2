import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react';
import OptOutModal from './OptOutModal';

const Footer = () => {
  const [isOptOutModalOpen, setIsOptOutModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      const subject = "Zapisz mnie do newslettera SelectCentre";
      const body = `Proszę o zapisanie adresu ${newsletterEmail} do newslettera SelectCentre.`;
      const mailtoLink = `mailto:kontakt@selectcentre.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      setIsNewsletterSubmitted(true);
      setTimeout(() => {
        setIsNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">SelectCentre</h3>
            <p className="text-gray-400 mb-6">
              Profesjonalne zarządzanie danymi i analityka biznesowa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Dane Rejestrowe</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>SelectCentre Sp. z o.o.</li>
              <li>ul. Wiertnicza 89</li>
              <li>02-952 Warszawa</li>
              <li>NIP: 6793178172</li>
              <li>KRS: 0000763236</li>
            </ul>
            
            <h4 className="font-semibold mb-4 mt-6">Ważne Linki</h4>
            <ul className="space-y-2">
              <li><Link to="/klauzula-informacyjna" className="text-gray-400 hover:text-white transition-colors text-sm">Klauzula informacyjna</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Polityka Prywatności</Link></li>
              <li><Link to="/regulamin" className="text-gray-400 hover:text-white transition-colors text-sm">Regulamin</Link></li>
              <li><a href="mailto:iodo@selectcentre.pl" className="text-gray-400 hover:text-white transition-colors text-sm">Inspektor Ochrony Danych (IOD)</a></li>
              <li>
                <button 
                  onClick={() => setIsOptOutModalOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Zarządzaj zgodami
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SelectCentre Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
      
      <OptOutModal 
        isOpen={isOptOutModalOpen} 
        onClose={() => setIsOptOutModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
