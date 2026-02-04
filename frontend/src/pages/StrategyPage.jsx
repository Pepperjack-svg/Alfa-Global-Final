import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StrategyPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' };

  const pillars = [
    { num: '1', title: 'Diversification for Stability', desc: 'We maintain a balanced and diversified portfolio across industries to reduce risk and unlock opportunity. From financial markets and private equity to sustainable agriculture, infrastructure, and cybersecurity, diversification fuels resilience and consistent performance.' },
    { num: '2', title: 'Opportunity-Centric Solutions', desc: 'Our strategy is built on identifying and anticipating opportunities. Whether for family offices, enterprises, or institutions, we design solutions that deliver measurable outcomes and lasting value.' },
    { num: '3', title: 'Innovation & Technology', desc: 'We harness fintech platforms, AI powered trading models, and advanced digital tools to stay ahead of evolving markets. Innovation powers efficiency, transparency, and smarter decision-making across all our ventures.' },
    { num: '4', title: 'Global Expansion with Local Impact', desc: 'Our presence spans domestic and international markets, but our focus remains on creating meaningful local impact. We invest in industries that strengthen communities while generating sustainable global returns.' },
    { num: '5', title: 'Responsibility & Governance', desc: 'We embrace responsible investing and governance as non negotiable. From sustainable projects in agriculture to compliance driven solutions in technology, we align business growth with environmental and social responsibility.' }
  ];

  const execution = [
    { title: 'Data Driven Decisions', desc: 'Advanced research and analytics guide risk management and opportunity selection.' },
    { title: 'Strategic Partnerships', desc: 'Collaborating with global stakeholders, investors, and industry leaders.' },
    { title: 'Scalable Models', desc: 'Ventures designed to grow with evolving opportunities and markets.' },
    { title: 'Performance Monitoring', desc: 'Regular reviews ensure consistent delivery, compliance, and alignment with long term goals.' }
  ];

  const stats = [
    { value: '30+', label: 'Years of combined leadership experience' },
    { value: 'Proven', label: 'Track record in investments and multi-sector growth' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Strategy</motion.h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">Alfa Global Group of Companies</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Strategic Approach</h2>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed text-justify">
              At Alfa Global Group, strategy drives everything we do. Our portfolio spans alternative investments, private equity, fintech trading, infrastructure, shipping, manufacturing, agriculture, and cybersecurity – yet all businesses are guided by a unified approach: combining innovation, disciplined risk management, and long term vision to deliver sustainable growth and impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Strategic Pillars</h2>
          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 ${t.accentBg} text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0`}>{pillar.num}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-justify">{pillar.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How We Execute Strategy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {execution.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl border ${t.accentBorder}`}>
                <svg className={`w-8 h-8 ${t.accentText} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Our Strategy Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}>
            Partner With Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StrategyPage;
