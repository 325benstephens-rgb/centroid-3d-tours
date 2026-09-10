import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-accent-500 text-white hover:bg-accent-600',
  secondary: 'bg-transparent text-charcoal-900 border border-charcoal-900/25 hover:border-charcoal-900 hover:bg-charcoal-50',
  inverted: 'bg-white text-charcoal-900 hover:bg-charcoal-50',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150 hover:shadow-card ${VARIANTS[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
