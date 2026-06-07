"use client";

import { motion } from "framer-motion";
import { Leaf, MapPin, QrCode, TrendingUp } from "lucide-react";

const points = [
  { name: "Boyolali", x: 38, y: 62, color: "#10b981" },
  { name: "Klaten", x: 52, y: 70, color: "#10b981" },
  { name: "Solo", x: 55, y: 48, color: "#f59e0b", hub: true },
  { name: "Karanganyar", x: 70, y: 42, color: "#f59e0b" },
  { name: "Sukoharjo", x: 48, y: 58, color: "#10b981" },
  { name: "Sragen", x: 75, y: 58, color: "#10b981" },
  { name: "Wonogiri", x: 68, y: 78, color: "#10b981" },
];

const routes = [
  [38, 62, 55, 48],
  [52, 70, 55, 48],
  [48, 58, 55, 48],
  [70, 42, 55, 48],
  [75, 58, 55, 48],
  [68, 78, 55, 48],
];

export default function AgriTraceMap() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-[1.35rem] border border-emerald-300/80 bg-[#EAF8F0] p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="flex items-center gap-2 text-base font-bold text-emerald-800 sm:text-lg">
            <MapPin className="h-4 w-4" />
            Peta Terlacak
          </h3>
          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
            Monitoring data panen aktif • Jawa Tengah
          </p>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase text-emerald-700 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        <div className="grid gap-3">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-emerald-300 bg-white/70 p-4 backdrop-blur-md"
          >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">
              <MapPin className="h-3.5 w-3.5" />
              Area Prioritas
            </div>
            <h4 className="text-base font-bold text-emerald-950">Jawa Tengah</h4>
            <p className="mt-1 text-xs font-medium text-slate-500">7 kabupaten • Solo Raya</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">342 petani</span>
              <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-bold text-sky-700">128 pembeli</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-emerald-300 bg-white/70 p-4 backdrop-blur-md"
          >
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">
              <Leaf className="h-3.5 w-3.5" />
              Data Panen Terbaru
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-bold text-emerald-950">Cabai Merah</h4>
                <p className="mt-1 text-xs font-medium text-slate-500">Boyolali • 100 kg • Grade A</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Terverifikasi
                </p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-500">
                <QrCode className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-2xl border border-emerald-300 bg-white/70 p-4 backdrop-blur-md"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                Skor Kesiapan Jual
              </div>
              <span className="text-xs font-bold text-emerald-600">+12%</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-emerald-950">87%</span>
              <span className="pb-1 text-xs font-medium text-slate-500">siap distribusi</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-emerald-100">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ delay: 0.55, duration: 1.1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Map area — image background + animated overlay */}
        <div className="relative min-h-[290px] overflow-hidden rounded-2xl sm:min-h-[360px]">
          {/* Background map image */}
          <img
            src="/images/jateng-map.jpg"
            alt="Peta Jawa Tengah - Solo Raya"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Animated SVG overlay */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <filter id="agriDotGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection lines → Solo hub */}
            {routes.map(([x1, y1, x2, y2], index) => (
              <motion.line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#0891b2"
                strokeWidth="0.4"
                strokeDasharray="1.5 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ delay: 0.3 + index * 0.12, duration: 0.9 }}
              />
            ))}

            {/* Pulsing dots */}
            {points.map((point, index) => (
              <g key={point.name}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={point.hub ? 2.2 : 1.5}
                  fill={point.color}
                  filter="url(#agriDotGlow)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.45 + index * 0.08 }}
                />
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={point.hub ? 4 : 3}
                  fill="none"
                  stroke={point.color}
                  strokeOpacity="0.3"
                  strokeWidth="0.3"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{
                    delay: 0.6 + index * 0.08,
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
