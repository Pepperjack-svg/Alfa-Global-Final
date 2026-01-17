import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AlfaGlobalWealthAdvisorsPage = ({ theme = 'gold' }) => {
  const themes = {
    gold: { accentText: 'text-amber-600', accentBg: 'bg-amber-600', accentBgLight: 'bg-amber-50', accentBorder: 'border-amber-200', gradient: 'from-amber-600 to-amber-700', heroBg: 'from-slate-950 via-slate-900 to-slate-950', heroAccent: 'text-amber-400', accentHover: 'hover:bg-amber-700' },
    silver: { accentText: 'text-gray-700', accentBg: 'bg-gray-700', accentBgLight: 'bg-gray-100', accentBorder: 'border-gray-300', gradient: 'from-gray-700 to-gray-800', heroBg: 'from-gray-950 via-gray-900 to-gray-950', heroAccent: 'text-gray-300', accentHover: 'hover:bg-gray-800' },
    purple: { accentText: 'text-purple-600', accentBg: 'bg-purple-600', accentBgLight: 'bg-purple-50', accentBorder: 'border-purple-200', gradient: 'from-purple-600 to-purple-700', heroBg: 'from-purple-950 via-slate-950 to-purple-950', heroAccent: 'text-purple-400', accentHover: 'hover:bg-purple-700' },
    teal: { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400', accentHover: 'hover:bg-teal-700' }
  };
  const t = themes[theme] || themes.gold;

  const services = [
    { title: 'Wealth Management', desc: 'Comprehensive portfolio management tailored to your financial goals and risk appetite.' },
    { title: 'Investment Advisory', desc: 'Expert guidance on investment strategies across asset classes for optimal returns.' },
    { title: 'Financial Structuring', desc: 'Strategic structuring solutions for tax efficiency and wealth preservation.' },
    { title: 'Business Consulting', desc: 'End-to-end business consulting for enterprises seeking growth and optimization.' },
    { title: 'Capital Solutions', desc: 'Access to capital markets and funding solutions for businesses and HNIs.' },
    { title: 'Succession Planning', desc: 'Seamless wealth transition and legacy planning for multi-generational families.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png" alt="Alfa Global Wealth Advisors" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Global Wealth Advisors</motion.h1>
          <p className="text-white/60 text-lg mb-8">Private Limited</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className={`inline-flex items-center justify-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg ${t.accentHover} transition-all`}>
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzY4NjU3MzE1fDA&ixlib=rb-4.1.0&q=85" alt="Wealth Advisory" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>The Wealth Arm of Alfa Global Group</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Comprehensive Wealth Advisory</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Alfa Global Wealth Advisors Private Limited is the flagship advisory arm of Alfa Global Group of Companies, providing a comprehensive range of financial and strategic services including wealth management, investment advisory, structuring, business consulting, and capital solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With deep expertise in the capital markets and a client centric approach, the company empowers HNIs, family offices, and enterprises with tailored financial strategies. From personalized portfolio management, investment planning, and risk mitigation to structuring, succession planning, and institutional solutions, we deliver end to end financial guidance.
              </p>
              <Link to="/contact" className={`inline-flex items-center gap-2 ${t.accentText} font-semibold hover:gap-3 transition-all`}>
                Talk to an Advisor <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive wealth solutions tailored for high net worth individuals and institutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${t.accentBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Compliance & Governance</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At its core, Alfa Global Wealth Advisors is built on trust, transparency, and excellence. Operating within a well regulated framework, the company embraces the highest standards of compliance and governance, providing clients with the confidence to entrust their financial future to a trusted partner.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Incorporated under the Companies Act, 2013, the company is registered with the Ministry of Corporate Affairs and continues to uphold both regulatory compliance and operational integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className={`px-4 py-2 ${t.accentBgLight} ${t.accentText} rounded-full text-sm font-medium`}>SEBI Registered</span>
                <span className={`px-4 py-2 ${t.accentBgLight} ${t.accentText} rounded-full text-sm font-medium`}>MCA Compliant</span>
                <span className={`px-4 py-2 ${t.accentBgLight} ${t.accentText} rounded-full text-sm font-medium`}>ISO Certified</span>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1642522029686-5485ea7e6042?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzY4NjU3MzE1fDA&ixlib=rb-4.1.0&q=85" alt="Regulatory Compliance" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-24 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Grow Your Wealth?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Partner with Alfa Global Wealth Advisors and unlock tailored financial solutions designed to preserve, grow, and transition your wealth across generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <a href="tel:+914422242929" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaGlobalWealthAdvisorsPage;
