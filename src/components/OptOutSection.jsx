import React, { useState } from 'react';
import { Ban, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitOptOutForm } from '../services/api';

const OptOutSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nip: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation: Name required, and at least one of Phone or NIP
    if (!formData.fullName || !formData.email) {
      setError('Proszę podać imię i nazwisko oraz email.');
      return;
    }
    
    if (!formData.phone && !formData.nip) {
      setError('Proszę podać numer telefonu lub NIP.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      await submitOptOutForm(formData);
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message || 'Wystąpił błąd. Spróbuj ponownie.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="opt-out" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl shadow-blue-900/5 border border-blue-100 text-center"
        >
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Ban className="w-8 h-8 text-red-500" />
          </div>
          
          <h2 className="text-3xl font-bold text-navy mb-4">Chcesz wycofać zgodę na kontakt?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Szanujemy Twoją prywatność. Wypełnij poniższy formularz, aby zgłosić sprzeciw wobec przetwarzania danych.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="optout-fullName" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Imię i Nazwisko *</label>
                  <input
                    type="text"
                    name="fullName"
                    id="optout-fullName"
                    placeholder="Jan Kowalski"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="optout-email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Adres e-mail *</label>
                  <input
                    type="email"
                    name="email"
                    id="optout-email"
                    placeholder="jan@przyklad.pl"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="optout-phone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Numer telefonu</label>
                  <input
                    type="tel"
                    name="phone"
                    id="optout-phone"
                    placeholder="123 456 789"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="optout-nip" className="block text-sm font-medium text-gray-700 mb-1 ml-1">NIP (opcjonalnie)</label>
                  <input
                    type="text"
                    name="nip"
                    id="optout-nip"
                    placeholder="1234567890"
                    pattern="[0-9]{10}"
                    title="NIP musi składać się z 10 cyfr"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.nip}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-400 mt-1 ml-1">10 cyfr, bez myślników</p>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700">
                  <AlertCircle size={18} />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="mt-6">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-navy text-white font-semibold py-4 rounded-xl hover:bg-navy-light transition-colors shadow-lg shadow-navy/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    'Zgłoś sprzeciw'
                  )}
                </button>
                <p className="mt-3 text-xs text-center text-gray-400">
                  Wymagane jest podanie numeru telefonu lub NIP w celu identyfikacji w bazie.
                </p>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-50 text-green-800 p-6 rounded-xl flex flex-col items-center gap-2"
            >
              <CheckCircle className="w-8 h-8 text-green-500" />
              <p className="font-semibold text-lg">Zgłoszenie przyjęte</p>
              <p>Twój sprzeciw został zarejestrowany w systemie.</p>
            </motion.div>
          )}

          <p className="mt-6 text-sm text-gray-500">
            Zgłoszenia są procesowane automatycznie w ciągu 24h.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OptOutSection;
