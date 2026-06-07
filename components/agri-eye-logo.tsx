import Image from 'next/image';

type AgriEyeLogoProps = {
  subtitle?: string;
  compact?: boolean;
};

export default function AgriEyeLogo({ subtitle, compact = false }: AgriEyeLogoProps) {
  const markWrapClass = compact
    ? 'relative flex h-10 w-10 shrink-0 items-center justify-center bg-transparent sm:h-12 sm:w-12 lg:h-14 lg:w-14'
    : 'relative flex h-20 w-20 shrink-0 items-center justify-center bg-transparent';

  const markImageClass = compact
    ? 'h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16'
    : 'h-24 w-24 object-contain';

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
