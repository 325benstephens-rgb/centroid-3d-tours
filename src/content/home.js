export const HERO = {
  heading: '3D Property Tours + Condition Documentation',
  // Segments render inline; set `highlight: true` on the parts that should
  // show in the accent color (see src/pages/Home.jsx).
  tagline: [
    { text: 'Professional ' },
    { text: 'virtual tours', highlight: true },
    { text: ' & documentation for ' },
    { text: 'insurance claims', highlight: true },
    { text: ' and ' },
    { text: 'tenant damage', highlight: true },
    { text: ' disputes' },
  ],
  primaryCta: { label: 'Book a Tour', to: '/contact' },
}

// Small caption shown next to the "Sample Tour" label above the placeholder.
export const SAMPLE_TOUR_NOTE = 'Shot with a Ricoh Theta X 360 camera'

export const HOW_IT_WORKS = [
  {
    icon: 'calendar',
    step: '01',
    title: 'Book your shoot',
    description: 'Tell us the property and roughly how many bedrooms — we\'ll get you on the schedule fast.',
  },
  {
    icon: 'camera',
    step: '02',
    title: 'We capture everything',
    description: 'A full 360° walkthrough on a Ricoh Theta X, plus room-by-room condition notes as we go.',
  },
  {
    icon: 'link',
    step: '03',
    title: 'Get your tour & report',
    description: 'A hosted tour link ready for your listing, and dated documentation ready for insurance or a move-out dispute.',
  },
]

export const HOME_CTA_BANNER = {
  heading: 'Know exactly what a unit looked like before the tenant moved in.',
  subheading: 'Flat fee. No subscriptions. Fast turnaround.',
  cta: { label: 'Book a Tour', to: '/contact' },
}
