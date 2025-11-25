import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../mock';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Group FAQs by category
  const groupedFAQs = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1628]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Got Questions? We've Got Answers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {Object.entries(groupedFAQs).map(([category, faqs]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-8 text-center">{category}</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const globalIndex = faqData.indexOf(faq);
                    return (
                      <div
                        key={faq.id}
                        className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-[#0A1628] pr-4">
                            {faq.question}
                          </span>
                          {openIndex === globalIndex ? (
                            <ChevronUp className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {openIndex === globalIndex && (
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-12 text-center">
              Why Choose Alfa Global Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Diversified portfolio</h3>
                <p className="text-gray-600">Diversified portfolio spanning finance, technology, agriculture, and security</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">25+ years of leadership experience</h3>
                <p className="text-gray-600">25+ years of leadership experience across industries and global markets</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">85% repeat engagement rate</h3>
                <p className="text-gray-600">85% repeat engagement rate, showcasing our trusted long term partnerships</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Client centric approach</h3>
                <p className="text-gray-600">Client centric approach with tailored strategies for HNIs, enterprises, and institutions</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Innovation driven execution</h3>
                <p className="text-gray-600">Innovation driven execution leveraging fintech, AI, and cyber technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;