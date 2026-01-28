import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const UltraHeader = ({ theme = 'teal' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Teal theme configuration
  const t = { accent: 'text-teal-600', accentHover: 'hover:text-teal-700', button: 'bg-teal-600 hover:bg-teal-700', border: 'border-teal-200', gradient: 'from-teal-50 to-white', logoColor: '#0d9488', underline: 'bg-teal-500' };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Strategy', path: '/strategy' },
    { label: 'Global Access', path: '/global-access' },
    { label: 'Team', path: '/team' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' }
  ];

  const companyDropdown = [
    { label: 'Alfa Global Wealth Advisors', path: '/alfa-global-wealth-advisors' },
    { label: 'Alfa Star Dynamics', path: '/alfa-star-dynamics' },
    { label: 'Alfa Zillion Traders', path: '/alfa-zillion-traders' },
    { label: 'Gazillion Capital', path: '/gazillion-capital' },
    { label: 'MK Dairy Farms', path: '/mk-dairy-farms' },
    { label: 'Cyberhakz', path: '/cyberhakz' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5' : 'bg-white/80 backdrop-blur-sm'
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
              <img 
                src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png" 
                alt="Alfa Global Group" 
                className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.slice(0, 2).map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-sm font-medium ${
                    location.pathname === item.path ? t.accent + ' font-semibold' : 'text-gray-700 ' + t.accentHover
                  } transition-colors relative group`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 ${t.underline} transition-all ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}

              {/* Dropdown for Alfa Global Group */}
              <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className={`text-sm font-medium text-gray-700 ${t.accentHover} transition-colors flex items-center gap-1`}>
                  Alfa Global Group
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {companyDropdown.map((company, i) => (
                        <Link
                          key={i}
                          to={company.path}
                          className={`block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 ${t.accentHover} transition-colors`}
                        >
                          {company.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.slice(2).map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-sm font-medium ${
                    location.pathname === item.path ? t.accent + ' font-semibold' : 'text-gray-700 ' + t.accentHover
                  } transition-colors relative group`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 ${t.underline} transition-all ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className={`px-6 py-2.5 ${t.button} text-white text-sm font-medium rounded-full transition-all hover:shadow-lg`}
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
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="pt-24 px-6 pb-8">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`text-lg font-medium py-2 ${
                      location.pathname === item.path ? t.accent : 'text-gray-700'
                    } transition-colors border-b border-gray-100`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Dropdown */}
                <div className="py-2 border-b border-gray-100">
                  <p className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-3`}>Alfa Global Group</p>
                  <div className="space-y-2 pl-4">
                    {companyDropdown.map((company, i) => (
                      <Link
                        key={i}
                        to={company.path}
                        className="block text-gray-600 hover:text-gray-900 py-1 text-sm"
                      >
                        {company.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`mt-4 px-8 py-3 ${t.button} text-white rounded-full font-medium text-center`}
                >
                  Get Started
                </Link>
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="mt-8 text-center text-sm text-gray-500 space-y-2">
                <p>+91 44-2224-2929</p>
                <p>contact@alfaglobalwealth.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraHeader;
