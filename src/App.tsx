import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import HTMLPage from './pages/HTMLPage'
import CSSPage from './pages/CSSPage'
import JSPage from './pages/JSPage'
import ReactPage from './pages/ReactPage'
import BrowserPage from './pages/BrowserPage'
import FramePage from './pages/FramePage'
import OtherPage from './pages/OtherPage'
import SearchPage from './pages/SearchPage'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/html" element={<HTMLPage />} />
        <Route path="/css" element={<CSSPage />} />
        <Route path="/js" element={<JSPage />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/browser" element={<BrowserPage />} />
        <Route path="/frame" element={<FramePage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <BackToTop />
    </div>
  )
}

export default App
