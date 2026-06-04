const metrics = [
  {
    label: "Lahan Aktif",
    value: "1.284 ha",
    change: "+12,4%",
    description: "area budidaya terpantau bulan ini",
    icon: "↗",
  },
  {
    label: "Total Hasil Panen",
    value: "842 ton",
    change: "+8,1%",
    description: "akumulasi batch terverifikasi",
    icon: "◌",
  },
  {
    label: "Status Rantai Pasok",
    value: "96%",
    change: "stabil",
    description: "pesanan berjalan sesuai jadwal",
    icon: "✓",
  },
  {
    label: "Nilai Transaksi",
    value: "Rp2,8M",
    change: "+18,6%",
    description: "estimasi transaksi B2B aktif",
    icon: "＋",
  },
];

const activities = [
  {
    title: "Cabai Merah Grade A",
    location: "Boyolali, Jawa Tengah",
    status: "Siap dikirim",
    volume: "100 kg",
    time: "10 menit lalu",
  },
  {
    title: "Tomat Segar Grade B",
    location: "Karo, Sumatera Utara",
    status: "Menunggu validasi",
    volume: "240 kg",
    time: "34 menit lalu",
  },
  {
    title: "Sawi Hijau Grade A",
    location: "Bandung, Jawa Barat",
    status: "Dipesan B2B",
    volume: "80 kg",
    time: "1 jam lalu",
  },
  {
    title: "Pisang Cavendish",
    location: "Lampung Tengah",
    status: "QR aktif",
    volume: "320 kg",
    time: "2 jam lalu",
  },
];

const navItems = [
  { label: "Ringkasan", active: true },
  { label: "Batch Panen", active: false },
  { label: "Keterlacakan", active: false },
  { label: "Marketplace B2B", active: false },
  { label: "Pesanan", active: false },
  { label: "Analitik", active: false },
  { label: "Pengaturan", active: false },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-slate-100 bg-white/90 p-6 shadow-sm lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-sm">
              A
            </div>
            <div>
              <p className="text-base font-bold tracking-tight text-slate-900">AGRI-EYE</p>
              <p className="text-xs font-normal text-slate-500">Smart Agribusiness</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:bg-slate-50 hover:shadow-sm ${
                  item.active
                    ? "bg-emerald-50 font-semibold text-emerald-700"
                    : "font-normal text-slate-500 hover:text-slate-900"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    item.active ? "bg-emerald-600" : "bg-slate-200 group-hover:bg-emerald-400"
                  }`}
                />
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Kualitas data</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              87% batch aktif sudah memiliki foto, lokasi asal, grade mutu, dan QR keterlacakan.
            </p>
            <button className="mt-4 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
              Lihat Insight
            </button>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between lg:p-6">
            <div>
              <p className="text-sm font-medium text-emerald-600">Dashboard Operasional</p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Ringkasan Agribisnis Hari Ini
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Pantau batch panen, keterlacakan produk, dan aktivitas marketplace B2B dalam satu tempat.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                04 Jun 2026 — 30 Hari
              </button>
              <button className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
                Tambah Batch
              </button>
              <button className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                  AS
                </span>
                <span className="hidden text-left sm:block">
                  <span className="block text-sm font-semibold text-slate-900">Admin</span>
                  <span className="block text-xs text-slate-500">AGRI-EYE</span>
                </span>
              </button>
            </div>
          </header>

          <section className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-normal text-slate-500">{metric.label}</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{metric.value}</h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-lg font-bold text-emerald-600">
                    {metric.icon}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {metric.change}
                  </span>
                  <span className="text-right text-xs text-slate-500">{metric.description}</span>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
            <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md lg:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-600">Peta Pasokan</p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900">Sebaran Batch Panen Aktif</h2>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full border border-slate-100 px-3 py-1 text-xs font-medium text-slate-500">Live</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">96% stabil</span>
                </div>
              </div>

              <div className="relative mt-8 h-[420px] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_78%_35%,rgba(16,185,129,0.14),transparent_24%),radial-gradient(circle_at_55%_78%,rgba(15,23,42,0.08),transparent_22%)]" />
                <div className="absolute left-8 top-8 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-medium text-slate-500">Area prioritas</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">Jawa Tengah</p>
                  <p className="mt-1 text-sm text-emerald-600">312 batch aktif</p>
                </div>
                <div className="absolute bottom-8 right-8 rounded-2xl bg-slate-900 p-5 text-white shadow-md">
                  <p className="text-xs text-slate-300">Estimasi pasokan minggu ini</p>
                  <p className="mt-2 text-2xl font-bold">18,4 ton</p>
                </div>
                <div className="absolute left-[28%] top-[42%] h-5 w-5 rounded-full bg-emerald-600 shadow-[0_0_0_10px_rgba(16,185,129,0.12)]" />
                <div className="absolute right-[24%] top-[30%] h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_10px_rgba(16,185,129,0.10)]" />
                <div className="absolute bottom-[26%] left-[52%] h-4 w-4 rounded-full bg-slate-900 shadow-[0_0_0_10px_rgba(15,23,42,0.08)]" />
              </div>
            </article>

            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-emerald-600">Aktivitas Terbaru</p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900">Analisis Nilai Tambah</h2>
                </div>
                <button className="rounded-xl border border-slate-100 px-3 py-2 text-sm font-medium text-slate-500 transition-all duration-200 ease-in-out hover:bg-slate-50 hover:text-slate-900">
                  Lihat Semua
                </button>
              </div>

              <div className="mt-6 space-y-3">
                {activities.map((activity) => (
                  <div
                    key={`${activity.title}-${activity.time}`}
                    className="rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-200 ease-in-out hover:bg-slate-50 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{activity.title}</h3>
                        <p className="mt-1 text-xs text-slate-500">{activity.location}</p>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {activity.volume}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-slate-700">{activity.status}</p>
                      <p className="text-xs text-slate-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}
