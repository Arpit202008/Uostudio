import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { ContactSection, Footer, useScrollReveal } from './index'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | UOStudio' },
      {
        name: 'description',
        content: 'Get in touch with UOStudio for project collaborations, game development inquiries, and design services.',
      },
      { name: 'application-name', content: 'UOStudio' },
      { property: 'og:site_name', content: 'UOStudio' },
      { property: 'og:title', content: 'Contact Us | UOStudio' },
      { property: 'og:description', content: 'Get in touch with UOStudio for project collaborations, game development inquiries, and design services.' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
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
        <ContactSection />
      </main>
      <Footer showLogo={false} />
    </div>
  )
}
