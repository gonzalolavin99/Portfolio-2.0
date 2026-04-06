import { Code2, Brain, Server, Shield } from 'lucide-react'
import fotoCv from '../assets/imgs/foto_cv.jpg'

const highlights = [
  { icon: Code2, title: 'Full Stack', description: 'React, TypeScript, Node.js, NestJS — building robust interfaces and scalable backends.' },
  { icon: Brain, title: 'AI Integration', description: 'OpenAI GPT, IBM Watson, semantic search — embedding intelligence into real products.' },
  { icon: Server, title: 'Architecture', description: 'Microservices, REST APIs, WebSockets, PostgreSQL — designing systems that scale.' },
  { icon: Shield, title: 'Security', description: 'OAuth 2.0, JWT, RLS, vulnerability remediation — security-first engineering.' },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 bg-surface-alt dark:bg-surface-dark-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-text-secondary dark:text-text-dark-secondary text-center max-w-2xl mx-auto mb-16">
          Engineer focused on building products that matter — from healthcare platforms to enterprise AI systems.
        </p>

        <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-20" />
              <img src={fotoCv} alt="Gonzalo Lavin" className="relative w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="text-text-secondary dark:text-text-dark-secondary leading-relaxed">
              I'm a <strong className="text-text dark:text-text-dark">Full Stack Developer and AI Integration Engineer</strong> based in Santiago, Chile. I design, build, and maintain scalable web applications and AI-powered systems in enterprise environments.
            </p>
            <p className="text-text-secondary dark:text-text-dark-secondary leading-relaxed">
              At <strong className="text-text dark:text-text-dark">Switch S.A.</strong>, I've designed centralized authentication middleware that reduced session validation time by 40%, led the integration of multichannel virtual assistants automating 60%+ of support queries, and built FlexGPT — an AI chatbot with semantic search that improved first-contact resolution.
            </p>
            <p className="text-text-secondary dark:text-text-dark-secondary leading-relaxed">
              I also built <strong className="text-text dark:text-text-dark">TherapyHub</strong>, a SaaS platform with AI-powered clinical analysis for speech therapists and psychologists, featuring multi-tenant architecture, electronic billing, and compliance with Chilean health data regulations.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(item => (
            <div key={item.title} className="group p-6 rounded-2xl bg-white dark:bg-surface-dark border border-border dark:border-border-dark hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary dark:text-text-dark-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
