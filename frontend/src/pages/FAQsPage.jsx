import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FAQsPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400', checkColor: 'text-teal-500' };

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        { q: 'What is Alfa Global Group of Companies?', a: 'Alfa Global Group of Companies is a diversified conglomerate with business interests in wealth management, private equity, fintech trading, financial product distribution, agriculture, and cyber security. We combine innovation, global reach, and client centric solutions to deliver growth and sustainability.' },
        { q: 'Where does Alfa Global operate?', a: 'We have a presence across India, Asia, Europe, the Middle East, and North America, providing global access to investments, trading platforms, and business solutions.' },
        { q: 'Who are your clients?', a: 'Our clients include high net worth individuals (HNIs), institutions, corporates, and enterprises seeking financial growth, security, and international opportunities.' }
      ]
    },
    {
      title: 'Wealth Management & Financial Services',
      faqs: [
        { q: 'What services does Alfa Global Wealth Advisors provide?', a: 'We offer comprehensive wealth management and advisory services including portfolio management, financial planning, investment strategies, and tax efficient solutions for HNIs and institutions.' },
        { q: 'How does Gazillion Capital support investors?', a: 'Gazillion Capital specializes in financial product distribution, stock broking, and investor education, helping individuals and organizations access next gen financial products and markets.' }
      ]
    },
    {
      title: 'Private Equity & Trading',
      faqs: [
        { q: 'What does Alfa Star Dynamics focus on?', a: 'Alfa Star Dynamics manages strategic capital and private equity investments, with a focus on global maritime, infrastructure, and industrial sectors.' },
        { q: 'How does Alfa Zillion Traders help partners?', a: 'We provide fintech driven trading platforms, AI powered strategies, and alpha engineering for select high value partners, giving them access to global trading opportunities.' }
      ]
    },
    {
      title: 'Agriculture & Resources',
      faqs: [
        { q: 'What role does MK Dairy Farms play in the group?', a: 'MK Dairy Farms brings innovation in agriculture and natural resources distribution. It focuses on sustainable farming, dairy solutions, and supply chain efficiency.' }
      ]
    },
    {
      title: 'Cyber Security',
      faqs: [
        { q: 'What solutions does Cyberhakz provide?', a: 'Cyberhakz delivers enterprise grade cyber security services, including network protection, compliance (GDPR, ISO, HIPAA), and advanced threat detection for multinational clients.' }
      ]
    },
    {
      title: 'Partnerships & Onboarding',
      faqs: [
        { q: 'How can I partner with Alfa Global Group of Companies?', a: 'You can reach out via our contact form or official email to discuss partnership opportunities. Our team will guide you through the onboarding process tailored to your requirements.' },
        { q: 'How do I start using your services?', a: 'Simply share your company details and requirements, and our team will provide a tailored proposal, pricing, and next steps to get started.' }
      ]
    }
  ];

  const whyChoose = [
    { title: 'Diversified Portfolio', desc: 'Diversified portfolio spanning finance, technology, agriculture, and security' },
    { title: '25+ Years Experience', desc: '25+ years of leadership experience across industries and global markets' },
    { title: '85% Repeat Engagement', desc: '85% repeat engagement rate, showcasing our trusted long term partnerships' },
    { title: 'Client Centric Approach', desc: 'Client centric approach with tailored strategies for HNIs, enterprises, and institutions' },
    { title: 'Innovation Driven', desc: 'Innovation driven execution leveraging fintech, AI, and cyber technologies' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Frequently Asked Questions</motion.h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <span className={`${t.accentText} text-sm font-semibold`}>Got Questions? We've Got Answers.</span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-2">{category.title}</h2>
                </div>
                <div className="lg:col-span-8">
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const uniqueKey = `${catIndex}-${faqIndex}`;
                      return (
                        <motion.div key={uniqueKey} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                          <button onClick={() => setActiveFaq(activeFaq === uniqueKey ? null : uniqueKey)} className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors">
                            <span className="text-gray-900 font-medium pr-4">{faq.q}</span>
                            <svg className={`w-5 h-5 ${t.accentText} flex-shrink-0 transition-transform ${activeFaq === uniqueKey ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          <AnimatePresence>
                            {activeFaq === uniqueKey && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4">
                                <p className="text-gray-600 text-justify">{faq.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Alfa Global Services?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
                <svg className={`w-8 h-8 ${t.checkColor} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-gray-700 text-lg mb-4">Still have questions?</p>
          <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}>
            Contact Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
