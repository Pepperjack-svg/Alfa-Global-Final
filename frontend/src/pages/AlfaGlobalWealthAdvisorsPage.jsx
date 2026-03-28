import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AlfaGlobalWealthAdvisorsPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const [calculatorValues, setCalculatorValues] = useState({ amount: 1000000, years: 10, rate: 12 });

  const calculateReturns = () => {
    const { amount, years, rate } = calculatorValues;
    return Math.round(amount * Math.pow(1 + rate / 100, years));
  };

  const coreOfferings = [
    { title: 'Wealth Creation & Management', desc: 'Comprehensive portfolio management and wealth building strategies tailored to your financial goals.' },
    { title: 'Business Advisory & Fund-Raising', desc: 'Strategic guidance and capital solutions for businesses seeking growth and expansion.' },
    { title: 'Technology Implementation', desc: 'Cutting-edge technology solutions to enhance operational efficiency and client experience.' },
    { title: 'Governance, Risk Management & Compliance (GRC) Advisory', desc: 'Expert advisory on governance structures, risk frameworks, SOPs, and compliance processes.' },
    { title: 'Assurance Services', desc: 'Audits and internal reviews to ensure operational integrity and regulatory compliance.' },
    { title: 'Internal Control over Financial Reporting Framework (ICOFR)', desc: 'Robust frameworks for financial reporting controls and oversight.' }
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-advisor-logo.png" alt="Alfa Global Wealth Advisors" className="h-20 w-auto mx-auto mb-6" />
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
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/30ee92d8fd38e4ef1cd802b9be5472be1101dbb720790cb5a829cc8f6e3da856.png" alt="Alfa Global Wealth Advisors" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Over a Decade of Experience</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Alfa Global Wealth Advisors</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Global Wealth Advisors is a leading financial services firm with over a decade of experience across capital markets, credit, asset and portfolio management, wealth management, and asset reconstruction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Identity & Reach Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Identity & Reach</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                We deliver bespoke, independent financial advisory services not just to clients across India, but also to international professionals and expatriates worldwide. Leveraging a fully qualified team of Wealth Managers and backed by deep market insights, our client first approach has cultivated a business driven by referrals over 80% of our growth stems from existing clients' recommendations.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/2017e9e6ae808ff9352347f47bfb5f89c1ac250aa043a3ca873df0f23e599579.png" alt="Global Reach" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Core Offerings & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">We adopt a holistic and personalized methodology: crafting strategies that align with each client's professional and private wealth dimensions, and working collaboratively to define governance structures, risk frameworks, SOPs, and compliance processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreOfferings.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className={`w-12 h-12 ${t.accentBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm text-justify">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alfa Global Access Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/cd479a8a24bbbcaf5ab57e3a996f8da45175d4fe5668fae72e2715ae78b352f7.png" alt="Global Investment" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Alfa Global Access – Global Investment Insights</h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our Alfa Global Access offering empowers clients with tailored investment ideas and support, backed by global research, rigorous due diligence, and cutting edge technology. Clients whether they prefer to manage their own portfolios or opt for a more guided approach benefit from tailored advisory services, alerts on opportunities, and ongoing performance insights across assets, regions, and currencies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Credentials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-4">Tone, Values & Company Credentials</h2>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              With an unwavering commitment to clarity, transparency, and long term value, our strategies are designed to evolve with changing market conditions. Alfa Global Wealth Advisors is structured as a private limited company, incorporated in Chennai in 2008, and continues to uphold both regulatory compliance and operational integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Planning Tool</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-8">Investment Calculator</h2>
                <div className="space-y-6">
                  {[
                    { label: 'Investment (₹)', key: 'amount', min: 100000, max: 10000000, step: 100000, format: (v) => `₹${(v/100000).toFixed(1)}L` },
                    { label: 'Period', key: 'years', min: 1, max: 30, step: 1, format: (v) => `${v} Years` },
                    { label: 'Expected Return', key: 'rate', min: 5, max: 25, step: 1, format: (v) => `${v}%` }
                  ].map((s) => (
                    <div key={s.key}>
                      <div className="flex justify-between mb-2">
                        <label className="text-gray-700 text-sm font-medium">{s.label}</label>
                        <span className={`${t.accentText} font-semibold text-sm`}>{s.format(calculatorValues[s.key])}</span>
                      </div>
                      <input type="range" min={s.min} max={s.max} step={s.step} value={calculatorValues[s.key]} onChange={(e) => setCalculatorValues({...calculatorValues, [s.key]: parseInt(e.target.value)})} className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`p-8 rounded-2xl bg-gradient-to-br ${t.gradient} text-white text-center`}>
                <p className="text-white/80 text-sm mb-2">Estimated Future Value</p>
                <div className="text-5xl font-bold mb-4">₹{(calculateReturns()/10000000).toFixed(2)}Cr</div>
                <p className="text-white/60 text-sm mb-8">After {calculatorValues.years} years</p>
                <Link to="/contact" className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all">Start Investing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaGlobalWealthAdvisorsPage;
