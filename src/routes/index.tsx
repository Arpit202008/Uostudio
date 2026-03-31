/**
 * UOstudio — Main Landing Page
 *
 * A single-page premium website for UOstudio game development studio.
 * Sections: Navigation, Hero, About, Services, Founder, Contact, Footer.
 *
 * Design: Black-and-white monochrome with 3D CSS effects, glassmorphism,
 * scroll-reveal animations, and smooth transitions throughout.
 */

import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { HeaderNav } from '@/components/HeaderNav'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'UOstudio | Game Development & Design Studio' },
      {
        name: 'description',
        content: 'UOstudio is an independent game development studio creating next-generation interactive entertainment & immersive 2D worlds.',
      },
      { property: 'og:title', content: 'UOstudio | Game Development & Design Studio' },
      { property: 'og:description', content: 'UOstudio is an independent game development studio creating next-generation interactive entertainment & immersive 2D worlds.' },
    ],
  }),
  component: UOstudioHome,
})

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
/**
 * useScrollReveal — Observes elements with a given selector and adds the
 * "visible" class when they enter the viewport. Drives all section animations.
 */
export function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── 3D Tilt hook ─────────────────────────────────────────────────────────────
/**
 * useTilt — Applies a subtle 3D perspective tilt to a card element
 * based on mouse position for a premium interactive feel.
 */
export function useTilt(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02,1.02,1.02)`
    }
    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
    }
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])
}

// Navigation moved to src/components/HeaderNav.tsx

// ─── Hero Section ─────────────────────────────────────────────────────────────
/**
 * Hero section with animated grid background, floating orbit rings,
 * large display typography, and a call-to-action. Creates the premium
 * 3D spacial feel of a cutting-edge game studio.
 */
export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid hero-particles"
    >
      {/* ── Radial spotlight gradient ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* ── Decorative 3D orbit rings (CSS perspective transforms) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '600px', transform: `translateY(${scrollY * 0.3}px)` }}>
        {/* Outer orbit ring */}
        <div
          className="orbit-ring absolute"
          style={{ width: '700px', height: '700px' }}
          aria-hidden="true"
        />
        {/* Middle orbit ring */}
        <div
          className="orbit-ring orbit-ring-2 absolute"
          style={{ width: '500px', height: '500px', borderColor: 'rgba(255,255,255,0.08)' }}
          aria-hidden="true"
        />
        {/* Inner orbit ring */}
        <div
          className="orbit-ring orbit-ring-3 absolute"
          style={{ width: '320px', height: '320px', borderColor: 'rgba(255,255,255,0.04)' }}
          aria-hidden="true"
        />
      </div>

      {/* ── Corner accent lines ── */}
      <div className="absolute top-24 left-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div className="absolute top-24 right-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-24 left-10 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-24 right-10 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />

      {/* ── Hero text content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Studio category badge */}
        <div className="reveal delay-100 mb-8">
          <span className="section-label">Game Development Studio</span>
        </div>

        {/* Main headline — large Orbitron display font */}
        <h1
          className="reveal delay-200 font-display font-black text-gradient leading-none mb-6"
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(3rem, 10vw, 9rem)',
            letterSpacing: '-0.02em',
          }}
        >
          UOstudio
        </h1>

        {/* Tagline */}
        <p
          className="reveal delay-300 text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light tracking-wide"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          We build worlds. We craft experiences.
          <br />
          <span className="text-white/40">Next-generation interactive entertainment.</span>
        </p>

        {/* CTA buttons */}
        <div className="reveal delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary cursor-pointer"
          >
            Explore Our Work
          </button>

        </div>

        {/* Scroll indicator */}
        <div className="reveal delay-600 mt-20 flex flex-col items-center gap-2 opacity-40">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.6rem' }}
          >
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── About Section ────────────────────────────────────────────────────────────
/**
 * About section: studio story, vision, and mission.
 * Uses a two-column layout on desktop with a large decorative number.
 * Glassmorphism cards display key stats/values.
 */
export function AboutSection() {
  const statsCards = [
    { value: '2026', label: 'Founded' },
    { value: '∞', label: 'Ambition' },
    { value: '2D+', label: 'Game Worlds' },
    { value: '1st', label: 'Class Quality' },
  ]

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="reveal text-center mb-16 mx-auto max-w-3xl">
          <span className="section-label">About Us</span>
          <h2
            className="font-display text-gradient-accent"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Born to Build
            <br />Legendary Games
          </h2>
        </div>

        {/* ── Two-column layout: text + decorative element ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left: studio story */}
          <div className="space-y-6">
            <p className="reveal delay-100 text-white/70 text-lg leading-relaxed">
              UOstudio is an independent game development studio with a singular mission:
              to create games that players never forget. We blend cutting-edge technology
              with powerful storytelling to deliver immersive experiences that push the
              boundaries of interactive entertainment.
            </p>
            <p className="reveal delay-200 text-white/50 leading-relaxed">
              Founded with a passion for bold ideas and technical excellence, UOstudio
              operates at the intersection of art and engineering. Every pixel, every
              frame, every mechanic is crafted with intention—because great games
              aren't just played, they're felt.
            </p>
            <p className="reveal delay-300 text-white/50 leading-relaxed">
              From concept to launch, our team brings relentless creativity and
              deep technical expertise to every project, delivering products that
              captivate audiences and stand the test of time.
            </p>
          </div>

          {/* Right: decorative large letter + accent lines */}
          <div className="reveal-right relative flex items-center justify-center">
            <div
              className="select-none pointer-events-none"
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(8rem, 18vw, 18rem)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1,
                letterSpacing: '-0.05em',
              }}
              aria-hidden="true"
            >
              UO
            </div>
            {/* Accent decorative box overlay */}
            <div
              className="absolute glass-card p-6 bottom-0 right-0"
              style={{ minWidth: '200px' }}
            >
              <div
                className="font-display text-white/80 text-sm mb-1"
                style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.7rem', letterSpacing: '0.15em' }}
              >
                OUR VISION
              </div>
              <div className="text-white text-base font-light leading-snug">
                Games that define a generation
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats / values grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsCards.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal delay-${(i + 1) * 100} glass-card p-6 text-center`}
            >
              <div
                className="font-display text-white text-3xl font-black mb-2"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.6rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services Section ──────────────────────────────────────────────────────────
/**
 * Services / What We Do section.
 * Six glassmorphism service cards with icons, each showcasing a studio specialty.
 * Hover effects add a 3D depth illusion via CSS transforms.
 */
export function ServicesSection() {
  // Each service includes a large unicode/emoji icon, title, and description
  const services = [
    {
      icon: '◈',
      title: 'Game Design',
      desc: 'Conceptualizing compelling mechanics, narratives, and progression systems that keep players engaged for hours.',
    },
    {
      icon: '⬡',
      title: '2D World Building',
      desc: 'Crafting immersive 2D environments with detailed level design, atmosphere, and visual storytelling.',
    },
    {
      icon: '⟁',
      title: 'Gameplay Systems and Logic',
      desc: 'Custom gameplay programming, logic optimization, and technical architecture for ambitious 2D projects.',
    },
    {
      icon: '◯',
      title: 'Character & Art',
      desc: 'High-fidelity character design, animation pipelines, and concept art that brings worlds to life.',
    },
    {
      icon: '⬟',
      title: 'Multiplayer Systems',
      desc: 'Real-time networking, matchmaking, and live-service infrastructure for connected player experiences.',
    },
    {
      icon: '△',
      title: 'Mobile & Cross-Platform',
      desc: 'Porting and optimizing experiences across PC, console, and mobile platforms without compromising quality.',
    },
  ]

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">

      {/* Section background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="reveal text-center mb-20">
          <span className="section-label">What We Do</span>
          <h2
            className="font-display text-gradient-accent"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Our Craft &amp;
            <br />Capabilities
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto leading-relaxed">
            End-to-end game development expertise—from the first sketch
            to the final gold master and beyond.
          </p>
        </div>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal delay-${Math.min((i % 3 + 1) * 100, 300)} glass-card service-card p-8 group`}
            >
              {/* Service icon */}
              <div
                className="text-white/20 group-hover:text-white/50 transition-colors duration-300 mb-5 select-none"
                style={{ fontSize: '2.5rem', lineHeight: 1, fontFamily: 'monospace' }}
                aria-hidden="true"
              >
                {svc.icon}
              </div>

              {/* Service title */}
              <h3
                className="font-display text-white font-bold mb-3 tracking-wide"
                style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.9rem', letterSpacing: '0.08em' }}
              >
                {svc.title}
              </h3>

              {/* Service description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {svc.desc}
              </p>

              {/* Decorative bottom accent line on hover */}
              <div className="mt-6 h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Founder Section ───────────────────────────────────────────────────────────
/**
 * Founder section spotlighting Arpit Chourasia.
 * Features a photo placeholder with glassmorphism overlay and a bio card.
 * The card uses 3D tilt on mouse move for premium interactivity.
 */
export function FounderSection() {
  const cardRef = useRef<HTMLDivElement>(null)
  const coFounderRef = useRef<HTMLDivElement>(null)
  useTilt(cardRef)
  useTilt(coFounderRef)

  return (
    <section id="founder" className="relative py-32 px-6 overflow-hidden">

      {/* Subtle left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="reveal text-center mb-20">
          <span className="section-label">The Founder</span>
          <h2
            className="font-display text-gradient-accent"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Behind the Studio
          </h2>
        </div>

        {/* ── Founder & Co-Founder Layout Wrapper ── */}
        <div className="w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
        
          {/* ── Founder card ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 glass-card overflow-hidden h-full">

          {/* Left: founder photo */}
          <div
            className="relative w-full h-full flex items-start overflow-hidden"
            aria-label="Founder photo"
          >
            <img
              src="/my photo 2.jpeg"
              alt="Arpit Chourasia"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Right: founder bio */}
          <div ref={cardRef} className="p-10 md:p-12 flex flex-col justify-center transition-transform duration-300 ease-out">

            {/* Name */}
            <h3
              className="font-display text-white font-black mb-1"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.01em' }}
            >
              Arpit Chourasia
            </h3>

            {/* Title/role */}
            <div
              className="text-white/40 mb-6 tracking-widest uppercase"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.65rem', letterSpacing: '0.2em' }}
            >
              Founder &amp; Creative Director
            </div>

            {/* Divider */}
            {/* Bio paragraphs */}
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Arpit Chourasia is a visionary game developer and entrepreneur with a deep passion for creating worlds that resonate. With a background in game design and interactive storytelling, he leads UOstudio with a hands-on approach to deliver exceptional player-focused experiences. His dedication to continuous innovation aims to position UOstudio as a globally recognized name in the gaming industry.
            </p>

            {/* Contact CTA */}
            <a
              href="mailto:thecompanyuo@gmail.com"
              className="btn-secondary text-xs inline-flex self-start cursor-pointer"
              style={{ textDecoration: 'none' }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              thecompanyuo@gmail.com
            </a>
          </div>
        </div>
          
        {/* ── Co-Founder card ── */}
        <div className="reveal delay-200 grid grid-cols-1 md:grid-cols-2 gap-0 glass-card overflow-hidden h-full">
          {/* Left: co-founder photo */}
          <div
            className="relative w-full h-full flex items-start overflow-hidden"
            aria-label="Co-Founder photo"
          >
            <img
              src="/raushan.jpg"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
              alt="Raushan Raj"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Fallback silhouette if image is missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 -z-10">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <svg viewBox="0 0 48 48" className="w-12 h-12 text-white/20" fill="currentColor">
                  <circle cx="24" cy="16" r="8" />
                  <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" />
                </svg>
              </div>
              <span className="text-white/20 text-xs tracking-widest uppercase font-display">Photo Placeholder</span>
            </div>
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
          </div>
          
          {/* Right: bio */}
          <div ref={coFounderRef} className="p-10 md:p-12 flex flex-col justify-center transition-transform duration-300 ease-out">
            <h3
              className="font-display text-white font-black mb-1"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.01em' }}
            >
              raushan raj
            </h3>
            <div
              className="text-white/40 mb-6 tracking-widest uppercase"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.65rem', letterSpacing: '0.2em' }}
            >
              Co-Founder &amp; Creative Director
            </div>
            <div className="glow-line mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Raushan Raj is the creative backbone of UOstudio, bringing imagination to life through compelling visuals and innovative design thinking. He leads the visual and conceptual direction of every project, ensuring each idea transforms into an immersive 2D world. His expertise spans art direction and UI/UX design, allowing him to craft visually engaging experiences that build the studio’s unique identity.
            </p>
          </div>
        </div>
        
        </div>
      </div>
    </section>
  )
}

// ─── Contact Section ───────────────────────────────────────────────────────────
/**
 * Contact section with a Netlify-powered form and direct email CTA.
 * The form posts to Netlify Forms via the static HTML fallback pattern.
 * Includes honeypot spam protection.
 */
export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden w-full flex flex-col items-center justify-center">

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center">

        {/* ── Section header ── */}
        <div className="reveal text-center mb-20 flex flex-col items-center justify-center w-full">
          <span className="section-label">Get In Touch</span>
          <h2
            className="font-display text-gradient-accent text-center w-full"
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Let&apos;s Build
            <br />Something Epic
          </h2>
          <p className="mt-6 text-white/50 max-w-lg mx-auto leading-relaxed text-center">
            Have a project in mind, a collaboration opportunity, or just want to
            connect? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center gap-8">

          {/* ── Main Connect With Us Centerpiece ── */}
          <div className="reveal w-full glass-card p-12 md:p-20 flex flex-col justify-center items-center text-center">
            <h3
              className="font-display text-white font-bold mb-6 text-center w-full"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: '2.4rem' }}
            >
              Connect With Us
            </h3>
            <p className="text-white/50 text-[16px] leading-relaxed max-w-md mb-12 text-center mx-auto">
              Ready to start your next big project? Drop us an email directly or connect with us on social media.
            </p>
            
            <div className="flex flex-row justify-center items-center gap-10 w-full">
                {/* Email */}
                <a href="mailto:thecompanyuo@gmail.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-20 h-20 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/uostudio.in?igsh=MXZjeTl3ZWt3aXdiZA==" target="_blank" rel="noreferrer" className="flex items-center justify-center w-20 h-20 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/company/uostudio" target="_blank" rel="noreferrer" className="flex items-center justify-center w-20 h-20 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
            </div>
          </div>

          {/* ── Additional Info (Stacked Details) ── */}
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center mt-6">
            <div className="text-center flex flex-col items-center">
              <div className="text-white/40 text-[0.65rem] tracking-widest uppercase mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>Direct Email</div>
              <p className="text-white/70 text-sm">thecompanyuo@gmail.com</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="text-center flex flex-col items-center">
              <div className="text-white/40 text-[0.65rem] tracking-widest uppercase mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>Response Time</div>
              <p className="text-white/70 text-sm">Within 24-48 hours</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="text-center flex flex-col items-center">
              <div className="text-white/40 text-[0.65rem] tracking-widest uppercase mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>Studio</div>
              <p className="text-white/70 text-sm">Global & Remote</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────────
/**
 * Footer with logo, studio tagline, navigation links, and copyright.
 * Clean minimal design that closes the page with finality.
 */
export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">

      {/* Faint top glow line */}
      <div className="glow-line mb-16" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* ── Brand column ── */}
          <div className="md:col-span-1">
            {/* Logo placeholder + name */}
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="UOstudio logo" className="w-10 h-10 rounded-sm object-cover" />
              <span
                className="font-display font-bold text-white tracking-widest text-sm uppercase"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                UOstudio
              </span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building worlds, crafting experiences, and pushing the boundaries
              of interactive entertainment.
            </p>
          </div>

          {/* ── Navigation column ── */}
          <div>
            <h4
              className="text-white/30 text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.6rem' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {['about', 'services', 'founder', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/50 hover:text-white text-sm capitalize transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ── */}
          <div>
            <h4
              className="text-white/30 text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.6rem' }}
            >
              Contact
            </h4>
            <a
              href="mailto:thecompanyuo@gmail.com"
              className="text-white/50 hover:text-white text-sm transition-colors duration-200"
            >
              thecompanyuo@gmail.com
            </a>
          </div>
        </div>

        {/* ── Bottom bar: copyright ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25 text-xs tracking-wide"
            style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.6rem', letterSpacing: '0.12em' }}
          >
            © 2026 UOstudio. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-white/20 hover:text-white/50 text-xs transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-white/20 hover:text-white/50 text-xs transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page Component ───────────────────────────────────────────────────────
/**
 * UOstudioHome — assembles all sections into the full single-page website.
 * Initialises scroll-reveal observers on mount.
 */
function UOstudioHome() {
  // Activate scroll-reveal animations for all reveal elements on the page
  useScrollReveal()

  return (
    <div className="min-h-screen bg-black">
      <HeaderNav />
      {/* Main content starts here */}

      {/* Page sections — stacked vertically for single-page scroll experience */}
      <main>
        <HeroSection />

        {/* Visual divider */}
        <div className="glow-line mx-6 md:mx-20" aria-hidden="true" />

        <AboutSection />

        <div className="glow-line mx-6 md:mx-20" aria-hidden="true" />

        <ServicesSection />

        <div className="glow-line mx-6 md:mx-20" aria-hidden="true" />

        <FounderSection />

        <div className="glow-line mx-6 md:mx-20" aria-hidden="true" />

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
