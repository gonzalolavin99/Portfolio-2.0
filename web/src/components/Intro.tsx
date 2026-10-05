import { useEffect, useState } from 'react'
import { setScrollLocked } from '../lib/motion'

export const INTRO_MS = 1500

/** Short opening curtain: a counter fills, then the panel lifts away. */
export function Intro() {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setScrollLocked(true)
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / (INTRO_MS - 450), 1)
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    const leave = setTimeout(() => {
      setLeaving(true)
      setScrollLocked(false)
    }, INTRO_MS - 400)
    const end = setTimeout(() => setDone(true), INTRO_MS + 700)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(leave)
      clearTimeout(end)
      setScrollLocked(false)
    }
  }, [])

  if (done) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[70] flex flex-col justify-between bg-ink text-bg px-5 sm:px-10 py-6 sm:py-8"
      style={{
        clipPath: leaving ? 'inset(0 0 100% 0)' : 'inset(0 0 0 0)',
        transition: 'clip-path 1s cubic-bezier(0.76, 0, 0.24, 1)',
      }}
    >
      <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">
        <span>Gonzalo Lavín Córdova</span>
        <span>Portfolio ’26</span>
      </div>
      <div className="flex items-end justify-between gap-6">
        <p className="font-serif italic text-3xl sm:text-5xl leading-none">Software Engineer</p>
        <span className="font-serif text-7xl sm:text-[10rem] leading-[0.8] tabular-nums">{count}</span>
      </div>
    </div>
  )
}
