import useReveal, { useTilt } from '../useReveal'
import { Fingerprint, Transfer, Phone, Bill, Atm, Shield, Leaf } from './Art'

export const items = [
  { tone: 'peach', t: 'AEPS', d: 'Aadhaar-enabled cash withdrawal, balance enquiry and mini statement.', art: <Fingerprint /> },
  { tone: 'coral', t: 'DMT', d: 'Send money to any bank account, right from the counter.', art: <Transfer /> },
  { tone: 'sage', t: 'Recharge', d: 'Mobile, DTH and data card recharge in seconds.', art: (<><Leaf className="a-leaf" /><Phone /></>) },
  { tone: 'sage', t: 'BBPS', d: 'Electricity, water, gas, broadband and more — one place.', art: <Bill /> },
  { tone: 'peach', t: 'Micro ATM', d: 'Card-based cash withdrawal right at the retail counter.', art: <Atm /> },
  { tone: 'coral', t: 'Insurance', d: 'Simple insurance and protection plans for your customers.', art: <Shield /> },
]

export function Folder({ tone, t, d, art, i }) {
  const tilt = useTilt(7)
  return (
    <article className={`folder folder--${tone} tilt`} style={{ '--i': i % 3 }} {...tilt}>
      <div className="folder__tab" />
      <div className="folder__body">
        <h3>{t}</h3>
        <p>{d}</p>
        <div className="folder__art">{art}</div>
        <span className="folder__go">Enquire →</span>
      </div>
    </article>
  )
}

export default function Services() {
  const ref = useReveal(0.08)
  return (
    <section className="section reveal" id="services" ref={ref}>
      <header className="section__head center">
        <p className="eyebrow">Our services</p>
        <h2>Services for <em>every counter</em></h2>
        <p className="lead">Offer the ones your customers ask for, and add more as you grow.</p>
      </header>
      <div className="folders">
        {items.map((it, i) => <Folder key={it.t} {...it} i={i} />)}
      </div>
    </section>
  )
}
