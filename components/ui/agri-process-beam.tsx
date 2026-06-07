import { CheckCircle2, ClipboardList, PackageCheck, QrCode, ShieldCheck, ShoppingBag } from 'lucide-react';

const steps = [
  {
    title: 'Petani mencatat Data Panen',
    description:
      'Petani mengisi komoditas, jumlah, tanggal panen, lokasi asal, foto produk, dan harga harapan melalui dashboard sederhana.',
    icon: ClipboardList,
  },
  {
    title: 'Admin memvalidasi data',
    description:
      'Admin AGRI-EYE meninjau kelengkapan data, memberi grade mutu, dan menentukan apakah produk siap masuk marketplace.',
    icon: ShieldCheck,
  },
  {
    title: 'QR Produk aktif',
    description:
      'Data Panen yang disetujui mendapatkan halaman keterlacakan publik berisi asal produk, grade, dan riwayat digital.',
    icon: QrCode,
  },
  {
    title: 'Produk masuk Marketplace B2B',
    description:
      'Produk terverifikasi dapat dilihat oleh restoran, katering, distributor, toko modern, dan pembeli bisnis lainnya.',
    icon: PackageCheck,
  },
  {
    title: 'Pembeli mengajukan pesanan',
    description:
      'Pembeli B2B memilih produk, mengecek QR Produk, lalu mengajukan jumlah kebutuhan dan alamat pengiriman.',
    icon: ShoppingBag,
  },
];

export default function AgriProcessBeam() {
  return (
    <section className="px-6 py-5 lg:px-8 lg:py-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold text-emerald-600">Alur Platform</p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-slate-900 lg:text-5xl">
              Dari data panen sampai pesanan B2B.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              AGRI-EYE dibuat sebagai jembatan antara petani lokal, validasi platform, QR Produk, marketplace, dan pembeli bisnis.
            </p>

            <div className="mt-5 rounded-[1.5rem] border border-[#E8DDC7] bg-white/75 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                <p className="text-sm font-bold">MVP demo flow</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Alur ini sudah tercermin pada halaman Petani, Admin, QR Produk, Marketplace, dan Dashboard Pembeli B2B.
              </p>
            </div>
          </div>

          <div className="relative pl-6 md:pl-10">
            <div className="agri-process-line absolute left-3 top-4 h-[calc(100%-2rem)] w-px rounded-full md:left-5" />
            <div className="grid gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="agri-process-card group relative overflow-hidden rounded-[1.5rem] border border-[#E8DDC7] bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div className="absolute -left-[2.1rem] top-7 hidden h-4 w-4 rounded-full border-4 border-[#F7F4ED] bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)] md:block" />
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Tahap {index + 1}</p>
                        <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-900">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
