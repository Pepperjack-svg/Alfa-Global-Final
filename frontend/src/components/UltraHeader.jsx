import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const UltraHeader = ({ theme = 'gold' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const themes = {
    gold: {
      accent: 'text-amber-600',
      accentHover: 'hover:text-amber-700',
      button: 'bg-amber-600 hover:bg-amber-700',
      border: 'border-amber-200',
      gradient: 'from-amber-50 to-white',
      logoColor: '#d97706',
      underline: 'bg-amber-500'
    },
    silver: {
      accent: 'text-gray-600',
      accentHover: 'hover:text-gray-800',
      button: 'bg-gray-700 hover:bg-gray-800',
      border: 'border-gray-200',
      gradient: 'from-gray-50 to-white',
      logoColor: '#374151',
      underline: 'bg-gray-500'
    },
    purple: {
      accent: 'text-purple-600',
      accentHover: 'hover:text-purple-700',
      button: 'bg-purple-600 hover:bg-purple-700',
      border: 'border-purple-200',
      gradient: 'from-purple-50 to-white',
      logoColor: '#9333ea',
      underline: 'bg-purple-500'
    },
    teal: {
      accent: 'text-teal-600',
      accentHover: 'hover:text-teal-700',
      button: 'bg-teal-600 hover:bg-teal-700',
      border: 'border-teal-200',
      gradient: 'from-teal-50 to-white',
      logoColor: '#0d9488',
      underline: 'bg-teal-500'
    }
  };

  const t = themes[theme] || themes.gold;

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

  // SVG Logo Component - Inline for reliability
  const LogoSVG = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Geometric Icon */}
      <g transform="translate(0, 5)">
        <path d="M20 0L40 35H0L20 0Z" fill={t.logoColor} opacity="0.9"/>
        <path d="M20 8L32 30H8L20 8Z" fill="white" opacity="0.3"/>
        <circle cx="20" cy="18" r="4" fill="white" opacity="0.8"/>
      </g>
      {/* Text */}
      <text x="50" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill={t.logoColor}>ALFA</text>
      <text x="50" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="500" fill="#6b7280" letterSpacing="0.1em">GLOBAL GROUP</text>
    </svg>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        {/* Top Bar */}
        <div className={`hidden lg:block border-b ${t.border} bg-gradient-to-r ${t.gradient}`}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-2">
            <div className="flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 44-2224-2929
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@alfaglobalwealth.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SEBI Registered
                </span>
                <span>•</span>
                <span>IFSCA Compliant</span>
                <span>•</span>
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <LogoSVG className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium ${
                      location.pathname === item.path 
                        ? t.accent + ' font-semibold' 
                        : 'text-gray-700 ' + t.accentHover
                    } transition-colors relative group`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 ${t.underline} transition-all ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://portal.alfaglobalgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium ${t.accent} ${t.accentHover} transition-colors flex items-center gap-1`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Client Portal
              </a>
              <Link
                to="/contact"
                className={`px-6 py-2.5 ${t.button} text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-${theme === 'gold' ? 'amber' : 'gray'}-500/25`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-24 px-6">
              {/* Mobile Logo */}
              <div className="flex justify-center mb-8">
                <LogoSVG className="h-12 w-auto" />
              </div>
              
              <nav className="flex flex-col items-center space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-xl font-medium ${
                        location.pathname === item.path 
                          ? t.accent 
                          : 'text-gray-700 ' + t.accentHover
                      } transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/contact"
                  className={`mt-6 px-8 py-3 ${t.button} text-white rounded-full font-medium`}
                >
                  Get Started
                </Link>
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="mt-12 text-center text-sm text-gray-500 space-y-2">
                <p>+91-22-6621-0700</p>
                <p>info@alfaglobalgroup.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraHeader;
