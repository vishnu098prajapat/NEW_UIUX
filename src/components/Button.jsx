import { useMagnetic } from '../useReveal'
import { Link } from '../router'

// variant: green | orange | ghost | cream
export default function Button({ href = '#', variant = 'green', children, ...rest }) {
  const m = useMagnetic(0.25)
  return (
    <Link href={href} className={`btn btn--${variant}`} {...m} {...rest}>
      <span className="btn__label">{children}</span>
      <span className="btn__arrow" aria-hidden="true">→</span>
    </Link>
  )
}
