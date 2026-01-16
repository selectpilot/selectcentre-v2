import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Skąd macie mój numer?",
    answer: "Agregujemy dane z publicznych rejestrów CEIDG/GUS (dla firm) lub od partnerów marketingowych, którym udzieliłeś zgody (dla osób prywatnych)."
  },
  {
    question: "Czy to legalne?",
    answer: "Tak. Przetwarzamy dane publiczne na podstawie prawnie uzasadnionego interesu lub na podstawie zgody, którą w każdej chwili możesz wycofać."
  },
  {
    question: "Jak zablokować telefony?",
    answer: "Skorzystaj z formularza w Strefie Konsumenta. Twój numer zostanie trwale zablokowany w naszej bazie."
  },
  {
    question: "Ile kosztują bazy danych?",
    answer: "Ceny zaczynają się od 0,50 zł za rekord. Końcowa cena zależy od ilości danych, segmentacji i aktualności. Skontaktuj się z nami po bezpłatną wycenę."
  },
  {
    question: "Jak szybko otrzymam dane?",
    answer: "Standardowy czas realizacji to 24 godziny robocze. W przypadku pilnych zleceń możemy przyspieszyć realizację do kilku godzin."
  },
  {
    question: "Czy dane są aktualne?",
    answer: "Tak, nasze bazy są aktualizowane na bieżąco na podstawie rejestrów CEIDG, GUS i innych źródeł. Gwarantujemy 99% jakość danych."
  },
  {
    question: "Czy oferujecie próbki danych?",
    answer: "Tak! Możesz otrzymać bezpłatną próbkę 100 kontaktów dopasowanych do Twoich kryteriów. To pozwoli Ci ocenić jakość przed zakupem."
  },
  {
    question: "W jakich formatach otrzymam dane?",
    answer: "Dostarczamy dane w popularnych formatach: Excel (.xlsx), CSV, JSON. Możemy również przygotować dane w dedykowanym formacie według Twoich wymagań."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Najczęściej zadawane pytania</h2>
          <p className="text-gray-600">Rozwiewamy wszelkie wątpliwości dotyczące przetwarzania danych.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-navy/30 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors group"
              >
                <span className="font-semibold text-navy text-lg group-hover:text-navy-light transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="text-navy flex-shrink-0" />
                  ) : (
                    <Plus className="text-gray-400 group-hover:text-navy flex-shrink-0 transition-colors" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
