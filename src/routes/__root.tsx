/**
 * Root layout for UOstudio website.
 * Provides the base HTML shell, loads Google Fonts (Orbitron + Inter),
 * sets page metadata, and injects global scripts/styles.
 */
import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'UOstudio — Game Development Studio' },
      {
        name: 'description',
        content:
          'UOstudio is a premium game development studio crafting immersive worlds, unforgettable experiences, and next-generation interactive entertainment.',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
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
      <body className="bg-black text-white overflow-x-hidden">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
