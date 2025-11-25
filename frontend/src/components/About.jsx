import React from 'react';
import { aboutData } from '../mock';
import { Shield, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Group Overview Section - Exact from reference website */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Business professionals"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#D4AF37]/20 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Content */}
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

        {/* Our Purpose Section - Exact from reference website */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content - Order swapped for visual balance */}
            <div className="order-2 lg:order-1">
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

            {/* Decorative Element */}
            <div className="order-1 lg:order-2">
              <div className="relative">
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
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#F4C430]/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Section Header - Exact from reference website */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-[#D4AF37] font-semibold mb-2 uppercase tracking-wider text-sm">
            {aboutData.whatWeDo.heading}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628]">
            {aboutData.whatWeDo.title}
          </h2>
        </div>

        {/* What We Do Image */}
        <div className="max-w-5xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Alfa Global Group operations"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;