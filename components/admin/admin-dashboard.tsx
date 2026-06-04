'use client';

import { useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Eye,
  Leaf,
  MapPin,
  PackageCheck,
  PencilLine,
  ShieldCheck,
  Sprout,
  UserRound,
  XCircle,
} from 'lucide-react';

type Grade = 'A' | 'B' | 'C';
type Status = 'Menunggu Validasi' | 'Disetujui' | 'Perlu Revisi' | 'Ditolak';

type HarvestReview = {
  id: string;
  kodePanen: string;
  komoditas: string;
  petani: string;
  lokasi: string;
  jumlah: string;
  tanggalPanen: string;
  hargaHarapan: string;
  foto: string;
  status: Status;
  grade?: Grade;
  catatanAdmin?: string;
};

const initialReviews: HarvestReview[] = [
  {
    id: '1',
    kodePanen: 'AGRI-2026-004',
    komoditas: 'Cabai Merah',
    petani: 'Pak Suyanto',
    lokasi: 'Boyolali, Jawa Tengah',
    jumlah: '100 kg',
    tanggalPanen: '04 Jun 2026',
    hargaHarapan: 'Rp32.000/kg',
    foto: 'Foto tersedia',
    status: 'Menunggu Validasi',
  },
  {
    id: '2',
    kodePanen: 'AGRI-2026-005',
    komoditas: 'Tomat Segar',
    petani: 'Bu Rahayu',
    lokasi: 'Karo, Sumatera Utara',
    jumlah: '240 kg',
    tanggalPanen: '04 Jun 2026',
    hargaHarapan: 'Rp11.000/kg',
    foto: 'Foto tersedia',
    status: 'Menunggu Validasi',
  },
  {
    id: '3',
    kodePanen: 'AGRI-2026-006',
    komoditas: 'Sawi Hijau',
    petani: 'Pak Dedi',
    lokasi: 'Bandung, Jawa Barat',
    jumlah: '80 kg',
    tanggalPanen: '03 Jun 2026',
    hargaHarapan: 'Rp9.000/kg',
    foto: 'Foto tersedia',
    status: 'Disetujui',
    grade: 'A',
    catatanAdmin: 'Kualitas produk baik dan siap masuk marketplace.',
  },
];

const navItems = ['Ringkasan', 'Validasi Data Panen', 'Petani', 'Marketplace', 'Pesanan', 'Laporan'];

const gradeOptions: Grade[] = ['A', 'B', 'C'];

const statusStyles: Record<Status, string> = {
  'Menunggu Validasi': 'bg-amber-50 text-amber-700',
  Disetujui: 'bg-emerald-50 text-emerald-700',
  'Perlu Revisi': 'bg-sky-50 text-sky-700',
  Ditolak: 'bg-rose-50 text-rose-700',
};

export default function AdminDashboard() {
  const [reviews, setReviews] = useState<HarvestReview[]>(initialReviews);
  const [selectedId, setSelectedId] = useState(initialReviews[0]?.id ?? '');
  const [selectedGrade, setSelectedGrade] = useState<Grade>('A');
  const [adminNote, setAdminNote] = useState('');
  const [message, setMessage] = useState('');

  const selectedReview = reviews.find((item) => item.id === selectedId) ?? reviews[0];

  const stats = useMemo(
    () => [
      {
        label: 'Menunggu Validasi',
        value: String(reviews.filter((item) => item.status === 'Menunggu Validasi').length),
        icon: Clock3,
      },
      {
        label: 'Disetujui',
        value: String(reviews.filter((item) => item.status === 'Disetujui').length),
        icon: CheckCircle2,
      },
      {
        label: 'Perlu Revisi',
        value: String(reviews.filter((item) => item.status === 'Perlu Revisi').length),
        icon: PencilLine,
      },
      {
        label: 'Ditolak',
        value: String(reviews.filter((item) => item.status === 'Ditolak').length),
        icon: XCircle,
      },
    ],
    [reviews],
  );

  function selectReview(item: HarvestReview) {
    setSelectedId(item.id);
    setSelectedGrade(item.grade ?? 'A');
    setAdminNote(item.catatanAdmin ?? '');
    setMessage('');
  }

  function updateStatus(status: Status) {
    if (!selectedReview) return;

    setReviews((current) =>
      current.map((item) =>
        item.id === selectedReview.id
          ? {
              ...item,
              status,
              grade: status === 'Disetujui' ? selectedGrade : item.grade,
              catatanAdmin: adminNote || getDefaultNote(status),
            }
          : item,
      ),
    );

    setMessage(`Data Panen ${selectedReview.kodePanen} berhasil diubah menjadi ${status}.`);
  }

  function getDefaultNote(status: Status) {
    if (status === 'Disetujui') return 'Data panen sudah sesuai dan siap masuk marketplace.';
    if (status === 'Perlu Revisi') return 'Petani perlu melengkapi atau memperbaiki data panen.';
    if (status === 'Ditolak') return 'Data panen belum memenuhi syarat validasi AGRI-EYE.';
    return '';
  }

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-slate-900 antialiased">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-[#E8DDC7] bg-white/75 p-6 shadow-sm backdrop-blur lg:flex lg:flex-col">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F3D2E] text-white shadow-sm">
              <Leaf className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-base font-bold tracking-tight text-slate-900">AGRI-EYE</span>
              <span className="block text-xs font-medium text-slate-500">Dashboard Admin</span>
            </span>
          </a>

          <nav className="mt-10 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm ${
                  index === 1 ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${index === 1 ? 'bg-emerald-600' : 'bg-slate-300'}`} />
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5">
            <div className="flex items-center gap-2 text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-sm font-bold">Trust Layer</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Admin memastikan Data Panen valid sebelum QR Produk aktif dan produk tampil di marketplace B2B.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold text-emerald-600">Panel Admin</p>
                <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-900 lg:text-4xl">
                  Validasi Data Panen petani.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  Tinjau data panen, beri grade mutu, tambahkan catatan admin, lalu setujui agar QR Produk dan marketplace dapat aktif.
                </p>
              </div>

              <button className="inline-flex items-center gap-3 rounded-2xl border border-[#E8DDC7] bg-white px-3 py-2 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F3D2E] text-white">
                  <UserRound className="h-4 w-4" />
                </span>
                <span className="text-left">
                  <span className="block text-sm font-bold text-slate-900">Admin AGRI-EYE</span>
                  <span className="block text-xs font-medium text-slate-500">Validasi Platform</span>
                </span>
              </button>
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
                </article>
              );
            })}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-emerald-600">Antrian Validasi</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Data Panen masuk</h2>
                </div>
                <ClipboardCheck className="h-6 w-6 text-emerald-600" />
              </div>

              <div className="mt-6 grid gap-3">
                {reviews.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectReview(item)}
                    className={`rounded-2xl border p-4 text-left transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm ${
                      selectedId === item.id
                        ? 'border-emerald-300 bg-emerald-50/60'
                        : 'border-[#E8DDC7] bg-white/80'
                    }`}
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.komoditas}</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">Kode Panen: {item.kodePanen}</p>
                        <p className="mt-1 text-xs font-medium text-slate-400">{item.petani} · {item.lokasi}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#FBFAF6] px-3 py-1 text-xs font-bold text-slate-600">{item.jumlah}</span>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[item.status]}`}>{item.status}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              {selectedReview ? (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-emerald-600">Detail Validasi</p>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{selectedReview.komoditas}</h2>
                      <p className="mt-2 text-sm font-medium text-slate-500">Kode Panen: {selectedReview.kodePanen}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[selectedReview.status]}`}>
                      {selectedReview.status}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5 md:grid-cols-2">
                    <InfoItem label="Nama Petani" value={selectedReview.petani} />
                    <InfoItem label="Lokasi Asal" value={selectedReview.lokasi} icon={<MapPin className="h-4 w-4" />} />
                    <InfoItem label="Jumlah Panen" value={selectedReview.jumlah} />
                    <InfoItem label="Tanggal Panen" value={selectedReview.tanggalPanen} />
                    <InfoItem label="Harga Harapan" value={selectedReview.hargaHarapan} />
                    <InfoItem label="Foto Produk" value={selectedReview.foto} icon={<Eye className="h-4 w-4" />} />
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-[0.45fr_1fr]">
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-600">Grade Mutu</span>
                      <select
                        value={selectedGrade}
                        onChange={(event) => setSelectedGrade(event.target.value as Grade)}
                        className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm font-bold text-slate-800 outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white"
                      >
                        {gradeOptions.map((grade) => (
                          <option key={grade}>{grade}</option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-slate-600">Catatan Admin</span>
                      <input
                        value={adminNote}
                        onChange={(event) => setAdminNote(event.target.value)}
                        className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white"
                        placeholder="Contoh: kualitas baik, siap masuk marketplace"
                      />
                    </label>
                  </div>

                  {message ? (
                    <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                      {message}
                    </p>
                  ) : null}

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => updateStatus('Disetujui')}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Setujui
                    </button>
                    <button
                      type="button"
                      onClick={() => updateStatus('Perlu Revisi')}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
                    >
                      <AlertCircle className="h-4 w-4" />
                      Minta Revisi
                    </button>
                    <button
                      type="button"
                      onClick={() => updateStatus('Ditolak')}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-4 text-sm font-bold text-rose-700 shadow-sm transition-all duration-200 ease-in-out hover:bg-rose-100 hover:shadow-md"
                    >
                      <XCircle className="h-4 w-4" />
                      Tolak
                    </button>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <PackageCheck className="h-4 w-4" />
                      <p className="text-sm font-bold">Dampak setelah disetujui</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Data Panen yang disetujui akan mendapatkan Grade Mutu, QR Produk aktif, dan siap ditampilkan pada marketplace B2B.
                    </p>
                  </div>
                </>
              ) : null}
            </article>
          </section>
        </section>
      </div>
    </main>
  );
}

function InfoItem({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400">
        {icon}
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}
