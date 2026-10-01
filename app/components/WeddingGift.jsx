"use client";

import { useState } from "react";

const gift = {
  bank: "BANK",
  number: "GANTI_NOMOR_REKENING",
  owner: "Rifaldy Hamid",
};

export default function WeddingGift() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(gift.number);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Failed to copy account number:", error);
    }
  };

  return (
    <section
      id="gift"
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f7f7] via-white to-[#eeeeee] px-5 py-24 sm:px-8 sm:py-28"
    >
      {/* ===================================== */}
      {/* BACKGROUND GLOW */}
      {/* ===================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-neutral-300/25 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-neutral-400/20 blur-[130px]" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/40" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/25" />

      {/* ===================================== */}
      {/* LEFT FLORAL */}
      {/* ===================================== */}

      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -left-24 top-0 w-[220px] opacity-[0.16] sm:w-[300px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M68 495C83 390 110 290 157 201C185 148 220 99 271 43"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M108 350C75 327 54 298 45 264"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="48"
          cy="260"
          rx="34"
          ry="12"
          transform="rotate(38 48 260)"
          fill="#525252"
        />

        <ellipse
          cx="126"
          cy="327"
          rx="35"
          ry="12"
          transform="rotate(-25 126 327)"
          fill="#737373"
        />
      </svg>

      {/* ===================================== */}
      {/* RIGHT FLORAL */}
      {/* ===================================== */}

      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -bottom-28 -right-24 w-[220px] rotate-180 opacity-[0.16] sm:w-[300px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M68 495C83 390 110 290 157 201C185 148 220 99 271 43"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M108 350C75 327 54 298 45 264"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="48"
          cy="260"
          rx="34"
          ry="12"
          transform="rotate(38 48 260)"
          fill="#525252"
        />

        <ellipse
          cx="126"
          cy="327"
          rx="35"
          ry="12"
          transform="rotate(-25 126 327)"
          fill="#737373"
        />
      </svg>

      {/* ===================================== */}
      {/* CONTENT */}
      {/* ===================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.48em] text-[#525252] sm:text-xs">
            Wedding Gift
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-neutral-300 sm:w-14" />

            <span className="font-serif text-lg text-neutral-600">♡</span>

            <span className="h-px w-9 bg-neutral-300 sm:w-14" />
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.8rem,10vw,5rem)] leading-tight text-[#111111]">
            Amplop Digital
          </h2>

          <p className="mt-3 font-serif text-xl italic text-[#525252] sm:text-2xl">
            Your Blessing Means Everything
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun, apabila ingin memberikan tanda kasih, dapat melalui amplop
            digital berikut.
          </p>

          {!opened && (
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="group relative mt-9 inline-flex min-h-[50px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#171717] px-8 py-3 text-sm font-medium text-white shadow-[0_15px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-black active:scale-95"
            >
              <span className="gift-button-shine pointer-events-none absolute inset-y-0 left-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <span className="relative z-10 text-lg">♡</span>

              <span className="relative z-10">Buka Amplop Digital</span>
            </button>
          )}
        </div>

        {/* ===================================== */}
        {/* ATM CARD */}
        {/* ===================================== */}

        {opened && (
          <div className="gift-open mx-auto mt-14 flex w-full flex-col items-center">
            <div className="atm-card relative w-full max-w-[460px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-5 text-white shadow-[0_35px_90px_rgba(0,0,0,0.32)] sm:p-7 lg:max-w-[470px]">
              {/* Premium black gradient */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.12),transparent_25%),linear-gradient(135deg,#070707_0%,#171717_45%,#090909_100%)]" />

              {/* Silver glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-[55px]" />

              {/* Rings */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/[0.06]" />

              {/* Botanical watermark */}
              <svg
                viewBox="0 0 180 260"
                className="pointer-events-none absolute -bottom-16 -right-4 w-40 rotate-12 opacity-[0.10]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 250C40 170 70 95 150 15"
                  stroke="white"
                  strokeWidth="2"
                />

                <ellipse
                  cx="69"
                  cy="150"
                  rx="30"
                  ry="10"
                  transform="rotate(-28 69 150)"
                  fill="white"
                />

                <ellipse
                  cx="100"
                  cy="92"
                  rx="29"
                  ry="10"
                  transform="rotate(-32 100 92)"
                  fill="white"
                />

                <ellipse
                  cx="47"
                  cy="190"
                  rx="27"
                  ry="9"
                  transform="rotate(35 47 190)"
                  fill="white"
                />
              </svg>

              {/* ===================================== */}
              {/* CARD CONTENT */}
              {/* ===================================== */}

              <div className="relative z-10">
                {/* TOP */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[7px] font-medium uppercase tracking-[0.32em] text-white/50 sm:text-[8px]">
                      Wedding Card
                    </p>

                    <h3 className="mt-2 truncate font-serif text-xl font-semibold tracking-wide text-white sm:text-2xl">
                      {gift.bank}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] font-serif text-xl text-white backdrop-blur-md sm:h-11 sm:w-11">
                    ♡
                  </div>
                </div>

                {/* CHIP */}
                <div className="mt-5 flex items-center gap-4">
                  <div className="relative h-[38px] w-[50px] shrink-0 overflow-hidden rounded-[9px] border border-neutral-400 bg-gradient-to-br from-[#f5f5f5] via-[#a3a3a3] to-[#d4d4d4] shadow-inner sm:h-[42px] sm:w-[55px]">
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#525252]/50" />

                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#525252]/50" />

                    <span className="absolute left-2 top-0 h-full w-px bg-[#525252]/25" />

                    <span className="absolute right-2 top-0 h-full w-px bg-[#525252]/25" />
                  </div>

                  <div className="rotate-90 text-sm font-light tracking-[-0.2em] text-white/60">
                    )))
                  </div>
                </div>

                {/* ACCOUNT NUMBER */}
                <div className="mt-6">
                  <p className="text-[7px] uppercase tracking-[0.28em] text-white/45 sm:text-[8px]">
                    Nomor Rekening
                  </p>

                  <p className="mt-2 break-all font-mono text-[clamp(1rem,4.5vw,1.4rem)] font-medium tracking-[0.1em] text-white">
                    {gift.number}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[7px] uppercase tracking-[0.24em] text-white/40">
                      Card Holder
                    </p>

                    <p className="mt-1 truncate font-serif text-sm font-medium uppercase tracking-[0.06em] text-white/90 sm:text-base">
                      {gift.owner}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="font-serif text-lg italic text-neutral-300 sm:text-xl">
                      Aldi & Uli
                    </p>

                    <p className="mt-1 text-[6px] uppercase tracking-[0.2em] text-white/35">
                      Wedding
                    </p>
                  </div>
                </div>
              </div>

              {/* SHINE */}
              <div className="atm-shine pointer-events-none absolute inset-y-0 left-0 w-28 -skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            </div>

            {/* ===================================== */}
            {/* COPY BUTTON */}
            {/* ===================================== */}

            <button
              type="button"
              onClick={copyNumber}
              className={`mt-6 flex min-h-[48px] w-full max-w-[460px] items-center justify-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold transition duration-300 active:scale-[0.98] lg:max-w-[470px] ${
                copied
                  ? "border-[#111111] bg-[#111111] text-white"
                  : "border-neutral-300 bg-white/85 text-[#111111] shadow-sm hover:-translate-y-0.5 hover:border-[#111111] hover:bg-[#111111] hover:text-white"
              }`}
            >
              {copied ? (
                <>
                  <span>✓</span>
                  Nomor Berhasil Disalin
                </>
              ) : (
                <>
                  <span>▣</span>
                  Salin Nomor Rekening
                </>
              )}
            </button>

            {/* ===================================== */}
            {/* NOTE */}
            {/* ===================================== */}

            <div className="mx-auto mt-12 max-w-lg text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-neutral-300" />

                <span className="text-neutral-500">❀</span>

                <span className="h-px w-9 bg-neutral-300" />
              </div>

              <p className="mt-6 font-serif text-xl italic text-[#404040] sm:text-2xl">
                Terima kasih atas doa dan tanda kasihnya.
              </p>

              <p className="mt-3 text-xs leading-6 text-[#525252] sm:text-sm">
                Semoga segala kebaikan yang diberikan mendapatkan balasan
                terbaik dari Allah SWT.
              </p>

              <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.3em] text-[#737373]">
                Aldi & Uli
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .gift-open {
          animation: giftOpen 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .atm-card {
          transform: perspective(1200px) rotateX(0deg) rotateY(0deg);

          transition:
            transform 0.45s ease,
            box-shadow 0.45s ease;
        }

        .atm-card:hover {
          transform: perspective(1200px) rotateX(2deg) rotateY(-2deg)
            translateY(-5px);

          box-shadow: 0 42px 100px rgba(0, 0, 0, 0.38);
        }

        .atm-shine {
          transform: translateX(-180%) skewX(-12deg);

          animation: cardShine 5s ease-in-out infinite;
        }

        .gift-button-shine {
          transform: translateX(-180%) skewX(-12deg);

          animation: giftButtonShine 4.5s ease-in-out infinite;
        }

        @keyframes giftOpen {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardShine {
          0%,
          60% {
            transform: translateX(-180%) skewX(-12deg);
          }

          82% {
            transform: translateX(520%) skewX(-12deg);
          }

          100% {
            transform: translateX(520%) skewX(-12deg);
          }
        }

        @keyframes giftButtonShine {
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
          .gift-open,
          .atm-shine,
          .gift-button-shine {
            animation: none;
          }

          .atm-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
