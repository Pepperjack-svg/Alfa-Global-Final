import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', accentHover: 'hover:bg-teal-700', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' };

  const companies = [
    { name: 'Alfa Global Wealth Advisors', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png', desc: 'Your trusted partner in comprehensive wealth management and financial advisory. We specialize in portfolio management, investment planning, and financial solutions for HNIs and institutions seeking long-term security and growth.', link: '/alfa-global-wealth-advisors' },
    { name: 'Alfa Star Dynamics', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-star-logo-removebg-preview.png', desc: 'Focused on strategic capital and private equity, Alfa Star Dynamics drives investments across global maritime and industrial sectors, offering tailor made opportunities for high value investors and institutions.', link: '/alfa-star-dynamics' },
    { name: 'Alfa Zillion Traders', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-zillion-logo-removebg-preview.png', desc: 'A cutting-edge fintech firm delivering AI powered trading solutions and alpha-engineering for exclusive partners. Our proprietary models and platforms redefine how trading and investments are executed.', link: '/alfa-zillion-traders' },
    { name: 'Gazillion Capital', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/gazillon-logo-removebg-preview.png', desc: 'Innovating the future of wealth through distribution, broking, and investor education. Gazillion Capital is committed to creating access to next gen financial products that empower investors to make informed decisions.', link: '/gazillion-capital' },
    { name: 'MK Dairy Farms', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/mk-logo-png.png', desc: 'A pioneer in agriculture and natural resources distribution. With a focus on innovation and sustainability, MK Dairy Farms connects quality produce with markets while supporting rural economies.', link: '/mk-dairy-farms' },
    { name: 'Cyberhakz', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/cyberhakz-logo-removebg-preview.png', desc: 'Delivering enterprise grade cyber security solutions to safeguard businesses against evolving digital threats. From infrastructure security to compliance, Cyberhakz ensures organizations remain secure in a connected world.', link: '/cyberhakz' },
    { name: 'Dhanveir Groups Shipping', logo: '/logos/dhanveir.png', logoBg: false, desc: 'The Group\'s strategic maritime platform, established to build, own, and operate Indian-flagged vessels across key cargo segments including dry bulk transportation of sand, coal, and minerals.', link: '/dhanveir-groups-shipping' }
  ];

  const whyChoose = [
    { title: 'Diversified Portfolio', desc: 'Strong presence across finance, technology, agriculture, and security' },
    { title: 'Trusted Expertise', desc: 'Experienced leadership and a global client network' },
    { title: 'Innovation Driven', desc: 'Leveraging fintech, cyber tech, and sustainable practices' },
    { title: 'Client Centric Approach', desc: 'Tailored solutions for HNIs, institutions, and enterprises' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </motion.h1>
          <p className="text-white/60 text-lg">Alfa Global Group of Companies</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://static.prod-images.emergentagent.com/jobs/9d0cdaeb-5a99-4d15-9a0a-459e9e0b885c/images/9d7c12d3944451d05017673e52e286d2785ed291290853b0b4905e52dec5ccd5.png" alt="Who We Are" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Alfa Global Group is a global investment and ventures platform built on a vision of global transformation, innovation, and lasting impact. We invest in transformative ideas, strategic ventures, and high impact projects that shape industries and create sustainable value across generations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                From pioneering funds and strategic holdings to projects in finance, infrastructure, shipping, manufacturing, and technology, our work reflects a commitment to building legacies that go beyond capital.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                We believe success lies in more than financial outcomes, it is measured in the ability to spark innovation, empower communities, and leave behind a lasting legacy. By combining global intelligence with disciplined execution, Alfa Global Group continues to transform bold ideas into ventures that define the future of capital, business, and society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/opportunity.png" alt="Vision" className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                To be a global catalyst for transformation, shaping industries, empowering legacies, and creating sustainable value that transcends generations.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-lg">
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/targeting.png" alt="Mission" className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our mission is to invest in transformative ideas, strategic ventures, and high impact projects that drive innovation and growth across industries. By combining global intelligence, disciplined execution, and integrity, Alfa Global Group empowers clients, partners, and communities to build opportunities, legacies, and futures that last.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Discover how our group drives impact</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Companies</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-2xl border ${t.accentBorder} hover:shadow-xl transition-all group`}>
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className={`h-16 w-auto mb-4 object-contain ${company.logoBg ? 'bg-slate-800 rounded-lg p-2' : ''}`} />
                ) : (
                  <div className={`h-16 w-16 mb-4 ${t.accentBg} rounded-lg flex items-center justify-center`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{company.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed text-justify">{company.desc}</p>
                <Link to={company.link} className={`inline-flex items-center gap-2 ${t.accentText} font-semibold text-sm hover:gap-3 transition-all`}>
                  Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Alfa Global?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
                <svg className={`w-8 h-8 ${t.accentText} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 rounded-2xl bg-gradient-to-r ${t.gradient} text-center`}>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-white/80 mb-8">Contact us today to explore collaboration opportunities.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Get in Touch <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
