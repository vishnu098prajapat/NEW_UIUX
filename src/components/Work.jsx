import useReveal, { useTilt } from '../useReveal'
import Button from './Button'

function Tile({ className, children }) {
  const tilt = useTilt(6)
  return (
    <article className={`tile tilt ${className}`} {...tilt}>
      <span className="tile__glare" />
      {children}
    </article>
  )
}

export default function Work() {
  const ref = useReveal()
  return (
    <section className="section section--tint reveal" id="platform" ref={ref}>
      <header className="section__head center">
        <p className="eyebrow">Platform</p>
        <h2>Tools for the <em>retailer</em></h2>
      </header>

      <div className="bento">
        <Tile className="tile--hero">
          <p className="eyebrow">Retailer dashboard</p>
          <h3>One dashboard,<br />every service</h3>
          <p>Manage wallet, transactions, commissions and reports from a single clean screen.</p>
          <div className="row">
            <Button href="/contact" variant="cream">See how it works</Button>
          </div>
        </Tile>

        <Tile className="tile--orange">
          <p className="eyebrow">Commission</p>
          <h3>Earn on every<br />transaction</h3>
          <p>Each service you offer adds to your commission.</p>
          <span className="pill">All services</span>
          <svg className="wave" viewBox="0 0 300 120" preserveAspectRatio="none"><path d="M0 80C60 20 110 120 170 70S260 10 300 50V120H0Z" /></svg>
        </Tile>

        <Tile className="tile--sun">
          <p className="eyebrow">Support</p>
          <h3>Real people,<br />real help</h3>
          <p>Call or WhatsApp our team, Monday to Saturday.</p>
          <span className="glow-dot" />
        </Tile>

        <Tile className="tile--emerald">
          <p className="eyebrow">Security</p>
          <h3>Your data,<br />protected</h3>
          <p>Access controls and encrypted connections.</p>
          <span className="capsule" />
          <span className="shine" />
        </Tile>

        <Tile className="tile--white">
          <h3>Full statement</h3>
          <p>Every transaction and commission, listed in one place.</p>
        </Tile>

        <Tile className="tile--wide">
          <h3>Simple wallet</h3>
          <p>Load once, use across all services.</p>
        </Tile>
      </div>
    </section>
  )
}
