import React, { useState } from 'react';
import { Ban, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const OptOutSection = () => {
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
      setIsSubmitted(true);
      // Here you would normally send the data to the backend
    } else {
      // Optional: Show error if validation fails (handled by browser 'required' mostly, but custom check for phone/nip logic needed)
      if (!formData.phone && !formData.nip) {
        alert("Proszę podać numer telefonu lub NIP.");
      }
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
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Imię i Nazwisko</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Jan Kowalski"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Adres e-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jan@przyklad.pl"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Numer telefonu</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="123 456 789"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="nip" className="block text-sm font-medium text-gray-700 mb-1 ml-1">NIP (opcjonalnie)</label>
                  <input
                    type="text"
                    name="nip"
                    id="nip"
                    placeholder="1234567890"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                    value={formData.nip}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <button 
                  type="submit"
                  className="w-full bg-navy text-white font-semibold py-4 rounded-xl hover:bg-navy-light transition-colors shadow-lg shadow-navy/20"
                >
                  Zgłoś sprzeciw
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
