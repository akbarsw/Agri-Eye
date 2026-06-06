'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheck, Check, ChevronDown, Sprout, Store } from 'lucide-react';

const roles = [
  {
    label: 'Petani',
    description: 'Kelola data panen dan sertifikat',
    href: '/farmer',
    icon: Sprout,
  },
  {
    label: 'Pembeli B2B',
    description: 'Cari produk pertanian terverifikasi',
    href: '/buyer',
    icon: Store,
  },
];

export default function AgriLoginSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Petani');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="group flex h-11 min-w-[118px] items-center justify-between gap-3 rounded-2xl border border-[#BFE8CC] bg-[#25B866] px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#1FA653] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#25B866]/30 focus:ring-offset-2 focus:ring-offset-[#F7F4ED]"
        aria-expanded={open}
      >
        <span className="flex min-w-0 items-center gap-2">
          <BadgeCheck className="h-4 w-4 shrink-0" />
          <span className="truncate">Masuk</span>
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 opacity-90 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute right-0 z-50 mt-2 w-72 overflow-hidden rounded-[1.25rem] border border-[#E8DDC7] bg-white/95 p-2 text-slate-900 shadow-xl shadow-slate-900/10 backdrop-blur-xl"
          >
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-400">
              Pilih akses akun
            </p>

            <div className="grid gap-1">
              {roles.map((role) => {
                const Icon = role.icon;
                const active = selected === role.label;

                return (
                  <a
                    key={role.label}
                    href={role.href}
                    onClick={() => {
                      setSelected(role.label);
                      setOpen(false);
                    }}
                    className="group/item relative flex items-center gap-3 rounded-2xl px-3 py-3 outline-none transition-all duration-200 hover:bg-[#EAF8F0] focus:bg-[#EAF8F0]"
                  >
                    <motion.span
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.12 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        active ? 'bg-[#25B866] text-white' : 'bg-[#EAF8F0] text-[#25B866]'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-slate-900">{role.label}</span>
                      <span className="mt-0.5 block truncate text-xs font-medium text-slate-500">{role.description}</span>
                    </span>

                    {active ? <Check className="h-4 w-4 shrink-0 text-[#25B866]" /> : null}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
