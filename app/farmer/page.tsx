'use client';

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  ImagePlus,
  Leaf,
  MapPin,
  PackageCheck,
  Plus,
  QrCode,
  Sprout,
  Truck,
  UserRound,
} from 'lucide-react';

const stats = [
  {
    label: 'Total Data Panen',
    value: '18',
    caption: 'data panen tercatat',
    icon: ClipboardList,
  },
  {
    label: 'Menunggu Validasi',
    value: '4',
    caption: 'perlu dicek admin',
    icon: Clock3,
  },
  {
    label: 'QR Produk Aktif',
    value: '12',
    caption: 'produk siap dipindai',
    icon: QrCode,
  },
  {
    label: 'Pesanan Masuk',
    value: '7',
    caption: 'dari pembeli B2B',
    icon: PackageCheck,
  },
];

const harvestData = [
  {
    name: 'Cabai Merah Grade A',
    code: 'AGRI-2026-001',
    location: 'Boyolali, Jawa Tengah',
    quantity: '100 kg',
    status: 'Disetujui',
    badge: 'QR Aktif',
  },
  {
    name: 'Tomat Segar Grade B',
    code: 'AGRI-2026-002',
    location: 'Karo, Sumatera Utara',
    quantity: '240 kg',
    status: 'Menunggu Validasi',
    badge: 'Review Admin',
  },
  {
    name: 'Sawi Hijau Grade A',
    code: 'AGRI-2026-003',
    location: 'Bandung, Jawa Barat',
    quantity: '80 kg',
    status: 'Dipesan',
    badge: 'B2B Order',
  },
];

const orders = [
  {
    buyer: 'Restoran Nusantara',
    product: 'Cabai Merah Grade A',
    quantity: '30 kg',
    status: 'Menunggu konfirmasi',
  },
  {
    buyer: 'Katering Sehat Jaya',
    product: 'Sawi Hijau Grade A',
    quantity: '20 kg',
    status: 'Diproses',
  },
  {
    buyer: 'Distributor FreshMart',
    product: 'Tomat Segar Grade B',
    quantity: '100 kg',
    status: 'Negosiasi stok',
  },
];

const navItems = ['Ringkasan', 'Data Panen', 'Tambah Data Panen', 'Pesanan', 'QR Produk', 'Profil'];

export default function FarmerPage() {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-slate-900 antialiased">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-[#E8DDC7] bg-white/75 p-6 shadow-sm backdrop-blur lg:flex lg:flex-col">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <Leaf className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-base font-bold tracking-tight text-slate-900">AGRI-EYE</span>
              <span className="block text-xs font-medium text-slate-500">Dashboard Petani</span>
            </span>
          </a>

          <nav className="mt-10 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm ${
                  index === 0 ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-emerald-600' : 'bg-slate-300'}`} />
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5">
            <div className="flex items-center gap-2 text-emerald-600">
              <CheckCircle2 className="h-4 w-4" />
              <p className="text-sm font-bold">Profil Terverifikasi</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Data petani sudah lengkap. Data panen yang kamu input bisa lebih cepat masuk proses validasi admin.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold text-emerald-600">Panel Petani</p>
                <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-900 lg:text-4xl">
                  Kelola hasil panen dan keterlacakan produkmu.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  Input data panen, pantau status validasi, dapatkan QR Produk, dan lihat pesanan dari pembeli B2B.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                  <CalendarDays className="h-4 w-4 text-emerald-600" />
                  Musim Panen Juni
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
                  <Plus className="h-4 w-4" />
                  Tambah Data Panen
                </button>
                <button className="inline-flex items-center gap-3 rounded-2xl border border-[#E8DDC7] bg-white px-3 py-2 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F3D2E] text-white">
                    <UserRound className="h-4 w-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-bold text-slate-900">Pak Suyanto</span>
                    <span className="block text-xs font-medium text-slate-500">Petani Horti</span>
                  </span>
                </button>
              </div>
            </div>
          </header>

          <section className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="rounded-2xl border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{item.value}</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-medium text-slate-500">{item.caption}</p>
                </article>
              );
            })}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-emerald-600">Tambah Data Panen</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Data hasil panen</h2>
                </div>
                <Sprout className="h-6 w-6 text-emerald-600" />
              </div>

              <form className="mt-6 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Komoditas</span>
                  <input className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white" placeholder="Contoh: Cabai Merah" />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-600">Jumlah Panen</span>
                    <input className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white" placeholder="100" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-600">Satuan</span>
                    <select className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white">
                      <option>kg</option>
                      <option>ton</option>
                      <option>ikat</option>
                      <option>karung</option>
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-600">Tanggal Panen</span>
                    <input type="date" className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-600">Harga Harapan</span>
                    <input className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white" placeholder="Rp32.000/kg" />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Lokasi Asal</span>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input className="w-full rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white" placeholder="Kecamatan, Kabupaten, Provinsi" />
                  </div>
                </label>

                <button type="button" className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-[#D6C7A9] bg-[#FBFAF6] px-4 py-6 text-sm font-bold text-slate-500 transition-all duration-200 ease-in-out hover:border-emerald-300 hover:bg-white hover:text-emerald-600">
                  <ImagePlus className="h-5 w-5" />
                  Upload foto hasil panen
                </button>

                <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
                  Simpan Data Panen
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </article>

            <div className="grid gap-6">
              <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-600">Data Panen</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Status terbaru</h2>
                  </div>
                  <a href="#" className="text-sm font-bold text-emerald-600">Lihat semua</a>
                </div>

                <div className="mt-6 grid gap-3">
                  {harvestData.map((item) => (
                    <div key={item.code} className="rounded-2xl border border-[#E8DDC7] bg-white/80 p-4 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-sm font-bold text-slate-900">{item.name}</p>
                          <p className="mt-1 text-xs font-medium text-slate-500">Kode Panen: {item.code} · {item.location}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#FBFAF6] px-3 py-1 text-xs font-bold text-slate-600">{item.quantity}</span>
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{item.badge}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-600">Pesanan B2B</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Pesanan masuk</h2>
                  </div>
                  <Truck className="h-6 w-6 text-emerald-600" />
                </div>

                <div className="mt-6 grid gap-3">
                  {orders.map((order) => (
                    <div key={`${order.buyer}-${order.product}`} className="grid gap-3 rounded-2xl border border-[#E8DDC7] bg-white/80 p-4 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm md:grid-cols-[1fr_0.8fr_auto] md:items-center">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{order.buyer}</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">{order.product}</p>
                      </div>
                      <p className="text-sm font-bold text-slate-700">{order.quantity}</p>
                      <span className="rounded-full bg-[#FBFAF6] px-3 py-1 text-xs font-bold text-slate-600">{order.status}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
