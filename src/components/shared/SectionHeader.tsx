interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-[var(--fg)]';
  const subtitleColor = light ? 'text-gray-300' : 'text-[var(--fg-muted)]';

  return (
    <div className={`${textAlign} mb-12`}>
      {label && (
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${titleColor} font-display`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
      {/* Red accent line */}
      <div className="mt-6 mx-auto w-16 h-1 bg-brand rounded-full" />
    </div>
  );
}
