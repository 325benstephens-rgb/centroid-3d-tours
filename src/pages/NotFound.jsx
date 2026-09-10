import SEO from '../components/SEO.jsx'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Centroid 3D Tours" />
      <section className="flex min-h-[60vh] items-center bg-paper py-20">
        <Container className="text-center">
          <p className="font-display text-6xl font-semibold text-charcoal-900">404</p>
          <p className="mt-4 text-lg text-charcoal-700/80">That page doesn't exist.</p>
          <Button to="/" variant="primary" className="mt-8 w-fit mx-auto">
            Back to Home
          </Button>
        </Container>
      </section>
    </>
  )
}
