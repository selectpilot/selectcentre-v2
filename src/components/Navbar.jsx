import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { targetId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-navy tracking-tight">SelectCentre</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScroll('about-company')} className="text-gray-600 hover:text-navy transition-colors font-medium">O firmie</button>
            <button onClick={() => handleScroll('business')} className="text-gray-600 hover:text-navy transition-colors font-medium">Dla Biznesu</button>
            <button onClick={() => handleScroll('contact')} className="text-gray-600 hover:text-navy transition-colors font-medium">Kontakt</button>
            <Link 
              to="/strefa-konsumenta"
              onClick={() => setIsOpen(false)}
              className="bg-navy text-white px-6 py-2.5 rounded-lg font-medium hover:bg-navy-light transition-colors flex items-center gap-2 shadow-lg shadow-navy/20"
            >
              <ShieldCheck size={18} />
              STREFA KONSUMENTA / RODO
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-navy">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl"
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button onClick={() => handleScroll('about')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-navy hover:bg-gray-50 rounded-md font-medium">O firmie</button>
            <button onClick={() => handleScroll('business')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-navy hover:bg-gray-50 rounded-md font-medium">Dla Biznesu</button>
            <button onClick={() => handleScroll('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-navy hover:bg-gray-50 rounded-md font-medium">Kontakt</button>
            <Link 
               to="/strefa-konsumenta"
               onClick={() => setIsOpen(false)}
               className="w-full text-left px-3 py-3 text-white font-medium bg-navy rounded-md flex items-center gap-2 mt-4 justify-center"
            >
              <ShieldCheck size={18} />
              STREFA KONSUMENTA / RODO
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
