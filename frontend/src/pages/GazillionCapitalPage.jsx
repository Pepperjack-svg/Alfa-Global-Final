import React from 'react';
import { motion } from 'framer-motion';

const GazillionCapitalPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const wealthDistribution = [
    'Curated Mutual Fund Portfolios',
    'Thematic, Alpha Enhanced, and Derivative Linked MF Strategies',
    'Portfolio Management Services (PMS) – Discretionary & Non Discretionary',
    'Alternative Investment Funds (AIFs) – Category I, II & III',
    'Access to top tier private equity, private credit, and debt structures',
    'Exclusive Pre IPO investments and unlisted equity opportunities'
  ];

  const privateWealth = [
    'Bespoke portfolio solutions for HNI & UHNI clients',
    'Strategic asset allocation and long term planning',
    'Family office structuring and intergenerational wealth strategies',
    'Global investment access with personalized advisory',
    'Tax efficient structuring and liquidity planning'
  ];

  const brokingServices = [
    'Equity, Commodity, and Currency Trading',
    'Margin trading and derivative strategies',
    'Real time execution and portfolio monitoring',
    'Algorithmic and rules based trading models'
  ];

  const privateMarket = [
    'Pre IPO and late stage unlisted equity access',
    'Direct private equity and venture capital co investments',
    'Structured debt and hybrid capital instruments',
    'Leveraged buyouts (LBO), ECBs, and global fund exposure'
  ];

  const investorEducation = [
    'Trading simulations and real market case studies',
    'Certification based capital market programs',
    'Equity, options, and risk management training',
    'Customized programs for HNIs, advisors, and institutions'
  ];

  const whyGazillion = [
    { title: 'Tailored Private Wealth Advisory', desc: 'Personalized strategies for long term value' },
    { title: 'Veteran Leadership', desc: '200+ years of collective global market experience' },
    { title: 'Integrated Capabilities', desc: 'From idea to execution across public and private markets' },
    { title: 'Technology Enabled Execution', desc: 'Leveraging AI, analytics, and automation' },
    { title: 'Pan India & Asia Pacific Network', desc: 'Strong distribution and investor ecosystem' },
    { title: 'Client Centric Philosophy', desc: 'Transparent, relationship driven, and results focused' }
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/Gazillion_LOGO.png" alt="Gazillion Capital" className="h-20 w-auto mx-auto mb-6 rounded-lg bg-white/90 p-2" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Gazillion Capital</motion.h1>
          <p className="text-white/80 text-lg mb-8">Strategic Wealth Product Distribution, Private Wealth & Broking Solutions</p>
          <a 
            href="https://www.gazcap.com/" 
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
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/strategic-wealth.png" alt="Strategic Wealth" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Next Generation Financial Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">About Gazillion Capital</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Gazillion Capital is a next generation financial services firm specializing in the distribution of wealth management products, private wealth solutions, and broking services across asset classes. Built on a foundation of trust, innovation, and performance, we empower clients including individuals, families, and institutions to navigate today's complex markets through a combination of curated offerings, expert led guidance, and seamless execution.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our comprehensive services include equity, commodity, and currency trading, as well as the distribution of mutual funds, Portfolio Management Services (PMS), Alternative Investment Funds (AIFs), and private market investment opportunities, including access to Pre IPO and high growth unlisted equity deals. We also equip investors and professionals through advanced capital markets training, simulations, and hands on mentorship, ensuring they are confident and informed in their investment decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Images Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/Clousys%20Images-13.jpg" alt="Gazillion Services" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/Clousys%20Images-14.jpg" alt="Gazillion Platform" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wealth Product Distribution Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Wealth Product Distribution</h3>
              <ul className="space-y-3">
                {wealthDistribution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Private Wealth Management</h3>
              <ul className="space-y-3">
                {privateWealth.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Services Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">3. Broking & Trading Services</h3>
              <ul className="space-y-3">
                {brokingServices.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">4. Private Market & Alternative Investments</h3>
              <ul className="space-y-3">
                {privateMarket.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">5. Investor Education & Training</h3>
              <ul className="space-y-3">
                {investorEducation.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
              At Gazillion Capital, we believe capital should never remain idle. Our philosophy is anchored in actively deploying client capital into a diversified, optimized portfolio of curated investment products spanning mutual funds, PMS, AIFs, private equity, Pre IPO, debt, and alternative strategies.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify mt-4">
              We focus on continuous capital deployment into high conviction, research backed opportunities, carefully tailored to each client's unique goals and risk profile. Through disciplined allocation, risk managed execution, and tax efficient structuring, we ensure that every investment decision contributes meaningfully to long-term wealth creation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Gazillion Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Gazillion Capital?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyGazillion.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className={`w-12 h-12 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify mb-6">
              We don't just distribute products – we deliver integrated, high impact wealth and investment solutions. Whether it's accessing exclusive Pre IPO pipelines, deploying capital through world class AIFs and PMS, or managing family wealth with precision, Gazillion Capital is your trusted partner in building and preserving capital across generations.
            </p>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              Gazillion Capital is a premier financial services firm offering tailored investment strategies driven by innovation, industry expertise, and a strong commitment to client success. With a firm foothold in the dynamic investment landscape, we empower clients to navigate today's fast evolving markets with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GazillionCapitalPage;
