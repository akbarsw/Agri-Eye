'use client';

import { useRef, useState } from 'react';

const tabs = [
  { label: 'Platform', href: '#platform' },
  { label: 'Alur', href: '#workflow' },
  { label: 'Keterlacakan', href: '#trace' },
  { label: 'Marketplace', href: '#market' },
  { label: 'Petani', href: '/farmer' },
];

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

export default function AgriNavHeader({ compact = false }: { compact?: boolean }) {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeHref, setActiveHref] = useState<string | null>(null);

  const resetCursor = () => {
    setPosition((previous) => ({ ...previous, opacity: 0 }));
    setActiveHref(null);
  };

  return (
    <ul
      className="relative flex w-fit items-center overflow-hidden rounded-full border border-[#E8DDC7] bg-white/80 p-1 shadow-sm backdrop-blur"
      onMouseLeave={resetCursor}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.href}
          href={tab.href}
          compact={compact}
          active={activeHref === tab.href}
          setActiveHref={setActiveHref}
          setPosition={setPosition}
        >
          {tab.label}
        </Tab>
      ))}

      <li
        aria-hidden="true"
        className="absolute z-0 rounded-full bg-[#0F3D2E] transition-all duration-300 ease-out"
        style={{
          left: position.left,
          width: position.width,
          opacity: position.opacity,
          height: compact ? 32 : 40,
        }}
      />
    </ul>
  );
}

function Tab({
  children,
  href,
  compact,
  active,
  setActiveHref,
  setPosition,
}: {
  children: string;
  href: string;
  compact: boolean;
  active: boolean;
  setActiveHref: (href: string) => void;
  setPosition: (position: CursorPosition) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  const activateTab = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setActiveHref(href);
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={activateTab}
      onFocus={activateTab}
      onTouchStart={activateTab}
      className="relative z-10 shrink-0"
    >
      <a
        href={href}
        className={`block rounded-full font-semibold transition-colors duration-200 ${
          active ? 'text-white' : 'text-slate-500 hover:text-white'
        } ${compact ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'}`}
      >
        {children}
      </a>
    </li>
  );
}
