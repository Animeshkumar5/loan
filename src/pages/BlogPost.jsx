import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from './Blogs'; 

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-20 text-2xl">Article not found</div>;
  }

  return (
    <div className="bg-white min-h-screen py-12">
      
      {/* --- SEO Metadata --- */}
      <Helmet>
        <title>{post.title} - PaisaSolutions Blog</title>
        <meta name="description" content={post.excerpt} />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blogs
        </Link>

        {/* Category & Date */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-8">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl border border-gray-200">
            👤
          </div>
          <div>
            <p className="font-bold text-gray-900 text-lg">By {post.author}</p>
            <p className="text-sm text-gray-500">Financial Expert</p>
          </div>
        </div>

        {/* Main Content Area */}
        <article className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
          
          {/* Excerpt (Highlighted) */}
          <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-blue-500 pl-4 italic">
            {post.excerpt}
          </p>

          {/* This renders the HTML string from your Blogs.jsx data.
             The 'prose' class from Tailwind Typography plugin styles the h3, ul, li, etc. automatically.
          */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

        </article>

      </div>
    </div>
  );
}