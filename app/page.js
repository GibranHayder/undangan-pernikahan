import Cover from "./components/Cover";
import Couple from "./components/Couple";

export default function Home() {
  return (
    <main>
      <Cover />

      <section
        id="isi-undangan"
        className="flex min-h-[45vh] items-center justify-center bg-white px-5 py-16"
      >
        <div className="max-w-xl text-center">
          <p className="text-sm tracking-[0.3em] text-pink-400">
            OUR SPECIAL DAY
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-pink-600">
            Undangan Pernikahan
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
        </div>
      </section>

      <Couple />
    </main>
  );
}
