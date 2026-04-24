import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', heroBg: 'from-teal-950 via-slate-950 to-teal-950' };

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using the Alfa Global Group website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: 'Description of Services',
      content: `Alfa Global Group provides wealth management, investment advisory, financial consulting, and related services. Our services are intended for qualified investors and may not be available in all jurisdictions. The information provided on this website is for general informational purposes only and does not constitute financial advice.`
    },
    {
      title: 'Eligibility',
      content: `Our services are available to individuals who are at least 18 years of age and have the legal capacity to enter into binding contracts. By using our services, you represent and warrant that you meet these eligibility requirements.`
    },
    {
      title: 'Investment Risks',
      content: `All investments involve risk, including the potential loss of principal. Past performance is not indicative of future results. Before making any investment decisions, you should:
      • Consult with qualified financial advisors
      • Carefully consider your investment objectives
      • Understand the risks involved
      • Review all offering documents thoroughly
      
      Alfa Global Group does not guarantee any specific investment outcomes.`
    },
    {
      title: 'User Responsibilities',
      content: `When using our services, you agree to:
      • Provide accurate and complete information
      • Maintain the confidentiality of your account credentials
      • Notify us immediately of any unauthorized access
      • Use our services only for lawful purposes
      • Not attempt to interfere with the proper functioning of our website`
    },
    {
      title: 'Intellectual Property',
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of Alfa Global Group or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.`
    },
    {
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law, Alfa Global Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services. Our total liability shall not exceed the amount you have paid to us in the twelve months preceding the claim.`
    },
    {
      title: 'Indemnification',
      content: `You agree to indemnify and hold harmless Alfa Global Group and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of our services or violation of these terms.`
    },
    {
      title: 'Governing Law',
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.`
    },
    {
      title: 'Changes to Terms',
      content: `We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the updated terms on this page. Your continued use of our services after such changes constitutes acceptance of the new terms.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`py-24 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Terms of Service
          </motion.h1>
          <p className="text-white/60">Last Updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 mb-12 text-lg leading-relaxed text-justify"
          >
            Welcome to Alfa Global Group. These Terms of Service govern your use of our website and services. Please read them carefully before using our platform.
          </motion.p>

          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-10"
            >
              <h2 className={`text-xl font-bold text-gray-900 mb-4 ${t.accentText}`}>
                {i + 1}. {section.title}
              </h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed text-justify">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gray-50 rounded-2xl"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> legal@alfaglobalgroup.com</p>
              <p><strong>Phone:</strong> +91 44 2224 2929</p>
            </div>
            <Link 
              to="/contact" 
              className={`inline-flex items-center gap-2 mt-6 px-6 py-3 ${t.accentBg} text-white rounded-lg hover:opacity-90 transition-opacity`}
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
