interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[hsl(var(--accent-1))/0.1] text-[hsl(var(--accent-1))] hover:bg-[hsl(var(--accent-1))/0.2] transition-colors ${className}`}
    >
      {children}
    </span>
  );
}
