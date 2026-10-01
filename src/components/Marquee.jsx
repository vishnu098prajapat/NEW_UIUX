const words = ['AEPS', 'Money Transfer', 'Mobile Recharge', 'BBPS Bill Pay', 'Micro ATM', 'Insurance']

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((k) => (
          <div className="marquee__row" key={k}>
            {[...words, ...words].map((w, i) => (
              <span key={i}>{w}<b>✦</b></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
