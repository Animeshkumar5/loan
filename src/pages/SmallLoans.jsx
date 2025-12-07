import React from "react";
import { Link } from "react-router-dom";

export default function SmallLoans() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-teal-50 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center text-xs sm:text-sm text-emerald-700 hover:text-emerald-900 mb-5"
        >
          ← Back to Home
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_18px_45px_rgba(22,101,52,0.16)] border border-white/70 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-6 sm:px-8 py-5 sm:py-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-white/15 flex items-center justify-center text-lg">
                ⚡
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-emerald-100">
                  Small personal loans
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Quick, smaller loans for everyday needs
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl">
              For medical bills, school fees, gadgets or short trips where you
              want a neat EMI instead of using high-interest options.
            </p>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-7">
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <span className="inline-flex px-3 py-1 rounded-full bg-white text-emerald-700 font-semibold border border-emerald-100">
                🌱 Ideal for smaller amounts
              </span>
              <span className="inline-flex px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-semibold">
                📆 Short–medium tenures
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 text-sm">
                    1
                  </span>
                  When does this fit?
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li>• You don’t need a very big loan amount.</li>
                  <li>• You can repay comfortably in 6–36 months.</li>
                  <li>• You prefer EMIs over swiping credit cards.</li>
                  <li>• You want to keep emergency savings untouched.</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 px-4 sm:px-5 py-4 sm:py-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  Snapshot
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Loan size:</span> Lower to
                    moderate ticket amounts.
                  </p>
                  <p>
                    <span className="font-semibold">Tenure:</span> Usually
                    shorter compared to big loans.
                  </p>
                  <p>
                    <span className="font-semibold">Use cases:</span> Medical,
                    personal events, gadgets, repairs, etc.
                  </p>
                  <p>
                    <span className="font-semibold">Docs:</span> Basic KYC +
                    proof of income are normally needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm hover:shadow-md transition">
                View small loan possibilities
              </button>
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition">
                Check documents required
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
