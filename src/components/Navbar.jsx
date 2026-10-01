import { useEffect, useState } from 'react'
import Button from './Button'
import { Link, useRouter } from '../router'

const links = [
  ['Services', '#services'],
  ['Platform', '#platform'],
  ['About', '#about'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { path } = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="announce">Become a MoneyPay retailer today</div>
      <header className={`nav ${scrolled ? 'nav--float' : ''}`}>
        <Link href="/#top" className="logo">Money<span>Pay</span></Link>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([l, to]) => (
            <Link key={l} href={to} className={to === path ? 'is-active' : ''} onClick={() => setOpen(false)}>{l}</Link>
          ))}
          <Button href="/contact" variant="green" onClick={() => setOpen(false)}>Get started</Button>
        </nav>
        <button className={`burger ${open ? 'is-open' : ''}`} aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </header>
    </>
  )
}
