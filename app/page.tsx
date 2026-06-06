import AgriEyeLogo from '@/components/agri-eye-logo';
import AgriAnimatedNumber from '@/components/ui/agri-animated-number';
import AgriFaq from '@/components/ui/agri-faq';
import AgriFooter from '@/components/ui/agri-footer';
import AgriLoginSelect from '@/components/ui/agri-login-select';
import AgriNavHeader from '@/components/ui/agri-nav-header';
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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-5">
            <a href="#top" className="flex shrink-0 items-center">
              <AgriEyeLogo compact />
            </a>

            <div className="hidden lg:flex lg:items-center">
              <AgriNavHeader />
            </div>
          </div>

          <div className="flex shrink-0 items-center">
            <AgriLoginSelect />
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl overflow-x-auto px-4 pb-3 sm:px-6 lg:hidden">
          <AgriNavHeader compact />
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden px-6 py-7 lg:px-8 lg:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(37,184,102,0.13),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(232,221,199,0.9),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.8),transparent_28%)]" />

        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DDC7] bg-white/80 px-4 py-2 text-sm font-medium text-[#1FA653] shadow-sm">
              <CheckCircle2 className="h-4 w-4" />
              Food traceability untuk hasil panen lokal
            </div>

            <AgriTypewriter />

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 lg:text-lg lg:leading-8">
              AGRI-EYE membantu petani mencatat Data Panen, membuat QR Produk, dan menjual produk terverifikasi ke pembeli B2B secara lebih transparan.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="/farmer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25B866] px-6 py-4 text-sm font-bold !text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#1FA653] hover:shadow-md">
                Mulai sebagai Petani
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/buyer" className="inline-flex items-center justify-center rounded-2xl border border-[#E8DDC7] bg-white/80 px-6 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:bg-white hover:shadow-md">
                Masuk sebagai Pembeli B2B
              </a>
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#E8DDC7] bg-white/80 p-4 shadow-sm backdrop-blur transition-all duration-200 ease-in-out hover:border-[#BFE8CC] hover:bg-white hover:shadow-md">
                  <p className="overflow-hidden text-xl font-bold tracking-tight text-slate-900 lg:text-2xl">
                    <AgriAnimatedNumber value={item.value} />
                  </p>
                  <p className="mt-1.5 text-xs font-medium leading-5 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.75rem] border border-[#E8DDC7] bg-white/85 p-3 shadow-sm backdrop-blur lg:p-4">
              <div className="overflow-hidden rounded-[1.35rem] border border-[#E8DDC7] bg-[#FBFAF6]">
                <div className="flex items-center justify-between border-b border-[#E8DDC7]/80 bg-white/90 px-4 py-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Peta Keterlacakan</p>
                    <p className="text-xs font-medium text-slate-500">Monitoring Data Panen aktif</p>
                  </div>
                  <span className="rounded-full bg-[#EAF8F0] px-3 py-1 text-xs font-bold text-[#1FA653]">Live</span>
                </div>

                <div className="relative h-[300px] bg-[#F2EEE4] lg:h-[330px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(37,184,102,0.22),transparent_20%),radial-gradient(circle_at_75%_28%,rgba(37,184,102,0.13),transparent_22%),radial-gradient(circle_at_52%_72%,rgba(15,23,42,0.08),transparent_24%)]" />
                  <div className="absolute left-6 top-6 rounded-2xl border border-[#E8DDC7] bg-white/90 p-3 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-2 text-[#25B866]">
                      <Map className="h-4 w-4" />
                      <span className="text-xs font-bold uppercase tracking-wide">Area prioritas</span>
                    </div>
                    <p className="mt-2 text-base font-bold text-slate-900">Jawa Tengah</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">126 Data Panen tervalidasi</p>
                  </div>

                  <div className="absolute bottom-6 right-6 w-60 rounded-2xl bg-[#25B866] p-4 !text-white shadow-sm">
                    <p className="text-xs font-medium text-white/80">Skor kesiapan jual</p>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-3xl font-bold text-white">87</p>
                      <p className="text-sm font-medium text-white/85">+12%</p>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/20">
                      <div className="h-2 w-[87%] rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-5 hidden w-68 rounded-2xl border border-[#E8DDC7] bg-white/90 p-4 shadow-sm backdrop-blur lg:block">
              <p className="text-xs font-medium text-slate-500">Data Panen terbaru</p>
              <p className="mt-1.5 text-sm font-bold text-slate-900">Cabai Merah Grade A</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Boyolali · 100 kg · QR aktif</p>
            </div>
          </div>
        </div>
      </section>

      <AgriScrollVelocity />

      <section id="platform" className="px-6 py-7 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#25B866]">Platform</p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-slate-900 lg:text-5xl">
              Dari catatan panen menjadi data yang bisa dipercaya pasar.
            </h2>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-[1.5rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-[#BFE8CC] hover:bg-white hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF8F0] text-[#25B866]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div id="workflow">
        <AgriProcessBeam />
      </div>

      <section id="market" className="px-6 py-7 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[#E8DDC7] bg-white/85 p-5 shadow-sm backdrop-blur lg:p-6">
          <div className="flex flex-col gap-4 border-b border-[#E8DDC7] pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold text-[#25B866]">Marketplace B2B</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-slate-900 lg:text-5xl">Produk lokal yang siap dipasok.</h2>
            </div>
            <a href="/marketplace" className="inline-flex items-center gap-2 rounded-2xl bg-[#25B866] px-5 py-3 text-sm font-bold !text-white transition-all duration-200 ease-in-out hover:bg-[#1FA653] hover:shadow-md">
              Lihat Marketplace
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 grid gap-3">
            {products.map((product) => (
              <div key={product.name} className="grid gap-3 rounded-2xl border border-[#E8DDC7] bg-white/80 p-4 transition-all duration-200 ease-in-out hover:border-[#BFE8CC] hover:bg-white hover:shadow-sm md:grid-cols-[1.1fr_0.6fr_0.5fr_0.4fr] md:items-center">
                <div>
                  <p className="font-bold text-slate-900">{product.name}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">Asal: {product.origin}</p>
                </div>
                <div className="text-sm font-medium text-slate-500">Stok: <span className="font-bold text-slate-900">{product.stock}</span></div>
                <div><span className="rounded-full bg-[#EAF8F0] px-3 py-1 text-xs font-bold text-[#1FA653]">{product.status}</span></div>
                <div className="md:text-right"><ArrowRight className="inline h-5 w-5 text-slate-400" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgriTestimonials />
      <AgriFaq />
      <AgriFooter />
    </main>
  );
}
