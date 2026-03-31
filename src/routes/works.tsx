import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Footer } from './index'

// Dummy Data for Marquees
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
      { title: 'Project Pipeline | UOstudio' },
      { name: 'description', content: 'Explore UOstudio ongoing and completed games and interactive experiences.' },
      { property: 'og:title', content: 'Project Pipeline | UOstudio' },
      { property: 'og:description', content: 'Explore UOstudio ongoing and completed games and interactive experiences.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://uostudio.in/logo.jpg' }
    ],
  }),
  component: WorksPage,
})

function Marquee({ items, direction = 'left' }: { items: any[], direction?: 'left' | 'right' }) {
  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
  
  return (
    <div className="relative flex overflow-hidden group w-full border-y border-white/5 bg-white/[0.02] py-8">
      {/* Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling Content - Duplicated for infinite effect */}
      <div className={`flex whitespace-nowrap ${animationClass} group-hover:[animation-play-state:paused]`}>
        {items.map((item, idx) => (
          <div key={idx} className="inline-flex items-center justify-center gap-4 mx-12">
            <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-white/10 glass-card">
              <img src={item.logo} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl md:text-3xl font-bold tracking-wider text-white/80 font-display">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className={`flex whitespace-nowrap ${animationClass} group-hover:[animation-play-state:paused]`} aria-hidden="true">
        {items.map((item, idx) => (
          <div key={`d-${idx}`} className="inline-flex items-center gap-4 mx-12">
            <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-white/10 glass-card">
              <img src={item.logo} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl md:text-3xl font-bold tracking-wider text-white/80 font-display">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WorksPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-12">
        {/* White arrow icon back link */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            aria-label="Back to Home"
          >
            <ArrowLeft size={24} strokeWidth={3} className="text-white" />
          </Link>
        </div>
        
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter mb-6 relative">
            <span className="text-gradient">Project</span> Pipeline
          </h1>
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            A real-time look into the worlds we're building and the experiences we've shipped. Innovation in motion.
          </p>
        </div>
      </div>

      <div className="space-y-32 pb-32">
        {/* Ongoing Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
            <div className="section-label bg-white/5 border-white/10 text-white">In Development</div>
            <h2 className="text-3xl font-display font-medium text-white/90">Ongoing Projects</h2>
          </div>
          <Marquee items={ongoingProjects} direction="left" />
        </section>

        {/* Completed Section */}
        <section>
          <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
             <div className="section-label bg-white/5 border-white/10 text-white">Shipped</div>
             <h2 className="text-3xl font-display font-medium text-white/90">Completed Projects</h2>
          </div>
          {/* Reverse direction for visual interest */}
          <Marquee items={completedProjects} direction="right" />
        </section>
      </div>
      <Footer showLogo={false} />
    </div>
  )
}
