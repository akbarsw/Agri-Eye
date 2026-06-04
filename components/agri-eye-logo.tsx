import Image from 'next/image';

type AgriEyeLogoProps = {
  subtitle?: string;
  compact?: boolean;
};

export default function AgriEyeLogo({ subtitle, compact = false }: AgriEyeLogoProps) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center bg-transparent">
        <Image
          src="/agri-eye-logo.svg"
          alt="AGRI-EYE"
          width={72}
          height={72}
          className="h-16 w-16 object-contain"
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
