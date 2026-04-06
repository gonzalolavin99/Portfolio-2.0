import { useDarkMode } from './hooks/useDarkMode'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-white dark:bg-surface-dark text-text dark:text-text-dark transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
