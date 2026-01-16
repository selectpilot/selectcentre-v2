import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import AboutSection from '../components/AboutSection';
import SocialProof from '../components/SocialProof';
import BusinessSection from '../components/BusinessSection';
import LeadMagnet from '../components/LeadMagnet';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetId) {
      // Small delay to ensure rendering is complete
      setTimeout(() => {
        const element = document.getElementById(location.state.targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <TrustSection />
      <AboutSection />
      <SocialProof />
      <BusinessSection />
      <LeadMagnet />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default Home;
