import React from 'react';

const NewAbout = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section - Clean text-based */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Building legacies and opportunities that last across industries and generations
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
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
            <div className="relative h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=85&w=1200"
                alt="Professional Business Team"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=85&w=1200"
                alt="Team Collaboration"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
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

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest uppercase">Our Foundation</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Excellence',
                description: 'We pursue the highest standards in everything we do, from investment strategies to client relationships.'
              },
              {
                title: 'Integrity',
                description: 'Transparency, honesty, and ethical conduct form the foundation of our business practices.'
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our approaches, leveraging technology and market insights to stay ahead.'
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships based on trust, mutual respect, and shared success.'
              },
              {
                title: 'Impact',
                description: 'We measure success not just in financial returns, but in the positive change we create.'
              },
              {
                title: 'Vision',
                description: 'We think long-term, focusing on sustainable growth and multi-generational value creation.'
              }
            ].map((value, index) => (
              <div key={index} className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-2xl font-light mb-4 text-gray-900">{value.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8">Join Us on This Journey</h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed font-light">
            Discover how Alfa Global Group can help you achieve your investment and business goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewAbout;