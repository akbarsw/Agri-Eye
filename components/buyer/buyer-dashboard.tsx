'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Leaf,
  MapPin,
  PackageCheck,
  QrCode,
  Search,
  ShoppingBag,
  Store,
  Truck,
  UserRound,
} from 'lucide-react';

type Product = {
  kodePanen: string;
  komoditas: string;
  lokasi: string;
  tanggalPanen: string;
  stok: string;
  harga: string;
  grade: string;
  status: string;
  petani: string;
};

type Order = {
  id: string;
  product: string;
  kodePanen: string;
  quantity: string;
  neededDate: string;
  deliveryAddress: string;
  note: string;
  status: string;
};

type OrderForm = {
  quantity: string;
  neededDate: string;
  deliveryAddress: string;
  note: string;
};

const products: Product[] = [
  {
    kodePanen: 'AGRI-2026-001',
    komoditas: 'Cabai Merah Grade A',
    lokasi: 'Boyolali, Jawa Tengah',
    tanggalPanen: '04 Jun 2026',
    stok: '100 kg',
    harga: 'Rp32.000/kg',
    grade: 'A',
    status: 'QR Aktif',
    petani: 'Pak Suyanto',
  },
  {
    kodePanen: 'AGRI-2026-014',
    komoditas: 'Kopi Arabika Grade A',
    lokasi: 'Kintamani, Bali',
    tanggalPanen: '04 Jun 2026',
    stok: '420 kg',
    harga: 'Rp42.000/kg',
    grade: 'A',
    status: 'Terverifikasi',
    petani: 'Kelompok Tani Kintamani',
  },
  {
    kodePanen: 'AGRI-2026-003',
    komoditas: 'Sawi Hijau Grade A',
    lokasi: 'Bandung, Jawa Barat',
    tanggalPanen: '03 Jun 2026',
    stok: '80 kg',
    harga: 'Rp9.000/kg',
    grade: 'A',
    status: 'Siap Dipesan',
    petani: 'Pak Dedi',
  },
];

const initialOrders: Order[] = [
  {
    id: 'ORD-001',
    product: 'Cabai Merah Grade A',
    kodePanen: 'AGRI-2026-001',
    quantity: '30 kg',
    neededDate: '08 Jun 2026',
    deliveryAddress: 'Restoran Nusantara, Yogyakarta',
    note: 'Butuh kualitas segar untuk operasional dapur.',
    status: 'Menunggu Konfirmasi',
  },
];

const emptyOrderForm: OrderForm = {
  quantity: '',
  neededDate: '',
  deliveryAddress: '',
  note: '',
};

const navItems = ['Ringkasan', 'Cari Produk', 'Pesanan Saya', 'Supplier', 'Keterlacakan', 'Profil Bisnis'];

export default function BuyerDashboard() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [form, setForm] = useState<OrderForm>(emptyOrderForm);
  const [message, setMessage] = useState('');

  const stats = useMemo(
    () => [
      { label: 'Produk Tersedia', value: String(products.length), caption: 'produk siap dipesan', icon: Store },
      { label: 'Pesanan Aktif', value: String(orders.length), caption: 'permintaan berjalan', icon: ShoppingBag },
      { label: 'QR Produk Aktif', value: '3', caption: 'produk bisa dicek asalnya', icon: QrCode },
      { label: 'Supplier Tersimpan', value: '5', caption: 'petani potensial', icon: UserRound },
    ],
    [orders.length],
  );

  function updateForm(field: keyof OrderForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setMessage('');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.quantity.trim() || !form.neededDate || !form.deliveryAddress.trim()) {
      setMessage('Lengkapi jumlah pesanan, tanggal kebutuhan, dan alamat pengiriman terlebih dahulu.');
      return;
    }

    const newOrder: Order = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      product: selectedProduct.komoditas,
      kodePanen: selectedProduct.kodePanen,
      quantity: form.quantity.trim(),
      neededDate: form.neededDate,
      deliveryAddress: form.deliveryAddress.trim(),
      note: form.note || '-',
      status: 'Menunggu Konfirmasi',
    };

    setOrders((current) => [newOrder, ...current]);
    setForm(emptyOrderForm);
    setMessage(`Pesanan ${newOrder.id} berhasil diajukan untuk ${selectedProduct.komoditas}.`);
  }

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
              <span className="block text-xs font-medium text-slate-500">Dashboard Pembeli B2B</span>
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
              <p className="text-sm font-bold">Pembeli Terverifikasi</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Akun bisnis dapat melihat detail produk, mengecek QR Produk, dan mengajukan pesanan ke pasokan terverifikasi.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold text-emerald-600">Panel Pembeli B2B</p>
                <h1 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-900 lg:text-4xl">
                  Cari pasokan, cek asal produk, dan ajukan pesanan.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                  Pembeli B2B dapat memilih produk terverifikasi, melihat QR Produk, lalu mengajukan kebutuhan pasokan ke AGRI-EYE.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                  <CalendarDays className="h-4 w-4 text-emerald-600" />
                  30 Hari Terakhir
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>
                <a href="/marketplace" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
                  Lihat Marketplace
                  <ArrowRight className="h-4 w-4" />
                </a>
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

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-600">Cari Produk</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Pasokan terverifikasi</h2>
                </div>
                <div className="relative lg:w-72">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input className="w-full rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white" placeholder="Cari produk" />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {products.map((product) => (
                  <button
                    key={product.kodePanen}
                    type="button"
                    onClick={() => {
                      setSelectedProduct(product);
                      setMessage('');
                    }}
                    className={`rounded-2xl border p-4 text-left transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm ${
                      selectedProduct.kodePanen === product.kodePanen
                        ? 'border-emerald-300 bg-emerald-50/60'
                        : 'border-[#E8DDC7] bg-white/80'
                    }`}
                  >
                    <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Grade {product.grade}</span>
                          <span className="rounded-full bg-[#FBFAF6] px-3 py-1 text-xs font-bold text-slate-600">{product.status}</span>
                        </div>
                        <p className="mt-3 text-sm font-bold text-slate-900">{product.komoditas}</p>
                        <p className="mt-1 text-xs font-medium text-slate-500">Kode Panen: {product.kodePanen} · {product.lokasi}</p>
                      </div>
                      <div className="text-left lg:text-right">
                        <p className="text-sm font-bold text-slate-900">{product.stok}</p>
                        <p className="mt-1 text-sm font-bold text-emerald-700">{product.harga}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
              <div>
                <p className="text-sm font-bold text-emerald-600">Ajukan Pesanan</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{selectedProduct.komoditas}</h2>
                <p className="mt-2 text-sm font-medium text-slate-500">Kode Panen: {selectedProduct.kodePanen}</p>
              </div>

              <div className="mt-6 grid gap-4 rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] p-5 sm:grid-cols-2">
                <Info label="Petani" value={selectedProduct.petani} icon={<UserRound className="h-4 w-4" />} />
                <Info label="Lokasi" value={selectedProduct.lokasi} icon={<MapPin className="h-4 w-4" />} />
                <Info label="Stok" value={selectedProduct.stok} icon={<PackageCheck className="h-4 w-4" />} />
                <Info label="Tanggal Panen" value={selectedProduct.tanggalPanen} icon={<CalendarDays className="h-4 w-4" />} />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={`/trace/${selectedProduct.kodePanen}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                  <QrCode className="h-4 w-4 text-emerald-600" />
                  Lihat QR Produk
                </a>
                <a href="/marketplace" className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#E8DDC7] bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md">
                  <Store className="h-4 w-4 text-emerald-600" />
                  Lihat Marketplace
                </a>
              </div>

              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Jumlah Pesanan</span>
                  <input
                    value={form.quantity}
                    onChange={(event) => updateForm('quantity', event.target.value)}
                    className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white"
                    placeholder="Contoh: 30 kg"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Tanggal Kebutuhan</span>
                  <input
                    type="date"
                    value={form.neededDate}
                    onChange={(event) => updateForm('neededDate', event.target.value)}
                    className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Alamat Pengiriman</span>
                  <input
                    value={form.deliveryAddress}
                    onChange={(event) => updateForm('deliveryAddress', event.target.value)}
                    className="rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white"
                    placeholder="Nama bisnis, alamat, kota"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-600">Catatan Kebutuhan</span>
                  <textarea
                    value={form.note}
                    onChange={(event) => updateForm('note', event.target.value)}
                    className="min-h-24 rounded-2xl border border-[#E8DDC7] bg-[#FBFAF6] px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:bg-white"
                    placeholder="Contoh: butuh dikirim pagi, kualitas segar, kemasan rapi"
                  />
                </label>

                {message ? (
                  <p className={`rounded-2xl px-4 py-3 text-sm font-medium ${message.includes('berhasil') ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                    {message}
                  </p>
                ) : null}

                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md">
                  Ajukan Pesanan
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </article>
          </section>

          <section className="mt-6 rounded-[2rem] border border-[#E8DDC7] bg-white/85 p-6 shadow-sm backdrop-blur lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-emerald-600">Pesanan Saya</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Riwayat pengajuan pesanan</h2>
              </div>
              <Truck className="h-6 w-6 text-emerald-600" />
            </div>

            <div className="mt-6 grid gap-3">
              {orders.map((order) => (
                <div key={order.id} className="grid gap-4 rounded-2xl border border-[#E8DDC7] bg-white/80 p-4 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm lg:grid-cols-[0.45fr_1fr_0.7fr_0.55fr] lg:items-center">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{order.id}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{order.kodePanen}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{order.product}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{order.deliveryAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{order.quantity}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">Butuh: {order.neededDate}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-center text-xs font-bold text-emerald-700">{order.status}</span>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

function Info({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
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
