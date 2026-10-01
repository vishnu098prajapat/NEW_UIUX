import { Link } from '../router'
import Button from '../components/Button'
import { legalDocs, COMPANY } from './legalData'
import useReveal from '../useReveal'

const tabs = Object.values(legalDocs)

// Keep each section brief: one paragraph and a short list.
const short = (body) => {
  let p = 0, l = 0
  return body.filter((b) => (typeof b === 'string' ? p++ < 1 : l++ < 1)).map((b) => (typeof b === 'string' ? b : { list: b.list.slice(0, 4) }))
}

export default function Legal({ doc }) {
  const ref = useReveal(0.05)

  return (
    <>
      <section className="lg-hero">
        <div className="lg-hero__bg" aria-hidden="true"><span /><span /></div>
        <p className="eyebrow rise" style={{ '--d': '.05s' }}>{doc.eyebrow}</p>
        <h1 className="mask"><span style={{ '--d': '.15s' }}>{doc.title}</span></h1>
        <p className="lg-hero__meta rise" style={{ '--d': '.5s' }}>
          <i /> Last updated {COMPANY.updated}
        </p>
        <nav className="lg-tabs rise" style={{ '--d': '.65s' }} aria-label="Legal pages">
          {tabs.map((t) => (
            <Link key={t.path} href={t.path} className={t.path === doc.path ? 'on' : ''}>{t.short}</Link>
          ))}
        </nav>
      </section>

      <section className="lg-body reveal" ref={ref}>
        <article className="lg-doc">
          <p className="lg-intro">{doc.intro}</p>
          {doc.sections.map((s, i) => (
            <section key={s.id} id={'lg-' + s.id} className="lg-sec">
              <h2><span>{String(i + 1).padStart(2, '0')}</span>{s.title}</h2>
              {short(s.body).map((b, j) =>
                typeof b === 'string' ? (
                  <p key={j}>{b}</p>
                ) : (
                  <ul key={j}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
                )
              )}
              {s.id === 'contact' && (
                <div className="lg-contact">
                  <div><small>Company</small><strong>{COMPANY.legal}</strong></div>
                  <div><small>Email</small><strong>{COMPANY.email}</strong></div>
                  <div><small>Phone</small><strong>{COMPANY.phone}</strong></div>
                  <div><small>Address</small><strong>{COMPANY.address}</strong></div>
                </div>
              )}
            </section>
          ))}

          <div className="lg-help">
            <div>
              <h3>Still have a question?</h3>
              <p>Our team is happy to explain anything in plain language.</p>
            </div>
            <Button href="/contact" variant="orange">Contact us</Button>
          </div>
        </article>
      </section>
    </>
  )
}
