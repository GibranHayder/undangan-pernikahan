"use client";

import { useEffect, useRef, useState } from "react";

const sparkles = [
  { left: "10%", top: "18%", delay: "0s" },
  { left: "18%", top: "62%", delay: "1.1s" },
  { left: "30%", top: "28%", delay: "0.5s" },
  { left: "42%", top: "72%", delay: "1.7s" },
  { left: "57%", top: "20%", delay: "0.8s" },
  { left: "69%", top: "66%", delay: "2s" },
  { left: "82%", top: "30%", delay: "1.3s" },
  { left: "91%", top: "58%", delay: "0.3s" },
];

export default function FinalCinematic() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0a0a0a] px-5 py-24 text-white sm:px-8"
    >
      {/* ================================= */}
      {/* CINEMATIC BACKGROUND */}
      {/* ================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(38,38,38,0.45)_38%,#050505_78%)]" />

      <div className="absolute left-1/2 top-[43%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#404040]/10 blur-[130px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.48)_100%)]" />

      {/* ================================= */}
      {/* MOON / HALO */}
      {/* ================================= */}

      <div
        className={`cinema-halo absolute left-1/2 top-[40%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[420px] sm:w-[420px] ${
          visible ? "cinema-visible" : ""
        }`}
      />

      <div
        className={`cinema-halo cinema-halo-two absolute left-1/2 top-[40%] h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A3A3A3]/10 sm:h-[350px] sm:w-[350px] ${
          visible ? "cinema-visible" : ""
        }`}
      />

      {/* ================================= */}
      {/* SPARKLES */}
      {/* ================================= */}

      {sparkles.map((sparkle, index) => (
        <span
          key={index}
          className={`cinema-sparkle absolute ${
            visible ? "cinema-visible" : ""
          }`}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay,
          }}
        />
      ))}

      {/* ================================= */}
      {/* BUNGA KIRI BAWAH */}
      {/* ================================= */}

      <svg
        viewBox="0 0 360 560"
        className={`cinema-flower-left pointer-events-none absolute -bottom-20 -left-24 w-[280px] opacity-70 sm:w-[380px] lg:w-[450px] ${
          visible ? "cinema-visible" : ""
        }`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M55 555C70 420 115 300 184 202C231 136 280 83 340 38"
          stroke="#737373"
          strokeWidth="3"
        />

        <path
          d="M107 405C75 379 54 342 50 300"
          stroke="#737373"
          strokeWidth="2.5"
        />

        <path
          d="M165 275C125 252 101 215 94 170"
          stroke="#737373"
          strokeWidth="2.5"
        />

        <ellipse
          cx="53"
          cy="297"
          rx="40"
          ry="14"
          transform="rotate(42 53 297)"
          fill="#404040"
        />

        <ellipse
          cx="132"
          cy="378"
          rx="44"
          ry="15"
          transform="rotate(-29 132 378)"
          fill="#626262"
        />

        <ellipse
          cx="98"
          cy="167"
          rx="39"
          ry="14"
          transform="rotate(40 98 167)"
          fill="#525252"
        />

        <ellipse
          cx="201"
          cy="240"
          rx="42"
          ry="14"
          transform="rotate(-30 201 240)"
          fill="#858585"
        />

        <g transform="translate(319 50)">
          <circle cx="0" cy="-30" r="29" fill="#404040" />

          <circle cx="-28" cy="-8" r="27" fill="#858585" />

          <circle cx="27" cy="-8" r="27" fill="#737373" />

          <circle cx="-16" cy="25" r="27" fill="#858585" />

          <circle cx="19" cy="25" r="27" fill="#737373" />

          <circle cx="1" cy="1" r="13" fill="#A3A3A3" />
        </g>
      </svg>

      {/* ================================= */}
      {/* BUNGA KANAN BAWAH */}
      {/* ================================= */}

      <svg
        viewBox="0 0 360 560"
        className={`cinema-flower-right pointer-events-none absolute -bottom-20 -right-24 w-[280px] -scale-x-100 opacity-70 sm:w-[380px] lg:w-[450px] ${
          visible ? "cinema-visible" : ""
        }`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M55 555C70 420 115 300 184 202C231 136 280 83 340 38"
          stroke="#737373"
          strokeWidth="3"
        />

        <path
          d="M107 405C75 379 54 342 50 300"
          stroke="#737373"
          strokeWidth="2.5"
        />

        <path
          d="M165 275C125 252 101 215 94 170"
          stroke="#737373"
          strokeWidth="2.5"
        />

        <ellipse
          cx="53"
          cy="297"
          rx="40"
          ry="14"
          transform="rotate(42 53 297)"
          fill="#404040"
        />

        <ellipse
          cx="132"
          cy="378"
          rx="44"
          ry="15"
          transform="rotate(-29 132 378)"
          fill="#626262"
        />

        <ellipse
          cx="98"
          cy="167"
          rx="39"
          ry="14"
          transform="rotate(40 98 167)"
          fill="#525252"
        />

        <ellipse
          cx="201"
          cy="240"
          rx="42"
          ry="14"
          transform="rotate(-30 201 240)"
          fill="#858585"
        />

        <g transform="translate(319 50)">
          <circle cx="0" cy="-30" r="29" fill="#404040" />

          <circle cx="-28" cy="-8" r="27" fill="#858585" />

          <circle cx="27" cy="-8" r="27" fill="#737373" />

          <circle cx="-16" cy="25" r="27" fill="#858585" />

          <circle cx="19" cy="25" r="27" fill="#737373" />

          <circle cx="1" cy="1" r="13" fill="#A3A3A3" />
        </g>
      </svg>

      {/* ================================= */}
      {/* CONTENT */}
      {/* ================================= */}

      <div
        className={`cinema-content relative z-20 mx-auto w-full max-w-3xl text-center ${
          visible ? "cinema-visible" : ""
        }`}
      >
        <p className="text-[9px] uppercase tracking-[0.5em] text-[#A3A3A3] sm:text-xs">
          A New Chapter Begins
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-white/20 sm:w-16" />

          <span className="text-[#A3A3A3]">✦</span>

          <span className="h-px w-10 bg-white/20 sm:w-16" />
        </div>

        <p className="mt-9 font-serif text-[clamp(1.5rem,6vw,3rem)] italic text-[#B3B3B3]">
          See You On Our
        </p>

        <h2 className="mt-2 font-serif text-[clamp(2.7rem,11vw,6.5rem)] leading-[0.95] text-white">
          Special Day
        </h2>

        <div className="my-10 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#8A8A8A]/40" />

          <span className="font-serif text-2xl text-[#8A8A8A]">♡</span>

          <span className="h-px w-12 bg-[#8A8A8A]/40" />
        </div>

        {/* ================================= */}
        {/* ALDHY & ULLY */}
        {/* ================================= */}

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737373]/10 blur-[60px]" />

          <h3 className="cinema-name relative font-serif text-[clamp(4rem,16vw,7rem)] font-normal leading-[0.82] tracking-[-0.04em]">
            Aldhy
          </h3>

          <p className="relative my-5 font-serif text-[clamp(2rem,8vw,3.4rem)] font-normal italic text-[#8A8A8A]">
            &
          </p>

          <h3 className="cinema-name cinema-name-delay relative font-serif text-[clamp(4rem,16vw,7rem)] font-normal leading-[0.82] tracking-[-0.04em]">
            Ully
          </h3>
        </div>

        <p className="mt-11 text-[10px] font-medium uppercase tracking-[0.32em] text-white/65 sm:text-xs">
          Sabtu · October 03, 2026
        </p>

        <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          Terima kasih telah menjadi bagian dari cerita dan hari bahagia kami.
        </p>

        <div className="mt-10">
          <span className="text-3xl text-[#8A8A8A]">♡</span>
        </div>

        <p className="mt-5 text-[8px] uppercase tracking-[0.4em] text-white/35 sm:text-[9px]">
          The Wedding of Aldhy & Ully
        </p>
      </div>

      {/* ================================= */}
      {/* BOTTOM LIGHT */}
      {/* ================================= */}

      <div
        className={`cinema-bottom-light pointer-events-none absolute bottom-0 left-1/2 h-[180px] w-[70%] -translate-x-1/2 rounded-full bg-[#404040]/15 blur-[80px] ${
          visible ? "cinema-visible" : ""
        }`}
      />

      <style jsx>{`
        .cinema-content {
          opacity: 0;
          transform: translateY(45px) scale(0.97);
        }

        .cinema-content.cinema-visible {
          animation: cinematicContent 1.5s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .cinema-flower-left {
          transform: translateY(170px) rotate(-8deg);
          opacity: 0;
        }

        .cinema-flower-left.cinema-visible {
          animation: cinematicFlowerLeft 1.8s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .cinema-flower-right {
          transform: translateY(170px) scaleX(-1) rotate(-8deg);
          opacity: 0;
        }

        .cinema-flower-right.cinema-visible {
          animation: cinematicFlowerRight 1.8s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .cinema-halo {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.7);
        }

        .cinema-halo.cinema-visible {
          animation: cinematicHalo 2s ease-out forwards;
        }

        .cinema-halo-two {
          animation-delay: 0.25s !important;
        }

        .cinema-sparkle {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: #fff;

          box-shadow:
            0 0 7px rgba(255, 255, 255, 0.95),
            0 0 18px rgba(163, 163, 163, 0.7);

          opacity: 0;
        }

        .cinema-sparkle.cinema-visible {
          animation: cinematicSparkle 3s ease-in-out infinite;
        }

        .cinema-name {
          color: white;

          background: linear-gradient(
            110deg,
            #ffffff 0%,
            #ffffff 32%,
            #a3a3a3 44%,
            #f5f5f5 50%,
            #a3a3a3 56%,
            #ffffff 68%,
            #ffffff 100%
          );

          background-size: 260% 100%;
          background-position: 150% 0;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;

          animation: cinematicNameSweep 6s ease-in-out infinite;
        }

        .cinema-name-delay {
          animation-delay: 0.4s;
        }

        .cinema-bottom-light {
          opacity: 0;
        }

        .cinema-bottom-light.cinema-visible {
          animation: bottomLight 2s ease-out forwards;
        }

        @keyframes cinematicContent {
          from {
            opacity: 0;
            transform: translateY(45px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cinematicFlowerLeft {
          from {
            opacity: 0;
            transform: translateY(170px) rotate(-8deg);
          }

          to {
            opacity: 0.7;
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes cinematicFlowerRight {
          from {
            opacity: 0;
            transform: translateY(170px) scaleX(-1) rotate(-8deg);
          }

          to {
            opacity: 0.7;
            transform: translateY(0) scaleX(-1) rotate(0deg);
          }
        }

        @keyframes cinematicHalo {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.7);
          }

          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes cinematicSparkle {
          0%,
          100% {
            opacity: 0.12;
            transform: scale(0.5);
          }

          50% {
            opacity: 1;
            transform: scale(1.8);
          }
        }

        @keyframes cinematicNameSweep {
          0%,
          25% {
            background-position: 150% 0;
          }

          50% {
            background-position: -50% 0;
          }

          100% {
            background-position: -50% 0;
          }
        }

        @keyframes bottomLight {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.5);
          }

          to {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cinema-content,
          .cinema-flower-left,
          .cinema-flower-right,
          .cinema-halo,
          .cinema-sparkle,
          .cinema-name,
          .cinema-bottom-light {
            animation: none !important;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
