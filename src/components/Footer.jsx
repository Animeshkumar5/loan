import React from 'react';
import { Link } from 'react-router-dom';

// --- Icons ---
const HeadsetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-24 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* 1. LOGO, BRAND, SOCIAL MEDIA & CONTACT DETAILS */}
          <div className="lg:w-1/3">
            <Link to="/" className="inline-block group mb-4">
              {/* Main Logo Text */}
              <h2 className="text-3xl font-extrabold tracking-tight text-white flex items-baseline">
                Paisa<span className="text-blue-500">Solutions</span>
                <span className="text-xl ml-0.5">.com</span>
              </h2>
              {/* Tagline */}
              <p className="text-xs text-gray-400 tracking-widest font-medium uppercase mt-1 group-hover:text-blue-400 transition-colors">
                Financial Freedom for Everyone
              </p>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-2 mb-6">
              Your trusted partner for fast, secure, and transparent financial solutions. We bridge the gap between your dreams and reality.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Email & Location - Moved to First Column */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email Us</p>
                  <a href="mailto:support@paisasolutions.com" className="text-gray-300 hover:text-white transition text-sm">
                    support@paisasolutions.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300 mt-1">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Visit Us</p>
                  <p className="text-gray-300 leading-snug text-sm">
                    Plot no.32 Sector 18,<br/> Gurgaon, 122015
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="lg:w-1/4">
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
                <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* 3. CONTACT SUPPORT CARD */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Contact Support</h3>
              
              {/* Talk to Expert Section */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg relative overflow-hidden group">
                {/* Subtle blue accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition"></div>
                
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400">
                        <HeadsetIcon />
                    </div>
                    <h4 className="font-bold text-white text-base">Talk to Expert</h4>
                </div>

                <div className="space-y-3">
                    
                    {/* Service Helpline */}
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Service Helpline</p>
                        <a href="tel:18002585616" className="text-xl font-bold text-white hover:text-blue-400 transition block font-mono tracking-tight">
                            879-555-5728
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-700 my-3"></div>

                {/* Timing */}
                <div className="flex items-start gap-2.5 text-xs text-gray-400">
                    <div className="mt-0.5"><ClockIcon /></div>
                    <p className="leading-tight">
                        Advisors available 7 days a week,<br />
                        <span className="text-white font-medium">9:30 am - 6:30 pm</span>
                    </p>
                </div>
              </div>
          </div>

        </div>

        {/* 4. COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center gap-2">
          <span>Copyright © {new Date().getFullYear()} | PaisaSolutions. All Rights Reserved.</span>
        </div>

      </div>
    </footer>
  );
}