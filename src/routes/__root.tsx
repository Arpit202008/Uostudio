import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { HeaderNav } from '@/components/HeaderNav'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'UOstudio — Game Development & Design Studio' },
      {
        name: 'description',
        content:
          'UOstudio is a premium game development studio crafting immersive worlds, unforgettable experiences, and next-generation interactive entertainment.',
      },
      // Open Graph tags
      { property: 'og:site_name', content: 'UOstudio' },
      { property: 'og:title', content: 'UOstudio — Game Development Studio' },
      { property: 'og:description', content: 'UOstudio is an independent game development studio creating next-generation interactive entertainment & immersive 2D worlds.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://uostudio.in' },
      { property: 'og:image', content: 'https://uostudio.in/logo.jpg' },
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'UOstudio — Game Development Studio' },
      { name: 'twitter:description', content: 'UOstudio is a premium game development studio.' },
      { name: 'twitter:image', content: 'https://uostudio.in/logo.jpg' }
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/jpeg', href: '/logo.jpg', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/logo.jpg' },
      // Google Fonts: Orbitron (futuristic display font) + Inter (clean body font)
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap',
      },
    ],
    scripts: [
      // Schema.org JSON-LD (WebSite + Organization)
      {
        type: 'application/ld+json',
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "UOstudio",
            "url": "https://uostudio.in/"
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "UOstudio",
            "url": "https://uostudio.in",
            "logo": "https://uostudio.in/logo.jpg",
            "email": "thecompanyuo@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          }
        ]),
      },
      // Google Analytics (GA4)
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-C6T9VQCRE3',
        async: true,
      },
      {
        type: 'text/javascript',
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C6T9VQCRE3');
        `,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      {/* Dark background applied at body level for the premium monochrome theme */}
      <body className="bg-black text-white overflow-x-hidden min-h-screen flex flex-col">
        <HeaderNav />
        <main className="flex-grow">
          {children}
        </main>
        <Scripts />
      </body>
    </html>
  )
}
