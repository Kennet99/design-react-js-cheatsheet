import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function NavigationRouting() {
  // Interactive state for routing examples
  const [currentRoute, setCurrentRoute] = useState('/')
  const [routingHistory, setRoutingHistory] = useState(['/'])
  const [routingParams, setRoutingParams] = useState({})

  // Simulate route navigation
  const navigateTo = (route) => {
    setCurrentRoute(route)
    setRoutingHistory(prev => [...prev, route])
  }

  // Simulate route parameters
  const navigateWithParams = (route, params) => {
    setCurrentRoute(route)
    setRoutingParams(params)
    setRoutingHistory(prev => [...prev, route + '?' + new URLSearchParams(params)])
  }

  return (
    <div className="section">
      <h1>Navigation & Routing</h1>
      <p>Page navigation, routing, and URL management</p>

      <div className="concept-card">
        <h2>React Router Basics</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> React Router is like creating multiple pages in Figma - you can navigate between different views.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Install: npm install react-router-dom
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Router setup
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>

// Navigation
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>`}
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Router Input:</strong>
              <ul>
                <li><code>path</code> (string) - URL path pattern</li>
                <li><code>element</code> (JSX) - Component to render</li>
                <li><code>to</code> (string) - Navigation destination</li>
                <li><code>navigate</code> (function) - Programmatic navigation</li>
                <li><code>params</code> (object) - Route parameters</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Router Output:</strong>
              <ul>
                <li><code>JSX.Element</code> - Rendered route component</li>
                <li><code>string</code> - Current URL path</li>
                <li><code>object</code> - Route parameters</li>
                <li><code>function</code> - Navigation function</li>
                <li><code>history</code> - Navigation history</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// React Router Setup
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Main App with Router
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </nav>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// Navigation component with useNavigate
function Navigation() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };
  
  return (
    <div className="nav-buttons">
      <button onClick={() => handleNavigation('/')}>Home</button>
      <button onClick={() => handleNavigation('/about')}>About</button>
      <button onClick={() => handleNavigation('/contact')}>Contact</button>
    </div>
  );
}`}
              explanation="React Router enables navigation between different pages/views in your React application."
            />
          </div>
          <div className="output-panel">
            <h4>Router Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Current Route:</label>
                  <div className="result">{currentRoute}</div>
                </div>
                <div className="demo-item">
                  <label>Navigation:</label>
                  <div className="button-group">
                    <button onClick={() => navigateTo('/')}>Home</button>
                    <button onClick={() => navigateTo('/about')}>About</button>
                    <button onClick={() => navigateTo('/contact')}>Contact</button>
                    <button onClick={() => navigateTo('/products')}>Products</button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Route History:</label>
                  <div className="result" style={{ fontSize: '12px', maxHeight: '100px', overflowY: 'auto' }}>
                    {routingHistory.slice(-5).join(' → ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Dynamic Routes & Parameters</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Dynamic routes are like Figma components with variants - the same component can display different content based on parameters.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Dynamic route with parameter
<Route path="/products/:id" element={<ProductDetail />} />

// Access parameter in component
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return <div>Product ID: {id}</div>;
}

// Query parameters
<Link to="/search?query=react&category=books">
  Search
</Link>

// Access query params
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  return <div>Searching for: {query}</div>;
}`}
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Dynamic Routes with Parameters
import { useParams, useSearchParams } from 'react-router-dom';

// Route with dynamic parameter
<Route path="/products/:id" element={<ProductDetail />} />

// Component using parameters
function ProductDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  return (
    <div className="product-detail">
      <h2>Product ID: {id}</h2>
      {category && <p>Category: {category}</p>}
      <p>This is a dynamic route that shows different content based on the URL parameter.</p>
    </div>
  );
}

// Navigation with parameters
function ProductNavigation() {
  const navigate = useNavigate();
  
  const goToProduct = (id, category) => {
    navigate(\`/products/\${id}?category=\${category}\`);
  };
  
  return (
    <div className="product-links">
      <button onClick={() => goToProduct('1', 'electronics')}>
        Product 1 (Electronics)
      </button>
      <button onClick={() => goToProduct('2', 'books')}>
        Product 2 (Books)
      </button>
      <button onClick={() => goToProduct('3', 'clothing')}>
        Product 3 (Clothing)
      </button>
    </div>
  );
}`}
              explanation="Dynamic routes allow you to create flexible URLs that can display different content based on parameters."
            />
          </div>
          <div className="output-panel">
            <h4>Dynamic Routes Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Navigate with Parameters:</label>
                  <div className="button-group">
                    <button onClick={() => navigateWithParams('/products/1', { category: 'electronics' })}>
                      Product 1 (Electronics)
                    </button>
                    <button onClick={() => navigateWithParams('/products/2', { category: 'books' })}>
                      Product 2 (Books)
                    </button>
                    <button onClick={() => navigateWithParams('/products/3', { category: 'clothing' })}>
                      Product 3 (Clothing)
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Current Parameters:</label>
                  <div className="result">
                    {Object.keys(routingParams).length > 0 ? 
                      Object.entries(routingParams).map(([key, value]) => key + ': ' + value).join(', ') : 
                      'No parameters'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Protected Routes & Authentication</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Protected routes are like Figma files with different permission levels - some content is only visible to certain users.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <pre className="syntax-code">
{`// Protected Route Component
function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Usage in Routes
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute isAuthenticated={isLoggedIn}>
      <Dashboard />
    </ProtectedRoute>
  } 
/>

// Authentication check
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};`}
          </pre>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Protected Routes Implementation
import { Navigate, useLocation } from 'react-router-dom';

// Protected Route Component
function ProtectedRoute({ children, isAuthenticated }) {
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Redirect to login with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
}

// Authentication Hook
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  const login = (credentials) => {
    // Simulate login
    if (credentials.username && credentials.password) {
      setIsAuthenticated(true);
      setUser({ username: credentials.username });
      localStorage.setItem('token', 'fake-token');
    }
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
  };
  
  return { isAuthenticated, user, login, logout };
}

// App with Protected Routes
function App() {
  const { isAuthenticated } = useAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}`}
              explanation="Protected routes ensure that certain pages are only accessible to authenticated users."
            />
          </div>
          <div className="output-panel">
            <h4>Protected Routes Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <p><strong>Route Protection Levels:</strong></p>
                  <ul>
                    <li>🏠 Home: Public (no auth required)</li>
                    <li>🔐 Dashboard: Protected (auth required)</li>
                    <li>👤 Profile: Protected (auth required)</li>
                    <li>📧 Contact: Public (no auth required)</li>
                  </ul>
                </div>
                <div className="demo-item">
                  <p><strong>Authentication Flow:</strong></p>
                  <ol>
                    <li>User tries to access protected route</li>
                    <li>Check if user is authenticated</li>
                    <li>If not, redirect to login</li>
                    <li>After login, redirect back to original route</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Navigation Patterns</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Navigation patterns are like the navigation structure in Figma - you need clear ways to move between different sections.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <pre className="syntax-code">
{`// Breadcrumb Navigation
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => (
        <span key={name}>
          / <Link to={\`/\${pathnames.slice(0, index + 1).join('/')}\`}>
            {name}
          </Link>
        </span>
      ))}
    </nav>
  );
}

// Tab Navigation
function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={\`tab \${activeTab === tab.id ? 'active' : ''}\`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}`}
          </pre>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Common Navigation Patterns

// 1. Breadcrumb Navigation
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => (
        <span key={name}>
          / <Link to={\`/\${pathnames.slice(0, index + 1).join('/')}\`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Link>
        </span>
      ))}
    </nav>
  );
}

// 2. Tab Navigation
function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tab-navigation">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={\`tab \${activeTab === tab.id ? 'active' : ''}\`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// 3. Sidebar Navigation
function SidebarNavigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: '/projects', label: 'Projects', icon: '📁' },
    { path: '/tasks', label: 'Tasks', icon: '✅' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ];
  
  return (
    <nav className="sidebar">
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={\`nav-item \${location.pathname === item.path ? 'active' : ''}\`}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

// 4. Mobile Navigation
function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mobile-nav">
      <button 
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}`}
              explanation="Different navigation patterns provide clear ways for users to move through your application."
            />
          </div>
          <div className="output-panel">
            <h4>Navigation Patterns Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <p><strong>Common Patterns:</strong></p>
                  <ul>
                    <li>🍞 Breadcrumbs: Show current location</li>
                    <li>📑 Tabs: Switch between related content</li>
                    <li>📱 Sidebar: Persistent navigation</li>
                    <li>☰ Mobile Menu: Collapsible navigation</li>
                  </ul>
                </div>
                <div className="demo-item">
                  <p><strong>Best Practices:</strong></p>
                  <ul>
                    <li>✅ Clear visual hierarchy</li>
                    <li>✅ Consistent navigation</li>
                    <li>✅ Accessible navigation</li>
                    <li>✅ Mobile-friendly design</li>
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

export default NavigationRouting