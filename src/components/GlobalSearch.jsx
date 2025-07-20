import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchPages } from '../data/searchData'

function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef(null)
  const navigate = useNavigate()

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.trim()) {
      const results = searchPages(query)
      setSearchResults(results)
      setIsOpen(true)
    } else {
      setSearchResults([])
      setIsOpen(false)
    }
  }

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close search when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    setIsOpen(false)
  }

  /**
   * When a search result is clicked, if it's a section, append a hash to the URL (e.g., /page#SectionTitle)
   * and after navigation, scroll to the section heading.
   */
  const handleResultClick = (result) => {
    setIsOpen(false)
    setSearchQuery('')
    // If it's a section, append hash and scroll after navigation
    if (result.type === 'section') {
      navigate(result.path + '#' + encodeURIComponent(result.title))
      setTimeout(() => {
        // Try to scroll to the section after navigation
        const sectionTitle = result.title
        let element = null
        // Try h2, h3, h1, then partial match
        const h2Elements = document.querySelectorAll('h2')
        for (const el of h2Elements) {
          if (el.textContent.trim() === sectionTitle) {
            element = el
            break
          }
        }
        if (!element) {
          const h3Elements = document.querySelectorAll('h3')
          for (const el of h3Elements) {
            if (el.textContent.trim() === sectionTitle) {
              element = el
              break
            }
          }
        }
        if (!element) {
          const h1Elements = document.querySelectorAll('h1')
          for (const el of h1Elements) {
            if (el.textContent.trim() === sectionTitle) {
              element = el
              break
            }
          }
        }
        if (!element) {
          const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
          for (const el of allHeadings) {
            if (el.textContent.trim().includes(sectionTitle) || sectionTitle.includes(el.textContent.trim())) {
              element = el
              break
            }
          }
        }
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          element.style.transition = 'background-color 0.3s ease'
          element.style.backgroundColor = 'rgba(99, 102, 241, 0.1)'
          setTimeout(() => {
            element.style.backgroundColor = ''
          }, 2000)
        }
      }, 300)
    } else {
      navigate(result.path)
    }
  }

  return (
    <div className="global-search" ref={searchRef}>
      <div className="search-input-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search pages and sections..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="global-search-input"
        />
        {searchQuery && (
          <button onClick={clearSearch} className="clear-search-btn">
            <X className="clear-icon" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div className="search-results-dropdown">
          <div className="search-results-header">
            <span>Search Results ({searchResults.length})</span>
          </div>
          <div className="search-results-list">
            {searchResults.map((result, index) => (
              <Link
                key={index}
                to={result.path}
                className="search-result-item"
                onClick={(e) => {
                  e.preventDefault()
                  handleResultClick(result)
                }}
              >
                <div className="result-content">
                  <div className="result-title">{result.title}</div>
                  <div className="result-page">{result.page}</div>
                </div>
                <div className="result-type">{result.type === 'page-title' ? 'Page' : 'Section'}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery && searchResults.length === 0 && (
        <div className="search-results-dropdown">
          <div className="no-results">
            <span>No results found for "{searchQuery}"</span>
            <p>Try searching for different keywords</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default GlobalSearch 