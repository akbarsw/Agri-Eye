'use client';

import { Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const headline = 'Platform pintar penyedia produk pertanian yang jelas asalnya dan terverifikasi.';

export default function AgriTypewriter() {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(headline.slice(0, index));

      if (index >= headline.length) {
        window.clearInterval(timer);
      }
    }, 32);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <h1
      aria-label={headline}
      className={`${roboto.className} mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-slate-800 sm:text-6xl lg:text-7xl`}
    >
      <span>{visibleText || headline}</span>
      <span className="ml-1 inline-block h-9 w-[4px] translate-y-1 rounded-full bg-[#25B866] align-baseline animate-pulse sm:h-12 lg:h-16" />
    </h1>
  );
}
