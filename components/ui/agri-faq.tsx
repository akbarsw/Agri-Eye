'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, CircleHelp, Minus, Plus, QrCode, ShoppingBag, Sprout } from 'lucide-react';

const items = [
  {
    id: '1',
    icon: Sprout,
    title: 'Apa itu AGRI-EYE?',
    content:
      'AGRI-EYE adalah platform agribisnis yang membantu petani mencatat Data Panen, membuat informasi asal produk lebih jelas, dan menghubungkan produk pertanian ke pembeli B2B.',
  },
  {
    id: '2',
    icon: QrCode,
    title: 'Apa fungsi QR Produk?',
    content:
      'QR Produk berisi informasi dasar seperti asal produk, tanggal panen, status validasi, grade mutu, dan kode panen agar pembeli bisa melihat data produk dengan lebih mudah.',
  },
  {
    id: '3',
    icon: ShoppingBag,
    title: 'Siapa saja pembeli B2B di AGRI-EYE?',
    content:
      'Pembeli B2B dapat berupa restoran, katering, hotel, distributor bahan segar, toko modern, UMKM olahan pangan, atau bisnis lain yang membutuhkan pasokan produk pertanian.',
  },
  {
    id: '4',
    icon: BadgeCheck,
    title: 'Apa itu Sertifikat Mitra AGRI-EYE?',
    content:
      'Sertifikat Mitra AGRI-EYE adalah tanda bahwa petani telah mengajukan dan melewati proses verifikasi sebagai mitra platform. Sertifikat ini membantu meningkatkan kepercayaan pembeli terhadap profil petani.',
  },
];

export default function AgriFaq() {
  const [openItem, setOpenItem] = useState<string | null>('1');

  return (
    <section className="px-6 py-7 lg:px-8 lg:py-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-bold text-[#25B866]">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-slate-900 lg:text-5xl">
            Pertanyaan yang sering ditanyakan.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Ringkasan singkat untuk memahami cara kerja AGRI-EYE bagi petani dan pembeli B2B.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-[#E8DDC7] bg-white/75 shadow-sm backdrop-blur">
          {items.map(({ id, icon: Icon, title, content }) => {
            const isOpen = openItem === id;

            return (
              <div key={id} className="border-b border-[#E8DDC7] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenItem((current) => (current === id ? null : id))}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-white/80"
                >
                  <span className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${isOpen ? 'bg-[#25B866] text-white' : 'bg-[#EAF8F0] text-[#25B866]'}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-bold text-slate-900 sm:text-base">{title}</span>
                  </span>

                  <span className="relative h-5 w-5 shrink-0 text-slate-500">
                    <Plus className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <Minus className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-[4.5rem] text-sm leading-7 text-slate-500">
                    {content}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
