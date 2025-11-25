import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';
import { aboutData, teamData } from '../mock';
import { Card, CardContent } from '../components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1657639809496-6a4af16ce1a2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="About Alfa Global"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#D4AF37]">Alfa Global</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Building legacies and opportunities that last across industries and generations.
            </p>
          </div>
        </div>
      </section>

      {/* Group Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Business professionals"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <p className="text-[#D4AF37] font-semibold mb-2 uppercase tracking-wider text-sm">
                  {aboutData.groupOverview.heading}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
                  {aboutData.groupOverview.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {aboutData.groupOverview.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#D4AF37] font-semibold mb-2 uppercase tracking-wider text-sm">
                  {aboutData.purpose.heading}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
                  {aboutData.purpose.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {aboutData.purpose.description}
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-[#0A1628] to-[#142444] rounded-2xl p-12 shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-[#0A1628]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Creating sustainable value and meaningful impact across generations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
              Our <span className="text-[#D4AF37]">Leadership Team</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Meet the experienced professionals guiding Alfa Global Group to new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamData.map((member) => (
              <Card key={member.id} className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1628] mb-2">{member.name}</h3>
                  <p className="text-[#D4AF37] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;