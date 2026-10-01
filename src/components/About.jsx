import useReveal from '../useReveal'
import { Leaf } from './Art'
import Button from './Button'

export default function About() {
  const ref = useReveal()
  return (
    <section className="section about reveal" id="about" ref={ref}>
      <div className="about__frame">
        <div className="about__photo">
          <span className="sun" />
          <span className="arch" />
          <Leaf className="a-leaf a-leaf--1" />
          <Leaf className="a-leaf a-leaf--2" />
        </div>
        <h2 className="about__name">MoneyPay</h2>
        <ul className="about__roles">
          <li>Digital payments</li><li>Retail network</li>
        </ul>
      </div>

      <div className="about__story">
        <span className="vline" />
        <div>
          <h3>Banking close to <em>home.</em></h3>
          <p>
            MoneyPay brings essential financial services to the neighbourhood shop —
            so anyone can withdraw cash, send money, recharge and pay bills without
            travelling to a bank.
          </p>
          <p>
            We give retailers a fast, reliable platform and the tools to earn on every
            transaction, while customers get simple, trusted service close to home.
          </p>
          <Button href="/contact" variant="green">Talk to us</Button>
        </div>
      </div>
    </section>
  )
}
