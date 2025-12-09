import React from 'react';
import { Link } from 'react-router-dom';

const CorporateCaseStudies = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white pt-40 pb-32 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2000"
            alt="Case Studies"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/80"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Case Studies</h1>
            <p className="text-xl text-blue-100">
              Real results from our transformative partnerships and strategic investments
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-sm font-semibold text-blue-900 mb-4 uppercase tracking-wider">{study.category}</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{study.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Challenge</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Solution</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-900 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{result}</span>
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
                    className="w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve transformative results.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateCaseStudies;