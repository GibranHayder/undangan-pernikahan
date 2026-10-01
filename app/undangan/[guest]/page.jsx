"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import Cover from "../../components/Cover";
import FlowerPetals from "../../components/FlowerPetals";
import PremiumEffects from "../../components/PremiumEffects";
import Music from "../../components/Music";
import BottomNav from "../../components/BottomNav";
import ScrollReveal from "../../components/ScrollReveal";
import SectionDivider from "../../components/SectionDivider";

import QuranVerse from "../../components/QuranVerse";
import SaveTheDate from "../../components/SaveTheDate";
import Couple from "../../components/Couple";
import Event from "../../components/Event";
import Gallery from "../../components/Gallery";
import RSVP from "../../components/RSVP";
import Closing from "../../components/Closing";
import FinalCinematic from "../../components/FinalCinematic";

export default function InvitationPage() {
  const params = useParams();

  const [opened, setOpened] = useState(false);

  // =====================================================
  // GUEST NAME
  // =====================================================

  const guest = params?.guest || "tamu-undangan";

  const guestName = decodeURIComponent(guest)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  // =====================================================
  // OPEN INVITATION
  // =====================================================

  const openInvitation = () => {
    setOpened(true);

    setTimeout(() => {
      document.getElementById("isi-undangan")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white pb-24 lg:pb-20">
      {/* ================================================= */}
      {/* COVER */}
      {/* ================================================= */}

      <Cover guestName={guestName} onOpen={openInvitation} />

      {opened && (
        <>
          {/* ================================================= */}
          {/* GLOBAL EFFECT */}
          {/* ================================================= */}

          <PremiumEffects />

          <FlowerPetals />

          <Music />

          <BottomNav />

          {/* ================================================= */}
          {/* OPENING */}
          {/* ================================================= */}

          <section
            id="isi-undangan"
            className="relative flex min-h-[100svh] scroll-mt-24 items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f7f7f7] to-[#eeeeee] px-5 py-24 sm:px-8 sm:py-28"
          >
            {/* GLOW */}

            <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-neutral-300/30 blur-[110px]" />

            <div className="pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-neutral-400/20 blur-[120px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200/25 blur-[130px]" />

            {/* ================================================= */}
            {/* LEFT FLORAL */}
            {/* ================================================= */}

            <svg
              viewBox="0 0 300 500"
              className="pointer-events-none absolute -left-24 top-0 w-[210px] opacity-25 sm:w-[280px] lg:w-[340px]"
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

              <ellipse
                cx="182"
                cy="188"
                rx="30"
                ry="11"
                transform="rotate(-32 182 188)"
                fill="#858585"
              />

              <g transform="translate(262 42)">
                <circle cx="0" cy="0" r="25" fill="#525252" />

                <circle cx="-19" cy="-9" r="18" fill="#D4D4D4" />

                <circle cx="16" cy="-13" r="18" fill="#737373" />

                <circle cx="20" cy="14" r="18" fill="#A3A3A3" />

                <circle cx="-12" cy="20" r="18" fill="#525252" />

                <circle cx="2" cy="3" r="8" fill="#111111" />
              </g>
            </svg>

            {/* ================================================= */}
            {/* RIGHT FLORAL */}
            {/* ================================================= */}

            <svg
              viewBox="0 0 300 500"
              className="pointer-events-none absolute -bottom-24 -right-24 w-[220px] rotate-180 opacity-25 sm:w-[290px] lg:w-[350px]"
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

            {/* RINGS */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200/70 sm:h-[460px] sm:w-[460px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/40 sm:h-[410px] sm:w-[410px]" />

            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <ScrollReveal
              direction="up"
              duration={1100}
              className="relative z-10 mx-auto w-full max-w-2xl"
            >
              <div className="text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#525252] sm:text-xs">
                  Our Special Day
                </p>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-neutral-300 sm:w-14" />

                  <span className="font-serif text-lg text-neutral-600">♡</span>

                  <span className="h-px w-8 bg-neutral-300 sm:w-14" />
                </div>

                <h1 className="mt-7 font-serif text-[clamp(2.7rem,10vw,5rem)] leading-tight text-[#111111]">
                  Assalamu&apos;alaikum
                </h1>

                <p className="mt-2 font-serif text-[clamp(1.2rem,5vw,2rem)] italic text-[#525252]">
                  Warahmatullahi Wabarakatuh
                </p>

                <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
                  Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                  menyelenggarakan acara pernikahan kami.
                </p>

                <div className="mx-auto my-10 flex items-center justify-center gap-4">
                  <span className="h-px w-10 bg-neutral-300" />

                  <span className="text-lg text-neutral-500">❀</span>

                  <span className="h-px w-10 bg-neutral-300" />
                </div>

                {/* ================================================= */}
                {/* ALDHY & ULLY */}
                {/* FONT SERIF KLASIK SEPERTI GAMBAR */}
                {/* ================================================= */}

                <div className="relative">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300/20 blur-[60px]" />

                  <div className="relative">
                    <h2
                      className="text-[clamp(4.4rem,18vw,7.5rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#111111]"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      Aldhy
                    </h2>

                    <p
                      className="my-5 text-[clamp(2rem,8vw,3.4rem)] font-normal italic text-[#525252]"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      &
                    </p>

                    <h2
                      className="text-[clamp(4.4rem,18vw,7.5rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#111111]"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      Ully
                    </h2>
                  </div>
                </div>

                {/* DATE */}

                <div className="mt-10 flex items-center justify-center gap-3">
                  <span className="h-px w-7 bg-neutral-300 sm:w-12" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#525252] sm:text-xs">
                    Sabtu · 03 Oktober 2026
                  </p>

                  <span className="h-px w-7 bg-neutral-300 sm:w-12" />
                </div>

                <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa dan
                  restu kepada kami.
                </p>

                {/* SCROLL */}

                <div className="mt-10 flex flex-col items-center">
                  <span className="font-serif text-3xl text-neutral-500">
                    ♡
                  </span>

                  <p className="mt-3 text-[8px] uppercase tracking-[0.32em] text-[#737373]">
                    Scroll
                  </p>

                  <div className="mt-3 h-10 w-px overflow-hidden bg-neutral-200">
                    <div className="h-full w-full bg-[#525252]" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* ================================================= */}
          {/* QS AR-RUM */}
          {/* ================================================= */}

          <ScrollReveal direction="up" duration={1000}>
            <QuranVerse />
          </ScrollReveal>

          <SectionDivider />

          {/* ================================================= */}
          {/* SAVE THE DATE */}
          {/* ================================================= */}

          <ScrollReveal direction="up" duration={1000}>
            <SaveTheDate />
          </ScrollReveal>

          <SectionDivider variant="dark" />

          {/* ================================================= */}
          {/* COUPLE */}
          {/* ================================================= */}

          <div id="mempelai" className="scroll-mt-24">
            <ScrollReveal direction="left" duration={1000} distance={35}>
              <Couple />
            </ScrollReveal>
          </div>

          <SectionDivider />

          {/* ================================================= */}
          {/* EVENT */}
          {/* ================================================= */}

          <div id="acara" className="scroll-mt-24">
            <ScrollReveal direction="right" duration={1000} distance={35}>
              <Event />
            </ScrollReveal>
          </div>

          <SectionDivider />

          {/* ================================================= */}
          {/* GALLERY */}
          {/* ================================================= */}

          <div id="gallery" className="scroll-mt-24">
            <ScrollReveal direction="up" duration={1000}>
              <Gallery />
            </ScrollReveal>
          </div>

          <SectionDivider />

          {/* ================================================= */}
          {/* WISHES / RSVP */}
          {/* ================================================= */}

          <div id="ucapan" className="scroll-mt-24">
            <ScrollReveal direction="up" duration={1000}>
              <RSVP guestName={guestName} />
            </ScrollReveal>
          </div>

          <SectionDivider />

          {/* ================================================= */}
          {/* CLOSING */}
          {/* ================================================= */}

          <ScrollReveal direction="up" duration={1100}>
            <Closing />
          </ScrollReveal>

          {/* ================================================= */}
          {/* FINAL CINEMATIC */}
          {/* ================================================= */}

          <FinalCinematic />
        </>
      )}
    </main>
  );
}
