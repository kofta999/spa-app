import { useParams, Link, Navigate } from 'react-router-dom'
import { posts } from './Blog.jsx'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="blog-post">
      <Link to="/blog" className="back-link">← Back to Blog</Link>

      <header className="post-header">
        <div className="post-meta">
          <span className="post-tag">{post.tag}</span>
          <span className="post-date">{post.date}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-excerpt">{post.excerpt}</p>
      </header>

      <div className="post-route-info">
        <span className="route-label">DYNAMIC ROUTE</span>
        <code className="route-display">/blog/<strong>{slug}</strong></code>
      </div>

      <article className="post-content">
        <p>
          This is a dynamically-rendered post loaded via React Router's{' '}
          <code>useParams()</code> hook. The URL segment <code>:{slug}</code> was extracted
          and matched against the post list — no server request was made.
        </p>
        <p>
          This is the core mechanic that makes SPAs work: the route <code>/blog/{slug}</code>{' '}
          is defined once in the router, and the component reads the slug at runtime. The
          entire navigation happened client-side.
        </p>
        <blockquote>
          If you're seeing this page after a direct URL load or hard refresh, your RustFS
          static hosting is correctly configured to serve <code>index.html</code> for unknown paths.
        </blockquote>
        <p>
          In production, you'd replace this placeholder content with data fetched from an
          API or CMS. The routing infrastructure is already wired.
        </p>
      </article>
    </div>
  )
}
