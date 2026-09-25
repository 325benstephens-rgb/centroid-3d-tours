import SEO from '../components/SEO.jsx'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PricingCard from '../components/PricingCard.jsx'
import Button from '../components/Button.jsx'
import { PRICING_INTRO, PRICING_TIERS, PRICING_INCLUDED, PRICING_FOOTNOTE, PRICING_CTA } from '../content/pricing.js'

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Centroid 3D Tours"
        description="Flat-rate pricing for St. Louis landlord 3D tours and condition documentation: $75 for 1–3 bedrooms, $125 for 4–6, $175 for 7+. No subscriptions, no contracts."
      />

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="center"
            heading={PRICING_INTRO.heading}
            subheading={PRICING_INTRO.subheading}
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>

          <div className="reveal mx-auto mt-6 max-w-5xl rounded-3xl bg-white p-8 ring-1 ring-charcoal-200 sm:p-10">
            <h3 className="font-display text-lg font-bold text-charcoal-900">Every tour includes</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {PRICING_INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-50">
                    <svg viewBox="0 0 12 12" className="h-3 w-3 text-accent-600" fill="none">
                      <path d="M2 6.5 L4.8 9 L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-charcoal-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <Button to={PRICING_CTA.to} variant="primary">
              {PRICING_CTA.label}
            </Button>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-charcoal-700/60">{PRICING_FOOTNOTE}</p>
          </div>
        </Container>
      </section>
    </>
  )
}
