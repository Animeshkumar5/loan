import React from 'react';

// All bank/NBFC partner logos from the /partners/ folder
const partners = [
  { name: "IndusInd Bank",      logo: "/partners/153-1531648_indusind-bank-logo-vector-indusind-bank-logo-png.png" },
  { name: "Yes Bank",           logo: "/partners/438-4386875_yes-bank-logo-png-transparent-png (1).png" },
  { name: "Bajaj Finserv",      logo: "/partners/Bajaj-Finserv-Logo.jpg" },
  { name: "Hero FinCorp",       logo: "/partners/Hero_FinCorp_Logo_New_Final_2013_Vertical_Wiki.png" },
  { name: "InCred",             logo: "/partners/InCred-Group-Logo-01.png" },
  { name: "Kotak Mahindra",     logo: "/partners/Kotak_Mahindra_Group_logo.svg.png" },
  { name: "Poonawalla Fincorp", logo: "/partners/POONAWALLA.NS_BIG.png" },
  { name: "Partner Bank",       logo: "/partners/627bad6e8d659819b1108502.png" },
  { name: "Partner Bank 2",     logo: "/partners/627cc46b1b2e263b45696a82.png" },
  { name: "Partner Bank 3",     logo: "/partners/627ccb0a1b2e263b45696aa5.png" },
  { name: "Partner Bank 4",     logo: "/partners/627ccb811b2e263b45696aa8.png" },
];

// Duplicate for seamless infinite loop
const allPartners = [...partners, ...partners];

export default function AuthorisedBankingPartners() {
  return (
    <section className="bg-white py-14 sm:py-20 overflow-hidden">
      {/* ── Section Header ── */}
      <div className="text-center mb-10 px-4">
        {/* Pill badge */}
        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-blue-100">
          Trusted Network
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 mb-3">
          Authorised Banking Partners
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          We work with India's leading banks &amp; NBFCs to get you the best loan offers at the lowest rates.
        </p>
      </div>

      {/* ── Marquee Track ── */}
      {/* The outer div masks the edges with a gradient fade.
        The inner div (.partners-track) runs the infinite scroll.
        On hover over any individual card, the track pauses.
      */}
      <div
        className="relative"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="partners-track flex gap-6 w-max">
          {allPartners.map((partner, idx) => (
            <PartnerCard key={idx} partner={partner} />
          ))}
        </div>
      </div>

      {/* ── Inline CSS for the scroll animation ── */}
      <style>{`
        .partners-track {
          animation: partners-scroll 35s linear infinite;
        }
        .partners-track:hover {
          animation-play-state: paused;
        }

        @keyframes partners-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .partner-card {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .partner-card:hover {
          transform: translateY(-10px) scale(1.06);
          box-shadow: 0 20px 45px rgba(59, 130, 246, 0.18);
          border-color: #3b82f6;
        }
        /* Removed the grayscale and opacity filters here so the image is always in full color */
        .partner-card img {
          transition: transform 0.35s ease; 
        }
      `}</style>
    </section>
  );
}

function PartnerCard({ partner }) {
  return (
    <div
      className="partner-card flex-shrink-0 w-44 h-24 sm:w-52 sm:h-28 
                 bg-white border-2 border-gray-100 rounded-2xl 
                 flex items-center justify-center px-5 
                 cursor-pointer shadow-sm"
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-14 sm:max-h-16 max-w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}