import useReveal from '../useReveal'

const need = ['Aadhaar & PAN', 'Bank account', 'Shop details', 'Smartphone']
const steps = [
  ['01', 'Register', 'Sign up as a retailer and complete quick KYC verification.'],
  ['02', 'Load wallet', 'Add funds to your MoneyPay wallet and activate the services you need.'],
  ['03', 'Earn', 'Serve customers with AEPS, DMT, recharge and bills — earn on every transaction.'],
]

export default function Process() {
  const ref = useReveal()
  return (
    <section className="section process reveal" id="how" ref={ref}>
      <div className="process__results">
        <p className="eyebrow">How it works</p>
        <h2>Start earning in <em>3 steps</em></h2>
        <p className="lead">Simple onboarding. Keep these handy:</p>
        <ul className="need">
          {need.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </div>

      <ol className="steps">
        {steps.map(([n, t, d], i) => (
          <li key={n} style={{ '--i': i }}>
            <span className="steps__n">{n}</span>
            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
