import React from 'react';
import { Link } from 'react-router-dom';

const LuxuryFooter = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      {/* Sophisticated Architectural Skyline Design */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1400 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Detailed Building Skyline */}
          <g className="buildings">
            {/* Building 1 - Tall */}
            <path d="M0 500V150L50 130V500H0Z" fill="white" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
            </path>
            <rect x="10" y="160" width="8" height="8" fill="#D4AF37" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="25" y="160" width="8" height="8" fill="#D4AF37" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 2 - Medium */}
            <path d="M50 500V200L120 180V500H50Z" fill="white" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="5s" repeatCount="indefinite" />
            </path>
            <rect x="65" y="220" width="10" height="10" fill="#D4AF37" opacity="0.5">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 3 - Very Tall */}
            <path d="M120 500V80L190 60V500H120Z" fill="white" opacity="0.9">
              <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
            </path>
            <rect x="140" y="100" width="12" height="12" fill="#D4AF37" opacity="0.7">
              <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 4 - Short Wide */}
            <path d="M190 500V300L280 280V500H190Z" fill="white" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4.5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 5 - Tall Slim */}
            <path d="M280 500V120L340 100V500H280Z" fill="white" opacity="0.85">
              <animate attributeName="opacity" values="0.85;1;0.85" dur="3.5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 6 - Medium */}
            <path d="M340 500V220L420 200V500H340Z" fill="white" opacity="0.75">
              <animate attributeName="opacity" values="0.75;0.95;0.75" dur="4s" repeatCount="indefinite" />
            </path>
            
            {/* Building 7 - Very Tall Center */}
            <path d="M420 500V50L500 30V500H420Z" fill="white" opacity="1">
              <animate attributeName="opacity" values="1;0.9;1" dur="2.5s" repeatCount="indefinite" />
            </path>
            <rect x="445" y="80" width="15" height="15" fill="#D4AF37" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 8 - Medium Tall */}
            <path d="M500 500V180L580 160V500H500Z" fill="white" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
            </path>
            
            {/* Building 9 - Short */}
            <path d="M580 500V320L660 300V500H580Z" fill="white" opacity="0.65">
              <animate attributeName="opacity" values="0.65;0.85;0.65" dur="5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 10 - Tall */}
            <path d="M660 500V100L730 80V500H660Z" fill="white" opacity="0.9">
              <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
            </path>
            
            {/* Building 11 - Medium */}
            <path d="M730 500V240L810 220V500H730Z" fill="white" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="4.5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 12 - Tall Slim */}
            <path d="M810 500V140L880 120V500H810Z" fill="white" opacity="0.85">
              <animate attributeName="opacity" values="0.85;1;0.85" dur="3.5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 13 - Very Short */}
            <path d="M880 500V360L960 340V500H880Z" fill="white" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.8;0.6" dur="5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 14 - Tall */}
            <path d="M960 500V110L1040 90V500H960Z" fill="white" opacity="0.88">
              <animate attributeName="opacity" values="0.88;1;0.88" dur="3s" repeatCount="indefinite" />
            </path>
            
            {/* Building 15 - Medium */}
            <path d="M1040 500V260L1120 240V500H1040Z" fill="white" opacity="0.75">
              <animate attributeName="opacity" values="0.75;0.95;0.75" dur="4s" repeatCount="indefinite" />
            </path>
            
            {/* Building 16 - Very Tall */}
            <path d="M1120 500V70L1200 50V500H1120Z" fill="white" opacity="0.95">
              <animate attributeName="opacity" values="0.95;1;0.95" dur="2.5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 17 - Short */}
            <path d="M1200 500V310L1280 290V500H1200Z" fill="white" opacity="0.65">
              <animate attributeName="opacity" values="0.65;0.85;0.65" dur="4.5s" repeatCount="indefinite" />
            </path>
            
            {/* Building 18 - Tall */}
            <path d="M1280 500V130L1400 110V500H1280Z" fill="white" opacity="0.8">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="3.5s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Stars/Lights Effect */}
          <circle cx="100" cy="120" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="80" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="150" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="100" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="130" r="2" fill="#D4AF37">
            <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <div className="animate-fade-in">
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className="h-14 mb-6 filter brightness-110"
            />
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              A diversified global organization committed to creating enduring value across industries and generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/insights" className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://portal.alfaglobalgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                  Client Login Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-white">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-gray-400 font-light">
                <a href="mailto:info@alfaglobalgroup.com" className="hover:text-white transition-colors">
                  info@alfaglobalgroup.com
                </a>
              </li>
              <li className="text-sm text-gray-400 font-light">
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  Contact Form
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Enhanced Line */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse" />
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 font-light">
              Website Powered by{' '}
              <a
                href="https://techbook.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-normal transition-all duration-300 hover:text-gray-300"
              >
                Techbook Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;