import React from 'react';

const CorporateTeam = () => {
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
      bio: 'Sarah brings expertise in alternative investments and fund management, overseeing our portfolio of strategic ventures.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategic Partnerships',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=85&w=400',
      bio: 'Michael specializes in building cross-border alliances and institutional collaborations for our clients.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Family Office Advisory',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=85&w=400',
      bio: 'Emily provides personalized wealth management strategies for prominent business families.'
    },
    {
      name: 'David Thompson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=85&w=400',
      bio: 'David drives our technology initiatives, leveraging AI-driven research and advanced analytics.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of ESG & Impact Investing',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=85&w=400',
      bio: 'Priya leads our responsible investing initiatives, ensuring portfolio alignment with ESG principles.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white pt-40 pb-32 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2000"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/80"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Leadership Team</h1>
            <p className="text-xl text-blue-100">
              Meet the visionaries driving our mission to create enduring value
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200">
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm text-blue-900 mb-4 font-semibold uppercase tracking-wide">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTeam;