import React from 'react';
import { Link } from 'react-router-dom';

const WaterfieldHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Waterfield Style */}
      <section className="relative pt-40 pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Helping you create an<br />enduring legacy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Specializing in top-tier Financial Advisory and Succession Planning, we are dedicated to crafting personalized, effective wealth management strategies guiding you through every step of your financial journey.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-teal-600 text-white font-normal hover:bg-teal-700 transition-colors text-lg">
              Get Started
            </Link>
            <Link to="/services" className="px-10 py-4 border-2 border-gray-300 text-gray-700 font-normal hover:border-teal-600 hover:text-teal-600 transition-colors text-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '₹5000+ Cr', label: 'Assets Under Management' },
              { value: '500+', label: 'Satisfied Clients' },
              { value: '15+', label: 'Global Markets' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-light mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-teal-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive wealth management solutions tailored for discerning individuals and families
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wealth Management',
                description: 'Holistic approach to managing and growing your wealth across generations',
                icon: '📊'
              },
              {
                title: 'Investment Advisory',
                description: 'Strategic investment solutions aligned with your financial goals',
                icon: '💼'
              },
              {
                title: 'Family Office Services',
                description: 'Comprehensive services for ultra-high-net-worth families',
                icon: '🏛️'
              },
              {
                title: 'Portfolio Management',
                description: 'Active management of diversified investment portfolios',
                icon: '📈'
              },
              {
                title: 'Succession Planning',
                description: 'Seamless wealth transition across generations',
                icon: '🎯'
              },
              {
                title: 'Tax & Estate Planning',
                description: 'Optimized strategies for wealth preservation',
                icon: '⚖️'
              }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-gray-50 to-teal-50 hover:shadow-xl transition-shadow rounded-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=1200"
                alt="Professional Consultation"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Why Choose Alfa Global</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 25 years of experience in wealth management and financial advisory, we have established ourselves as pioneers in creating bespoke solutions for high-net-worth individuals and families.
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized wealth management strategies',
                  'Experienced team of financial experts',
                  'Transparent and ethical practices',
                  'Global investment opportunities',
                  'Comprehensive family office services'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-teal-700 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/about" className="inline-block px-8 py-3 bg-teal-700 text-white font-medium hover:bg-teal-800 transition-colors rounded">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Begin Your Wealth Journey?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule a consultation with our wealth management experts today
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-colors rounded text-lg">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WaterfieldHome;
