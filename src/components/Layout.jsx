import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Plus, Minus, RotateCcw, Eye, EyeOff, Navigation, Paintbrush, Globe, Type, Sparkles, Menu, X } from 'lucide-react'

function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const location = useLocation()

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Navigation items - like the pages panel in Figma
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'js-fundamentals', label: 'JS Fundamentals', icon: FileText, path: '/js-fundamentals' },
    { id: 'js-basics', label: 'React Basics', icon: Code, path: '/js-basics' },
    { id: 'react-core', label: 'React Core', icon: Zap, path: '/react-core' },
    { id: 'components', label: 'Components', icon: Layers, path: '/components' },
    { id: 'hooks', label: 'Hooks', icon: Settings, path: '/hooks' },
    { id: 'data-handling', label: 'Data Handling', icon: Database, path: '/data-handling' },
    { id: 'events-interactions', label: 'Events & Interactions', icon: Users, path: '/events-interactions' },
    { id: 'navigation-routing', label: 'Navigation & Routing', icon: Navigation, path: '/navigation-routing' },
    { id: 'power-apps', label: 'Power Apps', icon: Zap, path: '/power-apps' },
    { id: 'styling-design', label: 'Styling & Design', icon: Paintbrush, path: '/styling-design' },
    { id: 'html-css', label: 'HTML & CSS', icon: Globe, path: '/html-css' },
    { id: 'css-frameworks', label: 'CSS Frameworks', icon: Sparkles, path: '/css-frameworks' },
    { id: 'figma-mapping', label: 'Figma Mapping', icon: Palette, path: '/figma-mapping' }
  ]

  return (
    <div className="app">
      {/* Header - like the top toolbar in Figma */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo">
              <BookOpen className="logo-icon" />
              React JS Cheatsheet
            </h1>
            <p className="subtitle">For UX Designers with Figma Analogies</p>
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation - like the left sidebar in Figma */}
      <nav className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-items">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Main content area - like the canvas in Figma */}
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>

      {/* Back to Top button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <RotateCcw className="back-to-top-icon" />
        </button>
      )}
    </div>
  )
}

export default Layout 