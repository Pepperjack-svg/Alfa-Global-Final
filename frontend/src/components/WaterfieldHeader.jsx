import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WaterfieldHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors">
              Our Services
            </Link>
            <Link to="/team" className="text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors">
              Leadership
            </Link>
            <Link to="/insights" className="text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors">
              Insights
            </Link>
            <Link to="/case-studies" className="text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors">
              Case Studies
            </Link>
            <a
              href="https://portal.alfaglobalgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors"
            >
              Client Portal
            </a>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-colors rounded"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/about" className="text-sm font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/services" className="text-sm font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
              <Link to="/team" className="text-sm font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Leadership</Link>
              <Link to="/insights" className="text-sm font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
              <Link to="/case-studies" className="text-sm font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
              <a href="https://portal.alfaglobalgroup.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700">Client Portal</a>
              <Link to="/contact" className="inline-block px-6 py-2.5 bg-teal-700 text-white text-sm font-medium text-center rounded" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default WaterfieldHeader;