const stories = [
  {
    number: "01",
    title: "Awal Pertemuan",
    text: "Sebuah pertemuan sederhana menjadi awal dari cerita yang perlahan membawa kami untuk saling mengenal.",
  },
  {
    number: "02",
    title: "Saling Mengenal",
    text: "Waktu membawa kami semakin dekat, belajar memahami satu sama lain, berbagi cerita, dan tumbuh bersama.",
  },
  {
    number: "03",
    title: "Menetapkan Hati",
    text: "Dengan keyakinan dan doa dari keluarga, kami memutuskan untuk melangkah ke arah yang lebih serius.",
  },
  {
    number: "04",
    title: "Menuju Hari Bahagia",
    text: "Kini kami bersiap membuka lembaran baru dan melanjutkan perjalanan bersama dalam ikatan pernikahan.",
  },
];

export default function LoveStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f7] to-[#eeeeee] px-5 py-24 sm:px-8 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-neutral-300/25 blur-[110px]" />

      <div className="pointer-events-none absolute -right-28 bottom-24 h-96 w-96 rounded-full bg-neutral-400/20 blur-[120px]" />

      {/* Left floral */}
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

      {/* Right floral */}
      <svg
        viewBox="0 0 300 500"
        className="pointer-events-none absolute -bottom-24 -right-24 w-[220px] rotate-180 opacity-25 sm:w-[300px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M68 495C83 390 110 290 157 201C185 148 220 99 271 43"
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

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#525252] sm:text-xs">
            Our Journey
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300 sm:w-14" />
            <span className="font-serif text-lg text-neutral-600">♡</span>
            <span className="h-px w-8 bg-neutral-300 sm:w-14" />
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.8rem,10vw,5rem)] text-[#111111]">
            Love Story
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Setiap perjalanan memiliki cerita. Inilah beberapa bagian kecil dari
            perjalanan yang membawa kami menuju hari bahagia.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-[20px] top-0 w-px bg-neutral-300 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14">
            {stories.map((story, index) => {
              const isRight = index % 2 !== 0;

              return (
                <article
                  key={story.number}
                  className={`relative pl-14 sm:grid sm:grid-cols-2 sm:pl-0 ${
                    isRight ? "" : ""
                  }`}
                >
                  <div className="absolute left-[13px] top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-[#111111] shadow sm:left-1/2 sm:-translate-x-1/2" />

                  <div
                    className={`${
                      isRight
                        ? "sm:col-start-2 sm:pl-10"
                        : "sm:col-start-1 sm:pr-10"
                    }`}
                  >
                    <div className="rounded-[28px] border border-neutral-200 bg-white/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur sm:p-8">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737373]">
                        Chapter {story.number}
                      </p>

                      <h3 className="mt-3 font-serif text-2xl text-[#111111] sm:text-3xl">
                        {story.title}
                      </h3>

                      <div className="mt-4 h-px w-12 bg-neutral-300" />

                      <p className="mt-4 text-sm leading-7 text-[#404040]">
                        {story.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-lg text-center">
          <span className="font-serif text-3xl text-neutral-500">♡</span>

          <p className="mt-5 font-serif text-xl italic text-[#525252] sm:text-2xl">
            And our story continues...
          </p>
        </div>
      </div>
    </section>
  );
}
