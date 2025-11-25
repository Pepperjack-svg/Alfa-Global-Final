import React from 'react';
import { Brain, Shield, Award, Target } from 'lucide-react';
import { valuesData } from '../mock';

const iconMap = {
  Brain: Brain,
  Shield: Shield,
  Award: Award,
  Target: Target
};

const Values = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A1628] to-[#142444] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F4C430] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] bg-clip-text text-transparent">Deliver Value</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our proven methodology combines expertise, innovation, and integrity to achieve exceptional results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={value.id}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:transform hover:scale-105 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[#0A1628] font-bold text-lg">{value.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;