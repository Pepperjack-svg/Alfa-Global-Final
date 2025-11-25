import React from 'react';
import { TrendingUp, Briefcase, Rocket, Users } from 'lucide-react';
import { servicesData } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const iconMap = {
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Rocket: Rocket,
  Users: Users
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Services Grid - Exact content from reference website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl bg-white overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#0A1628] mb-3">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;