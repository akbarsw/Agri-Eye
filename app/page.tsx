import AgriEyeLogo from '@/components/agri-eye-logo';
import AgriAnimatedNumber from '@/components/ui/agri-animated-number';
import AgriFaq from '@/components/ui/agri-faq';
import AgriFooter from '@/components/ui/agri-footer';
import AgriLoginSelect from '@/components/ui/agri-login-select';
import AgriNavHeader from '@/components/ui/agri-nav-header';
import AgriProcessBeam from '@/components/ui/agri-process-beam';
import AgriScrollVelocity from '@/components/ui/agri-scroll-velocity';
import AgriTestimonials from '@/components/ui/agri-testimonials';
import AgriTraceMapFrame from '@/components/ui/agri-trace-map-frame';
import AgriTypewriter from '@/components/ui/agri-typewriter';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Data Panen Aktif', value: '342' },
  { label: 'Petani Terhubung', value: '128' },
  { label: 'Pembeli B2B', value: '46' },
];

const products = [
  { name: 'Cabai Merah Grade A', origin: 'Boyolali', stock: '100 kg', status: 'QR aktif' },
  { name: 'Kopi Arabika', origin: 'Kintamani', stock: '420 kg', status: 'Grade A' },
  { name: 'Tomat Segar', origin: 'Karo', stock: '240 kg', status: 'Validasi' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F4ED] text-slate-900 antialiased">
      <nav className="sticky top-0 z-50 w-full border-b border-[#E8DDC7]/70 bg-[#F7F4ED]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <a href="#top" className="flex min-w-0 shrink-0 items-center">
              <AgriEyeLogo compact />
            </a>

            <div className="hidden min-w-0 flex-1 justify-center md:flex">
              <AgriNavHeader />
            </div>

            <div className="flex shrink-0 items-center">
              <AgriLoginSelect />
            </div>
          </div>

          <div className="mt-2 flex w-full max-w-full overflow-x-auto pb-1 md:hidden">
            <AgriNavHeader compact />
          </div>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(37,184,102,0.13),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(232,221,199,0.9),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.8),transparent_28%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#E8DDC7] bg-white/80 px-4 py-2 text-sm font-medium text-[#1FA653] shadow-sm">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span className="truncate">Food traceability untuk hasil panen lokal</span>
            </div>

            <AgriTypewriter />

            <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-slate-500 lg:text-base lg:leading-8">
              AGRI-EYE membantu petani mencatat Data Panen, membuat QR Produk, dan menjual produk terverifikasi ke pembeli B2B secara lebih transparan.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="/farmer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25B866] px-6 py-4 text-sm font-bold !text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#1FA653] hover:shadow-md">
                Mulai sebagai Petani
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/buyer" className="inline-flex items-center justify-center rounded-2xl border border-[#E8DDC7] bg-white/80 px-6 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:bg-white hover:shadow-md">
                Masuk sebagai Pembeli B2B
              </a>
            </div>

            <div className="mt-7 max-w-xl">
              <div className="grid grid-cols-3 divide-x divide-[#D7CCB8]">
                {stats.map((item) => (
                  <div key={item.label} className="flex min-w-0 flex-col items-center px-4 text-center sm:px-6">
                    <p className="overflow-hidden text-2xl font-semibold tracking-tight text-[#3A352C] sm:text-3xl lg:text-4xl">
                      <AgriAnimatedNumber value={item.value} />
                    </p>
                    <p className="mt-1.5 text-[10px] font-medium leading-4 text-[#6F685B] sm:text-xs sm:leading-5">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0 pt-9 sm:pt-10 xl:translate-x-6 xl:pt-16 [&>div]:mx-auto [&>div]:scale-[0.86] [&>div]:origin-top sm:[&>div]:scale-[0.9] xl:[&>div]:scale-[0.86]">
            <AgriTraceMapFrame />
          </div>
        </div>
      </section>

      <AgriScrollVelocity />

      <div id="workflow">
        <AgriProcessBeam />
      </div>

      <section id="market" className="px-4 py-7 sm:px-6 lg:px-8 lg:py-8">
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
