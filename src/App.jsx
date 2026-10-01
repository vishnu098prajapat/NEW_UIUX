import { useEffect } from 'react'
import { Router, useRouter, Link } from './router'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './components/Contact'
import Legal from './pages/Legal'
import { privacy, refund, terms } from './pages/legalData'

const routes = {
  '/': { el: <Home />, title: 'MoneyPay — AEPS, DMT, Recharge & BBPS' },
  '/contact': { el: <Contact />, title: 'Contact us — MoneyPay' },
  '/privacy': { el: <Legal doc={privacy} />, title: 'Privacy Policy — MoneyPay' },
  '/refund': { el: <Legal doc={refund} />, title: 'Refund Policy — MoneyPay' },
  '/terms': { el: <Legal doc={terms} />, title: 'Terms & Conditions — MoneyPay' },
}

function NotFound() {
  return (
    <section className="nf">
      <p className="eyebrow">Error 404</p>
      <h1>Page not <em>found.</em></h1>
      <p className="lead">The page you are looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn btn--green"><span className="btn__label">Back to home</span><span className="btn__arrow">→</span></Link>
    </section>
  )
}

function Pages() {
  const { path } = useRouter()
  const page = routes[path]
  useEffect(() => { document.title = page ? page.title : 'Page not found — MoneyPay' }, [page])
  return <main key={path}>{page ? page.el : <NotFound />}</main>
}

export default function App() {
  return (
    <Router>
      <Cursor />
      <Navbar />
      <Pages />
      <Footer />
    </Router>
  )
}
