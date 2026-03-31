import { createFileRoute } from '@tanstack/react-router'
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
