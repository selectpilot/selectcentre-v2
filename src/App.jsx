import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// import Analytics from './components/Analytics';
// import PerformanceMonitor from './components/PerformanceMonitor';
// import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import ConsumerZone from './pages/ConsumerZone';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Partnerzy from './pages/Partnerzy';
import KlauzulaInformacyjna from './pages/KlauzulaInformacyjna';

function App() {
  return (
    // <ErrorBoundary>
      <Router>
        {/* <Analytics /> */}
        {/* <PerformanceMonitor /> */}
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/strefa-konsumenta" element={<ConsumerZone />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/klauzula-informacyjna" element={<KlauzulaInformacyjna />} />
              <Route path="/regulamin" element={<TermsOfService />} />
              <Route path="/partnerzy" element={<Partnerzy />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    // </ErrorBoundary>
  );
}

export default App;
