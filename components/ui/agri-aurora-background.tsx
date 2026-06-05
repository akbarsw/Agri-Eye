'use client';

import type { ReactNode } from 'react';

type AgriAuroraBackgroundProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function AgriAuroraBackground({
  children,
  id,
  className = '',
}: AgriAuroraBackgroundProps) {
  return (
    <section id={id} className={`relative overflow-hidden bg-[#F7F4ED] ${className}`}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.20),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_45%_88%,rgba(217,249,157,0.35),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="agri-aurora-layer absolute -inset-[25%] opacity-70 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,244,237,0.28)_0%,rgba(247,244,237,0.72)_62%,#F7F4ED_100%)]" />
      {children}
    </section>
  );
}
