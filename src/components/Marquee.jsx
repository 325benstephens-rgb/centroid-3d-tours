import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap.js'

// Infinite-scrolling text ribbon (the "bright avenue" kinetic-typography move).
// Renders the phrase list twice back to back and loops it -50% so the seam
// is invisible, matching the marquee technique used on the demo sites.
export default function Marquee({ items, className = '', speed = 32 }) {
  const trackRef = useRef(null)

  useGSAP(
    () => {
      gsap.to(trackRef.current, { xPercent: -50, duration: speed, ease: 'none', repeat: -1 })
    },
    { scope: trackRef, dependencies: [speed] },
  )

  const content = (
    <span className="inline-flex items-center">
      {items.map((item, i) => (
        <span key={i} className="mx-6 inline-flex items-center sm:mx-10">
          {item}
          <span className="ml-6 h-2 w-2 flex-none rounded-full bg-accent-500 sm:ml-10" aria-hidden="true" />
        </span>
      ))}
    </span>
  )

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={trackRef} className="inline-flex will-change-transform">
        {content}
        {content}
      </div>
    </div>
  )
}
