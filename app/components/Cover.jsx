"use client";

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Cover({ guestName = "Tamu Undangan", onOpen }) {
  const handleOpen = () => {
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black">
      {/* ===================================================== */}
      {/* BACKGROUND PHOTO */}
      {/* ===================================================== */}

      <div
        className="absolute inset-0 scale-[1.01] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/11.png")',
        }}
      />

      {/* ===================================================== */}
      {/* PREMIUM OVERLAY */}
      {/* ===================================================== */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.10)_35%,rgba(0,0,0,0.25)_70%,rgba(0,0,0,0.55)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.10)_48%,rgba(0,0,0,0.48)_100%)]" />

      {/* ===================================================== */}
      {/* SOFT LIGHT */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[80px] sm:h-[520px] sm:w-[520px]" />

      {/* ===================================================== */}
      {/* TOP ORNAMENT */}
      {/* ===================================================== */}

      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -left-24 -top-20 w-[180px] opacity-30 sm:w-[270px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M68 495C83 390 110 290 157 201C185 148 220 99 271 43"
          stroke="white"
          strokeWidth="1.5"
        />

        <path
          d="M108 350C75 327 54 298 45 264"
          stroke="white"
          strokeWidth="1.5"
        />

        <path
          d="M149 245C116 226 96 195 90 161"
          stroke="white"
          strokeWidth="1.5"
        />

        <ellipse
          cx="48"
          cy="260"
          rx="34"
          ry="12"
          transform="rotate(38 48 260)"
          fill="rgba(255,255,255,0.35)"
        />

        <ellipse
          cx="94"
          cy="159"
          rx="32"
          ry="12"
          transform="rotate(35 94 159)"
          fill="rgba(255,255,255,0.25)"
        />

        <ellipse
          cx="126"
          cy="327"
          rx="35"
          ry="12"
          transform="rotate(-25 126 327)"
          fill="rgba(255,255,255,0.22)"
        />
      </svg>

      {/* ===================================================== */}
      {/* BOTTOM ORNAMENT */}
      {/* ===================================================== */}

      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -bottom-24 -right-24 w-[190px] rotate-180 opacity-25 sm:w-[280px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M68 495C83 390 110 290 157 201C185 148 220 99 271 43"
          stroke="white"
          strokeWidth="1.5"
        />

        <path
          d="M108 350C75 327 54 298 45 264"
          stroke="white"
          strokeWidth="1.5"
        />

        <ellipse
          cx="48"
          cy="260"
          rx="34"
          ry="12"
          transform="rotate(38 48 260)"
          fill="rgba(255,255,255,0.30)"
        />

        <ellipse
          cx="126"
          cy="327"
          rx="35"
          ry="12"
          transform="rotate(-25 126 327)"
          fill="rgba(255,255,255,0.20)"
        />
      </svg>

      {/* ===================================================== */}
      {/* SPARKLE */}
      {/* ===================================================== */}

      <span className="cover-sparkle absolute left-[12%] top-[20%]" />

      <span className="cover-sparkle absolute right-[15%] top-[26%] [animation-delay:0.8s]" />

      <span className="cover-sparkle absolute bottom-[24%] left-[20%] [animation-delay:1.4s]" />

      <span className="cover-sparkle absolute bottom-[20%] right-[18%] [animation-delay:2s]" />

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 flex min-h-[100svh] w-full max-w-2xl flex-col items-center justify-center px-5 py-10 text-center text-white sm:px-8">
        {/* THE WEDDING OF */}

        <p className="text-[9px] font-medium uppercase tracking-[0.55em] text-white/80 sm:text-xs">
          The Wedding Of
        </p>

        {/* SMALL ORNAMENT */}

        <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6">
          <span className="h-px w-8 bg-white/40 sm:w-12" />

          <span className="font-serif text-lg text-white/90">♡</span>

          <span className="h-px w-8 bg-white/40 sm:w-12" />
        </div>

        {/* ===================================================== */}
        {/* COUPLE NAME */}
        {/* ===================================================== */}

        <div className="relative mt-5 w-full sm:mt-7">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/15 blur-[55px]" />

          <div className="relative">
            <h1
              className={`${greatVibes.className} text-[clamp(5rem,22vw,9.5rem)] font-normal leading-[0.78] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.65)]`}
            >
              Aldhy
            </h1>

            <div className="my-3 flex items-center justify-center gap-4 sm:my-5">
              <span className="h-px w-10 bg-white/30 sm:w-14" />

              <span
                className={`${greatVibes.className} text-[clamp(2.5rem,10vw,4rem)] leading-none text-white/90`}
              >
                &
              </span>

              <span className="h-px w-10 bg-white/30 sm:w-14" />
            </div>

            <h1
              className={`${greatVibes.className} text-[clamp(5rem,22vw,9.5rem)] font-normal leading-[0.78] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.65)]`}
            >
              Ully
            </h1>
          </div>
        </div>

        {/* ===================================================== */}
        {/* DATE */}
        {/* ===================================================== */}

        <div className="mt-9 flex items-center justify-center gap-3 sm:mt-12">
          <span className="h-px w-7 bg-white/35 sm:w-12" />

          <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.28em] text-white/90 sm:text-xs">
            03 • 10 • 2026
          </p>

          <span className="h-px w-7 bg-white/35 sm:w-12" />
        </div>

        {/* ===================================================== */}
        {/* GUEST */}
        {/* ===================================================== */}

        <div className="mt-9 w-full max-w-md sm:mt-11">
          <p className="text-xs tracking-wide text-white/75 sm:text-sm">
            Kepada Yth.
          </p>

          <h2 className="mt-2 break-words px-3 font-serif text-[clamp(1.7rem,7vw,2.6rem)] font-medium text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.60)]">
            {guestName}
          </h2>

          <div className="mx-auto mt-3 h-px w-12 bg-white/35" />

          <p className="mx-auto mt-4 max-w-sm text-[11px] leading-6 text-white/75 sm:text-sm sm:leading-7">
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
            untuk hadir di hari bahagia kami.
          </p>
        </div>

        {/* ===================================================== */}
        {/* BUTTON */}
        {/* ===================================================== */}

        <button
          type="button"
          onClick={handleOpen}
          className="premium-button group relative mt-7 flex min-h-[50px] items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 bg-black/20 px-8 py-3 text-sm font-medium text-white shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black active:scale-[0.98] sm:mt-9"
        >
          <span className="button-shine pointer-events-none absolute inset-y-0 left-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <span className="relative z-10">♡</span>

          <span className="relative z-10">Buka Undangan</span>
        </button>

        {/* ===================================================== */}
        {/* BOTTOM TEXT */}
        {/* ===================================================== */}

        <div className="mt-7 sm:mt-9">
          <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-white/55">
            Save The Date
          </p>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-4 bg-white/25" />

            <span className="text-[9px] text-white/60">✦</span>

            <span className="h-px w-4 bg-white/25" />
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* STYLE */}
      {/* ===================================================== */}

      <style jsx>{`
        .cover-sparkle {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: white;

          box-shadow:
            0 0 7px rgba(255, 255, 255, 1),
            0 0 16px rgba(255, 255, 255, 0.7);

          animation: coverSparkle 3s ease-in-out infinite;
        }

        .button-shine {
          transform: translateX(-180%) skewX(-12deg);
          animation: buttonShine 4.5s ease-in-out infinite;
        }

        @keyframes coverSparkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.5);
          }

          50% {
            opacity: 1;
            transform: scale(1.7);
          }
        }

        @keyframes buttonShine {
          0%,
          55% {
            transform: translateX(-180%) skewX(-12deg);
          }

          80% {
            transform: translateX(450%) skewX(-12deg);
          }

          100% {
            transform: translateX(450%) skewX(-12deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cover-sparkle,
          .button-shine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
