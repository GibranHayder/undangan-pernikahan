"use client";

import { useEffect, useState } from "react";

const bokeh = [
  { left: "8%", top: "18%", size: 10, delay: "0s" },
  { left: "19%", top: "72%", size: 7, delay: "1.2s" },
  { left: "34%", top: "32%", size: 5, delay: "0.6s" },
  { left: "52%", top: "14%", size: 8, delay: "1.8s" },
  { left: "67%", top: "68%", size: 6, delay: "0.9s" },
  { left: "79%", top: "28%", size: 9, delay: "1.5s" },
  { left: "91%", top: "62%", size: 5, delay: "0.3s" },
];

export default function PremiumEffects() {
  const [pointer, setPointer] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPointer({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.08)]" />

      {/* Mouse glow */}
      <div
        className="absolute h-80 w-80 rounded-full bg-neutral-300/20 blur-[100px] transition-[left,top] duration-300"
        style={{
          left: pointer.x,
          top: pointer.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Bokeh */}
      {bokeh.map((item, index) => (
        <span
          key={index}
          className="premium-bokeh absolute rounded-full bg-neutral-400/20"
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
            animationDelay: item.delay,
          }}
        />
      ))}

      {/* Left botanical */}
      <svg
        viewBox="0 0 220 420"
        className="absolute -left-24 top-[18%] w-[180px] opacity-[0.08]"
        fill="none"
      >
        <path
          d="M35 420C52 320 80 220 170 75"
          stroke="#111111"
          strokeWidth="2"
        />

        <path
          d="M77 285C50 267 35 238 32 205"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="35"
          cy="205"
          rx="29"
          ry="10"
          transform="rotate(39 35 205)"
          fill="#404040"
        />

        <ellipse
          cx="92"
          cy="265"
          rx="30"
          ry="10"
          transform="rotate(-28 92 265)"
          fill="#737373"
        />
      </svg>

      {/* Right botanical */}
      <svg
        viewBox="0 0 220 420"
        className="absolute -right-24 bottom-[12%] w-[180px] rotate-180 opacity-[0.08]"
        fill="none"
      >
        <path
          d="M35 420C52 320 80 220 170 75"
          stroke="#111111"
          strokeWidth="2"
        />

        <ellipse
          cx="35"
          cy="205"
          rx="29"
          ry="10"
          transform="rotate(39 35 205)"
          fill="#525252"
        />

        <ellipse
          cx="92"
          cy="265"
          rx="30"
          ry="10"
          transform="rotate(-28 92 265)"
          fill="#737373"
        />
      </svg>

      <style jsx>{`
        .premium-bokeh {
          animation: premiumBokeh 5s ease-in-out infinite;
        }

        @keyframes premiumBokeh {
          0%,
          100% {
            opacity: 0.15;
            transform: translateY(0) scale(0.8);
          }

          50% {
            opacity: 0.7;
            transform: translateY(-12px) scale(1.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-bokeh {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
