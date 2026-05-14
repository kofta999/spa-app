import { Link, useLocation } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  const location = useLocation()
  return (
    <div className="not-found">
      <div className="nf-code">404</div>
      <h1 className="nf-title">Route not found</h1>
      <p className="nf-sub">
        <code>{location.pathname}</code> doesn't match any defined route.
      </p>
      <Link to="/" className="nf-home">← Go Home</Link>
    </div>
  )
}
