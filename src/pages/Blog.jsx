import { Link } from 'react-router-dom'
import './Blog.css'

export const posts = [
  {
    slug: 'serving-spa-on-rustfs',
    title: 'Serving a React SPA on RustFS',
    date: '2025-03-10',
    tag: 'DevOps',
    excerpt: 'Step by step guide to building a Vite + React app and deploying the static output to a RustFS bucket as a public static website.',
  },
  {
    slug: 'react-router-deep-links',
    title: 'Making React Router Deep Links Work on Static Hosts',
    date: '2025-02-28',
    tag: 'React',
    excerpt: 'The classic 404 problem when refreshing a client-side route. How to configure your static host to always return index.html.',
  },
  {
    slug: 'vite-build-optimization',
    title: 'Vite Build Optimizations for Production',
    date: '2025-02-14',
    tag: 'Performance',
    excerpt: 'Code splitting, chunk naming, tree shaking, and asset fingerprinting — getting the most out of a Vite build for deployment.',
  },
  {
    slug: 'rustfs-s3-compatibility',
    title: 'RustFS S3 API Compatibility Notes',
    date: '2025-01-30',
    tag: 'RustFS',
    excerpt: 'Which S3 API operations RustFS supports, what edge cases to watch for, and how to configure the AWS SDK to point at a local RustFS instance.',
  },
]

export default function Blog() {
  return (
    <div className="blog">
      <div className="page-header">
        <span className="page-label">/ BLOG</span>
        <h1 className="page-title">Posts</h1>
      </div>

      <div className="post-list">
        {posts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="post-card">
            <div className="post-meta">
              <span className="post-tag">{post.tag}</span>
              <span className="post-date">{post.date}</span>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <span className="post-read">Read →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
