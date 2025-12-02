import React from 'react';
import { Link } from 'react-router-dom';

const ProfessionalFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
      {/* Elegant Top Border with Gold Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      
      {/* Professional Sleek Modern Skyline */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1920 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
          <defs>
            {/* Modern Glass Building Gradient */}
            <linearGradient id="glass1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="glass2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="glass3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.20" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
            </linearGradient>
            
            {/* Window Pattern */}
            <pattern id="windows" x="0" y="0" width="40" height="50" patternUnits="userSpaceOnUse">
              <rect x="8" y="8" width="12" height="16" fill="#D4AF37" opacity="0.3">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
              </rect>
              <rect x="24" y="8" width="12" height="16" fill="#D4AF37" opacity="0.25">
                <animate attributeName="opacity" values="0.15;0.5;0.15" dur="5s" repeatCount="indefinite" />
              </rect>
            </pattern>
            
            {/* Reflection Effect */}
            <linearGradient id="reflection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Building 1 - Minimalist Tower Left */}
          <g>
            <rect x="100" y="80" width="80" height="220" fill="url(#glass1)" />
            <rect x="100" y="80" width="80" height="220" fill="url(#windows)" opacity="0.6" />
            <line x1="140" y1="80" x2="140" y2="300" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
            {/* Crown */}
            <polygon points="100,80 140,60 180,80" fill="url(#glass1)" opacity="0.8" />
          </g>
          
          {/* Building 2 - Ultra Modern Sleek Tower */}
          <g>
            <rect x="250" y="40" width="100" height="260" fill="url(#glass2)" />
            <rect x="250" y="40" width="100" height="260" fill="url(#windows)" opacity="0.7" />
            {/* Glass Panels Effect */}
            <line x1="280" y1="40" x2="280" y2="300" stroke="#ffffff" strokeWidth="0.8" opacity="0.2" />
            <line x1="320" y1="40" x2="320" y2="300" stroke="#ffffff" strokeWidth="0.8" opacity="0.2" />
            {/* Modern Top */}
            <rect x="260" y="30" width="80" height="10" fill="url(#glass2)" opacity="0.9" />
            <rect x="270" y="20" width="60" height="10" fill="#D4AF37" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Building 3 - Contemporary Angular */}
          <g>
            <polygon points="420,120 520,100 520,300 420,300" fill="url(#glass1)" />
            <rect x="420" y="120" width="100" height="180" fill="url(#windows)" opacity="0.5" />
            {/* Edge Highlight */}
            <line x1="520" y1="100" x2="520" y2="300" stroke="#ffffff" strokeWidth="1" opacity="0.25" />
          </g>
          
          {/* Building 4 - Iconic Central Tower */}
          <g>
            <rect x="750" y="20" width="140" height="280" fill="url(#glass3)" />
            <rect x="750" y="20" width="140" height="280" fill="url(#windows)" opacity="0.8" />
            {/* Vertical Glass Sections */}
            <line x1="785" y1="20" x2="785" y2="300" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
            <line x1="820" y1="20" x2="820" y2="300" stroke="#ffffff" strokeWidth="1.5" opacity="0.25" />
            <line x1="855" y1="20" x2="855" y2="300" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
            {/* Crown Feature */}
            <rect x="770" y="5" width="100" height="15" fill="url(#glass3)" opacity="0.9" />
            <rect x="785" y="0" width="70" height="5" fill="#D4AF37" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
            </rect>
            {/* Penthouse Lights */}
            <rect x="780" y="40" width="20" height="25" fill="#D4AF37" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="845" y="40" width="20" height="25" fill="#D4AF37" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Building 5 - Modern Stepped Design */}
          <g>
            <rect x="1000" y="90" width="90" height="210" fill="url(#glass2)" />
            <rect x="1000" y="90" width="90" height="210" fill="url(#windows)" opacity="0.6" />
            <rect x="1010" y="70" width="70" height="20" fill="url(#glass2)" opacity="0.8" />
            <line x1="1045" y1="70" x2="1045" y2="300" stroke="#ffffff" strokeWidth="0.8" opacity="0.2" />
          </g>
          
          {/* Building 6 - Sleek Corporate Tower */}
          <g>
            <rect x="1200" y="60" width="95" height="240" fill="url(#glass1)" />
            <rect x="1200" y="60" width="95" height="240" fill="url(#windows)" opacity="0.65" />
            {/* Modern Top Section */}
            <polygon points="1200,60 1247.5,45 1295,60" fill="url(#glass1)" opacity="0.9" />
            <line x1="1247.5" y1="45" x2="1247.5" y2="300" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
          </g>
          
          {/* Building 7 - Contemporary Glass */}
          <g>
            <rect x="1400" y="100" width="85" height="200" fill="url(#glass2)" />
            <rect x="1400" y="100" width="85" height="200" fill="url(#windows)" opacity="0.6" />
            <line x1="1442.5" y1="100" x2="1442.5" y2="300" stroke="#ffffff" strokeWidth="0.8" opacity="0.18" />
          </g>
          
          {/* Building 8 - Minimalist Modern */}
          <g>
            <rect x="1580" y="110" width="75" height="190" fill="url(#glass1)" />
            <rect x="1580" y="110" width="75" height="190" fill="url(#windows)" opacity="0.55" />
          </g>
          
          {/* Building 9 - Elegant High-rise Right */}
          <g>
            <rect x="1720" y="70" width="90" height="230" fill="url(#glass3)" />
            <rect x="1720" y="70" width="90" height="230" fill="url(#windows)" opacity="0.7" />
            <line x1="1765" y1="70" x2="1765" y2="300" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
            {/* Top Feature */}
            <rect x="1735" y="60" width="60" height="10" fill="url(#glass3)" opacity="0.9" />
          </g>
          
          {/* Atmospheric Light Beams */}
          <line x1="820" y1="0" x2="820" y2="300" stroke="url(#reflection)" strokeWidth="80" opacity="0.15" />
          <line x1="1247" y1="45" x2="1247" y2="300" stroke="url(#reflection)" strokeWidth="60" opacity="0.12" />
          
          {/* Ambient Stars */}
          <circle cx="200" cy="100" r="2" fill="#D4AF37" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="80" r="2.5" fill="#D4AF37" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1150" cy="90" r="2" fill="#D4AF37" opacity="0.65">
            <animate attributeName="opacity" values="0.35;0.85;0.35" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1550" cy="120" r="2.5" fill="#D4AF37" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Subtle Ground Glow with Warm Tone */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-950/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Elegant Header */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-extralight tracking-wider mb-3 text-amber-50">Alfa Global Group</h3>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500/70 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className="h-14 mb-6 filter brightness-110 hover:brightness-125 transition-all duration-300"
            />
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              A diversified global organization committed to creating enduring value across industries and generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase mb-6 text-amber-500/90">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/team', label: 'Our Team' },
                { to: '/case-studies', label: 'Case Studies' },
                { to: '/careers', label: 'Careers' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase mb-6 text-amber-500/90">Resources</h3>
            <ul className="space-y-3">
              {[
                { to: '/insights', label: 'Insights' },
                { to: '/faq', label: 'FAQ' },
                { href: 'https://portal.alfaglobalgroup.com', label: 'Client Login Portal', external: true }
              ].map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.to} 
                      className="text-sm text-slate-300 hover:text-amber-400 transition-colors duration-300 font-light inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase mb-6 text-zinc-500">Contact</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="mailto:info@alfaglobalgroup.com" className="text-sm text-zinc-400 hover:text-white transition-colors font-light flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@alfaglobalgroup.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="text-sm text-zinc-400 hover:text-white transition-colors font-light flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors font-light flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Contact Form
                </Link>
              </li>
            </ul>
            
            {/* Minimalist Social Icons */}
            <div className="flex gap-3">
              {[
                'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
              ].map((icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 border border-zinc-800 hover:border-zinc-600 flex items-center justify-center transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-zinc-600 font-light">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 font-light">Website Powered by</span>
              <a
                href="https://techbook.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white font-normal transition-colors duration-300"
              >
                Techbook Technologies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;
