import { createFileRoute } from '@tanstack/react-router'
import { ServicesSection, Footer, useScrollReveal } from './index'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Our Services | UOstudio' },
      { name: 'description', content: 'Explore UOstudio game development capabilities, from 2D world building to multiplayer logic.' },
      { property: 'og:title', content: 'Our Services | UOstudio' },
      { property: 'og:description', content: 'Explore UOstudio game development capabilities, from 2D world building to multiplayer logic.' },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  useScrollReveal()
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="pt-24 min-h-[80vh]">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
