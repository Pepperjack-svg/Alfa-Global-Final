import React from 'react';
import { Link } from 'react-router-dom';

const ProfessionalHome = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Building Background */}
      <section className="relative text-white pt-40 pb-32 overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2000"
            alt="Corporate Building"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/80"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building Enduring Value Across Generations
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Alfa Global Group is a diversified global organization committed to creating sustainable value through strategic investments and advisory services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="px-6 py-3 bg-white text-blue-900 font-semibold hover:bg-gray-100 transition-colors">
                Our Services
              </Link>
              <Link to="/contact" className="px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '500+', label: 'Global Clients' },
              { value: '15+', label: 'Countries' },
              { value: '$5B+', label: 'Assets Under Management' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Alfa Global Group is a diversified global organization driven by vision, innovation, and impact. We invest in ideas, businesses, and projects that shape industries, empower legacies, and create sustainable value across generations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our strength lies in combining capital markets expertise with entrepreneurial execution to build opportunities that go beyond conventional boundaries.
              </p>
              <Link to="/about" className="inline-block px-6 py-3 bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors">
                Learn More
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=1200"
                alt="Professional Business Meeting"
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive wealth management and advisory services tailored for high-net-worth individuals and institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Alternative Investments',
                description: 'Structured investment platforms and specialized capital strategies for sophisticated investors.'
              },
              {
                title: 'Strategic Ventures',
                description: 'Direct equity investments and joint ventures focused on long-term value creation.'
              },
              {
                title: 'High-Impact Projects',
                description: 'Funding transformative projects across finance, infrastructure, and technology sectors.'
              },
              {
                title: 'Global Advisory',
                description: 'Cross-border M&A, family office services, and institutional consulting.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-6 py-3 bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Alfa Global</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and client success sets us apart in the wealth management industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Proven Expertise',
                description: '25+ years of experience in global finance and strategic investments with a track record of consistent performance.'
              },
              {
                title: 'Client-Centric Approach',
                description: 'Customized solutions tailored to your unique objectives, risk profile, and long-term goals.'
              },
              {
                title: 'Global Network',
                description: 'Access to premier investment opportunities across international markets and asset classes.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Legacy?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your investment and wealth management goals.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalHome;
