import './About.css'

const stack = [
  ['React', '18.2', 'UI framework'],
  ['React Router', '6.22', 'Client-side routing'],
  ['Vite', '5.1', 'Build tool'],
  ['RustFS', '—', 'Static file server'],
]

export default function About() {
  return (
    <div className="about">
      <div className="page-header">
        <span className="page-label">/ ABOUT</span>
        <h1 className="page-title">What is this?</h1>
      </div>

      <div className="about-body">
        <div className="about-text">
          <p>
            This is a minimal React SPA (Single Page Application) scaffolded to test static
            file hosting on <strong>RustFS</strong>. It uses React Router v6 for client-side
            routing, meaning all navigation happens in the browser — no server round-trips.
          </p>
          <p>
            The entire app compiles down to a <code>dist/</code> folder containing an
            <code>index.html</code>, hashed JS/CSS bundles, and any static assets. Your
            static host just needs to serve these files and redirect all 404s back to
            <code>index.html</code> for deep-link navigation to work.
          </p>
          <p>
            If you can load this page directly at <code>/about</code> after a hard refresh,
            your fallback routing is configured correctly.
          </p>
        </div>

        <div className="about-stack">
          <h2 className="stack-title">Tech Stack</h2>
          <table className="stack-table">
            <thead>
              <tr>
                <th>Package</th>
                <th>Version</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {stack.map(([pkg, ver, role]) => (
                <tr key={pkg}>
                  <td><code>{pkg}</code></td>
                  <td><span className="ver">{ver}</span></td>
                  <td>{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
