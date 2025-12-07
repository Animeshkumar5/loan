import React from "react";
import { Link } from "react-router-dom";

export default function CreditCardConsolidation() {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-white to-fuchsia-50 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center text-xs sm:text-sm text-purple-700 hover:text-purple-900 mb-5"
        >
          ← Back to Home
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_18px_45px_rgba(88,28,135,0.18)] border border-white/70 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-6 sm:px-8 py-5 sm:py-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-2xl bg-white/15 flex items-center justify-center text-lg">
                💳
              </div>
              <div>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-pink-100">
                  Credit card consolidation
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Turn card dues into one planned EMI
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-pink-100/90 max-w-2xl">
              Instead of paying only “minimum due” on different cards, shift the
              total into a structured loan with a fixed end date.
            </p>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-8 py-6 sm:py-8 space-y-7">
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <span className="inline-flex px-3 py-1 rounded-full bg-white text-purple-700 font-semibold border border-purple-100">
                ⚠️ High card interest? This can help.
              </span>
              <span className="inline-flex px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 font-semibold">
                🎯 One EMI, clear finish line
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 text-sm">
                    1
                  </span>
                  When should you consider it?
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li>• You have 2 or more active cards with balances.</li>
                  <li>• You mostly pay just the “minimum due”.</li>
                  <li>• Interest (30–40%+ yearly) feels too heavy.</li>
                  <li>• You want a fixed EMI that actually clears the dues.</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-100 px-4 sm:px-5 py-4 sm:py-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  Snapshot
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>
                    <span className="font-semibold">Benefit:</span> Often lower
                    rate than cards + fixed timeline.
                  </p>
                  <p>
                    <span className="font-semibold">Discipline:</span> Stop
                    fresh spending on those cards after consolidation.
                  </p>
                  <p>
                    <span className="font-semibold">Helpful for:</span> People
                    stuck in a loop of rolling card dues.
                  </p>
                  <p>
                    <span className="font-semibold">Good sign:</span> You’re
                    ready to change habits, not repeat the cycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 shadow-sm hover:shadow-md transition">
                Check if card consolidation suits me
              </button>
              <button className="inline-flex justify-center items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition">
                Get a quick consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
