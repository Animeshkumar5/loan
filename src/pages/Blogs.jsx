import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// UPDATED DATA FOR LOAN & INSURANCE CONTEXT
export const blogPosts = [
  {
    id: 1,
    title: "5 Signs You Should Consolidate Your Debt with a Personal Loan",
    category: "Personal Loans",
    date: "Dec 12, 2025",
    author: "Financial Expert",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "Struggling with high-interest credit card bills? Consolidating your debt into a single personal loan could save you thousands...",
    content: "If you are juggling multiple credit card payments with high interest rates, a debt consolidation loan might be your best move. By combining all your debts into one manageable monthly payment with a lower interest rate, you can get out of debt faster. In this article, we explore the top 5 signs that indicate it's time to consolidate, including rising interest costs, missed payments, and credit score impacts."
  },
  {
    id: 2,
    title: "Why Life Insurance is the Ultimate Safety Net for Your Family",
    category: "Insurance",
    date: "Dec 10, 2025",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "Life is unpredictable. Ensuring your family is financially protected in your absence is one of the most responsible decisions you can make...",
    content: "Many people view life insurance as an unnecessary expense, but it is actually an essential investment in your family's future. Whether it's covering mortgage payments, funding your children's education, or simply providing day-to-day living expenses, a solid life insurance policy ensures your loved ones aren't left with a financial burden. We break down the difference between Term and Whole Life insurance to help you choose."
  },
  {
    id: 3,
    title: "First-Time Home Buyer? How to Lock in the Best Mortgage Rate",
    category: "Home Loans",
    date: "Dec 05, 2025",
    author: "Mike Ross",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt: "Buying your first home is exciting, but interest rates can make or break your budget. Here are insider tips to get the lowest rate...",
    content: "Navigating the housing market as a first-time buyer can be overwhelming. Your credit score, down payment size, and debt-to-income ratio all play huge roles in the interest rate lenders will offer you. In this guide, we share actionable steps to improve your credit score before applying, the benefits of pre-approval, and how to shop around for the best mortgage deal."
  }
];

export default function Blogs() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      
      {/* --- SEO SECTION --- */}
      <Helmet>
        <title>Financial Advice & Loan Tips | XYZ Loan Company Blog</title>
        <meta 
          name="description" 
          content="Expert advice on personal loans, debt consolidation, insurance protection, and mortgages. Read the latest insights from XYZ Loan Company." 
        />
        <meta 
          name="keywords" 
          content="loan tips, debt consolidation advice, life insurance guide, mortgage rates, financial planning blog" 
        />
        <link rel="canonical" href="https://yourwebsite.com/blogs" />
      </Helmet>
      {/* ------------------- */}

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Financial Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart strategies to help you borrow wisely, protect your family, and save for the future.
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