import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GlobalAccessPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' };

  const accessAreas = [
    { title: 'Financial Markets & Wealth Advisory Access', company: 'Through Alfa Global Wealth Advisors and Gazillion Capital', items: ['Access to global financial instruments', 'Cross border wealth advisory and planning', 'Entry into exclusive private equity and strategic investments'] },
    { title: 'Fintech & Trading Platforms', company: 'With Alfa Zillion Traders LLP', items: ['AI driven fintech trading platforms', 'Alpha engineered trading strategies for select global partners', 'Access to emerging markets and high value opportunities'] },
    { title: 'Global Trade in Agriculture & Resources', company: 'Through MK Dairy Farms Pvt Ltd', items: ['Sustainable agricultural practices aligned with international standards', 'Export ready products for global markets', 'Partnerships that strengthen the global agri trade ecosystem'] },
    { title: 'Cyber Security Without Borders', company: 'Cyberhakz Pvt Ltd provides', items: ['Enterprise grade cyber security solutions tailored for global operations', 'Compliance with international regulations (GDPR, ISO, HIPAA, etc.)', 'Threat detection and prevention for multinational corporations'] }
  ];

  const stats = [
    { value: '10+', label: 'Presence in 10+ countries with strategic partnerships worldwide' },
    { value: '25+', label: '25+ years of combined leadership experience across international markets' },
    { value: '700+', label: 'Trusted by 700+ clients including HNIs, institutions, and enterprises' },
    { value: '85%', label: '85% repeat engagement rate, proof of lasting global relationships' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Global Access</motion.h1>
          <p className="text-white/60 text-lg">Our Expertise</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Connecting Businesses to Global Opportunities</h2>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
              At Alfa Global Group of Companies, our strength lies in giving clients seamless access to international markets, investment opportunities, and cross border partnerships. With a strong global footprint, we bridge the gap between local expertise and international scale, enabling our partners to grow beyond boundaries.
            </p>
          </motion.div>

          <div className={`p-8 rounded-2xl ${t.accentBgLight} mb-12`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Global Reach</h3>
            <p className="text-gray-600 leading-relaxed">
              We work with clients and partners across Asia, Europe, Middle East, and North America, ensuring they gain access to world class financial products, private equity opportunities, agricultural trade, and cyber security solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/global-reach-1.png" alt="Global Reach" className="rounded-xl w-full" />
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/global-reach-2.png" alt="Global Reach" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessAreas.map((area, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className={`${t.accentText} text-sm mb-4`}>{area.company}</p>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600">
                      <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Global Access with Alfa Global?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl border ${t.accentBorder} text-center`}>
                <div className={`text-3xl font-bold ${t.accentText} mb-2`}>{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Promise</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8">
            At Alfa Global Group, we go beyond capital to unlock opportunities across industries and borders. Through innovation, disciplined execution, and a global vision, we deliver access, growth, and impact that stand the test of time.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
            Connect With Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalAccessPage;
