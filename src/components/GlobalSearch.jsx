import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchPages } from '../data/searchData'

function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef(null)

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

  const handleResultClick = () => {
    setIsOpen(false)
    setSearchQuery('')
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
                onClick={handleResultClick}
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