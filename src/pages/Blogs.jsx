import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// SAMPLE DATA - You can move this to a separate file later
export const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Keeping Your Personal Data Secure",
    category: "Finance",
    date: "Aug 10, 2025",
    author: "Edward",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "In the modern era, the internet has become an essential part of our daily lives. We use it for everything from communication...",
    content: "Full content about data security goes here. Using strong passwords, two-factor authentication, and being wary of phishing scams are key ways to protect yourself."
  },
  {
    id: 2,
    title: "The Importance of Cybersecurity in Digital Age",
    category: "Digital Marketing",
    date: "Aug 09, 2025",
    author: "Akash",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "In today's increasingly connected world, cybersecurity has become a critical concern for businesses of all sizes...",
    content: "Full content about cybersecurity. As businesses go digital, the attack surface grows. Investing in secure infrastructure is not just an option, but a necessity."
  },
  {
    id: 3,
    title: "Smart Financial Planning for Small Businesses",
    category: "Business",
    date: "Aug 05, 2025",
    author: "Sarah",
    image: "https://images.unsplash.com/photo-1554224155-98406852d0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "Proper financial planning is the backbone of any successful small business. Learn how to manage cash flow effectively...",
    content: "Full content about financial planning. Budgeting, forecasting, and managing debt are crucial skills for any entrepreneur looking to scale their operations."
  }
];

export default function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Helmet>
        <title>Latest Blogs & Insights - XYZ Loan Company</title>
        <meta name="description" content="Read our latest articles on finance, cybersecurity, and business growth." />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Latest Posts</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, strategies, and tips to help you manage your finances and grow your business.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              to={`/blogs/${post.id}`} 
              key={post.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-blue-600 font-semibold text-sm">
                  Read Article 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}