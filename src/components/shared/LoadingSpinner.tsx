export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-4 border-gray-300 rounded-full border-t-[hsl(var(--accent-1))] animate-spin"></div>
    </div>
  );
}
