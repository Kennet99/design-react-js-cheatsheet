import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function StylingDesign() {
  // Interactive state for styling examples
  const [stylingTheme, setStylingTheme] = useState('light')
  const [stylingButtonVariant, setStylingButtonVariant] = useState('primary')
  const [stylingCardStyle, setStylingCardStyle] = useState('default')
  const [stylingResponsiveSize, setStylingResponsiveSize] = useState('desktop')

  return (
    <div className="section">
      <h1>Styling & Design</h1>
      <p>CSS, styling approaches, and design system implementation</p>

      <div className="concept-card">
        <h2>CSS-in-JS (Styled Components)</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Styled Components are like Figma components with built-in styles - they combine design and functionality.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Install: npm install styled-components
import styled from 'styled-components';

// Create styled component
const StyledButton = styled.button\`
  background: \${props => props.variant === 'primary' ? '#6366f1' : '#f59e0b'};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
\`;

// Use in component
<StyledButton variant="primary">Click me</StyledButton>`}
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Styled Components (like Figma components with styles)
import styled from 'styled-components';

// Styled button component
const StyledButton = styled.button\`
  background: \${props => props.variant === 'primary' ? '#6366f1' : '#f59e0b'};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;

// Styled card component
const StyledCard = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  
  \${props => props.variant === 'elevated' && \`
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  \`}
\`;

function StyledComponentsDemo() {
  return (
    <div>
      <StyledButton variant="primary">Primary Button</StyledButton>
      <StyledButton variant="secondary">Secondary Button</StyledButton>
      <StyledCard variant="elevated">
        <h3>Styled Card</h3>
        <p>This card has built-in styles!</p>
      </StyledCard>
    </div>
  );
}`}
              explanation="Styled Components combine CSS and React components, making them reusable and maintainable like Figma components."
            />
          </div>
          <div className="output-panel">
            <h4>Styled Components Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Button Variant:</label>
                  <select 
                    value={stylingButtonVariant} 
                    onChange={(e) => setStylingButtonVariant(e.target.value)}
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                  </select>
                </div>
                <div className="demo-item">
                  <label>Card Style:</label>
                  <select 
                    value={stylingCardStyle} 
                    onChange={(e) => setStylingCardStyle(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="elevated">Elevated</option>
                  </select>
                </div>
                <div className="demo-item">
                  <div style={{
                    background: stylingButtonVariant === 'primary' ? '#6366f1' : '#f59e0b',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '16px'
                  }}>
                    {stylingButtonVariant === 'primary' ? 'Primary' : 'Secondary'} Button
                  </div>
                  <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: stylingCardStyle === 'elevated' ? '0 10px 25px rgba(0, 0, 0, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb'
                  }}>
                    <h3>Styled Card</h3>
                    <p>This card has built-in styles!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>CSS Modules & Scoped Styling</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> CSS Modules are like component-specific styles in Figma - they don't affect other components.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Button.module.css
.button {
  background: #6366f1;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
}

.button:hover {
  opacity: 0.9;
}

// Button.jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click me</button>;
}`}
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// CSS Modules (scoped styling)
// Button.module.css
.button {
  background: #6366f1;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
}

.button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.button.secondary {
  background: #f59e0b;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${variant === 'secondary' ? styles.secondary : ''}\`}>
      {children}
    </button>
  );
}

// Usage
<Button>Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>`}
              explanation="CSS Modules provide scoped styling that only applies to specific components, preventing style conflicts."
            />
          </div>
          <div className="output-panel">
            <h4>CSS Modules Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <p><strong>Benefits:</strong></p>
                  <ul>
                    <li>✅ Scoped styles (no conflicts)</li>
                    <li>✅ Component-specific styling</li>
                    <li>✅ Better organization</li>
                    <li>✅ Type safety with TypeScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Utility-First CSS (Tailwind)</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Tailwind CSS is like using Figma's design tokens and constraints - you build designs with predefined utilities.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Install: npm install -D tailwindcss
// Configure in tailwind.config.js

// Utility classes
<div className="bg-blue-500 text-white px-6 py-3 rounded-lg">
  Button
</div>

// Responsive design
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive card
</div>

// Hover states
<button className="bg-blue-500 hover:bg-blue-600">
  Hover me
</button>`}
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Tailwind CSS (utility-first approach)
function TailwindDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Card with Tailwind utilities */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Tailwind Card
        </h2>
        <p className="text-gray-600 mb-4">
          Built entirely with utility classes
        </p>
        
        {/* Button group */}
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Primary
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors">
            Secondary
          </button>
        </div>
      </div>
      
      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded">Card 1</div>
        <div className="bg-gray-100 p-4 rounded">Card 2</div>
        <div className="bg-gray-100 p-4 rounded">Card 3</div>
      </div>
    </div>
  );
}`}
              explanation="Tailwind CSS provides utility classes that you combine to build designs, similar to how you use design tokens in Figma."
            />
          </div>
          <div className="output-panel">
            <h4>Tailwind Utilities Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Responsive Size:</label>
                  <select 
                    value={stylingResponsiveSize} 
                    onChange={(e) => setStylingResponsiveSize(e.target.value)}
                  >
                    <option value="mobile">Mobile</option>
                    <option value="tablet">Tablet</option>
                    <option value="desktop">Desktop</option>
                  </select>
                </div>
                <div className="demo-item">
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: stylingResponsiveSize === 'mobile' ? '1fr' : 
                                       stylingResponsiveSize === 'tablet' ? '1fr 1fr' : '1fr 1fr 1fr',
                    gap: '16px',
                    marginTop: '16px'
                  }}>
                    <div style={{ background: '#f3f4f6', padding: '16px', borderRadius: '4px' }}>Card 1</div>
                    <div style={{ background: '#f3f4f6', padding: '16px', borderRadius: '4px' }}>Card 2</div>
                    <div style={{ background: '#f3f4f6', padding: '16px', borderRadius: '4px' }}>Card 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Responsive Design Patterns</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Responsive design is like creating different frame sizes in Figma - you design for multiple screen sizes.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// CSS Media Queries
@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
}

// Tailwind Responsive Classes
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive element
</div>

// CSS Grid Responsive
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`}
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Responsive Design Patterns
function ResponsiveLayout() {
  return (
    <div className="responsive-container">
      {/* Mobile-first approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card">
          <h3>Card 1</h3>
          <p>This adapts to screen size</p>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>Mobile: 1 column</p>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>Tablet: 2 columns</p>
        </div>
      </div>
      
      {/* Responsive typography */}
      <div className="text-sm md:text-base lg:text-lg">
        Responsive text size
      </div>
      
      {/* Responsive spacing */}
      <div className="p-4 md:p-6 lg:p-8">
        Responsive padding
      </div>
    </div>
  );
}

// CSS for responsive design
.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

@media (min-width: 768px) {
  .responsive-container {
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .responsive-container {
    padding: 32px;
  }
}`}
              explanation="Responsive design ensures your UI works well on all screen sizes, from mobile to desktop."
            />
          </div>
          <div className="output-panel">
            <h4>Responsive Design Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <p><strong>Responsive Breakpoints:</strong></p>
                  <ul>
                    <li>📱 Mobile: &lt; 768px (1 column)</li>
                    <li>📱 Tablet: 768px - 1024px (2 columns)</li>
                    <li>🖥️ Desktop: &gt; 1024px (3 columns)</li>
                  </ul>
                </div>
                <div className="demo-item">
                  <p><strong>Design Principles:</strong></p>
                  <ul>
                    <li>✅ Mobile-first approach</li>
                    <li>✅ Flexible layouts</li>
                    <li>✅ Scalable typography</li>
                    <li>✅ Touch-friendly interactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default StylingDesign