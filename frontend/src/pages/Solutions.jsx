import React from 'react';
import { TrendingUp, Briefcase, Rocket, Users, CheckCircle } from 'lucide-react';
import { servicesData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const iconMap = {
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Rocket: Rocket,
  Users: Users
};

const SolutionsPage = () => {
  const benefits = [
    "Customized investment strategies",
    "Expert financial guidance",
    "Comprehensive risk management",
    "Global market access",
    "Tax optimization strategies",
    "Transparent reporting"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Solutions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#D4AF37]">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive wealth management solutions designed to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicesData.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#0A1628]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A1628] text-center mb-12">
              Why Choose Our <span className="text-[#D4AF37]">Solutions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#D4AF37] transition-all">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430] transition-all hover:shadow-lg text-lg px-8"
                asChild
              >
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;