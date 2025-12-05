import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm top-0 left-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Section - Left Side */}
        <NavLink to="/" className="flex items-center space-x-2 group">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </NavLink>

        {/* Navigation Links - Center */}
        <div className="flex space-x-10 items-center absolute left-1/2 transform -translate-x-1/2">
          {/* Smooth underline animation using after: element */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative font-medium px-1 text-gray-600 hover:text-blue-600 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:rounded-full
              after:transition-all after:duration-300
              ${isActive ? "text-blue-600 after:w-full" : "after:w-0 hover:after:w-full"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative font-medium px-1 text-gray-600 hover:text-blue-600 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:rounded-full
              after:transition-all after:duration-300
              ${isActive ? "text-blue-600 after:w-full" : "after:w-0 hover:after:w-full"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `relative font-medium px-1 text-gray-600 hover:text-blue-600 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:rounded-full
              after:transition-all after:duration-300
              ${isActive ? "text-blue-600 after:w-full" : "after:w-0 hover:after:w-full"}`
            }
          >
            FAQ
          </NavLink>
        </div>

        {/* Contact Button - Right Side */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-6 py-2 rounded-full font-bold transition transform hover:-translate-y-0.5 hover:shadow-lg border 
            bg-gradient-to-r from-blue-600 to-cyan-400 text-white
            ${isActive ? "ring-2 ring-blue-400" : ""}`
          }
        >
          Contact
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;