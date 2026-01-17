import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AlfaGlobalWealthAdvisorsPage = ({ theme = 'gold' }) => {
  const themes = {
    gold: { accentText: 'text-amber-600', accentBg: 'bg-amber-600', accentBgLight: 'bg-amber-50', accentBorder: 'border-amber-200', gradient: 'from-amber-600 to-amber-700', heroBg: 'from-slate-950 via-slate-900 to-slate-950', heroAccent: 'text-amber-400' },
    silver: { accentText: 'text-gray-700', accentBg: 'bg-gray-700', accentBgLight: 'bg-gray-100', accentBorder: 'border-gray-300', gradient: 'from-gray-700 to-gray-800', heroBg: 'from-gray-950 via-gray-900 to-gray-950', heroAccent: 'text-gray-300' },
    purple: { accentText: 'text-purple-600', accentBg: 'bg-purple-600', accentBgLight: 'bg-purple-50', accentBorder: 'border-purple-200', gradient: 'from-purple-600 to-purple-700', heroBg: 'from-purple-950 via-slate-950 to-purple-950', heroAccent: 'text-purple-400' },
    teal: { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' }
  };
  const t = themes[theme] || themes.gold;

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png" alt="Alfa Global Wealth Advisors" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Global Wealth Advisors</motion.h1>
          <p className="text-white/60 text-lg">Private Limited</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/wealth-advisory.png" alt="Wealth Advisory" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>The Wealth Arm of Alfa Global Group</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Comprehensive Wealth Advisory</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Alfa Global Wealth Advisors Private Limited is the flagship advisory arm of Alfa Global Group of Companies, providing a comprehensive range of financial and strategic services including wealth management, investment advisory, structuring, business consulting, and capital solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With deep expertise in the capital markets and a client centric approach, the company empowers HNIs, family offices, and enterprises with tailored financial strategies. From personalized portfolio management, investment planning, and risk mitigation to structuring, succession planning, and institutional solutions, we deliver end to end financial guidance that helps clients preserve, grow, and transition their wealth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Beyond individual wealth management, Alfa Global Wealth Advisors also serves organizations and entrepreneurs through business consulting, financial structuring, and capital solutions, helping them unlock growth opportunities, optimize operations, and access the right capital at the right time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At its core, Alfa Global Wealth Advisors is built on trust, transparency, and excellence. Operating within a well regulated framework, the company embraces the highest standards of compliance and governance, providing clients with the confidence to entrust their financial future to a trusted partner.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Incorporated under the Companies Act, 2013, the company is registered with the Ministry of Corporate Affairs and continues to uphold both regulatory compliance and operational integrity.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}>
            Get in Touch <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlfaGlobalWealthAdvisorsPage;
