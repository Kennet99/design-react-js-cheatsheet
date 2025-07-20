import React, { useState } from 'react'
import { SyntaxExample, CodeExample, ReferenceCode } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function CSSFrameworks() {
  const [activeTab, setActiveTab] = useState('custom-properties')
  const [searchTerm, setSearchTerm] = useState('')

  const cssFrameworkProperties = [
    {
      category: 'CSS Custom Properties (Variables)',
      properties: [
        { property: '--variable-name', values: 'value, 16px, #ff0000, 1.5, inherit, initial, unset', description: 'Custom property declaration (like CSS variables)' },
        { property: 'var(--variable-name)', values: 'var(--primary-color), var(--spacing, 16px)', description: 'Using custom properties (fallback value optional)' },
        { property: 'calc()', values: 'calc(100% - 20px), calc(2rem + 10px)', description: 'Mathematical calculations with CSS values' },
        { property: 'env()', values: 'env(safe-area-inset-top), env(keyboard-height)', description: 'Environment variables (device-specific values)' },
        { property: 'attr()', values: 'attr(data-width), attr(href)', description: 'Attribute values (limited support)' }
      ]
    },
    {
      category: 'CSS Mixins & Functions',
      properties: [
        { property: '@mixin', values: '@mixin button($color) { background: $color; }', description: 'SCSS/Sass mixin definition (reusable code blocks)' },
        { property: '@include', values: '@include button(red);', description: 'SCSS/Sass mixin usage (includes mixin code)' },
        { property: '@function', values: '@function multiply($a, $b) { @return $a * $b; }', description: 'SCSS/Sass function definition (returns values)' },
        { property: '@extend', values: '@extend .button;', description: 'SCSS/Sass inheritance (extends existing styles)' },
        { property: '@import', values: '@import "variables"; @import "mixins";', description: 'SCSS/Sass file imports (modular CSS)' },
        { property: '@use', values: '@use "sass:math"; @use "variables" as *;', description: 'Modern SCSS/Sass module system' },
        { property: '@forward', values: '@forward "variables";', description: 'SCSS/Sass module forwarding (re-exports)' }
      ]
    },
    {
      category: 'CSS-in-JS Properties',
      properties: [
        { property: 'styled-components', values: 'const Button = styled.button`color: ${props => props.primary ? "blue" : "red"};`', description: 'Styled Components syntax (CSS-in-JS library)' },
        { property: 'emotion', values: 'const Button = styled.button`color: ${props => props.primary ? "blue" : "red"};`', description: 'Emotion CSS-in-JS syntax (similar to styled-components)' },
        { property: 'css prop', values: 'css`color: ${props => props.primary ? "blue" : "red"};`', description: 'Emotion css prop (inline styles with CSS-in-JS)' },
        { property: 'keyframes', values: 'const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`', description: 'CSS-in-JS keyframes (animations)' },
        { property: 'theme', values: '${props => props.theme.colors.primary}', description: 'Theme access in CSS-in-JS (design system values)' },
        { property: 'media queries', values: '${props => props.theme.breakpoints.md}', description: 'Media queries in CSS-in-JS (responsive design)' }
      ]
    },
    {
      category: 'Tailwind CSS Utilities',
      properties: [
        { property: 'Layout', values: 'flex, grid, block, inline-block, hidden, visible', description: 'Display and layout utilities' },
        { property: 'Spacing', values: 'p-4, m-2, px-6, py-3, space-x-4, space-y-2', description: 'Padding, margin, and spacing utilities' },
        { property: 'Sizing', values: 'w-full, h-screen, max-w-md, min-h-32, w-1/2, h-auto', description: 'Width, height, and sizing utilities' },
        { property: 'Typography', values: 'text-lg, font-bold, text-center, leading-relaxed, tracking-wide', description: 'Text styling and typography utilities' },
        { property: 'Colors', values: 'bg-blue-500, text-red-600, border-green-300, text-white', description: 'Background, text, and border color utilities' },
        { property: 'Borders', values: 'border, border-2, rounded-lg, border-gray-300, border-t', description: 'Border styling and radius utilities' },
        { property: 'Effects', values: 'shadow-lg, opacity-50, blur-sm, grayscale, hover:scale-105', description: 'Shadows, opacity, filters, and hover effects' },
        { property: 'Transitions', values: 'transition-all, duration-300, ease-in-out, delay-100', description: 'Animation and transition utilities' },
        { property: 'Responsive', values: 'md:flex, lg:grid, sm:text-lg, xl:px-8', description: 'Responsive design utilities (breakpoint prefixes)' },
        { property: 'Dark Mode', values: 'dark:bg-gray-800, dark:text-white', description: 'Dark mode utilities (dark: prefix)' }
      ]
    },
    {
      category: 'CSS Modules',
      properties: [
        { property: 'Local Scope', values: '.button { } /* becomes .button_abc123 */', description: 'CSS Modules local scoping (prevents conflicts)' },
        { property: 'Composition', values: '.button { composes: baseButton from "./base.css"; }', description: 'CSS Modules composition (inherits from other modules)' },
        { property: 'Global Scope', values: ':global(.global-class) { }', description: 'CSS Modules global scope (escapes local scoping)' },
        { property: 'Import', values: 'import styles from "./Button.module.css";', description: 'CSS Modules import (JavaScript import syntax)' },
        { property: 'Usage', values: 'className={styles.button}', description: 'CSS Modules usage (applies scoped class names)' }
      ]
    },
    {
      category: 'CSS Grid Frameworks',
      properties: [
        { property: 'Bootstrap Grid', values: 'col-12, col-md-6, col-lg-4, row, container-fluid', description: 'Bootstrap responsive grid system' },
        { property: 'Foundation Grid', values: 'small-12, medium-6, large-4, row, column', description: 'Foundation responsive grid system' },
        { property: 'Bulma Grid', values: 'columns, column, is-12, is-6, is-4', description: 'Bulma CSS framework grid system' },
        { property: 'Material-UI Grid', values: 'Grid container, Grid item, xs={12}, md={6}', description: 'Material-UI responsive grid system' },
        { property: 'Chakra UI Grid', values: 'Grid, GridItem, templateColumns, gap', description: 'Chakra UI grid system' }
      ]
    },
    {
      category: 'CSS Animation Libraries',
      properties: [
        { property: 'Animate.css', values: 'animate__animated, animate__fadeIn, animate__bounce', description: 'Animate.css animation classes' },
        { property: 'Framer Motion', values: 'motion.div, animate, initial, exit, transition', description: 'Framer Motion animation props' },
        { property: 'React Spring', values: 'useSpring, animated.div, from, to, config', description: 'React Spring animation hooks' },
        { property: 'GSAP', values: 'gsap.to(), gsap.from(), gsap.timeline()', description: 'GSAP animation library methods' },
        { property: 'Lottie', values: 'Lottie animation, bodymovin, After Effects', description: 'Lottie animation format and libraries' }
      ]
    },
    {
      category: 'CSS Preprocessor Variables',
      properties: [
        { property: 'SCSS Variables', values: '$primary-color: #007bff; $spacing: 16px;', description: 'SCSS variable declarations (compile-time)' },
        { property: 'Sass Variables', values: '$primary-color: #007bff; $spacing: 16px;', description: 'Sass variable declarations (compile-time)' },
        { property: 'Less Variables', values: '@primary-color: #007bff; @spacing: 16px;', description: 'Less variable declarations (compile-time)' },
        { property: 'Stylus Variables', values: 'primary-color = #007bff; spacing = 16px;', description: 'Stylus variable declarations (compile-time)' }
      ]
    },
    {
      category: 'Modern CSS Features',
      properties: [
        { property: 'Container Queries', values: '@container (min-width: 400px) { }', description: 'Container queries (responsive to parent size)' },
        { property: 'Subgrid', values: 'grid-template-columns: subgrid;', description: 'CSS Grid subgrid (nested grid alignment)' },
        { property: 'CSS Nesting', values: '.parent { .child { color: red; } }', description: 'CSS nesting (native CSS nesting)' },
        { property: 'CSS Layers', values: '@layer base, components, utilities;', description: 'CSS layers (cascade control)' },
        { property: 'CSS Scope', values: '@scope (.parent) to (.child) { }', description: 'CSS scope (limited style inheritance)' },
        { property: 'CSS Container', values: 'container-type: inline-size;', description: 'CSS container queries setup' },
        { property: 'CSS Houdini', values: 'CSS.registerProperty(), CSS.paintWorklet', description: 'CSS Houdini APIs (custom CSS features)' }
      ]
    },
    {
      category: 'Design System Properties',
      properties: [
        { property: 'Design Tokens', values: '--color-primary, --spacing-unit, --font-family', description: 'Design tokens (design system variables)' },
        { property: 'Theme Variables', values: '--theme-light, --theme-dark, --theme-spacing', description: 'Theme variables (multi-theme support)' },
        { property: 'Component Variants', values: '--button-primary, --button-secondary, --button-size', description: 'Component variant variables' },
        { property: 'Breakpoint System', values: '--breakpoint-sm, --breakpoint-md, --breakpoint-lg', description: 'Breakpoint system variables' },
        { property: 'Typography Scale', values: '--font-size-xs, --font-size-sm, --font-size-base', description: 'Typography scale variables' },
        { property: 'Color Palette', values: '--color-50, --color-100, --color-500, --color-900', description: 'Color palette variables' }
      ]
    }
  ]

  const filteredProperties = cssFrameworkProperties.map(category => ({
    ...category,
    properties: category.properties.filter(prop =>
      prop.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.properties.length > 0)

  return (
    <div className="section">
      <h1>CSS Frameworks & Modern CSS</h1>
      <p>Comprehensive guide to CSS frameworks, preprocessors, and modern CSS features</p>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search CSS framework properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab ${activeTab === 'custom-properties' ? 'active' : ''}`}
          onClick={() => setActiveTab('custom-properties')}
        >
          <Type className="tab-icon" />
          Custom Properties
        </button>
        <button
          className={`tab ${activeTab === 'preprocessors' ? 'active' : ''}`}
          onClick={() => setActiveTab('preprocessors')}
        >
          <Code className="tab-icon" />
          Preprocessors
        </button>
        <button
          className={`tab ${activeTab === 'frameworks' ? 'active' : ''}`}
          onClick={() => setActiveTab('frameworks')}
        >
          <Sparkles className="tab-icon" />
          Frameworks
        </button>
        <button
          className={`tab ${activeTab === 'modern' ? 'active' : ''}`}
          onClick={() => setActiveTab('modern')}
        >
          <Zap className="tab-icon" />
          Modern CSS
        </button>
      </div>

      {/* Custom Properties Tab */}
      {activeTab === 'custom-properties' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>CSS Custom Properties & Variables</h2>
            <p className="section-summary">Modern CSS variables and dynamic styling capabilities. Custom properties (like CSS variables) allow you to define reusable values for colors, spacing, and other design elements, making your styles more maintainable and reusable.</p>
            <div className="figma-analogy">
              <strong>Figma Analogy:</strong> Custom properties are like variables in Figma, allowing you to define reusable values for colors, spacing, and other design elements.
            </div>
          </div>

          {filteredProperties.filter(cat => 
            cat.category === 'CSS Custom Properties (Variables)' || 
            cat.category === 'Design System Properties'
          ).map((category, index) => (
            <div key={index} className="cheatsheet-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="properties-grid">
                {category.properties.map((prop, propIndex) => (
                  <div key={propIndex} className="property-card">
                    <div className="property-header">
                      <code className="property-name">{prop.property}</code>
                      <span className="property-description">{prop.description}</span>
                    </div>
                    <div className="property-values">
                      <strong>Values:</strong>
                      <code className="values-code">{prop.values}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preprocessors Tab */}
      {activeTab === 'preprocessors' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>CSS Preprocessors & Mixins</h2>
            <p className="section-summary">SCSS, Sass, Less, and other CSS preprocessors provide powerful features like mixins, functions, and inheritance, making your stylesheets more maintainable and reusable.</p>
            <div className="figma-analogy">
              <strong>Figma Analogy:</strong> Preprocessors are like using a design system with pre-built components and mixins.
            </div>
          </div>

          {filteredProperties.filter(cat => 
            cat.category === 'CSS Mixins & Functions' || 
            cat.category === 'CSS Preprocessor Variables'
          ).map((category, index) => (
            <div key={index} className="cheatsheet-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="properties-grid">
                {category.properties.map((prop, propIndex) => (
                  <div key={propIndex} className="property-card">
                    <div className="property-header">
                      <code className="property-name">{prop.property}</code>
                      <span className="property-description">{prop.description}</span>
                    </div>
                    <div className="property-values">
                      <strong>Values:</strong>
                      <code className="values-code">{prop.values}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Frameworks Tab */}
      {activeTab === 'frameworks' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>CSS Frameworks & Libraries</h2>
            <p className="section-summary">Popular CSS frameworks, utility libraries, and CSS-in-JS solutions provide pre-styled components, utilities, and grid systems for rapid development and consistent design.</p>
            <div className="figma-analogy">
              <strong>Figma Analogy:</strong> Frameworks are like using a design system with pre-built components and utilities.
            </div>
          </div>

          {filteredProperties.filter(cat => 
            cat.category === 'Tailwind CSS Utilities' || 
            cat.category === 'CSS-in-JS Properties' ||
            cat.category === 'CSS Modules' ||
            cat.category === 'CSS Grid Frameworks' ||
            cat.category === 'CSS Animation Libraries'
          ).map((category, index) => (
            <div key={index} className="cheatsheet-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="properties-grid">
                {category.properties.map((prop, propIndex) => (
                  <div key={propIndex} className="property-card">
                    <div className="property-header">
                      <code className="property-name">{prop.property}</code>
                      <span className="property-description">{prop.description}</span>
                    </div>
                    <div className="property-values">
                      <strong>Values:</strong>
                      <code className="values-code">{prop.values}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modern CSS Tab */}
      {activeTab === 'modern' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>Modern CSS Features</h2>
            <p className="section-summary">Latest CSS features and experimental capabilities, including container queries, subgrid, CSS nesting, CSS layers, CSS scope, CSS container, and CSS Houdini APIs, provide advanced styling and layout capabilities.</p>
            <div className="figma-analogy">
              <strong>Figma Analogy:</strong> Modern CSS features are like using a design system with advanced capabilities.
            </div>
          </div>

          {filteredProperties.filter(cat => 
            cat.category === 'Modern CSS Features'
          ).map((category, index) => (
            <div key={index} className="cheatsheet-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="properties-grid">
                {category.properties.map((prop, propIndex) => (
                  <div key={propIndex} className="property-card">
                    <div className="property-header">
                      <code className="property-name">{prop.property}</code>
                      <span className="property-description">{prop.description}</span>
                    </div>
                    <div className="property-values">
                      <strong>Values:</strong>
                      <code className="values-code">{prop.values}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Reference */}
      <div className="quick-reference">
        <h2>Quick Reference</h2>
        <div className="reference-grid">
          <div className="reference-card">
            <h3>CSS Custom Properties</h3>
            <ReferenceCode
              code={`:root {
  --primary-color: #007bff;
  --spacing-unit: 16px;
  --font-family: 'Arial', sans-serif;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
  font-family: var(--font-family);
}`}
              language="css"
            />
          </div>
          <div className="reference-card">
            <h3>SCSS Mixins</h3>
            <ReferenceCode
              code={`@mixin button($color) {
  background: $color;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.primary-button {
  @include button(#007bff);
}

.secondary-button {
  @include button(#6c757d);
}`}
              language="scss"
            />
          </div>
          <div className="reference-card">
            <h3>Tailwind CSS</h3>
            <ReferenceCode
              code={`<!-- Tailwind utility classes -->
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-gray-800 mb-4">
      Hello World
    </h1>
    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
      Click me
    </button>
  </div>
</div>`}
              language="html"
            />
          </div>
          <div className="reference-card">
            <h3>CSS-in-JS (Styled Components)</h3>
            <ReferenceCode
              code={`const Button = styled.button\`
  background: \${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
\`;

function App() {
  return (
    <div>
      <Button primary>Primary</Button>
      <Button>Secondary</Button>
    </div>
  );
}`}
              language="javascript"
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export default CSSFrameworks