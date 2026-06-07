import Image from 'next/image';

type AgriEyeLogoProps = {
  subtitle?: string;
  compact?: boolean;
};

export default function AgriEyeLogo({ subtitle, compact = false }: AgriEyeLogoProps) {
  const markWrapClass = compact
    ? 'relative flex h-14 w-14 shrink-0 items-center justify-center bg-transparent sm:h-16 sm:w-16 lg:h-20 lg:w-20'
    : 'relative flex h-24 w-24 shrink-0 items-center justify-center bg-transparent';

  const markImageClass = compact
    ? 'h-16 w-16 object-contain sm:h-18 sm:w-18 lg:h-22 lg:w-22'
    : 'h-28 w-28 object-contain';

  return (
    <span className="inline-flex items-center gap-3">
      <span className={markWrapClass}>
        <Image
          src="/agri-eye-logo.svg"
          alt="AGRI-EYE"
          width={128}
          height={128}
          className={markImageClass}
          priority
        />
      </span>
      {!compact ? (
        <span>
          <span className="block text-base font-bold tracking-tight text-slate-900">AGRI-EYE</span>
          {subtitle ? <span className="block text-xs font-medium text-slate-500">{subtitle}</span> : null}
        </span>
      ) : null}
    </span>
  );
}
