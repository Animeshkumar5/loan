import React from "react";
import { Link } from "react-router-dom";

export default function HomeImprovement() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center text-xs sm:text-sm text-orange-700 hover:text-orange-900 mb-5"
        >
          ← Back to Home
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_18px_45px_rgba(194,65,12,0.16)] border border-white/70 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 px-6 sm:px-8 py-5 sm:py-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-white/15 flex items-center justify-center text-lg">
                🏠
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-orange-100">
                  Home improvement loan
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Repair, upgrade or renovate without big one-time hit
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-orange-50 max-w-2xl">
              Spread the cost of painting, interiors, repairs and upgrades into
              EMIs instead of draining savings in one go.
            </p>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-7">
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <span className="inline-flex px-3 py-1 rounded-full bg-white text-orange-700 font-semibold border border-orange-100">
                🧱 Renovations & repairs
              </span>
              <span className="inline-flex px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold">
                💡 Keep emergency savings safe
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 text-sm">
                    1
                  </span>
                  Good use-cases
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li>• Renovating kitchen, bedrooms or bathrooms.</li>
                  <li>• Fixing leaks, damp walls or structural issues.</li>
                  <li>• Adding wardrobes, furniture or basic interiors.</li>
                  <li>• You want to keep some savings untouched as buffer.</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 px-4 sm:px-5 py-4 sm:py-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  Snapshot
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Usage:</span> Only for
                    home-related expenses (renovation / repair / interiors).
                  </p>
                  <p>
                    <span className="font-semibold">Amount:</span> Depends on
                    income and property profile.
                  </p>
                  <p>
                    <span className="font-semibold">Tenure:</span> Medium to
                    long so EMIs stay comfortable.
                  </p>
                  <p>
                    <span className="font-semibold">Tip:</span> Keep project
                    estimates / invoices handy for smoother processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 shadow-sm hover:shadow-md transition">
                Get a home improvement quote
              </button>
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition">
                Estimate EMI for my project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
