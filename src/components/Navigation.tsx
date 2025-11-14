import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  const pathname = location.pathname

  const isActive = (p: string) => pathname === p || pathname.endsWith(p)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          主页
        </Link>
        <div className="nav-links">
          <Link
            to="/html"
            className={`nav-link ${isActive('/html') ? 'active' : ''}`}
          >
            HTML
          </Link>
          <Link
            to="/css"
            className={`nav-link ${isActive('/css') ? 'active' : ''}`}
          >
            CSS
          </Link>
          <Link
            to="/js"
            className={`nav-link ${isActive('/js') ? 'active' : ''}`}
          >
            JS
          </Link>
          <Link
            to="/react"
            className={`nav-link ${isActive('/react') ? 'active' : ''}`}
          >
            React
          </Link>
          <Link
            to="/browser"
            className={`nav-link ${isActive('/browser') ? 'active' : ''}`}
          >
            Browser
          </Link>
          <Link
            to="/frame"
            className={`nav-link ${isActive('/frame') ? 'active' : ''}`}
          >
            Frame
          </Link>
          <Link
            to="/other"
            className={`nav-link ${isActive('/other') ? 'active' : ''}`}
          >
            Other
          </Link>
          <Link
            to="/search"
            className={`nav-link ${isActive('/search') ? 'active' : ''}`}
          >
            搜索
          </Link>
        </div>
      </div>
    </nav>
  )
}
