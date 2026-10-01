export default function SectionDivider({ variant = "light", flip = false }) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative h-20 overflow-hidden ${
        isDark ? "bg-[#111111]" : "bg-[#f7f7f7]"
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0 70C180 120 350 145 540 118C760 87 850 25 1075 38C1245 48 1352 87 1440 114V180H0Z"
          fill={isDark ? "#f7f7f7" : "#ffffff"}
        />

        <path
          d="M0 70C180 120 350 145 540 118C760 87 850 25 1075 38C1245 48 1352 87 1440 114"
          fill="none"
          stroke={isDark ? "rgba(255,255,255,0.18)" : "rgba(82,82,82,0.30)"}
          strokeWidth="1"
        />
      </svg>

      <div className="absolute left-1/2 top-6 -translate-x-1/2">
        <span
          className={`font-serif text-xl ${
            isDark ? "text-white/40" : "text-neutral-500"
          }`}
        >
          ♡
        </span>
      </div>
    </div>
  );
}
