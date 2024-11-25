interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

export function Progress({ value, className = '', indicatorClassName = '' }: ProgressProps) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-[hsl(var(--surface-bright))] ${className}`}>
      <div
        className={`h-full transition-all duration-500 ease-in-out ${indicatorClassName}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
