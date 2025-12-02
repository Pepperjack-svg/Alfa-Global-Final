import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'John Anderson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=85&w=400',
      bio: 'With over 25 years of experience in global finance and strategic investments, John leads our vision of creating enduring value across industries.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Chief Investment Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=85&w=400',
      bio: 'Sarah brings expertise in alternative investments and fund management, overseeing our portfolio of strategic ventures and capital allocation.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategic Partnerships',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=85&w=400',
      bio: 'Michael specializes in building cross-border alliances and institutional collaborations that unlock global opportunities for our clients.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Family Office Advisory',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=85&w=400',
      bio: 'Emily provides personalized wealth management strategies for prominent business families, focusing on legacy planning and succession.'
    },
    {
      name: 'David Thompson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=85&w=400',
      bio: 'David drives our technology initiatives, leveraging AI-driven research and advanced analytics to inform investment decisions.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of ESG & Impact Investing',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=85&w=400',
      bio: 'Priya leads our responsible investing initiatives, ensuring our portfolio aligns with environmental, social, and governance principles.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">Our Leadership Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Meet the visionaries driving our mission to create enduring value across industries and generations
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-8 h-[450px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-light mb-2 text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium tracking-wide uppercase">{member.role}</p>
                <p className="text-base text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-gray-900">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
            We're always looking for talented individuals who share our passion for creating transformative ventures.
          </p>
          <a
            href="/careers"
            className="inline-block bg-gray-900 text-white px-10 py-4 text-base font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;