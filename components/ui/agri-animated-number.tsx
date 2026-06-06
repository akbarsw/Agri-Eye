'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AgriAnimatedNumber({ value }: { value: string }) {
  const numericValue = Number(value);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (Number.isNaN(numericValue)) return;

    let animationFrame = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(easedProgress * numericValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [numericValue]);

  if (Number.isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="inline-block tabular-nums"
    >
      {displayValue}
    </motion.span>
  );
}
