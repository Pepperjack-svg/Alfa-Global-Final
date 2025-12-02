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
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 mb-20">
        <img
          src="https://images.unsplash.com/photo-1641760387096-b309eb085758?q=85&w=2000"
          alt="Team"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">Our Leadership Team</h1>
            <p className="text-base max-w-2xl mx-auto px-4">
              Meet the visionaries driving our mission to create enduring value across industries and generations
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-6 h-96">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-3 font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Join Our Team</h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            We're always looking for talented individuals who share our passion for creating transformative ventures.
          </p>
          <a
            href="/careers"
            className="inline-block bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;