import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Nav.css'

const links = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">
        <span className="logo-bracket">[</span>
        <span className="logo-text">RUSTFS</span>
        <span className="logo-bracket">]</span>
      </NavLink>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(({ to, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="nav-meta">
        <span className="nav-route">{location.pathname}</span>
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
