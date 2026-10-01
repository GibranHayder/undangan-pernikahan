"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const photos = [
  {
    src: "/images/4.jpeg",
    alt: "Aldi dan Uli",
  },
  {
    src: "/images/6.jpeg",
    alt: "Aldi dan Uli",
  },
  {
    src: "/images/5.jpeg",
    alt: "Aldi dan Uli",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const isOpen = selectedIndex !== null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const openPhoto = (index) => {
    setSelectedIndex(index);
  };

  const closePhoto = () => {
    setSelectedIndex(null);
  };

  const nextPhoto = () => {
    setSelectedIndex((current) => {
      if (current === null) return 0;

      return (current + 1) % photos.length;
    });
  };

  const previousPhoto = () => {
    setSelectedIndex((current) => {
      if (current === null) return 0;

      return (current - 1 + photos.length) % photos.length;
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePhoto();
      }

      if (event.key === "ArrowRight") {
        nextPhoto();
      }

      if (event.key === "ArrowLeft") {
        previousPhoto();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextPhoto();
      } else {
        previousPhoto();
      }
    }

    setTouchStart(null);
  };

  const lightbox =
    mounted &&
    isOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md"
        onClick={closePhoto}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            closePhoto();
          }}
          className="fixed right-4 top-4 z-[1000000] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/50 text-lg font-semibold text-white backdrop-blur-md sm:right-7 sm:top-7"
        >
          X
        </button>

        {/* Counter */}
        <div className="fixed left-4 top-4 z-[1000000] rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md sm:left-7 sm:top-7">
          {selectedIndex + 1} / {photos.length}
        </div>

        {/* Previous */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            previousPhoto();
          }}
          className="fixed left-2 top-1/2 z-[1000000] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-xl text-white backdrop-blur-md sm:left-7"
        >
          {"<"}
        </button>

        {/* Foto Besar */}
        <div
          className="relative z-[999999] flex h-full w-full items-center justify-center px-10 py-16 sm:px-20"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].alt}
            className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            nextPhoto();
          }}
          className="fixed right-2 top-1/2 z-[1000000] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-xl text-white backdrop-blur-md sm:right-7"
        >
          {">"}
        </button>

        {/* Caption */}
        <div className="fixed bottom-5 left-1/2 z-[1000000] w-full max-w-md -translate-x-1/2 px-16 text-center">
          <p className="font-serif text-lg italic text-white">
            {photos[selectedIndex].alt}
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/60">
            Aldi & Uli
          </p>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-gradient-to-b from-[#fff8fb] via-white to-[#fff5f8] px-2 py-20 sm:px-8 sm:py-28"
      >
        {/* Background */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-200/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-rose-200/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="mx-auto max-w-2xl px-3 text-center sm:px-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-black sm:text-xs">
              Our Memories
            </p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-black/30" />

              <span className="h-2 w-2 rounded-full bg-black" />

              <span className="h-px w-10 bg-black/30" />
            </div>

            <h2 className="mt-5 font-serif text-4xl text-black sm:text-5xl md:text-6xl">
              Our Gallery
            </h2>

            <p className="mt-3 font-serif text-xl italic text-black sm:text-2xl">
              Moments to Remember
            </p>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-black sm:text-base">
              Setiap foto menyimpan cerita, senyum, dan perjalanan yang membawa
              kami menuju hari bahagia ini.
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-black">
              Klik foto untuk melihat
            </p>
          </div>

          {/* Gallery 3 Foto */}
          <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-7 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:gap-7">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => openPhoto(index)}
                className="group relative mx-auto aspect-[3/4] w-[98%] max-w-[430px] cursor-pointer overflow-hidden rounded-[28px] bg-pink-50 shadow-[0_18px_50px_rgba(152,65,99,0.18)] transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:aspect-[4/5] sm:w-full sm:max-w-none"
              >
                {/* Nomor */}
                <div className="absolute left-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/75 text-[9px] font-medium text-black backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Foto */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Border */}
                <div className="pointer-events-none absolute inset-2 rounded-[21px] border border-white/30 sm:rounded-[22px]" />

                {/* Tombol Buka */}
                <div className="pointer-events-none absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/70 text-lg font-medium text-black backdrop-blur">
                  +
                </div>
              </button>
            ))}
          </div>

          {/* Bottom */}
          <div className="mx-auto mt-14 px-3 text-center sm:px-0">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-black/30" />

              <span className="h-2 w-2 rounded-full bg-black" />

              <span className="h-px w-8 bg-black/30" />
            </div>

            <p className="mt-5 font-serif text-xl italic text-black sm:text-2xl">
              Every picture tells our story.
            </p>

            <p className="mt-3 text-xs text-black sm:text-sm">Aldhy & Ully </p>
          </div>
        </div>
      </section>

      {lightbox}
    </>
  );
}
