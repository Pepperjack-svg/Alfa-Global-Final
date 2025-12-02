import React, { useEffect, useRef } from 'react';
import LuxuryHero from '../components/LuxuryHero';
import StatsCounter from '../components/StatsCounter';

const NewHome = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <LuxuryHero />
      
      {/* Stats Counter */}
      <StatsCounter />
      
      {/* Group Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest uppercase">Group Overview</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-gray-900">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Alfa Global Group is a diversified global organization driven by vision, innovation, and impact. 
                We invest in ideas, businesses, and projects that shape industries, empower legacies, and create 
                sustainable value across generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our strength lies in combining capital markets expertise with entrepreneurial execution to build 
                opportunities that go beyond conventional boundaries.
              </p>
            </div>
            <div className="relative h-[500px] scroll-animate hover-lift">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=1200"
                alt="Wealth Management Consultation"
                className="w-full h-full object-cover shadow-2xl transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] scroll-animate hover-lift">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=85&w=1200"
                alt="Business Team Collaboration"
                className="w-full h-full object-cover shadow-2xl transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 scroll-animate">
              <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest uppercase">Our Purpose</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-gray-900">Why We Exist</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe wealth is not just financial capital, it is the ability to create, transform, and leave 
                behind something meaningful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Alfa Global Group exists to channel resources, knowledge, and strategy into ventures that redefine 
                growth, spark innovation, and contribute to a better future for our clients, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest uppercase">Solutions</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900">Helping you create an<br />enduring legacy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Alternative Investments & Funds',
                description: 'Structured investment platforms, AIFs, hedge-style LLPs, and specialized capital strategies.',
                image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=85&w=800'
              },
              {
                title: 'Strategic Ventures & Holdings',
                description: 'Proprietary investments in companies, joint ventures, and scalable businesses across sectors.',
                image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?q=85&w=800'
              },
              {
                title: 'High-Impact Projects',
                description: 'Initiating and funding projects in industries such as finance, infrastructure, shipping, manufacturing, and technology.',
                image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=85&w=800'
              },
              {
                title: 'Global Partnerships & Advisory',
                description: 'Cross-border alliances, family office structures, and institutional collaborations that unlock global opportunities.',
                image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&w=800'
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-gray-900 h-[450px] cursor-pointer scroll-animate hover-lift" style={{transitionDelay: `${index * 0.1}s`}}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-light mb-4 tracking-wide">{service.title}</h3>
                  <p className="text-base text-gray-200 leading-relaxed">{service.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium border-b border-white pb-1">Learn More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Delivery */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">How We Deliver Value</h2>
            <p className="text-lg text-gray-400">We Achieve This By</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              <div key={index}>
                <div className="text-6xl font-extralight text-gray-700 mb-6">{item.number}</div>
                <h3 className="text-xl font-light mb-4 tracking-wide">{item.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-gray-900">Your legacy awaits</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Discover how Alfa Global Group can help you build transformative ventures and create enduring value.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-10 py-4 text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewHome;