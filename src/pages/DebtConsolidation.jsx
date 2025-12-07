import React from "react";
import { Link } from "react-router-dom";

export default function DebtConsolidation() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-indigo-50 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center text-xs sm:text-sm text-blue-700 hover:text-blue-900 mb-5"
        >
          ← Back to Home
        </Link>

        {/* Main card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.15)] border border-white/70 overflow-hidden">
          {/* Colorful header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 px-6 sm:px-8 py-5 sm:py-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-white/15 flex items-center justify-center text-lg">
                💳
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-blue-100">
                  Debt consolidation loan
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Combine multiple EMIs into one smart loan
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-blue-100/90 max-w-2xl">
              Close your existing loans and card dues with a single structured
              loan so you track just one EMI and one end date.
            </p>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-7">
            {/* Highlight strip */}
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                ✅ Cleaner monthly planning
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-semibold">
                💸 Focus on one EMI only
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left column */}
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-sm">
                    1
                  </span>
                  When does it make sense?
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li>• You’re juggling 2–3+ EMIs or card payments.</li>
                  <li>• Dates & amounts are confusing every month.</li>
                  <li>• Penalties / interest feel like they’re piling up.</li>
                  <li>• You want one fixed EMI and a clear closing date.</li>
                </ul>
              </div>

              {/* Right column */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 px-4 sm:px-5 py-4 sm:py-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  Quick snapshot
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Typical size:</span> Sum of
                    your existing loans / cards.
                  </p>
                  <p>
                    <span className="font-semibold">Goal:</span> Less mental
                    load & possibly lower overall interest.
                  </p>
                  <p>
                    <span className="font-semibold">Best for:</span> Salaried /
                    self-employed with stable income.
                  </p>
                  <p>
                    <span className="font-semibold">Important:</span> Close old
                    cards/loans properly to avoid fresh debt on top.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md transition">
                See if consolidation fits my case
              </button>
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition">
                Talk to a loan specialist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
