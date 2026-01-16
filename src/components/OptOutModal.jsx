import React, { useState } from 'react';
import { Ban, CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent, trackFacebookEvent } from './Analytics';

const OptOutModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nip: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation: Name required, and at least one of Phone or NIP
    if (formData.fullName && (formData.phone || formData.nip)) {
      // Track analytics events
      trackEvent('opt_out_submit', 'RODO', 'Opt-out Form Submit', 1);
      trackFacebookEvent('Contact', { content_name: 'Opt-out Request' });
      
      setIsSubmitted(true);
      // Here you would normally send the data to the backend
    } else {
      // Optional: Show error if validation fails (handled by browser 'required' mostly, but custom check for phone/nip logic needed)
      if (!formData.phone && !formData.nip) {
        alert("Proszę podać numer telefonu lub NIP.");
      }
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      nip: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <Ban className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Zarządzanie zgodami</h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-navy mb-2">Wycofanie zgody na kontakt</h3>
                  <p className="text-gray-600">
                    Szanujemy Twoją prywatność. Wypełnij poniższy formularz, aby zgłosić sprzeciw wobec przetwarzania danych osobowych w celach marketingowych.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                      Imię i Nazwisko *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Jan Kowalski"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                      Adres e-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="jan@przyklad.pl"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                        Numer telefonu
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="123 456 789"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="nip" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                        NIP (opcjonalnie)
                      </label>
                      <input
                        type="text"
                        name="nip"
                        id="nip"
                        placeholder="1234567890"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                        value={formData.nip}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
                    <p className="text-sm text-yellow-800">
                      <strong>Uwaga:</strong> Wymagane jest podanie numeru telefonu lub NIP w celu identyfikacji w bazie danych.
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Anuluj
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-3 px-6 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-colors shadow-lg shadow-navy/20"
                    >
                      Zgłoś sprzeciw
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Zgłoszenie przyjęte</h3>
                <p className="text-gray-600 mb-6">
                  Twój sprzeciw został zarejestrowany w systemie i będzie przetworzony w ciągu 24 godzin.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-colors"
                >
                  Zamknij
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OptOutModal;