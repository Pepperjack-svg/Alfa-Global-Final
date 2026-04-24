import React from 'react';
import { Link } from 'react-router-dom';

const UltraFooter = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = {
      accent: 'text-teal-400',
      accentHover: 'hover:text-teal-300',
      button: 'bg-teal-600 hover:bg-teal-500',
      border: 'border-teal-500/20',
      logoColor: '#2dd4bf'
    };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Strategy', path: '/strategy' },
    { label: 'Global Access', path: '/global-access' },
    { label: 'Contact', path: '/contact' }
  ];

  const companies = [
    { label: 'Alfa Global Wealth Advisors', path: '/alfa-global-wealth-advisors' },
    { label: 'Alfa Star Dynamics', path: '/alfa-star-dynamics' },
    { label: 'Alfa Zillion Traders', path: '/alfa-zillion-traders' },
    { label: 'Gazillion Capital', path: '/gazillion-capital' },
    { label: 'MK Dairy Farms', path: '/mk-dairy-farms' },
    { label: 'Cyberhakz', path: '/cyberhakz' },
    { label: 'Dhanveir Groups Shipping', path: '/dhanveir-groups-shipping' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png" alt="Alfa Global Group" className="h-12 w-auto mb-4" />
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

          {/* Companies */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Our Companies</h4>
            <ul className="space-y-3">
              {companies.map((company) => (
                <li key={company.path}>
                  <Link
                    to={company.path}
                    className={`text-gray-400 text-sm ${t.accentHover} transition-colors`}
                  >
                    {company.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-4`}>Office</h4>
            <div className="text-gray-400 text-sm">
              <p className="text-white font-medium mb-2">Chennai (HQ)</p>
              <p>No. 6/8, Second Floor, Lakshmi Nagar, 10th Street, Nanganallur, Chennai - 600 061.</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm mb-2">Contact Us</p>
              <p className="text-white text-sm">+91 44-2224-2929</p>
              <p className="text-white text-sm">+91 73580-65999</p>
              <p className={`${t.accent} text-sm mt-1`}>contact@alfaglobalwealth.com</p>
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
            <div className="flex flex-col items-center sm:items-end gap-2">
              <a 
                href="https://techbook.co.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span>Website Powered by</span>
                <span className="font-semibold text-teal-400">Techbook Technologies</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;
