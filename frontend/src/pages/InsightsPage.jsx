import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const InsightsPage = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const response = await axios.get(`${API}/insights`);
      if (response.data.success && response.data.data.length > 0) {
        setInsights(response.data.data);
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg"
            alt="Market Insights"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 mb-6">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">Latest Updates</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Market <span className="text-[#D4AF37]">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert analysis and market intelligence from our investment professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">Loading insights...</p>
            </div>
          ) : insights.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No insights available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {insights.map((insight) => (
                <Card
                  key={insight.id}
                  className="group border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl overflow-hidden"
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
          )}
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;