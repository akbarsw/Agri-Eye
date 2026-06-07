import AgriTraceMap from './agri-trace-map';

export default function AgriTraceMapFrame() {
  return (
    <div className="relative mx-auto w-full max-w-4xl rounded-[2.45rem] border border-white/60 bg-white/25 p-2.5 shadow-[0_26px_90px_rgba(15,23,42,0.16)] backdrop-blur-2xl ring-1 ring-[#DCD0B8]/80 sm:p-3.5">
      <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.75rem] bg-[radial-gradient(circle_at_top_left,rgba(37,184,102,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,184,102,0.10),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-[2.45rem] ring-1 ring-inset ring-white/45" />
      <div className="pointer-events-none absolute inset-3 z-30 rounded-[1.9rem] ring-1 ring-inset ring-white/45" />

      <div className="pointer-events-none absolute inset-0 z-40">
        <span className="absolute left-5 top-5 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-white/75" />
        <span className="absolute right-5 top-5 h-7 w-7 rounded-tr-xl border-r-2 border-t-2 border-white/75" />
        <span className="absolute bottom-5 left-5 h-7 w-7 rounded-bl-xl border-b-2 border-l-2 border-white/75" />
        <span className="absolute bottom-5 right-5 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-white/75" />
      </div>

      <div className="relative overflow-hidden rounded-[2.05rem] border border-white/70 bg-[#FBFAF6]/70 p-1.5 shadow-inner backdrop-blur-xl">
        <AgriTraceMap />
      </div>
    </div>
  );
}
