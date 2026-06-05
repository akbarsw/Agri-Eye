import AgriEyeLogo from '@/components/agri-eye-logo';
import AgriProcessBeam from '@/components/ui/agri-process-beam';
import AgriScrollVelocity from '@/components/ui/agri-scroll-velocity';
import AgriTestimonials from '@/components/ui/agri-testimonials';
import AgriTypewriter from '@/components/ui/agri-typewriter';
import {
  ArrowRight,
  CheckCircle2,
  Map,
  PackageCheck,
  QrCode,
  Sprout,
} from 'lucide-react';

const stats = [
  { label: 'Data Panen Aktif', value: '342' },
  { label: 'Petani Terhubung', value: '128' },
  { label: 'Pembeli B2B', value: '46' },
];

const features = [
  {
    title: 'Catat panen secara digital',
    text: 'Petani mencatat komoditas, jumlah, tanggal panen, lokasi asal, foto produk, dan harga harapan dalam satu dashboard sederhana.',
    icon: Sprout,
  },
  {
    title: 'QR Produk per Data Panen',
    text: 'Setiap Data Panen yang lolos validasi mendapatkan QR Produk berisi asal produk, grade mutu, dan riwayat distribusi.',
    icon: QrCode,
  },
  {
    title: 'Marketplace B2B berbasis data',
    text: 'Produk terverifikasi dapat ditawarkan ke restoran, hotel, katering, UMKM pangan, toko modern, dan distributor.',
    icon: PackageCheck,
  },
];

const products = [
  { name: 'Cabai Merah Grade A', origin: 'Boyolali', stock: '100 kg', status: 'QR aktif' },
  { name: 'Kopi Arabika', origin: 'Kintamani', stock: '420 kg', status: 'Grade A' },
  { name: 'Tomat Segar', origin: 'Karo', stock: '240 kg', status: 'Validasi' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-slate-900 antialiased">
      <nav className="sticky top-0 z-50 border-b border-[#E8DDC7]/70 bg-[#F7F4ED]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="shrink-0">
            <AgriEyeLogo compact />
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 lg:flex">
            <a href="#platform" className="transition-colors hover:text-slate-900">Platform</a>
            <a href="#workflow" className="transition-colors hover:text-slate-900">Alur</a>
            <a href="#trace" className="transition-colors hover:text-slate-900">Keterlacakan</a>
            <a href="#market" className="transition-colors hover:text-slate-900">Marketplace</a>
            <a href="/farmer" className="transition-colors hover:text-slate-900">Petani</a>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a href="/buyer" className="hidden rounded-2xl border border-[#E8DDC7] bg-white/80 px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 ease-in-out hover:bg-white hover:shadow-md sm:inline-flex">
              Pembeli B2B
            </a>
            <a href="/farmer" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md sm:px-5 sm:text-sm">
              Mulai
              <span className="hidden sm:inline"> sebagai Petani</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 pb-4 text-sm font-medium text-slate-500 scrollbar-hide sm:px-6 lg:hidden">
          <a href="#platform" className="shrink-0 transition-colors hover:text-slate-900">Platform</a>
          <a href="#workflow" className="shrink-0 transition-colors hover:text-slate-900">Alur</a>
          <a href="#trace" className="shrink-0 transition-colors hover:text-slate-900">Keterlacakan</a>
          <a href="#market" className="shrink-0 transition-colors hover:text-slate-900">Marketplace</a>
          <a href="/farmer" className="shrink-0 transition-colors hover:text-slate-900">Petani</a>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden px-6 py-10 lg:px-8 lg:py-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.13),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(232,221,199,0.9),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.8),transparent_28%)]" />

        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DDC7] bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
              <CheckCircle2 className="h-4 w-4" />
              Food traceability untuk hasil panen lokal
            </div>

            <AgriTypewriter />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              AGRI-EYE membantu petani mencatat Data Panen, membuat QR Produk, dan menjual produk terverifikasi ke pembeli B2B secara lebih transparan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/farmer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
                Mulai sebagai Petani
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/buyer" className="inline-flex items-center justify-center rounded-2xl border border-[#E8DDC7] bg-white/80 px-6 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:bg-white hover:shadow-md">
                Masuk sebagai Pembeli B2B
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#E8DDC7] bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-200 ease-in-out hover:bg-white hover:shadow-md">
                  <p className="text-2xl font-bold tracking-tight text-slate-900">{item.value}</p>
                  <p className="mt-2 text-xs font-medium leading-5 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-4 shadow-sm backdrop-blur lg:p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#E8DDC7] bg-[#FBFAF6]">
                <div className="flex items-center justify-between border-b border-[#E8DDC7]/80 bg-white/90 px-5 py-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Peta Keterlacakan</p>
                    <p className="text-xs font-medium text-slate-500">Monitoring Data Panen aktif</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Live</span>
                </div>

                <div className="relative h-[360px] bg-[#F2EEE4]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(16,185,129,0.22),transparent_20%),radial-gradient(circle_at_75%_28%,rgba(16,185,129,0.13),transparent_22%),radial-gradient(circle_at_52%_72%,rgba(15,23,42,0.08),transparent_24%)]" />
                  <div className="absolute left-8 top-8 rounded-2xl border border-[#E8DDC7] bg-white/90 p-4 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Map className="h-4 w-4" />
                      <span className="text-xs font-bold uppercase tracking-wide">Area prioritas</span>
                    </div>
                    <p className="mt-2 text-lg font-bold text-slate-900">Jawa Tengah</p>
                    <p className="mt-1 text-sm font-medium text-slate-500">126 Data Panen tervalidasi</p>
                  </div>

                  <div className="absolute bottom-8 right-8 w-64 rounded-2xl bg-[#0F3D2E] p-5 text-white shadow-sm">
                    <p className="text-xs font-medium text-white/70">Skor kesiapan jual</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-3xl font-bold">87</p>
                      <p className="text-sm font-medium text-emerald-200">+12%</p>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[87%] rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 hidden w-72 rounded-2xl border border-[#E8DDC7] bg-white/90 p-5 shadow-sm backdrop-blur lg:block">
              <p className="text-xs font-medium text-slate-500">Data Panen terbaru</p>
              <p className="mt-2 text-base font-bold text-slate-900">Cabai Merah Grade A</p>
              <p className="mt-1 text-sm font-medium text-slate-500">Boyolali · 100 kg · QR aktif</p>
            </div>
          </div>
        </div>
      </section>

      <AgriScrollVelocity />

      <section id="platform" className="px-6 py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-emerald-600">Platform</p>
            <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900 lg:text-5xl">
              Dari catatan panen menjadi data yang bisa dipercaya pasar.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-[#E8DDC7] bg-white/85 p-8 shadow-sm backdrop-blur transition-all duration-200 ease-in-out hover:-translate-y-1 hover:bg-white hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 text-xl font-bold tracking-tight text-slate-900">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div id="workflow">
        <AgriProcessBeam />
      </div>

      <section id="trace" className="px-6 py-10 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#0F3D2E] p-8 text-white shadow-sm">
            <p className="text-sm font-bold text-emerald-200">QR Produk</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] lg:text-5xl">
              Bukti asal produk yang mudah dipindai.
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/70">
              Setiap Data Panen memiliki halaman publik yang menampilkan asal produk, tanggal panen, petani, grade mutu, dan status distribusi tanpa mengklaim sebagai sertifikasi resmi.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-8 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between gap-6">
              <div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Data Panen Terverifikasi</span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">Kopi Arabika — Kode Panen #AGRI-2026-014</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">Kintamani, Bali · Grade A · Panen 04 Jun 2026</p>
              </div>
              <div className="grid h-24 w-24 shrink-0 grid-cols-4 gap-1 rounded-2xl bg-[#0F3D2E] p-3">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span key={index} className={`rounded-sm bg-white ${index % 3 === 0 ? 'opacity-40' : 'opacity-95'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="px-6 py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
          <div className="flex flex-col gap-4 border-b border-[#E8DDC7] pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold text-emerald-600">Marketplace B2B</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Produk lokal yang siap dipasok.</h2>
            </div>
            <a href="/marketplace" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
              Lihat Marketplace
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 grid gap-4">
            {products.map((product) => (
              <div key={product.name} className="grid gap-4 rounded-2xl border border-[#E8DDC7] bg-white/80 p-5 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm md:grid-cols-[1.1fr_0.6fr_0.5fr_0.4fr] md:items-center">
                <div>
                  <p className="font-bold text-slate-900">{product.name}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">Asal: {product.origin}</p>
                </div>
                <div className="text-sm font-medium text-slate-500">Stok: <span className="font-bold text-slate-900">{product.stock}</span></div>
                <div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{product.status}</span></div>
                <div className="md:text-right"><ArrowRight className="inline h-5 w-5 text-slate-400" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgriTestimonials />
    </main>
  );
}
