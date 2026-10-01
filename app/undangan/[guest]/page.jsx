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
          {/* MOBILE + DESKTOP RESPONSIVE */}
          {/* ================================================= */}

          <section
            id="isi-undangan"
            className="relative flex min-h-[100svh] scroll-mt-20 items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f7f7f7] to-[#eeeeee] px-4 py-16 sm:scroll-mt-24 sm:px-8 sm:py-28"
          >
            {/* ================================================= */}
            {/* GLOW */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-neutral-300/25 blur-[90px] sm:-left-28 sm:h-80 sm:w-80 sm:bg-neutral-300/30 sm:blur-[110px]" />

            <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-neutral-400/15 blur-[90px] sm:-right-28 sm:h-96 sm:w-96 sm:bg-neutral-400/20 sm:blur-[120px]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200/20 blur-[100px] sm:h-[420px] sm:w-[420px] sm:bg-neutral-200/25 sm:blur-[130px]" />

            {/* ================================================= */}
            {/* LEFT FLORAL */}
            {/* ================================================= */}

            <svg
              viewBox="0 0 300 500"
              className="pointer-events-none absolute -left-20 top-0 w-[150px] opacity-[0.18] sm:-left-24 sm:w-[280px] sm:opacity-25 lg:w-[340px]"
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
              className="pointer-events-none absolute -bottom-16 -right-20 w-[155px] rotate-180 opacity-[0.18] sm:-bottom-24 sm:-right-24 sm:w-[290px] sm:opacity-25 lg:w-[350px]"
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
            {/* RINGS */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200/60 sm:h-[460px] sm:w-[460px] sm:border-neutral-200/70" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/30 sm:h-[410px] sm:w-[410px] sm:border-neutral-300/40" />

            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <ScrollReveal
              direction="up"
              duration={1100}
              className="relative z-10 mx-auto w-full max-w-[92vw] sm:max-w-2xl"
            >
              <div className="text-center">
                {/* OUR SPECIAL DAY */}

                <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#525252] sm:text-xs sm:tracking-[0.45em]">
                  Our Special Day
                </p>

                {/* DECORATION */}

                <div className="mt-4 flex items-center justify-center gap-3 sm:mt-5">
                  <span className="h-px w-7 bg-neutral-300 sm:w-14" />

                  <span className="font-serif text-base text-neutral-600 sm:text-lg">
                    ♡
                  </span>

                  <span className="h-px w-7 bg-neutral-300 sm:w-14" />
                </div>

                {/* SALAM */}

                <h1 className="mt-6 font-serif text-[clamp(2rem,9vw,5rem)] leading-tight text-[#111111] sm:mt-7">
                  Assalamu&apos;alaikum
                </h1>

                <p className="mt-2 font-serif text-[clamp(1rem,4.5vw,2rem)] italic text-[#525252]">
                  Warahmatullahi Wabarakatuh
                </p>

                {/* DESCRIPTION */}

                <p className="mx-auto mt-6 max-w-xl px-1 text-[13px] leading-6 text-[#404040] sm:mt-8 sm:px-0 sm:text-base sm:leading-8">
                  Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                  menyelenggarakan acara pernikahan kami.
                </p>

                {/* DIVIDER */}

                <div className="mx-auto my-7 flex items-center justify-center gap-3 sm:my-10 sm:gap-4">
                  <span className="h-px w-8 bg-neutral-300 sm:w-10" />

                  <span className="text-base text-neutral-500 sm:text-lg">
                    ❀
                  </span>

                  <span className="h-px w-8 bg-neutral-300 sm:w-10" />
                </div>

                {/* ================================================= */}
                {/* ALDHY & ULLY */}
                {/* MOBILE RESPONSIVE */}
                {/* ================================================= */}

                <div className="relative">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-300/20 blur-[50px] sm:h-44 sm:w-44 sm:blur-[60px]" />

                  <div className="relative">
                    <h2
                      className="text-[clamp(3.4rem,17vw,7.5rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#111111]"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      Aldhy
                    </h2>

                    <p
                      className="my-3 text-[clamp(1.6rem,7vw,3.4rem)] font-normal italic text-[#525252] sm:my-5"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      &
                    </p>

                    <h2
                      className="text-[clamp(3.4rem,17vw,7.5rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#111111]"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      Ully
                    </h2>
                  </div>
                </div>

                {/* DATE */}

                <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3">
                  <span className="h-px w-6 bg-neutral-300 sm:w-12" />

                  <p className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.18em] text-[#525252] sm:text-xs sm:tracking-[0.25em]">
                    Sabtu · 03 Oktober 2026
                  </p>

                  <span className="h-px w-6 bg-neutral-300 sm:w-12" />
                </div>

                {/* DESCRIPTION */}

                <p className="mx-auto mt-6 max-w-lg px-1 text-[13px] leading-6 text-[#404040] sm:mt-8 sm:px-0 sm:text-base sm:leading-8">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa dan
                  restu kepada kami.
                </p>

                {/* SCROLL */}

                <div className="mt-7 flex flex-col items-center sm:mt-10">
                  <span className="font-serif text-2xl text-neutral-500 sm:text-3xl">
                    ♡
                  </span>

                  <p className="mt-2 text-[7px] uppercase tracking-[0.28em] text-[#737373] sm:mt-3 sm:text-[8px] sm:tracking-[0.32em]">
                    Scroll
                  </p>

                  <div className="mt-2 h-8 w-px overflow-hidden bg-neutral-200 sm:mt-3 sm:h-10">
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
