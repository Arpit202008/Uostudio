import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { FounderSection, Footer, useScrollReveal } from './index'

export const Route = createFileRoute('/founder')({
  head: () => ({
    meta: [
      { title: 'The Founder | UOstudio' },
      { name: 'description', content: 'Meet Arpit Chourasia, the founder and lead developer at UOstudio.' },
      { property: 'og:title', content: 'The Founder | UOstudio' },
      { property: 'og:description', content: 'Meet Arpit Chourasia, the founder and lead developer at UOstudio.' },
    ],
  }),
  component: FounderPage,
})

function FounderPage() {
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
        <FounderSection />
      </main>
      <Footer />
    </div>
  )
}
