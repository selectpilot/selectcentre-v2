import React from 'react';
import { ShieldCheck, Database, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Database,
    title: "Legalne Źródła",
    description: "Agregujemy dane wyłącznie z publicznie dostępnych rejestrów (CEIDG, GUS) oraz od partnerów za Twoją zgodą."
  },
  {
    icon: ShieldCheck,
    title: "Pełna Transparentność",
    description: "Jesteśmy zarejestrowaną polską spółką. Działamy jawnie i szanujemy Twoje prawa."
  },
  {
    icon: FileCheck,
    title: "Kontrola Danych",
    description: "Umożliwiamy łatwe usunięcie Twoich danych z naszej bazy w dowolnym momencie."
  }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy/10 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-navy group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
