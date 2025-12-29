import React from 'react';
import { Link } from 'react-router-dom';

const UltraFooter = ({ theme = 'gold' }) => {
  const themes = {
    gold: {
      accent: 'text-amber-500',
      accentHover: 'hover:text-amber-400',
      button: 'bg-amber-600 hover:bg-amber-500',
      border: 'border-amber-500/20',
      logoColor: '#f59e0b'
    },
    silver: {
      accent: 'text-gray-400',
      accentHover: 'hover:text-gray-300',
      button: 'bg-gray-600 hover:bg-gray-500',
      border: 'border-gray-600',
      logoColor: '#9ca3af'
    },
    purple: {
      accent: 'text-purple-400',
      accentHover: 'hover:text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-500',
      border: 'border-purple-500/20',
      logoColor: '#a855f7'
    },
    teal: {
      accent: 'text-teal-400',
      accentHover: 'hover:text-teal-300',
      button: 'bg-teal-600 hover:bg-teal-500',
      border: 'border-teal-500/20',
      logoColor: '#2dd4bf'
    }
  };

  const t = themes[theme] || themes.gold;

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Team', path: '/team' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Alternative Investments',
    'Strategic Ventures',
    'High-Impact Projects',
    'Global Advisory',
    'Family Office'
  ];

  const offices = [
    { city: 'Mumbai', type: 'HQ' },
    { city: 'GIFT City', type: 'IFSC' },
    { city: 'Delhi NCR', type: 'North' },
    { city: 'Bengaluru', type: 'South' }
  ];

  // SVG Logo Component
  const LogoSVG = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 5)">
        <path d="M20 0L40 35H0L20 0Z" fill={t.logoColor} opacity="0.9"/>
        <path d="M20 8L32 30H8L20 8Z" fill="white" opacity="0.2"/>
        <circle cx="20" cy="18" r="4" fill="white" opacity="0.6"/>
      </g>
      <text x="50" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill={t.logoColor}>ALFA</text>
      <text x="50" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontSize="12" fontWeight="500" fill="#9ca3af" letterSpacing="0.1em">GLOBAL GROUP</text>
    </svg>
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoSVG className="h-12 w-auto mb-4" />
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              A diversified global organization driven by vision, innovation, and impact. Building wealth and creating legacies across generations.
            </p>
            <div className="flex gap-3">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${t.accentHover} transition-colors`}
                >
                  {social === 'linkedin' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-gray-400 text-sm ${t.accentHover} transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className={`text-gray-400 text-sm ${t.accentHover} transition-colors`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Offices</h4>
            <ul className="space-y-3">
              {offices.map((office) => (
                <li key={office.city} className="text-gray-400 text-sm">
                  <span className="text-white font-medium">{office.city}</span>
                  <span className="text-gray-500 ml-2">({office.type})</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-2">Contact Us</p>
              <p className="text-white text-sm">+91-22-6621-0700</p>
              <p className={`${t.accent} text-sm`}>info@alfaglobalgroup.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <span className="text-gray-500">SEBI Registered</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500">IFSCA Compliant</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;
