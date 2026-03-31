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
      { title: 'Projects | UOstudio' },
      { name: 'description', content: 'Explore UOstudio game development projects and interactive experiences.' },
      { name: 'application-name', content: 'UOstudio' },
      { property: 'og:site_name', content: 'UOstudio' },
      { property: 'og:title', content: 'Projects | UOstudio' },
      { property: 'og:description', content: 'Explore UOstudio game development projects.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://uostudio.in/logo.jpg' }
    ],
  }),
  component: WorksPage,
})

function ProjectCard({ project }: { project: any }) {
  const cardRef = useRef<HTMLDivElement>(null)
  useTilt(cardRef)

  return (
    <div className="flex flex-col items-center gap-4 group">
      {/* 3D Rotating Box */}
      <div 
        ref={cardRef}
        className="w-full aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 glass-card transition-all duration-300 ease-out shadow-2xl relative group-hover:border-white/30"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img 
          src={project.logo} 
          alt={project.name} 
          className="w-full h-full object-cover p-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        />
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      </div>
      
      {/* Project Name Below */}
      <span 
        className="font-display font-bold text-white/50 group-hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase"
        style={{ fontFamily: 'Orbitron, monospace' }}
      >
        {project.name}
      </span>
    </div>
  )
}

function WorksPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
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

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-40 pb-40">
        {/* Ongoing Section */}
        <section>
          <div className="mb-12">
            <div className="section-label bg-white/5 border-white/10 text-white inline-block">In Development</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* Completed Section */}
        <section>
          <div className="mb-12">
            <div className="section-label bg-white/5 border-white/10 text-white inline-block">Completed</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            {completedProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </div>
      <Footer showLogo={false} />
    </div>
  )
}
