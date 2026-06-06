'use client';

import { useState, useRef } from 'react';
import { Activity, QrCode, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Titik panen ───────────────────────────────────────────────
const HARVEST_POINTS = [
  { id: 'boyolali', label: 'Boyolali', crop: 'Cabai Merah', qty: '100 kg', grade: 'A', x: 220, y: 248, active: true },
  { id: 'karanganyar', label: 'Karanganyar', crop: 'Bawang Merah', qty: '300 kg', grade: 'A', x: 226, y: 250 },
  { id: 'klaten', label: 'Klaten', crop: 'Tomat', qty: '200 kg', grade: 'B', x: 213, y: 250 },
  { id: 'karo', label: 'Karo (Sumut)', crop: 'Kubis', qty: '800 kg', grade: 'A', x: 52, y: 112 },
  { id: 'kintamani', label: 'Kintamani (Bali)', crop: 'Kopi Arabika', qty: '420 kg', grade: 'A', x: 268, y: 266 },
  { id: 'malang', label: 'Malang', crop: 'Apel', qty: '400 kg', grade: 'A', x: 238, y: 256 },
  { id: 'bogor', label: 'Bogor', crop: 'Sayuran', qty: '600 kg', grade: 'B', x: 168, y: 250 },
  { id: 'garut', label: 'Garut', crop: 'Wortel', qty: '250 kg', grade: 'A', x: 178, y: 258 },
];

// ─── Buyer hubs ────────────────────────────────────────────────
const BUYER_HUBS = [
  { id: 'jakarta', label: 'Jakarta', x: 162, y: 244 },
  { id: 'surabaya', label: 'Surabaya', x: 235, y: 252 },
];

// ─── Pulau Indonesia (SVG paths — lebih akurat) ────────────────
const ISLANDS = [
  {
    id: 'sumatra',
    d: 'M42,88 C48,72 62,56 80,52 C96,48 112,46 128,52 C140,56 150,64 154,76 C156,84 154,96 148,108 C142,120 134,130 124,138 C114,146 102,152 88,158 C76,162 64,164 54,160 C46,156 40,148 38,138 C36,126 38,112 40,100 Z',
  },
  {
    id: 'jawa',
    d: 'M148,242 C156,238 168,236 180,236 C192,236 204,237 216,238 C226,239 234,241 240,244 C244,246 246,250 244,254 C242,258 238,260 232,262 C224,264 214,264 204,263 C192,262 180,260 170,258 C160,256 152,252 148,248 Z',
  },
  {
    id: 'kalimantan',
    d: 'M178,142 C186,130 200,122 216,120 C230,118 244,120 256,126 C266,132 274,140 278,150 C280,158 278,168 272,178 C266,186 256,192 244,196 C232,200 218,200 206,196 C196,192 188,186 182,178 C178,170 176,158 178,148 Z',
  },
  {
    id: 'sulawesi',
    d: 'M286,146 C290,136 296,130 304,128 C310,126 316,128 320,132 C324,136 326,142 324,148 C322,154 318,160 312,166 C308,170 306,176 308,182 C310,186 314,190 310,194 C306,196 300,194 296,190 C292,186 290,180 288,174 C286,166 284,158 286,150 Z',
  },
  {
    id: 'papua',
    d: 'M364,186 C372,176 384,170 398,168 C410,166 422,168 432,174 C440,180 446,188 448,198 C450,206 448,214 442,222 C436,228 428,232 418,234 C408,236 396,234 386,230 C378,226 372,220 368,212 C364,204 362,196 364,190 Z',
  },
  {
    id: 'bali',
    d: 'M258,262 C260,260 264,258 268,258 C272,258 274,260 274,264 C274,268 272,272 268,274 C264,276 260,274 258,270 Z',
  },
  {
    id: 'lombok',
    d: 'M280,264 C282,262 286,260 290,262 C292,264 292,268 290,272 C288,274 284,274 282,270 Z',
  },
  {
    id: 'sumba',
    d: 'M302,272 C306,270 312,270 316,274 C318,278 316,282 312,284 C308,286 304,282 302,278 Z',
  },
  {
    id: 'flores',
    d: 'M292,268 L302,264 L310,266 L316,270 L310,274 L300,272 Z',
  },
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
        {/* BG */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_52%,rgba(37,184,102,0.24),transparent_22%),linear-gradient(135deg,#1C2B3F_0%,#132238_52%,#0B1320_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:52px_52px] opacity-45" />

        {/* SVG Map */}
        <svg ref={svgRef} className="absolute inset-0 h-full w-full" viewBox="0 0 480 320" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Islands */}
          {ISLANDS.map((island) => (
            <path
              key={island.id}
              d={island.d}
              fill="#1e3a4f"
              stroke="#3b6b8a"
              strokeWidth="1"
              opacity="0.85"
            />
          ))}

          {/* Flow lines */}
          {FLOW_LINES.map((flow, i) => {
            const from = getPoint(flow.from);
            const to = getPoint(flow.to);
            if (!from || !to) return null;
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2 - 15;
            return (
              <g key={`flow-${i}`}>
                <path
                  d={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`}
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="1.2"
                  strokeDasharray="5 4"
                  opacity="0.35"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.5s" repeatCount="indefinite" />
                </path>
                <circle r="2" fill="#34d399" opacity="0.9">
                  <animateMotion dur={`${2 + i * 0.3}s`} repeatCount="indefinite" path={`M${from.x},${from.y} Q${midX},${midY} ${to.x},${to.y}`} />
                </circle>
              </g>
            );
          })}

          {/* Buyer hubs */}
          {BUYER_HUBS.map((hub) => (
            <g key={hub.id}>
              <circle cx={hub.x} cy={hub.y} r="10" fill="#34d399" opacity="0.12">
                <animate attributeName="r" from="8" to="14" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx={hub.x} cy={hub.y} r="4" fill="#34d399" filter="url(#glow)" />
              <text x={hub.x} y={hub.y + 15} textAnchor="middle" fill="#86efac" fontSize="8" fontWeight="600">
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
              <circle cx={point.x} cy={point.y} r="5" fill="url(#pulseGrad)" opacity="0.5">
                <animate attributeName="r" from="3" to="10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle
                cx={point.x}
                cy={point.y}
                r="3.5"
                fill={hovered === point.id ? '#f0fdf4' : '#34d399'}
                stroke="#34d399"
                strokeWidth="1.2"
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

        {/* Header */}
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

        {/* Bottom-left card */}
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

        {/* Bottom-right score */}
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