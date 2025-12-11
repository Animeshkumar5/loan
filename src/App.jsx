import React from "react";
import { Routes, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import PersonalLoan from "./pages/PersonalLoan";
import BusinessLoan from "./pages/BusinessLoan";
import HomeLoan from "./pages/HomeLoan";
import CarLoan from "./pages/CarLoan";
import Insurance from "./pages/Insurance";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import DebtConsolidation from "./pages/DebtConsolidation";
import CreditCardConsolidation from "./pages/CreditCardConsolidation";
import SmallLoans from "./pages/SmallLoans";
import HomeImprovement from "./pages/HomeImprovement";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound"; // 1. Import NotFound

// Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuickApplyAlert from "./components/QuickApplyAlert";

function App() {
  return (
    <div className="font-sans text-gray-900 flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="pt-24 flex-grow">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Loan Services (Lowercase paths to match Home.jsx links) */}
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/home-loan" element={<HomeLoan />} />
          <Route path="/car-loan" element={<CarLoan />} />
          <Route path="/insurance" element={<Insurance />} />
          
          {/* Other Services */}
          <Route path="/debt-consolidation" element={<DebtConsolidation />} />
          <Route path="/credit-card-consolidation" element={<CreditCardConsolidation />} />
          <Route path="/small-loans" element={<SmallLoans />} />
          <Route path="/home-improvement" element={<HomeImprovement />} />
          
          {/* Blog Routes */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />

          {/* 2. 404 Catch-All Route (Must be last) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Global Sticky Alert */}
      <QuickApplyAlert />

    </div>
  );
}

export default App;