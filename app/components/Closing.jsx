import { Great_Vibes } from "next/font/google";

// =====================================================
// GREAT VIBES
// FONT KHUSUS NAMA PENGANTIN
// =====================================================

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Closing() {
  return (
    <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-gradient-to-b from-[#f7f7f7] via-white to-[#ececec] px-5 py-24 sm:px-8 sm:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-neutral-300/25 blur-[110px]" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-neutral-400/20 blur-[110px]" />

      {/* Top left floral */}
      <svg
        viewBox="0 0 300 430"
        className="pointer-events-none absolute -left-20 -top-12 w-[210px] opacity-35 sm:w-[280px]"
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
      </svg>

      {/* Bottom right floral */}
      <svg
        viewBox="0 0 300 430"
        className="pointer-events-none absolute -bottom-20 -right-20 w-[220px] rotate-180 opacity-35 sm:w-[300px]"
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

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#525252] sm:text-xs">
          Thank You
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-neutral-300 sm:w-14" />

          <span className="font-serif text-lg text-neutral-600">♡</span>

          <span className="h-px w-8 bg-neutral-300 sm:w-14" />
        </div>

        <h2 className="mt-7 font-serif text-[clamp(2.8rem,11vw,5rem)] leading-tight text-[#111111]">
          Terima Kasih
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada hari
          bahagia kami.
        </p>

        <div className="mx-auto my-10 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-neutral-300" />

          <span className="text-neutral-500">❀</span>

          <span className="h-px w-10 bg-neutral-300" />
        </div>

        <p className="font-serif text-xl italic text-[#525252] sm:text-2xl">
          Kami yang berbahagia,
        </p>

        {/* ========================================= */}
        {/* ALDHY & ULLY */}
        {/* GREAT VIBES */}
        {/* ========================================= */}

        <div className="mt-8">
          <h3
            className={`${greatVibes.className} text-[clamp(4.8rem,19vw,8rem)] font-normal leading-[0.82] text-[#111111]`}
          >
            Aldhy
          </h3>

          <div className="my-3 flex items-center justify-center gap-4 sm:my-5">
            <span className="h-px w-9 bg-neutral-300 sm:w-14" />

            <span
              className={`${greatVibes.className} text-[clamp(2.5rem,10vw,4.2rem)] leading-none text-[#525252]`}
            >
              &
            </span>

            <span className="h-px w-9 bg-neutral-300 sm:w-14" />
          </div>

          <h3
            className={`${greatVibes.className} text-[clamp(4.8rem,19vw,8rem)] font-normal leading-[0.82] text-[#111111]`}
          >
            Ully
          </h3>
        </div>

        <p className="mt-9 text-xs font-semibold uppercase tracking-[0.26em] text-[#525252] sm:text-sm">
          Sabtu · 03 Oktober 2026
        </p>

        <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-[#404040] sm:text-base">
          Semoga Allah SWT senantiasa melimpahkan keberkahan, kebahagiaan, dan
          kasih sayang dalam perjalanan rumah tangga kami.
        </p>

        <div className="mt-10">
          <span className="font-serif text-4xl text-neutral-600">♡</span>
        </div>

        <p className="mt-8 text-[9px] uppercase tracking-[0.35em] text-[#737373] sm:text-[10px]">
          Aldhy & Ully Wedding
        </p>
      </div>
    </section>
  );
}
