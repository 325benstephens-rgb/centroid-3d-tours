import SEO from '../components/SEO.jsx'
import Container from '../components/Container.jsx'
import { SAMPLE_TOUR_CONTENT, RICOH360_TOUR_URL } from '../content/sampleTour.js'

export default function SampleTour() {
  return (
    <>
      <SEO
        title="Sample 3D Tour | Centroid 3D Tours"
        description="Preview the format of a Ricoh Theta X 360° property tour used for St. Louis landlord listing and condition documentation."
      />

      <section className="bg-paper py-16 sm:py-20">
        {/* Intentionally full-bleed: no Container wrapper, so this spans the entire viewport width. */}
        <div className="relative aspect-video w-full overflow-hidden bg-charcoal-900">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-accent-400">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-400" />
              </div>
              <p className="font-display text-lg font-semibold text-white">Sample 360° tour coming soon</p>
              <p className="max-w-sm text-sm text-charcoal-200">
                This space will hold a live, embedded RICOH360 Tours walkthrough of an actual property.
              </p>
            </div>
          )}
        </div>

        <Container>
          <div className="reveal mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-8 ring-1 ring-charcoal-900/10">
            <h3 className="font-display text-xl font-semibold text-charcoal-900">
              What you'll see in a full tour
            </h3>
            <ul className="mt-5 space-y-3">
              {SAMPLE_TOUR_CONTENT.whatYoullSee.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700/80">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
