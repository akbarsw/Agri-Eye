import Image from 'next/image';

type AgriEyeLogoProps = {
  subtitle?: string;
  compact?: boolean;
};

export default function AgriEyeLogo({ subtitle, compact = false }: AgriEyeLogoProps) {
  const markWrapClass = compact
    ? 'relative flex h-8 w-8 shrink-0 items-center justify-center bg-transparent sm:h-10 sm:w-10 lg:h-12 lg:w-12'
    : 'relative flex h-16 w-16 shrink-0 items-center justify-center bg-transparent';

  const markImageClass = compact
    ? 'h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14'
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
