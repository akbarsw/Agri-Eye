import {
  ArrowRight,
  CalendarDays,
  Filter,
  Leaf,
  MapPin,
  PackageCheck,
  QrCode,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react';

const products = [
  {
    kodePanen: 'AGRI-2026-001',
    komoditas: 'Cabai Merah Grade A',
    petani: 'Pak Suyanto',
    lokasi: 'Boyolali, Jawa Tengah',
    tanggalPanen: '04 Jun 2026',
    stok: '100 kg',
    harga: 'Rp32.000/kg',
    status: 'QR Aktif',
    grade: 'A',
  },
  {
    kodePanen: 'AGRI-2026-014',
    komoditas: 'Kopi Arabika Grade A',
    petani: 'Kelompok Tani Kintamani',
    lokasi: 'Kintamani, Bali',
    tanggalPanen: '04 Jun 2026',
    stok: '420 kg',
    harga: 'Rp42.000/kg',
    status: 'Terverifikasi',
    grade: 'A',
  },
  {
    kodePanen: 'AGRI-2026-003',
    komoditas: 'Sawi Hijau Grade A',
    petani: 'Pak Dedi',
    lokasi: 'Bandung, Jawa Barat',
    tanggalPanen: '03 Jun 2026',
    stok: '80 kg',
    harga: 'Rp9.000/kg',
    status: 'Siap Dipesan',
    grade: 'A',
  },
];

const filters = ['Semua Produk', 'Hortikultura', 'Grade A', 'QR Aktif'];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-slate-900 antialiased">
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between rounded-2xl border border-[#E8DDC7] bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                <Leaf className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-900">AGRI-EYE</span>
                <span className="block text-xs font-medium text-slate-500">Marketplace B2B</span>
              </span>
            </a>

            <a href="/farmer" className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
              Masuk Petani
            </a>
          </nav>

          <header className="mt-8 rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <div>
                <p className="text-sm font-bold text-emerald-600">Marketplace B2B</p>
                <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900 lg:text-6xl">
                  Produk lokal terverifikasi untuk kebutuhan bisnis.
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                  Pembeli B2B dapat melihat asal produk, grade mutu, stok, harga harapan petani, dan QR Produk sebelum mengajukan pesanan.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0F3D2E] p-5 text-white shadow-sm">
                <p className="text-xs font-medium text-white/70">Produk siap ditawarkan</p>
                <p className="mt-2 text-3xl font-bold">{products.length}</p>
                <p className="mt-2 text-sm font-medium text-emerald-200">Semua sudah memiliki data keterlacakan.</p>
              </div>
            </div>
          </header>

          <section className="mt-6 rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-5 shadow-sm backdrop-blur lg:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  className="w-full rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white"
                  placeholder="Cari komoditas, lokasi, atau kode panen"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((item, index) => (
                  <button
                    key={item}
                    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-200 ease-in-out hover:shadow-sm ${
                      index === 0 ? 'bg-emerald-600 text-white' : 'border border-[#E8DDC7] bg-white text-slate-600 hover:bg-[#FBFAF6]'
                    }`}
                  >
                    {index === 0 ? <Filter className="h-4 w-4" /> : null}
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-5">
            {products.map((product) => (
              <article key={product.kodePanen} className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-5 shadow-sm backdrop-blur transition-all duration-200 ease-in-out hover:bg-white hover:shadow-md lg:p-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr_0.45fr] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        Grade {product.grade}
                      </span>
                      <span className="rounded-full bg-[#FBFAF6] px-3 py-1 text-xs font-bold text-slate-600">
                        {product.status}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">{product.komoditas}</h2>
                    <p className="mt-2 text-sm font-medium text-slate-500">Kode Panen: {product.kodePanen}</p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <Info icon={<MapPin className="h-4 w-4" />} label="Lokasi" value={product.lokasi} />
                      <Info icon={<CalendarDays className="h-4 w-4" />} label="Tanggal Panen" value={product.tanggalPanen} />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Stok Tersedia</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{product.stok}</p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">Harga Harapan</p>
                    <p className="mt-2 text-xl font-bold text-emerald-700">{product.harga}</p>
                  </div>

                  <div className="grid gap-3">
                    <a href={`/trace/${product.kodePanen}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                      <QrCode className="h-4 w-4 text-emerald-600" />
                      Lihat QR Produk
                    </a>
                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
                      <ShoppingBag className="h-4 w-4" />
                      Ajukan Pesanan
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-4 text-sm font-bold text-slate-600 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm">
                      <Truck className="h-4 w-4" />
                      Cek Distribusi
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">{icon}</span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-wide text-slate-400">{label}</span>
        <span className="block font-bold text-slate-900">{value}</span>
      </span>
    </div>
  );
}
