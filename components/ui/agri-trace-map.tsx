"use client";

import { motion } from "framer-motion";
import { Leaf, MapPin, QrCode, TrendingUp } from "lucide-react";

const MAP_IMAGE_SRC = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAEsAggDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEEAgMFBgf/xAA9EAACAgECAwYEBAYBAgYDAAAAAQIDEQQhEjFBBRMiUWFxBjKBkRRSobEjM0JywdFiU+EVJDRDkvFjgoP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAICAgMAAwEAAAAAAAAAAQIRAzESIRNBUQQUIjL/2gAMAwEAAhEDEQA/APXAA5DgfEfZqcfxtKxjaxL9zzp9AlFTi4ySaaw0+p4/tfsyeg1DlGLdEnmEvL0Z0xrw/wAji1fKOeADTyIAAAAFEAAKAEAAAFQAAABAUAAAAhgCCSAoAAIAAUIAAAAqoABAIACgAKIBKTbSSbb5JF+vTR00syfHan9Iv/LJbpVWvSX254apYXNtYS+rNq0UEvFbmXXhjlL6lhylL5pN+7IMeVTbV+Eo23s29VuR+CqfK2cfRxybixTppOSdi4Yro+bJctLN3pRl2XbKMZUyU0/Pw4K2o09ummo3R4W1lb5TPQ5+i8kUe14OWkhJL5J7+z/+jOPJu6drhqOOQAd3IAICjAAAgkgKAEAAAFAAAAAAAAfUwAed7QiSUouMkmnzTRIA8n8RafT6fWQjp4qDlHMorkvI5J6j4nopeijfJJWxkoxfVryPLnXHp8znx8c6AA04hAAUAIAAAKEAAAABAACgBAAABUAAAQAFACAAAChAAAAgKAAAQSQFWezv/XVfX9mWFyN9lrrklVwqtxThhLljb6mgxbtMvwJIBllbooqnWptuT6rOMFhvLb8zmSvs09U7KpcMtl+pe0lk7tJXZZhylnLXXcxnL29PHZptMLaldTOprPHFrfz6fqZhbHOXTq8x7gvdrafudT3kV4LfEvR9UUT2S7m3ms1QgAoAEAAAFGQSyAAACgAAAAAAAPqYAPO9oAAOd8QVd72Tbuk4NT+x44+gW1xtqlXPeMk0zw/aGkeh1k6HJSxumvI6Y14v5WPuZK5BJBt5AAACAAABAUAAAgAKAEAAAAIACgBAAAgKkgAKAEAAABAACgBAEkA3aSpX3qL+VZlL2QVelHu66q+fDBPPq9/8mBssl3ke8axJYT/wa8nNm9g4lCE5yx4VlJ9X0QW/Ira6x953SfhilleuNxIuMabL7LVicspPOMYR2uzv/QU4edn+7OCdfsi5SplV1g8/Rjkn+XbC+18AHmdmF1UL6pV2LMX5c0/NHHv7L1Fcv4UJXQ6Sit/qjtk8jpjncWbjK81dRbQ0rq51trKUljJrPTzpq1OI31xmlyb5r6mMaaoVuuNVahLnHhzk6fLGPjeaIPQS7P0snnuUv7W0ZVaLTUyUq6VxLk5PJflh4VR7M0Gf42or2/ojJc/Vl63Q6W75qVF+cHw/9jfnL3Bxudt26TGRyNf2V3Nfe6dynBfNF816+qOYerTxyOR2l2bwqV+nXhW84fl9V6HXDk36rGWP3HLAB2YAAAAAAAAfUwAed7QAADh9rdhWa3VS1FNsE5JeGSx+qO4Cy6Zzwmc1Xz62LqslCaxKLw0b9Zo5aSrTym/FdDjcfy+R7S7S0X/zqa5+sorJU7W7Kh2lCLUu7thyljO3kzfk8t/jWS6eMMoVzsbUISk0stRWcI6eo+HtdSk4KFu+MQe/6nZ7B7KnoK52X476xY4Vvwotyjlhw5W6seRIPXWfDmks1MrXKxRk893HCRQ7f09NE6dPVGNcJQbS6KSfP68h5RcuDLgA==";

const points = [
  { name: "Boyolali", x: 59, y: 72, color: "#22c55e" },
  { name: "Klaten", x: 65, y: 57, color: "#22c55e" },
  { name: "Solo", x: 61, y: 43, color: "#f59e0b", hub: true },
  { name: "Karanganyar", x: 72, y: 33, color: "#22c55e" },
  { name: "Sukoharjo", x: 55, y: 45, color: "#22c55e" },
  { name: "Wonogiri", x: 77, y: 76, color: "#22c55e" },
];

const routes = [
  { from: [59, 72], to: [61, 43] },
  { from: [65, 57], to: [61, 43] },
  { from: [55, 45], to: [61, 43] },
  { from: [72, 33], to: [61, 43] },
  { from: [77, 76], to: [61, 43] },
];

export default function AgriTraceMap() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-[1.5rem] border border-emerald-300/80 bg-[#EAF8F0] p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="flex items-center gap-2 text-base font-bold text-emerald-800 sm:text-lg"><MapPin className="h-4 w-4" />Peta Terlacak</h3>
          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">Monitoring data panen aktif • Jawa Tengah</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase text-emerald-700 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Live</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        <div className="grid gap-3">
          <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} className="rounded-2xl border border-emerald-300 bg-white/70 p-4 backdrop-blur-md">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600"><MapPin className="h-3.5 w-3.5" />Area Prioritas</div><h4 className="text-base font-bold text-emerald-950">Jawa Tengah</h4><p className="mt-1 text-xs font-medium text-slate-500">7 kabupaten • Solo Raya</p><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700">342 petani</span><span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-bold text-sky-700">128 pembeli</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.22 }} className="rounded-2xl border border-emerald-300 bg-white/70 p-4 backdrop-blur-md">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600"><Leaf className="h-3.5 w-3.5" />Data Panen Terbaru</div><div className="flex items-center justify-between gap-3"><div><h4 className="text-base font-bold text-emerald-950">Cabai Merah</h4><p className="mt-1 text-xs font-medium text-slate-500">Boyolali • 100 kg • Grade A</p><p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Terverifikasi</p></div><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-500"><QrCode className="h-5 w-5" /></div></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32 }} className="rounded-2xl border border-emerald-300 bg-white/70 p-4 backdrop-blur-md">
            <div className="mb-3 flex items-center justify-between gap-3"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600"><TrendingUp className="h-3.5 w-3.5" />Skor Kesiapan Jual</div><span className="text-xs font-bold text-emerald-600">+12%</span></div><div className="flex items-end gap-2"><span className="text-3xl font-bold text-emerald-950">87%</span><span className="pb-1 text-xs font-medium text-slate-500">siap distribusi</span></div><div className="mt-3 h-2 rounded-full bg-emerald-100"><motion.div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" initial={{ width: 0 }} animate={{ width: "87%" }} transition={{ delay: 0.5, duration: 1 }} /></div>
          </motion.div>
        </div>

        <div className="relative min-h-[290px] overflow-hidden rounded-2xl bg-[#D8F7E7] sm:min-h-[360px]">
          <img src={MAP_IMAGE_SRC} alt="Peta Terlacak Jawa Tengah" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">{routes.map((route, index) => (<motion.line key={index} x1={route.from[0]} y1={route.from[1]} x2={route.to[0]} y2={route.to[1]} stroke="rgba(255,255,255,0.82)" strokeWidth="0.35" strokeDasharray="2 1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 0.45 + index * 0.08, duration: 0.7 }} />))}</svg>
          {points.map((point, index) => (<div key={point.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${point.x}%`, top: `${point.y}%` }}><motion.span className="absolute left-1/2 top-1/2 rounded-full bg-white/60" style={{ width: point.hub ? 28 : 22, height: point.hub ? 28 : 22, transform: "translate(-50%, -50%)" }} animate={{ scale: [1, 1.5, 1], opacity: [0.45, 0.08, 0.45] }} transition={{ repeat: Infinity, duration: 2.2, delay: index * 0.15 }} /><motion.span className="relative block rounded-full border-2 border-white shadow-md" style={{ width: point.hub ? 14 : 11, height: point.hub ? 14 : 11, backgroundColor: point.color }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.35 + index * 0.08 }} /></div>))}
        </div>
      </div>
    </section>
  );
}
