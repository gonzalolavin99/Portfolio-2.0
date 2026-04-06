interface SkillCategory {
  title: string
  color: string
  skills: string[]
}

const categories: SkillCategory[] = [
  { title: 'Frontend', color: 'from-blue-500 to-cyan-500', skills: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Vite', 'HTML5', 'CSS3'] },
  { title: 'Backend', color: 'from-emerald-500 to-teal-500', skills: ['Node.js', 'NestJS', 'Express.js', 'Python', 'REST APIs', 'WebSockets'] },
  { title: 'Databases', color: 'from-violet-500 to-purple-500', skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Redis', 'Sequelize'] },
  { title: 'AI & Automation', color: 'from-orange-500 to-amber-500', skills: ['OpenAI API', 'LLM Integration', 'Semantic Search', 'Conversational AI', 'IBM Watson'] },
  { title: 'DevOps & Cloud', color: 'from-rose-500 to-pink-500', skills: ['Docker', 'AWS', 'Linux', 'Git', 'Vercel', 'CI/CD'] },
  { title: 'Security', color: 'from-indigo-500 to-blue-500', skills: ['OAuth 2.0', 'JWT', 'Row Level Security', 'Secure API Design', 'CORS'] },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
        <p className="text-text-secondary dark:text-text-dark-secondary text-center max-w-2xl mx-auto mb-16">
          Tools and technologies I use daily to build products.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div key={cat.title} className="group p-6 rounded-2xl bg-white dark:bg-surface-dark-alt border border-border dark:border-border-dark hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-text-secondary dark:text-text-dark-secondary hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 dark:hover:text-primary transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
