import React from 'react';
import { motion } from 'framer-motion';

const AlfaZillionTradersPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const offerings = [
    {
      title: 'Fund Management',
      desc: 'We manage bespoke investment vehicles across asset classes, tailoring portfolios to align with each client\'s unique objectives, risk appetite, and time horizon.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      title: 'Investment Consulting',
      desc: 'Our advisory team delivers deep market insights and strategic guidance, helping clients navigate complex market cycles and unlock high conviction opportunities across both public and private markets.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      title: 'Sophisticated Financial Structuring',
      desc: 'We design and implement custom structures across equity, debt, derivatives, and alternatives to enhance tax efficiency, improve liquidity, and unlock new layers of portfolio performance.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
      title: 'Enhanced Enhancement Portfolios',
      desc: 'Our proprietary strategy uses a client\'s existing investments as underlying assets to create additional alpha through overlays such as tactical derivatives, structured notes, or asset linked enhancements without altering the core portfolio. Ideal for clients seeking incremental returns from static or underutilized holdings.',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    }
  ];

  const whoWeServe = [
    'High Net Worth & Ultra High Net Worth Individuals (HNIs & UHNIs)',
    'Family Offices',
    'Business Owners & Entrepreneurs',
    'Corporates (Listed & Unlisted)',
    'Institutions & Investment Bodies'
  ];

  const whyAlfaZillion = [
    'Bespoke Advisory with a Partner First Mindset',
    'Absolute Alignment with Client Growth',
    'Discretion, Transparency & Long Term Trust',
    'Resilient, Technology Enabled Solutions Across Market Cycles'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-zillion-png.png" alt="Alfa Zillion Traders" className="h-20 w-auto mx-auto mb-6 rounded-lg bg-white/90 p-2" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Zillion Traders</motion.h1>
          <p className="text-white/80 text-lg mb-8">Partnering Growth. Engineering Alpha.</p>
          <a 
            href="https://alfazillion.com/" 
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
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/partnering-growth.png" alt="Partnering Growth" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>SEBI Aligned Multi-Disciplinary Platform</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">About Alfa Zillion Traders</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Zillion Traders is a SEBI aligned, multi disciplinary investment platform built exclusively for high net worth and ultra high net worth individuals, family offices, institutions, and corporates seeking superior investment outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Established under the Limited Liability Partnership Act, 2008, Alfa Zillion operates at the intersection of financial expertise and technological intelligence, offering curated opportunities designed to generate sustainable alpha in any market environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Investment Philosophy</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">
              With a singular focus on alpha creation, Alfa Zillion operates as both a designated partner and trusted advisor to select clients with investable assets of ₹5 crore and above.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              We do not merely deploy capital – we design intelligent frameworks that amplify its potential through disciplined structuring, risk aware strategies, and market responsive execution. Every partner's mandate is actively managed with the intent to outperform benchmarks and preserve capital.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className={`w-12 h-12 ${t.accentBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Serve</h2>
              <p className="text-gray-600 mb-6 text-justify">
                We exclusively work with partners who maintain ideal investable assets of ₹5 crore and above, enabling a high-touch model and fully customized, performance aligned strategies.
              </p>
              <ul className="space-y-4">
                {whoWeServe.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.pexels.com/photos/7580643/pexels-photo-7580643.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Investment Partners" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Alfa Zillion Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Alfa Zillion</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {whyAlfaZillion.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl">
                <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify text-lg">
              At Alfa Zillion, we don't just manage wealth – we co create legacies, ensuring your capital works intelligently, consistently, and purposefully in your favor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaZillionTradersPage;
