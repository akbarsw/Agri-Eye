import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Leaf,
  MapPin,
  PackageCheck,
  QrCode,
  ShieldCheck,
  Sprout,
  Truck,
  UserRound,
} from 'lucide-react';

type TracePageProps = {
  params: {
    kodePanen: string;
  };
};

const traceSteps = [
  {
    title: 'Data Panen dicatat',
    description: 'Petani mengisi data komoditas, jumlah panen, lokasi asal, dan tanggal panen.',
    icon: Sprout,
  },
  {
    title: 'Data divalidasi AGRI-EYE',
    description: 'Admin meninjau data, foto produk, lokasi, dan kesesuaian informasi panen.',
    icon: ShieldCheck,
  },
  {
    title: 'QR Produk aktif',
    description: 'Produk mendapatkan halaman keterlacakan publik yang bisa dipindai pembeli.',
    icon: QrCode,
  },
  {
    title: 'Siap ditawarkan ke B2B',
    description: 'Produk siap masuk marketplace dan dapat diajukan pesanan oleh pembeli bisnis.',
    icon: PackageCheck,
  },
];

function getTraceData(kodePanen: string) {
  return {
    kodePanen,
    komoditas: kodePanen.includes('014') ? 'Kopi Arabika' : 'Cabai Merah Grade A',
    petani: kodePanen.includes('014') ? 'Kelompok Tani Kintamani' : 'Pak Suyanto',
    lokasi: kodePanen.includes('014') ? 'Kintamani, Bali' : 'Boyolali, Jawa Tengah',
    tanggalPanen: '04 Juni 2026',
    jumlahAwal: kodePanen.includes('014') ? '420 kg' : '100 kg',
    grade: 'A',
    status: 'Data Panen Terverifikasi',
    hargaHarapan: kodePanen.includes('014') ? 'Rp42.000/kg' : 'Rp32.000/kg',
    jenisPasar: 'Marketplace B2B',
  };
}

export default function TracePage({ params }: TracePageProps) {
  const data = getTraceData(params.kodePanen);

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-slate-900 antialiased">
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center justify-between rounded-2xl border border-[#E8DDC7] bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                <Leaf className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-slate-900">AGRI-EYE</span>
                <span className="block text-xs font-medium text-slate-500">QR Produk</span>
              </span>
            </a>

            <span className="hidden rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 sm:inline-flex">
              Catatan Keterlacakan Digital
            </span>
          </nav>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    {data.status}
                  </span>
                  <h1 className="mt-6 text-4xl font-bold tracking-[-0.05em] text-slate-900 lg:text-5xl">
                    {data.komoditas}
                  </h1>
                  <p className="mt-3 text-sm font-medium text-slate-500">Kode Panen: {data.kodePanen}</p>
                </div>

                <div className="grid h-28 w-28 shrink-0 grid-cols-4 gap-1 rounded-2xl bg-[#0F3D2E] p-3 shadow-sm">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span key={index} className={`rounded-sm bg-white ${index % 3 === 0 ? 'opacity-40' : 'opacity-95'}`} />
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoCard icon={<UserRound className="h-4 w-4" />} label="Petani / Kelompok Tani" value={data.petani} />
                <InfoCard icon={<MapPin className="h-4 w-4" />} label="Lokasi Asal" value={data.lokasi} />
                <InfoCard icon={<CalendarDays className="h-4 w-4" />} label="Tanggal Panen" value={data.tanggalPanen} />
                <InfoCard icon={<PackageCheck className="h-4 w-4" />} label="Jumlah Awal" value={data.jumlahAwal} />
                <InfoCard icon={<ShieldCheck className="h-4 w-4" />} label="Grade Mutu" value={`Grade ${data.grade}`} />
                <InfoCard icon={<Truck className="h-4 w-4" />} label="Kanal Penjualan" value={data.jenisPasar} />
              </div>

              <div className="mt-6 rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Harga Harapan Petani</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-emerald-700">{data.hargaHarapan}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Harga ini merupakan harga harapan awal dari petani dan dapat berubah mengikuti kesepakatan transaksi B2B.
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div>
                <p className="text-sm font-bold text-emerald-600">Riwayat Keterlacakan</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Perjalanan data produk</h2>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Halaman ini menampilkan catatan digital asal produk berdasarkan Data Panen petani dan validasi platform AGRI-EYE.
                </p>
              </div>

              <div className="mt-7 grid gap-4">
                {traceSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="rounded-2xl border border-[#E8DDC7] bg-white/80 p-5 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm">
                      <div className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Tahap {index + 1}</p>
                          <h3 className="mt-1 text-base font-bold text-slate-900">{step.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <div className="flex items-center gap-2 text-amber-700">
                  <Clock3 className="h-4 w-4" />
                  <p className="text-sm font-bold">Catatan penting</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-amber-800/80">
                  AGRI-EYE menyediakan catatan keterlacakan digital berdasarkan data petani dan validasi platform. Halaman ini bukan sertifikasi resmi produk.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
        {icon}
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}
