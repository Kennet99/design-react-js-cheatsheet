import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import JSFundamentals from './pages/JSFundamentals'

import ReactCore from './pages/ReactCore'
import Components from './pages/Components'
import Hooks from './pages/Hooks'
import DataHandling from './pages/DataHandling'
import EventsInteractions from './pages/EventsInteractions'
import NavigationRouting from './pages/NavigationRouting'
import PowerApps from './pages/PowerApps'
import StylingDesign from './pages/StylingDesign'
import HTMLCSS from './pages/HTMLCSS'
import CSSFrameworks from './pages/CSSFrameworks'
import FigmaMapping from './pages/FigmaMapping'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
  <Routes>
    <Route path="/" element={<Home />} />
          <Route path="/js-fundamentals" element={<JSFundamentals />} />

          <Route path="/react-core" element={<ReactCore />} />
          <Route path="/components" element={<Components />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/data-handling" element={<DataHandling />} />
          <Route path="/events-interactions" element={<EventsInteractions />} />
          <Route path="/navigation-routing" element={<NavigationRouting />} />
          <Route path="/power-apps" element={<PowerApps />} />
          <Route path="/styling-design" element={<StylingDesign />} />
          <Route path="/html-css" element={<HTMLCSS />} />
          <Route path="/css-frameworks" element={<CSSFrameworks />} />
          <Route path="/figma-mapping" element={<FigmaMapping />} />
          </Routes>
      </Layout>
    </Router>
  )
}

export default App 