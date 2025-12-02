import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LuxuryHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Services
            </Link>
            <Link
              to="/team"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Team
            </Link>
            <Link
              to="/insights"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Insights
            </Link>
            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-200'
              }`}
            >
              Case Studies
            </Link>
            <a
              href="https://portal.alfaglobalgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 text-sm font-medium border transition-colors ${
                isScrolled
                  ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Client Login Portal
            </a>
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
          <nav className="lg:hidden mt-4 py-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/about"
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/team"
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/insights"
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                to="/case-studies"
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <a
                href="https://portal.alfaglobalgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
              >
                Client Login Portal
              </a>
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default LuxuryHeader;