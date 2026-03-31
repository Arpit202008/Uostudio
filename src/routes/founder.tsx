import { createFileRoute } from '@tanstack/react-router'
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
        <FounderSection />
      </main>
      <Footer />
    </div>
  )
}
