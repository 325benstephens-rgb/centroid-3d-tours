export default function SectionHeading({ eyebrow, heading, subheading, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const eyebrowColor = light ? 'text-white/80' : 'text-accent-600'
  const headingColor = light ? 'text-white' : 'text-charcoal-900'
  const subheadingColor = light ? 'text-white/80' : 'text-charcoal-500'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`mb-3 text-base font-semibold ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2 className={`font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${headingColor}`}>
        {heading}
      </h2>
      {subheading && (
        <p className={`mt-4 text-lg leading-relaxed ${subheadingColor}`}>{subheading}</p>
      )}
    </div>
  )
}
