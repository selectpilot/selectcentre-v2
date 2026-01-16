import React, { useState, useEffect } from 'react';
import { Download, Clock, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { trackEvent, trackFacebookEvent } from './Analytics';

const LeadMagnet = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32
  });

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

  const handleGetSample = () => {
    // Track analytics events
    trackEvent('lead_magnet_click', 'Lead Generation', 'Free Sample Download', 1);
    trackFacebookEvent('Lead', { content_name: 'Free Sample 100 Contacts' });
    
    const subject = "Darmowa próbka 100 kontaktów - SelectCentre";
    const body = `
Dzień dobry,

Chciałbym otrzymać darmową próbkę 100 kontaktów.

Moje dane:
- Imię i nazwisko: 
- Firma: 
- Branża docelowa: 
- Region: 
- Dodatkowe kryteria: 

Pozdrawiam
    `;
    
    const mailtoLink = `mailto:kontakt@selectcentre.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
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
            Otrzymaj <span className="text-yellow-400">100 kontaktów za darmo</span>
          </h2>
          
          <p className="text-xl text-navy-light mb-8 max-w-2xl mx-auto">
            Przetestuj jakość naszych danych bez żadnych zobowiązań. 
            Wybierz branżę i region - my dostarczymy najlepsze kontakty.
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
              <Download className="w-5 h-5 text-yellow-400" />
              <span>Natychmiastowy dostęp</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-yellow-400" />
              <span>100% zweryfikowane dane</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span>Bez ukrytych kosztów</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleGetSample}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors shadow-2xl shadow-yellow-400/20 flex items-center justify-center gap-2 mx-auto"
          >
            <Download size={20} />
            Pobierz darmową próbkę
            <ArrowRight size={20} />
          </motion.button>
          
          <p className="text-xs text-navy-light mt-4">
            ⚡ Średni czas odpowiedzi: 2 godziny • 🔒 Bez spamu • ✅ Bezpłatne
          </p>
          
          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-navy-light">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 font-semibold">347+</span>
              <span>firm już pobrało</span>
            </div>
            <div className="w-1 h-1 bg-navy-light rounded-full"></div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 font-semibold">4.9/5</span>
              <span>średnia ocena</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;