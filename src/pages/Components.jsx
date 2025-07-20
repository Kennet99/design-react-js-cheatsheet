import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function Components() {
  // Interactive state for Props Deep Dive demo
  const [propsButtonText, setPropsButtonText] = useState('Click me')
  const [propsButtonVariant, setPropsButtonVariant] = useState('primary')
  const [propsButtonSize, setPropsButtonSize] = useState('medium')
  const [propsButtonDisabled, setPropsButtonDisabled] = useState(false)
  const [propsUserCard, setPropsUserCard] = useState({ name: 'John Doe', email: 'john@example.com', id: 1 })
  const [propsContainerTitle, setPropsContainerTitle] = useState('My Container')
  const [propsContainerContent, setPropsContainerContent] = useState('This is some content')

  // Interactive state for Component Composition demo
  const [compositionData, setCompositionData] = useState(null)
  const [compositionLoading, setCompositionLoading] = useState(false)
  const [compositionFormData, setCompositionFormData] = useState({ name: '', email: '' })

  return (
    <div className="section">
      <h1>React Components</h1>
      <p>Building reusable UI pieces like Figma components</p>

      <div className="concept-card">
        <h2>Props Deep Dive</h2>
        <div className="explanation">Props are the primary way to pass data and functions to components, making them reusable and customizable.</div>
        <p className="section-summary">How to pass data between components and handle prop validation and defaults. Props let you customize component instances and enable reusability.</p>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Props are like component properties in Figma - they allow you to customize instances with different values.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Component with props
function ComponentName({ prop1, prop2, children }) {
  return <div>{prop1} {prop2} {children}</div>;
}

// Using the component
<ComponentName prop1="value1" prop2="value2">
  Child content
</ComponentName>

// Default props
ComponentName.defaultProps = {
  prop1: 'default value'
};

// Props validation
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Props Input:</strong>
              <ul>
                <li><code>propName</code> (any) - Component property</li>
                <li><code>prop1, prop2</code> (any) - Multiple properties</li>
                <li><code>children</code> (JSX) - Child components</li>
                <li><code>defaultValue</code> (any) - Default prop value</li>
                <li><code>callback</code> (function) - Function prop</li>
      </ul>
            </div>
            <div className="io-output">
              <strong>Props Usage:</strong>
              <ul>
                <li><code>any</code> - Property value usage</li>
                <li><code>string</code> - Text content rendering</li>
                <li><code>className</code> - Dynamic CSS classes</li>
                <li><code>boolean</code> - Conditional rendering</li>
                <li><code>function</code> - Event handler binding</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. Basic props
function Button({ text, variant, size, disabled }) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size} \${disabled ? 'disabled' : ''}\`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// 2. Default props
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
};

// 3. Props validation (with PropTypes)
import PropTypes from 'prop-types';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

// 4. Destructuring props
function UserCard({ user, onEdit, onDelete, ...otherProps }) {
  return (
    <div className="user-card" {...otherProps}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onEdit(user.id)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
}

// 5. Children prop (for composition)
function Container({ children, title, className }) {
  return (
    <div className={\`container \${className || ''}\`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}`}
              explanation="Props are the primary way to pass data and functions to components, making them reusable and customizable."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Props Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Button Props:</label>
                  <div className="input-group">
                    <input 
                      value={propsButtonText} 
                      onChange={(e) => setPropsButtonText(e.target.value)}
                      placeholder="Button text"
                    />
                    <select 
                      value={propsButtonVariant} 
                      onChange={(e) => setPropsButtonVariant(e.target.value)}
                    >
                      <option value="primary">Primary</option>
                      <option value="secondary">Secondary</option>
                      <option value="danger">Danger</option>
                    </select>
                    <select 
                      value={propsButtonSize} 
                      onChange={(e) => setPropsButtonSize(e.target.value)}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                    <button onClick={() => setPropsButtonDisabled(!propsButtonDisabled)}>
                      {propsButtonDisabled ? 'Enable' : 'Disable'}
                    </button>
                  </div>
                  <div className="result">
                    <button 
                      className={`btn btn-${propsButtonVariant} btn-${propsButtonSize} ${propsButtonDisabled ? 'disabled' : ''}`}
                      disabled={propsButtonDisabled}
                      onClick={() => alert('Button clicked!')}
                      style={{
                        backgroundColor: propsButtonVariant === 'primary' ? '#3b82f6' : 
                                       propsButtonVariant === 'secondary' ? '#6b7280' : '#ef4444',
                        padding: propsButtonSize === 'small' ? '4px 8px' : 
                                propsButtonSize === 'medium' ? '8px 16px' : '12px 24px',
                        opacity: propsButtonDisabled ? 0.6 : 1,
                        cursor: propsButtonDisabled ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {propsButtonText}
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>User Card Props:</label>
                  <div className="input-group">
                    <input 
                      value={propsUserCard.name} 
                      onChange={(e) => setPropsUserCard(prev => ({...prev, name: e.target.value}))}
                      placeholder="User name"
                    />
                    <input 
                      value={propsUserCard.email} 
                      onChange={(e) => setPropsUserCard(prev => ({...prev, email: e.target.value}))}
                      placeholder="User email"
                    />
                  </div>
                  <div className="result">
                    <div className="user-card" style={{
                      border: '1px solid #e5e7eb',
                      padding: '16px',
                      borderRadius: '8px',
                      marginTop: '8px'
                    }}>
                      <h3 style={{margin: '0 0 8px 0'}}>{propsUserCard.name}</h3>
                      <p style={{margin: '0 0 12px 0', color: '#6b7280'}}>{propsUserCard.email}</p>
                      <div className="button-group">
                        <button onClick={() => alert('Edit user: ' + propsUserCard.id)} style={{marginRight: '8px'}}>Edit</button>
                        <button onClick={() => alert('Delete user: ' + propsUserCard.id)} style={{backgroundColor: '#ef4444'}}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Container with Children:</label>
                  <div className="input-group">
                    <input 
                      value={propsContainerTitle} 
                      onChange={(e) => setPropsContainerTitle(e.target.value)}
                      placeholder="Container title"
                    />
                    <input 
                      value={propsContainerContent} 
                      onChange={(e) => setPropsContainerContent(e.target.value)}
                      placeholder="Container content"
                    />
                  </div>
                  <div className="result">
                    <div className="container" style={{
                      border: '1px solid #e5e7eb',
                      padding: '16px',
                      borderRadius: '8px',
                      marginTop: '8px'
                    }}>
                      {propsContainerTitle && <h2 style={{margin: '0 0 12px 0'}}>{propsContainerTitle}</h2>}
                      <div>{propsContainerContent}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Component Composition Patterns</h2>
        <div className="explanation">Component composition patterns help you build flexible, reusable component systems.</div>
        <p className="section-summary">Techniques for combining components to create complex UI structures. Composition patterns help you build flexible, maintainable, and scalable interfaces.</p>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Composition is like nesting Figma components - you can build complex layouts by combining simple building blocks.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Children composition
function Container({ children, title }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

// Render props
function DataProvider({ children }) {
  const [data, setData] = useState(null);
  return children({ data, setData });
}

// Higher-order component
function withFeature(Component) {
  return function EnhancedComponent(props) {
    return <Component {...props} feature={true} />;
  };
}

// Compound components
function Form({ children }) {
  return <form>{children}</form>;
}
Form.Input = ({ label, ...props }) => (
  <div><label>{label}</label><input {...props} /></div>
);`}
            language="javascript"
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. Children composition
function Layout({ header, sidebar, main, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <div className="content">
        <aside>{sidebar}</aside>
        <main>{main}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}

// 2. Render props pattern
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
}

// 3. Higher-order components (HOC)
function withLoading(Component) {
  return function WrappedComponent({ loading, ...props }) {
    if (loading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}

// 4. Compound components
function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.Input = function FormInput({ label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

Form.Button = function FormButton({ children, ...props }) {
  return <button {...props}>{children}</button>;
};`}
              explanation="Component composition patterns help you build flexible, reusable component systems."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Composition Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Layout Composition:</label>
                  <div className="result">
                    <div className="layout" style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <header style={{
                        backgroundColor: '#f3f4f6',
                        padding: '12px',
                        borderBottom: '1px solid #e5e7eb'
                      }}>
                        <h3 style={{margin: 0}}>Header Content</h3>
                      </header>
                      <div style={{display: 'flex'}}>
                        <aside style={{
                          backgroundColor: '#f9fafb',
                          padding: '12px',
                          width: '200px',
                          borderRight: '1px solid #e5e7eb'
                        }}>
                          <h4 style={{margin: '0 0 8px 0'}}>Sidebar</h4>
                          <ul style={{margin: 0, paddingLeft: '16px'}}>
                            <li>Menu Item 1</li>
                            <li>Menu Item 2</li>
                            <li>Menu Item 3</li>
                    </ul>
                        </aside>
                        <main style={{padding: '16px', flex: 1}}>
                          <h4 style={{margin: '0 0 12px 0'}}>Main Content</h4>
                          <p>This is the main content area with flexible layout composition.</p>
                        </main>
                  </div>
                      <footer style={{
                        backgroundColor: '#f3f4f6',
                        padding: '12px',
                        borderTop: '1px solid #e5e7eb',
                        textAlign: 'center'
                      }}>
                        Footer Content
                      </footer>
                </div>
              </div>
            </div>
                <div className="demo-item">
                  <label>Data Fetcher (Render Props):</label>
                  <div className="button-group">
                    <button onClick={() => {
                      setCompositionLoading(true)
                      setTimeout(() => {
                        setCompositionData({ message: 'Data loaded successfully!', timestamp: new Date().toLocaleTimeString() })
                        setCompositionLoading(false)
                      }, 1500)
                    }}>
                      Simulate Data Fetch
                    </button>
                    <button onClick={() => {
                      setCompositionData(null)
                      setCompositionLoading(false)
                    }}>
                      Clear Data
                    </button>
          </div>
                  <div className="result">
                    {compositionLoading ? (
                      <div style={{color: '#f59e0b'}}>🔄 Loading data...</div>
                    ) : compositionData ? (
                      <div style={{color: '#10b981'}}>
                        ✅ {compositionData.message}<br/>
                        <small>Time: {compositionData.timestamp}</small>
                      </div>
                    ) : (
                      <div style={{color: '#6b7280'}}>No data loaded</div>
                    )}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Compound Form Components:</label>
                  <div className="input-group">
                    <input 
                      value={compositionFormData.name} 
                      onChange={(e) => setCompositionFormData(prev => ({...prev, name: e.target.value}))}
                      placeholder="Name"
                    />
                    <input 
                      value={compositionFormData.email} 
                      onChange={(e) => setCompositionFormData(prev => ({...prev, email: e.target.value}))}
                      placeholder="Email"
                    />
                  </div>
                  <div className="result">
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      alert('Form submitted: ' + JSON.stringify(compositionFormData))
                    }} style={{
                      border: '1px solid #e5e7eb',
                      padding: '16px',
                      borderRadius: '8px',
                      marginTop: '8px'
                    }}>
                      <div style={{marginBottom: '12px'}}>
                        <label style={{display: 'block', marginBottom: '4px'}}>Name:</label>
                        <input 
                          value={compositionFormData.name} 
                          onChange={(e) => setCompositionFormData(prev => ({...prev, name: e.target.value}))}
                          style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db'}}
                        />
                      </div>
                      <div style={{marginBottom: '12px'}}>
                        <label style={{display: 'block', marginBottom: '4px'}}>Email:</label>
                        <input 
                          value={compositionFormData.email} 
                          onChange={(e) => setCompositionFormData(prev => ({...prev, email: e.target.value}))}
                          style={{width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #d1d5db'}}
                        />
                      </div>
                      <button type="submit" style={{
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}>
                        Submit Form
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Component Best Practices</h2>
        <div className="explanation">Following best practices ensures your components are maintainable, reusable, and performant.</div>
        <p className="section-summary">Guidelines for writing maintainable, reusable, and performant components. Best practices help ensure your codebase is clean, consistent, and easy to scale.</p>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Best practices are like Figma design guidelines - they help you create consistent, high-quality components.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. Single responsibility
// ❌ Bad: Component doing too much
function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserList />
      <UserForm />
      <UserStats />
      <UserSettings />
    </div>
  );
}

// ✅ Good: Focused components
function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <UserManagement />
      <UserAnalytics />
    </div>
  );
}

// 2. Props interface design
// ❌ Bad: Too many props
function Button({ text, color, size, disabled, loading, icon, ...rest }) {
  // Too many options
}

// ✅ Good: Logical prop groups
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  loading = false,
  ...props 
}) {
  // Clean, focused interface
}

// 3. Consistent naming
// ✅ Good: Clear, descriptive names
function UserProfileCard() { }
function UserProfileForm() { }
function UserProfileList() { }

// 4. Error boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`}
              explanation="Following best practices ensures your components are maintainable, reusable, and performant."
            />
          </div>
          <div className="output-panel">
            <h4>Best Practices:</h4>
            <div className="output-content">
              <p><strong>Single Responsibility:</strong> <span className="code-output">One job per component</span></p>
              <p><strong>Clean Props:</strong> <span className="code-output">Logical interfaces</span></p>
              <p><strong>Consistent Naming:</strong> <span className="code-output">Clear conventions</span></p>
              <p><strong>Error Handling:</strong> <span className="code-output">Error boundaries</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Components