'use client';

import { Activity, QrCode, TrendingUp } from 'lucide-react';

const areas = [
  { name: 'Boyolali', x: '36%', y: '55%', active: true },
  { name: 'Solo', x: '52%', y: '43%', active: true },
  { name: 'Sukoharjo', x: '64%', y: '45%' },
  { name: 'Klaten', x: '52%', y: '63%' },
  { name: 'Karanganyar', x: '70%', y: '60%' },
  { name: 'Wonogiri', x: '58%', y: '78%' },
];

export default function AgriTraceMap() {
  return (
    <div className="w-full rounded-[1.4rem] bg-[#F1EBDD]/70 p-3 shadow-sm">
      <div className="relative h-[360px] overflow-hidden rounded-[1.35rem] border border-slate-700/80 bg-[#132238] font-sans shadow-2xl select-none lg:h-[430px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_52%,rgba(37,184,102,0.24),transparent_22%),linear-gradient(135deg,#1C2B3F_0%,#132238_52%,#0B1320_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:52px_52px] opacity-45" />

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 430" fill="none" aria-hidden="true">
          <path d="M135 120H666V292C622 314 570 309 526 286C474 258 414 257 362 286C306 317 238 312 190 276C156 250 136 210 135 120Z" fill="#22334A" stroke="#455B75" strokeWidth="2" />
          <path d="M215 170H595V265C560 281 518 276 484 258C442 236 392 237 350 258C304 281 252 276 215 245V170Z" fill="#2A4058" stroke="#60758E" strokeWidth="2" />
          <path d="M345 210H507V285C480 299 446 300 418 284C391 268 365 268 345 281V210Z" fill="#314B63" stroke="#7A91AA" strokeWidth="2" />
          <path d="M416 238 C380 254 352 280 318 322" stroke="#34D399" strokeWidth="2" strokeDasharray="6 6" className="animate-pulse" />
          <path d="M416 238 C462 240 498 256 552 266" stroke="#34D399" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M416 238 C420 286 438 322 455 365" stroke="#34D399" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        <div className="relative z-10 flex items-start justify-between p-5">
          <div>
            <h2 className="text-xl font-bold tracking-wide text-white lg:text-2xl">Peta Keterlacakan</h2>
            <p className="mt-1 text-sm text-slate-300">Monitoring Data Panen aktif</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/20 px-4 py-1.5 backdrop-blur-md">
            <Activity className="h-4 w-4 animate-pulse text-emerald-400" />
            <span className="text-sm font-semibold tracking-wide text-emerald-400">Live</span>
          </div>
        </div>

        <div className="absolute left-[52%] top-[45%] z-20 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-slate-950/45 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-md">Solo Raya</div>

        {areas.map((area) => (
          <div key={area.name} className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: area.x, top: area.y }}>
            <span className={`absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full ${area.active ? 'animate-ping bg-emerald-300/45' : 'bg-emerald-300/20'}`} />
            <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400 shadow-[0_0_14px_#34d399]" />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-950/35 px-2 py-0.5 text-xs font-semibold text-slate-100 backdrop-blur-md">{area.name}</span>
          </div>
        ))}

        <div className="absolute bottom-5 left-5 z-20 flex w-[280px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/42 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex-1">
            <p className="mb-1 text-xs text-slate-300">Data Panen terbaru</p>
            <div className="mb-1 flex items-center gap-2"><span className="text-xl">🌶️</span><h4 className="text-sm font-bold leading-tight text-white lg:text-base">Cabai Merah Grade A</h4></div>
            <p className="text-xs text-slate-300">Boyolali · 100 kg · QR aktif</p>
          </div>
          <div className="h-12 w-12 shrink-0 rounded-xl bg-white p-1 shadow-[0_0_15px_rgba(52,211,153,0.3)]"><QrCode className="h-full w-full text-slate-800" strokeWidth={1.5} /></div>
        </div>

        <div className="absolute bottom-5 right-5 z-20 w-60 rounded-3xl border border-emerald-500/20 bg-emerald-950/55 p-5 shadow-[0_8px_32px_rgba(16,185,129,0.15)] backdrop-blur-2xl">
          <h4 className="mb-3 text-sm font-medium text-emerald-100">Skor kesiapan jual</h4>
          <div className="mb-4 flex items-end justify-between"><span className="text-4xl font-bold leading-none text-white">87</span><div className="flex items-center gap-1 rounded-lg bg-emerald-500/20 px-2 py-1 text-base font-semibold text-emerald-400"><TrendingUp className="h-4 w-4" /><span>+12%</span></div></div>
          <div className="mt-2 flex h-2 w-full gap-1">{Array.from({ length: 16 }).map((_, i) => (<div key={i} className={`flex-1 rounded-full ${i < 14 ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-700/50'}`} />))}</div>
        </div>
      </div>
    </div>
  );
}
