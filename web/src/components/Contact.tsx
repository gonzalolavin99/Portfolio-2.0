import { useState, type ChangeEvent, type CSSProperties, type FormEvent } from 'react'
import { links, ui } from '../content'
import { usePrefs } from '../lib/prefs'
import { Reveal, useInView, useMagnetic } from '../lib/motion'

const BACKEND_URL = 'https://portfolio-2-0-h1j4.onrender.com'

type Status = 'idle' | 'sending' | 'success' | 'error'
type Field = 'name' | 'email' | 'company' | 'phone' | 'message'

function Input({
  field,
  label,
  value,
  onChange,
  type = 'text',
  required = true,
  textarea = false,
}: {
  field: Field
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  required?: boolean
  textarea?: boolean
}) {
  const shared =
    'peer w-full bg-transparent border-0 border-b border-line pt-6 pb-2 text-lg outline-none transition-colors focus:border-ink placeholder-transparent'
  return (
    <label className="relative block group">
      {textarea ? (
        <textarea name={field} rows={4} required={required} value={value} onChange={onChange} placeholder={label} className={`${shared} resize-none`} />
      ) : (
        <input name={field} type={type} required={required} value={value} onChange={onChange} placeholder={label} className={shared} autoComplete={field === 'company' ? 'organization' : field === 'phone' ? 'tel' : field} />
      )}
      <span className="pointer-events-none absolute left-0 top-6 text-lg text-muted origin-left transition-all duration-500 ease-[var(--ease-out)] peer-focus:top-0 peer-focus:text-[11px] peer-focus:tracking-[0.14em] peer-focus:uppercase peer-focus:font-mono peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:font-mono">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <span className="absolute left-0 bottom-0 h-px w-full bg-accent scale-x-0 origin-left transition-transform duration-700 ease-[var(--ease-out)] peer-focus:scale-x-100" />
    </label>
  )
}

export function Contact() {
  const { t } = usePrefs()
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState<Record<Field, string>>({ name: '', email: '', company: '', phone: '', message: '' })
  const [titleRef, titleIn] = useInView<HTMLHeadingElement>()
  const sendRef = useMagnetic<HTMLButtonElement>(0.2)

  const update = (field: Field) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 6000)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  const title = t(ui.contact.title)

  return (
    <section id="contact" className="relative bg-ink text-bg [--surface-ink:var(--ink)] rounded-t-[28px] sm:rounded-t-[48px] overflow-hidden">
      <div className="px-5 sm:px-10 pt-24 sm:pt-36 pb-20 max-w-[1400px] mx-auto [--line:color-mix(in_oklab,var(--bg)_18%,transparent)] [--muted:color-mix(in_oklab,var(--bg)_55%,transparent)] [--ink:var(--bg)]">
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-10">
          <span className="text-accent">(05)</span>
          <span>{t(ui.contact.label)}</span>
        </div>

        <h2
          ref={titleRef}
          data-in={titleIn}
          aria-label={title}
          className="font-serif italic leading-[0.85] tracking-[-0.02em] text-[clamp(5rem,20vw,17rem)]"
        >
          <span className="line-mask" aria-hidden="true">
            {[...title].map((ch, i) => (
              <span key={`${ch}-${i}`} style={{ '--i': i } as CSSProperties}>
                {ch === ' ' ? ' ' : ch}
              </span>
            ))}
          </span>
          <span className="not-italic text-accent">.</span>
        </h2>

        <div className="mt-16 sm:mt-24 grid lg:grid-cols-12 gap-16 lg:gap-6">
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <p className="text-xl leading-snug max-w-[30ch] text-bg/85 text-pretty">{t(ui.contact.lede)}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-3 flex-wrap">
                <a href={`mailto:${links.email}`} className="link-u font-serif text-3xl sm:text-4xl break-all">
                  {links.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] border border-line rounded-full px-3 py-1.5 text-muted hover:text-bg hover:border-bg transition-colors"
                >
                  {copied ? t(ui.contact.copied) : t(ui.contact.copy)}
                </button>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <ul className="border-t border-line">
                {[
                  { label: 'WhatsApp', value: links.phone, href: links.whatsapp },
                  { label: 'LinkedIn', value: 'gonzalo-lavin-cordova', href: links.linkedin },
                  { label: 'GitHub', value: 'gonzalolavin99', href: links.github },
                  { label: 'CV', value: 'PDF', href: links.cv },
                ].map(item => (
                  <li key={item.label} className="border-b border-line">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{item.label}</span>
                      <span className="flex items-center gap-3 text-[15px]">
                        <span className="transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-x-2">{item.value}</span>
                        <span className="inline-block transition-transform duration-500 group-hover:-rotate-45 text-accent">→</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <Input field="name" label={t(ui.contact.name)} value={form.name} onChange={update('name')} />
                <Input field="email" type="email" label={t(ui.contact.email)} value={form.email} onChange={update('email')} />
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <Input field="company" required={false} label={t(ui.contact.company)} value={form.company} onChange={update('company')} />
                <Input field="phone" type="tel" label={t(ui.contact.phone)} value={form.phone} onChange={update('phone')} />
              </div>
              <Input field="message" textarea label={t(ui.contact.message)} value={form.message} onChange={update('message')} />

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <button
                  ref={sendRef}
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative overflow-hidden rounded-full bg-bg text-[color:var(--surface-ink)] hover:text-bg transition-colors duration-500 pl-7 pr-2 py-2 flex items-center gap-4 text-sm disabled:opacity-60"
                >
                  <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[var(--ease-out)] rounded-full" />
                  <span className="relative">{status === 'sending' ? t(ui.contact.sending) : t(ui.contact.send)}</span>
                  <span className="relative w-9 h-9 rounded-full bg-[color:var(--surface-ink)] text-bg grid place-items-center transition-transform duration-700 ease-[var(--ease-out)] group-hover:-rotate-45">
                    {status === 'sending' ? <span className="w-3 h-3 rounded-full border border-current border-t-transparent animate-spin" /> : '→'}
                  </span>
                </button>
                <p role="status" aria-live="polite" className="text-sm min-h-5">
                  {status === 'success' && <span className="text-bg">{t(ui.contact.success)}</span>}
                  {status === 'error' && <span className="text-accent">{t(ui.contact.error)}</span>}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
