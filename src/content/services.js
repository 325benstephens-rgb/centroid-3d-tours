import { PRICING_INCLUDED } from './pricing.js'

export const LANDLORD_SERVICE = {
  title: 'Listing Media & Condition Documentation',
  description:
    'Every shoot is done in person on a Ricoh Theta X and personally reviewed before it reaches you — built to help units lease faster and to give you documentation for insurance claims and tenant damage disputes.',
  // Same list shown under "Every tour includes" on the Pricing page — kept
  // as one shared source (see src/content/pricing.js) so they can't drift.
  included: PRICING_INCLUDED,
  note: null,
  cta: { label: 'Book a Tour', to: '/contact' },
}
