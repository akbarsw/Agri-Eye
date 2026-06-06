import { CheckCircle2, Map, Route, UserRound } from 'lucide-react';

const districtColors = ['#0B7C56', '#129C68', '#5DAA52', '#0E6B4D', '#1AA36B', '#7CB95B'];
const districts = [
  { name: 'Brebes', d: 'M55 142L122 112L170 148L148 215L72 207Z', color: 0 },
  { name: 'Tegal', d: 'M170 148L230 122L276 161L247 229L148 215Z', color: 1 },
  { name: 'Pemalang', d: 'M276 161L342 130L410 165L378 235L247 229Z', color: 3 },
  { name: 'Kendal', d: 'M410 165L480 137L535 180L500 238L378 235Z', color: 0 },
  { name: 'Semarang', d: 'M500 238L535 180L607 185L640 248L590 300L525 290Z', color: 3, big: true },
  { name: 'Demak', d: 'M607 185L686 150L748 196L710 264L640 248Z', color: 1 },
  { name: 'Pati', d: 'M686 150L780 126L845 174L813 240L710 264L748 196Z', color: 2 },
  { name: 'Rembang', d: 'M845 174L930 145L1010 198L970 260L890 252L813 240Z', color: 2 },
  { name: 'Pekalongan', d: 'M148 215L247 229L260 305L185 340L105 300Z', color: 4 },
  { name: 'Batang', d: 'M247 229L378 235L360 332L260 305Z', color: 0 },
  { name: 'Wonosobo', d: 'M260 305L360 332L345 430L225 450L185 340Z', color: 2 },
  { name: 'Temanggung', d: 'M360 332L475 318L505 405L435 474L345 430Z', color: 5 },
  { name: 'Magelang', d: 'M435 474L505 405L610 412L600 515L510 548Z', color: 1 },
  { name: 'Boyolali', d: 'M600 515L610 412L705 388L772 468L748 574L650 592Z', color: 2, big: true },
  { name: 'Salatiga', d: 'M590 300L640 248L710 264L705 388L610 412L525 290Z', color: 4 },
  { name: 'Grobogan', d: 'M710 264L813 240L890 252L904 350L815 410L705 388Z', color: 0 },
  { name: 'Blora', d: 'M890 252L970 260L1040 325L985 420L904 350Z', color: 3 },
  { name: 'Sragen', d: 'M705 388L815 410L830 520L748 574L772 468Z', color: 1 },
  { name: 'Karanganyar', d: 'M830 520L904 500L960 575L900 658L820 640Z', color: 3 },
  { name: 'Wonogiri', d: 'M748 574L820 640L900 658L842 735L720 695L650 592Z', color: 0, big: true },
  { name: 'Kebumen', d: 'M110 510L225 450L300 542L245 640L125 615Z', color: 1 },
  { name: 'Purworejo', d: 'M245 640L300 542L420 590L385 700L275 720Z', color: 0 },
];

const nodes = [
  { name: 'Brebes', x: 105, y: 190 }, { name: 'Tegal', x: 205, y: 180 }, { name: 'Pemalang', x: 330, y: 178 },
  { name: 'Kendal', x: 455, y: 180 }, { name: 'Semarang', x: 585, y: 240, main: true }, { name: 'Pati', x: 755, y: 195 },
  { name: 'Rembang', x: 930, y: 220 }, { name: 'Grobogan', x: 820, y: 330 }, { name: 'Boyolali', x: 675, y: 520 },
  { name: 'Magelang', x: 555, y: 505 }, { name: 'Wonosobo', x: 292, y: 390 }, { name: 'Kebumen', x: 195, y: 580 },
  { name: 'Purworejo', x: 330, y: 640 }, { name: 'Wonogiri', x: 805, y: 625 }, { name: 'Salatiga', x: 635, y: 330 },
];

export default function AgriTraceMap() {
  return (
    <div className="relative lg:pr-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/35 p-3 shadow-[0_24px_80px_rgba(15,23,42,0.16)] backdrop-blur-2xl ring-1 ring-[#DCD0B8]/80 lg:p-4">
        <div className="overflow-hidden rounded-[1.65rem] border border-white/60 bg-[#FBFAF6] shadow-inner">
          <div className="flex items-center justify-between border-b border-white/60 bg-white/55 px-5 py-4 backdrop-blur-xl">
            <div><p className="text-sm font-bold text-slate-900">Peta Keterlacakan</p><p className="text-xs font-medium text-slate-500">Monitoring Data Panen aktif</p></div>
            <span className="rounded-full bg-[#25B866] px-4 py-1.5 text-xs font-bold text-white shadow-[0_0_24px_rgba(37,184,102,0.45)]">Live</span>
          </div>

          <div className="relative h-[360px] overflow-hidden bg-[#0F8F5D] lg:h-[430px]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F6E8_0%,#F8F6E8_9%,#07855F_10%,#0A7959_50%,#084D3D_100%)]" />
            <div className="absolute inset-y-0 right-0 w-[13%] bg-[#F8F6E8]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1080 760" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path d="M0 0H1080V760H0Z" fill="url(#bg)" />
              <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1080" y2="760"><stop stopColor="#0EA36B"/><stop offset="1" stopColor="#063F35"/></linearGradient>
                <filter id="glow"><feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#D9F99D" floodOpacity="0.95"/></filter>
              </defs>
              <path d="M0 110C70 105 105 175 160 170C235 164 250 110 310 152C380 198 445 135 520 150C610 168 675 115 750 130C822 145 870 110 930 135C1000 165 1038 198 1080 188V0H0Z" fill="#0D7256" opacity="0.96" />
              <path d="M0 640C130 610 230 650 330 622C460 585 545 608 660 612C798 618 930 688 1080 650V760H0Z" fill="#0A604A" opacity="0.96" />
              {districts.map((d, i) => (
                <path key={d.name} d={d.d} fill={districtColors[d.color]} stroke="rgba(255,255,255,0.72)" strokeWidth="2" />
              ))}
              {nodes.filter((n) => !n.main).map((n) => (
                <path key={`route-${n.name}`} d={`M585 240 Q ${(585 + n.x) / 2} ${Math.min(150, n.y - 90)} ${n.x} ${n.y}`} stroke="rgba(236,253,245,0.72)" strokeWidth="2.6" strokeLinecap="round" />
              ))}
              {nodes.map((n) => (
                <g key={n.name} filter="url(#glow)">
                  <circle cx={n.x} cy={n.y} r={n.main ? 14 : 7} fill="#ECFDF5" stroke="#D9F99D" strokeWidth="3" />
                </g>
              ))}
              {districts.map((d) => (
                <text key={`label-${d.name}`} x={d.name === 'Semarang' ? 560 : d.name === 'Boyolali' ? 650 : d.name === 'Wonogiri' ? 790 : 0} y={d.name === 'Semarang' ? 280 : d.name === 'Boyolali' ? 555 : d.name === 'Wonogiri' ? 665 : 0} className="fill-white font-bold" fontSize={d.big ? 24 : 0}>{d.name}</text>
              ))}
              <text x="575" y="278" className="fill-white font-bold" fontSize="30">Semarang</text>
              <text x="650" y="552" className="fill-white font-semibold" fontSize="22">Boyolali</text>
              <text x="792" y="665" className="fill-white font-semibold" fontSize="22">Wonogiri</text>
              {['Brebes','Tegal','Pemalang','Kendal','Pati','Rembang','Grobogan','Salatiga','Magelang','Kebumen','Purworejo'].map((name, i) => (
                <text key={name} x={[78,178,295,432,730,900,795,620,520,175,312][i]} y={[180,208,205,205,178,205,315,365,530,612,665][i]} className="fill-white/90 font-medium" fontSize="15">{name}</text>
              ))}
            </svg>

            <div className="absolute left-5 top-5 w-[235px] rounded-[1.4rem] border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2 text-[#0F8F5D]"><Map className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-wide">Area Prioritas</span></div><CheckCircle2 className="h-5 w-5 text-[#25B866]" /></div>
              <p className="mt-3 text-xl font-bold tracking-tight text-slate-900">Jawa Tengah</p><p className="mt-1 text-sm font-medium text-slate-600">126 Data Panen tervalidasi</p>
            </div>
            <div className="absolute bottom-5 left-5 w-[270px] rounded-[1.35rem] border border-white/60 bg-white/70 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-xl"><p className="text-xs font-medium text-slate-600">Data Panen terbaru</p><div className="mt-2 flex items-center justify-between gap-3"><div><p className="text-lg font-bold tracking-tight text-slate-900">🌶️ Cabai Merah Grade A</p><p className="mt-1 text-xs font-medium text-slate-600">Boyolali · 100 kg · QR aktif</p></div><div className="grid h-11 w-11 shrink-0 grid-cols-3 gap-0.5 rounded-xl bg-white p-2 shadow-inner">{Array.from({ length: 9 }).map((_, index) => (<span key={index} className={`rounded-[2px] ${index % 3 === 0 ? 'bg-[#25B866]' : 'bg-slate-300'}`} />))}</div></div></div>
            <div className="absolute bottom-10 right-7 w-[270px] rounded-[1.35rem] border border-white/60 bg-white/45 p-4 text-white shadow-[0_20px_55px_rgba(15,23,42,0.22)] backdrop-blur-2xl"><p className="text-sm font-medium text-white/85">Skor kesiapan jual</p><div className="mt-3 flex items-end justify-between"><p className="text-4xl font-bold tracking-tight">87</p><p className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold text-[#D9F99D]">↗ +12%</p></div><div className="mt-4 h-2.5 rounded-full bg-white/25"><div className="h-2.5 w-[87%] rounded-full bg-[#25B866] shadow-[0_0_16px_rgba(37,184,102,0.7)]" /></div></div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-8 hidden w-[150px] translate-x-4 space-y-4 lg:block"><div className="rounded-[1.3rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.13)] backdrop-blur-xl"><div className="flex items-center gap-2"><UserRound className="h-5 w-5 text-[#25B866]" /><p className="text-sm font-bold text-slate-900">Detail Petani</p></div><p className="mt-3 text-xs font-medium text-slate-500">Naik 20 kg dari minggu lalu</p><div className="mt-4 flex h-20 items-end gap-2"><span className="h-8 w-4 rounded-full bg-[#BFE8CC]" /><span className="h-14 w-4 rounded-full bg-[#25B866]" /><span className="h-10 w-4 rounded-full bg-[#D9F99D]" /></div></div><div className="rounded-[1.3rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.13)] backdrop-blur-xl"><div className="flex items-center gap-2"><Route className="h-5 w-5 text-[#25B866]" /><p className="text-sm font-bold text-slate-900">Alur Rantai</p></div><div className="mt-4 space-y-2"><div className="h-2 w-full rounded-full bg-[#EAF8F0]"><div className="h-2 w-[74%] rounded-full bg-[#25B866]" /></div><div className="h-2 w-full rounded-full bg-[#EAF8F0]"><div className="h-2 w-[52%] rounded-full bg-[#D9F99D]" /></div><div className="h-2 w-full rounded-full bg-[#EAF8F0]"><div className="h-2 w-[88%] rounded-full bg-[#25B866]" /></div></div></div></div>
    </div>
  );
}
