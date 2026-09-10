import { ICONS } from './icons.jsx'

export default function StatCard({ icon, value, label, detail, source }) {
  const Icon = ICONS[icon]

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card">
      {Icon && <Icon className="h-16 w-16" />}
      <p className="mt-4 font-display text-5xl font-extrabold tracking-tight text-accent-500">{value}</p>
      <p className="mt-2 text-base font-semibold text-charcoal-900">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{detail}</p>
      <p className="mt-4 text-xs font-medium italic text-charcoal-400">— {source}</p>
    </div>
  )
}
