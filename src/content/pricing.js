export const PRICING_INTRO = {
  heading: 'Simple, transparent pricing',
  subheading: 'One flat rate by bedroom count.',
}

export const PRICING_TIERS = [
  {
    name: '1–3 Bedrooms',
    price: '$75',
    priceNote: 'per property',
    description: 'Single-family homes and smaller units.',
    icon: '/icons/home-small.png',
  },
  {
    name: '4–6 Bedrooms',
    price: '$125',
    priceNote: 'per property',
    description: 'Larger single-family homes and small multi-unit properties.',
    icon: '/icons/home-mid.png',
  },
  {
    name: '7+ Bedrooms',
    price: '$175',
    priceNote: 'per property',
    description: 'Multi-family and larger rental properties.',
    icon: '/icons/apartment-building.png',
  },
]

// The single "what's included" list — shown once below the price tiers here,
// and reused as-is on the Services page so both stay in sync.
export const PRICING_INCLUDED = [
  '360° tour, shot on a Ricoh Theta X',
  'Dated, room-by-room condition documentation',
  'AI-generated property listing description, ready to use or edit',
  '2D floor plan generated from the same walkthrough',
]

export const PRICING_FOOTNOTE =
  'Priced by bedroom count, not sale price or square footage. Serving the Greater St. Louis Metro Area — reach out if you’re just outside it.'

export const PRICING_CTA = { label: 'Book a Tour', to: '/contact' }
