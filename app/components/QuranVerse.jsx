export default function QuranVerse() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f7] to-white px-5 py-20 sm:px-8 sm:py-28">
      {/* ========================================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-neutral-300/25 blur-[100px]" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-neutral-400/20 blur-[110px]" />

      {/* ========================================= */}
      {/* TOP LEFT ORNAMENT */}
      {/* ========================================= */}

      <svg
        viewBox="0 0 260 420"
        className="pointer-events-none absolute -left-24 -top-6 w-[180px] opacity-30 sm:w-[230px]"
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

      {/* ========================================= */}
      {/* BOTTOM RIGHT ORNAMENT */}
      {/* ========================================= */}

      <svg
        viewBox="0 0 260 420"
        className="pointer-events-none absolute -bottom-10 -right-24 w-[180px] rotate-180 opacity-30 sm:w-[230px]"
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

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#525252] sm:text-xs">
          A Verse For Us
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-neutral-300 sm:w-14" />

          <span className="font-serif text-lg text-neutral-600">♡</span>

          <span className="h-px w-8 bg-neutral-300 sm:w-14" />
        </div>

        <h2 className="mt-6 font-serif text-[clamp(2.4rem,9vw,4.5rem)] leading-tight text-[#111111]">
          Ar-Rum
        </h2>

        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#737373]">
          Ayat 21
        </p>

        {/* ========================================= */}
        {/* ARABIC */}
        {/* ========================================= */}

        <p
          dir="rtl"
          className="mx-auto mt-10 max-w-2xl text-[clamp(1.65rem,6vw,2.5rem)] leading-[2.1] text-[#262626]"
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
          إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
        </p>

        <div className="mx-auto my-9 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-neutral-300" />

          <span className="text-neutral-500">❀</span>

          <span className="h-px w-10 bg-neutral-300" />
        </div>

        {/* ========================================= */}
        {/* MEANING */}
        {/* ========================================= */}

        <p className="mx-auto max-w-2xl text-sm leading-8 text-[#404040] sm:text-base sm:leading-9">
          Di antara tanda-tanda kebesaran-Nya, Allah menciptakan pasangan
          untukmu dari jenismu sendiri agar kamu memperoleh ketenteraman
          bersamanya. Dia menumbuhkan di antara kalian rasa cinta dan kasih
          sayang. Sesungguhnya pada hal tersebut terdapat tanda-tanda bagi
          orang-orang yang mau berpikir.
        </p>

        <p className="mt-7 font-serif text-lg italic text-[#525252] sm:text-xl">
          QS. Ar-Rum: 21
        </p>

        <div className="mt-8">
          <span className="font-serif text-3xl text-neutral-500">♡</span>
        </div>
      </div>
    </section>
  );
}
