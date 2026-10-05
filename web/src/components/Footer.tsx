import { links, ui } from '../content'
import { usePrefs } from '../lib/prefs'
import { scrollToTarget, useInView, useLocalTime } from '../lib/motion'

export function Footer() {
  const { t } = usePrefs()
  const time = useLocalTime()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <footer className="bg-ink text-bg overflow-hidden [--line:color-mix(in_oklab,var(--bg)_18%,transparent)]">
      <div className="px-5 sm:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-line pt-8 font-mono text-[11px] uppercase tracking-[0.16em]">
          <div>
            <p className="opacity-50 mb-2">{t(ui.footer.local)}</p>
            <p className="tabular-nums">{time} · Santiago</p>
          </div>
          <div>
            <p className="opacity-50 mb-2">Social</p>
            <ul className="space-y-1">
              <li><a className="link-u" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="link-u" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a className="link-u" href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <p className="opacity-50 mb-2">© {new Date().getFullYear()}</p>
            <p>{t(ui.footer.made)}</p>
          </div>
          <div className="md:text-right">
            <button onClick={() => scrollToTarget(0)} className="group inline-flex items-center gap-2 uppercase tracking-[0.16em]">
              <span className="link-u">{t(ui.footer.top)}</span>
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-1">↑</span>
            </button>
          </div>
        </div>

        <div ref={ref} data-in={inView} className="pt-16 sm:pt-24" aria-hidden="true">
          <p
            className="font-serif leading-[0.75] tracking-[-0.03em] whitespace-nowrap text-[23.5vw] lg:text-[21rem] text-center"
            style={{
              transform: inView ? 'translateY(0.12em)' : 'translateY(0.6em)',
              transition: 'transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            Lav<span className="italic">ín</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
