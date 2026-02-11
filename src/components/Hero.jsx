import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from './Button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-medium text-sm border border-green-200 animate-pulse">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              🔥 Ponad 10 firm zwiększyło sprzedaż z nami
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-8 leading-tight"
          >
            Profesjonalne call center, <br className="hidden sm:block" />
            <span className="text-navy-light">które zwiększa Twoją sprzedaż.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Kompleksowa obsługa telefoniczna z własną bazą leadów. Zwiększamy konwersję o 35% dzięki profesjonalnym agentom i sprawdzonym skryptom.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Działamy zgodnie z prawem i dbamy o bezpieczeństwo Twoich danych.{' '}
            <a href="/klauzula-informacyjna" className="text-navy underline hover:text-navy-light transition-colors">Dowiedz się więcej</a>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <ButtonGroup className="justify-center">
              <Button 
                onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Bezpłatny audyt call center
              </Button>
              <Button 
                onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary"
                size="lg"
              >
                Oferta dla firm
              </Button>
            </ButtonGroup>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-gray-50 to-white -z-10" />
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-green-50 blur-3xl opacity-50" />
    </div>
  );
};

export default Hero;
