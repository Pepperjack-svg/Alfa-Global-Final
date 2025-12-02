import React from 'react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Global Manufacturing Expansion',
      category: 'Strategic Ventures',
      challenge: 'A mid-sized manufacturing company needed capital and strategic guidance to expand operations into three new international markets.',
      solution: 'We structured a hybrid investment vehicle combining equity and debt, provided market entry strategy, and facilitated partnerships with local distributors.',
      results: ['300% revenue growth in 3 years', 'Successful entry into 5 markets', '1,200+ new jobs created'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=1200'
    },
    {
      title: 'Tech Startup to Unicorn',
      category: 'Alternative Investments',
      challenge: 'A promising fintech startup required Series B funding and operational expertise to scale rapidly in a competitive market.',
      solution: 'Led a $50M funding round, provided strategic advisory on product development, and connected founders with key industry partners.',
      results: ['Achieved unicorn status in 18 months', '10x user growth', 'Expanded to 12 countries'],
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=85&w=1200'
    },
    {
      title: 'Family Office Succession Planning',
      category: 'Global Partnerships & Advisory',
      challenge: 'A prominent business family needed comprehensive succession planning and wealth transition strategy for the next generation.',
      solution: 'Developed a multi-generational wealth management framework, established governance structures, and created tax-efficient transition mechanisms.',
      results: ['Seamless leadership transition', '40% tax optimization', 'Enhanced family governance'],
      image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=85&w=1200'
    },
    {
      title: 'Infrastructure Fund Performance',
      category: 'High-Impact Projects',
      challenge: 'Identifying and executing on high-return infrastructure opportunities in emerging markets with complex regulatory environments.',
      solution: 'Established a dedicated infrastructure fund, conducted thorough due diligence, and leveraged local partnerships for project execution.',
      results: ['22% IRR over 5 years', '8 projects completed', '$500M+ deployed capital'],
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&w=1200'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Real results from our transformative partnerships and strategic investments
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest uppercase">{study.category}</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 text-gray-900">{study.title}</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 tracking-widest uppercase">Challenge</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 tracking-widest uppercase">Solution</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-widest uppercase">Results</h3>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-6 h-6 text-gray-900 mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-base text-gray-600">{result}</span>
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
                    className="w-full h-[500px] object-cover shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed font-light">
            Let's discuss how we can help you achieve transformative results.
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

export default CaseStudiesPage;