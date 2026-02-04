import React from 'react';
import { motion } from 'framer-motion';

const MKDairyFarmsPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', accentHover: 'hover:bg-teal-700' };

  const products = [
    { title: 'Dairy Products', items: ['High quality milk', 'Cream', 'Butter', 'Ghee', 'Cheese'] },
    { title: 'Agricultural Products', items: ['Eggs', 'Fruits', 'Vegetables', 'Edible oils'] },
    { title: 'Natural Resources', items: ['Natural river sand', 'Minerals', 'Granites', 'Marbles', 'Related materials'] }
  ];

  const features = [
    { title: 'Production & Procurement', desc: 'High-quality production and procurement of dairy, agricultural, and agro-based products.', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { title: 'Import & Export', desc: 'Global import and export operations for dairy products and natural resources.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Distribution', desc: 'Reliable distribution network catering to both retail and institutional customers.', icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' },
    { title: 'Quality Focus', desc: 'Commitment to freshness, purity, and nutritional value in all our products.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
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
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/mk-logo-png.png" alt="MK Dairy Farms" className="h-20 w-auto mx-auto mb-6 rounded-lg bg-white/90 p-2" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">MK Dairy Farms</motion.h1>
          <p className="text-white/60 text-lg mb-8"></p>
          <a 
            href="https://mkdairyfarms.com/" 
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
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/mk-diary-farms.png" alt="MK Dairy Farms" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Dairy, Agriculture & Natural Resources</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">MK Dairy Farms</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                MK Dairy Farms is engaged in the production, procurement, import, export, and distribution of a wide range of dairy, agricultural, and agro based products. The company deals in high quality milk, cream, butter, ghee, cheese, eggs, fruits, vegetables, and edible oils, natural river sand catering to both retail and institutional customers.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                MK Dairy Farms also engages in the import, export, and distribution of national river sands, minerals, granites, marbles, and related materials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Operations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={feature.icon}/></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((category, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600">
                      <svg className={`w-5 h-5 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-justify">
              With a focus on freshness, purity, and nutritional value, MK Dairy Farms aims to contribute to healthier lifestyles while supporting the agricultural and natural resource economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MKDairyFarmsPage;
