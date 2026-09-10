import SEO from '../components/SEO.jsx'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatCard from '../components/StatCard.jsx'
import { ICONS } from '../components/icons.jsx'
import { HERO, HOW_IT_WORKS, HOME_CTA_BANNER, SAMPLE_TOUR_NOTE } from '../content/home.js'
import { STATS } from '../content/stats.js'
import { SOCIAL_PROOF_NOTE } from '../content/site.js'
import { RICOH360_TOUR_URL } from '../content/sampleTour.js'

export default function Home() {
  return (
    <>
      <SEO
        title="Centroid 3D Tours | St. Louis 3D Tours & Landlord Property Documentation"
        description="St. Louis 3D property tours and dated condition documentation for landlords — listing-ready tours plus documentation for insurance claims and tenant damage disputes. Flat fee by bedroom count, no subscriptions."
        keywords="St. Louis 3D tours, St. Louis landlord property documentation, rental property tours St. Louis"
      />

      {/* Hero + Sample Tour */}
      <section className="overflow-hidden bg-white">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-charcoal-900 sm:text-5xl">
              {HERO.heading}
            </h1>
            <p className="mt-4 font-display text-xl font-bold text-charcoal-700">
              {HERO.tagline.map((part, i) => (
                <span key={i} className={part.highlight ? 'text-accent-500' : undefined}>
                  {part.text}
                </span>
              ))}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={HERO.primaryCta.to} variant="primary">
                {HERO.primaryCta.label}
              </Button>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-charcoal-400">{SOCIAL_PROOF_NOTE}</p>
          </div>

          <div className="w-full">
            <p className="mb-3 text-sm font-semibold text-charcoal-500">
              Sample Tour <span className="font-normal text-charcoal-400">— {SAMPLE_TOUR_NOTE}</span>
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-[32px] bg-charcoal-900">
              {RICOH360_TOUR_URL ? (
                // Set in src/content/sampleTour.js once a tour is published with RICOH360 Tours.
                <iframe
                  src={RICOH360_TOUR_URL}
                  title="Centroid 3D Tours — sample 360° walkthrough"
                  allow="xr-spatial-tracking; gyroscope; accelerometer"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-accent-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-400" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-white pb-16 sm:pb-24">
        <Container>
          <SectionHeading eyebrow="How it works" heading="One shoot, delivered as a tour and a paper trail" />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {HOW_IT_WORKS.map((item) => {
              const Icon = ICONS[item.icon]
              return (
                <div
                  key={item.step}
                  className="flex flex-col rounded-3xl border border-charcoal-100 bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-lift"
                >
                  {Icon && <Icon className="h-20 w-20" />}
                  <span className="mt-5 font-display text-2xl font-extrabold text-accent-500">{item.step}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-charcoal-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal-500">{item.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Why it matters / stats */}
      <section className="bg-charcoal-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why it matters"
            heading="The data"
            subheading="Whether you're marketing a unit or documenting it for an insurance claim or tenant damage dispute, the data backs it up."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA banner */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-[32px] bg-accent-500 px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {HOME_CTA_BANNER.heading}
            </h2>
            <p className="text-lg text-white/90">{HOME_CTA_BANNER.subheading}</p>
            <Button to={HOME_CTA_BANNER.cta.to} variant="inverted">
              {HOME_CTA_BANNER.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
