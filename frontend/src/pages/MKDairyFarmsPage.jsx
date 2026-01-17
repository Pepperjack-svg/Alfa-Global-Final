import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MKDairyFarmsPage = ({ theme = 'gold' }) => {
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/mk-dailry-farms-logo.png" alt="MK Dairy Farms" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">MK Dairy Farms</motion.h1>
          <p className="text-white/60 text-lg">Private Limited</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/mk-dailry-farms.png" alt="MK Dairy Farms" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Bringing Nature's Best to Your Table</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Agriculture & Natural Resources</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MK Dairy Farms Private Limited is the agriculture and natural resources arm of Alfa Global Group of Companies. We specialize in distribution, sourcing, and supply chain solutions for dairy, natural resources, and agricultural products.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through sustainable practices and modern logistics, MK Dairy Farms ensures quality, freshness, and reliability for our partners, suppliers, and end consumers while supporting agricultural communities and promoting healthier lifestyles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to bring nature's best to every table, responsibly and sustainably. We connect farms to markets, ensuring quality produce reaches consumers while supporting rural economies and promoting healthier lifestyles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <svg className={`w-12 h-12 ${t.accentText} mx-auto mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainable Practices</h3>
              <p className="text-gray-600 text-sm">Committed to environmentally friendly farming and distribution methods.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <svg className={`w-12 h-12 ${t.accentText} mx-auto mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">Rigorous quality control from farm to table.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <svg className={`w-12 h-12 ${t.accentText} mx-auto mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm">Supporting agricultural communities and rural economies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-4">Our Promise</h2>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
              Through sustainable practices and modern logistics, MK Dairy Farms ensures quality, freshness, and reliability for our partners, suppliers, and end consumers while supporting agricultural communities and promoting healthier lifestyles while supporting the agricultural and natural resource economy.
            </p>
          </div>
        </div>
      </section>

      <section className={`py-16 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}>
            Partner With Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MKDairyFarmsPage;
