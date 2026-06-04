'use client';

import {
  Activity,
  BarChart3,
  CalendarDays,
  ChevronDown,
  Coffee,
  Leaf,
  Map,
  PackageCheck,
  PanelLeft,
  Search,
  Settings,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Truck,
  UserRound,
} from 'lucide-react';

const sidebarItems = [
  { label: 'Ringkasan', icon: BarChart3, active: true },
  { label: 'Budidaya', icon: Sprout, active: false },
  { label: 'Keterlacakan', icon: ShieldCheck, active: false },
  { label: 'Marketplace B2B', icon: PackageCheck, active: false },
  { label: 'Rantai Pasok', icon: Truck, active: false },
  { label: 'Analitik', icon: Activity, active: false },
  { label: 'Pengaturan', icon: Settings, active: false },
];

const metrics = [
  {
    label: 'Budidaya Kopi Aktif',
    value: '1.284 ha',
    change: '+12,4%',
    caption: 'area terpantau bulan ini',
    icon: Coffee,
  },
  {
    label: 'Indeks Nilai Tambah',
    value: '87,2',
    change: '+8,1%',
    caption: 'berdasarkan analisis Hayami',
    icon: TrendingUp,
  },
  {
    label: 'Status Rantai Pasok',
    value: '96%',
    change: 'Stabil',
    caption: 'pesanan sesuai jadwal',
    icon: Truck,
  },
  {
    label: 'Batch Tervalidasi',
    value: '342',
    change: '+24',
    caption: 'QR keterlacakan aktif',
    icon: ShieldCheck,
  },
];

const activities = [
  {
    product: 'Kopi Arabika Grade A',
    location: 'Kintamani, Bali',
    value: 'Rp42.000/kg',
    status: 'Nilai tambah tinggi',
    time: '10 menit lalu',
  },
  {
    product: 'Cabai Merah Grade A',
    location: 'Boyolali, Jawa Tengah',
    value: '100 kg',
    status: 'Siap dikirim',
    time: '28 menit lalu',
  },
  {
    product: 'Tomat Segar Grade B',
    location: 'Karo, Sumatera Utara',
    value: '240 kg',
    status: 'Menunggu validasi',
    time: '44 menit lalu',
  },
  {
    product: 'Sawi Hijau Grade A',
    location: 'Bandung, Jawa Barat',
    value: '80 kg',
    status: 'Dipesan B2B',
    time: '1 jam lalu',
  },
  {
    product: 'Pisang Cavendish',
    location: 'Lampung Tengah',
    value: '320 kg',
    status: 'QR aktif',
    time: '2 jam lalu',
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-slate-100 bg-white p-6 shadow-sm lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-bold tracking-tight text-slate-900">AGRI-EYE</p>
              <p className="text-xs font-medium text-slate-500">Agribusiness Intelligence</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href="#"
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-200 ease-in-out hover:bg-slate-50 hover:shadow-sm ${
                    item.active
                      ? 'bg-emerald-50 font-medium text-emerald-700'
                      : 'font-medium text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${
                      item.active
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-50 text-slate-400 group-hover:bg-white group-hover:text-emerald-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <div className="flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-sm font-bold">Data Quality</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              87% batch aktif sudah memiliki lokasi asal, grade mutu, foto produk, dan QR keterlacakan.
            </p>
            <button className="mt-5 w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
              Lihat Insight
            </button>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <button className="rounded-xl border border-slate-100 bg-white p-3 text-slate-500 shadow-sm transition-all duration-200 ease-in-out hover:text-slate-900 hover:shadow-md lg:hidden">
                <PanelLeft className="h-5 w-5" />
              </button>
              <div>
                <p className="text-sm font-medium text-emerald-600">Dashboard Utama</p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Ringkasan Agribisnis
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Pantau budidaya, nilai tambah, keterlacakan, dan status rantai pasok dalam satu tampilan operasional.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                <CalendarDays className="h-4 w-4 text-emerald-600" />
                <span>30 Hari Terakhir</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>

              <button className="inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-500 shadow-sm transition-all duration-200 ease-in-out hover:text-slate-900 hover:shadow-md">
                <Search className="h-4 w-4" />
                <span>Cari batch</span>
              </button>

              <button className="inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <UserRound className="h-4 w-4" />
                </span>
                <span className="text-left">
                  <span className="block text-sm font-bold text-slate-900">Admin</span>
                  <span className="block text-xs font-medium text-slate-500">AGRI-EYE</span>
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </button>
            </div>
          </header>

          <section className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{metric.value}</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                      {metric.change}
                    </span>
                    <span className="text-right text-xs font-medium leading-5 text-slate-500">{metric.caption}</span>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md lg:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-emerald-600">Peta & Analitik</p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900">Sebaran Budidaya dan Nilai Tambah</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-100 px-3 py-1 text-xs font-medium text-slate-500">Live monitoring</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">96% stabil</span>
                </div>
              </div>

              <div className="relative mt-8 h-[440px] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_78%_35%,rgba(16,185,129,0.14),transparent_24%),radial-gradient(circle_at_55%_78%,rgba(15,23,42,0.08),transparent_22%)]" />

                <div className="absolute left-6 top-6 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Map className="h-4 w-4" />
                    <p className="text-xs font-bold uppercase tracking-wide">Area prioritas</p>
                  </div>
                  <p className="mt-2 text-lg font-bold text-slate-900">Jawa Tengah</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">312 batch aktif terpantau</p>
                </div>

                <div className="absolute bottom-6 right-6 rounded-2xl bg-slate-900 p-5 text-white shadow-sm">
                  <p className="text-xs font-medium text-slate-300">Estimasi pasokan minggu ini</p>
                  <p className="mt-2 text-2xl font-bold">18,4 ton</p>
                  <p className="mt-1 text-xs font-medium text-emerald-300">+7,8% dari minggu lalu</p>
                </div>

                <div className="absolute left-[28%] top-[42%] h-5 w-5 rounded-full bg-emerald-600 shadow-[0_0_0_10px_rgba(16,185,129,0.12)]" />
                <div className="absolute right-[24%] top-[30%] h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_10px_rgba(16,185,129,0.10)]" />
                <div className="absolute bottom-[26%] left-[52%] h-4 w-4 rounded-full bg-slate-900 shadow-[0_0_0_10px_rgba(15,23,42,0.08)]" />

                <div className="absolute bottom-6 left-6 w-56 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-medium text-slate-500">Indeks Hayami</p>
                  <div className="mt-3 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[72%] rounded-full bg-emerald-600" />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-medium">
                    <span className="text-slate-500">Nilai tambah</span>
                    <span className="text-emerald-600">72%</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-emerald-600">Aktivitas Terbaru</p>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900">Analisis Agroindustri</h2>
                </div>
                <button className="rounded-xl border border-slate-100 px-3 py-2 text-sm font-medium text-slate-500 transition-all duration-200 ease-in-out hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm">
                  Lihat Semua
                </button>
              </div>

              <div className="mt-6 space-y-3">
                {activities.map((activity) => (
                  <div
                    key={`${activity.product}-${activity.time}`}
                    className="rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-200 ease-in-out hover:bg-slate-50 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">{activity.product}</h3>
                        <p className="mt-1 text-xs font-medium text-slate-500">{activity.location}</p>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        {activity.value}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-slate-700">{activity.status}</p>
                      <p className="text-xs font-medium text-slate-400">{activity.time}</p>
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
