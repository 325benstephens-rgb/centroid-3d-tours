import SEO from '../components/SEO.jsx'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { ABOUT_CONTENT } from '../content/about.js'

export default function About() {
  return (
    <>
      <SEO
        title="About | Centroid 3D Tours"
        description="Centroid 3D Tours is a St. Louis-based 3D property tour and condition documentation service run by a Washington University student with a real estate and urban design background."
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container className="max-w-3xl">
          <div className="reveal flex items-center gap-4">
            <img src="/icons/logo.jpg" alt="" className="h-14 w-14 flex-none rounded-2xl object-contain" />
            <SectionHeading heading={ABOUT_CONTENT.heading} />
          </div>

          <p className="reveal mt-8 text-lg font-medium leading-relaxed text-charcoal-900">{ABOUT_CONTENT.intro}</p>

          <div className="mt-6 space-y-5">
            {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
              <p key={i} className="reveal text-base leading-relaxed text-charcoal-700/80">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="reveal mt-8 border-t border-charcoal-900/10 pt-6 text-sm font-semibold uppercase tracking-wide text-charcoal-600">
            {ABOUT_CONTENT.closing}
          </p>
        </Container>
      </section>
    </>
  )
}
