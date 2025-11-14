import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">前端专业英语词汇练习</h1>
        <div className="home-cards">
          <Link to="/html" className="home-card">
            <h2>HTML</h2>
          </Link>
          <Link to="/css" className="home-card">
            <h2>CSS</h2>
          </Link>
          <Link to="/js" className="home-card">
            <h2>JS</h2>
          </Link>
          <Link to="/react" className="home-card">
            <h2>React</h2>
          </Link>
          <Link to="/browser" className="home-card">
            <h2>Browser</h2>
          </Link>
          <Link to="/frame" className="home-card">
            <h2>Frame</h2>
          </Link>
          <Link to="/other" className="home-card">
            <h2>Other</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
