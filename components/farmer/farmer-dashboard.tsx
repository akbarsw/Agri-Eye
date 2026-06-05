'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  CreditCard,
  Download,
  Eye,
  FileCheck2,
  ImagePlus,
  Leaf,
  MapPin,
  PackageCheck,
  Plus,
  QrCode,
  ShieldCheck,
  Sprout,
  Truck,
  UserRound,
} from 'lucide-react';

type HarvestItem = {
  name: string;
  code: string;
  location: string;
  quantity: string;
  status: string;
  badge: string;
  harvestDate?: string;
  expectedPrice?: string;
};

type HarvestForm = {
  commodity: string;
  quantity: string;
  unit: string;
  harvestDate: string;
  expectedPrice: string;
  originLocation: string;
};

const initialHarvestData: HarvestItem[] = [
  {
    name: 'Cabai Merah Grade A',
    code: 'AGRI-2026-001',
    location: 'Boyolali, Jawa Tengah',
    quantity: '100 kg',
    status: 'Disetujui',
    badge: 'QR Aktif',
    harvestDate: '2026-06-04',
    expectedPrice: 'Rp32.000/kg',
  },
  {
    name: 'Tomat Segar Grade B',
    code: 'AGRI-2026-002',
    location: 'Karo, Sumatera Utara',
    quantity: '240 kg',
    status: 'Menunggu Validasi',
    badge: 'Review Admin',
    harvestDate: '2026-06-03',
    expectedPrice: 'Rp11.000/kg',
  },
  {
    name: 'Sawi Hijau Grade A',
    code: 'AGRI-2026-003',
    location: 'Bandung, Jawa Barat',
    quantity: '80 kg',
    status: 'Dipesan',
    badge: 'B2B Order',
    harvestDate: '2026-06-02',
    expectedPrice: 'Rp9.000/kg',
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

const navItems = [
  { label: 'Ringkasan', href: '#ringkasan' },
  { label: 'Data Panen', href: '#data-panen' },
  { label: 'Tambah Data Panen', href: '#tambah-data-panen' },
  { label: 'Pesanan', href: '#pesanan' },
  { label: 'QR Produk', href: '#data-panen' },
  { label: 'Sertifikat Saya', href: '#sertifikat-saya' },
  { label: 'Profil', href: '#profil' },
];

const certificateSteps = [
  {
    title: 'Pembayaran Mitra',
    status: 'Sudah dibayar',
    icon: CreditCard,
  },
  {
    title: 'Verifikasi Admin',
    status: 'Menunggu review',
    icon: ShieldCheck,
  },
  {
    title: 'Sertifikat Terbit',
    status: 'Siap ditampilkan',
    icon: FileCheck2,
  },
];

const emptyForm: HarvestForm = {
  commodity: '',
  quantity: '',
  unit: 'kg',
  harvestDate: '',
  expectedPrice: '',
  originLocation: '',
};

function createHarvestCode(nextIndex: number) {
  return `AGRI-2026-${String(nextIndex).padStart(3, '0')}`;
}

export default function FarmerDashboard() {
  const [harvestData, setHarvestData] = useState<HarvestItem[]>(initialHarvestData);
  const [form, setForm] = useState<HarvestForm>(emptyForm);
  const [formMessage, setFormMessage] = useState('');
  const [certificateMessage, setCertificateMessage] = useState('');

  const stats = useMemo(
    () => [
      {
        label: 'Total Data Panen',
        value: String(harvestData.length),
        caption: 'data panen tercatat',
        icon: ClipboardList,
      },
      {
        label: 'Menunggu Validasi',
        value: String(harvestData.filter((item) => item.status === 'Menunggu Validasi').length),
        caption: 'perlu dicek admin',
        icon: Clock3,
      },
      {
        label: 'QR Produk Aktif',
        value: String(harvestData.filter((item) => item.badge === 'QR Aktif').length),
        caption: 'produk siap dipindai',
        icon: QrCode,
      },
      {
        label: 'Sertifikat Mitra',
        value: 'Proses',
        caption: 'pengajuan mitra resmi',
        icon: Award,
      },
    ],
    [harvestData],
  );

  function updateForm(field: keyof HarvestForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setFormMessage('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.commodity.trim() || !form.quantity.trim() || !form.harvestDate || !form.originLocation.trim()) {
      setFormMessage('Lengkapi komoditas, jumlah panen, tanggal panen, dan lokasi asal terlebih dahulu.');
      return;
    }

    const newHarvest: HarvestItem = {
      name: form.commodity.trim(),
      code: createHarvestCode(harvestData.length + 1),
      location: form.originLocation.trim(),
      quantity: `${form.quantity.trim()} ${form.unit}`,
      status: 'Menunggu Validasi',
      badge: 'Review Admin',
      harvestDate: form.harvestDate,
      expectedPrice: form.expectedPrice || '-',
    };

    setHarvestData((current) => [newHarvest, ...current]);
    setForm(emptyForm);
    setFormMessage('Data Panen berhasil disimpan dan masuk ke status Menunggu Validasi.');
  }

  function handleCertificateRequest() {
    setCertificateMessage('Pengajuan Sertifikat Mitra berhasil dikirim. Admin akan mengecek pembayaran, profil, dan riwayat Data Panen kamu.');
  }

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-slate-900 antialiased">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-[#E8DDC7] bg-white/75 p-6 shadow-sm backdrop-blur lg:flex lg:flex-col">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25B866] text-white shadow-sm">
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
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm ${
                  index === 0 ? 'bg-[#EAF8F0] text-[#1FA653]' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-[#25B866]' : 'bg-slate-300'}`} />
                {item.label}
              </a>
            ))}
          </nav>

          <div id="profil" className="mt-auto rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5">
            <div className="flex items-center gap-2 text-[#25B866]">
              <CheckCircle2 className="h-4 w-4" />
              <p className="text-sm font-bold">Profil Terverifikasi</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Data petani sudah lengkap. Data panen yang kamu input bisa lebih cepat masuk proses validasi admin.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <header id="ringkasan" className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold text-[#25B866]">Panel Petani</p>
                <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-900 lg:text-4xl">
                  Kelola hasil panen dan keterlacakan produkmu.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  Input data panen, pantau status validasi, dapatkan QR Produk, dan lihat pesanan dari pembeli B2B.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                  <CalendarDays className="h-4 w-4 text-[#25B866]" />
                  Musim Panen Juni
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>
                <a href="#tambah-data-panen" className="inline-flex items-center gap-2 rounded-2xl bg-[#25B866] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#1FA653] hover:shadow-md">
                  <Plus className="h-4 w-4" />
                  Tambah Data Panen
                </a>
                <button className="inline-flex items-center gap-3 rounded-2xl border border-[#E8DDC7] bg-white px-3 py-2 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25B866] text-white">
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
                <article key={item.label} className="rounded-2xl border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[#BFE8CC] hover:bg-white hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{item.value}</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8F0] text-[#25B866]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-medium text-slate-500">{item.caption}</p>
                </article>
              );
            })}
          </section>

          <section id="sertifikat-saya" className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] border border-[#BFE8CC] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-bold text-[#25B866]">Sertifikat Saya</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Ajukan Sertifikat Mitra AGRI-EYE</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                    Petani yang sudah menyelesaikan pembayaran dapat mengajukan sertifikat resmi sebagai Mitra AGRI-EYE Terverifikasi. Sertifikat ini dapat dilihat oleh pembeli untuk meningkatkan kepercayaan pada profil petani.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EAF8F0] px-4 py-2 text-xs font-bold text-[#1FA653]">
                  <BadgeCheck className="h-4 w-4" />
                  Pembayaran Tercatat
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {certificateSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-center justify-between gap-4 rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${index === 0 ? 'bg-[#25B866] text-white' : 'bg-white text-[#25B866]'}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{step.title}</p>
                          <p className="mt-0.5 text-xs font-medium text-slate-500">{step.status}</p>
                        </div>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${index === 0 ? 'bg-[#EAF8F0] text-[#1FA653]' : 'bg-white text-slate-500'}`}>
                        Tahap {index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {certificateMessage ? (
                <p className="mt-5 rounded-2xl bg-[#EAF8F0] px-4 py-3 text-sm font-medium text-[#1FA653]">
                  {certificateMessage}
                </p>
              ) : null}

              <button
                type="button"
                onClick={handleCertificateRequest}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25B866] px-5 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#1FA653] hover:shadow-md sm:w-auto"
              >
                Ajukan Sertifikat Mitra
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-[#E8DDC7] bg-[#FBFAF6] p-6 shadow-sm lg:p-8">
              <div className="absolute right-6 top-6 rounded-full bg-[#EAF8F0] px-4 py-2 text-xs font-bold text-[#1FA653]">
                Preview Publik
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25B866] text-white shadow-sm">
                <Award className="h-7 w-7" />
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-[#E8DDC7] bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#25B866]">Sertifikat Mitra</p>
                <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-900">AGRI-EYE Terverifikasi</h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Diberikan kepada petani yang telah melengkapi profil, menyelesaikan pembayaran mitra, dan lolos proses verifikasi AGRI-EYE.
                </p>

                <div className="mt-6 grid gap-3 rounded-2xl bg-[#F7F4ED] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-slate-500">Nama Mitra</span>
                    <span className="text-sm font-bold text-slate-900">Pak Suyanto</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-slate-500">Kategori</span>
                    <span className="text-sm font-bold text-slate-900">Petani Horti</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-slate-500">Nomor Sertifikat</span>
                    <span className="text-sm font-bold text-slate-900">CERT-AGRI-2026-008</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-slate-500">Status</span>
                    <span className="rounded-full bg-[#EAF8F0] px-3 py-1 text-xs font-bold text-[#1FA653]">Menunggu Verifikasi</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:shadow-sm">
                    <Eye className="h-4 w-4 text-[#25B866]" />
                    Lihat Sertifikat
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:shadow-sm">
                    <Download className="h-4 w-4 text-[#25B866]" />
                    Unduh PDF
                  </button>
                </div>
              </div>
            </article>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <article id="tambah-data-panen" className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#25B866]">Tambah Data Panen</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Data hasil panen</h2>
                </div>
                <Sprout className="h-6 w-6 text-[#25B866]" />
              </div>

              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Komoditas</span>
                  <input
                    value={form.commodity}
                    onChange={(event) => updateForm('commodity', event.target.value)}
                    className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#25B866] focus:bg-white"
                    placeholder="Contoh: Cabai Merah"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-600">Jumlah Panen</span>
                    <input
                      value={form.quantity}
                      onChange={(event) => updateForm('quantity', event.target.value)}
                      className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#25B866] focus:bg-white"
                      placeholder="100"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-600">Satuan</span>
                    <select
                      value={form.unit}
                      onChange={(event) => updateForm('unit', event.target.value)}
                      className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#25B866] focus:bg-white"
                    >
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
                    <input
                      type="date"
                      value={form.harvestDate}
                      onChange={(event) => updateForm('harvestDate', event.target.value)}
                      className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#25B866] focus:bg-white"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-slate-600">Harga Harapan</span>
                    <input
                      value={form.expectedPrice}
                      onChange={(event) => updateForm('expectedPrice', event.target.value)}
                      className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#25B866] focus:bg-white"
                      placeholder="Rp32.000/kg"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Lokasi Asal</span>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      value={form.originLocation}
                      onChange={(event) => updateForm('originLocation', event.target.value)}
                      className="w-full rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-[#25B866] focus:bg-white"
                      placeholder="Kecamatan, Kabupaten, Provinsi"
                    />
                  </div>
                </label>

                <button type="button" className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-[#D6C7A9] bg-[#FBFAF6] px-4 py-6 text-sm font-bold text-slate-500 transition-all duration-200 ease-in-out hover:border-[#BFE8CC] hover:bg-white hover:text-[#25B866]">
                  <ImagePlus className="h-5 w-5" />
                  Upload foto hasil panen
                </button>

                {formMessage ? (
                  <p className={`rounded-2xl px-4 py-3 text-sm font-medium ${formMessage.includes('berhasil') ? 'bg-[#EAF8F0] text-[#1FA653]' : 'bg-amber-50 text-amber-700'}`}>
                    {formMessage}
                  </p>
                ) : null}

                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25B866] px-5 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-[#1FA653] hover:shadow-md">
                  Simpan Data Panen
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </article>

            <div className="grid gap-6">
              <article id="data-panen" className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#25B866]">Data Panen</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Status terbaru</h2>
                  </div>
                  <a href="#" className="text-sm font-bold text-[#25B866]">Lihat semua</a>
                </div>

                <div className="mt-6 grid gap-3">
                  {harvestData.map((item) => (
                    <div key={item.code} className="rounded-2xl border border-[#E8DDC7] bg-white/80 p-4 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-sm font-bold text-slate-900">{item.name}</p>
                          <p className="mt-1 text-xs font-medium text-slate-500">Kode Panen: {item.code} · {item.location}</p>
                          <p className="mt-1 text-xs font-medium text-slate-400">Tanggal panen: {item.harvestDate || '-'} · Harga harapan: {item.expectedPrice || '-'}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#FBFAF6] px-3 py-1 text-xs font-bold text-slate-600">{item.quantity}</span>
                          <span className="rounded-full bg-[#EAF8F0] px-3 py-1 text-xs font-bold text-[#1FA653]">{item.badge}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article id="pesanan" className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#25B866]">Pesanan B2B</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Pesanan masuk</h2>
                  </div>
                  <Truck className="h-6 w-6 text-[#25B866]" />
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
