import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'

interface Project {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  gradient: string
}

const projects: Project[] = [
  {
    title: 'TherapyHub',
    description: 'Full-stack SaaS platform for speech therapists and psychologists. Features patient management, standardized clinical assessments, AI-powered analysis with OpenAI GPT, multi-tenant clinic architecture, electronic billing with PDF export, and compliance with Chilean health data regulations.',
    tech: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'OpenAI GPT', 'TailwindCSS', 'Vite'],
    liveUrl: 'https://speech-therapy-hub.vercel.app',
    githubUrl: 'https://github.com/gonzalolavin99/speech-therapy-hub',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'FlexGPT',
    description: 'AI-powered chatbot with semantic search and LLM integration built at Switch S.A. Improved first-contact resolution and reduced response times for enterprise support operations.',
    tech: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Semantic Search', 'Redis'],
    featured: true,
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Hospital Real-Time Monitor',
    description: 'Real-time monitoring platform for hospital patient and medical asset visualization using WebSockets. Built at Switch S.A. for healthcare operations visibility.',
    tech: ['React', 'TypeScript', 'WebSockets', 'Node.js'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'WyseFlow ERP',
    description: 'Enterprise resource planning interfaces with reusable components and real-time validations, reducing data entry errors across multiple business units at Switch S.A.',
    tech: ['React', 'TypeScript', 'REST APIs'],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Car Raffle Platform',
    description: 'Full-stack transactional platform for online car raffles with integrated Khipu payment system. Features responsive frontend, centralized validation, and secure payment processing.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', '.NET', 'Khipu'],
    liveUrl: 'https://jr-michelson.vercel.app/',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Marketplace',
    description: 'E-commerce platform with user registration, product listings, buying and selling features. Full authentication system with BCrypt/JWT and PostgreSQL backend.',
    tech: ['React', 'Express.js', 'PostgreSQL', 'Firebase', 'JWT'],
    liveUrl: 'https://front-marketplace.onrender.com/',
    gradient: 'from-indigo-500 to-blue-500',
  },
]

function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-surface-dark border border-border dark:border-border-dark hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`font-bold ${compact ? 'text-base' : 'text-xl'}`}>{project.title}</h3>
          <div className="flex gap-2 shrink-0 ml-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors" aria-label={`${project.title} GitHub`}>
                <GithubIcon size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors" aria-label={`${project.title} live demo`}>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <p className={`text-text-secondary dark:text-text-dark-secondary leading-relaxed flex-1 ${compact ? 'text-xs' : 'text-sm'} mb-4`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-text-secondary dark:text-text-dark-secondary">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 bg-surface-alt dark:bg-surface-dark-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Projects</h2>
        <p className="text-text-secondary dark:text-text-dark-secondary text-center max-w-2xl mx-auto mb-16">
          A selection of projects showcasing full-stack development, AI integration, and enterprise solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map(project => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
