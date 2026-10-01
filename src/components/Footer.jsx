import { Link } from '../router'
import { COMPANY } from '../pages/legalData'
import { PhoneIcon, MailIcon, PinIcon, ArrowUp, WhatsApp } from './Icons'

const socials = [
  ['WhatsApp', <WhatsApp />, 'https://wa.me/910000000000'],
]

export default function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="foot">
      <span className="foot__glow foot__glow--a" aria-hidden="true" />
      <span className="foot__glow foot__glow--b" aria-hidden="true" />

      <div className="foot__top">
        <div className="foot__brand">
          <Link href="/#top" className="logo">Money<span>Pay</span></Link>
          <p>Fast, simple and secure digital payment services for retailers and their customers — AEPS, transfers, recharge, bills and more.</p>
          <ul className="foot__social">
            {socials.map(([n, ic, href]) => (
              <li key={n}><a href={href} target="_blank" rel="noreferrer" aria-label={n}>{ic}</a></li>
            ))}
          </ul>
        </div>

        <div className="foot__col">
          <h4>Services</h4>
          <Link href="#services">AEPS</Link>
          <Link href="#services">Money Transfer</Link>
          <Link href="#services">Recharge</Link>
          <Link href="#services">BBPS Bill Pay</Link>
          <Link href="#services">Micro ATM</Link>
          <Link href="#services">Insurance</Link>
        </div>

        <div className="foot__col">
          <h4>Company</h4>
          <Link href="#about">About us</Link>
          <Link href="#platform">Platform</Link>
          <Link href="#how">How it works</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="foot__col">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/refund">Refund Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>

        <div className="foot__contact">
          <h4>Get in touch</h4>
          <a href="tel:+910000000000"><PhoneIcon />{COMPANY.phone}</a>
          <a href={'mailto:' + COMPANY.email}><MailIcon />{COMPANY.email}</a>
          <span><PinIcon />{COMPANY.address}</span>
        </div>
      </div>

      <div className="foot__big" aria-hidden="true">MoneyPay</div>

      <div className="foot__bottom">
        <span>© {new Date().getFullYear()} MoneyPay. All rights reserved.</span>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/refund">Refund</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <button type="button" className="foot__top-btn" onClick={top} aria-label="Back to top"><ArrowUp /></button>
      </div>
      <p className="foot__note">Service availability, limits and charges may vary by bank, operator and region. All trademarks belong to their respective owners.</p>
    </footer>
  )
}
