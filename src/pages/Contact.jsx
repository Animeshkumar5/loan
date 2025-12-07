import React, { useState } from "react";
import { sendMail } from "../utils/sendMail";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    amount: "50000",
    loanType: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendMail(form);
      setStatus("Message sent successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        location: "",
        amount: "50000",
        loanType: "",
        message: ""
      });

    } catch (err) {
      console.log(err);
      setStatus("Failed to send message. Try again!");
    }
  };

  // Format number with commas
  const formatAmount = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Calculate progress percentage for slider
  const sliderProgress = ((form.amount - 10000) / (500000 - 10000)) * 100;

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Fill in your details and we'll get back to you shortly.</p>

      <form className="contact-form" onSubmit={handleSubmit}>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-style"
          required
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="input-style"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-style"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location / City"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="input-style"
        />

        {/* LOAN AMOUNT INPUT */}
        <div className="amount-input-container">
          <input
            type="number"
            placeholder="Loan Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="input-style"
            min="10000"
            max="500000"
            step="5000"
            required
          />
        </div>

        {/* LOAN AMOUNT SLIDER */}
        <div className="slider-container">
          <label className="slider-label">
            Adjust Amount: ₹{formatAmount(form.amount)}
          </label>
          <div className="slider-wrapper">
            <input
              type="range"
              min="10000"
              max="500000"
              step="5000"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="loan-slider"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${sliderProgress}%, #bfdbfe ${sliderProgress}%, #bfdbfe 100%)`
              }}
            />
            <div className="slider-range">
              <span>₹10K</span>
              <span>₹500K</span>
            </div>
          </div>
        </div>

        {/* Loan Type */}
        <div className="loan-type-section">
          <label className="loan-type-label">Loan Type</label>

          <div className="loan-type-slider-container">
            {["Salary", "Business", "Home Loan", "Insurance"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setForm({ ...form, loanType: type })}
                className={`loan-type-slide ${form.loanType === type ? 'active' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="input-style message-textarea"
          required
        />

        {/* Submit */}
        <button type="submit" className="submit-button">
          Send Message
        </button>

        {status && (
          <p className={`status-message ${
            status.includes('successfully') ? 'status-success' : 
            status.includes('Failed') ? 'status-error' : 
            'status-sending'
          }`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}