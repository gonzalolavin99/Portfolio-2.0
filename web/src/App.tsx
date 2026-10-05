import type { CSSProperties } from 'react'
import { PrefsProvider } from './lib/prefs'
import { prefersReducedMotion, useSmoothScroll } from './lib/motion'
import { Intro, INTRO_MS } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Work } from './components/Work'
import { Stack } from './components/Stack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const withIntro = !prefersReducedMotion()

export default function App() {
  useSmoothScroll()

  return (
    <PrefsProvider>
      {withIntro && <Intro />}
      <div className="grain" aria-hidden="true" />
      <div style={{ '--intro': withIntro ? `${INTRO_MS - 250}ms` : '0ms' } as CSSProperties}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Work />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </PrefsProvider>
  )
}
