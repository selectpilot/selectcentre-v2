import React from 'react';
import { Phone, Database, BarChart, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const BusinessSection = () => {
  const services = [
    {
      icon: Phone,
      title: 'Profesjonalne Call Center',
      description: 'Pełna obsługa telefoniczna Twoich klientów',
      features: ['Inbound/Outbound calls', 'Profesjonalni agenci', 'Obsługa 24/7', 'Wielojęzyczna obsługa'],
      price: 'od 40 zł/godz agenta'
    },
    {
      icon: Database,
      title: 'Bazy danych i leadgeneration',
      description: 'Precyzyjnie dobrane kontakty dla Twoich kampanii',
      features: ['Segmentacja branżowa', 'Dane kontaktowe B2B/B2C', 'Kwalifikacja leadów', 'Integracja CRM'],
      price: 'od 0,50 zł/rekord'
    },
    {
      icon: BarChart,
      title: 'Analityka i optymalizacja',
      description: 'Monitorowanie i poprawa wyników call center',
      features: ['Monitoring rozmów', 'Raporty konwersji', 'A/B testing skryptów', 'Szkolenia agentów'],
      price: 'od 800 zł/miesiąc'
    }
  ];

  return (
    <section id="business" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
            Usługi Call Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa obsługa sprzedaży telefonicznej - od pozyskania leadów, przez profesjonalne rozmowy, 
            aż po analizę wyników. Zwiększ swoją sprzedaż o 35% średnio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-navy/20 transition-all group"
            >
              <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy/20 transition-colors">
                <service.icon className="w-8 h-8 text-navy" />
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="text-sm text-gray-500 mb-2">Ceny</div>
                <div className="text-lg font-semibold text-navy">{service.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-navy to-navy-light rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Gotowy na zwiększenie sprzedaży?
          </h3>
          <p className="text-navy-light mb-8 max-w-2xl mx-auto">
            Otrzymaj bezpłatny audyt swojego call center (wartość 500 zł). 
            Pokażemy jak zwiększyć konwersję o minimum 25%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-navy rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Darmowy audyt call center
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => window.open('mailto:kontakt@selectcentre.pl?subject=Zapytanie o usługi B2B', '_blank')}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Skontaktuj się z nami
            </button>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-navy mb-1">+35%</div>
            <div className="text-sm text-gray-600">Średnia poprawa konwersji</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-navy mb-1">1M+</div>
            <div className="text-sm text-gray-600">Obsłużonych połączeń</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-navy mb-1">150+</div>
            <div className="text-sm text-gray-600">Aktywnych kampanii</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-navy mb-1">24/7</div>
            <div className="text-sm text-gray-600">Obsługa call center</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;