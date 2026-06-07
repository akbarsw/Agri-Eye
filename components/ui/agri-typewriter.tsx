'use client';

import { Nunito } from 'next/font/google';
import { useEffect, useState } from 'react';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const headline = 'Platform penyedia produk pertanian yang terverifikasi dan berbasis smart data.';

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
      className={`${nunito.className} mt-6 max-w-2xl text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-slate-800 sm:text-[2.85rem] lg:text-[3.25rem] xl:text-[3.45rem]`}
    >
      <span>{visibleText || headline}</span>
      <span className="ml-1 inline-block h-7 w-[3px] translate-y-1 rounded-full bg-[#25B866] align-baseline animate-pulse sm:h-9 lg:h-10" />
    </h1>
  );
}
