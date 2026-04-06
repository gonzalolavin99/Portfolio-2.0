import { Mail, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-surface-dark dark:via-surface-dark dark:to-slate-900" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-text dark:text-text-dark">Gonzalo Lavin</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-text-secondary dark:text-text-dark-secondary mb-6">
          Full Stack Developer &{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Integration Engineer
          </span>
        </p>

        <p className="text-base sm:text-lg text-text-secondary dark:text-text-dark-secondary max-w-xl mx-auto mb-10 leading-relaxed">
          Building scalable web applications and AI-powered systems with React, TypeScript, Node.js, and Python.
          Currently engineering intelligent solutions at Switch S.A.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-6 py-3 border border-border dark:border-border-dark text-text dark:text-text-dark font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
          >
            View projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/gonzalolavin99" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl text-text-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" aria-label="GitHub">
            <GithubIcon size={22} />
          </a>
          <a href="https://linkedin.com/in/gonzalolavin" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl text-text-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" aria-label="LinkedIn">
            <LinkedinIcon size={22} />
          </a>
          <a href="mailto:gonzalolavin99@gmail.com" className="p-3 rounded-xl text-text-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-text-secondary dark:text-text-dark-secondary animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
