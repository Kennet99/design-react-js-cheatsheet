import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function FigmaMapping() {
  return (
    <div className="section">
      <h1>Figma to React Mapping</h1>
      <p>How design concepts translate to code</p>

      <div className="mapping-grid">
        <div className="mapping-card">
          <h3>Figma Frame → React Component</h3>
          <p>A frame in Figma becomes a component in React</p>
          <CodeExample
            code={`// Figma Frame → React Component
function Card() {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Card content</p>
    </div>
  );
}`}
          />
        </div>

        <div className="mapping-card">
          <h3>Figma Component → Reusable React Component</h3>
          <p>Figma components become reusable React components with props</p>
          <CodeExample
            code={`// Figma Component → React Component with Props
function Button({ text, variant }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {text}
    </button>
  );
}`}
          />
        </div>

        <div className="mapping-card">
          <h3>Figma Auto Layout → CSS Flexbox/Grid</h3>
          <p>Auto layout properties translate to CSS layout</p>
          <CodeExample
            code={`// Figma Auto Layout → CSS
.card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}`}
          />
        </div>

        <div className="mapping-card">
          <h3>Figma Constraints → CSS Positioning</h3>
          <p>Constraints become responsive CSS rules</p>
          <CodeExample
            code={`// Figma Constraints → CSS
.responsive-element {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}`}
          />
        </div>

        <div className="mapping-card">
          <h3>Figma Interactions → React Event Handlers</h3>
          <p>Figma interactions become JavaScript event handlers</p>
          <CodeExample
            code={`// Figma Interaction → React Event Handler
function InteractiveButton() {
  const handleClick = () => {
    // Handle click like Figma interaction
    console.log("Button clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}`}
          />
        </div>

        <div className="mapping-card">
          <h3>Figma Variants → React Conditional Rendering</h3>
          <p>Component variants become conditional rendering</p>
          <CodeExample
            code={`// Figma Variants → React Conditional Rendering
function Button({ variant, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      Button Text
    </button>
  );
}`}
          />
        </div>
      </div>

      <div className="concept-card">
        <h2>Design System Translation</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Your Figma design system can be directly translated to React components and CSS variables.
        </div>
        <CodeExample
          code={`// Figma Design System → React/CSS
:root {
  /* Colors from Figma */
  --primary: #6366f1;
  --secondary: #f59e0b;
  --success: #10b981;
  --error: #ef4444;
  
  /* Typography from Figma */
  --font-family: 'Inter', sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Spacing from Figma */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;
}

// Using design system in components
function DesignSystemButton({ variant, size }) {
  return (
    <button className={\`btn btn-\${variant} btn-\${size}\`}>
      Button
    </button>
  );
}`}
          explanation="Your Figma design system can be directly translated to CSS variables and React components, ensuring consistency between design and code."
        />
      </div>
    </div>
  )

}

export default FigmaMapping