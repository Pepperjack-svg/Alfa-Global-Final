import React from 'react';
import { motion } from 'framer-motion';

const AlfaStarDynamicsPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const investmentCriteria = [
    'The business model is validated with visible cash flows',
    'Scalability is high with minimal execution risk',
    'The scope for failure is slim to none, supported by sector leadership, governance, or asset backing'
  ];

  const capitalDeployment = [
    'Direct Equity & Growth Capital',
    'Structured Private Debt',
    'Hybrid & Mezzanine Instruments'
  ];

  const capitalMarkets = [
    'Securities Trading & Asset Rotation',
    'Derivatives & Structured Financial Products',
    'Multi Asset Alternative Investment Strategies'
  ];

  const maritimeServices = [
    'Acquisition, Leasing & Chartering of Ships & Marine Assets',
    'Ship Financing, Freight Forwarding & Crew Management',
    'Marine Infrastructure Development & Technical Consulting',
    'Support for Coastal & International Shipping Operations'
  ];

  const sectoralExposure = [
    'Infrastructure & Logistics',
    'Real Estate & Land Linked Assets',
    'Emerging Technologies',
    'Business Consulting & Strategic Development'
  ];

  const whyAlfaStar = [
    'High conviction investing in proven growth stage businesses',
    'Minimal downside exposure through disciplined selection',
    'Capital never sits idle – always working to deliver returns',
    'Integrated capabilities across private equity, capital markets, and real assets',
    'Tailored solutions for HNI, UHNI, family offices, and institutional investors'
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="/logos/alfa-star.png" alt="Alfa Star Dynamics" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Alfa Star Dynamics</motion.h1>
          <p className="text-white/80 text-lg mb-8">Strategic Capital. Integrated Operations. Global Perspective.</p>
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
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/strategic-global.png" alt="Strategic Capital" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Strategic Capital & Integrated Operations</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">About Alfa Star Dynamics</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Star Dynamics is a diversified enterprise engaged in strategic investing, private equity, and maritime and infrastructure linked operations. The firm blends financial acumen with operational capabilities to deliver high quality, risk calibrated opportunities for HNIs, UHNIs, family offices, and institutional investors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High Conviction PE Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">High Conviction Private Equity Investments</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-justify">
              At the core of Alfa Star Dynamics is a focused private equity platform that specializes in sourcing and executing high conviction investments in growth stage, revenue generating businesses with proven models and strong fundamentals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/de53560c83050cba010874b5494e1a5245d1b1064b954fd59364419c927b1ad0.png" alt="High Conviction Investment" className="rounded-2xl shadow-xl w-full h-[300px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/ee5ecde99a997ab4399d1ada872833783e7723afca53c9aef575ce2a019baabc.png" alt="Investment Strategy" className="rounded-2xl shadow-xl w-full h-[300px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Criteria Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We invest in opportunities where:</h2>
              <ul className="space-y-4 mb-8">
                {investmentCriteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Capital is strategically deployed via:</h2>
              <ul className="space-y-4 mb-8">
                {capitalDeployment.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-justify">
                This disciplined approach ensures that our partners gain access to upside focused deals with controlled downside exposure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capital Markets Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Capital Markets & Alternative Strategies</h2>
              <p className="text-gray-600 mb-6 text-justify">
                In addition to private equity, Alfa Star Dynamics actively engages in capital markets and structured strategies to enhance portfolio level returns and maximize capital efficiency.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our activities include:</h3>
              <ul className="space-y-3 mb-6">
                {capitalMarkets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-justify">
                We operate with the core philosophy that no capital should remain idle. Whether between allocations or within liquidity reserves, every rupee is optimized to generate risk adjusted, tax efficient returns. We deploy dynamic yield, hedge, and tactical positioning strategies to ensure capital is always in motion working, compounding, and creating value.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/cd479a8a24bbbcaf5ab57e3a996f8da45175d4fe5668fae72e2715ae78b352f7.png" alt="Capital Markets" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maritime Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/2017e9e6ae808ff9352347f47bfb5f89c1ac250aa043a3ca873df0f23e599579.png" alt="Maritime Services" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Maritime & Marine Services</h2>
              <p className="text-gray-600 mb-6 text-justify">
                Alfa Star Dynamics also maintains a strong and scalable presence in the maritime and marine logistics ecosystem, offering:
              </p>
              <ul className="space-y-3 mb-6">
                {maritimeServices.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-justify">
                These services are delivered through an institutional grade operating model that serves trade, logistics, and infrastructure clients across private and public sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectoral Exposure Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Broader Sectoral Exposure & Advisory</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              We also engage in direct investments and strategic partnerships across:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectoralExposure.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className={`w-12 h-12 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8 text-justify max-w-3xl mx-auto">
            This multi sector approach enables us to act as both capital allocator and business enabler, driving long term enterprise value.
          </p>
        </div>
      </section>

      {/* Why Alfa Star Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Alfa Star Dynamics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyAlfaStar.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              Alfa Star Dynamics is not just an investment platform – it's a partner in building enduring value. With our blend of strategic insight, operational expertise, and capital agility, we help partners deploy their wealth with purpose, precision, and performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaStarDynamicsPage;
