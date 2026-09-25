import { useRef } from 'react'
import { ICONS } from './icons.jsx'
import { gsap, useGSAP } from '../lib/gsap.js'

// Splits "+14%" -> ['+', '14', '%'], "#1" -> ['#', '1', ''], "60%" -> ['', '60', '%'].
function splitValue(value) {
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  if (!match) return null
  const [, prefix, digits, suffix] = match
  return { prefix, target: Number(digits), suffix }
}

export default function StatCard({ icon, value, label, detail, source }) {
  const Icon = ICONS[icon]
  const valueRef = useRef(null)
  const parsed = splitValue(value)

  useGSAP(
    () => {
      if (!parsed) return
      const counter = { n: 0 }
      gsap.to(counter, {
        n: parsed.target,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          valueRef.current.textContent = `${parsed.prefix}${Math.round(counter.n)}${parsed.suffix}`
        },
        scrollTrigger: { trigger: valueRef.current, start: 'top 90%', once: true },
      })
    },
    { scope: valueRef },
  )

  return (
    <div className="reveal rounded-3xl bg-white p-6 shadow-card">
      {Icon && <Icon className="h-16 w-16" />}
      <p ref={valueRef} className="mt-4 font-display text-5xl font-extrabold tracking-tight text-accent-500">
        {parsed ? `${parsed.prefix}0${parsed.suffix}` : value}
      </p>
      <p className="mt-2 text-base font-semibold text-charcoal-900">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{detail}</p>
      <p className="mt-4 text-xs font-medium italic text-charcoal-400">— {source}</p>
    </div>
  )
}
