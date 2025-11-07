import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          主页
        </Link>
        <div className="nav-links">
          <Link
            to="/html"
            className={`nav-link ${location.pathname === '/html' ? 'active' : ''}`}
          >
            HTML
          </Link>
          <Link
            to="/css"
            className={`nav-link ${location.pathname === '/css' ? 'active' : ''}`}
          >
            CSS
          </Link>
          <Link
            to="/js"
            className={`nav-link ${location.pathname === '/js' ? 'active' : ''}`}
          >
            JS
          </Link>
          <Link
            to="/react"
            className={`nav-link ${location.pathname === '/react' ? 'active' : ''}`}
          >
            React
          </Link>
          <Link
            to="/browser"
            className={`nav-link ${location.pathname === '/browser' ? 'active' : ''}`}
          >
            Browser
          </Link>
        </div>
      </div>
    </nav>
  );
}

