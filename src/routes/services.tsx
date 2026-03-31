import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
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
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-display text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
