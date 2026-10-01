"use client";

import { useEffect, useState } from "react";

// =====================================================
// EVENT DATE
// 03 October 2026 - 20:30 WIT
// =====================================================

const targetDate = new Date("2026-10-03T20:30:00+09:00");

const location =
  "Kelurahan Bastiong Karance, Kecamatan Ternate Selatan, Kota Ternate, Maluku Utara";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=0.765185,127.375651";

export default function Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // =====================================================
  // COUNTDOWN
  // =====================================================

  useEffect(() => {
    const updateCountdown = () => {
      const distance = targetDate.getTime() - new Date().getTime();

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),

        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),

        minutes: Math.floor((distance / (1000 * 60)) % 60),

        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = [
    {
      value: timeLeft.days,
      label: "Hari",
    },
    {
      value: timeLeft.hours,
      label: "Jam",
    },
    {
      value: timeLeft.minutes,
      label: "Menit",
    },
    {
      value: timeLeft.seconds,
      label: "Detik",
    },
  ];

  const openLocation = () => {
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f7] to-[#eeeeee] px-5 py-24 sm:px-8 sm:py-28">
      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-neutral-300/25 blur-[110px]" />

      <div className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-neutral-400/20 blur-[120px]" />

      {/* ================================================= */}
      {/* LEFT FLORAL */}
      {/* ================================================= */}

      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -left-24 top-0 w-[220px] opacity-25 sm:w-[300px]"
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

        <path
          d="M149 245C116 226 96 195 90 161"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="48"
          cy="260"
          rx="34"
          ry="12"
          transform="rotate(38 48 260)"
          fill="#404040"
        />

        <ellipse
          cx="94"
          cy="159"
          rx="32"
          ry="12"
          transform="rotate(35 94 159)"
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

      {/* ================================================= */}
      {/* RIGHT FLORAL */}
      {/* ================================================= */}

      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -bottom-28 -right-24 w-[220px] rotate-180 opacity-25 sm:w-[300px]"
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
          fill="#404040"
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

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#525252] sm:text-xs">
            Wedding Event
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300 sm:w-14" />

            <span className="font-serif text-lg text-neutral-600">♡</span>

            <span className="h-px w-8 bg-neutral-300 sm:w-14" />
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.8rem,10vw,5rem)] leading-tight text-[#111111]">
            Acara Pernikahan
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk
            hadir dan memberikan doa restu pada hari bahagia kami.
          </p>
        </div>

        {/* ================================================= */}
        {/* EVENT CARD */}
        {/* ================================================= */}

        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 shadow-[0_24px_70px_rgba(0,0,0,0.10)] backdrop-blur-md">
          <div className="border-b border-neutral-200 px-6 py-9 text-center sm:px-10">
            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#737373]">
              Akad & Resepsi
            </p>

            <h3 className="mt-4 font-serif text-4xl text-[#111111] sm:text-5xl">
              Sabtu
            </h3>

            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-neutral-300" />

              <span className="font-serif text-2xl text-[#525252]">
                03 · 10 · 2026
              </span>

              <span className="h-px w-10 bg-neutral-300" />
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#111111]">
              20.30 WIT
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#737373]">
              Sampai Selesai
            </p>
          </div>

          {/* ================================================= */}
          {/* EVENT DETAILS */}
          {/* ================================================= */}

          <div className="grid gap-px bg-neutral-200 sm:grid-cols-2">
            {/* Time */}

            <div className="bg-white/90 p-7 text-center sm:p-9">
              <span className="font-serif text-3xl text-neutral-500">◷</span>

              <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737373]">
                Waktu
              </p>

              <p className="mt-2 font-serif text-2xl text-[#111111]">
                20.30 WIT
              </p>

              <p className="mt-2 text-xs text-[#525252]">Sampai selesai</p>
            </div>

            {/* Location */}

            <div className="bg-white/90 p-7 text-center sm:p-9">
              <span className="font-serif text-3xl text-neutral-500">⌖</span>

              <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737373]">
                Lokasi
              </p>

              <p className="mt-2 text-sm leading-7 text-[#404040]">
                {location}
              </p>
            </div>
          </div>

          {/* ================================================= */}
          {/* MAP BUTTON */}
          {/* ================================================= */}

          <div className="p-6 text-center sm:p-8">
            <button
              type="button"
              onClick={openLocation}
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#171717] px-8 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-black active:scale-[0.98]"
            >
              <span>⌖</span>
              Buka Google Maps
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* COUNTDOWN */}
        {/* ================================================= */}

        <div className="mx-auto mt-14 max-w-3xl">
          <p className="text-center text-[9px] font-medium uppercase tracking-[0.35em] text-[#737373]">
            Menuju Hari Bahagia
          </p>

          <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4">
            {countdown.map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-neutral-200 bg-white/70 px-2 py-5 text-center shadow-[0_12px_35px_rgba(0,0,0,0.06)] backdrop-blur sm:px-4 sm:py-6"
              >
                <p className="font-serif text-2xl text-[#111111] sm:text-4xl">
                  {String(item.value).padStart(2, "0")}
                </p>

                <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.2em] text-[#737373] sm:text-[9px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* CLOSING NOTE */}
        {/* ================================================= */}

        <div className="mx-auto mt-14 max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300" />

            <span className="text-neutral-500">♡</span>

            <span className="h-px w-8 bg-neutral-300" />
          </div>

          <p className="mt-5 text-sm leading-7 text-[#404040] sm:text-base">
            Kehadiran dan doa restu Anda merupakan kebahagiaan yang sangat
            berarti bagi kami.
          </p>
        </div>
      </div>
    </section>
  );
}
