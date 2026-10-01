"use client";

import { useEffect, useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleCanPlay = () => {
      setIsReady(true);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    const autoplay = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Autoplay music blocked:", error);
      }
    };

    autoplay();

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Failed to toggle music:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/lagu.mp3" preload="auto" loop />

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-[92px] right-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#111111] hover:text-white lg:bottom-6"
        aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
      >
        <span className={`text-lg ${isPlaying ? "music-icon-playing" : ""}`}>
          {isPlaying ? "♫" : "♪"}
        </span>

        {isReady && (
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#525252]" />
        )}
      </button>

      <style jsx>{`
        .music-icon-playing {
          animation: musicPulse 1.8s ease-in-out infinite;
        }

        @keyframes musicPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .music-icon-playing {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
