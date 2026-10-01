"use client";

import { useEffect, useState } from "react";

// =====================================================
// WEDDING DATE
// 03 October 2026 - 20:00 WIT (UTC+9)
// =====================================================

const weddingDate = new Date("2026-10-03T20:30:00+09:00");

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [calendarSaved, setCalendarSaved] = useState(false);

  // =====================================================
  // COUNTDOWN
  // =====================================================

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      const distance = weddingDate.getTime() - now.getTime();

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

  // =====================================================
  // SAVE TO CALENDAR
  // =====================================================

  const saveToCalendar = () => {
    /*
      03 October 2026 - 20:00 WIT
      WIT = UTC + 9

      20:00 WIT = 11:00 UTC
    */

    const calendarContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Aldi & Uli Wedding//ID",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",

      "BEGIN:VEVENT",

      "UID:aldi-uli-wedding-20261003@wedding",

      "DTSTAMP:20260915T000000Z",

      // 03 October 2026 - 20:30 WIT
      "DTSTART:20261003T113000Z",

      "SUMMARY:The Wedding of Aldi & Uli",

      "DESCRIPTION:Undangan Pernikahan Aldi & Uli. Acara akan dilaksanakan pada Sabtu, 03 Oktober 2026 pukul 20.30 WIT.",

      "LOCATION:Kelurahan Bastiong Karance\\, Kecamatan Ternate Selatan\\, Kota Ternate\\, Maluku Utara",

      "BEGIN:VALARM",

      "TRIGGER:-P1D",

      "ACTION:DISPLAY",

      "DESCRIPTION:Besok adalah hari pernikahan Aldi & Uli ♡",

      "END:VALARM",

      "END:VEVENT",

      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([calendarContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "Wedding-Aldi-Uli-03-Oktober-2026.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    setCalendarSaved(true);

    setTimeout(() => {
      setCalendarSaved(false);
    }, 2200);
  };

  // =====================================================
  // GOOGLE CALENDAR
  // =====================================================

  const openGoogleCalendar = () => {
    const title = encodeURIComponent("The Wedding of Aldi & Uli");

    const details = encodeURIComponent(
      "Undangan Pernikahan Aldi & Uli. Sabtu, 03 Oktober 2026 pukul 20.30 WIT ♡",
    );

    const location = encodeURIComponent(
      "Kelurahan Bastiong Karance, Kecamatan Ternate Selatan, Kota Ternate, Maluku Utara",
    );

    /*
      03 October 2026 - 20:30 WIT
      = 03 October 2026 - 11:30 UTC
    */

    const dates = "20261003T113000Z/20261003T113000Z";

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${title}` +
      `&dates=${dates}` +
      `&details=${details}` +
      `&location=${location}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // =====================================================
  // COUNTDOWN DATA
  // =====================================================

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

  return (
    <section
      id="save-the-date"
      className="relative overflow-hidden bg-[#111111] px-5 py-24 text-white sm:px-8 sm:py-32"
    >
      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.03)_38%,transparent_70%)]" />

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/[0.05] blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/[0.08] blur-[130px]" />

      {/* Decorative rings */}

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[600px] sm:w-[600px]" />

      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[520px] sm:w-[520px]" />

      {/* ================================================= */}
      {/* LEFT FLORAL */}
      {/* ================================================= */}

      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -left-24 -top-24 w-[230px] opacity-25 sm:w-[320px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M68 495C83 390 110 290 157 201C185 148 220 99 271 43"
          stroke="white"
          strokeWidth="2"
        />

        <path
          d="M108 350C75 327 54 298 45 264"
          stroke="white"
          strokeWidth="2"
        />

        <path
          d="M149 245C116 226 96 195 90 161"
          stroke="white"
          strokeWidth="2"
        />

        <ellipse
          cx="48"
          cy="260"
          rx="34"
          ry="12"
          transform="rotate(38 48 260)"
          fill="#D4D4D4"
        />

        <ellipse
          cx="94"
          cy="159"
          rx="32"
          ry="12"
          transform="rotate(35 94 159)"
          fill="#A3A3A3"
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
        className="pointer-events-none absolute -bottom-28 -right-24 w-[230px] rotate-180 opacity-25 sm:w-[320px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M68 495C83 390 110 290 157 201C185 148 220 99 271 43"
          stroke="white"
          strokeWidth="2"
        />

        <path
          d="M108 350C75 327 54 298 45 264"
          stroke="white"
          strokeWidth="2"
        />

        <ellipse
          cx="48"
          cy="260"
          rx="34"
          ry="12"
          transform="rotate(38 48 260)"
          fill="#D4D4D4"
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
      {/* SPARKLES */}
      {/* ================================================= */}

      <span className="save-sparkle absolute left-[12%] top-[24%]" />

      <span className="save-sparkle absolute left-[25%] top-[68%] [animation-delay:0.7s]" />

      <span className="save-sparkle absolute right-[15%] top-[30%] [animation-delay:1.2s]" />

      <span className="save-sparkle absolute right-[27%] top-[70%] [animation-delay:1.8s]" />

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-[9px] font-medium uppercase tracking-[0.5em] text-neutral-300 sm:text-xs">
          Mark Your Calendar
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-9 bg-white/40 sm:w-16" />

          <span className="font-serif text-xl text-neutral-300">♡</span>

          <span className="h-px w-9 bg-white/40 sm:w-16" />
        </div>

        <h2 className="mt-6 font-serif text-[clamp(2.8rem,10vw,5.5rem)] leading-none">
          Save The Date
        </h2>

        <p className="mt-4 font-serif text-lg italic text-neutral-300 sm:text-2xl">
          Aldi & Uli
        </p>

        {/* ================================================= */}
        {/* DATE */}
        {/* ================================================= */}

        <div className="my-12 sm:my-16">
          <div className="flex items-center justify-center gap-2 sm:gap-6">
            <span className="date-number">03</span>

            <span className="font-serif text-3xl font-light text-neutral-400 sm:text-5xl">
              •
            </span>

            <span className="date-number">10</span>

            <span className="font-serif text-3xl font-light text-neutral-400 sm:text-5xl">
              •
            </span>

            <span className="date-number">26</span>
          </div>

          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.38em] text-neutral-300 sm:text-sm">
            Sabtu · Oktober · 2026
          </p>

          <p className="mt-4 font-serif text-xl font-medium tracking-[0.15em] text-white sm:text-2xl">
            20.30 WIT
          </p>
        </div>

        {/* ================================================= */}
        {/* COUNTDOWN */}
        {/* ================================================= */}

        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-2 sm:gap-4">
          {countdown.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-[22px] border border-white/20 bg-white/[0.08] px-2 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12] sm:rounded-[28px] sm:px-5 sm:py-7"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <p className="relative font-serif text-2xl sm:text-4xl">
                {String(item.value).padStart(2, "0")}
              </p>

              <p className="relative mt-2 text-[7px] font-medium uppercase tracking-[0.2em] text-neutral-300 sm:text-[10px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* DESCRIPTION */}
        {/* ================================================= */}

        <div className="mx-auto mt-12 max-w-lg">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/30" />

            <span className="text-neutral-300">❀</span>

            <span className="h-px w-8 bg-white/30" />
          </div>

          <p className="mt-6 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            Kami tidak sabar menantikan hari istimewa untuk memulai perjalanan
            baru bersama orang-orang terkasih.
          </p>

          <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white/45">
            Sabtu · 03 Oktober 2026 · 20.30 WIT
          </p>
        </div>

        {/* ================================================= */}
        {/* CALENDAR BUTTONS */}
        {/* ================================================= */}

        <div className="mx-auto mt-9 flex max-w-lg flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={saveToCalendar}
            className={`calendar-button group relative flex min-h-[50px] w-full items-center justify-center gap-2 overflow-hidden rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:w-auto ${
              calendarSaved
                ? "border-white bg-white text-[#111111]"
                : "border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#111111]"
            }`}
          >
            <span className="calendar-shine pointer-events-none absolute inset-y-0 left-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {calendarSaved ? (
              <>
                <span className="relative z-10">✓</span>

                <span className="relative z-10">Tanggal Tersimpan</span>
              </>
            ) : (
              <>
                <span className="relative z-10 text-base">◷</span>

                <span className="relative z-10">Simpan ke Kalender</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={openGoogleCalendar}
            className="group flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-white/90 transition duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10 sm:w-auto"
          >
            <span className="text-base">+</span>
            Google Calendar
          </button>
        </div>

        <p className="mt-4 text-[8px] uppercase tracking-[0.24em] text-white/50">
          Jangan sampai lupa hari bahagia kami ♡
        </p>

        <div className="mt-10 flex flex-col items-center">
          <span className="text-xl text-neutral-300">♡</span>

          <div className="mt-3 h-10 w-px overflow-hidden bg-white/20">
            <div className="save-scroll-line h-full w-full bg-white/70" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .date-number {
          font-family: serif;
          font-size: clamp(3.3rem, 15vw, 7.5rem);
          line-height: 1;
          font-weight: 400;
          text-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

        .save-sparkle {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: white;

          box-shadow:
            0 0 8px rgba(255, 255, 255, 0.9),
            0 0 18px rgba(255, 255, 255, 0.55);

          animation: saveSparkle 2.8s ease-in-out infinite;
        }

        .save-scroll-line {
          transform-origin: top;
          animation: saveScroll 1.8s ease-in-out infinite;
        }

        .calendar-shine {
          transform: translateX(-180%) skewX(-12deg);
          animation: calendarShine 4.5s ease-in-out infinite;
        }

        @keyframes saveSparkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.5);
          }

          50% {
            opacity: 1;
            transform: scale(1.8);
          }
        }

        @keyframes saveScroll {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }

          50% {
            transform: scaleY(1);
            opacity: 1;
          }

          100% {
            transform: scaleY(0);
            transform-origin: bottom;
            opacity: 0;
          }
        }

        @keyframes calendarShine {
          0%,
          55% {
            transform: translateX(-180%) skewX(-12deg);
          }

          80% {
            transform: translateX(500%) skewX(-12deg);
          }

          100% {
            transform: translateX(500%) skewX(-12deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .save-sparkle,
          .save-scroll-line,
          .calendar-shine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
