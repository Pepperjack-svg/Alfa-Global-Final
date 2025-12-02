import React from 'react';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Investment Analyst',
      department: 'Investment Management',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Join our investment team to analyze opportunities across global markets and contribute to portfolio strategy.'
    },
    {
      title: 'Portfolio Manager',
      department: 'Wealth Management',
      location: 'New Delhi, India',
      type: 'Full-time',
      description: 'Lead client portfolios and develop customized investment strategies for high-net-worth individuals.'
    },
    {
      title: 'Senior Financial Advisor',
      department: 'Advisory Services',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Provide strategic financial guidance to clients and help them achieve their long-term financial goals.'
    },
    {
      title: 'Risk Management Specialist',
      department: 'Risk & Compliance',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Develop and implement risk management frameworks to protect client assets and ensure regulatory compliance.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">Careers</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Join our team of exceptional professionals building the future of wealth management
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-6">Why Join Alfa Global?</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              We offer a dynamic work environment where innovation, collaboration, and excellence are celebrated
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and development programs to advance your career'
              },
              {
                title: 'Global Exposure',
                description: 'Work on international projects and collaborate with global partners'
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive compensation packages and performance incentives'
              },
              {
                title: 'Innovation Culture',
                description: 'Leverage cutting-edge technology and methodologies'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements and wellness programs'
              },
              {
                title: 'Impact',
                description: 'Make a meaningful difference in clients\' financial futures'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-6">Open Positions</h2>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="mt-4 md:mt-0 inline-block bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Don't See the Right Role?</h2>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            We're always looking for exceptional talent. Send us your resume and let us know how you can contribute.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Submit Your Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
