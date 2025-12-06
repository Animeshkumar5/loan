import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm top-0 left-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center lg:justify-center">
          
          {/* Logo - Only visible on mobile */}
          <NavLink to="/" className="lg:hidden flex items-center" onClick={closeMenu}>
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </NavLink>

          {/* Hamburger Button - Only visible on mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex space-x-10 items-center">
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
        </div>

        {/* Mobile Menu - Slides down */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `font-medium px-4 py-2 rounded-lg transition
                ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `font-medium px-4 py-2 rounded-lg transition
                ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/faq"
              onClick={closeMenu}
              className={({ isActive }) =>
                `font-medium px-4 py-2 rounded-lg transition
                ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="px-6 py-3 rounded-full font-bold text-center transition
              bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:shadow-lg"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;