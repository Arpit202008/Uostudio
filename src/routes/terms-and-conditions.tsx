import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/terms-and-conditions')({
  head: () => ({
    meta: [
      { title: 'Terms & Conditions | UOstudio' },
      { name: 'description', content: 'Our standard terms and conditions for using UOstudio services.' },
      { name: 'application-name', content: 'UOstudio' },
      { property: 'og:site_name', content: 'UOstudio' },
    ],
  }),
  component: TermsAndConditions,
})

function TermsAndConditions() {
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
              Terms & Conditions – UOStudio
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
            <p>Welcome to UOStudio. By accessing our website, you agree to the following terms and conditions.</p>

            <h3>1. Use of Website</h3>
            <p>You agree to use this website only for lawful purposes and not to engage in any activity that may harm the website.</p>

            <h3>2. Intellectual Property</h3>
            <p>All content on this website, including text, graphics, and logos, is the property of UOStudio unless stated otherwise.</p>

            <h3>3. Content Accuracy</h3>
            <p>We do not guarantee that all information on the website is accurate or up-to-date.</p>

            <h3>4. External Links</h3>
            <p>Our website may contain links to third-party websites. We are not responsible for their content.</p>

            <h3>5. Limitation of Liability</h3>
            <p>UOStudio will not be liable for any damages arising from the use of this website.</p>

            <h3>6. Changes to Terms</h3>
            <p>We reserve the right to update these terms at any time.</p>

            <h3>7. Acceptance of Terms</h3>
            <p>By using this website, you agree to these terms and conditions.</p>

            <h3>8. Contact Information</h3>
            <p>For any queries, contact us at: <a href="mailto:thecompanyuo@gmail.com">thecompanyuo@gmail.com</a></p>
          </div>
        </article>
      </div>
    </div>
  )
}
