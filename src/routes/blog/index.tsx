import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: 'Studio Log | UOStudio Blog' },
      {
        name: 'description',
        content: 'Read the latest articles, development logs, and updates from the UOStudio game development team.',
      },
      { property: 'og:title', content: 'Studio Log | UOStudio Blog' },
      { property: 'og:description', content: 'Read the latest articles, development logs, and updates from the UOStudio game development team.' },
    ],
  }),
  component: BlogIndex,
})

function BlogIndex() {
  // Sort blogs by date (newest first)
  const sortedBlogs = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-6 md:px-12 selection:bg-white/20 relative overflow-hidden">
      
      {/* ── Background Glow Effects ── */}
      <div 
        className="fixed top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-10 pointer-events-none blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 pointer-events-none blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
      />
      {/* Subtle Grid overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMEwwIDYwTTAgMEw2MCA2MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-[0.02] pointer-events-none mix-blend-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ── Navigation ── */}
        <div className="flex items-center justify-between mb-16">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to Studio
          </Link>
        </div>
        
        {/* ── Header ── */}
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="text-white/40 text-[0.65rem] tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: 'Orbitron, monospace' }}>
              Inside The Studio
            </span>
            <h1 
              className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
            >
              Studio Log
            </h1>
          </div>
          <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed md:text-right" style={{ fontFamily: 'Inter, sans-serif' }}>
            Thoughts, updates, and deep dives into game development, technology, and the journey of building UOStudio.
          </p>
        </div>

        {/* ── All Posts List ── */}
        <div className="flex flex-col gap-12">
          {sortedBlogs.map((post, i) => (
            <Link 
              key={post._meta.path}
              to="/blog/$slug" 
              params={{ slug: post._meta.path }}
              className="group block"
            >
              <article className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-white/20 transition-all duration-700 hover:shadow-[0_0_80px_rgba(255,255,255,0.03)] flex flex-col md:flex-row">
                
                {/* Image Section */}
                <div className="md:w-[50%] lg:w-[55%] relative overflow-hidden h-72 md:h-[400px] lg:h-[450px] shrink-0">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                       <span className="text-white/20 font-display text-4xl" style={{ fontFamily: 'Orbitron, monospace' }}>{post.title.substring(0,2).toUpperCase()}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 md:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505] opacity-0 md:opacity-100 hidden md:block" />
                </div>
                
                {/* Content Section */}
                <div className="p-10 md:p-14 md:w-[50%] lg:w-[45%] flex flex-col justify-center relative z-10 -mt-20 md:mt-0">
                  {i === 0 && (
                    <Badge variant="outline" className="self-start bg-white text-black border-none text-[10px] mb-6 tracking-widest uppercase hover:bg-white/80 transition-colors" style={{ fontFamily: 'Orbitron, monospace' }}>
                      Latest Post
                    </Badge>
                  )}
                  
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </div>
                  </div>

                  <h2 
                    className="text-3xl lg:text-5xl md:text-4xl font-bold mb-6 text-white leading-[1.1] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {post.title}
                  </h2>

                  <p className="text-white/50 leading-relaxed mb-10 text-base md:text-lg line-clamp-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {post.summary}
                  </p>

                  <div className="mt-auto flex items-center gap-3 text-sm text-white/70 font-medium group-hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Read Article
                    <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-white/60 transition-all duration-500" />
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}

