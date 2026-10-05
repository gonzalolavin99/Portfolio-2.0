import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import type { Lang, Text } from '../content'

interface Prefs {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (text: Text) => string
  isDark: boolean
  toggleTheme: (origin?: { x: number; y: number }) => void
}

const PrefsContext = createContext<Prefs | null>(null)

function read(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable */
  }
}

function initialLang(): Lang {
  const saved = read('lang')
  if (saved === 'es' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.lang = lang
    write('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    write('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const t = useCallback((text: Text) => text[lang], [lang])

  const toggleTheme = useCallback((origin?: { x: number; y: number }) => {
    const apply = () => {
      const next = !document.documentElement.classList.contains('dark')
      document.documentElement.classList.toggle('dark', next)
      setIsDark(next)
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduced) {
      apply()
      return
    }
    const x = origin?.x ?? window.innerWidth - 40
    const y = origin?.y ?? 32
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    const transition = document.startViewTransition(() => flushSync(apply))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }, [])

  return <PrefsContext.Provider value={{ lang, setLang, t, isDark, toggleTheme }}>{children}</PrefsContext.Provider>
}

export function usePrefs() {
  const ctx = useContext(PrefsContext)
  if (!ctx) throw new Error('usePrefs must be used inside PrefsProvider')
  return ctx
}
