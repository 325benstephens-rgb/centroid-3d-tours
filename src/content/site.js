// ---------------------------------------------------------------------------
// SITE-WIDE SETTINGS
// This is the one place to change the business name, tagline, and contact
// placeholders. Everything else (header, footer, page copy) reads from here.
// ---------------------------------------------------------------------------

export const BUSINESS_NAME = 'Centroid 3D Tours'

export const TAGLINE = '360° Property Tours & Condition Documentation'

export const CITY = 'St. Louis, MO'

export const CONTACT = {
  phone: '(920) 495-1009',
  phoneHref: 'tel:+19204951009',
  email: '325benstephens@gmail.com',
  emailHref: 'mailto:325benstephens@gmail.com',
  serviceArea: 'Greater St. Louis Metro Area',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Sample Tour', to: '/sample-tour' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
]

export const PRIMARY_CTA = { label: 'Book a Tour', to: '/contact' }

export const SOCIAL_PROOF_NOTE = 'Every property is visited and every report is personally reviewed.'

// ---------------------------------------------------------------------------
// CONTACT FORM BACKEND (Formspree)
// Sign up free at https://formspree.io, create a form, and paste its
// endpoint below (Formspree calls it the form's "endpoint" — it looks like
// https://formspree.io/f/xxxxxxxx). Submissions get emailed to whatever
// address you set as that form's recipient in the Formspree dashboard.
// ---------------------------------------------------------------------------
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnpqwvjy'
