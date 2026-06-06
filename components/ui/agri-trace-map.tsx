"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, QrCode, TrendingUp, Leaf } from "lucide-react";

// Real GeoJSON kabupaten boundaries for Jawa Tengah
const PROVINCE_PATH = "M537.4,95.5 L531.6,105.9 L526.0,105.9 L524.5,117.2 L517.9,123.2 L526.4,128.6 L523.7,151.7 L514.1,164.5 L499.7,168.0 L495.4,176.1 L500.5,178.0 L501.4,186.2 L462.2,167.0 L453.5,169.4 L448.7,192.2 L454.6,214.6 L460.5,220.0 L458.4,234.4 L466.3,240.3 L474.5,239.9 L479.1,255.3 L469.0,269.0 L458.9,264.8 L452.6,267.6 L448.0,286.4 L442.8,284.1 L434.8,289.2 L424.0,286.4 L417.1,294.8 L415.4,308.1 L405.7,307.2 L404.4,297.2 L398.0,299.1 L393.2,280.0 L397.9,250.7 L380.4,246.1 L365.7,248.7 L352.9,243.2 L345.8,210.5 L320.3,232.9 L317.3,225.6 L296.7,227.0 L297.1,240.0 L286.6,249.9 L283.5,261.3 L278.2,261.1 L222.1,245.1 L195.4,241.9 L186.3,244.9 L182.5,241.4 L182.8,234.9 L150.7,232.2 L149.9,229.0 L148.9,232.0 L130.9,233.4 L125.7,241.0 L121.8,233.2 L127.3,226.7 L124.5,227.7 L124.7,230.4 L122.0,228.2 L120.9,237.7 L115.9,228.4 L117.5,235.3 L113.6,236.2 L103.2,232.1 L101.4,227.4 L93.9,229.0 L95.7,221.8 L90.5,228.8 L82.1,221.3 L85.1,212.9 L74.2,185.1 L71.0,181.3 L55.1,179.5 L59.2,164.5 L56.5,155.4 L65.4,151.2 L76.4,153.3 L88.9,146.5 L92.1,132.1 L86.3,128.8 L85.3,118.8 L96.3,106.0 L97.4,93.7 L100.4,101.4 L115.1,106.2 L133.6,95.8 L138.7,107.8 L165.4,112.8 L189.5,108.6 L203.2,98.8 L211.3,107.4 L258.8,119.1 L277.1,119.8 L303.5,108.4 L325.4,122.5 L345.7,124.9 L351.9,123.4 L357.0,107.1 L365.7,98.0 L360.5,96.9 L360.8,91.1 L372.2,88.5 L378.7,69.1 L376.0,66.4 L381.8,62.1 L379.0,58.7 L389.0,48.6 L427.7,44.2 L438.1,47.8 L440.5,61.2 L453.8,81.1 L485.7,88.1 L501.6,82.4 L506.5,75.8 L517.3,78.7 L537.4,95.5 Z";

const KABUPATEN_PATHS: Record<string, string> = {
  "Boyolali": "M359.1,222.8 L357.1,221.3 L356.1,219.1 L353.7,217.0 L352.6,215.9 L346.1,210.6 L336.5,206.1 L337.8,203.9 L343.0,201.6 L345.1,196.0 L350.1,190.2 L354.8,190.8 L356.5,192.0 L360.9,194.7 L361.7,196.6 L363.4,194.1 L364.8,195.5 L366.4,193.7 L368.2,196.1 L366.6,196.4 L366.7,197.2 L367.6,199.0 L367.8,200.7 L369.6,202.8 L374.4,202.7 L377.6,202.2 L375.3,200.1 L376.7,196.6 L372.6,196.7 L374.2,194.5 L374.7,190.5 L373.8,187.4 L375.1,182.3 L375.8,178.8 L371.4,179.9 L369.8,175.0 L373.0,171.9 L374.8,169.7 L376.6,163.8 L379.5,164.9 L385.5,162.6 L383.6,160.3 L385.2,158.2 L391.0,151.8 L391.3,154.0 L395.3,157.1 L394.5,158.2 L397.8,159.5 L395.8,163.9 L398.3,166.7 L404.2,160.7 L409.0,162.7 L406.7,163.2 L403.8,167.1 L402.8,167.1 L403.6,167.9 L403.4,168.6 L404.0,168.9 L402.7,167.9 L401.7,168.7 L399.9,168.1 L399.8,169.6 L397.9,169.2 L397.1,169.4 L396.3,169.8 L395.1,170.1 L397.0,170.6 L395.6,171.7 L395.7,172.9 L394.3,174.6 L395.6,175.5 L396.4,174.4 L397.0,173.7 L397.4,172.3 L397.9,171.7 L399.4,171.0 L399.5,175.9 L399.7,180.9 L399.2,184.4 L398.2,186.7 L395.8,191.5 L397.1,194.9 L397.7,197.5 L400.0,198.4 L401.7,207.9 L399.2,208.7 L392.1,207.6 L387.8,208.8 L388.7,212.0 L386.9,214.9 L383.1,217.1 L378.6,217.0 L375.6,216.8 L369.2,216.3 L365.2,216.4 L361.8,218.7 L360.8,222.5 L359.1,222.8 Z M364.0,195.9 L364.8,196.2 L365.0,196.0 L365.0,195.8 L363.8,195.8 L364.0,195.9 Z",
  "Karanganyar": "M438.3,242.6 L436.5,244.4 L431.6,242.8 L429.1,243.1 L426.2,243.4 L426.9,241.7 L426.2,239.8 L421.7,239.1 L424.3,230.8 L422.6,227.4 L422.7,223.0 L416.1,220.8 L409.6,212.9 L409.4,211.0 L405.8,208.7 L403.6,208.4 L402.1,198.2 L406.3,198.3 L408.8,199.7 L410.1,201.7 L412.4,202.2 L418.2,203.6 L427.0,206.5 L434.0,208.8 L437.1,207.2 L440.3,204.0 L442.9,205.3 L442.9,207.8 L448.5,208.4 L449.9,206.1 L453.2,208.2 L454.2,211.6 L456.4,216.2 L460.7,221.7 L459.8,228.7 L458.4,235.2 L454.0,235.5 L449.4,238.9 L446.4,240.1 L440.9,241.6 L440.2,241.7 L438.3,242.6 Z M399.8,210.1 L395.6,210.8 L393.7,211.4 L389.4,209.9 L388.3,208.6 L394.5,208.1 L399.3,209.1 L399.8,210.1 Z",
  "Klaten": "M369.3,248.8 L366.8,247.6 L363.4,245.3 L362.3,246.9 L359.4,247.6 L358.4,246.6 L354.9,243.4 L347.8,217.3 L347.6,210.3 L352.5,216.1 L353.9,216.9 L356.4,218.9 L357.3,221.9 L359.3,222.6 L361.2,218.9 L364.1,217.0 L367.6,216.5 L371.0,215.3 L378.0,216.8 L382.9,216.6 L384.7,217.7 L389.1,218.2 L391.1,220.2 L393.5,221.3 L394.4,224.0 L398.1,224.9 L399.1,225.9 L397.9,226.9 L396.6,228.2 L396.5,229.9 L395.5,231.5 L395.3,233.4 L395.5,235.4 L394.9,235.6 L393.7,238.1 L392.5,239.8 L391.1,242.2 L388.5,244.6 L386.8,247.8 L380.1,248.4 L379.8,246.0 L376.5,247.2 L371.7,248.2 L369.3,248.8 Z",
  "Sragen": "M449.2,207.4 L445.6,208.4 L443.0,206.7 L442.3,203.7 L439.7,204.7 L438.4,209.6 L432.8,208.3 L423.7,204.7 L414.2,202.7 L411.5,202.2 L409.8,201.2 L408.2,199.8 L404.0,198.1 L401.4,198.1 L399.0,198.4 L396.0,196.1 L395.2,192.1 L396.7,187.9 L399.8,185.1 L398.2,184.0 L399.7,176.9 L402.2,176.1 L402.3,176.6 L403.4,175.6 L403.3,176.7 L404.4,176.7 L405.4,177.2 L405.7,177.8 L403.7,178.0 L404.3,178.6 L405.3,178.9 L405.8,179.4 L405.3,181.1 L406.6,179.9 L406.6,179.0 L406.1,178.5 L407.2,177.8 L407.7,177.6 L409.4,177.4 L407.2,176.8 L407.2,176.2 L406.0,176.4 L405.1,176.2 L406.3,175.5 L405.1,175.1 L404.3,174.4 L404.4,174.4 L405.5,174.5 L405.9,174.5 L406.2,174.0 L406.2,172.5 L405.7,172.2 L404.7,171.4 L405.2,171.2 L405.8,169.9 L406.3,170.8 L407.7,170.7 L411.0,170.5 L413.7,171.0 L418.1,172.4 L421.3,171.8 L426.0,171.4 L428.7,171.3 L433.6,169.0 L437.1,170.2 L443.0,169.5 L445.4,168.1 L449.5,167.4 L453.3,169.8 L452.9,172.3 L453.4,176.2 L452.8,180.5 L452.5,183.9 L453.2,185.0 L451.3,188.3 L450.5,189.7 L449.3,191.3 L449.7,195.3 L450.5,197.1 L451.9,199.2 L452.2,202.2 L454.2,205.3 L454.2,207.4 L449.8,207.0 L449.2,207.4 Z M405.4,176.1 L405.5,176.1 L405.5,176.1 L405.4,176.1 L405.4,176.1 Z M399.2,174.8 L399.1,171.4 L400.6,170.8 L401.6,170.5 L400.7,171.7 L401.4,172.3 L401.0,173.1 L401.8,173.5 L401.7,174.5 L402.4,174.3 L400.6,175.4 L399.2,174.8 Z",
  "Sukoharjo": "M408.8,246.1 L407.6,250.1 L405.8,247.6 L401.7,246.8 L399.4,247.3 L397.8,249.9 L395.7,249.2 L393.5,252.0 L389.7,248.1 L386.5,246.5 L388.8,243.6 L390.4,242.1 L392.2,239.8 L393.5,238.0 L394.6,235.8 L395.5,235.1 L395.0,233.5 L395.4,231.7 L397.2,230.2 L396.8,228.5 L397.9,227.1 L399.1,226.2 L398.1,224.9 L394.4,224.0 L393.5,221.3 L391.1,220.2 L389.1,218.2 L387.0,215.6 L387.7,212.8 L387.2,210.4 L392.1,210.6 L394.4,210.6 L397.6,213.5 L400.7,214.9 L402.8,217.9 L406.3,216.1 L409.0,214.5 L417.9,220.6 L422.3,224.1 L422.7,228.9 L424.2,231.1 L421.6,243.2 L419.0,243.6 L416.0,241.0 L411.7,240.2 L409.8,241.0 L408.7,244.4 L408.8,246.1 Z",
  "Surakarta": "M402.7,217.1 L399.0,214.7 L396.7,212.1 L398.4,211.0 L401.7,207.9 L404.2,208.6 L407.5,209.0 L410.1,210.8 L408.8,214.5 L406.3,216.1 L402.7,217.7 L402.7,217.1 Z",
  "Wonogiri": "M410.9,307.1 L407.0,307.0 L405.8,307.2 L405.3,304.8 L402.8,300.2 L399.9,300.8 L398.4,295.4 L394.9,283.5 L395.1,274.1 L395.3,264.7 L397.3,257.1 L397.4,255.4 L397.4,249.4 L399.4,247.3 L401.7,246.8 L405.9,247.6 L407.6,250.1 L408.8,246.1 L409.6,243.0 L412.0,240.9 L414.6,240.7 L418.2,242.8 L421.6,243.2 L425.6,239.0 L426.9,241.1 L426.0,243.2 L429.0,242.6 L431.4,242.6 L436.6,243.8 L438.1,243.1 L440.5,241.7 L441.6,241.7 L448.0,239.4 L451.0,236.8 L458.1,235.6 L463.9,237.3 L466.6,240.1 L470.7,240.2 L472.8,239.3 L475.2,240.6 L474.6,244.7 L475.4,247.0 L477.5,252.5 L479.9,255.9 L475.8,260.8 L472.0,269.0 L463.8,266.6 L459.0,265.2 L454.8,265.9 L452.9,267.4 L453.5,271.3 L451.2,273.3 L450.8,278.2 L450.4,286.4 L445.5,286.5 L444.8,283.9 L442.6,280.7 L441.5,285.7 L439.4,287.1 L436.2,288.9 L432.8,288.2 L424.6,286.4 L421.2,290.3 L416.7,295.3 L415.2,303.2 L416.7,307.8 L410.9,307.1 Z",
};

// Hub & harvest points (SVG coordinates)
const SOLO = { x: 403.1, y: 214.4 };
const POINTS = [
  { name: "Boyolali", x: 367.7, y: 208.5, crop: "Cabai Merah", yield: "100 kg", grade: "A", status: "verified" },
  { name: "Klaten", x: 370.8, y: 234.8, crop: "Bawang Merah", yield: "85 kg", grade: "A", status: "verified" },
  { name: "Karanganyar", x: 423.1, y: 218.7, crop: "Kol / Kubis", yield: "120 kg", grade: "A", status: "pending" },
  { name: "Wonogiri", x: 418.5, y: 259.6, crop: "Cabai Rawit", yield: "65 kg", grade: "B+", status: "verified" },
  { name: "Sukoharjo", x: 390.8, y: 231.9, crop: "Tomat", yield: "90 kg", grade: "A", status: "verified" },
];

// Connection lines (Solo as hub)
const CONNECTIONS = [
  { from: POINTS[0], to: SOLO }, // Boyolali
  { from: POINTS[1], to: SOLO }, // Klaten
  { from: POINTS[2], to: SOLO }, // Karanganyar
  { from: POINTS[3], to: SOLO }, // Wonogiri
];

export default function AgriTraceMap() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  return (
    <section className="relative w-full py-0 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="relative rounded-2xl overflow-hidden border border-white/5"
             style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d1f35 50%, #0a1628 100%)" }}>

          <div className="grid lg:grid-cols-5 gap-0" style={{ minHeight: "500px" }}>

            {/* Left: Cards */}
            <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col gap-4 relative z-10">

              {/* Card 1: Priority Area */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-xl p-4 border backdrop-blur-md"
                style={{
                  background: "rgba(16, 42, 36, 0.75)",
                  borderColor: "#2a6b4f",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400/80 tracking-widest uppercase">
                    Area Prioritas
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Jawa Tengah</h3>
                <p className="text-xs text-slate-400">7 kabupaten • Solo Raya</p>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    342 petani
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    128 pembeli
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Latest Harvest */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative rounded-xl p-4 border backdrop-blur-md"
                style={{
                  background: "rgba(16, 42, 36, 0.75)",
                  borderColor: "#2a6b4f",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400/80 tracking-widest uppercase">
                    Data Panen Terbaru
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-white font-bold">Cabai Merah</h4>
                    <p className="text-xs text-slate-400">Boyolali • 100 kg • Grade A</p>
                    <p className="text-[10px] text-emerald-400/70 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Terverifikasi blockchain
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-emerald-400/60" />
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Readiness Score */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="relative rounded-xl p-4 border backdrop-blur-md"
                style={{
                  background: "rgba(16, 42, 36, 0.75)",
                  borderColor: "#2a6b4f",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400/80 tracking-widest uppercase">
                      Skor Kesiapan Jual
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">+12%</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-white">87%</span>
                  <span className="text-xs text-slate-400 mb-1">siap ekspor</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 mt-3 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #10b981, #38e8d8)" }}
                    initial={{ width: 0 }}
                    animate={{ width: "87%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right: Map */}
            <div className="lg:col-span-3 relative p-4 lg:p-6 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full h-full"
              >
                <svg viewBox="0 0 600 350" className="w-full h-full" style={{ minHeight: "380px" }}>
                  <defs>
                    {/* Glow filter for connections */}
                    <filter id="cyanGlow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="dotGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Province outline - full Jawa Tengah */}
                  <path
                    d={PROVINCE_PATH}
                    fill="#1a3d2e"
                    stroke="#2a5a44"
                    strokeWidth="0.8"
                    opacity="0.6"
                  />

                  {/* Key kabupaten boundaries */}
                  {Object.entries(KABUPATEN_PATHS).map(([name, d]) => (
                    <path
                      key={name}
                      d={d}
                      fill="#1e5a3a"
                      stroke="#3a8a60"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                  ))}

                  {/* Connection lines with glow (cyan) */}
                  {CONNECTIONS.map((conn, i) => (
                    <motion.line
                      key={i}
                      x1={conn.from.x}
                      y1={conn.from.y}
                      x2={conn.to.x}
                      y2={conn.to.y}
                      stroke="#38e8d8"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      filter="url(#cyanGlow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{ delay: 0.8 + i * 0.2, duration: 1.2 }}
                    />
                  ))}

                  {/* Solo Hub (golden square) */}
                  <motion.rect
                    x={SOLO.x - 5}
                    y={SOLO.y - 5}
                    width={10}
                    height={10}
                    rx={2}
                    fill="#fbbf24"
                    filter="url(#dotGlow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  />
                  <motion.circle
                    cx={SOLO.x}
                    cy={SOLO.y}
                    r={18}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="0.8"
                    opacity="0.3"
                    initial={{ r: 5, opacity: 0 }}
                    animate={{ r: 18, opacity: 0 }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                  />
                  <text x={SOLO.x + 14} y={SOLO.y - 8} className="fill-amber-400 text-[9px] font-bold">
                    Solo
                  </text>

                  {/* Harvest points */}
                  {POINTS.map((p, i) => (
                    <g key={i} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)} style={{ cursor: "pointer" }}>
                      {/* Green dot */}
                      <motion.circle
                        cx={p.x}
                        cy={p.y}
                        r={4}
                        fill={p.status === "verified" ? "#10b981" : "#f59e0b"}
                        filter="url(#dotGlow)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.15 }}
                      />
                      {/* Pulse ring */}
                      <motion.circle
                        cx={p.x}
                        cy={p.y}
                        r={4}
                        fill="none"
                        stroke={p.status === "verified" ? "#10b981" : "#f59e0b"}
                        strokeWidth="1"
                        initial={{ r: 4, opacity: 0.6 }}
                        animate={{ r: 14, opacity: 0 }}
                        transition={{ delay: 1 + i * 0.3, duration: 2, repeat: Infinity }}
                      />
                      {/* Label */}
                      <text x={p.x + 8} y={p.y + 3} className="fill-slate-300 text-[8px] font-medium">
                        {p.name}
                      </text>

                      {/* Tooltip on hover */}
                      {hoveredPoint === i && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <rect
                            x={p.x - 55}
                            y={p.y - 52}
                            width={110}
                            height={40}
                            rx={6}
                            fill="rgba(10,22,40,0.92)"
                            stroke="#38e8d8"
                            strokeWidth="0.6"
                          />
                          <text x={p.x - 45} y={p.y - 35} className="fill-white text-[8px] font-bold">
                            {p.crop} • {p.grade}
                          </text>
                          <text x={p.x - 45} y={p.y - 22} className="fill-slate-400 text-[7px]">
                            {p.yield} • {p.name}
                          </text>
                          <text x={p.x - 45} y={p.y - 10} className="text-[7px]" fill={p.status === "verified" ? "#10b981" : "#f59e0b"}>
                            {p.status === "verified" ? "✓ Terverifikasi" : "⏳ Pending"}
                          </text>
                        </motion.g>
                      )}
                    </g>
                  ))}

                  {/* LIVE badge */}
                  <g transform="translate(520, 20)">
                    <rect width={40} height={18} rx={9} fill="#10b981" opacity="0.9" />
                    <circle cx={13} cy={9} r={3} fill="white" opacity="0.9" />
                    <text x={20} y={13} className="fill-white text-[8px] font-bold">LIVE</text>
                  </g>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
