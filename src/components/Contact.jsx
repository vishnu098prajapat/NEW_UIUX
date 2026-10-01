import { useEffect, useState } from 'react'
import useReveal, { useTilt } from '../useReveal'
import { PhoneIcon, MailIcon, WhatsApp, PinIcon, ClockIcon, CheckIcon } from './Icons'
import { COMPANY } from '../pages/legalData'

const cards = [
  { tone: 'sage', icon: <PhoneIcon />, t: 'Call us', v: COMPANY.phone, s: 'Mon – Sat · 9am – 7pm', href: 'tel:+910000000000', cta: 'Call now' },
  { tone: 'peach', icon: <MailIcon />, t: 'Email us', v: COMPANY.email, s: 'We reply within 1 working day', href: 'mailto:' + COMPANY.email, cta: 'Send email' },
  { tone: 'orange', icon: <WhatsApp />, t: 'WhatsApp', v: '+91 00000 00000', s: 'Quick help, real people', href: 'https://wa.me/910000000000', cta: 'Start chat' },
  { tone: 'emerald', icon: <PinIcon />, t: 'Visit us', v: 'Head office', s: COMPANY.address, href: '#map', cta: 'View map' },
]

const services = ['AEPS', 'DMT', 'Recharge', 'BBPS', 'Micro ATM', 'Insurance', 'Become a retailer']

function InfoCard({ tone, icon, t, v, s, href, cta, i }) {
  const tilt = useTilt(7)
  const ext = /^(https?:|mailto:|tel:)/.test(href)
  return (
    <a className={`cp-card cp-card--${tone} tilt`} href={href} style={{ '--i': i }} {...(ext ? { target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})} {...tilt}>
      <span className="cp-card__glare" />
      <span className="cp-card__icon">{icon}</span>
      <h3>{t}</h3>
      <strong>{v}</strong>
      <p>{s}</p>
      <span className="cp-card__go">{cta} →</span>
    </a>
  )
}

// Shows a live "online / offline" status based on India time.
function useOpen() {
  const [open, setOpen] = useState(true)
  useEffect(() => {
    const check = () => {
      const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      const day = d.getDay(), h = d.getHours()
      setOpen(day !== 0 && h >= 9 && h < 19)
    }
    check()
    const id = setInterval(check, 60000)
    return () => clearInterval(id)
  }, [])
  return open
}

export default function Contact() {
  const r1 = useReveal(0.1), r2 = useReveal(0.1)
  const [picked, setPicked] = useState([])
  const [state, setState] = useState('idle') // idle | sending | sent
  const open = useOpen()

  const toggle = (s) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))

  const submit = (e) => {
    e.preventDefault()
    setState('sending')
    // TODO: send the form data (name, phone, email, picked, message) to your backend / email service here.
    setTimeout(() => setState('sent'), 1100)
  }

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="cp-hero cq-hero">
        <div className="cp-hero__bg" aria-hidden="true"><span /><span /><span /></div>
        <div className="cp-hero__copy">
          <p className="eyebrow rise" style={{ '--d': '.05s' }}>Contact us</p>
          <h1 className="cp-title">
            <span className="mask"><span style={{ '--d': '.15s' }}>Get in <em>touch.</em></span></span>
          </h1>
          <p className="lead rise" style={{ '--d': '.6s' }}>
            Questions about services, onboarding or commissions? Drop us a line — real people, quick answers.
          </p>
        </div>
      </section>

      {/* ---------- Info cards ---------- */}
      <section className="cp-cards cq-cards reveal" ref={r1}>
        {cards.map((c, i) => <InfoCard key={c.t} {...c} i={i} />)}
      </section>

      {/* ---------- Form + side ---------- */}
      <section className="cp-main cq-main reveal" ref={r2}>
        <form className="cp-form" onSubmit={submit}>
          {state === 'sent' ? (
            <div className="cp-done">
              <span className="cp-done__tick"><CheckIcon /></span>
              <h3>Message sent!</h3>
              <p>Thank you — we’ve received your request and our team will get back to you shortly.</p>
              <button type="button" className="btn btn--ghost" onClick={() => { setState('idle'); setPicked([]) }}>
                <span className="btn__label">Send another</span><span className="btn__arrow">→</span>
              </button>
            </div>
          ) : (
            <>
              <header>
                <p className="eyebrow">Send a message</p>
                <h2>Tell us how we can <em>help</em></h2>
              </header>
              <div className="cp-row">
                <label className="cp-field"><input required name="name" placeholder=" " /><span>Full name</span></label>
                <label className="cp-field"><input required name="phone" type="tel" pattern="[0-9]{10}" placeholder=" " /><span>Mobile number</span></label>
              </div>
              <label className="cp-field"><input name="email" type="email" placeholder=" " /><span>Email address</span></label>

              <div className="cp-chips">
                <p>I’m interested in</p>
                <div>
                  {services.map((s) => (
                    <button type="button" key={s} className={picked.includes(s) ? 'on' : ''} onClick={() => toggle(s)}>
                      {picked.includes(s) && <CheckIcon />}{s}
                    </button>
                  ))}
                </div>
              </div>

              <label className="cp-field cp-field--area"><textarea name="message" rows="4" placeholder=" " /><span>Your message</span></label>

              <button type="submit" className={`btn btn--green cp-submit ${state === 'sending' ? 'is-sending' : ''}`} disabled={state === 'sending'}>
                <span className="btn__label">{state === 'sending' ? 'Sending…' : 'Send message'}</span>
                <span className="btn__arrow">→</span>
              </button>
              <p className="cp-note">By submitting you agree to be contacted about your enquiry. We never share your details.</p>
            </>
          )}
        </form>

        <div className="cp-side">
          <div className="cp-hours">
            <div className="cp-hours__head"><ClockIcon /><h3>Support hours</h3></div>
            <ul>
              <li><span>Monday – Saturday</span><b>9:00 am – 7:00 pm</b></li>
              <li><span>Sunday</span><b>Closed</b></li>
              <li><span>Urgent transaction issues</span><b>Use the form or WhatsApp</b></li>
            </ul>
          </div>

          <div className="cp-map" id="map">
            <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="260" fill="#e7efe9" />
              <path d="M-10 190C80 160 140 220 230 180S360 120 420 150" stroke="#fff" strokeWidth="16" fill="none" />
              <path d="M60 -10C90 60 70 120 130 170S170 250 200 280" stroke="#fff" strokeWidth="12" fill="none" />
              <path d="M260 -10C250 60 300 100 290 150S330 230 360 280" stroke="#fff" strokeWidth="10" fill="none" />
              <path d="M-10 70H420M-10 120H420M110 -10V280M330 -10V280" stroke="#d3e2d8" strokeWidth="2" />
              <rect x="140" y="40" width="70" height="46" rx="10" fill="#bbd5c6" /><rect x="300" y="170" width="70" height="50" rx="10" fill="#f1bfaa" opacity=".8" />
              <rect x="20" y="200" width="60" height="40" rx="10" fill="#f6d9a6" />
              <circle cx="205" cy="128" r="46" fill="#0e5a45" opacity=".08" className="cp-map__pulse" />
            </svg>
            <div className="cp-pin"><PinIcon /><i /></div>
            <div className="cp-map__card">
              <strong>MoneyPay Head Office</strong>
              <span>{COMPANY.address}</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
