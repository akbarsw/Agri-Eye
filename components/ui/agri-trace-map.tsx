'use client';

import { useState, useRef } from 'react';
import { Activity, QrCode, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Data titik panen ───────────────────────────────────────────
const HARVEST_POINTS = [
  { id: 'boyolali', label: 'Boyolali', crop: 'Cabai Merah', qty: '100 kg', grade: 'A', x: 348, y: 210, active: true },
  { id: 'karanganyar', label: 'Karanganyar', crop: 'Bawang Merah', qty: '300 kg', grade: 'A', x: 355, y: 212 },
  { id: 'klaten', label: 'Klaten', crop: 'Tomat', qty: '200 kg', grade: 'B', x: 340, y: 213 },
  { id: 'karo', label: 'Karo (Sumut)', crop: 'Kubis', qty: '800 kg', grade: 'A', x: 118, y: 120 },
  { id: 'kintamani', label: 'Kintamani (Bali)', crop: 'Kopi Arabika', qty: '420 kg', grade: 'A', x: 415, y: 280 },
  { id: 'malang', label: 'Malang', crop: 'Apel', qty: '400 kg', grade: 'A', x: 370, y: 260 },
  { id: 'bogor', label: 'Bogor', crop: 'Sayuran', qty: '600 kg', grade: 'B', x: 260, y: 235 },
  { id: 'garut', label: 'Garut', crop: 'Wortel', qty: '250 kg', grade: 'A', x: 275, y: 248 },
];

// ─── Buyer hubs ────────────────────────────────────────────────
const BUYER_HUBS = [
  { id: 'jakarta', label: 'Jakarta', x: 250, y: 230 },
  { id: 'surabaya', label: 'Surabaya', x: 375, y: 255 },
];

// ─── Pulau Indonesia (simplified SVG) ──────────────────────────
const ISLANDS = [
  { id: 'sumatra', d: 'M80,80 L130,50 L160,55 L180,80 L175,120 L160,150 L140,180 L110,200 L80,180 L60,150 L65,120 Z' },
  { id: 'jawa', d: 'M230,225 L260,218 L290,215 L320,215 L350,218 L380,225 L395,235 L380,245 L350,250 L320,248 L290,245 L260,240 L230,235 Z' },
  { id: 'kalimantan', d: 'M220,130 L260,115 L300,110 L340,120 L350,145 L340,175 L320,190 L290,195 L260,190 L240,175 L225,155 Z' },
  { id: 'sulawesi', d: 'M350,130 L365,115 L380,120 L395,135 L390,155 L380,170 L370,180 L355,175 L345,160 L340,145 Z' },
  { id: 'papua', d: 'M450,180 L490,170 L530,175 L550,190 L545,210 L530,225 L500,230 L470,225 L450,210 L445,195 Z' },
  { id: 'bali', d: 'M400,265 L410,260 L420,265 L415,275 L405,278 Z' },
  { id: 'ntb', d: 'M430,270 L445,265 L455,272 L448,280 L435,278 Z' },
  { id: 'ntt', d: 'M460,280 L480,275 L500,278 L510,288 L500,295 L480,292 L465,288 Z' },
];

// ─── Flow lines ────────────────────────────────────────────────
const FLOW_LINES = [
  { from: 'boyolali', to: 'surabaya' },
  { from: 'karanganyar', to: 'surabaya' },
  { from: 'klaten', to: 'jakarta' },
  { from: 'karo', to: 'jakarta' },
  { from: 'kintamani', to: 'surabaya' },
  { from: 'malang', to: 'surabaya' },
  { from: 'bogor', to: 'jakarta' },
  { from: 'garut', to: 'jakarta' },
];

const getPoint = (id: string) =>
  HARVEST_POINTS.find((p) => p.id === id) || BUYER_HUBS.find((h) => h.id === id);

export default function AgriTraceMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  const handleDotHover = (point: (typeof HARVEST_POINTS)[0], e: React.MouseEvent | React.Touch) => {
    setHovered(point.id);
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 10 });
    }
  };

  return (
    <div className="w-full rounded-[1.4rem] bg-[#F1EBDD]/70 p-3 shadow-sm">
      <div className="relative h-[360px] overflow-hidden rounded-[1.35rem] border border-slate-700/80 bg-[#132238] font-sans shadow-2xl select-none lg:h-[430px]">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_52%,rgba(37,184,102,0.24),transparent_22%),linear-gradient(135deg,#1C2B3F_0%,#132238_52%,#0B1320_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:52px_52px] opacity-45" />

        {/* SVG Indonesia Map */}
        <svg ref={svgRef} className="absolute inset-0 h-full w-full" viewBox="0 0 600 350" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Islands */}
          {ISLANDS.map((island) => (
            <path key={island.id} d={island.d} fill="#22334A" stroke="#455B75" strokeWidth="1" opacity="0.9" />
          ))}

          {/* Flow lines */}
          {FLOW_LINES.map((flow, i) => {
            const from = getPoint(flow.from);
            const to = getPoint(flow.to);
            if (!from || !to) return null;
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2 - 20;
            return (
              <g key={`flow-${i}`}>
                <path
                  d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  opacity="0.4"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
                </path>
                <circle r="2.5" fill="#34d399" opacity="0.9">
                  <animateMotion dur={`${2 + i * 0.3}s`} repeatCount="indefinite" path={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`} />
                </circle>
              </g>
            );
          })}

          {/* Buyer hubs */}
          {BUYER_HUBS.map((hub) => (
            <g key={hub.id}>
              <circle cx={hub.x} cy={hub.y} r="12" fill="#34d399" opacity="0.15">
                <animate attributeName="r" from="10" to="16" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx={hub.x} cy={hub.y} r="5" fill="#34d399" filter="url(#glow)" />
              <text x={hub.x} y={hub.y + 18} textAnchor="middle" fill="#86efac" fontSize="9" fontWeight="600">
                {hub.label}
              </text>
            </g>
          ))}

          {/* Harvest dots */}
          {HARVEST_POINTS.map((point) => (
            <g
              key={point.id}
              onMouseEnter={(e) => handleDotHover(point, e)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={(e) => handleDotHover(point, e.touches[0])}
              style={{ cursor: 'pointer' }}
            >
              <circle cx={point.x} cy={point.y} r="6" fill="url(#pulseGrad)" opacity="0.6">
                <animate attributeName="r" from="4" to="12" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={hovered === point.id ? '#f0fdf4' : '#34d399'}
                stroke="#34d399"
                strokeWidth="1.5"
              />
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered &&
            (() => {
              const point = HARVEST_POINTS.find((p) => p.id === hovered);
              if (!point) return null;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute pointer-events-none z-30"
                  style={{ left: tooltipPos.x, top: tooltipPos.y, transform: 'translate(-50%, -100%)' }}
                >
                  <div className="rounded-lg border border-emerald-500/30 bg-slate-950/95 px-3 py-2 text-xs shadow-xl backdrop-blur-sm">
                    <div className="font-semibold text-emerald-300">{point.label}</div>
                    <div className="mt-0.5 text-slate-300">
                      {point.crop} · {point.qty} · Grade {point.grade}
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

        {/* Header overlay */}
        <div className="relative z-10 flex items-start justify-between p-5">
          <div>
            <h2 className="text-xl font-bold tracking-wide text-white lg:text-2xl">Peta Keterlacakan</h2>
            <p className="mt-1 text-sm text-slate-300">Monitoring Data Panen aktif — Seluruh Indonesia</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/20 px-4 py-1.5 backdrop-blur-md">
            <Activity className="h-4 w-4 animate-pulse text-emerald-400" />
            <span className="text-sm font-semibold tracking-wide text-emerald-400">Live</span>
          </div>
        </div>

        {/* Bottom-left: latest harvest card */}
        <div className="absolute bottom-5 left-5 z-20 flex w-[280px] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/42 p-4 shadow-2xl backdrop-blur-xl">
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
        <div className="absolute bottom-5 right-5 z-20 w-60 rounded-3xl border border-emerald-500/20 bg-emerald-950/55 p-5 shadow-[0_8px_32px_rgba(16,185,129,0.15)] backdrop-blur-2xl">
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