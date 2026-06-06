'use client';

import { Activity, CheckCircle2, MapPin, QrCode, TrendingUp } from 'lucide-react';

export default function AgriTraceMap() {
  return (
    <div className="w-full overflow-hidden rounded-[1.4rem] bg-[#F1EBDD]/70 p-3 shadow-sm">
      <div className="relative h-[360px] overflow-hidden rounded-[1.35rem] border border-slate-800 bg-[#0F172A] font-sans shadow-2xl select-none lg:h-[430px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-950" />

        <div className="absolute inset-0 opacity-25">
          <svg className="h-full w-full" viewBox="0 0 1024 550" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M150 300 C250 220, 350 250, 450 200 C550 150, 650 180, 750 130 C850 80, 950 120, 1024 100" stroke="#94a3b8" strokeWidth="1.5" />
            <path d="M450 200 C480 280, 420 350, 500 420 C550 470, 650 480, 700 550" stroke="#94a3b8" strokeWidth="1" />
            <path d="M480 260 C520 240, 600 240, 640 260 C680 280, 720 320, 700 380 C680 430, 600 460, 540 440 C480 420, 460 340, 480 260 Z" fill="#1E293B" fillOpacity="0.85" stroke="#94a3b8" strokeWidth="2" />
            <path d="M540 370 Q 565 315 590 320" fill="transparent" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
            <path d="M625 295 Q 610 310 590 320" fill="transparent" stroke="#10B981" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M590 320 Q 545 320 500 340" fill="transparent" stroke="#10B981" strokeWidth="1.2" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="absolute left-[50%] top-[38%] z-10 rounded-md border border-slate-700 bg-slate-900/80 px-3 py-1 shadow-lg backdrop-blur-sm">
          <span className="text-sm font-bold tracking-wide text-white">Solo Raya</span>
        </div>
        <div className="absolute left-[56%] top-[56%] z-10 flex items-center gap-2">
          <div className="relative flex h-4 w-4"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-4 w-4 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" /></div>
          <div><p className="text-xs font-semibold leading-none text-white drop-shadow-md">Surakarta</p><p className="text-[10px] leading-none text-slate-400">(Solo)</p></div>
        </div>
        <div className="absolute left-[61%] top-[54%] z-10 flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" /><span className="text-xs font-medium text-slate-300 drop-shadow-md">Sukoharjo</span></div>
        <div className="absolute left-[52%] top-[66%] z-10 flex items-center gap-2"><div className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981]" /></div><span className="rounded border border-emerald-800/30 bg-emerald-950/40 px-1.5 py-0.5 text-xs font-bold text-slate-300 drop-shadow-md">Boyolali</span></div>
        <div className="absolute left-[61%] top-[63%] z-10 text-xs text-slate-400 drop-shadow-md">Karanganyar</div>
        <div className="absolute left-[60%] top-[49%] z-10 text-xs text-slate-400 drop-shadow-md">Sragen</div>
        <div className="absolute left-[57%] top-[66%] z-10 text-xs text-slate-400 drop-shadow-md">Klaten</div>
        <div className="absolute left-[55%] top-[78%] z-10 text-xs text-slate-400 drop-shadow-md">Wonogiri</div>

        <div className="relative z-10 flex items-start justify-between p-5">
          <div><h2 className="text-xl font-bold tracking-wide text-white lg:text-2xl">Peta Keterlacakan</h2><p className="mt-1 text-sm text-slate-400">Monitoring Data Panen aktif</p></div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/20 px-4 py-1.5 backdrop-blur-md"><Activity className="h-4 w-4 animate-pulse text-emerald-400" /><span className="text-sm font-semibold tracking-wide text-emerald-400">Live</span></div>
        </div>

        <div className="absolute left-5 top-24 z-20 w-60 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10 lg:w-64">
          <div className="mb-3 flex items-center gap-2"><div className="rounded-lg bg-emerald-500/20 p-1.5"><MapPin className="h-4 w-4 text-emerald-400" /></div><span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Area Prioritas</span><CheckCircle2 className="ml-auto h-4 w-4 text-emerald-400" /></div>
          <h3 className="mb-2 text-2xl font-bold text-white">Jawa Tengah</h3><p className="text-sm text-slate-400">126 Data Panen tervalidasi</p>
        </div>

        <div className="absolute bottom-5 left-5 z-20 flex w-[285px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10">
          <div className="flex-1"><p className="mb-1 text-xs text-slate-400">Data Panen terbaru</p><div className="mb-1 flex items-center gap-2"><span className="text-xl">🌶️</span><h4 className="text-sm font-bold leading-tight text-white lg:text-base">Cabai Merah Grade A</h4></div><p className="text-xs text-slate-400">Boyolali · 100 kg · QR aktif</p></div>
          <div className="h-12 w-12 shrink-0 rounded-xl bg-white p-1 shadow-[0_0_15px_rgba(52,211,153,0.3)]"><QrCode className="h-full w-full text-slate-800" strokeWidth={1.5} /></div>
        </div>

        <div className="absolute bottom-5 right-5 z-20 w-64 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 shadow-[0_8px_32px_rgba(16,185,129,0.15)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:bg-emerald-500/20">
          <h4 className="mb-3 text-sm font-medium text-emerald-100">Skor kesiapan jual</h4><div className="mb-4 flex items-end justify-between"><span className="text-4xl font-bold leading-none text-white">87</span><div className="flex items-center gap-1 rounded-lg bg-emerald-500/20 px-2 py-1 text-base font-semibold text-emerald-400"><TrendingUp className="h-4 w-4" /><span>+12%</span></div></div>
          <div className="mt-2 flex h-2 w-full gap-1">{Array.from({ length: 20 }).map((_, i) => (<div key={i} className={`flex-1 rounded-full ${i < 17 ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-700/50'}`} />))}</div>
        </div>
      </div>
    </div>
  );
}
