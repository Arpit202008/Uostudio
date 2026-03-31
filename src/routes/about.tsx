import { createFileRoute } from '@tanstack/react-router'
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
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
