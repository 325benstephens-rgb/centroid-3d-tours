import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import Button from './Button.jsx'
import { BUSINESS_NAME, NAV_LINKS, PRIMARY_CTA } from '../content/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.08)]' : 'border-b border-charcoal-100'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/icons/logo.jpg" alt="" className="h-10 w-10 flex-none rounded-lg object-contain" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-extrabold tracking-tight text-charcoal-900">{BUSINESS_NAME}</span>
            <span className="font-display text-sm font-bold italic text-accent-500">in st. louis</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-charcoal-900' : 'text-charcoal-500 hover:text-charcoal-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to={PRIMARY_CTA.to} variant="primary">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-200 shadow-card transition-shadow hover:shadow-lift lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-charcoal-900 transition-transform ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-charcoal-900 transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-4 bg-charcoal-900 transition-transform ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-charcoal-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 text-base font-semibold ${
                    isActive ? 'bg-charcoal-50 text-charcoal-900' : 'text-charcoal-500'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to={PRIMARY_CTA.to} variant="primary" className="mt-3 w-full" onClick={() => setOpen(false)}>
              {PRIMARY_CTA.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
