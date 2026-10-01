"use client";

const menus = [
  {
    id: "isi-undangan",
    label: "Home",
    icon: "⌂",
  },
  {
    id: "mempelai",
    label: "Mempelai",
    icon: "♡",
  },
  {
    id: "acara",
    label: "Acara",
    icon: "◷",
  },
  {
    id: "gallery",
    label: "Galeri",
    icon: "▣",
  },
  {
    id: "ucapan",
    label: "Ucapan",
    icon: "✦",
  },
];

export default function BottomNav() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed bottom-3 left-1/2 z-[80] w-[calc(100%-24px)] max-w-xl -translate-x-1/2 rounded-[24px] border border-black/10 bg-white/90 px-2 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl lg:bottom-5">
      <div className="grid grid-cols-5 gap-1">
        {menus.map((menu) => (
          <button
            key={menu.id}
            type="button"
            onClick={() => scrollToSection(menu.id)}
            className="group flex min-h-[54px] flex-col items-center justify-center rounded-[18px] px-1 text-[#525252] transition duration-300 hover:bg-neutral-100 hover:text-[#111111]"
          >
            <span className="text-base transition duration-300 group-hover:-translate-y-0.5">
              {menu.icon}
            </span>

            <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.08em] sm:text-[8px]">
              {menu.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
