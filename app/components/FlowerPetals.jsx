"use client";

const petals = [
  { left: "4%", delay: "0s", duration: "12s", size: 9 },
  { left: "12%", delay: "2.5s", duration: "14s", size: 12 },
  { left: "22%", delay: "5s", duration: "11s", size: 8 },
  { left: "31%", delay: "1.5s", duration: "15s", size: 10 },
  { left: "42%", delay: "7s", duration: "13s", size: 7 },
  { left: "53%", delay: "3s", duration: "12s", size: 11 },
  { left: "64%", delay: "6s", duration: "16s", size: 9 },
  { left: "74%", delay: "1s", duration: "13s", size: 8 },
  { left: "84%", delay: "4.5s", duration: "15s", size: 12 },
  { left: "94%", delay: "8s", duration: "14s", size: 8 },
];

export default function FlowerPetals() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <span
          key={index}
          className="flower-petal absolute -top-10 rounded-[100%_0_100%_0]"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.45}px`,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}

      <style jsx>{`
        .flower-petal {
          background: linear-gradient(
            135deg,
            rgba(245, 245, 245, 0.8),
            rgba(82, 82, 82, 0.7),
            rgba(38, 38, 38, 0.65)
          );

          opacity: 0;

          animation-name: fallingPetal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fallingPetal {
          0% {
            opacity: 0;
            transform: translate3d(0, -8vh, 0) rotate(0deg);
          }

          10% {
            opacity: 0.45;
          }

          40% {
            transform: translate3d(28px, 38vh, 0) rotate(150deg);
          }

          70% {
            transform: translate3d(-22px, 72vh, 0) rotate(290deg);
          }

          100% {
            opacity: 0;
            transform: translate3d(35px, 110vh, 0) rotate(460deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flower-petal {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
