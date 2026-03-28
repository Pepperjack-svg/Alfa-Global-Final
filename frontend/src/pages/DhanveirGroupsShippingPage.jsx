import React from 'react';
import { motion } from 'framer-motion';

const DhanveirGroupsShippingPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const keyStrengths = [
    { title: 'Maritime Expertise', desc: 'Over three decades of direct maritime experience across ship operations, technical management, and regulatory compliance.' },
    { title: 'Technical Leadership', desc: 'Led by Master Mariners, Marine Engineers, and international maritime advisors with vessel acquisition and fleet operations expertise.' },
    { title: 'Regulatory Excellence', desc: 'Strong governance, compliance framework, and access to industry intelligence through global regulatory institutions.' },
    { title: 'Strategic Growth', desc: 'Structured expansion strategy focused on fleet scale, operational efficiency, and participation in coastal and international trade.' }
  ];

  const operations = [
    'Dry bulk transportation including sand, coal, and minerals',
    'Building, owning, and operating Indian-flagged vessels',
    'Fleet operations and technical management',
    'Cross-border maritime consulting',
    'Coastal and international trade corridors'
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://customer-assets.emergentagent.com/job_6f794281-58c6-49fc-b709-257edb9b4cc6/artifacts/2dga5rwa_dhanveir.png" alt="Dhanveir Groups Shipping" className="h-24 w-auto mx-auto mb-6" style={{ filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(255,255,255,0.3))' }} />
          <p className="text-white/80 text-lg mb-8">Strategic Maritime Platform | Indian-Flagged Vessel Operations</p>
          <a 
            href="/contact" 
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg ${t.accentHover} transition-all`}
            data-testid="find-out-more-cta"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Maritime Shipping" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Strategic Maritime Platform</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Dhanveir Groups Shipping Private Limited</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Dhanveir Groups Shipping Private Limited represents the Group's strategic maritime platform, established to build, own, and operate Indian-flagged vessels across key cargo segments. The company's current focus is dry bulk transportation — including sand, coal, and minerals — forming the foundation of a broader long-term vision to develop a diversified fleet spanning multiple vessel classes and trade routes.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                The enterprise is led by industry professionals with over three decades of direct maritime experience across ship operations, technical management, regulatory compliance, and strategic fleet development. This depth of expertise enables disciplined decision-making, resilient performance across market cycles, and execution aligned with global operational standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Leadership Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Backbone & Leadership</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Dhanveir's technical backbone comprises Master Mariners, Marine Engineers, and international maritime advisors whose collective experience includes vessel acquisition, fleet operations, and cross-border maritime consulting. The leadership's exposure to global regulatory institutions and international shipping networks further strengthens the company's governance, compliance framework, and access to industry intelligence.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.pexels.com/photos/29805443/pexels-photo-29805443.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Ship Bridge Control Room" className="rounded-2xl shadow-xl w-full h-[350px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Operations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">Key operational areas and cargo segments we specialize in.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <ul className="space-y-4">
                {operations.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-justify">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Strengths</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStrengths.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              Positioned as a long-term asset platform within the Group's portfolio, Dhanveir is pursuing a structured expansion strategy focused on fleet scale, operational efficiency, and participation in both coastal and international trade corridors. The company's objective is to build a durable maritime enterprise defined by disciplined capital deployment, technical excellence, and sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DhanveirGroupsShippingPage;
