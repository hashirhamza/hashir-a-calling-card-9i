export type SkillTone = 'mint' | 'butter' | 'blush' | 'sky'

const toneClasses: Record<SkillTone, string> = {
  mint: 'bg-mint',
  butter: 'bg-butter',
  blush: 'bg-blush',
  sky: 'bg-sky',
}

export function SkillTag({
  tone,
  size = 'sm',
  children,
}: {
  tone: SkillTone
  size?: 'sm' | 'md'
  children: React.ReactNode
}) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-[2px] border border-ink/25 font-mono font-semibold uppercase tracking-wider text-ink shadow-[1px_1px_0_rgba(0,0,0,0.12)] ${toneClasses[tone]} ${
        size === 'sm' ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs'
      }`}
    >
      {children}
    </span>
  )
}
