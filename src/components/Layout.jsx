import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Plus, Minus, RotateCcw, Eye, EyeOff, Navigation, Paintbrush, Globe, Type, Sparkles, Menu, X, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react'
import GlobalSearch from './GlobalSearch'
import { pageSections } from '../data/pageSections'

function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [expandedItems, setExpandedItems] = useState(new Set())
  const location = useLocation()

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-expand current page accordion
  useEffect(() => {
    const currentPageId = navItems.find(item => item.path === location.pathname)?.id
    if (currentPageId && pageSections[currentPageId]) {
      setExpandedItems(new Set([currentPageId]))
    } else {
      setExpandedItems(new Set())
    }
  }, [location.pathname])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set()
    if (!expandedItems.has(itemId)) {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const scrollToSection = (sectionTitle) => {
    // Wait a bit for any page transitions to complete
    setTimeout(() => {
      // Try different selectors to find the section
      const selectors = [
        `h2:contains("${sectionTitle}")`,
        `h3:contains("${sectionTitle}")`,
        `[id*="${sectionTitle.toLowerCase().replace(/\s+/g, '-')}"]`,
        `[id*="${sectionTitle.toLowerCase().replace(/\s+/g, '_')}"]`
      ]
      
      let element = null
      for (const selector of selectors) {
        try {
          element = document.querySelector(selector)
          if (element) break
        } catch (e) {
          // Invalid selector, try next one
          continue
        }
      }
      
      // Fallback: search for text content
      if (!element) {
        const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        for (const el of allElements) {
          if (el.textContent.trim() === sectionTitle) {
            element = el
            break
          }
        }
      }
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  // Navigation items - like the pages panel in Figma
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'js-fundamentals', label: 'JS Fundamentals', icon: FileText, path: '/js-fundamentals' },

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
      {/* Mobile Menu Toggle - moved to top right */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
      </button>

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
          {/* Global Search */}
          <div className="search-section">
            <GlobalSearch />
          </div>
          
          {/* Navigation Items */}
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            const hasSections = pageSections[item.id] && pageSections[item.id].length > 0
            const isExpanded = expandedItems.has(item.id)
            
            return (
              <div key={item.id} className="nav-accordion-item">
                <Link
                  to={item.path}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    if (hasSections) {
                      toggleExpanded(item.id)
                    }
                  }}
                >
                  <Icon className="nav-icon" />
                  <span className="nav-item-content">
                    <span className="nav-item-label">{item.label}</span>
                    {hasSections && (
                      <button
                        className="expand-button"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleExpanded(item.id)
                        }}
                      >
                        {isExpanded ? (
                          <ChevronUp className="expand-icon" />
                        ) : (
                          <ChevronDown className="expand-icon" />
                        )}
                      </button>
                    )}
                  </span>
                </Link>

                {/* Subsections */}
                {isExpanded && hasSections && (
                  <div className="nav-subsections">
                    {pageSections[item.id].map((section, index) => (
                      <button
                        key={index}
                        className="nav-subsection"
                        onClick={() => {
                          scrollToSection(section.title)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <span className="subsection-title">{section.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
          <ArrowUp className="back-to-top-icon" />
        </button>
      )}
    </div>
  )
}

export default Layout 