import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import Lenis from 'lenis'

let lenis: Lenis | null = null

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const instance = new Lenis({ duration: 1.15, easing: t => 1 - Math.pow(1 - t, 4) })
    lenis = instance
    let frame = 0
    const raf = (time: number) => {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      lenis = null
    }
  }, [])
}

export function scrollToTarget(target: string | number) {
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.6 })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export function setScrollLocked(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop()
    else lenis.start()
  }
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}

export function useInView<T extends Element>(options: { threshold?: number; rootMargin?: string } = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView] as const
}

interface RevealProps {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>()
  return (
    <Tag ref={ref} data-in={inView} className={`reveal ${className}`} style={{ '--d': delay } as CSSProperties}>
      {children}
    </Tag>
  )
}

/** Splits a sentence into masked words that slide up when scrolled into view. */
export function SplitReveal({ text, as: Tag = 'h2', className = '', delay = 0 }: { text: string; as?: ElementType; className?: string; delay?: number }) {
  const [ref, inView] = useInView<HTMLElement>()
  const words = text.split(' ')
  return (
    <Tag ref={ref} data-in={inView} className={className} style={{ '--d': delay } as CSSProperties} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="line-mask" aria-hidden="true">
          <span style={{ '--i': i } as CSSProperties}>{word}</span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  )
}

/** Animates a number (keeping any prefix/suffix) once it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.6 })
  const match = value.match(/^([^\d]*)(\d+)(.*)$/)
  const target = match ? parseInt(match[2], 10) : 0
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || !match) return
    if (prefersReducedMotion()) {
      setN(target)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1)
      setN(Math.round(target * (1 - Math.pow(1 - p, 4))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target])

  if (!match) return <span ref={ref}>{value}</span>
  return (
    <span ref={ref} className="tabular-nums">
      {match[1]}
      {n}
      {match[3]}
    </span>
  )
}

/** Gently pulls an element toward the pointer while hovered (desktop only). */
export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * strength
      const y = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    const leave = () => {
      el.style.transform = ''
    }
    el.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [strength])
  return ref
}

export function useLocalTime(timeZone = 'America/Santiago') {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])
  return time
}
