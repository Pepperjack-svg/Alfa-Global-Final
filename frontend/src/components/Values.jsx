import React from 'react';
import { Brain, Shield, Award, Target } from 'lucide-react';
import { valuesData, aboutData } from '../mock';

const iconMap = {
  Brain: Brain,
  Shield: Shield,
  Award: Award,
  Target: Target
};

const Values = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header - Exact from reference website */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#D4AF37] font-semibold mb-2 uppercase tracking-wider text-sm">
            {aboutData.howWeDeliver.heading}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628]">
            {aboutData.howWeDeliver.title}
          </h2>
        </div>

        {/* Values Grid - Exact content from reference website */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={value.id}
                className="group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{value.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                </div>

                {/* Content - Exact from reference website */}
                <h3 className="text-lg font-bold text-[#0A1628] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;