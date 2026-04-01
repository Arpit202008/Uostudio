import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/src/public/src/routes/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    }).then(() => setSubmitted(true))
  }

  if (submitted) return <div className="p-20 text-center"><h2>Message Sent!</h2></div>

  return (
    <div className="max-w-2xl mx-auto py-20">
      <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 bg-zinc-900 border border-zinc-800" />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 bg-zinc-900 border border-zinc-800" />
        <textarea name="message" placeholder="Message" required className="w-full p-2 bg-zinc-900 border border-zinc-800" rows={5} />
        <button type="submit" className="px-6 py-2 bg-white text-black font-bold">Send Message</button>
      </form>
    </div>
  )
}
