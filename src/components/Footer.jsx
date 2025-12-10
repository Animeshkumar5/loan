import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* 1. LOGO & BRAND (Updated to Text with Tagline) */}
          <div className="md:w-1/3">
            <Link to="/" className="inline-block group mb-4">
              {/* Main Logo Text */}
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Paisa<span className="text-blue-500">Solutions</span>
              </h2>
              {/* Tagline */}
              <p className="text-xs text-gray-400 tracking-widest font-medium uppercase mt-1 group-hover:text-blue-400 transition-colors">
                Financial Freedom for Everyone
              </p>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-2">
              Your trusted partner for fast, secure, and transparent financial solutions. We bridge the gap between your dreams and reality.
            </p>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">FAQ</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition">Blogs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact</Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Contact Support</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <a href="mailto:support@paisasolutions.com" className="hover:text-white transition">
                    support@paisasolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us</p>
                  <a href="tel:+18001234567" className="hover:text-white transition">
                    +91 8795555728
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4. COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} | PaisaSolutions. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}