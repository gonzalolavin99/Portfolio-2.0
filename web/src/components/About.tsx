import { useEffect, useRef } from 'react'
import { ui } from '../content'
import { usePrefs } from '../lib/prefs'
import { CountUp, Reveal, prefersReducedMotion, useInView } from '../lib/motion'
import { SectionHead } from './SectionHead'
import portrait from '../assets/imgs/portrait.jpg'

function Portrait() {
  const frameRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [revealRef, inView] = useInView<HTMLDivElement>({ threshold: 0.25 })

  useEffect(() => {
    const frame = frameRef.current
    const img = imgRef.current
    if (!frame || !img || prefersReducedMotion()) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = frame.getBoundingClientRect()
        const p = Math.max(-0.5, Math.min(0.5, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight))
        img.style.transform = `translate3d(0, ${p * -40}px, 0) scale(1.2)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={revealRef} data-in={inView} className="relative">
      <div
        ref={frameRef}
        className="group relative aspect-[4/5] overflow-hidden bg-bg-2"
        style={{
          clipPath: inView ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
          transition: 'clip-path 1.4s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        <img
          ref={imgRef}
          src={portrait}
          alt="Gonzalo Lavín"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] transition-[filter] duration-1000 group-hover:grayscale-0 will-change-transform"
          style={{ transform: 'scale(1.2)' }}
        />
      </div>
      <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        <span>Fig. 01</span>
        <span>Santiago, CL</span>
      </div>
    </div>
  )
}

export function About() {
  const { t } = usePrefs()
  return (
    <section id="about" className="relative px-5 sm:px-10 py-28 sm:py-40 max-w-[1400px] mx-auto">
      <SectionHead index="01" label={t(ui.about.label)} title={t(ui.about.title)} />

      <div className="grid md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-4 lg:col-span-3 max-w-xs md:max-w-none">
          <Portrait />
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg sm:text-xl leading-relaxed text-pretty">
          <Reveal>
            <p>{t(ui.about.p1)}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted">{t(ui.about.p2)}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif italic text-2xl sm:text-3xl leading-snug text-ink">“{t(ui.about.p3)}”</p>
          </Reveal>
        </div>
      </div>

      <dl className="mt-24 sm:mt-32 grid grid-cols-2 lg:grid-cols-4 border-t border-line">
        {ui.about.stats.map((s, i) => (
          <Reveal
            key={s.value}
            delay={i * 90}
            className={`py-8 pr-4 border-b border-line lg:border-b-0 ${i % 2 === 0 ? '' : 'pl-4 lg:pl-6 border-l'} ${i > 0 ? 'lg:border-l lg:pl-6' : ''}`}
          >
            <dt className="sr-only">{t(s.label)}</dt>
            <dd className="font-serif text-6xl sm:text-7xl leading-none tracking-tight">
              <CountUp value={s.value} />
            </dd>
            <dd className="mt-4 text-sm text-muted max-w-[18ch]">{t(s.label)}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
