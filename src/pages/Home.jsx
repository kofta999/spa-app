import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  { icon: '⚡', title: 'React Router v6', desc: 'Client-side routing with nested routes, dynamic segments, and 404 handling.' },
  { icon: '🗂', title: 'Multiple Routes', desc: 'Home, About, Dashboard, Blog with dynamic post slugs — all wired up.' },
  { icon: '📦', title: 'Vite Build', desc: 'Blazing fast builds producing a static dist/ folder ready for any static host.' },
  { icon: '🦀', title: 'RustFS Ready', desc: 'All assets are relative-path hashed. Drop the dist/ into your bucket and go.' },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="badge">SPA TEST</span>
          <span className="badge badge-dim">REACT + REACT ROUTER v6</span>
        </div>
        <h1 className="hero-title">
          <span className="title-line">STATIC</span>
          <span className="title-line accent">ITI</span>
          <span className="title-line">TEMPLATE</span>
        </h1>
        <p className="hero-sub">
          A multi-route React application built to validate static file hosting on RustFS.
          Navigate between routes — everything is client-side.
        </p>
        <div className="hero-cta">
          <Link to="/dashboard" className="btn btn-primary">Go to Dashboard →</Link>
          <Link to="/blog" className="btn btn-ghost">Read Blog</Link>
        </div>
        <div className="hero-hint">
          <code>Try refreshing on any route — check your server's 404 → index.html fallback</code>
        </div>
      </section>

      <section className="features">
        {features.map(f => (
          <div key={f.title} className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="routes-map">
        <h2 className="section-title">Route Map</h2>
        <div className="route-list">
          {[
            ['/', 'Home', 'This page'],
            ['/about', 'About', 'Static info page'],
            ['/dashboard', 'Dashboard', 'Mock data dashboard'],
            ['/blog', 'Blog', 'Post listing'],
            ['/blog/:slug', 'Blog Post', 'Dynamic route segment'],
            ['/*', '404', 'Catch-all fallback'],
          ].map(([path, name, desc]) => (
            <div key={path} className="route-row">
              <code className="route-path">{path}</code>
              <span className="route-name">{name}</span>
              <span className="route-desc">{desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
