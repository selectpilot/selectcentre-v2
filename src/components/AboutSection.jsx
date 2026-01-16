import React from 'react';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Zadowolonych klientów' },
    { icon: TrendingUp, number: '2M+', label: 'Zweryfikowanych kontaktów' },
    { icon: Award, number: '99%', label: 'Jakość danych' },
    { icon: Shield, number: '5 lat', label: 'Doświadczenia na rynku' }
  ];

  return (
    <section id="about-company" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Poznaj SelectCentre
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-navy">SelectCentre</strong> to polska firma specjalizująca się w zarządzaniu danymi biznesowymi 
                i analityce. Od 2019 roku pomagamy firmom w budowaniu skutecznych strategii marketingowych 
                opartych na wysokiej jakości danych.
              </p>
              <p>
                Nasza misja to <strong className="text-navy">demokratyzacja dostępu do danych biznesowych</strong> przy 
                jednoczesnym zachowaniu najwyższych standardów prywatności i zgodności z RODO.
              </p>
              <p>
                Współpracujemy z setkami firm - od startupów po korporacje, dostarczając im narzędzia 
                do skutecznego dotarcia do klientów B2B i B2C.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-navy" />
                <span>100% zgodne z RODO</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-navy" />
                <span>Certyfikowany proces</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-100 hover:shadow-xl hover:border-navy/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-navy group-hover:scale-110 transition-transform" />
                </div>
                <motion.div 
                  className="text-2xl font-bold text-navy mb-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-navy mb-8">Nasze wartości</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h4 className="font-semibold text-navy mb-2">Transparentność</h4>
              <p className="text-gray-600 text-sm">
                Jasno informujemy skąd pochodzą dane i jak je wykorzystujemy. 
                Bez ukrytych praktik.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-navy mb-2">Jakość</h4>
              <p className="text-gray-600 text-sm">
                Każdy rekord przechodzi weryfikację. Dostarczamy dane, 
                na których możesz polegać.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-navy mb-2">Wsparcie</h4>
              <p className="text-gray-600 text-sm">
                Nasz zespół ekspertów pomoże Ci w każdym kroku - od wyboru 
                danych po optymalizację kampanii.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;