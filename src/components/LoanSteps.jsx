import React from "react";

const steps = [
  {
    number: "01",
    title: "Fill Basic Details",
    desc: "Help us know your name, employment status, city, mobile number and basic loan requirement.",
    color: "rose-500",
    border: "border-rose-500",
    softBorder: "border-rose-200",
    text: "text-rose-600",
    waveColor: "rgba(244, 63, 94, 0.5)" // Rose
  },
  {
    number: "02",
    title: "Self Check Eligibility",
    desc: "Based on your submitted information, we show you basic eligibility for different loan options.",
    color: "amber-500",
    border: "border-amber-500",
    softBorder: "border-amber-200",
    text: "text-amber-600",
    waveColor: "rgba(245, 158, 11, 0.5)" // Amber
  },
  {
    number: "03",
    title: "Online Document Submission",
    desc: "Upload salary slips, bank statements, ID proof and other documents securely from your phone.",
    color: "blue-500",
    border: "border-blue-500",
    softBorder: "border-blue-200",
    text: "text-blue-600",
    waveColor: "rgba(59, 130, 246, 0.5)" // Blue
  },
  {
    number: "04",
    title: "Loan Decision",
    desc: "Your documents are reviewed to check whether your application is approved or rejected.",
    color: "pink-500",
    border: "border-pink-500",
    softBorder: "border-pink-200",
    text: "text-pink-600",
    waveColor: "rgba(236, 72, 153, 0.5)" // Pink
  },
  {
    number: "05",
    title: "Loan Sanctioned",
    desc: "You get to know the sanctioned amount, final interest rate, tenure and repayment details.",
    color: "purple-500",
    border: "border-purple-500",
    softBorder: "border-purple-200",
    text: "text-purple-600",
    waveColor: "rgba(168, 85, 247, 0.5)" // Purple
  },
  {
    number: "06",
    title: "Loan Disbursal",
    desc: "Once all checks are done, the amount is credited directly to your bank account.",
    color: "emerald-500",
    border: "border-emerald-500",
    softBorder: "border-emerald-200",
    text: "text-emerald-600",
    waveColor: "rgba(16, 185, 129, 0.5)" // Emerald
  },
];

export default function LoanSteps() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 w-full overflow-hidden">
      {/* 1. Changed max-w-6xl to max-w-[1600px] for wider content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
            How it works
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            6 Easy Steps to Apply for Loans
          </h2>
        </div>

        {/* Steps grid - Increased gap for wider look */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {steps.map((step) => (
            <div key={step.number} className="relative flex items-center group">

              {/* CIRCLES + WAVE ANIMATION */}
              <div className="relative flex-shrink-0 z-10">
                
                {/* 2. Wave Animation Layer */}
                <div 
                  className="absolute inset-0 rounded-full animate-wave"
                  style={{ '--wave-color': step.waveColor }}
                ></div>

                <div
                  className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full ${step.softBorder} border-[6px]
                              flex items-center justify-center bg-white shadow-lg`}
                >
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full ${step.border} border-[6px]
                                flex items-center justify-center bg-white`}
                  >
                    <span className={`text-2xl sm:text-3xl font-extrabold ${step.text}`}>
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div
                className={`
                  flex-grow
                  ml-4 sm:ml-6 bg-white rounded-3xl relative
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]
                  transition-shadow duration-300
                  border border-slate-100
                  pl-12 pr-6 py-6 sm:py-8
                  -ml-10 sm:-ml-12
                  rounded-r-3xl border-r-8
                  z-0
                `}
                // Inline style for dynamic border color to ensure it works
                style={{ borderRightColor: step.waveColor.replace('0.5', '1').replace(')', ')') }} 
              >
                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}