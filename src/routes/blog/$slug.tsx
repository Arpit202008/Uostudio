import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  head: ({ params }) => {
    const post = allBlogs.find((p) => p._meta.path === params.slug)
    
    return {
      meta: [
        { title: post ? `${post.title} | UOstudio` : 'Post Not Found | UOstudio' },
        ...(post ? [
          { name: 'description', content: post.summary },
          { property: 'og:title', content: post.title },
          { property: 'og:description', content: post.summary },
          { property: 'og:type', content: 'article' },
          ...(post.image ? [{ property: 'og:image', content: `https://uostudio.in${post.image}` }] : []),
        ] : []),
      ],
      scripts: post ? [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image ? `https://uostudio.in${post.image}` : "https://uostudio.in/logo.jpg",
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "UOstudio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://uostudio.in/logo.jpg"
              }
            },
            "datePublished": post.date,
            "description": post.summary
          }),
        },
      ] : [],
    }
  },
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center font-display" style={{ fontFamily: 'Orbitron, monospace' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Post not found
          </h1>
          <Link to="/blog" className="text-white/50 hover:text-white transition-colors">
            Back to Studio Log
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-32 selection:bg-white/20 relative">
      
      {/* Background glow at the top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] rounded-full opacity-10 pointer-events-none blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
      />
      
      {/* Top Nav */}
      <div className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to Studio Log
          </Link>
        </div>
      </div>

      <article className="pt-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Header */}
          <header className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 text-[0.65rem] text-white/40 mb-8 uppercase tracking-[0.3em]" style={{ fontFamily: 'Orbitron, monospace' }}>
              <div className="flex items-center gap-1.5">
                <Calendar size={12} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>

            <h1 
              className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-8 leading-[1.1]"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              {post.title}
            </h1>
            
            {post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="bg-white/[0.03] border-white/10 text-white/60 text-[10px] uppercase tracking-widest py-1.5 px-3"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            {/* Hero Image */}
            {post.image && (
              <div className="w-full relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)] mx-auto max-w-5xl group mb-20">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Image Glow */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto relative relative z-10">
             <div
              className={`prose prose-invert prose-xl max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white/90
                prose-a:text-white prose-a:underline-offset-4 prose-a:decoration-white/30 hover:prose-a:decoration-white
                prose-p:text-white/70 prose-p:leading-[1.8] prose-p:font-light 
                prose-li:text-white/70 prose-li:font-light
                prose-blockquote:border-white/20 prose-blockquote:text-white/60 prose-blockquote:font-light prose-blockquote:italic
                prose-img:rounded-2xl prose-img:border prose-img:border-white/10
                prose-hr:border-white/10
              `}
              dangerouslySetInnerHTML={{ __html: html }}
              style={{ 
                fontFamily: 'Inter, sans-serif',
              } as React.CSSProperties}
            />

            {/* Author Block */}
            <div className="mt-24 pt-10 border-t border-white/10 flex items-center gap-6">
               <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <img src="/arpit.jpg" alt={post.author} className="w-full h-full object-cover" />
               </div>
               <div>
                  <div className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Orbitron, monospace' }}>
                    Written By
                  </div>
                  <div className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {post.author}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

