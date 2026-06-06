import { CheckCircle2, Map, Route, UserRound } from 'lucide-react';

const mapPoints = [
  { name: 'Semarang', left: '54%', top: '43%', active: true },
  { name: 'Boyolali', left: '47%', top: '55%', active: true },
  { name: 'Kudus', left: '64%', top: '39%' },
  { name: 'Magelang', left: '38%', top: '58%' },
  { name: 'Solo', left: '53%', top: '66%', active: true },
  { name: 'Pati', left: '75%', top: '42%' },
  { name: 'Purworejo', left: '31%', top: '72%' },
  { name: 'Tegal', left: '25%', top: '35%' },
  { name: 'Kebumen', left: '39%', top: '76%' },
];

const districts = [
  'M80 95 L152 72 L222 92 L210 158 L136 176 L76 144 Z',
  'M222 92 L302 78 L370 112 L352 176 L274 186 L210 158 Z',
  'M370 112 L458 92 L535 126 L510 196 L430 200 L352 176 Z',
  'M535 126 L626 104 L718 142 L690 206 L596 224 L510 196 Z',
  'M76 144 L136 176 L132 254 L58 286 L34 210 Z',
  'M136 176 L210 158 L274 186 L260 268 L174 292 L132 254 Z',
  'M274 186 L352 176 L430 200 L418 286 L330 306 L260 268 Z',
  'M430 200 L510 196 L596 224 L570 310 L486 330 L418 286 Z',
  'M596 224 L690 206 L770 256 L724 332 L628 342 L570 310 Z',
  'M58 286 L132 254 L174 292 L156 370 L72 390 L24 342 Z',
  'M174 292 L260 268 L330 306 L304 388 L218 402 L156 370 Z',
  'M330 306 L418 286 L486 330 L454 404 L366 418 L304 388 Z',
  'M486 330 L570 310 L628 342 L594 404 L512 414 L454 404 Z',
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.42),transparent_22%),radial-gradient(circle_at_74%_18%,rgba(255,255,255,0.18),transparent_25%),linear-gradient(135deg,#0C704F_0%,#18A86C_50%,#0A5B42_100%)]" />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:42px_42px]" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 430" fill="none" aria-hidden="true">
              <g filter="url(#softShadow)">
                {districts.map((path, index) => (
                  <path
                    key={path}
                    d={path}
                    fill={index % 3 === 0 ? 'rgba(216,245,190,0.48)' : index % 3 === 1 ? 'rgba(255,255,255,0.25)' : 'rgba(130,204,132,0.42)'}
                    stroke="rgba(255,255,255,0.72)"
                    strokeWidth="1.5"
                  />
                ))}
              </g>

              <path d="M58 286 C148 242 230 236 318 266 C422 302 536 286 724 332" stroke="rgba(255,255,255,0.6)" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M152 72 C252 138 344 164 430 200 C520 238 610 220 718 142" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M302 78 C308 174 320 250 304 388" stroke="rgba(255,255,255,0.42)" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M458 92 C448 184 430 274 366 418" stroke="rgba(255,255,255,0.38)" strokeWidth="1.4" strokeLinecap="round" />

              <path d="M430 200 C368 172 306 154 222 168" stroke="rgba(255,255,255,0.78)" strokeWidth="2" strokeLinecap="round" />
              <path d="M430 200 C502 162 584 142 690 206" stroke="rgba(255,255,255,0.68)" strokeWidth="2" strokeLinecap="round" />
              <path d="M430 200 C452 258 512 314 628 342" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
              <path d="M430 200 C370 246 300 298 218 402" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />

              <defs>
                <filter id="softShadow" x="-20" y="-20" width="850" height="480" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#064E3B" floodOpacity="0.25" />
                </filter>
              </defs>
            </svg>

            {mapPoints.map((point) => (
              <div key={point.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: point.left, top: point.top }}>
                <span className={`absolute inset-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full ${point.active ? 'animate-ping bg-white/40' : 'bg-white/20'}`} />
                <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-[#D9F99D] shadow-[0_0_22px_rgba(217,249,157,0.9)]" />
                <span className="absolute left-4 top-2 rounded-full bg-slate-900/25 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">{point.name}</span>
              </div>
            ))}

            <div className="absolute left-5 top-5 w-[235px] rounded-[1.4rem] border border-white/60 bg-white/72 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
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

            <div className="absolute bottom-5 left-5 w-[270px] rounded-[1.35rem] border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
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

            <div className="absolute bottom-10 right-7 w-[270px] rounded-[1.35rem] border border-white/60 bg-white/45 p-4 text-white shadow-[0_20px_55px_rgba(15,23,42,0.22)] backdrop-blur-2xl">
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
