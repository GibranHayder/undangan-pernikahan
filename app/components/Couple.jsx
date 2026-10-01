"use client";

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Couple() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f7] to-[#eeeeee] px-5 py-24 sm:px-8">
      {/* Glow */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-neutral-300/30 blur-[100px]" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-neutral-400/20 blur-[110px]" />

      {/* Left floral */}
      <svg
        viewBox="0 0 260 420"
        className="pointer-events-none absolute -left-20 top-16 w-[190px] opacity-30 sm:w-[240px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M70 410C83 310 110 210 180 90"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M115 270C90 250 70 225 62 195"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M150 180C125 160 105 135 100 105"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="67"
          cy="193"
          rx="24"
          ry="9"
          transform="rotate(40 67 193)"
          fill="#404040"
        />

        <ellipse
          cx="102"
          cy="104"
          rx="25"
          ry="9"
          transform="rotate(35 102 104)"
          fill="#525252"
        />

        <ellipse
          cx="125"
          cy="250"
          rx="26"
          ry="10"
          transform="rotate(-25 125 250)"
          fill="#737373"
        />
      </svg>

      {/* Right floral */}
      <svg
        viewBox="0 0 260 420"
        className="pointer-events-none absolute -right-20 bottom-10 w-[190px] rotate-180 opacity-30 sm:w-[240px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M70 410C83 310 110 210 180 90"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M115 270C90 250 70 225 62 195"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="67"
          cy="193"
          rx="24"
          ry="9"
          transform="rotate(40 67 193)"
          fill="#404040"
        />

        <ellipse
          cx="125"
          cy="250"
          rx="26"
          ry="10"
          transform="rotate(-25 125 250)"
          fill="#737373"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#525252] sm:text-xs">
            Mempelai Pria & Mempelai Wanita
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300 sm:w-14" />

            <span className="font-serif text-lg text-neutral-600">♡</span>

            <span className="h-px w-8 bg-neutral-300 sm:w-14" />
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.8rem,10vw,5rem)] text-[#111111]">
            Kedua Mempelai
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
            menyelenggarakan pernikahan putra-putri kami.
          </p>
        </div>

        {/* ====================================== */}
        {/* GROOM */}
        {/* ====================================== */}

        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-14">
          {/* Groom Photo */}
          <div className="relative shrink-0">
            <div className="absolute -left-5 -top-5 h-[240px] w-[190px] rounded-[50%] border border-neutral-300 sm:h-[300px] sm:w-[230px]" />

            <div className="absolute -bottom-5 -right-5 h-[220px] w-[175px] rounded-[50%] bg-neutral-200/70 sm:h-[280px] sm:w-[215px]" />

            <div className="relative h-[245px] w-[185px] overflow-hidden rounded-[48%] border-[5px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:h-[310px] sm:w-[235px]">
              <img
                src="/images/2.jpeg"
                alt="Aldhy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-8 text-4xl opacity-80 grayscale sm:text-5xl">
              🌸
            </div>
          </div>

          {/* Groom Detail */}
          <div className="max-w-md text-center md:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#525252] sm:text-xs">
              Mempelai Pria
            </p>

            {/* NAMA LENGKAP */}
            <h3
              className={`${greatVibes.className} mt-3 text-[clamp(3.6rem,13vw,6rem)] font-normal leading-[0.95] text-[#111111]`}
            >
              RifaldI Hamid
            </h3>

            {/* NAMA PANGGILAN */}
            <p
              className={`${greatVibes.className} mt-3 text-[clamp(2.6rem,9vw,4rem)] font-normal leading-none text-[#262626]`}
            >
              Aldhy
            </p>

            <div className="mx-auto mt-6 h-px w-16 bg-neutral-300 md:mx-0" />

            <p className="mt-5 text-sm text-[#737373]">Putra dari</p>

            <p className="mt-2 font-serif text-lg text-[#404040] sm:text-xl">
              Bapak Alm.Hamid Yusuf
            </p>

            <p className="my-1 font-serif italic text-neutral-500">&</p>

            <p className="font-serif text-lg text-[#404040] sm:text-xl">
              Ibu Farida U Badrun
            </p>
          </div>
        </div>

        {/* ====================================== */}
        {/* DIVIDER */}
        {/* ====================================== */}

        <div className="my-20 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-neutral-300 sm:w-28" />

          <span className="font-serif text-3xl text-neutral-500">♡</span>

          <span className="h-px w-16 bg-neutral-300 sm:w-28" />
        </div>

        {/* ====================================== */}
        {/* BRIDE */}
        {/* ====================================== */}

        <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-14">
          {/* Bride Photo */}
          <div className="relative shrink-0">
            <div className="absolute -right-5 -top-5 h-[240px] w-[190px] rounded-[50%] border border-neutral-300 sm:h-[300px] sm:w-[230px]" />

            <div className="absolute -bottom-5 -left-5 h-[220px] w-[175px] rounded-[50%] bg-neutral-200/70 sm:h-[280px] sm:w-[215px]" />

            <div className="relative h-[245px] w-[185px] overflow-hidden rounded-[48%] border-[5px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:h-[310px] sm:w-[235px]">
              <img
                src="/images/3.jpeg"
                alt="Ully"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-8 text-4xl opacity-80 grayscale sm:text-5xl">
              🌸
            </div>
          </div>

          {/* Bride Detail */}
          <div className="max-w-md text-center md:text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#525252] sm:text-xs">
              Mempelai Wanita
            </p>

            {/* NAMA LENGKAP */}
            <h3
              className={`${greatVibes.className} mt-3 text-[clamp(3.6rem,13vw,6rem)] font-normal leading-[0.95] text-[#111111]`}
            >
              Juliyana Ulama
            </h3>

            {/* NAMA PANGGILAN */}
            <p
              className={`${greatVibes.className} mt-3 text-[clamp(2.6rem,9vw,4rem)] font-normal leading-none text-[#262626]`}
            >
              Ully
            </p>

            <div className="mx-auto mt-6 h-px w-16 bg-neutral-300 md:ml-auto md:mr-0" />

            <p className="mt-5 text-sm text-[#737373]">Putri dari</p>

            <p className="mt-2 font-serif text-lg text-[#404040] sm:text-xl">
              Bapak Ulama Ibrahim
            </p>

            <p className="my-1 font-serif italic text-neutral-500">&</p>

            <p className="font-serif text-lg text-[#404040] sm:text-xl">
              Ibu Amina M Djen
            </p>
          </div>
        </div>

        {/* ====================================== */}
        {/* CLOSING TEXT */}
        {/* ====================================== */}

        <div className="mx-auto mt-20 max-w-xl text-center">
          <span className="font-serif text-3xl text-neutral-500">♡</span>

          <p className="mt-5 text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Kami berharap Bapak/Ibu/Saudara/i dapat menjadi bagian dari momen
            bahagia dalam perjalanan baru kehidupan kami.
          </p>
        </div>
      </div>
    </section>
  );
}
