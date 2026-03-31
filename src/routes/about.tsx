import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { AboutSection, Footer, useScrollReveal } from './index'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | UOstudio' },
      { name: 'description', content: 'Learn about UOstudio, our vision, and our journey building legendary interactive entertainment.' },
      { property: 'og:title', content: 'About Us | UOstudio' },
      { property: 'og:description', content: 'Learn about UOstudio, our vision, and our journey building legendary interactive entertainment.' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
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
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
