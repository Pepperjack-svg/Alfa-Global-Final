import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', heroBg: 'from-teal-950 via-slate-950 to-teal-950' };

  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you:
      • Create an account or fill out a contact form
      • Subscribe to our newsletter
      • Request information about our services
      • Communicate with us via email, phone, or other channels
      
      This information may include your name, email address, phone number, company name, and any other information you choose to provide.`
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:
      • Provide, maintain, and improve our services
      • Process transactions and send related information
      • Send promotional communications (with your consent)
      • Respond to your comments, questions, and requests
      • Monitor and analyze trends, usage, and activities
      • Detect, investigate, and prevent fraudulent transactions and other illegal activities`
    },
    {
      title: 'Information Sharing',
      content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except:
      • With your consent
      • To trusted third parties who assist us in operating our website
      • When required by law or to protect our rights
      • In connection with a merger, acquisition, or sale of assets`
    },
    {
      title: 'Cookies and Tracking',
      content: `We use cookies and similar tracking technologies to:
      • Remember your preferences and settings
      • Understand how you interact with our services
      • Provide personalized content and advertisements
      • Analyze site traffic and trends
      
      You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.`
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
      • SSL/TLS encryption for data in transit
      • Secure servers and databases
      • Regular security assessments
      • Employee training on data protection`
    },
    {
      title: 'Your Rights',
      content: `You have the right to:
      • Access your personal information
      • Correct inaccurate data
      • Request deletion of your data
      • Object to processing of your data
      • Withdraw consent at any time
      • Lodge a complaint with a supervisory authority
      
      To exercise these rights, please contact us using the information provided below.`
    },
    {
      title: 'Data Retention',
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When we no longer need your data, we will securely delete or anonymize it.`
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.`
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
            Privacy Policy
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
            className="text-gray-600 mb-12 text-lg leading-relaxed"
          >
            At Alfa Global Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@alfaglobalgroup.com</p>
              <p><strong>Phone:</strong> +91 44 2224 2929</p>
              <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
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

export default PrivacyPage;
