import React, { useEffect, useRef, useState } from 'react';

// ── Animated counter hook ──────────────────────────────────────────────────
function useCountUp(target, duration = 2200, started = false, delay = 0) {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!started) return;
    timerRef.current = setTimeout(() => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(ease * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timerRef.current);
  }, [started, target, duration, delay]);

  return count;
}

// ── Individual loan stat card (proper component so hooks are valid) ─────────
function LoanCard({ icon, label, value, suffix, color, delay, started }) {
  const count = useCountUp(value, 2200, started, delay);

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl border transition-all duration-500 cursor-default group overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      {/* Hover inner glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `inset 0 0 60px ${color}25` }}
      />
      {/* Top shimmer line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      />

      {/* Icon bubble */}
      <div
        className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl shadow-md"
        style={{ background: `${color}20`, border: `1.5px solid ${color}45` }}
      >
        {icon}
      </div>

      {/* Label */}
      <p className="relative z-10 text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
        {label}
      </p>

      {/* Animated count */}
      <div className="relative z-10 flex items-baseline gap-0.5">
        <span
          className="text-3xl sm:text-4xl lg:text-5xl font-black tabular-nums leading-none"
          style={{ color }}
        >
          {count}
        </span>
        <span className="text-xl sm:text-2xl font-black" style={{ color }}>
          {suffix}
        </span>
      </div>

      {/* Bottom sweep line on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 rounded-full transition-all duration-700"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      />
    </div>
  );
}

// ── Happy Clients hero card ────────────────────────────────────────────────
function HappyClientsCard({ started }) {
  const count = useCountUp(60, 2500, started, 200);

  return (
    <div
      className="relative flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 rounded-3xl p-8 sm:p-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)',
        boxShadow: '0 30px 70px rgba(99,102,241,0.45)',
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, white, transparent)' }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, white, transparent)' }}
      />

      {/* ── Left: text ── */}
      <div className="relative z-10 text-center sm:text-left">
        <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-3">
          🎉 Milestone Achieved
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2">
          Clients Happy &amp; Counting!
        </h3>
        <p className="text-blue-200 text-sm sm:text-base max-w-sm">
          Over 60,000 satisfied customers across India have trusted PaisaSolutions for their financial journey.
        </p>
      </div>

      {/* ── Right: big number ── */}
      <div className="relative z-10 flex-shrink-0 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-7xl sm:text-8xl font-black text-white tabular-nums leading-none">
            {count}
          </span>
          <span className="text-4xl sm:text-5xl font-black text-yellow-300 leading-none">K+</span>
        </div>
        <p className="text-blue-200 text-xs sm:text-sm font-bold uppercase tracking-widest mt-2">
          Happy Clients
        </p>
        {/* Subtle pulse behind number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div
            className="w-40 h-40 rounded-full animate-ping opacity-5"
            style={{ background: 'white', animationDuration: '2.5s' }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
const loanStats = [
  { icon: '🏢', label: 'Business Loan',  value: 15, suffix: 'K+', color: '#60a5fa', delay: 0   },
  { icon: '👤', label: 'Personal Loan',  value: 9,  suffix: 'K+', color: '#a78bfa', delay: 150 },
  { icon: '🔓', label: 'Unsecured Loan', value: 7,  suffix: 'K+', color: '#22d3ee', delay: 300 },
  { icon: '🔒', label: 'Secure Loan',    value: 10, suffix: 'K+', color: '#34d399', delay: 450 },
];

export default function LoanStatsCounter() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 55%, #0f172a 100%)',
      }}
    >
      {/* ── Background blobs ── */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #3b82f6, transparent)',
          transform: 'translate(-40%, -40%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6, transparent)',
          transform: 'translate(40%, 40%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-blue-400 bg-blue-400/10 border border-blue-400/30 px-4 py-1.5 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Loan Provided to{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #a78bfa)' }}
            >
              Clients
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Numbers that speak for themselves — real loans, real people, real impact across India.
          </p>
        </div>

        {/* ── 4 Loan stat cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {loanStats.map((stat) => (
            <LoanCard key={stat.label} {...stat} started={started} />
          ))}
        </div>

        {/* ── Happy Clients banner ── */}
        <HappyClientsCard started={started} />

      </div>
    </section>
  );
}
