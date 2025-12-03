import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about-image.jpg";

const AboutPreview = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 space-y-6">
        <p className="text-sm tracking-widest text-gray-500 font-semibold">
          ABOUT US
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Making loan approvals
          <span className="relative inline-block ml-2">
            simple
            <span className="absolute bottom-1 left-0 w-full h-3 bg-green-200 -z-10 rounded-md"></span>
          </span>
          <br /> fast and transparent.
        </h2>

        <p className="text-[17px] text-gray-600 leading-relaxed">
          We help individuals and businesses access quick, reliable, and 
          transparent loan solutions tailored to their needs. Whether it's a 
          personal loan or business financing, our streamlined process ensures 
          faster approvals and a stress-free experience.
        </p>

        {/* Learn More → redirects to About page */}
        <Link
          to="/about"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-xl shadow-sm transition-all inline-block"
        >
          Learn More
        </Link>
      </div>

      {/* RIGHT IMAGE + SHAPES */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        
        {/* Curved Shape Behind Image */}
        <div className="absolute left-10 top-10 w-[350px] h-[350px] bg-green-900 rounded-tl-[200px] rounded-tr-[50px] rounded-br-[200px] rounded-bl-[50px] -z-10 opacity-90"></div>

        {/* About Image */}
        <img
          src={aboutImg}
          alt="About Preview"
          className="w-[85%] rounded-3xl shadow-xl object-cover"
        />

        {/* Dotted Pattern */}
        <div className="absolute bottom-[-20px] left-0 grid grid-cols-5 gap-2 opacity-30">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
