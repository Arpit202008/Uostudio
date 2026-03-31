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
      <main className="pt-8 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            aria-label="Back to Home"
          >
            <ArrowLeft size={24} strokeWidth={3} className="text-white" />
          </Link>
        </div>
        <ServicesSection />
      </main>
      <Footer showLogo={false} />
    </div>
  )
}
