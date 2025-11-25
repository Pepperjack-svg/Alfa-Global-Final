import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const response = await axios.get(`${API}/insights`);
      if (response.data.success && response.data.data.length > 0) {
        setInsights(response.data.data.slice(0, 3)); // Get latest 3 insights
      }
    } catch (error) {
      console.error('Error fetching insights:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Loading insights...</p>
          </div>
        </div>
      </section>
    );
  }

  if (insights.length === 0) {
    return null;
  }

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
            Market <span className="text-[#D4AF37]">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Stay informed with expert analysis and market intelligence from our investment professionals.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {insights.map((insight) => (
            <Card
              key={insight.id}
              className="group border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-[#D4AF37] text-white hover:bg-[#F4C430]">
                    {insight.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{formatDate(insight.date)}</span>
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
            className="bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430] transition-all hover:shadow-lg text-lg px-8"
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