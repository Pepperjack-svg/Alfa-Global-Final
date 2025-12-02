import React from 'react';
import LuxuryHero from '../components/LuxuryHero';

const NewHome = () => {
  return (
    <div className="min-h-screen">
      <LuxuryHero />
      
      {/* Group Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-4 tracking-wider">GROUP OVERVIEW</p>
              <h2 className="text-4xl sm:text-5xl font-light mb-6">Who We Are</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Alfa Global Group is a diversified global organization driven by vision, innovation, and impact. 
                We invest in ideas, businesses, and projects that shape industries, empower legacies, and create 
                sustainable value across generations.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our strength lies in combining capital markets expertise with entrepreneurial execution to build 
                opportunities that go beyond conventional boundaries.
              </p>
            </div>
            <div className="relative h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1756936724444-ecf9f7236c10?q=85&w=1200"
                alt="Modern Architecture"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1691161372406-4c65ac71ccb0?q=85&w=1200"
                alt="Corporate Building"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-gray-600 mb-4 tracking-wider">OUR PURPOSE</p>
              <h2 className="text-4xl sm:text-5xl font-light mb-6">Why We Exist</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                We believe wealth is not just financial capital, it is the ability to create, transform, and leave 
                behind something meaningful.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Alfa Global Group exists to channel resources, knowledge, and strategy into ventures that redefine 
                growth, spark innovation, and contribute to a better future for our clients, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 mb-4 tracking-wider">SOLUTIONS</p>
            <h2 className="text-4xl sm:text-5xl font-light mb-6">Helping you create an<br />enduring legacy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Alternative Investments & Funds',
                description: 'Structured investment platforms, AIFs, hedge-style LLPs, and specialized capital strategies.',
                image: 'https://images.unsplash.com/photo-1682187516046-addee7e1ffc4?q=85&w=800'
              },
              {
                title: 'Strategic Ventures & Holdings',
                description: 'Proprietary investments in companies, joint ventures, and scalable businesses across sectors.',
                image: 'https://images.unsplash.com/photo-1641760387096-b309eb085758?q=85&w=800'
              },
              {
                title: 'High-Impact Projects',
                description: 'Initiating and funding projects in industries such as finance, infrastructure, shipping, manufacturing, and technology.',
                image: 'https://images.pexels.com/photos/34998068/pexels-photo-34998068.jpeg?auto=compress&w=800'
              },
              {
                title: 'Global Partnerships & Advisory',
                description: 'Cross-border alliances, family office structures, and institutional collaborations that unlock global opportunities.',
                image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&w=800'
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-gray-900 h-96 cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{service.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Delivery */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-6">How We Deliver Value</h2>
            <p className="text-base text-gray-300">We Achieve This By</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Blending Insight & Foresight',
                description: 'Leveraging advanced analytics, AI-driven research, and global intelligence.'
              },
              {
                number: '02',
                title: 'Diversified Strength',
                description: 'Balancing financial innovation with entrepreneurial risk-taking and sector diversification.'
              },
              {
                number: '03',
                title: 'Integrity & Alignment',
                description: 'Ensuring transparency, compliance, and long-term alignment of interests.'
              },
              {
                number: '04',
                title: 'Vision in Action',
                description: 'Turning bold ideas into transformative ventures through disciplined execution and global reach.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-light text-gray-500 mb-4">{item.number}</div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-light mb-6">Your legacy awaits</h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            Discover how Alfa Global Group can help you build transformative ventures and create enduring value.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewHome;