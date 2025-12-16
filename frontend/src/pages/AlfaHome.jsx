import React from 'react';
import { Link } from 'react-router-dom';

const AlfaHome = () => {
  const complianceBadges = [
    { icon: 'document', label: 'IFSCA-compliant' },
    { icon: 'chart', label: 'SEBI-regulated*' },
    { icon: 'building', label: 'GIFT IFSC' },
    { icon: 'gear', label: 'Institutional-grade Systems' }
  ];

  const strategies = [
    { title: 'Category I Funds', link: '/services#category1' },
    { title: 'Category II Funds', link: '/services#category2' },
    { title: 'Category III Funds', link: '/services#category3' }
  ];

  const whyAlfaFeatures = [
    {
      icon: 'governance',
      title: 'Governance',
      description: 'Robust regulatory standards'
    },
    {
      icon: 'technology',
      title: 'Technology',
      description: 'Advanced risk management'
    },
    {
      icon: 'research',
      title: 'Research',
      description: 'Data-driven investment decisions'
    },
    {
      icon: 'global',
      title: 'Global Mandate',
      description: 'Opportunities across asset classes'
    }
  ];

  const renderComplianceIcon = (type) => {
    switch(type) {
      case 'document':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'building':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'gear':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderFeatureIcon = (type) => {
    switch(type) {
      case 'governance':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'technology':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'research':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'global':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <section className="pt-20 min-h-[600px] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="py-16 lg:py-24">
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-gray-900 leading-tight mb-8">
                Global Fund Management.<br />
                Local Insight. Institutional<br />
                Discipline.
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-[#1a6b64] text-white font-medium hover:bg-[#145550] transition-colors"
                >
                  Explore Our Funds
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#1a6b64] text-white font-medium hover:bg-[#145550] transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=85&w=1200')`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Compliance Badges Bar */}
        <div className="bg-[#e8e8e8] py-4 mt-8">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-between items-center gap-4">
              {complianceBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  {renderComplianceIcon(badge.icon)}
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Strategies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12">Key Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                <Link 
                  to={strategy.link}
                  className="text-[#1a6b64] text-sm hover:underline"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8"></div>
        </div>
      </section>

      {/* Why Alfa Global Capital Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900">Why Alfa Global Capital</h2>
            <Link 
              to="/about"
              className="text-[#1a6b64] text-sm font-medium hover:underline flex items-center"
            >
              Explore All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyAlfaFeatures.map((feature, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-[#1a6b64] mb-4">
                  {renderFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duplicate Why Section for scroll effect */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900">Why Alfa Global Capital</h2>
            <Link 
              to="/about"
              className="text-[#1a6b64] text-sm font-medium hover:underline flex items-center"
            >
              Explore All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaHome;
