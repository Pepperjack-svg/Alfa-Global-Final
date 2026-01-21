import React from 'react';
import { motion } from 'framer-motion';

const AlfaGlobalWealthAdvisorsPage = ({ theme = 'gold' }) => {
  const themes = {
    gold: { accentText: 'text-amber-600', accentBg: 'bg-amber-600', accentBgLight: 'bg-amber-50', gradient: 'from-amber-600 to-amber-700', heroBg: 'from-slate-950 via-slate-900 to-slate-950', accentHover: 'hover:bg-amber-700' },
    silver: { accentText: 'text-gray-700', accentBg: 'bg-gray-700', accentBgLight: 'bg-gray-100', gradient: 'from-gray-700 to-gray-800', heroBg: 'from-gray-950 via-gray-900 to-gray-950', accentHover: 'hover:bg-gray-800' },
    purple: { accentText: 'text-purple-600', accentBg: 'bg-purple-600', accentBgLight: 'bg-purple-50', gradient: 'from-purple-600 to-purple-700', heroBg: 'from-purple-950 via-slate-950 to-purple-950', accentHover: 'hover:bg-purple-700' },
    teal: { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' }
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
      {/* Hero Section with Transparency Effect */}
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg} overflow-hidden`}>
        {/* Transparent Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
            backgroundSize: '200% 200%',
          }}></div>
        </div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png" alt="Alfa Global Wealth Advisors" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Global Wealth Advisors</motion.h1>
          <p className="text-white/60 text-lg mb-8"></p>
          <a 
            href="https://alfaglobalwealth.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg ${t.accentHover} transition-all`}
            data-testid="find-out-more-cta"
          >
            Find out More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.pexels.com/photos/7580643/pexels-photo-7580643.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Wealth Advisory" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>The Wealth Arm of Alfa Global Group</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Comprehensive Wealth Advisory</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Alfa Global Wealth Advisors Private Limited is the flagship advisory arm of Alfa Global Group of Companies, providing a comprehensive range of financial and strategic services including wealth management, investment advisory, structuring, business consulting, and capital solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With deep expertise in the capital markets and a client centric approach, the company empowers HNIs, family offices, and enterprises with tailored financial strategies. From personalized portfolio management, investment planning, and risk mitigation to structuring, succession planning, and institutional solutions, we deliver end to end financial guidance.
              </p>
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
    </div>
  );
};

export default AlfaGlobalWealthAdvisorsPage;
