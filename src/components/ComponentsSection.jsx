import React from 'react'
import CodeExample from './CodeExample'

// Components Section
function ComponentsSection() {
  return (
    <div className="section">
      <h1>React Components</h1>
      <p>Building reusable UI pieces like Figma components</p>

      <div className="concept-card">
        <h2>Props Deep Dive</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Props are like component properties in Figma - they allow you to customize instances with different values.
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
            <h4>Prop Patterns:</h4>
            <div className="output-content">
              <p><strong>Basic:</strong> <span className="code-output">text, variant, size</span></p>
              <p><strong>Default:</strong> <span className="code-output">defaultProps</span></p>
              <p><strong>Validation:</strong> <span className="code-output">PropTypes</span></p>
              <p><strong>Destructuring:</strong> <span className="code-output">const { name } = props</span></p>
              <p><strong>Children:</strong> <span className="code-output">Nested content</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Component Composition Patterns</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Component composition is like building complex designs in Figma by combining and nesting simple components.
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
            <h4>Composition Types:</h4>
            <div className="output-content">
              <p><strong>Children:</strong> <span className="code-output">Nested components</span></p>
              <p><strong>Render Props:</strong> <span className="code-output">Function as child</span></p>
              <p><strong>HOC:</strong> <span className="code-output">Wrapper components</span></p>
              <p><strong>Compound:</strong> <span className="code-output">Related components</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Component Best Practices</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Component best practices are like design system guidelines in Figma - they ensure consistency and maintainability.
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

export default ComponentsSection 