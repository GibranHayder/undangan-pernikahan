"use client";

import { useEffect, useState } from "react";
import { ref, push, onValue, query, limitToLast } from "firebase/database";

import { database } from "@/lib/firebase";

export default function RSVP({ guestName = "" }) {
  const [nama, setNama] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [ucapan, setUcapan] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingUcapan, setLoadingUcapan] = useState(true);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [daftarUcapan, setDaftarUcapan] = useState([]);

  // Auto-fill guest name from invitation URL
  useEffect(() => {
    if (guestName && guestName !== "Tamu Undangan") {
      setNama(guestName);
    }
  }, [guestName]);

  // Load messages from Firebase in realtime
  useEffect(() => {
    const ucapanQuery = query(ref(database, "ucapan"), limitToLast(20));

    const unsubscribe = onValue(
      ucapanQuery,
      (snapshot) => {
        const data = [];

        snapshot.forEach((childSnapshot) => {
          data.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        // Show newest messages first
        setDaftarUcapan(data.reverse());
        setLoadingUcapan(false);
      },
      (firebaseError) => {
        console.error("Gagal membaca ucapan:", firebaseError);

        setLoadingUcapan(false);
      },
    );

    return () => unsubscribe();
  }, []);

  // Submit data to Firebase
  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    const namaBersih = nama.trim();
    const ucapanBersih = ucapan.trim();

    if (!namaBersih) {
      setError("Nama wajib diisi.");
      return;
    }

    if (!kehadiran) {
      setError("Silakan pilih konfirmasi kehadiran.");
      return;
    }

    if (!ucapanBersih) {
      setError("Silakan tuliskan doa atau ucapan.");
      return;
    }

    if (namaBersih.length > 80) {
      setError("Nama terlalu panjang.");
      return;
    }

    if (ucapanBersih.length > 500) {
      setError("Ucapan maksimal 500 karakter.");
      return;
    }

    try {
      setLoading(true);

      await push(ref(database, "ucapan"), {
        nama: namaBersih,
        kehadiran,
        ucapan: ucapanBersih,
        createdAt: Date.now(),
      });

      setMessage("Terima kasih. Konfirmasi dan ucapan Anda telah terkirim ♡");

      // Keep guest name after submission
      setKehadiran("");
      setUcapan("");
    } catch (firebaseError) {
      console.error("Gagal mengirim ucapan:", firebaseError);

      setError("Ucapan belum berhasil dikirim. Silakan coba kembali.");
    } finally {
      setLoading(false);
    }
  };

  const formatTanggal = (timestamp) => {
    if (!timestamp) return "";

    try {
      return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(timestamp));
    } catch {
      return "";
    }
  };

  const statusKehadiran = (status) => {
    if (status === "hadir") {
      return "InsyaAllah Hadir";
    }

    if (status === "ragu") {
      return "Belum Pasti";
    }

    if (status === "tidak_hadir") {
      return "Belum Dapat Hadir";
    }

    return "";
  };

  return (
    <section
      id="ucapan"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f7] to-[#eeeeee] px-5 py-24 sm:px-8 sm:py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-neutral-300/30 blur-[100px]" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-neutral-400/20 blur-[110px]" />

      {/* Left ornament */}

      <svg
        viewBox="0 0 260 420"
        className="pointer-events-none absolute -left-20 top-20 w-[180px] opacity-30 sm:w-[230px]"
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

      {/* Right ornament */}

      <svg
        viewBox="0 0 260 420"
        className="pointer-events-none absolute -bottom-20 -right-20 w-[180px] rotate-180 opacity-30 sm:w-[230px]"
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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#525252] sm:text-xs">
            Doa & Ucapan
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-neutral-300 sm:w-14" />

            <span className="font-serif text-lg text-neutral-600">♡</span>

            <span className="h-px w-8 bg-neutral-300 sm:w-14" />
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.5rem,9vw,5rem)] leading-tight text-[#111111]">
            Konfirmasi Kehadiran
          </h2>

          <p className="mt-2 font-serif text-[clamp(1.7rem,6vw,3rem)] italic text-[#525252]">
            & Ucapan
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#404040] sm:text-base sm:leading-8">
            Kehadiran, doa, dan ucapan dari Bapak/Ibu/Saudara/i merupakan
            kebahagiaan yang sangat berarti bagi Aldhy dan Ully.
          </p>
        </div>

        {/* FORM + MESSAGES */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* FORM */}

          <div>
            <div className="rounded-[32px] border border-neutral-200 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-md sm:p-8">
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#525252]">
                  Kehadiran
                </p>

                <h3 className="mt-3 font-serif text-3xl text-[#111111] sm:text-4xl">
                  Apakah Anda Akan Hadir?
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-[#525252] sm:text-sm">
                  Silakan isi konfirmasi kehadiran dan tinggalkan doa terbaik
                  untuk Aldhy & Ully.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* NAME */}

                <div>
                  <label
                    htmlFor="nama"
                    className="mb-2 block text-xs font-medium text-[#404040]"
                  >
                    Nama
                  </label>

                  <input
                    id="nama"
                    type="text"
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                    placeholder="Masukkan nama Anda"
                    maxLength={80}
                    className="min-h-[50px] w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#262626] outline-none transition placeholder:text-[#A3A3A3] focus:border-neutral-500 focus:ring-4 focus:ring-neutral-200/60"
                  />
                </div>

                {/* ATTENDANCE */}

                <div>
                  <label
                    htmlFor="kehadiran"
                    className="mb-2 block text-xs font-medium text-[#404040]"
                  >
                    Konfirmasi Kehadiran
                  </label>

                  <select
                    id="kehadiran"
                    value={kehadiran}
                    onChange={(event) => setKehadiran(event.target.value)}
                    className="min-h-[50px] w-full rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 text-sm text-[#262626] outline-none transition focus:border-neutral-500 focus:ring-4 focus:ring-neutral-200/60"
                  >
                    <option value="">Pilih kehadiran</option>

                    <option value="hadir">♡ InsyaAllah Hadir</option>

                    <option value="ragu">Belum Pasti</option>

                    <option value="tidak_hadir">Belum Dapat Hadir</option>
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="ucapan"
                      className="text-xs font-medium text-[#404040]"
                    >
                      Doa & Ucapan
                    </label>

                    <span className="text-[10px] text-[#858585]">
                      {ucapan.length}/500
                    </span>
                  </div>

                  <textarea
                    id="ucapan"
                    value={ucapan}
                    onChange={(event) => setUcapan(event.target.value)}
                    placeholder="Tuliskan doa dan ucapan terbaik untuk Aldhy & Ully..."
                    maxLength={500}
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-neutral-200 bg-[#fafafa] px-4 py-4 text-sm leading-7 text-[#262626] outline-none transition placeholder:text-[#A3A3A3] focus:border-neutral-500 focus:ring-4 focus:ring-neutral-200/60"
                  />
                </div>

                {/* ERROR */}

                {error && (
                  <div className="rounded-2xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-center text-xs leading-6 text-[#404040]">
                    {error}
                  </div>
                )}

                {/* SUCCESS */}

                {message && (
                  <div className="rounded-2xl border border-neutral-300 bg-neutral-100 px-4 py-3 text-center text-xs leading-6 text-[#262626]">
                    {message}
                  </div>
                )}

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-black active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <span>♡</span>
                      Kirim Konfirmasi & Ucapan
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* MESSAGE LIST */}

          <div>
            <div className="mb-6 text-center lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#525252]">
                Pesan Tamu
              </p>

              <h3 className="mt-2 font-serif text-3xl text-[#111111] sm:text-4xl">
                Doa & Ucapan
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#525252] sm:text-sm">
                Ucapan terbaru dari keluarga, sahabat, dan tamu untuk Aldhy &
                Ully.
              </p>
            </div>

            {/* LOADING */}

            {loadingUcapan && (
              <div className="flex min-h-[220px] items-center justify-center rounded-[30px] border border-neutral-200 bg-white/60">
                <div className="text-center">
                  <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-neutral-300 border-t-[#111111]" />

                  <p className="mt-4 text-xs text-[#737373]">
                    Memuat ucapan...
                  </p>
                </div>
              </div>
            )}

            {/* EMPTY */}

            {!loadingUcapan && daftarUcapan.length === 0 && (
              <div className="flex min-h-[220px] items-center justify-center rounded-[30px] border border-neutral-200 bg-white/60 px-6 text-center">
                <div>
                  <span className="font-serif text-4xl text-neutral-500">
                    ♡
                  </span>

                  <p className="mt-4 text-sm text-[#404040]">
                    Belum ada ucapan.
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#737373]">
                    Jadilah yang pertama memberikan doa terbaik untuk Aldhy &
                    Ully.
                  </p>
                </div>
              </div>
            )}

            {/* MESSAGES */}

            {!loadingUcapan && daftarUcapan.length > 0 && (
              <div className="max-h-[620px] space-y-4 overflow-y-auto pr-1 sm:pr-2">
                {daftarUcapan.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-[26px] border border-neutral-200 bg-white/80 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h4 className="break-words font-serif text-xl font-semibold text-[#262626]">
                          {item.nama}
                        </h4>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] ${
                              item.kehadiran === "hadir"
                                ? "bg-neutral-900 text-white"
                                : item.kehadiran === "ragu"
                                  ? "bg-neutral-200 text-[#404040]"
                                  : "bg-neutral-100 text-[#737373]"
                            }`}
                          >
                            {statusKehadiran(item.kehadiran)}
                          </span>

                          {item.createdAt && (
                            <span className="text-[9px] text-[#858585]">
                              {formatTanggal(item.createdAt)}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="shrink-0 font-serif text-2xl text-neutral-500">
                        ♡
                      </span>
                    </div>

                    <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-[#404040]">
                      {item.ucapan}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CLOSING */}

        <div className="mx-auto mt-20 max-w-xl text-center">
          <span className="font-serif text-3xl text-neutral-500">♡</span>

          <p className="mt-5 font-serif text-2xl italic text-[#404040] sm:text-3xl">
            Terima kasih atas doa terbaiknya.
          </p>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#404040] sm:text-base">
            Setiap doa dan ucapan yang diberikan menjadi bagian indah dalam
            perjalanan baru Aldhy dan Ully.
          </p>
        </div>
      </div>
    </section>
  );
}
