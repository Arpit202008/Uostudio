import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Footer } from './index'

// ─── 3D Tilt hook for premium interactivity ──────────────────────────────────
function useTilt(ref: React.RefObject<HTMLDivElement | null>) {
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

// Project Data
const ongoingProjects = [
  { name: 'Project Alpha', logo: '/logo.jpg' },
  { name: 'Neon Genesis', logo: '/logo.jpg' },
  { name: 'Cyber Realms', logo: '/logo.jpg' },
  { name: 'Project Delta', logo: '/logo.jpg' },
  { name: 'Quantum UI', logo: '/logo.jpg' },
  { name: 'Odyssey Beta', logo: '/logo.jpg' },
]

const completedProjects = [
  { name: 'Legacy Engine', logo: '/logo.jpg' },
  { name: 'Dark Void', logo: '/logo.jpg' },
  { name: 'Pixel Tactics', logo: '/logo.jpg' },
  { name: 'Void Walkers', logo: '/logo.jpg' },
  { name: 'Chrome Hearts', logo: '/logo.jpg' },
  { name: 'Space Explorer', logo: '/logo.jpg' },
]

export const Route = createFileRoute('/works')({
  head: () => ({
    meta: [
      { title: 'Projects | UOStudio' },
      { name: 'description', content: 'Explore UOStudio game development projects and interactive experiences.' },
      { name: 'application-name', content: 'UOStudio' },
      { property: 'og:site_name', content: 'UOStudio' },
      { property: 'og:title', content: 'Projects | UOStudio' },
      { property: 'og:description', content: 'Explore UOStudio game development projects.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://UOStudio.in/logo.jpg' }
    ],
  }),
  component: WorksPage,
})

function ProjectCard({ project }: { project: any }) {
  const cardRef = useRef<HTMLDivElement>(null)
  useTilt(cardRef)

  return (
    <div className="flex flex-col items-center gap-6 group shrink-0">
      {/* 3D Rotating Box */}
      <div 
        ref={cardRef}
        className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border border-white/10 glass-card transition-all duration-300 ease-out shadow-2xl relative group-hover:border-white/30"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img 
          src={project.logo} 
          alt={project.name} 
          className="w-full h-full object-cover p-12 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        />
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      </div>
      
      {/* Project Name Below */}
      <span 
        className="font-display font-bold text-white/40 group-hover:text-white transition-colors duration-300 text-xs tracking-[0.3em] uppercase"
        style={{ fontFamily: 'Orbitron, monospace' }}
      >
        {project.name}
      </span>
    </div>
  )
}

function InfiniteMarquee({ items, direction = 'left' }: { items: any[], direction?: 'left' | 'right' }) {
  const scrollClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
  
  return (
    <div className="relative flex overflow-hidden group w-full py-12">
      {/* Premium Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Marquee Track - Duplicated for infinite effect */}
      <div className={`flex gap-12 md:gap-20 ${scrollClass} group-hover:[animation-play-state:paused]`} style={{ animationDuration: '80s' }}>
        {items.map((project, idx) => (
          <ProjectCard key={`${project.name}-${idx}`} project={project} />
        ))}
        {/* Clone for seamless loop */}
        {items.map((project, idx) => (
          <ProjectCard key={`${project.name}-clone-${idx}`} project={project} />
        ))}
      </div>
    </div>
  )
}

function WorksPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-12">
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            aria-label="Back to Home"
          >
            <ArrowLeft size={24} strokeWidth={3} className="text-white" />
          </Link>
        </div>
        
        {/* Clean "Projects" Header */}
        <div className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black font-display tracking-tighter mb-8 relative" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            Exploring the next frontier of immersive digital entertainment.
          </p>
        </div>
      </div>

      <div className="space-y-40 pb-40">
        {/* Ongoing Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
            <div className="section-label bg-white/5 border-white/10 text-white inline-block">In Development</div>
          </div>
          <InfiniteMarquee items={ongoingProjects} direction="left" />
        </section>

        {/* Completed Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
            <div className="section-label bg-white/5 border-white/10 text-white inline-block">Completed</div>
          </div>
          <InfiniteMarquee items={completedProjects} direction="right" />
        </section>
      </div>
      <Footer showLogo={false} />
    </div>
  )
}
