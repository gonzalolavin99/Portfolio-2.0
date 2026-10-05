import type { CSSProperties } from 'react'
import { useInView, SplitReveal } from '../lib/motion'

export function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div className="mb-14 sm:mb-20">
      <div ref={ref} data-in={inView} className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-8">
        <span className="text-accent">({index})</span>
        <span>{label}</span>
        <span className="rule flex-1 h-px bg-line" style={{ '--d': 150 } as CSSProperties} />
      </div>
      <SplitReveal
        text={title}
        className="font-serif text-[clamp(2.6rem,6.5vw,5.75rem)] leading-[0.95] tracking-[-0.015em] max-w-[16ch] text-balance"
      />
    </div>
  )
}
