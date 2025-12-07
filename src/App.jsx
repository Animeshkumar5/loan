import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="pt-24 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/home-loan" element={<HomeLoan />} />
            <Route path="/car-loan" element={<CarLoan />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/debt-consolidation" element={<DebtConsolidation />} />
            <Route path="/credit-card-consolidation" element={<CreditCardConsolidation />} />
            <Route path="/small-loans" element={<SmallLoans />} />
            <Route path="/home-improvement" element={<HomeImprovement />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
