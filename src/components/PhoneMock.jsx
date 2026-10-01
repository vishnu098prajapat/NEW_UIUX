// Realistic app mockup. Everything inside scales with the phone via container units (cqw).

const I = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props} />
)

const icons = {
  aeps: (<I><path d="M6 14c0-4 2.5-7 6-7s6 3 6 7" /><path d="M9 15c0-2.5 1.2-4 3-4s3 1.5 3 4v2" /><path d="M12 13v6" /><path d="M4 9V6a2 2 0 0 1 2-2h3M20 9V6a2 2 0 0 0-2-2h-3M4 15v3a2 2 0 0 0 2 2h3M20 15v3a2 2 0 0 1-2 2h-3" /></I>),
  dmt: (<I><path d="M4 8h13m-4-4 4 4-4 4" /><path d="M20 16H7m4-4-4 4 4 4" /></I>),
  recharge: (<I><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M12.5 8 10 12.5h4L11.5 17" /></I>),
  bbps: (<I><path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z" /><path d="M9 8h6M9 12h6" /></I>),
  atm: (<I><rect x="3" y="6" width="18" height="12" rx="2.5" /><path d="M3 10h18M7 15h4" /></I>),
  shield: (<I><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z" /><path d="m9 12 2 2 4-4" /></I>),
  search: (<I><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></I>),
  bell: (<I><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15Z" /><path d="M10 21h4" /></I>),
  eye: (<I><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></I>),
  plus: (<I><path d="M12 5v14M5 12h14" /></I>),
  up: (<I><path d="M7 17 17 7M9 7h8v8" /></I>),
  home: (<I><path d="M4 11 12 4l8 7v9h-5v-6H9v6H4Z" /></I>),
  clock: (<I><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I>),
  scan: (<I><path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3M4 12h16" /></I>),
  wallet: (<I><path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1Z" /><path d="M4 7l11-3v3M16 14h2" /></I>),
  user: (<I><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></I>),
}

const services = [
  ['AEPS', 'aeps', 'g'], ['DMT', 'dmt', 'o'], ['Recharge', 'recharge', 'p'],
  ['BBPS', 'bbps', 'g'], ['Micro ATM', 'atm', 'o'], ['Insurance', 'shield', 'p'],
]
const txns = [
  ['Mobile Recharge', 'Airtel · 98xxxxxx21', '- ₹299', 'recharge', 'p'],
  ['AEPS Withdrawal', 'SBI · Just now', '+ ₹5,000', 'aeps', 'g'],
  ['Money Transfer', 'HDFC · 2 min ago', '- ₹12,500', 'dmt', 'o'],
]
const tabs = [['Home', 'home'], ['History', 'clock'], ['Scan', 'scan'], ['Wallet', 'wallet'], ['Profile', 'user']]

export default function PhoneMock() {
  return (
    <div className="phone art" aria-hidden="true">
      <span className="phone__btn phone__btn--l1" /><span className="phone__btn phone__btn--l2" /><span className="phone__btn phone__btn--r" />
      <div className="phone__screen">
        {/* status bar */}
        <div className="ps-status">
          <b>9:41</b>
          <span className="ps-island" />
          <span className="ps-sys">
            <svg viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="7" rx="1" /><rect x="10" y="2" width="3" height="10" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" opacity=".35" /></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M2 9a15 15 0 0 1 20 0M5.5 13a10 10 0 0 1 13 0M9 17a5 5 0 0 1 6 0" /></svg>
            <svg viewBox="0 0 28 13" fill="none"><rect x="1" y="1" width="22" height="11" rx="3.5" stroke="currentColor" opacity=".5" /><rect x="3" y="3" width="15" height="7" rx="2" fill="currentColor" /><rect x="24.5" y="4.5" width="2.5" height="4" rx="1" fill="currentColor" opacity=".5" /></svg>
          </span>
        </div>

        {/* header */}
        <div className="ps-head">
          <span className="ps-avatar">R</span>
          <div><small>Good morning</small><strong>Ramesh Kumar</strong></div>
          <span className="ps-bell">{icons.bell}<i /></span>
        </div>

        {/* search */}
        <div className="ps-search">
          {icons.search}
          <span className="ps-typing">Search services, bills…</span>
        </div>

        {/* wallet */}
        <div className="ps-wallet">
          <span className="ps-wallet__shine" />
          <div className="ps-wallet__row"><small>Wallet balance</small><span>{icons.eye}</span></div>
          <strong>₹24,580<em>.50</em></strong>
          <div className="ps-wallet__btns">
            <span className="ps-btn ps-btn--o">{icons.plus} Add money</span>
            <span className="ps-btn">{icons.up} Withdraw</span>
          </div>
        </div>

        {/* services */}
        <div className="ps-title"><b>Services</b><span>See all</span></div>
        <div className="ps-grid">
          {services.map(([n, ic, c]) => (
            <div key={n}><i className={`ps-ic ps-ic--${c}`}>{icons[ic]}</i><span>{n}</span></div>
          ))}
        </div>

        {/* recent */}
        <div className="ps-title"><b>Recent</b><span>View all</span></div>
        <div className="ps-list">
          {txns.map(([t, s, a, ic, c]) => (
            <div key={t}>
              <i className={`ps-ic ps-ic--${c} ps-ic--sm`}>{icons[ic]}</i>
              <p><b>{t}</b><small>{s}</small></p>
              <em className={a.startsWith('+') ? 'pos' : ''}>{a}</em>
            </div>
          ))}
        </div>

        {/* tab bar */}
        <div className="ps-tabs">
          {tabs.map(([n, ic], i) => (
            <span key={n} className={i === 0 ? 'on' : ''}>{icons[ic]}<small>{n}</small></span>
          ))}
        </div>
        <span className="ps-home" />
      </div>
      <span className="phone__gloss" />
    </div>
  )
}
