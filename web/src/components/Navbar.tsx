import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react'
import { ui } from '../content'
import { usePrefs } from '../lib/prefs'
import { scrollToTarget, setScrollLocked } from '../lib/motion'

const SECTIONS = ['about', 'experience', 'work', 'stack', 'contact'] as const

export function Navbar() {
  const { t, lang, setLang, isDark, toggleTheme } = usePrefs()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > last && y > 400)
      last = y
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? y / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    setScrollLocked(open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    setScrollLocked(false)
    scrollToTarget(id === 'top' ? 0 : `#${id}`)
  }

  const onTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 })
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-px z-[55] bg-accent origin-left"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[transform,background-color,border-color] duration-700 ease-[var(--ease-out)] border-b ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled && !open ? 'bg-bg/80 backdrop-blur-md border-line' : 'border-transparent'}`}
      >
        <nav className="mx-auto max-w-[1400px] px-5 sm:px-10 h-16 flex items-center justify-between">
          <a href="#top" onClick={go('top')} className="enter group flex items-baseline gap-2 relative z-[2]" style={{ '--d': 600 } as CSSProperties}>
            <span className="font-serif text-2xl leading-none">Gonzalo Lavín</span>
            <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-accent">
              ©{new Date().getFullYear()}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {SECTIONS.map((id, i) => (
              <li key={id} className="enter" style={{ '--d': 650 + i * 60 } as CSSProperties}>
                <a
                  href={`#${id}`}
                  onClick={go(id)}
                  className={`group flex items-baseline gap-1.5 text-[13px] transition-colors ${active === id ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  <span className={`font-mono text-[10px] transition-colors ${active === id ? 'text-accent' : ''}`}>0{i + 1}</span>
                  <span className="link-u">{t(ui.nav[id])}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="enter flex items-center gap-1 relative z-[2]" style={{ '--d': 950 } as CSSProperties}>
            <div className="flex font-mono text-[11px] uppercase tracking-wider" role="group" aria-label="Language">
              {(['es', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-1.5 py-2 transition-colors ${lang === l ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={onTheme}
              aria-label={isDark ? 'Light mode' : 'Dark mode'}
              className="ml-1 w-9 h-9 grid place-items-center rounded-full hover:bg-bg-2 transition-colors"
            >
              <span className="relative block w-3.5 h-3.5 rounded-full border border-ink overflow-hidden">
                <span
                  className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-700 ease-[var(--ease-out)]"
                  style={{ width: isDark ? '100%' : '50%' }}
                />
              </span>
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-label="Menu"
              className="md:hidden ml-1 w-9 h-9 grid place-items-center"
            >
              <span className="relative w-5 h-2.5">
                <span className={`absolute left-0 right-0 h-px bg-ink transition-transform duration-500 ${open ? 'top-1/2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 right-0 h-px bg-ink transition-transform duration-500 ${open ? 'top-1/2 -rotate-45' : 'bottom-0'}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div
        className="md:hidden fixed inset-0 z-40 bg-bg flex flex-col justify-between px-5 pt-24 pb-8"
        style={{
          clipPath: open ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
          visibility: open ? 'visible' : 'hidden',
          transition: `clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1), visibility 0s ${open ? '0s' : '0.8s'}`,
        }}
        aria-hidden={!open}
      >
        <ul className="space-y-1">
          {SECTIONS.map((id, i) => (
            <li key={id} className="overflow-hidden">
              <a
                href={`#${id}`}
                onClick={go(id)}
                tabIndex={open ? 0 : -1}
                className="flex items-baseline gap-4 py-1"
                style={{
                  transform: open ? 'none' : 'translateY(100%)',
                  transition: 'transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: open ? `${200 + i * 60}ms` : '0ms',
                }}
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <span className="font-serif text-5xl">{t(ui.nav[id])}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{t(ui.hero.location)}</p>
      </div>
    </>
  )
}
