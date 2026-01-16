import React, { useState } from 'react';
import { ShieldCheck, Download, FileText, Mail, UserCheck, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import OptOutModal from '../components/OptOutModal';

const ConsumerZone = () => {
  const [isOptOutModalOpen, setIsOptOutModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('rights');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-navy" />
          </div>
          <h1 className="text-4xl font-bold text-navy mb-4">Strefa Konsumenta</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zarządzaj swoimi danymi osobowymi i poznaj swoje prawa zgodnie z RODO
          </p>
        </motion.div>

        {/* Main Content Tabs */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('rights')}
              className={`px-6 py-4 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'rights' 
                  ? 'text-navy border-b-2 border-navy bg-navy/5' 
                  : 'text-gray-600 hover:text-navy'
              }`}
            >
              Twoje prawa RODO
            </button>
            <button
              onClick={() => setActiveTab('processing')}
              className={`px-6 py-4 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'processing' 
                  ? 'text-navy border-b-2 border-navy bg-navy/5' 
                  : 'text-gray-600 hover:text-navy'
              }`}
            >
              Jak przetwarzamy dane
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-4 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === 'contact' 
                  ? 'text-navy border-b-2 border-navy bg-navy/5' 
                  : 'text-gray-600 hover:text-navy'
              }`}
            >
              Kontakt w sprawie danych
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'rights' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Twoje prawa według RODO</h2>
                
                <div className="grid gap-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-navy" />
                      Prawo dostępu do danych
                    </h3>
                    <p className="text-gray-600">
                      Masz prawo uzyskać informację o tym, czy przetwarzamy Twoje dane osobowe oraz 
                      otrzymać kopię tych danych wraz ze szczegółami dotyczącymi przetwarzania.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-navy" />
                      Prawo do sprostowania
                    </h3>
                    <p className="text-gray-600">
                      Możesz żądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych 
                      danych osobowych dotyczących Twojej osoby.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-navy" />
                      Prawo do usunięcia („prawo do bycia zapomnianym")
                    </h3>
                    <p className="text-gray-600">
                      W określonych przypadkach masz prawo żądać usunięcia swoich danych osobowych, 
                      np. gdy dane nie są już potrzebne do celów, w których zostały zebrane.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-navy" />
                      Prawo do ograniczenia przetwarzania
                    </h3>
                    <p className="text-gray-600">
                      Możesz żądać ograniczenia przetwarzania swoich danych osobowych w określonych 
                      sytuacjach, np. gdy kwestionujesz prawidłość danych.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Download className="w-5 h-5 text-navy" />
                      Prawo do przenoszenia danych
                    </h3>
                    <p className="text-gray-600">
                      Masz prawo otrzymać swoje dane osobowe w ustrukturyzowanym, powszechnie 
                      używanym formacie nadającym się do odczytu maszynowego.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-navy" />
                      Prawo sprzeciwu
                    </h3>
                    <p className="text-gray-600">
                      Możesz w dowolnym momencie wnieść sprzeciw wobec przetwarzania swoich danych 
                      osobowych w celach marketingu bezpośredniego.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'processing' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Jak przetwarzamy Twoje dane</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-3 text-blue-900">Cele przetwarzania</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Świadczenie usług analityki biznesowej</li>
                      <li>• Komunikacja w sprawach handlowych</li>
                      <li>• Marketing bezpośredni (za zgodą)</li>
                      <li>• Wypełnianie obowiązków prawnych</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-3 text-green-900">Podstawy prawne</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Zgoda (Art. 6 ust. 1 lit. a RODO)</li>
                      <li>• Wykonanie umowy (Art. 6 ust. 1 lit. b RODO)</li>
                      <li>• Prawnie uzasadniony interes (Art. 6 ust. 1 lit. f RODO)</li>
                      <li>• Obowiązek prawny (Art. 6 ust. 1 lit. c RODO)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-3 text-yellow-900">Okres przechowywania</h3>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• Dane kontraktowe: przez okres obowiązywania umowy + 6 lat</li>
                      <li>• Dane marketingowe: do momentu wycofania zgody</li>
                      <li>• Dane księgowe: 5 lat od końca roku podatkowego</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-3 text-purple-900">Bezpieczeństwo danych</h3>
                    <p className="text-purple-800">
                      Stosujemy odpowiednie środki techniczne i organizacyjne aby zapewnić 
                      bezpieczeństwo Twoich danych osobowych, w tym szyfrowanie, kontrolę dostępu 
                      i regularne audyty bezpieczeństwa.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt w sprawie ochrony danych</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-navy" />
                      Inspektor Ochrony Danych
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Email:</strong> iodo@selectcentre.pl</p>
                      <p><strong>Adres:</strong></p>
                      <p>SelectCentre Sp. z o.o.<br />
                      ul. Wiertnicza 89<br />
                      02-952 Warszawa</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-navy" />
                      Organ nadzorczy
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Prezes Urzędu Ochrony Danych Osobowych</strong></p>
                      <p>ul. Stawki 2<br />
                      00-193 Warszawa</p>
                      <p><strong>Tel:</strong> 22 531 03 00</p>
                      <p><strong>Email:</strong> kancelaria@uodo.gov.pl</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Jak złożyć wniosek?</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Wyślij email na adres iodo@selectcentre.pl</li>
                    <li>Podaj swoje imię, nazwisko i dane kontaktowe</li>
                    <li>Opisz szczegółowo swoją prośbę lub skargę</li>
                    <li>Dołącz kopię dokumentu tożsamości (w celu weryfikacji)</li>
                    <li>Odpowiemy w ciągu 30 dni od otrzymania wniosku</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-blue-800">
                    <strong>Ważne:</strong> Masz prawo wniesienia skargi do organu nadzorczego (UODO) 
                    jeśli uważasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Quick Actions - moved to bottom */}
        <motion.div variants={itemVariants} className="mt-12">
          <div 
            onClick={() => setIsOptOutModalOpen(true)}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all max-w-md mx-auto text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Zarządzaj zgodami</h3>
            <p className="text-gray-600 mb-4">Wycofaj zgodę na kontakt marketingowy</p>
            <button className="bg-navy text-white px-6 py-2 rounded-lg font-medium hover:bg-navy-light transition-colors">
              Otwórz formularz
            </button>
          </div>
        </motion.div>
      </motion.div>

      <OptOutModal 
        isOpen={isOptOutModalOpen} 
        onClose={() => setIsOptOutModalOpen(false)} 
      />
    </div>
  );
};

export default ConsumerZone;