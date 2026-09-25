import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap.js'

// Scroll-triggered blur/fade/rise-in for any element with className="reveal"
// inside `scopeRef`. Re-runs when `deps` change (e.g. route changes), so it
// works across client-side page navigation in the same <main> scope.
export function useScrollReveal(scopeRef, deps = []) {
  useGSAP(
    () => {
      const targets = gsap.utils.toArray('.reveal', scopeRef.current)
      if (!targets.length) return

      gsap.set(targets, { y: 28, autoAlpha: 0, filter: 'blur(6px)' })

      ScrollTrigger.batch(targets, {
        start: 'top 85%',
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            y: 0,
            autoAlpha: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            overwrite: true,
          }),
      })
    },
    { scope: scopeRef, dependencies: deps, revertOnUpdate: true },
  )
}
