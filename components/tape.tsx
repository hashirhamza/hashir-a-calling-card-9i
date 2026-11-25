export function Tape({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-6 w-20 border-x border-dashed border-ink/10 shadow-[0_1px_2px_rgba(0,0,0,0.08)] ${className}`}
    />
  )
}
