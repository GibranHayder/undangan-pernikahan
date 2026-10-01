"use client";

import { Cormorant_Garamond } from "next/font/google";

const weddingNameFont = Cormorant_Garamond({
  weight: "600",
  subsets: ["latin"],
});

export default function Cover({ guestName = "Tamu Undangan", onOpen }) {
  const openInvitation = () => {
    onOpen?.();
  };

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#f7f7f7] px-4 py-10 sm:px-6">
      {/* ========================================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-neutral-300/30 blur-[90px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-neutral-400/25 blur-[100px] sm:h-[430px] sm:w-[430px]" />

      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[100px] sm:h-[500px] sm:w-[500px]" />

      {/* ========================================= */}
      {/* SMALL SPARKLES */}
      {/* ========================================= */}

      <span className="cover-sparkle absolute left-[12%] top-[22%]" />

      <span className="cover-sparkle absolute left-[23%] top-[69%] [animation-delay:0.8s]" />

      <span className="cover-sparkle absolute right-[14%] top-[28%] [animation-delay:1.4s]" />

      <span className="cover-sparkle absolute right-[22%] top-[71%] [animation-delay:2s]" />

      {/* ========================================= */}
      {/* LEFT FLORAL */}
      {/* ========================================= */}

      <svg
        viewBox="0 0 300 430"
        className="pointer-events-none absolute -left-16 -top-16 w-[210px] opacity-50 sm:w-[270px] lg:w-[330px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M64 415C77 322 96 236 144 151C168 108 202 69 250 32"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M104 286C79 269 61 245 53 215"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M134 180C105 164 85 137 79 108"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="57"
          cy="211"
          rx="25"
          ry="10"
          transform="rotate(40 57 211)"
          fill="#404040"
        />

        <ellipse
          cx="81"
          cy="106"
          rx="25"
          ry="10"
          transform="rotate(35 81 106)"
          fill="#525252"
        />

        <ellipse
          cx="115"
          cy="269"
          rx="26"
          ry="10"
          transform="rotate(-25 115 269)"
          fill="#737373"
        />

        <g transform="translate(240 20)">
          <circle cx="0" cy="0" r="22" fill="#404040" />

          <circle cx="-17" cy="-8" r="18" fill="#D4D4D4" />

          <circle cx="15" cy="-11" r="17" fill="#737373" />

          <circle cx="18" cy="13" r="17" fill="#A3A3A3" />

          <circle cx="-10" cy="18" r="18" fill="#525252" />

          <circle cx="2" cy="3" r="8" fill="#262626" />
        </g>
      </svg>

      {/* ========================================= */}
      {/* RIGHT FLORAL */}
      {/* ========================================= */}

      <svg
        viewBox="0 0 300 430"
        className="pointer-events-none absolute -bottom-24 -right-20 w-[230px] rotate-180 opacity-45 sm:w-[290px] lg:w-[350px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M64 415C77 322 96 236 144 151C168 108 202 69 250 32"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M104 286C79 269 61 245 53 215"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="57"
          cy="211"
          rx="25"
          ry="10"
          transform="rotate(40 57 211)"
          fill="#404040"
        />

        <ellipse
          cx="115"
          cy="269"
          rx="26"
          ry="10"
          transform="rotate(-25 115 269)"
          fill="#737373"
        />
      </svg>

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div className="relative z-10 mx-auto flex w-full max-w-[520px] flex-col items-center text-center">
        {/* WEDDING TITLE */}

        <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#525252] sm:text-xs">
          The Wedding Of
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-400 sm:w-14" />

          <span className="font-serif text-lg text-[#404040]">♡</span>

          <span className="h-px w-8 bg-neutral-400 sm:w-14" />
        </div>

        {/* ========================================= */}
        {/* ALDHY & ULLY */}
        {/* ========================================= */}

        <div className="relative mt-6">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300/20 blur-[55px]" />

          <div className="relative">
            {/* ALDHY */}

            <div className="premium-name-wrapper">
              <h1
                className={`${weddingNameFont.className} premium-name text-[clamp(4.5rem,19vw,7.5rem)] font-semibold tracking-[0.03em] leading-[0.85]`}
              >
                ALDHY
              </h1>
            </div>

            {/* & */}

            <div className="relative my-5 flex items-center justify-center gap-3">
              <span className="h-px w-5 bg-neutral-300/80" />

              <p className="font-serif text-[clamp(1.8rem,8vw,3.5rem)] italic text-[#525252]">
                &
              </p>

              <span className="h-px w-5 bg-neutral-300/80" />
            </div>

            {/* ULLY */}

            <div className="premium-name-wrapper">
              <h1
                className={`${weddingNameFont.className} premium-name premium-name-delay text-[clamp(4.5rem,19vw,7.5rem)] font-semibold tracking-[0.03em] leading-[0.85]`}
              >
                ULLY
              </h1>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* DATE */}
        {/* ========================================= */}

        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-6 bg-neutral-300 sm:w-10" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#525252] sm:text-xs">
            03 • 10 • 2026
          </p>

          <span className="h-px w-6 bg-neutral-300 sm:w-10" />
        </div>

        {/* ========================================= */}
        {/* GUEST NAME */}
        {/* ========================================= */}

        <div className="mt-9 w-full max-w-[390px]">
          <p className="text-xs text-[#525252] sm:text-sm">Kepada Yth.</p>

          <h2 className="mt-2 break-words px-3 font-serif text-[clamp(1.7rem,7vw,2.4rem)] font-semibold text-[#111111]">
            {guestName}
          </h2>

          <p className="mx-auto mt-4 max-w-[330px] text-xs leading-6 text-[#525252] sm:text-sm">
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
            untuk hadir dan memberikan doa restu pada hari bahagia kami.
          </p>
        </div>

        {/* ========================================= */}
        {/* BUTTON */}
        {/* ========================================= */}

        <button
          type="button"
          onClick={openInvitation}
          className="open-button group relative mt-8 inline-flex min-h-[48px] items-center gap-2 overflow-hidden rounded-full bg-[#171717] px-7 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-black active:scale-95"
        >
          <span className="button-shine pointer-events-none absolute inset-y-0 left-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <span className="relative z-10 text-base">♡</span>

          <span className="relative z-10">Buka Undangan</span>
        </button>

        {/* SAVE DATE */}

        <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-[#737373]">
          Save The Date
        </p>

        {/* BOTTOM ORNAMENT */}

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-px w-4 bg-neutral-300" />

          <span className="text-[10px] text-neutral-500">✦</span>

          <span className="h-px w-4 bg-neutral-300" />
        </div>
      </div>

      {/* ========================================= */}
      {/* CSS EFFECT */}
      {/* ========================================= */}

      <style jsx>{`
        .premium-name-wrapper {
          position: relative;
          display: inline-block;
        }

        .premium-name {
          position: relative;

          color: #111111;

          text-shadow:
            0 3px 14px rgba(0, 0, 0, 0.1),
            0 10px 30px rgba(0, 0, 0, 0.08);

          background: linear-gradient(
            105deg,
            #111111 0%,
            #111111 35%,
            #737373 44%,
            #f5f5f5 49%,
            #737373 54%,
            #111111 63%,
            #111111 100%
          );

          background-size: 250% 100%;
          background-position: 150% 0;

          -webkit-background-clip: text;
          background-clip: text;

          -webkit-text-fill-color: transparent;

          animation: premiumNameSweep 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .premium-name-delay {
          animation-delay: 0.35s;
        }

        .premium-name-wrapper::after {
          content: "";

          position: absolute;

          left: 18%;
          right: 18%;
          bottom: -6px;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(64, 64, 64, 0.7),
            transparent
          );

          opacity: 0.45;
        }

        .cover-sparkle {
          width: 4px;
          height: 4px;

          border-radius: 999px;

          background: white;

          box-shadow:
            0 0 6px rgba(255, 255, 255, 1),
            0 0 13px rgba(115, 115, 115, 0.8);

          animation: coverSparkle 3s ease-in-out infinite;
        }

        .button-shine {
          transform: translateX(-180%) skewX(-12deg);

          animation: buttonLuxuryShine 4.5s ease-in-out infinite;
        }

        @keyframes premiumNameSweep {
          0%,
          20% {
            background-position: 150% 0;
          }

          45% {
            background-position: -50% 0;
          }

          100% {
            background-position: -50% 0;
          }
        }

        @keyframes coverSparkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.5);
          }

          50% {
            opacity: 0.95;
            transform: scale(1.7);
          }
        }

        @keyframes buttonLuxuryShine {
          0%,
          55% {
            transform: translateX(-180%) skewX(-12deg);
          }

          78% {
            transform: translateX(380%) skewX(-12deg);
          }

          100% {
            transform: translateX(380%) skewX(-12deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-name,
          .cover-sparkle,
          .button-shine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
