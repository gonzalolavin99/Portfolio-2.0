import { useState, type FormEvent } from 'react'
import { Send, MessageCircle, Mail, MapPin } from 'lucide-react'

const BACKEND_URL = 'https://portfolio-2-0-h1j4.onrender.com'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })

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
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white dark:bg-surface-dark border border-border dark:border-border-dark focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-colors"

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 bg-surface-alt dark:bg-surface-dark-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-text-secondary dark:text-text-dark-secondary text-center max-w-2xl mx-auto mb-16">
          Interested in working together? Let's talk about your project.
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-6">
              <ContactInfo icon={Mail} label="Email" value="gonzalolavin99@gmail.com" href="mailto:gonzalolavin99@gmail.com" />
              <ContactInfo icon={MessageCircle} label="WhatsApp" value="+56 9 9236 3770" href="https://wa.me/56992363770" />
              <ContactInfo icon={MapPin} label="Location" value="Santiago, Chile" />
            </div>
            <div className="flex gap-3">
              <a href="https://wa.me/56992363770" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="mailto:gonzalolavin99@gmail.com" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border dark:border-border-dark hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium transition-colors">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name *" required value={form.name} onChange={update('name')} className={inputClass} />
              <input type="email" placeholder="Email *" required value={form.email} onChange={update('email')} className={inputClass} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Company (optional)" value={form.company} onChange={update('company')} className={inputClass} />
              <input type="tel" placeholder="Phone *" required value={form.phone} onChange={update('phone')} className={inputClass} />
            </div>
            <textarea placeholder="Your message *" required rows={5} value={form.message} onChange={update('message')} className={`${inputClass} resize-none`} />
            <button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              <Send size={16} />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'success' && <p className="text-sm text-green-600 dark:text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>}
            {status === 'error' && <p className="text-sm text-red-600 dark:text-red-400 font-medium">Something went wrong. Please try again or contact me directly.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-primary" />
      </div>
      <div>
        <p className="text-xs text-text-secondary dark:text-text-dark-secondary uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">{content}</a>
  return content
}
