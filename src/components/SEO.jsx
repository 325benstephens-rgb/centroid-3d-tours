import { useEffect } from 'react'

// Lightweight, dependency-free per-page SEO tags. Sets document.title and
// the meta description/keywords on mount.
//
// Note: this is a client-rendered SPA, so these tags are only present after
// JS runs — fine for Google, but not for tools that don't execute JS (some
// social-media link previews, for example). If that starts to matter,
// consider pre-rendering the built site (e.g. `vite-plugin-prerender`) or
// moving to a static-site-generation framework later.
export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }

    if (keywords) {
      let tag = document.querySelector('meta[name="keywords"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'keywords')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', keywords)
    }
  }, [title, description, keywords])

  return null
}
