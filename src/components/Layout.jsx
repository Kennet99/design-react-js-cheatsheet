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

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
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
      let element = null
      
      // First, try to find by exact text content in h2 tags (most common)
      const h2Elements = document.querySelectorAll('h2')
      for (const el of h2Elements) {
        if (el.textContent.trim() === sectionTitle) {
          element = el
          break
        }
      }
      
      // If not found in h2, try h3 tags
      if (!element) {
        const h3Elements = document.querySelectorAll('h3')
        for (const el of h3Elements) {
          if (el.textContent.trim() === sectionTitle) {
            element = el
            break
          }
        }
      }
      
      // If still not found, try h1 tags
      if (!element) {
        const h1Elements = document.querySelectorAll('h1')
        for (const el of h1Elements) {
          if (el.textContent.trim() === sectionTitle) {
            element = el
            break
          }
        }
      }
      
      // If still not found, try partial text matching
      if (!element) {
        const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        for (const el of allHeadings) {
          if (el.textContent.trim().includes(sectionTitle) || 
              sectionTitle.includes(el.textContent.trim())) {
            element = el
            break
          }
        }
      }
      
      // If found, scroll to it
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        
        // Add a subtle highlight effect
        element.style.transition = 'background-color 0.3s ease'
        element.style.backgroundColor = 'rgba(99, 102, 241, 0.1)'
        setTimeout(() => {
          element.style.backgroundColor = ''
        }, 2000)
      } else {
        console.log(`Section "${sectionTitle}" not found on current page`)
      }
    }, 150) // Slightly longer delay to ensure page is loaded
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