import React, { useState, useEffect } from 'react';
import { Phone, Clock, TrendingUp, ArrowRight, X, AlertCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { trackEvent, trackFacebookEvent } from './Analytics';
import { submitLeadForm } from '../services/api';

const LeadMagnet = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    challenges: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        
        if (minutes > 0) {
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          hours--;
        } else if (days > 0) {
          minutes = 59;
          hours = 23;
          days--;
        } else {
          // Reset timer
          days = 6;
          hours = 23;
          minutes = 59;
        }
        
        return { days, hours, minutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleOpenModal = () => {
    trackEvent('lead_magnet_click', 'Lead Generation', 'Modal Opened', 1);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setError(null);
    if (isSubmitted) {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', teamSize: '', challenges: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      setError('Proszę podać imię i email.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Track analytics events
      trackEvent('lead_magnet_submit', 'Lead Generation', 'Free Sample Download', 1);
      trackFacebookEvent('Lead', { content_name: 'Free Sample 100 Contacts' });
      
      await submitLeadForm(formData);
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message || 'Wystąpił błąd. Spróbuj ponownie.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <section id="lead-magnet" className="py-16 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Oferta ograniczona czasowo</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Otrzymaj <span className="text-yellow-400">darmowy audyt call center</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bezpłatna analiza Twojego call center (wartość 500 zł). 
            Pokażemy jak zwiększyć konwersję o minimum 25% w 30 dni.
          </p>

          {/* Timer */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[70px]">
              <div className="text-xl sm:text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs text-navy-light">dni</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[70px]">
              <div className="text-xl sm:text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs text-navy-light">godz</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[70px]">
              <div className="text-xl sm:text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs text-navy-light">min</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>Analiza obecnych procesów</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span>Plan zwiększenia konwersji</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span>Bez ukrytych kosztów</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors shadow-2xl shadow-yellow-400/20 flex items-center justify-center gap-2 mx-auto"
          >
            <Phone size={20} />
            Umów darmowy audyt
            <ArrowRight size={20} />
          </motion.button>
          
          <p className="text-xs text-white/80 mt-4">
            ⚡ Średni czas odpowiedzi: 2 godziny • 🔒 Bez zobowiązań • ✅ Bezpłatne
          </p>
          
          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 font-semibold">127+</span>
              <span>audytów przeprowadzono</span>
            </div>
            <div className="w-1 h-1 bg-white/60 rounded-full"></div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 font-semibold">+35%</span>
              <span>średnia poprawa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Lead Form Modal */}
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Darmowy audyt call center</h3>
                  <p className="text-gray-600 text-sm">Podaj dane, a my przygotujemy dla Ciebie spersonalizowaną analizę i rekomendacje.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="lead-name"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email służbowy *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="lead-email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                      placeholder="jan@firma.pl"
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-company" className="block text-sm font-medium text-gray-700 mb-1">
                      Firma
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="lead-company"
                      maxLength={200}
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                      placeholder="Nazwa firmy"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="lead-team-size" className="block text-sm font-medium text-gray-700 mb-1">
                        Rozmiar zespołu
                      </label>
                      <input
                        type="text"
                        name="teamSize"
                        id="lead-team-size"
                        maxLength={50}
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                        placeholder="np. 5-10 agentów"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-challenges" className="block text-sm font-medium text-gray-700 mb-1">
                        Główne wyzwania
                      </label>
                      <input
                        type="text"
                        name="challenges"
                        id="lead-challenges"
                        maxLength={200}
                        value={formData.challenges}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-all"
                        placeholder="np. niska konwersja"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700">
                      <AlertCircle size={16} />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-navy text-white py-4 rounded-xl font-semibold hover:bg-navy-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <Phone size={18} />
                        Umów darmowy audyt
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Twoje dane są bezpieczne. Nie wysyłamy spamu.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Dziękujemy!</h3>
                <p className="text-gray-600 mb-4">
                  Nasz ekspert call center skontaktuje się z Tobą na <strong>{formData.email}</strong> w ciągu 2 godzin w celu umówienia audytu.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="text-navy font-medium hover:underline"
                >
                  Zamknij okno
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default LeadMagnet;