import { TOUR_EMBED_URL, SAMPLE_TOUR_VIDEO } from '../content/sampleTour.js'

// Fills its (positioned, sized) parent with the interactive embed if one is set,
// otherwise the walkthrough video, otherwise the page's own placeholder.
export default function TourMedia({ controls = false, placeholder = null }) {
  if (TOUR_EMBED_URL) {
    return (
      <iframe
        src={TOUR_EMBED_URL}
        title="Centroid 3D Tours — sample 3D walkthrough"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
        className="h-full w-full"
      />
    )
  }

  if (SAMPLE_TOUR_VIDEO) {
    return (
      <video
        src={SAMPLE_TOUR_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        controls={controls}
        className="h-full w-full object-cover"
      />
    )
  }

  return placeholder
}
