import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const BusinessNewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      image: "https://websitesbytechpioneers.com/alfaglobalnew/image/dummy-img-600x400.jpg",
      date: "April 14, 2025",
      category: "Social Media",
      title: "Mastering Instagram and Facebook Ads",
      excerpt: "Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo."
    },
    {
      id: 2,
      image: "https://websitesbytechpioneers.com/alfaglobalnew/image/dummy-img-600x400.jpg",
      date: "April 14, 2025",
      category: "SEO",
      title: "Growth Strategies for Digital Business",
      excerpt: "Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo."
    },
    {
      id: 3,
      image: "https://websitesbytechpioneers.com/alfaglobalnew/image/dummy-img-600x400.jpg",
      date: "April 14, 2025",
      category: "SEO",
      title: "Growth Strategies for Digital Business",
      excerpt: "Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg"
            alt="Business News"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#D4AF37] font-semibold mb-4 uppercase tracking-wider">Pressclub</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Business News</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              What the Press has been saying
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {newsArticles.map((article) => (
              <Card key={article.id} className="group border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-white">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="text-[#D4AF37] hover:text-[#F4C430] p-0 group-hover:translate-x-2 transition-transform"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessNewsPage;