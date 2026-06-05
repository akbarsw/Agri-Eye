import Image from 'next/image';

type AgriEyeLogoProps = {
  subtitle?: string;
  compact?: boolean;
};

export default function AgriEyeLogo({ subtitle, compact = false }: AgriEyeLogoProps) {
  const markWrapClass = compact
    ? 'relative flex h-16 w-16 shrink-0 items-center justify-center bg-transparent sm:h-20 sm:w-20 lg:h-24 lg:w-24'
    : 'relative flex h-16 w-16 shrink-0 items-center justify-center bg-transparent';

  const markImageClass = compact
    ? 'h-20 w-20 object-contain sm:h-24 sm:w-24 lg:h-28 lg:w-28'
    : 'h-20 w-20 object-contain';

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
