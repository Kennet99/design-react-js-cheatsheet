import React from 'react'
import { Code, Zap, Layers, Settings } from 'lucide-react'

// Home section component
function HomeSection() {
  return (
    <div className="section">
      <h1>Welcome to React JS Cheatsheet</h1>
      <p className="lead">
        A comprehensive guide to JavaScript and React concepts, explained through the lens of Figma and design thinking.
      </p>
      
      <div className="feature-grid">
        <div className="feature-card">
          <Code className="feature-icon" />
          <h3>JavaScript Basics</h3>
          <p>Learn core JavaScript concepts with design analogies</p>
        </div>
        <div className="feature-card">
          <Zap className="feature-icon" />
          <h3>React Core</h3>
          <p>Understand React fundamentals and component architecture</p>
        </div>
        <div className="feature-card">
          <Layers className="feature-icon" />
          <h3>Components</h3>
          <p>Master component composition and props</p>
        </div>
        <div className="feature-card">
          <Settings className="feature-icon" />
          <h3>Hooks</h3>
          <p>Learn state management and side effects</p>
        </div>
      </div>

      <div className="getting-started">
        <h2>🎯 How to Use This Cheatsheet</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Start with JavaScript Basics</h4>
              <p>Understand variables, objects, and functions through Figma analogies</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Learn React Core Concepts</h4>
              <p>Discover how React components work like Figma components</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Master Hooks and State</h4>
              <p>Learn to make your UI interactive like Figma prototypes</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Build Real Projects</h4>
              <p>Apply your knowledge to create interactive prototypes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection 