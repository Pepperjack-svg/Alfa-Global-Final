import React from 'react';
import { Calendar, FileText, TrendingUp } from 'lucide-react';
import { valuesData } from '../mock';

const iconMap = {
  Brain: Calendar,
  Shield: FileText,
  Award: TrendingUp
};

const Values = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            How It <span className="text-[#D4AF37]">Works</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A Simple, Proven Process to Secure Your Financial Future
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {valuesData.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={value.id}
                className="relative text-center group"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">{value.number}</span>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-[#D4AF37]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0A1628] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Connector Line */}
                {index < valuesData.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#D4AF37]/20" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;