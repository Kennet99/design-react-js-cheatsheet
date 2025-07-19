import React, { useState } from 'react'
import { BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Plus, Minus, RotateCcw, Eye, EyeOff } from 'lucide-react'
import './App.css'
import HomeSection from './components/HomeSection'
import JSFundamentalsSection from './components/JSFundamentalsSection'
import JSBasicsSection from './components/JSBasicsSection'
import ReactCoreSection from './components/ReactCoreSection'
import ComponentsSection from './components/ComponentsSection'
import HooksSection from './components/HooksSection'
import DataHandlingSection from './components/DataHandlingSection'
import EventsInteractionsSection from './components/EventsInteractionsSection'
import FigmaMappingSection from './components/FigmaMappingSection'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'js-fundamentals', label: 'JS Fundamentals', icon: FileText },
    { id: 'js-basics', label: 'JavaScript Basics', icon: Code },
    { id: 'react-core', label: 'React Core', icon: Zap },
    { id: 'components', label: 'Components', icon: Layers },
    { id: 'hooks', label: 'Hooks', icon: Settings },
    { id: 'data-handling', label: 'Data Handling', icon: Database },
    { id: 'events-interactions', label: 'Events & Interactions', icon: Users },
    { id: 'figma-mapping', label: 'Figma Mapping', icon: Palette }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <BookOpen className="logo-icon" />
            React JS Cheatsheet
          </h1>
          <p className="subtitle">For UX Designers with Figma Analogies</p>
        </div>
      </header>
      <nav className="sidebar">
        <div className="nav-items">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
      <main className="main-content">
        <div className="container">
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'js-fundamentals' && <JSFundamentalsSection />}
          {activeSection === 'js-basics' && <JSBasicsSection />}
          {activeSection === 'react-core' && <ReactCoreSection />}
          {activeSection === 'components' && <ComponentsSection />}
          {activeSection === 'hooks' && <HooksSection />}
          {activeSection === 'data-handling' && <DataHandlingSection />}
          {activeSection === 'events-interactions' && <EventsInteractionsSection />}
          {activeSection === 'figma-mapping' && <FigmaMappingSection />}
        </div>
      </main>
    </div>
  )
}

export default App 