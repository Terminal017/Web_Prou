import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import HTMLPage from './pages/HTMLPage';
import CSSPage from './pages/CSSPage';
import JSPage from './pages/JSPage';
import ReactPage from './pages/ReactPage';
import BrowserPage from './pages/BrowserPage';
import './App.css';

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
      </Routes>
    </div>
  );
}

export default App;
