import SEO from '../components/SEO.jsx'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import { LANDLORD_SERVICE } from '../content/services.js'

export default function Services() {
  return (
    <>
      <SEO
        title="Services | St. Louis Landlord Property Documentation — Centroid 3D Tours"
        description="3D tour plus dated condition documentation for St. Louis landlords. Flat fee by bedroom count, fast turnaround, no subscriptions."
        keywords="St. Louis landlord property documentation, rental property tours St. Louis"
      />

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl">
              {LANDLORD_SERVICE.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-500">{LANDLORD_SERVICE.description}</p>
            <Button to={LANDLORD_SERVICE.cta.to} variant="primary" className="mt-8 w-fit">
              {LANDLORD_SERVICE.cta.label}
            </Button>
          </div>

          <div>
            <p className="mb-3 text-base font-semibold text-accent-600">Services</p>
            <ul className="space-y-4">
              {LANDLORD_SERVICE.included.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-50">
                    <svg viewBox="0 0 12 12" className="h-3 w-3 text-accent-600" fill="none">
                      <path d="M2 6.5 L4.8 9 L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
