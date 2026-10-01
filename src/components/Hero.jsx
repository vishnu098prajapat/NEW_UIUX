import { useEffect, useRef } from 'react'
import Button from './Button'
import PhoneMock from './PhoneMock'
import { runCardReveal } from '../cardReveal'
import { items, Folder } from './Services'

export default function Hero() {
  const stage = useRef(null)
  const art = useRef(null)

  // Mouse parallax for the floating shapes.
  useEffect(() => {
    const el = stage.current
    if (!el) return
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      el.style.setProperty('--px', x)
      el.style.setProperty('--py', y)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Intro: hand taps the wallet card -> card flies out and becomes the credit card.
  useEffect(() => (art.current ? runCardReveal(art.current) : undefined), [])

  return (
    <section className="hero" id="top" ref={stage}>
      <div className="hero__bg" aria-hidden="true">
        <span className="glow glow--peach" />
        <span className="glow glow--sage" />
      </div>

      <div className="hero__copy">
        <p className="eyebrow rise" style={{ '--d': '0.1s' }}>Digital payments · Made for India</p>
        <h1 className="hero__title">
          <span className="mask"><span style={{ '--d': '0.2s' }}>Withdraw. Send.</span></span>
          <span className="mask"><span style={{ '--d': '0.32s' }}>Recharge. Pay.</span></span>
          <span className="mask"><span style={{ '--d': '0.44s' }}><em>One counter.</em></span></span>
        </h1>
        <p className="hero__sub rise" style={{ '--d': '0.7s' }}>
          Cash withdrawal, money transfer, recharge and bill payments — all on one MoneyPay login, so your customers never have to visit a bank.
        </p>
        <div className="hero__actions rise" style={{ '--d': '0.85s' }}>
          <Button href="#services" variant="green">Explore services</Button>
          <Button href="/contact" variant="ghost">Contact us</Button>
        </div>
      </div>

      <div className="hero__art" ref={art}>
        <span className="hero__vertical" aria-hidden="true">moneypay</span>

        {/* --- Fintech extras --- */}
        <PhoneMock />

        {/* Service cards that appear beside the phone when a service is tapped */}
        {items.map((it, i) => (
          <div className="art svc" key={it.t} aria-hidden="true">
            <Folder {...it} i={i} />
          </div>
        ))}

        {/* MoneyPay credit card */}
        <div className="art ccard" aria-hidden="true">
          <span className="fy__shine" />
          <div className="fy__in">
            <div className="fy__top">
              <b>MoneyPay</b>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M8 9a5 5 0 0 1 0 6M11.5 6.5a9 9 0 0 1 0 11M15 4a13 13 0 0 1 0 16" /></svg>
            </div>
            <i className="fy__chip" />
            <div className="fy__num">•••• •••• •••• 4821</div>
            <div className="fy__bot"><span>Retailer</span><span>12/29</span></div>
          </div>
        </div>

        {/* Tap ripples + pointing hand (used by the intro animation) */}
        <span className="art tap" aria-hidden="true" /><span className="art tap" aria-hidden="true" />
        <svg className="art hand" viewBox="0 0 34 40" aria-hidden="true">
          <path d="M12 3.2a2.6 2.6 0 0 1 5.2 0V15h1.2v-2.2a2.5 2.5 0 0 1 5 0V15h.8v-1.2a2.4 2.4 0 0 1 4.8 0V15h.4a2.2 2.2 0 0 1 2.2 2.200v8.300c0 6-3.7 10.5-9.7 10.500h-3.400c-3.4 0-5.9-1.6-7.7-4.700L4.3 22.400a2.4 2.4 0 0 1 3.8-2.800l3.9 4.600Z" fill="#fff" stroke="#16160f" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M17.2 15v6M22.4 15v6M27.2 15v6" stroke="#16160f" strokeWidth="1.3" strokeLinecap="round" opacity=".45" />
        </svg>

      </div>

      <a href="#services" className="scroll-cue" aria-label="Scroll down">
        <span>scroll</span><i />
      </a>
    </section>
  )
}
