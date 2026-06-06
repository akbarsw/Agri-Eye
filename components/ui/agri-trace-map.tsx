import { CheckCircle2, Map, Route, UserRound } from 'lucide-react';

const mapPoints = [
  { name: 'Boyolali', left: '50%', top: '46%', active: true },
  { name: 'Kudus', left: '67%', top: '37%' },
  { name: 'Semarang', left: '58%', top: '33%', active: true },
  { name: 'Magelang', left: '41%', top: '56%' },
  { name: 'Solo', left: '55%', top: '62%', active: true },
  { name: 'Pati', left: '78%', top: '40%' },
  { name: 'Purworejo', left: '34%', top: '70%' },
];

export default function AgriTraceMap() {
  return (
    <div className="relative lg:pr-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-2xl ring-1 ring-[#DCD0B8]/80 lg:p-4">
        <div className="overflow-hidden rounded-[1.65rem] border border-white/60 bg-[#FBFAF6] shadow-inner">
          <div className="flex items-center justify-between border-b border-white/60 bg-white/55 px-5 py-4 backdrop-blur-xl">
            <div>
              <p className="text-sm font-bold text-slate-900">Peta Keterlacakan</p>
              <p className="text-xs font-medium text-slate-500">Monitoring Data Panen aktif</p>
            </div>
            <span className="rounded-full bg-[#25B866] px-4 py-1.5 text-xs font-bold text-white shadow-[0_0_24px_rgba(37,184,102,0.45)]">Live</span>
          </div>

          <div className="relative h-[360px] overflow-hidden bg-[#0F8F5D] lg:h-[430px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.5),transparent_22%),radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.22),transparent_24%),linear-gradient(135deg,#0E7651_0%,#17A46A_48%,#0B6448_100%)]" />
            <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 430" fill="none" aria-hidden="true">
              <path
                d="M54 96C124 37 232 52 296 88C358 122 396 81 468 84C552 88 588 148 670 118C730 96 768 128 786 171C812 233 760 292 690 304C618 317 596 388 510 386C438 384 404 328 340 350C260 378 202 358 168 306C132 252 62 264 42 208C26 164 20 124 54 96Z"
                fill="rgba(255,255,255,0.22)"
                stroke="rgba(255,255,255,0.62)"
                strokeWidth="2"
              />
              <path d="M120 125C190 148 234 110 286 148C344 191 410 134 478 158C528 176 575 205 646 178C700 158 744 190 756 232" stroke="rgba(255,255,255,0.34)" strokeWidth="1.5" />
              <path d="M188 304C248 242 320 236 402 258C502 286 596 258 700 292" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
              <path d="M238 78L278 148L260 260L340 350" stroke="rgba(255,255,255,0.24)" strokeWidth="1.4" />
              <path d="M468 84L452 170L510 386" stroke="rgba(255,255,255,0.24)" strokeWidth="1.4" />
              <path d="M400 190C332 148 276 142 200 182" stroke="rgba(255,255,255,0.72)" strokeWidth="2" strokeLinecap="round" />
              <path d="M400 190C470 160 538 142 628 162" stroke="rgba(255,255,255,0.62)" strokeWidth="2" strokeLinecap="round" />
              <path d="M400 190C438 236 514 278 626 292" stroke="rgba(255,255,255,0.58)" strokeWidth="2" strokeLinecap="round" />
              <path d="M400 190C352 238 292 285 222 310" stroke="rgba(255,255,255,0.58)" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {mapPoints.map((point) => (
              <div key={point.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: point.left, top: point.top }}>
                <span className={`absolute inset-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${point.active ? 'animate-ping bg-white/40' : 'bg-white/20'}`} />
                <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-[#D9F99D] shadow-[0_0_22px_rgba(217,249,157,0.9)]" />
                <span className="absolute left-4 top-2 rounded-full bg-slate-900/25 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">{point.name}</span>
              </div>
            ))}

            <div className="absolute left-5 top-5 w-[235px] rounded-[1.4rem] border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[#0F8F5D]">
                  <Map className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wide">Area Prioritas</span>
                </div>
                <CheckCircle2 className="h-5 w-5 text-[#25B866]" />
              </div>
              <p className="mt-3 text-xl font-bold tracking-tight text-slate-900">Jawa Tengah</p>
              <p className="mt-1 text-sm font-medium text-slate-600">126 Data Panen tervalidasi</p>
            </div>

            <div className="absolute bottom-5 left-5 w-[270px] rounded-[1.35rem] border border-white/60 bg-white/68 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <p className="text-xs font-medium text-slate-600">Data Panen terbaru</p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-bold tracking-tight text-slate-900">🌶️ Cabai Merah Grade A</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">Boyolali · 100 kg · QR aktif</p>
                </div>
                <div className="grid h-11 w-11 shrink-0 grid-cols-3 gap-0.5 rounded-xl bg-white p-2 shadow-inner">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span key={index} className={`rounded-[2px] ${index % 3 === 0 ? 'bg-[#25B866]' : 'bg-slate-300'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-7 w-[270px] rounded-[1.35rem] border border-white/60 bg-white/48 p-4 text-white shadow-[0_20px_55px_rgba(15,23,42,0.22)] backdrop-blur-2xl">
              <p className="text-sm font-medium text-white/85">Skor kesiapan jual</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-4xl font-bold tracking-tight">87</p>
                <p className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold text-[#D9F99D]">↗ +12%</p>
              </div>
              <div className="mt-4 h-2.5 rounded-full bg-white/25">
                <div className="h-2.5 w-[87%] rounded-full bg-[#25B866] shadow-[0_0_16px_rgba(37,184,102,0.7)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-8 hidden w-[150px] translate-x-4 space-y-4 lg:block">
        <div className="rounded-[1.3rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.13)] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <UserRound className="h-5 w-5 text-[#25B866]" />
            <p className="text-sm font-bold text-slate-900">Detail Petani</p>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">Naik 20 kg dari minggu lalu</p>
          <div className="mt-4 flex h-20 items-end gap-2">
            <span className="h-8 w-4 rounded-full bg-[#BFE8CC]" />
            <span className="h-14 w-4 rounded-full bg-[#25B866]" />
            <span className="h-10 w-4 rounded-full bg-[#D9F99D]" />
          </div>
        </div>

        <div className="rounded-[1.3rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.13)] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Route className="h-5 w-5 text-[#25B866]" />
            <p className="text-sm font-bold text-slate-900">Alur Rantai</p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-full rounded-full bg-[#EAF8F0]"><div className="h-2 w-[74%] rounded-full bg-[#25B866]" /></div>
            <div className="h-2 w-full rounded-full bg-[#EAF8F0]"><div className="h-2 w-[52%] rounded-full bg-[#D9F99D]" /></div>
            <div className="h-2 w-full rounded-full bg-[#EAF8F0]"><div className="h-2 w-[88%] rounded-full bg-[#25B866]" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
