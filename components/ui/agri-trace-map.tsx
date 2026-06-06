'use client';

import { useState, useRef } from 'react';
import { Activity, QrCode, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Real GeoJSON paths (province boundaries) ──────────────────
const PROVINCE_PATHS: Record<string, string> = {
  'Jawa Tengah':
    'M449.2,125.5 L440.7,132.6 L434.6,144.5 L439.0,164.0 L421.0,175.2 L421.5,182.1 L392.8,174.5 L382.7,191.8 L391.5,210.9 L395.9,224.8 L405.5,235.1 L390.4,241.6 L382.1,256.4 L372.3,258.3 L359.0,262.1 L350.4,270.7 L344.7,265.1 L344.6,231.9 L320.4,230.5 L305.5,204.3 L284.1,214.7 L269.0,224.6 L258.8,239.2 L253.1,235.5 L249.2,218.3 L257.6,206.5 L258.2,196.0 L264.4,183.6 L268.7,175.0 L276.8,168.5 L281.7,156.2 L287.5,145.0 L293.9,138.7 L304.0,133.8 L312.8,126.9 L321.3,119.2 L334.1,114.5 L346.0,112.5 L357.3,114.0 L367.6,117.8 L378.2,120.6 L388.7,122.2 L399.0,121.7 L410.4,121.2 L420.5,122.2 L432.8,122.3 L449.2,125.5 Z',
  'Jawa Barat':
    'M88.7,120.8 L100.9,125.9 L111.9,130.9 L115.5,124.4 L118.4,132.7 L110.9,148.3 L112.8,160.5 L95.2,163.7 L90.5,172.9 L87.7,183.5 L101.8,186.9 L107.7,211.8 L112.7,220.0 L100.4,223.2 L82.8,219.9 L80.6,229.3 L57.7,231.5 L130.0,255.0 L180.0,248.0 L230.0,242.0 L258.8,239.2 L269.0,224.6 L284.1,214.7 L305.5,204.3 L320.4,230.5 L312.8,126.9 L304.0,133.8 L293.9,138.7 L287.5,145.0 L281.7,156.2 L276.8,168.5 L268.7,175.0 L264.4,183.6 L258.2,196.0 L257.6,206.5 L249.2,218.3 L253.1,235.5 L258.8,239.2 L230.0,242.0 L180.0,248.0 L130.0,255.0 L57.7,231.5 Z',
  'Jawa Timur':
    'M449.2,125.5 L460.4,130.4 L472.2,135.6 L483.1,145.5 L493.8,155.2 L500.2,165.8 L510.3,175.6 L518.5,182.0 L525.9,190.1 L532.4,200.3 L538.8,210.2 L540.8,220.5 L538.9,230.1 L534.2,240.4 L528.1,248.7 L520.0,255.2 L510.3,260.4 L499.2,263.8 L487.3,265.0 L475.4,264.7 L463.2,262.3 L452.3,258.1 L442.4,252.0 L434.6,244.8 L428.5,236.5 L424.2,227.3 L421.5,217.8 L420.5,208.0 L421.0,198.2 L423.5,188.5 L427.4,179.2 L432.5,170.8 L439.0,164.0 L434.6,144.5 L440.7,132.6 L449.2,125.5 Z',
  'Yogyakarta':
    'M334.9,268.5 L304.0,259.9 L293.7,253.1 L257.6,240.0 L261.1,231.4 L269.0,224.6 L268.7,215.7 L284.1,214.7 L286.3,219.7 L305.5,204.3 L310.8,226.8 L320.4,230.5 L331.5,228.8 L344.5,231.8 L341.1,252.0 L344.7,265.1 L349.4,263.8 L350.3,270.4 L334.9,268.5 Z',
};

// ─── District points (real coords mapped to SVG) ───────────────
const DISTRICTS = [
  { id: 'semarang', label: 'Semarang', x: 302, y: 147, isHub: true },
  { id: 'boyolali', label: 'Boyolali', x: 322, y: 203, crop: 'Cabai Merah', qty: '100 kg', grade: 'A' },
  { id: 'solo', label: 'Solo', x: 349, y: 207, crop: 'Bawang Merah', qty: '300 kg', grade: 'A' },
  { id: 'klaten', label: 'Klaten', x: 324, y: 221, crop: 'Tomat', qty: '200 kg', grade: 'B' },
  { id: 'karanganyar', label: 'Karanganyar', x: 364, y: 210, crop: 'Wortel', qty: '250 kg', grade: 'A' },
  { id: 'salatiga', label: 'Salatiga', x: 310, y: 190, crop: 'Kopi', qty: '150 kg', grade: 'A' },
  { id: 'magelang', label: 'Magelang', x: 278, y: 198, crop: 'Sayuran', qty: '400 kg', grade: 'B' },
  { id: 'pekalongan', label: 'Pekalongan', x: 258, y: 155, crop: 'Teh', qty: '180 kg', grade: 'A' },
  { id: 'tegal', label: 'Tegal', x: 230, y: 160, crop: 'Padi', qty: '500 kg', grade: 'A' },
  { id: 'kebumen', label: 'Kebumen', x: 290, y: 252, crop: 'Singkong', qty: '350 kg', grade: 'B' },
  { id: 'wonogiri', label: 'Wonogiri', x: 370, y: 245, crop: 'Jagung', qty: '280 kg', grade: 'A' },
  { id: 'cilacap', label: 'Cilacap', x: 250, y: 262, crop: 'Kelapa', qty: '200 kg', grade: 'A' },
];

// Connection lines: district → Semarang hub
const CONNECTIONS = DISTRICTS.filter((d) => !d.isHub).map((d) => ({
  from: d,
  to: DISTRICTS.find((s) => s.isHub)!,
}));

export default function AgriTraceMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  const handleDotHover = (district: (typeof DISTRICTS)[0], e: React.MouseEvent | React.Touch) => {
    setHovered(district.id);
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 10 });
    }
  };

  return (
    <div className="w-full rounded-[1.4rem] bg-[#F1EBDD]/70 p-3 shadow-sm">
      <div className="relative h-[360px] overflow-hidden rounded-[1.35rem] border border-slate-700/80 bg-[#0a1628] font-sans shadow-2xl select-none lg:h-[430px]">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,184,102,0.12),transparent_50%),linear-gradient(135deg,#0d1f35_0%,#0a1628_50%,#060e1a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        {/* SVG Map */}
        <svg ref={svgRef} className="absolute inset-0 h-full w-full" viewBox="0 0 600 350" fill="none" aria-hidden="true">
          <defs>
            {/* Glow filter for connection lines */}
            <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Glow for dots */}
            <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Pulse gradient */}
            <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
            {/* Province fill gradient for Jateng */}
            <linearGradient id="jatengFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a4d2e" />
              <stop offset="100%" stopColor="#0f3320" />
            </linearGradient>
          </defs>

          {/* Context provinces (muted) */}
          {Object.entries(PROVINCE_PATHS).map(([name, d]) => {
            if (name === 'Jawa Tengah') return null;
            return (
              <path
                key={name}
                d={d}
                fill="#131e2e"
                stroke="#1e3045"
                strokeWidth="0.8"
                opacity="0.6"
              />
            );
          })}

          {/* Jawa Tengah — priority highlight */}
          <path
            d={PROVINCE_PATHS['Jawa Tengah']}
            fill="url(#jatengFill)"
            stroke="#2d7a4a"
            strokeWidth="1.5"
            opacity="0.9"
          />
          {/* Inner glow on Jateng border */}
          <path
            d={PROVINCE_PATHS['Jawa Tengah']}
            fill="none"
            stroke="#34d399"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Connection lines (glowing cyan) */}
          {CONNECTIONS.map((conn, i) => {
            const { from, to } = conn;
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2 - 12;
            return (
              <g key={`conn-${i}`}>
                {/* Glow layer */}
                <path
                  d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="3"
                  opacity="0.15"
                  filter="url(#cyanGlow)"
                />
                {/* Main line */}
                <path
                  d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="1.2"
                  opacity="0.5"
                  strokeDasharray="4 3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-14"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </path>
                {/* Traveling dot */}
                <circle r="2" fill="#22d3ee" opacity="0.8">
                  <animateMotion
                    dur={`${1.8 + i * 0.2}s`}
                    repeatCount="indefinite"
                    path={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                  />
                </circle>
              </g>
            );
          })}

          {/* Small tracking dots along routes */}
          {[
            { x: 280, y: 170 }, { x: 290, y: 185 }, { x: 310, y: 175 },
            { x: 335, y: 190 }, { x: 300, y: 210 }, { x: 355, y: 225 },
          ].map((dot, i) => (
            <circle key={`track-${i}`} cx={dot.x} cy={dot.y} r="2" fill="#22d3ee" opacity="0.25">
              <animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* District dots */}
          {DISTRICTS.map((district) => (
            <g
              key={district.id}
              onMouseEnter={(e) => !district.isHub && handleDotHover(district, e)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={(e) => !district.isHub && handleDotHover(district, e.touches[0])}
              style={{ cursor: district.isHub ? 'default' : 'pointer' }}
            >
              {district.isHub ? (
                /* Hub marker (Semarang) — larger, golden */
                <>
                  <circle cx={district.x} cy={district.y} r="14" fill="#facc15" opacity="0.1">
                    <animate attributeName="r" from="12" to="20" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.1" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={district.x} cy={district.y} r="5" fill="#facc15" filter="url(#dotGlow)" />
                  <text x={district.x} y={district.y - 12} textAnchor="middle" fill="#fde68a" fontSize="9" fontWeight="700">
                    {district.label}
                  </text>
                </>
              ) : (
                /* District dot — green */
                <>
                  <circle cx={district.x} cy={district.y} r="6" fill="url(#pulseGrad)" opacity="0.5">
                    <animate attributeName="r" from="4" to="10" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle
                    cx={district.x}
                    cy={district.y}
                    r="3.5"
                    fill={hovered === district.id ? '#f0fdf4' : '#34d399'}
                    stroke="#34d399"
                    strokeWidth="1"
                    filter="url(#dotGlow)"
                  />
                  <text
                    x={district.x + 8}
                    y={district.y + 3}
                    fill="rgba(255,255,255,0.5)"
                    fontSize="7"
                    fontWeight="500"
                  >
                    {district.label}
                  </text>
                </>
              )}
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered &&
            (() => {
              const district = DISTRICTS.find((d) => d.id === hovered);
              if (!district || district.isHub) return null;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute pointer-events-none z-30"
                  style={{ left: tooltipPos.x, top: tooltipPos.y, transform: 'translate(-50%, -100%)' }}
                >
                  <div className="rounded-lg border border-cyan-400/30 bg-slate-950/95 px-3 py-2 text-xs shadow-xl backdrop-blur-sm">
                    <div className="font-semibold text-cyan-300">{district.label}</div>
                    <div className="mt-0.5 text-slate-300">
                      {district.crop} · {district.qty} · Grade {district.grade}
                    </div>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      <span className="text-[10px] text-emerald-400">Live traceable</span>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
        </AnimatePresence>

        {/* Header */}
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

        {/* Priority Area card */}
        <div className="absolute top-16 left-5 z-20 w-52 rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
              <span className="text-base">📍</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Area Prioritas</p>
              <p className="text-sm font-bold text-white">Jawa Tengah</p>
            </div>
          </div>
          <p className="text-xs text-slate-300">126 Data Panen tervalidasi</p>
        </div>

        {/* Bottom-left: latest harvest */}
        <div className="absolute bottom-5 left-5 z-20 flex w-[280px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex-1">
            <p className="mb-1 text-xs text-slate-300">Data Panen terbaru</p>
            <div className="mb-1 flex items-center gap-2">
              <span className="text-xl">🌶️</span>
              <h4 className="text-sm font-bold leading-tight text-white lg:text-base">Cabai Merah Grade A</h4>
            </div>
            <p className="text-xs text-slate-300">Boyolali · 100 kg · QR aktif</p>
          </div>
          <div className="h-12 w-12 shrink-0 rounded-xl bg-white p-1 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            <QrCode className="h-full w-full text-slate-800" strokeWidth={1.5} />
          </div>
        </div>

        {/* Bottom-right: readiness score */}
        <div className="absolute bottom-5 right-5 z-20 w-56 rounded-3xl border border-emerald-500/20 bg-slate-950/60 p-5 shadow-[0_8px_32px_rgba(16,185,129,0.15)] backdrop-blur-2xl">
          <h4 className="mb-3 text-sm font-medium text-emerald-100">Skor kesiapan jual</h4>
          <div className="mb-4 flex items-end justify-between">
            <span className="text-4xl font-bold leading-none text-white">87</span>
            <div className="flex items-center gap-1 rounded-lg bg-emerald-500/20 px-2 py-1 text-base font-semibold text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              <span>+12%</span>
            </div>
          </div>
          <div className="mt-2 flex h-2 w-full gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`flex-1 rounded-full ${i < 14 ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-slate-700/50'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}