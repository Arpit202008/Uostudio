import { useState, useEffect } from 'react'
import { Link, useLocation } from '@tanstack/react-router'

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const scrollToHero = () => {
    if (location.pathname === '/') {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Works', path: '/works' },
    { label: 'Founder', path: '/founder' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300"
      style={{ borderBottomColor: scrolled ? 'rgba(255,255,255,0.1)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={scrollToHero}
          className="flex items-center gap-3 group cursor-pointer"
          aria-label="UOstudio home"
        >
          <img src="/logo.jpg" alt="UOStudio logo" className="w-8 h-8 rounded-sm object-cover" />
          <span
            className="font-display font-bold text-white tracking-widest text-sm uppercase"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            UOStudio
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className="nav-link cursor-pointer bg-transparent border-none p-0 text-white hover:text-white/70 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className="nav-link cursor-pointer bg-transparent border-none p-0 text-white hover:text-white/70 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-white/5 px-6 py-6 border-b border-white/10 shadow-2xl">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="nav-link cursor-pointer bg-transparent border-none text-base text-white w-full block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="nav-link cursor-pointer bg-transparent border-none text-base text-white w-full block"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
