export default function PricingCard({ tier }) {
  const { name, price, priceNote, description, icon } = tier

  return (
    <div className="reveal flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-charcoal-200 transition-shadow duration-200 hover:shadow-lift">
      <div className="flex-1">
        {icon && <img src={icon} alt="" className="h-24 w-24 object-contain" />}
        <h3 className="mt-4 font-display text-2xl font-bold text-charcoal-900">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-500">{description}</p>
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-extrabold tracking-tight text-accent-500">{price}</span>
        <span className="text-sm text-charcoal-500">{priceNote}</span>
      </div>
    </div>
  )
}
