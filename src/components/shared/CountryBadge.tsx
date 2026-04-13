interface CountryBadgeProps {
  name: string;
  size?: 'sm' | 'md';
}

export default function CountryBadge({ name, size = 'sm' }: CountryBadgeProps) {
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-brand/50 transition-colors cursor-default">
      <span className={`${textSize} text-[var(--fg-muted)]`}>{name}</span>
    </span>
  );
}
