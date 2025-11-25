import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { subsidiaries } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const CompaniesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1657639809496-6a4af16ce1a2?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Our Companies"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#D4AF37]">Companies</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover how our group drives impact across financial markets, private equity, trading platforms, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {subsidiaries.map((company) => (
              <Card key={company.id} className="group border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">
                    {company.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">{company.description}</p>
                  <div className="flex flex-col space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all"
                      asChild
                    >
                      <Link to={company.url}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    {company.website && (
                      <Button
                        variant="ghost"
                        className="w-full text-gray-600 hover:text-[#D4AF37]"
                        onClick={() => window.open(company.website, '_blank')}
                      >
                        Visit Website
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-12 text-center">
              Why Choose Alfa Global?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Diversified portfolio</h3>
                <p className="text-gray-600">Strong presence across finance, technology, agriculture, and security</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Trusted Expertise</h3>
                <p className="text-gray-600">Experienced leadership and a global client network</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Innovation Driven</h3>
                <p className="text-gray-600">Leveraging fintech, cyber tech, and sustainable practices</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Client centric approach</h3>
                <p className="text-gray-600">Tailored solutions for HNIs, institutions, and enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;