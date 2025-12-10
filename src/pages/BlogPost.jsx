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
      <Helmet>
        <title>{post.title} - XYZ Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <Link to="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium">
          ← Back to Blogs
        </Link>

        {/* Category & Date */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold text-xs uppercase">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        {/* Title */}
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
        <div className="flex items-center gap-3 mb-10 border-b border-gray-100 pb-8">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
            👤
          </div>
          <div>
            <p className="font-bold text-gray-900">By {post.author}</p>
            <p className="text-xs text-gray-500">Editor</p>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
          {/* This renders the content. In a real app, this might be HTML or Markdown */}
          <p className="text-xl font-medium text-gray-800 mb-6">{post.excerpt}</p>
          <p>{post.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why this matters</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

      </div>
    </div>
  );
}