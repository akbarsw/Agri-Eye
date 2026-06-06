'use client';

import { Activity, QrCode, TrendingUp } from 'lucide-react';

export default function AgriTraceMap() {
  return (
    <div className="w-full overflow-hidden rounded-[1.4rem] bg-[#F1EBDD]/70 p-3 shadow-sm">
      <div className="relative h-[360px] overflow-hidden rounded-[1.35rem] border border-slate-700/80 bg-[#0F172A] font-sans shadow-2xl select-none lg:h-[430px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_52%,rgba(16,185,129,0.22),transparent_22%),linear-gradient(135deg,#111827_0%,#1E293B_42%,#0B1120_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />

        <svg className="absolute inset-0 h-full w-full opacity-95" viewBox="0 0 1024 550" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <filter id="dotGlow"><feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#34d399" floodOpacity="1" /></filter>
          </defs>
          <path d="M22 82C86 58 132 98 204 85C286 69 326 106 398 82C480 55 546 88 610 78C692 64 742 98 816 78C896 58 954 78 1024 56V0H0V550H1024V470C934 486 888 440 804 462C720 484 682 430 602 448C520 466 458 422 374 446C286 472 222 430 132 456C76 472 38 458 0 444V92C8 88 14 85 22 82Z" fill="#223043" opacity="0.82" />
          <path d="M155 275C224 222 304 236 378 205C466 166 530 188 612 165C690 143 768 132 850 116C918 104 976 112 1024 92" stroke="#475569" strokeWidth="1.8" />
          <path d="M120 356C225 310 278 366 383 322C470 286 530 313 616 286C720 252 812 276 932 236" stroke="#475569" strokeWidth="1.5" />
          <path d="M410 180C435 246 390 326 470 405C530 464 620 470 690 550" stroke="#475569" strokeWidth="1.4" />
          <path d="M482 246C524 220 608 221 652 248C696 277 727 326 704 386C682 443 594 471 532 447C472 424 457 329 482 246Z" fill="#334155" fillOpacity="0.72" stroke="#64748B" strokeWidth="2.4" />
          <path d="M540 370Q565 315 590 320" stroke="#34D399" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
          <path d="M625 295Q610 310 590 320" stroke="#34D399" strokeWidth="1.6" strokeDasharray="5 5" />
          <path d="M590 320Q545 320 500 340" stroke="#34D399" strokeWidth="1.7" strokeDasharray="5 5" />
          <path d="M590 320Q552 360 532 405" stroke="#34D399" strokeWidth="1.5" strokeDasharray="5 5" />
          <circle cx="590" cy="320" r="8" fill="#ECFDF5" filter="url(#dotGlow)" />
          <circle cx="532" cy="370" r="7" fill="#34D399" filter="url(#dotGlow)" />
          <circle cx="625" cy="295" r="5" fill="#34D399" filter="url(#dotGlow)" />
          <circle cx="500" cy="340" r="5" fill="#34D399" filter="url(#dotGlow)" />
          <circle cx="532" cy="405" r="5" fill="#34D399" filter="url(#dotGlow)" />
        </svg>

        <div className="absolute left-[47%] top-[31%] z-10 rounded-lg bg-slate-900/55 px-3 py-1.5 shadow-lg backdrop-blur-md">
          <span className="text-base font-bold tracking-wide text-white">Solo Raya</span>
        </div>
        <div className="absolute left-[56%] top-[56%] z-10 flex items-center gap-2">
          <div className="relative flex h-4 w-4"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-4 w-4 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]" /></div>
          <div><p className="text-sm font-semibold leading-none text-white drop-shadow-md">Surakarta</p><p className="text-[11px] leading-none text-slate-300">(Solo)</p></div>
        </div>
        <div className="absolute left-[61%] top-[54%] z-10 text-sm font-medium text-slate-100 drop-shadow-md">Sukoharjo</div>
        <div className="absolute left-[51%] top-[65%] z-10 flex items-center gap-2"><span className="relative flex h-3.5 w-3.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#10B981]" /></span><span className="text-sm font-bold text-slate-100 drop-shadow-md">Boyolali</span></div>
        <div className="absolute left-[58%] top-[62%] z-10 text-sm text-slate-200 drop-shadow-md">Karanganyar</div>
        <div className="absolute left-[65%] top-[66%] z-10 text-sm text-slate-300 drop-shadow-md">Sragen</div>
        <div className="absolute left-[57%] top-[71%] z-10 text-sm text-slate-300 drop-shadow-md">Klaten</div>
        <div className="absolute left-[55%] top-[80%] z-10 text-sm text-slate-200 drop-shadow-md">Wonogiri</div>

        <div className="relative z-10 flex items-start justify-between p-5">
          <div><h2 className="text-xl font-bold tracking-wide text-white lg:text-2xl">Peta Keterlacakan</h2><p className="mt-1 text-sm text-slate-300">Monitoring Data Panen aktif</p></div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/20 px-4 py-1.5 backdrop-blur-md"><Activity className="h-4 w-4 animate-pulse text-emerald-400" /><span className="text-sm font-semibold tracking-wide text-emerald-400">Live</span></div>
        </div>

        <div className="absolute bottom-5 left-5 z-20 flex w-[285px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-950/50">
          <div className="flex-1"><p className="mb-1 text-xs text-slate-300">Data Panen terbaru</p><div className="mb-1 flex items-center gap-2"><span className="text-xl">🌶️</span><h4 className="text-sm font-bold leading-tight text-white lg:text-base">Cabai Merah Grade A</h4></div><p className="text-xs text-slate-300">Boyolali · 100 kg · QR aktif</p></div>
          <div className="h-12 w-12 shrink-0 rounded-xl bg-white p-1 shadow-[0_0_15px_rgba(52,211,153,0.3)]"><QrCode className="h-full w-full text-slate-800" strokeWidth={1.5} /></div>
        </div>

        <div className="absolute bottom-5 right-5 z-20 w-64 rounded-3xl border border-emerald-500/20 bg-emerald-950/55 p-5 shadow-[0_8px_32px_rgba(16,185,129,0.15)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 hover:bg-emerald-950/65">
          <h4 className="mb-3 text-sm font-medium text-emerald-100">Skor kesiapan jual</h4><div className="mb-4 flex items-end justify-between"><span className="text-4xl font-bold leading-none text-white">87</span><div className="flex items-center gap-1 rounded-lg bg-emerald-500/20 px-2 py-1 text-base font-semibold text-emerald-400"><TrendingUp className="h-4 w-4" /><span>+12%</span></div></div>
          <div className="mt-2 flex h-2 w-full gap-1">{Array.from({ length: 20 }).map((_, i) => (<div key={i} className={`flex-1 rounded-full ${i < 17 ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-700/50'}`} />))}</div>
        </div>
      </div>
    </div>
  );
}
