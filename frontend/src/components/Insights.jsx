import React from 'react';
import { Clock, ChevronRight, BookOpen } from 'lucide-react';
import { insightsData } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Insights = () => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Market <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stay informed with expert analysis and market intelligence from our investment professionals.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {insightsData.map((insight, index) => (
            <Card
              key={insight.id}
              className="group border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-[#D4AF37] text-[#0A1628] hover:bg-[#F4C430]">
                    {insight.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{insight.date}</span>
                </div>
                <CardTitle className="text-xl font-bold text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {insight.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{insight.readTime}</span>
                  </div>
                  <button className="text-[#D4AF37] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A1628] font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
          >
            View All Insights
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;