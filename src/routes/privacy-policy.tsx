import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 md:px-12 selection:bg-white/20">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <ArrowLeft size={16} />
          Back to Studio
        </Link>

        <article>
          <header className="mb-14 border-b border-white/10 pb-10">
            <div className="flex items-center gap-4 text-xs text-white/40 mb-6 uppercase tracking-widest" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span>Legal</span>
              <span>·</span>
              <span>Last Updated: Mar 2026</span>
            </div>

            <h1 
              className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-8 leading-tight"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              Privacy Policy – UOStudio
            </h1>
          </header>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-white/80 prose-a:hover:text-white prose-p:text-white/70 prose-p:leading-relaxed prose-p:font-light mb-20"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              '--tw-prose-headings': 'white',
              '--tw-prose-body': 'rgba(255,255,255,0.7)',
            } as React.CSSProperties}
          >
            <p>At UOStudio, we respect your privacy and are committed to protecting any information you may provide while using our website.</p>

            <h3>1. Information We Collect</h3>
            <p>We may collect basic information such as your name, email address, or any details you provide through contact forms.</p>

            <h3>2. How We Use Your Information</h3>
            <p>We use the collected information to:</p>
            <ul>
              <li>Improve our website and user experience</li>
              <li>Respond to user inquiries</li>
              <li>Provide updates and relevant content</li>
            </ul>

            <h3>3. Cookies</h3>
            <p>Our website may use cookies to enhance user experience and analyze traffic.</p>

            <h3>4. Third-Party Services</h3>
            <p>We may use third-party services such as Google AdSense in the future, which may use cookies to serve ads based on user visits.</p>

            <h3>5. Data Protection</h3>
            <p>We take reasonable measures to protect your information but cannot guarantee absolute security.</p>

            <h3>6. User Consent</h3>
            <p>By using our website, you consent to our Privacy Policy.</p>

            <h3>7. Updates</h3>
            <p>We may update this policy from time to time. Changes will be posted on this page.</p>

            <h3>8. Contact Us</h3>
            <p>If you have any questions, contact us at: <a href="mailto:thecompanyuo@gmail.com">thecompanyuo@gmail.com</a></p>
          </div>
        </article>
      </div>
    </div>
  )
}
