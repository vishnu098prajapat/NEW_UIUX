import useReveal, { useCount } from '../useReveal'

function Stat({ to, suffix = '', label }) {
  const [ref, val] = useCount(to, 2200)
  return (
    <li ref={ref}>
      <strong>{val}<b>{suffix}</b></strong>
      <span>{label}</span>
      <i style={{ '--p': `${(val / to) * 100}%` }} />
    </li>
  )
}

export default function Stats() {
  const ref = useReveal()
  return (
    <section className="stats reveal" ref={ref}>
      <p className="eyebrow">At a glance</p>
      <h2>Everything on <em>one login.</em></h2>
      <ul>
        <Stat to={6} label="Services, and growing" />
        <Stat to={1} label="Wallet for all of them" />
        <Stat to={3} label="Steps to get started" />
        <Stat to={6} suffix=" days" label="Support each week" />
      </ul>
    </section>
  )
}
