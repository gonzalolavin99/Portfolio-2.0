import { Briefcase } from 'lucide-react'

interface Job {
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  bullets: string[]
  tech: string[]
}

const jobs: Job[] = [
  {
    title: 'Software Engineer',
    company: 'Switch S.A.',
    location: 'Santiago, Chile',
    period: 'Oct 2024 — Present',
    current: true,
    bullets: [
      'Designed centralized authentication middleware with Node.js, OAuth 2.0 and Redis, reducing session validation time by 40%.',
      'Led multichannel virtual assistant integration with IBM Watson, automating 60%+ of recurring support queries.',
      'Built FlexGPT, an AI chatbot with semantic search and LLM integration, improving first-contact resolution.',
      'Evolved ERP WyseFlow interfaces with React and TypeScript, implementing reusable components and real-time validations.',
      'Implemented real-time hospital monitoring platform using WebSockets for patient and medical asset visualization.',
      'Developed Python microservices for data processing and transformation, improving pipeline performance.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Python', 'Redis', 'IBM Watson', 'OpenAI', 'WebSockets', 'Docker'],
  },
  {
    title: 'Full Stack Developer',
    company: 'MonteBlanco SPA',
    location: 'Santiago, Chile',
    period: 'Aug 2024 — Sep 2024',
    bullets: [
      'Built key features for a warehouse & inventory ERP, improving operational efficiency and real-time stock control.',
      'Created reusable React/TypeScript components, reducing development time for new modules.',
      'Implemented scalable backend architecture with NestJS following Clean Architecture principles.',
      'Designed and optimized PostgreSQL schemas ensuring referential integrity and efficient queries.',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Clean Architecture'],
  },
  {
    title: 'Full Stack Developer',
    company: 'JrMichelson SPA',
    location: 'Santiago, Chile',
    period: 'Jan 2024 — Jul 2024',
    bullets: [
      'Developed full-stack transactional platform for online raffles with integrated payment system.',
      'Built responsive frontend with React and backend services with Node.js/Express.',
      'Integrated electronic payments via Khipu using .NET services for secure transactions.',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', '.NET', 'Khipu'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-text-secondary dark:text-text-dark-secondary text-center max-w-2xl mx-auto mb-16">
          Professional journey building enterprise software and AI-powered solutions.
        </p>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border dark:bg-border-dark hidden sm:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="relative sm:pl-16">
                <div className="hidden sm:flex absolute left-3.5 top-1 w-5 h-5 rounded-full border-2 border-primary bg-white dark:bg-surface-dark items-center justify-center">
                  {job.current && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark-alt border border-border dark:border-border-dark hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                        <Briefcase size={14} />
                        <span>{job.company}</span>
                        <span className="text-border dark:text-border-dark">|</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      job.current
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-text-dark-secondary'
                    }`}>
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-primary/5 dark:bg-primary/10 text-primary font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
