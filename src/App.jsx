import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Import Footer
import Footer from './components/Footer'; // <--- 1. Import Here

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm p-4 flex justify-between items-center top-0 left-0">
          <div className="text-2xl font-bold text-blue-900 tracking-tighter">XYZ Loans</div>
          <div className="space-x-8 font-medium hidden md:block text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
        </nav>

        {/* Content Area (flex-grow pushes footer down) */}
        <div className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <Footer />  

      </div>
    </Router>
  );
}

export default App;