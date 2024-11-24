export function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div className={`bg-gray-200 animate-pulse ${className}`}>
      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
    </div>
  )
}
