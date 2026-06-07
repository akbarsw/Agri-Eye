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
      className={`${nunito.className} mt-7 max-w-3xl text-[2.35rem] font-bold leading-[1.06] tracking-[-0.035em] text-slate-800 sm:text-5xl lg:text-6xl xl:text-[4rem]`}
    >
      <span>{visibleText || headline}</span>
      <span className="ml-1 inline-block h-8 w-[4px] translate-y-1 rounded-full bg-[#25B866] align-baseline animate-pulse sm:h-10 lg:h-12" />
    </h1>
  );
}
