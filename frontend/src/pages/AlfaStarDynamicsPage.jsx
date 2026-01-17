import React from 'react';
import { motion } from 'framer-motion';

const AlfaStarDynamicsPage = ({ theme = 'gold' }) => {
  const themes = {
    gold: { accentText: 'text-amber-600', accentBg: 'bg-amber-600', accentBgLight: 'bg-amber-50', gradient: 'from-amber-600 to-amber-700', heroBg: 'from-slate-950 via-slate-900 to-slate-950', accentHover: 'hover:bg-amber-700' },
    silver: { accentText: 'text-gray-700', accentBg: 'bg-gray-700', accentBgLight: 'bg-gray-100', gradient: 'from-gray-700 to-gray-800', heroBg: 'from-gray-950 via-gray-900 to-gray-950', accentHover: 'hover:bg-gray-800' },
    purple: { accentText: 'text-purple-600', accentBg: 'bg-purple-600', accentBgLight: 'bg-purple-50', gradient: 'from-purple-600 to-purple-700', heroBg: 'from-purple-950 via-slate-950 to-purple-950', accentHover: 'hover:bg-purple-700' },
    teal: { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' }
  };
  const t = themes[theme] || themes.gold;

  const services = [
    { title: 'Private Equity & Capital Investments', desc: 'We specialize in private equity capital, focusing on investment opportunities across maritime, shipping, infrastructure, and industrial sectors.' },
    { title: 'Strategic Partnerships', desc: 'We help partners build and scale ventures aligned with their long term goals, delivering both value creation and asset growth.' },
    { title: 'Global Maritime & Infrastructure', desc: 'Alfa Star Dynamics has a strategic focus on global maritime and infrastructure sectors, offering access to high value investments in these industries.' },
    { title: 'High Value Partner Access', desc: 'Our firm serves select, high value partners who seek customized investment strategies, precision execution, and institutional grade governance.' }
  ];

  const differentiators = [
    'Focused expertise in capital investments, maritime, and infrastructure',
    'Tailored strategies for high value partners and institutions',
    'Commitment to governance, transparency, and compliance',
    'Partnerships designed for sustainable growth and value creation',
    'Driven by innovation, data, and global market intelligence'
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-star-logo-removebg-preview.png" alt="Alfa Star Dynamics" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Star Dynamics</motion.h1>
          <p className="text-white/60 text-lg mb-8">LLP</p>
          <a 
            href="https://alfastardynamics.com/" 
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
              <img src="https://images.unsplash.com/photo-1689330305908-aa231c1dd595?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwZXF1aXR5JTIwaW52ZXN0bWVudCUyMGJ1c2luZXNzfGVufDB8fHx8MTc2ODY1NzI4NHww&ixlib=rb-4.1.0&q=85" alt="Strategic Investments" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Strategic Capital & Investment Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Driving Value Through Strategic Investments</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Alfa Star Dynamics LLP is a distinguished investment firm focused on delivering long term capital growth through strategic investments. As a key entity within the Alfa Global Group of Companies, we specialize in private equity, capital investments, and global partnerships, helping partners deploy their wealth with purpose, precision, and performance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The firm operates with a disciplined, research driven approach, ensuring that every investment aligns with risk adjusted returns, governance standards, and long term sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${t.accentBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
              <ul className="space-y-4">
                {differentiators.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`p-8 rounded-2xl bg-gradient-to-br ${t.gradient} text-white`}>
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-white/90 leading-relaxed">
                At Alfa Star Dynamics, our promise is clear: to help partners deploy their wealth with purpose, precision, and performance. We are not just investors. We are partners in progress, committed to building opportunities that stand the test of time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaStarDynamicsPage;
