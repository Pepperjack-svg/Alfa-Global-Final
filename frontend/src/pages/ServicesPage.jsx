import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', accentHover: 'hover:bg-teal-700', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400', checkColor: 'text-teal-500' };

  const services = [
    { icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/delivery%20(1).png', title: 'Delivering Value Across Industries', desc: 'At Alfa Global Group of Companies, we provide a comprehensive suite of services that span financial markets, wealth management, private equity, trading, agriculture, and cyber security. Our diversified expertise allows us to serve HNIs, institutions, and enterprises with tailored solutions that drive growth, stability, and long term success.' },
    { icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/wealth.png', title: 'Wealth Management', desc: 'Through Alfa Global Wealth Advisors, we offer personalized wealth management, investment planning, and solutions for high net worth individuals (HNIs) and institutional clients. Our team focuses on portfolio diversification, tax efficiency, and risk management to help clients achieve financial freedom and security.' },
    { icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/personal-wealth.png', title: 'Private Equity & Strategic Investments', desc: 'Alfa Star Dynamics LLP drives private equity and capital investments across global maritime, infrastructure, and industrial sectors. We identify high growth opportunities and structure investments that deliver superior returns while ensuring governance and compliance.' },
    { icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/trading.png', title: 'Fintech Trading & Alpha Engineering', desc: 'With Alfa Zillion Traders LLP, we combine fintech innovation with advanced trading strategies. Our proprietary platforms and AI powered models empower select partners to capture alpha, optimize portfolios, and redefine how trading is executed.' },
    { icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/allocation.png', title: 'Wealth Product Distribution & Broking', desc: 'Gazillion Capital Pvt Ltd is a next generation platform for financial product distribution, stock broking, and investor education. We simplify access to financial markets and equip investors with knowledge to make informed decisions.' },
    { icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/natural-resources.png', title: 'Agriculture & Natural Resources', desc: 'Through MK Dairy Farms Pvt Ltd, we bring innovation to agriculture, dairy, and natural resources distribution. Our sustainable practices support rural economies while ensuring supply chain reliability and quality output.' },
    { icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/clean-computer-virus.png', title: 'Cyber Security Solutions', desc: 'Cyberhakz Pvt Ltd delivers enterprise grade cyber security services to protect businesses from evolving threats. From network security to compliance and threat detection, we help organizations safeguard their assets and maintain trust in a digital world.' }
  ];

  const whyChoose = [
    { title: 'Diversified Portfolio', desc: 'Diversified portfolio spanning finance, technology, agriculture, and security' },
    { title: '30+ Years Experience', desc: '30+ years of leadership experience across industries and global markets' },
    { title: 'Client Centric Approach', desc: 'Client centric approach with tailored strategies for HNIs, enterprises, and institutions' },
    { title: 'Innovation Driven', desc: 'Innovation driven execution leveraging fintech, AI, and cyber technologies' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </motion.h1>
          <p className="text-white/60 text-lg">Our Core Services</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-8 rounded-2xl border ${t.accentBorder} hover:shadow-xl transition-all`}>
                <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={`py-12 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-gray-700 text-lg mb-4">Need a custom solution? Let's create a strategy tailored for your business.</p>
          <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg ${t.accentHover} transition-all`}>
            Get a Free Strategy Call <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Alfa Global Services?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl ${t.accentBgLight} border ${t.accentBorder}`}>
                <svg className={`w-8 h-8 ${t.checkColor} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
