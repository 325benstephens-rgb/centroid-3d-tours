import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/icons.jsx'
import { CONTACT_CONTENT } from '../content/contact.js'
import { CONTACT, FORMSPREE_ENDPOINT } from '../content/site.js'

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  address: '',
  bedrooms: CONTACT_CONTENT.inquiryOptions[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (!response.ok) throw new Error('Formspree request failed')

      setStatus('success')
      setForm(EMPTY_FORM)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact | Centroid 3D Tours"
        description="Book a St. Louis 3D property tour and condition documentation shoot. Flat rate by bedroom count, serving landlords across the Greater St. Louis Metro Area."
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading heading={CONTACT_CONTENT.heading} subheading={CONTACT_CONTENT.subheading} />

            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent-50">
                  <PhoneIcon className="h-4 w-4 text-accent-600" />
                </span>
                <div>
                  <p className="font-semibold text-charcoal-900">Phone</p>
                  <a href={CONTACT.phoneHref} className="text-charcoal-700/80 hover:text-charcoal-900">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent-50">
                  <MailIcon className="h-4 w-4 text-accent-600" />
                </span>
                <div>
                  <p className="font-semibold text-charcoal-900">Email</p>
                  <a href={CONTACT.emailHref} className="text-charcoal-700/80 hover:text-charcoal-900">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-accent-50">
                  <MapPinIcon className="h-4 w-4 text-accent-600" />
                </span>
                <div>
                  <p className="font-semibold text-charcoal-900">Service Area</p>
                  <p className="text-charcoal-700/80">{CONTACT.serviceArea}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-charcoal-900/10 sm:p-10">
            {status === 'success' && (
              <div className="mb-6 rounded-xl bg-accent-50 px-4 py-3 text-sm font-medium text-accent-700">
                Thanks — your request is in. We'll follow up within a business day.
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Something went wrong sending that — please try again, or reach out directly using the info to the
                left.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
              <Field label="Property Address" name="address" value={form.address} onChange={handleChange} />

              <div className="sm:col-span-2">
                <label htmlFor="bedrooms" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  value={form.bedrooms}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-charcoal-900/15 bg-paper px-4 py-2.5 text-sm text-charcoal-900 focus:border-charcoal-600 focus:outline-none focus:ring-1 focus:ring-charcoal-600"
                >
                  {CONTACT_CONTENT.inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-charcoal-900/15 bg-paper px-4 py-2.5 text-sm text-charcoal-900 focus:border-charcoal-600 focus:outline-none focus:ring-1 focus:ring-charcoal-600"
                  placeholder="Tell us a bit about the property and timeline."
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full disabled:opacity-60 sm:w-auto"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Request'}
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-charcoal-800">
        {label}
        {required && <span className="text-accent-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-charcoal-900/15 bg-paper px-4 py-2.5 text-sm text-charcoal-900 focus:border-charcoal-600 focus:outline-none focus:ring-1 focus:ring-charcoal-600"
      />
    </div>
  )
}
