import { useState } from 'react'
import { jobs, ui, type SubProject } from '../content'
import { usePrefs } from '../lib/prefs'
import { Reveal } from '../lib/motion'
import { SectionHead } from './SectionHead'

function ProjectRow({ project, index, open, onToggle }: { project: SubProject; index: number; open: boolean; onToggle: () => void }) {
  const { t } = usePrefs()
  const id = `xp-${project.name.replace(/\W+/g, '-').toLowerCase()}`
  return (
    <li className="border-t border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="group w-full grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[3rem_1fr_1fr_auto] items-baseline gap-3 py-5 text-left"
      >
        <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, '0')}</span>
        <span className="font-serif text-2xl sm:text-3xl leading-tight transition-[color,transform] duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5 group-hover:text-accent">
          {project.name}
        </span>
        <span className="hidden sm:block text-sm text-muted">{t(project.context)}</span>
        <span
          className={`relative w-3 h-3 shrink-0 transition-transform duration-500 ease-[var(--ease-out)] ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 inset-x-0 h-px bg-ink" />
          <span className="absolute left-1/2 inset-y-0 w-px bg-ink" />
        </span>
      </button>
      <div id={id} className="accordion" data-open={open}>
        <div>
          <div className="sm:pl-[3rem] pb-8 grid lg:grid-cols-[1fr_14rem] gap-6">
            <ul className="space-y-3">
              <li className="sm:hidden text-sm text-muted">{t(project.context)}</li>
              {project.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/85 text-pretty">
                  <span className="mt-[0.7em] w-3 h-px bg-accent shrink-0" />
                  {t(b)}
                </li>
              ))}
            </ul>
            <p className="font-mono text-[11px] leading-relaxed uppercase tracking-[0.12em] text-muted lg:text-right">{project.stack}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export function Experience() {
  const { t } = usePrefs()
  const [openProject, setOpenProject] = useState<string | null>(jobs[0].projects?.[0]?.name ?? null)

  return (
    <section id="experience" className="px-5 sm:px-10 py-28 sm:py-40 max-w-[1400px] mx-auto">
      <SectionHead index="02" label={t(ui.experience.label)} title={t(ui.experience.title)} />

      <ol className="space-y-24 sm:space-y-32">
        {jobs.map(job => (
          <li key={job.company} className="grid md:grid-cols-12 gap-8 md:gap-6">
            <Reveal className="md:col-span-4 md:sticky md:top-28 self-start">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted flex items-center gap-2">
                {!job.end && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                {t(job.start)} — {job.end ? t(job.end) : t(ui.experience.present)}
              </p>
              <h3 className="mt-4 font-serif text-4xl sm:text-5xl leading-none">{job.company}</h3>
              <p className="mt-3 text-base">{t(job.role)}</p>
              <p className="text-sm text-muted">{job.location}</p>
            </Reveal>

            <div className="md:col-span-8">
              {job.summary && (
                <Reveal delay={80}>
                  <p className="text-xl sm:text-2xl leading-snug mb-10 text-pretty max-w-[38ch]">{t(job.summary)}</p>
                </Reveal>
              )}
              {job.bullets && (
                <Reveal delay={80}>
                  <ul className="border-t border-line pt-6 space-y-3">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-lg sm:text-xl leading-snug text-pretty max-w-[46ch]">
                        {t(b)}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
              {job.projects && (
                <Reveal delay={140}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-2">
                    {job.projects.length} {t(ui.experience.projects)}
                  </p>
                  <ul className="border-b border-line">
                    {job.projects.map((p, i) => (
                      <ProjectRow
                        key={p.name}
                        project={p}
                        index={i}
                        open={openProject === p.name}
                        onToggle={() => setOpenProject(cur => (cur === p.name ? null : p.name))}
                      />
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
