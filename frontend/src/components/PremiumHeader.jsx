import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumHeader = ({ theme = 'purple' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const themes = {
    purple: {
      bg: 'bg-[#1a1a2e]',
      accent: 'text-purple-400',
      hover: 'hover:text-purple-400',
      button: 'bg-purple-600 hover:bg-purple-500'
    },
    teal: {
      bg: 'bg-[#0a2e2b]',
      accent: 'text-amber-400',
      hover: 'hover:text-amber-400',
      button: 'bg-teal-600 hover:bg-teal-500'
    }
  };

  const t = themes[theme];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Team', path: '/team' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? `${t.bg}/95 backdrop-blur-lg shadow-2xl` : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
                alt="Alfa Global Group"
                className="h-12 transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium text-white/80 ${t.hover} transition-colors relative group`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${theme === 'purple' ? 'bg-purple-400' : 'bg-amber-400'} transition-all group-hover:w-full`} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className={`px-6 py-2.5 ${t.button} text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={`fixed inset-0 z-40 ${t.bg} lg:hidden pt-24`}
          >
            <nav className="flex flex-col items-center space-y-6 p-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`text-xl text-white/80 ${t.hover} transition-colors`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className={`mt-6 px-8 py-3 ${t.button} text-white rounded-full`}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PremiumHeader;
