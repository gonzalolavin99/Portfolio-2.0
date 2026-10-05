import type { CSSProperties } from 'react'
import { marquee, stack, ui } from '../content'
import { usePrefs } from '../lib/prefs'
import { Reveal } from '../lib/motion'
import { SectionHead } from './SectionHead'

function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-line py-6 sm:py-8 select-none" aria-hidden="true">
      <div className="marquee" style={{ '--speed': '55s' } as CSSProperties}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center font-serif text-[clamp(3rem,8vw,7rem)] leading-none whitespace-nowrap">
            <span className={i % 2 ? 'italic' : 'text-outline'}>{item}</span>
            <span className="mx-6 sm:mx-10 inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function Stack() {
  const { t } = usePrefs()
  return (
    <section id="stack" className="py-28 sm:py-40">
      <div className="px-5 sm:px-10 max-w-[1400px] mx-auto">
        <SectionHead index="04" label={t(ui.stack.label)} title={t(ui.stack.title)} />
      </div>

      <Marquee />

      <div className="px-5 sm:px-10 max-w-[1400px] mx-auto mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {stack.map((group, i) => (
          <Reveal key={group.group.en} delay={(i % 3) * 90} className="border-t border-line py-7">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="font-serif text-3xl">{t(group.group)}</h3>
              <span className="font-mono text-[11px] text-muted">{String(group.items.length).padStart(2, '0')}</span>
            </div>
            <ul className="space-y-1.5">
              {group.items.map(item => (
                <li key={item} className="group flex items-center text-[15px] text-ink/80 hover:text-ink transition-colors">
                  <span className="w-0 mr-0 group-hover:w-4 group-hover:mr-3 h-px bg-accent transition-[width,margin] duration-500 ease-[var(--ease-out)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
