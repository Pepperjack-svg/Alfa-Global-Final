import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PartnersLogos = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600' };

  // Partner/certification logos
  const partners = [
    { name: 'SEBI', subtitle: 'Registered' },
    { name: 'IFSCA', subtitle: 'Compliant' },
    { name: 'ISO 27001', subtitle: 'Certified' },
    { name: 'NSE', subtitle: 'Member' },
    { name: 'BSE', subtitle: 'Member' },
    { name: 'AMFI', subtitle: 'Registered' },
    { name: 'NSDL', subtitle: 'Depository' },
    { name: 'CDSL', subtitle: 'Depository' }
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider">Regulated & Certified By</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                <span className={`text-xs font-bold ${t.accentText}`}>{partner.name}</span>
              </div>
              <span className="text-xs text-gray-400 mt-2">{partner.subtitle}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuickStats = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600' };

  const stats = [
    { value: '₹5000+ Cr', label: 'Assets Under Advisory' },
    { value: '700+', label: 'Active Clients' },
    { value: '10+', label: 'Countries Served' },
    { value: '25+', label: 'Years of Experience' }
  ];

  return (
    <section className={`py-16 bg-gradient-to-r ${t.gradient}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceHighlights = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600' };

  const services = [
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Wealth Management',
      desc: 'Personalized strategies for HNIs and family offices',
      link: '/alfa-global-wealth-advisors'
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Private Equity',
      desc: 'Strategic investments in high-growth sectors',
      link: '/alfa-star-dynamics'
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: 'Fintech Trading',
      desc: 'AI-powered trading platforms and alpha engineering',
      link: '/alfa-zillion-traders'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Cyber Security',
      desc: 'Enterprise-grade protection for your business',
      link: '/cyberhakz'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Core Capabilities</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={service.link}
                className={`block h-full p-6 rounded-2xl ${t.accentBgLight} hover:shadow-lg transition-all group`}
              >
                <div className={`w-14 h-14 ${t.accentBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <span className={`${t.accentText} text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PartnersLogos, QuickStats, ServiceHighlights };
