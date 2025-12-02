import React from 'react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Global Manufacturing Expansion',
      category: 'Strategic Ventures',
      challenge: 'A mid-sized manufacturing company needed capital and strategic guidance to expand operations into three new international markets.',
      solution: 'We structured a hybrid investment vehicle combining equity and debt, provided market entry strategy, and facilitated partnerships with local distributors.',
      results: ['300% revenue growth in 3 years', 'Successful entry into 5 markets', '1,200+ new jobs created'],
      image: 'https://images.unsplash.com/photo-1682187516046-addee7e1ffc4?q=85&w=1200'
    },
    {
      title: 'Tech Startup to Unicorn',
      category: 'Alternative Investments',
      challenge: 'A promising fintech startup required Series B funding and operational expertise to scale rapidly in a competitive market.',
      solution: 'Led a $50M funding round, provided strategic advisory on product development, and connected founders with key industry partners.',
      results: ['Achieved unicorn status in 18 months', '10x user growth', 'Expanded to 12 countries'],
      image: 'https://images.unsplash.com/photo-1641760387096-b309eb085758?q=85&w=1200'
    },
    {
      title: 'Family Office Succession Planning',
      category: 'Global Partnerships & Advisory',
      challenge: 'A prominent business family needed comprehensive succession planning and wealth transition strategy for the next generation.',
      solution: 'Developed a multi-generational wealth management framework, established governance structures, and created tax-efficient transition mechanisms.',
      results: ['Seamless leadership transition', '40% tax optimization', 'Enhanced family governance'],
      image: 'https://images.pexels.com/photos/34998068/pexels-photo-34998068.jpeg?auto=compress&w=1200'
    },
    {
      title: 'Infrastructure Fund Performance',
      category: 'High-Impact Projects',
      challenge: 'Identifying and executing on high-return infrastructure opportunities in emerging markets with complex regulatory environments.',
      solution: 'Established a dedicated infrastructure fund, conducted thorough due diligence, and leveraged local partnerships for project execution.',
      results: ['22% IRR over 5 years', '8 projects completed', '$500M+ deployed capital'],
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&w=1200'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 mb-20">
        <img
          src="https://images.unsplash.com/photo-1760969006935-ca9f9cf5b117?q=85&w=2000"
          alt="Case Studies"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">Case Studies</h1>
            <p className="text-base max-w-2xl mx-auto">
              Real results from our transformative partnerships and strategic investments
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-sm font-semibold text-gray-600 mb-4 tracking-wider">{study.category}</p>
                <h2 className="text-3xl sm:text-4xl font-light mb-6">{study.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-gray-900 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-96 object-cover shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-gray-900 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve transformative results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;