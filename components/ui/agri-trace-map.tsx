'use client';

import { Activity, CheckCircle2, MapPin, QrCode, TrendingUp } from 'lucide-react';

export default function AgriTraceMap() {
  return (
    <div className="w-full overflow-hidden rounded-[1.5rem] bg-[#F1EBDD]/70 p-3 shadow-sm md:p-4">
      <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] border border-[#BFE8CC] bg-[#0F8F5D] font-sans shadow-2xl lg:h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,253,245,0.85),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(217,249,157,0.36),transparent_24%),linear-gradient(135deg,#12B981_0%,#0E8F5E_42%,#075441_100%)]" />

        <div className="absolute inset-0 opacity-75">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M 170 260 Q 310 170 470 230" fill="transparent" stroke="#ecfdf5" strokeWidth="1.7" strokeDasharray="4 4" className="animate-pulse" />
            <path d="M 260 340 Q 360 260 470 230" fill="transparent" stroke="#d9f99d" strokeWidth="1.3" strokeDasharray="4 4" />
            <path d="M 640 170 Q 560 140 470 230" fill="transparent" stroke="#ecfdf5" strokeWidth="1.3" strokeDasharray="4 4" />
            <path d="M 690 310 Q 590 285 470 230" fill="transparent" stroke="#ecfdf5" strokeWidth="1.7" strokeDasharray="4 4" className="animate-pulse" />
          </svg>
          <span className="absolute left-[58%] top-[45%] h-4 w-4 rounded-full bg-white shadow-[0_0_20px_#d9f99d]" />
          <span className="absolute left-[24%] top-[56%] h-2.5 w-2.5 animate-ping rounded-full bg-lime-200 shadow-[0_0_14px_#d9f99d]" />
          <span className="absolute left-[37%] top-[73%] h-2.5 w-2.5 rounded-full bg-lime-200 shadow-[0_0_14px_#d9f99d]" />
          <span className="absolute left-[76%] top-[34%] h-2.5 w-2.5 rounded-full bg-lime-200 shadow-[0_0_14px_#d9f99d]" />
          <span className="absolute left-[82%] top-[62%] h-2.5 w-2.5 animate-ping rounded-full bg-lime-200 shadow-[0_0_14px_#d9f99d]" />
        </div>

        <div className="relative z-10 flex items-start justify-between bg-white/18 p-5 backdrop-blur-sm lg:p-6">
          <div>
            <h2 className="text-xl font-bold tracking-wide text-white lg:text-2xl">Peta Keterlacakan</h2>
            <p className="mt-1 text-sm text-emerald-50/85">Monitoring Data Panen aktif</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/22 px-4 py-1.5 backdrop-blur-md">
            <Activity className="h-4 w-4 animate-pulse text-lime-100" />
            <span className="text-sm font-semibold tracking-wide text-white">Live</span>
          </div>
        </div>

        <div className="absolute left-5 top-24 w-64 rounded-3xl border border-white/40 bg-white/30 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/38 lg:left-6 lg:w-72">
          <div className="mb-3 flex items-center gap-2">
            <div className="rounded-lg bg-white/35 p-1.5"><MapPin className="h-4 w-4 text-[#0F8F5D]" /></div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F8F5D]">Area Prioritas</span>
            <CheckCircle2 className="ml-auto h-4 w-4 text-[#25B866]" />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-slate-900 lg:text-3xl">Jawa Tengah</h3>
          <p className="text-sm font-medium text-slate-700">126 Data Panen tervalidasi</p>
        </div>

        <div className="absolute bottom-5 left-5 flex w-[300px] items-center justify-between gap-4 rounded-2xl border border-white/40 bg-white/30 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/38 lg:bottom-6 lg:left-6 lg:w-[340px]">
          <div className="flex-1">
            <p className="mb-1 text-xs font-medium text-slate-700">Data Panen terbaru</p>
            <div className="mb-1 flex items-center gap-2"><span className="text-xl">🌶️</span><h4 className="text-base font-bold leading-tight text-slate-900">Cabai Merah Grade A</h4></div>
            <p className="text-xs font-medium text-slate-700">Boyolali · 100 kg · QR aktif</p>
          </div>
          <div className="h-14 w-14 shrink-0 rounded-xl bg-white p-1 shadow-[0_0_15px_rgba(217,249,157,0.8)]"><QrCode className="h-full w-full text-slate-800" strokeWidth={1.5} /></div>
        </div>

        <div className="absolute bottom-5 right-5 w-72 rounded-3xl border border-white/40 bg-white/24 p-5 shadow-[0_8px_32px_rgba(16,185,129,0.22)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/30 lg:bottom-6 lg:right-6 lg:w-80 lg:p-6">
          <h4 className="mb-3 text-sm font-medium text-white/90">Skor kesiapan jual</h4>
          <div className="mb-4 flex items-end justify-between"><span className="text-4xl font-bold leading-none text-white lg:text-5xl">87</span><div className="flex items-center gap-1 rounded-lg bg-white/22 px-2 py-1 text-base font-semibold text-lime-100 lg:text-lg"><TrendingUp className="h-4 w-4" /><span>+12%</span></div></div>
          <div className="mt-2 flex h-2 w-full gap-1">{Array.from({ length: 20 }).map((_, i) => (<div key={i} className={`flex-1 rounded-full ${i < 17 ? 'bg-lime-200 shadow-[0_0_8px_#d9f99d]' : 'bg-white/25'}`} />))}</div>
        </div>
      </div>
    </div>
  );
}
