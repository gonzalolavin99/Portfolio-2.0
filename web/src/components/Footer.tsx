import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/gonzalolavin99', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/gonzalolavin', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/gonzalolavin99', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-border dark:border-border-dark">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
          &copy; {new Date().getFullYear()} Gonzalo Lavin. Built with React & TailwindCSS.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-text-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label={s.label}>
              <s.icon size={18} />
            </a>
          ))}
          <a href="mailto:gonzalolavin99@gmail.com" className="p-2 rounded-lg text-text-secondary dark:text-text-dark-secondary hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
