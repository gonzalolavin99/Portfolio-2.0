import { useEffect, useRef, type CSSProperties, type MouseEvent } from 'react'
import { links, ui } from '../content'
import { usePrefs } from '../lib/prefs'
import { prefersReducedMotion, scrollToTarget, useLocalTime, useMagnetic } from '../lib/motion'

function Letters({ word, offset = 0 }: { word: string; offset?: number }) {
  return (
    <span className="enter-line inline-block overflow-hidden align-top pb-[0.06em] -mb-[0.06em]" aria-hidden="true">
      {[...word].map((ch, i) => (
        <span key={i} style={{ '--i': i + offset } as CSSProperties}>
          {ch}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const { t } = usePrefs()
  const time = useLocalTime()
  const nameRef = useRef<HTMLHeadingElement>(null)
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.25)

  // Name drifts and softens as the hero scrolls away
  useEffect(() => {
    const el = nameRef.current
    if (!el || prefersReducedMotion()) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight)
        el.style.transform = `translate3d(0, ${y * 0.25}px, 0)`
        el.style.opacity = String(1 - (y / window.innerHeight) * 0.9)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const toContact = (e: MouseEvent) => {
    e.preventDefault()
    scrollToTarget('#contact')
  }

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col px-5 sm:px-10 pt-24 pb-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        <span className="enter" style={{ '--d': 100 } as CSSProperties}>{t(ui.hero.kicker)}</span>
        <span className="enter hidden md:block" style={{ '--d': 160 } as CSSProperties}>{t(ui.hero.location)}</span>
        <span className="enter hidden md:block tabular-nums" style={{ '--d': 220 } as CSSProperties}>{time} CLT</span>
        <span className="enter flex items-center gap-2 justify-end md:justify-start" style={{ '--d': 280 } as CSSProperties}>
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
          </span>
          {t(ui.hero.status)}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center py-12">
        <h1 ref={nameRef} className="font-serif leading-[0.84] tracking-[-0.02em] text-[29vw] sm:text-[min(17vw,15.5rem)] will-change-transform" aria-label="Gonzalo Lavín Córdova">
          <span className="block">
            <Letters word="Gonzalo" />
          </span>
          <span className="block pl-[8vw] md:pl-[18vw]">
            <span className="italic">
              <Letters word="Lavín" offset={7} />
            </span>
            <span className="hidden sm:inline-block text-muted text-[0.3em] align-top mt-[0.5em] ml-[0.6em] not-italic tracking-normal">
              <Letters word="Córdova" offset={12} />
            </span>
          </span>
        </h1>
      </div>

      <div className="grid md:grid-cols-12 gap-8 md:gap-6 items-end border-t border-line pt-6">
        <p className="enter md:col-span-5 text-[17px] sm:text-lg leading-relaxed text-ink/90 text-pretty" style={{ '--d': 500 } as CSSProperties}>
          <span className="font-serif italic text-2xl text-accent mr-1">{t(ui.hero.role)} —</span> {t(ui.hero.lede)}
        </p>
        <div className="md:col-span-7 flex flex-wrap items-center gap-3 md:justify-end">
          <a
            ref={ctaRef}
            href="#contact"
            onClick={toContact}
            className="enter group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink text-bg pl-6 pr-2 py-2 text-sm"
            style={{ '--d': 620 } as CSSProperties}
          >
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[var(--ease-out)] rounded-full" />
            <span className="relative">{t(ui.hero.cta)}</span>
            <span className="relative w-8 h-8 rounded-full bg-bg text-ink grid place-items-center transition-transform duration-700 ease-[var(--ease-out)] group-hover:-rotate-45">
              →
            </span>
          </a>
          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="enter inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm hover:border-ink transition-colors duration-500"
            style={{ '--d': 680 } as CSSProperties}
          >
            {t(ui.hero.cv)} <span className="font-mono text-[10px] text-muted">PDF</span>
          </a>
          <button
            onClick={() => scrollToTarget('#about')}
            className="enter hidden md:flex items-center gap-3 ml-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted hover:text-ink transition-colors"
            style={{ '--d': 740 } as CSSProperties}
          >
            {t(ui.hero.scroll)}
            <span className="relative block w-px h-10 bg-line overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-ink animate-[scrollcue_2s_var(--ease-in-out)_infinite]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
