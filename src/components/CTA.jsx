import useReveal from '../useReveal'
import Button from './Button'
import { Fern } from './Art'

export default function CTA() {
  const ref = useReveal()
  return (
    <section className="cta reveal" id="partner" ref={ref}>
      <div className="cta__card">
        <Fern className="cta__fern" />
        <div className="cta__text">
          <p className="eyebrow">Become a partner</p>
          <h2>Grow your business with <em>MoneyPay.</em></h2>
        </div>
        <Button href="/contact" variant="orange">Join as retailer</Button>
      </div>
    </section>
  )
}
