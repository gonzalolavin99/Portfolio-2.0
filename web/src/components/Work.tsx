import { useEffect, useRef, useState } from 'react'
import { archive, projects, ui, type Project } from '../content'
import { usePrefs } from '../lib/prefs'
import { Reveal, prefersReducedMotion } from '../lib/motion'
import { SectionHead } from './SectionHead'

const TINTS = ['#c0461c', '#2f4a3a', '#33405e', '#7a5a2b', '#5b3550']

/** Floating card that trails the cursor over the project list (pointer devices only). */
function Preview({ project, index }: { project: Project | null; index: number }) {
  const { t } = usePrefs()
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const move = (e: PointerEvent) => {
      pos.current.tx = e.clientX
      pos.current.ty = e.clientY
    }
    const loop = () => {
      const p = pos.current
      p.x += (p.tx - p.x) * 0.12
      p.y += (p.ty - p.y) * 0.12
      const tilt = Math.max(-8, Math.min(8, (p.tx - p.x) * 0.08))
      el.style.transform = `translate3d(${p.x + 24}px, ${p.y - 120}px, 0) rotate(${tilt}deg)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', move)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  const shown = project !== null
  return (
    <div ref={ref} className="pointer-events-none fixed top-0 left-0 z-30 hidden lg:block" aria-hidden="true">
      <div
        className="relative w-[300px] h-[220px] overflow-hidden rounded-sm shadow-2xl shadow-black/20"
        style={{
          transform: shown ? 'scale(1)' : 'scale(0.6)',
          opacity: shown ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.4s',
        }}
      >
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="absolute inset-0 p-5 flex flex-col justify-between text-[#f2efe8]"
            style={{
              background: TINTS[i % TINTS.length],
              clipPath: i === index && shown ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
              transition: 'clip-path 0.7s cubic-bezier(0.76,0,0.24,1)',
            }}
          >
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
              <span>{t(p.kind)}</span>
              <span>{p.year}</span>
            </div>
            <div>
              <p className="font-serif italic text-4xl leading-none mb-3">{p.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] opacity-75 leading-relaxed">{p.stack.join(' · ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Work() {
  const { t } = usePrefs()
  const [hovered, setHovered] = useState<number | null>(null)
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion())
  }, [])

  return (
    <section id="work" className="px-5 sm:px-10 py-28 sm:py-40 max-w-[1400px] mx-auto">
      <SectionHead index="03" label={t(ui.work.label)} title={t(ui.work.title)} />

      {canHover && <Preview project={hovered !== null ? projects[hovered] : null} index={hovered ?? 0} />}

      <ul className="border-b border-line" onPointerLeave={() => setHovered(null)}>
        {projects.map((p, i) => {
          const dim = hovered !== null && hovered !== i
          return (
            <Reveal as="li" key={p.name} delay={i * 70} className="border-t border-line">
              <article
                onPointerEnter={() => setHovered(i)}
                className="group relative grid grid-cols-12 gap-x-4 gap-y-3 py-8 sm:py-10 transition-opacity duration-500"
                style={{ opacity: dim ? 0.35 : 1 }}
              >
                <span className="col-span-2 sm:col-span-1 font-mono text-[11px] text-muted pt-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-10 sm:col-span-6 lg:col-span-5">
                  <h3 className="font-serif text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[0.95] tracking-[-0.01em] transition-transform duration-700 ease-[var(--ease-out)] group-hover:translate-x-3">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{t(p.kind)}</p>
                </div>
                <div className="col-span-12 sm:col-start-2 sm:col-span-11 lg:col-start-auto lg:col-span-4">
                  <p className="text-[15px] leading-relaxed text-ink/80 text-pretty">{t(p.description)}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted">
                    {p.stack.map(s => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 sm:col-start-2 sm:col-span-11 lg:col-start-auto lg:col-span-2 flex lg:flex-col lg:items-end justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-muted">{p.year}</span>
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink after:absolute after:inset-0"
                    >
                      <span className="link-u">{t(ui.work.visit)}</span>
                      <span className="inline-block transition-transform duration-500 group-hover:-rotate-45">→</span>
                    </a>
                  ) : (
                    <span className="text-muted">{t(ui.work.internal)}</span>
                  )}
                </div>
              </article>
            </Reveal>
          )
        })}
      </ul>

      <Reveal className="mt-16 grid sm:grid-cols-12 gap-4">
        <p className="sm:col-span-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted pt-1">{t(ui.work.archive)}</p>
        <ul className="sm:col-span-9 divide-y divide-line border-y border-line">
          {archive.map(a => (
            <li key={a.name}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-3 text-sm"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-serif text-xl transition-colors group-hover:text-accent">{a.name}</span>
                  <span className="text-muted hidden sm:inline">{t(a.note)}</span>
                </span>
                <span className="font-mono text-[11px] text-muted flex items-center gap-3">
                  {a.year}
                  <span className="inline-block transition-transform duration-500 group-hover:-rotate-45">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
