"use client";

import { useEffect } from "react";

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const petals = [
    { left: "7%", delay: "0.1s", size: 11 },
    { left: "16%", delay: "0.4s", size: 14 },
    { left: "27%", delay: "0.8s", size: 9 },
    { left: "38%", delay: "0.2s", size: 13 },
    { left: "50%", delay: "0.65s", size: 10 },
    { left: "61%", delay: "0.3s", size: 15 },
    { left: "72%", delay: "0.9s", size: 9 },
    { left: "84%", delay: "0.5s", size: 13 },
    { left: "93%", delay: "0.15s", size: 10 },
  ];

  return (
    <div className="fixed inset-0 z-[5000] overflow-hidden bg-[#f7f7f7]">
      {/* ========================================= */}
      {/* BACKGROUND */}
      {/* ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_0%,#f7f7f7_45%,#e5e5e5_100%)]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300/35 blur-[120px]" />

      {/* Decorative circles */}
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/40 sm:h-[430px] sm:w-[430px]" />

      <div className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200/50 sm:h-[390px] sm:w-[390px]" />

      {/* ========================================= */}
      {/* LEFT FLOWER GATE */}
      {/* ========================================= */}

      <div className="flower-gate-left absolute inset-y-0 left-0 w-[50%]">
        <svg
          viewBox="0 0 500 900"
          preserveAspectRatio="xMinYMid slice"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          {/* Main stem */}
          <path
            d="M30 900C55 720 70 570 130 430C185 300 275 175 440 60"
            stroke="#111111"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M92 680C54 650 38 610 35 560"
            stroke="#111111"
            strokeWidth="4"
          />

          <path
            d="M145 500C105 470 80 430 73 380"
            stroke="#111111"
            strokeWidth="4"
          />

          <path
            d="M220 310C175 285 145 250 128 205"
            stroke="#111111"
            strokeWidth="4"
          />

          {/* Leaves */}
          <ellipse
            cx="44"
            cy="555"
            rx="45"
            ry="17"
            transform="rotate(43 44 555)"
            fill="#404040"
          />

          <ellipse
            cx="110"
            cy="646"
            rx="48"
            ry="17"
            transform="rotate(-30 110 646)"
            fill="#525252"
          />

          <ellipse
            cx="78"
            cy="377"
            rx="43"
            ry="15"
            transform="rotate(40 78 377)"
            fill="#404040"
          />

          <ellipse
            cx="170"
            cy="451"
            rx="45"
            ry="16"
            transform="rotate(-28 170 451)"
            fill="#737373"
          />

          <ellipse
            cx="134"
            cy="202"
            rx="40"
            ry="14"
            transform="rotate(42 134 202)"
            fill="#525252"
          />

          <ellipse
            cx="240"
            cy="280"
            rx="45"
            ry="16"
            transform="rotate(-30 240 280)"
            fill="#858585"
          />

          {/* Large top flower */}
          <g transform="translate(422 72)">
            <circle cx="0" cy="-36" r="35" fill="#404040" />
            <circle cx="-34" cy="-13" r="34" fill="#737373" />
            <circle cx="34" cy="-10" r="34" fill="#525252" />
            <circle cx="-22" cy="27" r="34" fill="#D4D4D4" />
            <circle cx="27" cy="28" r="34" fill="#858585" />
            <circle cx="1" cy="2" r="18" fill="#111111" />
          </g>

          {/* Middle flower */}
          <g transform="translate(215 330)">
            <circle cx="0" cy="-25" r="23" fill="#404040" />
            <circle cx="-25" cy="-5" r="23" fill="#D4D4D4" />
            <circle cx="25" cy="-5" r="23" fill="#737373" />
            <circle cx="-15" cy="22" r="23" fill="#A3A3A3" />
            <circle cx="17" cy="22" r="23" fill="#525252" />
            <circle cx="0" cy="1" r="12" fill="#111111" />
          </g>

          {/* Bottom flower */}
          <g transform="translate(85 700)">
            <circle cx="0" cy="-23" r="21" fill="#404040" />
            <circle cx="-22" cy="-3" r="21" fill="#D4D4D4" />
            <circle cx="22" cy="-3" r="21" fill="#737373" />
            <circle cx="-12" cy="20" r="21" fill="#A3A3A3" />
            <circle cx="15" cy="20" r="21" fill="#525252" />
            <circle cx="0" cy="2" r="10" fill="#111111" />
          </g>
        </svg>
      </div>

      {/* ========================================= */}
      {/* RIGHT FLOWER GATE */}
      {/* ========================================= */}

      <div className="flower-gate-right absolute inset-y-0 right-0 w-[50%]">
        <svg
          viewBox="0 0 500 900"
          preserveAspectRatio="xMaxYMid slice"
          className="h-full w-full -scale-x-100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M30 900C55 720 70 570 130 430C185 300 275 175 440 60"
            stroke="#111111"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M92 680C54 650 38 610 35 560"
            stroke="#111111"
            strokeWidth="4"
          />

          <path
            d="M145 500C105 470 80 430 73 380"
            stroke="#111111"
            strokeWidth="4"
          />

          <path
            d="M220 310C175 285 145 250 128 205"
            stroke="#111111"
            strokeWidth="4"
          />

          <ellipse
            cx="44"
            cy="555"
            rx="45"
            ry="17"
            transform="rotate(43 44 555)"
            fill="#404040"
          />

          <ellipse
            cx="110"
            cy="646"
            rx="48"
            ry="17"
            transform="rotate(-30 110 646)"
            fill="#525252"
          />

          <ellipse
            cx="78"
            cy="377"
            rx="43"
            ry="15"
            transform="rotate(40 78 377)"
            fill="#404040"
          />

          <ellipse
            cx="170"
            cy="451"
            rx="45"
            ry="16"
            transform="rotate(-28 170 451)"
            fill="#737373"
          />

          <ellipse
            cx="134"
            cy="202"
            rx="40"
            ry="14"
            transform="rotate(42 134 202)"
            fill="#525252"
          />

          <ellipse
            cx="240"
            cy="280"
            rx="45"
            ry="16"
            transform="rotate(-30 240 280)"
            fill="#858585"
          />

          <g transform="translate(422 72)">
            <circle cx="0" cy="-36" r="35" fill="#404040" />
            <circle cx="-34" cy="-13" r="34" fill="#737373" />
            <circle cx="34" cy="-10" r="34" fill="#525252" />
            <circle cx="-22" cy="27" r="34" fill="#D4D4D4" />
            <circle cx="27" cy="28" r="34" fill="#858585" />
            <circle cx="1" cy="2" r="18" fill="#111111" />
          </g>

          <g transform="translate(215 330)">
            <circle cx="0" cy="-25" r="23" fill="#404040" />
            <circle cx="-25" cy="-5" r="23" fill="#D4D4D4" />
            <circle cx="25" cy="-5" r="23" fill="#737373" />
            <circle cx="-15" cy="22" r="23" fill="#A3A3A3" />
            <circle cx="17" cy="22" r="23" fill="#525252" />
            <circle cx="0" cy="1" r="12" fill="#111111" />
          </g>
        </svg>
      </div>

      {/* ========================================= */}
      {/* PETALS */}
      {/* ========================================= */}

      {petals.map((petal, index) => (
        <span
          key={index}
          className="splash-petal absolute -top-8 rounded-[100%_0_100%_0]"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.45}px`,
            animationDelay: petal.delay,
          }}
        />
      ))}

      {/* ========================================= */}
      {/* SPARKLES */}
      {/* ========================================= */}

      <span className="sparkle sparkle-1" />
      <span className="sparkle sparkle-2" />
      <span className="sparkle sparkle-3" />
      <span className="sparkle sparkle-4" />
      <span className="sparkle sparkle-5" />
      <span className="sparkle sparkle-6" />

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div className="splash-content absolute inset-0 z-20 flex items-center justify-center px-5">
        <div className="w-full max-w-[500px] text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.48em] text-[#404040] sm:text-xs">
            The Wedding Of
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-400 sm:w-14" />

            <span className="font-serif text-lg text-[#404040]">♡</span>

            <span className="h-px w-8 bg-neutral-400 sm:w-14" />
          </div>

          <div className="mt-6">
            <h1 className="font-serif text-[clamp(4.2rem,18vw,7.5rem)] leading-[0.82] text-[#111111] drop-shadow-[0_5px_20px_rgba(0,0,0,0.13)]">
              Aldi
            </h1>

            <p className="my-4 font-serif text-[clamp(2rem,8vw,3.3rem)] italic text-[#525252]">
              &
            </p>

            <h1 className="font-serif text-[clamp(4.2rem,18vw,7.5rem)] leading-[0.82] text-[#111111] drop-shadow-[0_5px_20px_rgba(0,0,0,0.13)]">
              Uli
            </h1>
          </div>

          <div className="mt-9 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-neutral-300 sm:w-12" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#404040] sm:text-xs">
              03 · 10 · 2026
            </p>

            <span className="h-px w-7 bg-neutral-300 sm:w-12" />
          </div>

          <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-neutral-300 bg-white/50 px-5 py-2 backdrop-blur">
            <span className="loading-dot" />

            <p className="text-[8px] uppercase tracking-[0.3em] text-[#525252]">
              Opening Invitation
            </p>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* OPENING OVERLAY */}
      {/* ========================================= */}

      <div className="opening-light absolute left-1/2 top-1/2 z-10 h-[300px] w-[5px] -translate-x-1/2 -translate-y-1/2 bg-white blur-sm" />

      <style jsx>{`
        .flower-gate-left {
          transform-origin: left center;

          animation: gateLeft 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .flower-gate-right {
          transform-origin: right center;

          animation: gateRight 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .splash-content {
          animation: contentSplash 2.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .opening-light {
          animation: openingLight 2.4s ease-in-out forwards;
        }

        .splash-petal {
          background: linear-gradient(
            135deg,
            rgba(245, 245, 245, 0.95),
            rgba(82, 82, 82, 0.85)
          );

          opacity: 0;

          animation: petalSplash 2.5s linear forwards;
        }

        .sparkle {
          position: absolute;
          z-index: 12;
          width: 5px;
          height: 5px;
          border-radius: 999px;

          background: #ffffff;

          box-shadow:
            0 0 7px rgba(255, 255, 255, 1),
            0 0 18px rgba(115, 115, 115, 0.8);

          animation: sparkleSplash 1.4s ease-in-out infinite;
        }

        .sparkle-1 {
          left: 22%;
          top: 28%;
        }

        .sparkle-2 {
          left: 33%;
          top: 66%;
          animation-delay: 0.3s;
        }

        .sparkle-3 {
          right: 22%;
          top: 32%;
          animation-delay: 0.6s;
        }

        .sparkle-4 {
          right: 31%;
          top: 68%;
          animation-delay: 0.9s;
        }

        .sparkle-5 {
          left: 48%;
          top: 15%;
          animation-delay: 0.45s;
        }

        .sparkle-6 {
          right: 47%;
          bottom: 14%;
          animation-delay: 0.75s;
        }

        .loading-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;

          background: #111111;

          animation: loadingPulse 1s ease-in-out infinite;
        }

        @keyframes gateLeft {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }

          55% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }

          100% {
            transform: translateX(-105%) scale(1.05);
            opacity: 0.6;
          }
        }

        @keyframes gateRight {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }

          55% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }

          100% {
            transform: translateX(105%) scale(1.05);
            opacity: 0.6;
          }
        }

        @keyframes contentSplash {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(20px);
          }

          18% {
            opacity: 1;
          }

          65% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }

          86% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: scale(1.06);
          }
        }

        @keyframes openingLight {
          0%,
          55% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleY(0.2);
          }

          78% {
            opacity: 1;
            transform: translate(-50%, -50%) scaleY(2);

            box-shadow:
              0 0 50px rgba(255, 255, 255, 1),
              0 0 120px rgba(255, 255, 255, 0.7);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleX(100) scaleY(4);
          }
        }

        @keyframes petalSplash {
          0% {
            opacity: 0;
            transform: translate3d(0, -8vh, 0) rotate(0deg);
          }

          15% {
            opacity: 0.85;
          }

          45% {
            transform: translate3d(25px, 38vh, 0) rotate(160deg);
          }

          75% {
            transform: translate3d(-20px, 72vh, 0) rotate(300deg);
          }

          100% {
            opacity: 0;
            transform: translate3d(30px, 108vh, 0) rotate(440deg);
          }
        }

        @keyframes sparkleSplash {
          0%,
          100% {
            transform: scale(0.3);
            opacity: 0.1;
          }

          50% {
            transform: scale(1.8);
            opacity: 1;
          }
        }

        @keyframes loadingPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        @media (max-width: 640px) {
          .flower-gate-left,
          .flower-gate-right {
            width: 58%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flower-gate-left,
          .flower-gate-right,
          .splash-content,
          .opening-light,
          .splash-petal,
          .sparkle {
            animation-duration: 0.01ms;
          }
        }
      `}</style>
    </div>
  );
}
