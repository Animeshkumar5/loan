import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* 1. LOGO */}
          <div className="md:w-1/4">
            <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-1">
              XYZ <span className="text-gray-500">Loans</span>
            </h2>
          </div>

          {/* 2. NAVIGATION LINKS (2 Columns) */}
          <div className="md:w-2/4 grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium text-blue-900">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-blue-600 transition">Personal Loans</Link>
              <a href="#" className="hover:text-blue-600 transition">Credit Cards</a>
              <a href="#" className="hover:text-blue-600 transition">Debt Consolidation</a>
              <a href="#" className="hover:text-blue-600 transition">Banking</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              <Link to="/about" className="hover:text-blue-600 transition">About</Link>
              <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
              <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition">CA Residents Privacy Rights</a>
            </div>
          </div>


        </div>

        {/* 4. COPYRIGHT */}
        <div className="mt-16 pt-8 text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} | XYZ Loans Financial.
        </div>

      </div>
    </footer>
  );
}