import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Jak działa call center SelectCentre?",
    answer: "Nasze call center oferuje pełną obsługę - inbound/outbound calls, profesjonalnych agentów, wsparcie 24/7. Używamy sprawdzonych skryptów i monitoring w czasie rzeczywistym."
  },
  {
    question: "O ile zwiększycie naszą konwersję?",
    answer: "Średnia poprawa konwersji naszych klientów wynosi 35%. Zależy to od branży, produktu i obecnych wyników. Oferujemy bezpłatny audyt do oceny potencjału."
  },
  {
    question: "Ile kosztuje obsługa call center?",
    answer: "Ceny zaczynają się od 15 zł/godzina agenta. Końcowa cena zależy od typu kampanii, ilości godzin i dodatkowych usług. Oferujemy elastyczne pakiety."
  },
  {
    question: "Skąd bierzecie kontakty do dzwonienia?",
    answer: "Wykorzystujemy własne bazy danych budowane od 2019 roku oraz publiczne rejestry CEIDG/GUS. Wszystkie dane są zgodne z RODO i aktualizowane na bieżąco."
  },
  {
    question: "Jak szybko można uruchomić kampanię?",
    answer: "Standardowe wdrożenie trwa 3-5 dni roboczych. Obejmuje to analizę potrzeb, przygotowanie skryptów, szkolenie agentów i testy. W pilnych przypadkach możemy przyspieszyć proces."
  },
  {
    question: "Czy oferujecie monitoring jakości?",
    answer: "Tak! Wszystkie rozmowy są nagrywane i analizowane. Dostarczamy szczegółowe raporty konwersji, statystyki agentów i rekomendacje optymalizacji w czasie rzeczywistym."
  },
  {
    question: "Czy mają Państwo doświadczenie w mojej branży?",
    answer: "Obsługiwaliśmy już kampanie w większości branż - od IT, przez finanse, po e-commerce. Każda kampania jest dostosowana do specyfiki branży i grupy docelowej."
  },
  {
    question: "Jak mogę zablokować telefony od call center?",
    answer: "Skorzystaj z formularza w Strefie Konsumenta. Twój numer zostanie trwale zablokowany w naszej bazie i nie otrzymasz więcej połączeń marketingowych."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Najczęściej zadawane pytania</h2>
          <p className="text-gray-600">Rozwiewamy wszelkie wątpliwości dotyczące usług call center i telefonicznej sprzedaży.</p>
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
