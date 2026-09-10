import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import { BUSINESS_NAME, TAGLINE, CONTACT, NAV_LINKS } from '../content/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-100 bg-charcoal-50 text-charcoal-600">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/icons/logo.jpg" alt="" className="h-9 w-9 flex-none rounded-lg object-contain" />
            <p className="font-display text-lg font-extrabold text-charcoal-900">{BUSINESS_NAME}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-500">{TAGLINE}</p>
          <p className="mt-4 text-sm text-charcoal-500">Based in St. Louis, MO</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-charcoal-900">Explore</p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-charcoal-500 hover:text-charcoal-900 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-sm text-charcoal-500 hover:text-charcoal-900 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-charcoal-900">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal-500">
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-charcoal-900 hover:underline">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="hover:text-charcoal-900 hover:underline">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.serviceArea}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-charcoal-900">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal-500">
            <li>
              <Link to="/services" className="hover:text-charcoal-900 hover:underline">
                Tours & documentation
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-charcoal-900 hover:underline">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-charcoal-200 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-charcoal-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>Flat fee. No subscriptions. No long-term contracts.</p>
        </Container>
      </div>
    </footer>
  )
}
