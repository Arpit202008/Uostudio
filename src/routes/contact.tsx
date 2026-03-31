import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { ContactSection, Footer, useScrollReveal } from './index'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | UOstudio' },
      {
        name: 'description',
        content: 'Get in touch with UOstudio for project collaborations, game development inquiries, and design services.',
      },
      { property: 'og:title', content: 'Contact Us | UOstudio' },
      { property: 'og:description', content: 'Get in touch with UOstudio for project collaborations, game development inquiries, and design services.' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
