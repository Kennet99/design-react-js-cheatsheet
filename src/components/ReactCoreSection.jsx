import React from 'react'
import CodeExample from './CodeExample'

// React Core Section
function ReactCoreSection() {
  return (
    <div className="section">
      <h1>React Core Concepts</h1>
      <p>Understanding React fundamentals through design thinking</p>

      <div className="concept-card">
        <h2>What is React?</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> React is like Figma's component system on steroids - it's a library for building reusable UI components.
        </div>
        <p>
          React is a JavaScript library for building user interfaces. It's like having a super-powered component system 
          where you can create interactive, dynamic interfaces that respond to user actions and data changes.
        </p>
      </div>

      <div className="concept-card">
        <h2>JSX - JavaScript XML</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> JSX is like writing design specs in Figma - it combines structure (HTML) with logic (JavaScript).
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// JSX combines HTML-like syntax with JavaScript
const userName = "Sarah";
const taskCount = 5;

const element = (
  <div className="card">
    <h2>Welcome, {userName}!</h2>
    <p>You have {taskCount} tasks remaining</p>
    <button onClick={handleClick}>
      Complete Task
    </button>
  </div>
);

// JSX Rules:
// 1. Must return a single parent element
// 2. Use className instead of class
// 3. Use camelCase for attributes
// 4. Use {} for JavaScript expressions`}
              explanation="JSX allows you to write HTML-like code inside JavaScript, making it easier to create and manage UI components."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive JSX Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Name:</label>
                  <input 
                    type="text" 
                    placeholder="Enter name" 
                    id="jsxUserName"
                    defaultValue="Sarah"
                    onChange={(e) => {
                      const name = e.target.value
                      document.getElementById('jsxNameDisplay').textContent = name || 'User'
                    }}
                  />
                </div>
                <div className="demo-item">
                  <label>Task Count:</label>
                  <input 
                    type="number" 
                    placeholder="Number of tasks" 
                    id="jsxTaskCount"
                    defaultValue="5"
                    onChange={(e) => {
                      const count = e.target.value
                      document.getElementById('jsxTaskDisplay').textContent = count || '0'
                    }}
                  />
                </div>
                <div className="jsx-preview">
                  <div className="card">
                    <h2>Welcome, <span id="jsxNameDisplay">Sarah</span>!</h2>
                    <p>You have <span id="jsxTaskDisplay">5</span> tasks remaining</p>
                    <button onClick={() => alert('Task completed!')}>Complete Task</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Component Types</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Different component types are like different types of Figma components - some are simple, others are complex.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. Function Components (Modern, recommended)
function WelcomeCard({ name, role }) {
  return (
    <div className="welcome-card">
      <h2>Welcome, {name}!</h2>
      <p>Role: {role}</p>
    </div>
  );
}

// 2. Arrow Function Components
const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

// 3. Class Components (Legacy, avoid for new code)
class OldComponent extends React.Component {
  render() {
    return <div>Old way of writing components</div>;
  }
}

// 4. Pure Components (Performance optimized)
const PureButton = React.memo(({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
));`}
              explanation="Function components are the modern way to write React components. They're simpler and work better with hooks."
            />
          </div>
          <div className="output-panel">
            <h4>Component Types:</h4>
            <div className="output-content">
              <p><strong>Function:</strong> <span className="code-output">Modern, hooks-friendly</span></p>
              <p><strong>Arrow Function:</strong> <span className="code-output">Concise syntax</span></p>
              <p><strong>Class:</strong> <span className="code-output">Legacy, avoid</span></p>
              <p><strong>Pure:</strong> <span className="code-output">Performance optimized</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Fragments & Multiple Elements</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Fragments are like grouping elements in Figma without adding an extra container - you can return multiple items without a wrapper.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Without Fragment (adds extra div)
function ListItems() {
  return (
    <div>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </div>
  );
}

// With Fragment (no extra element)
function ListItems() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}

// With React.Fragment (explicit)
function ListItems() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </React.Fragment>
  );
}

// Array of elements (with keys)
function ListItems() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return items.map((item, index) => (
    <li key={index}>{item}</li>
  ));
}`}
              explanation="Fragments allow you to return multiple elements without adding an extra DOM node, keeping your HTML clean."
            />
          </div>
          <div className="output-panel">
            <h4>Fragment Types:</h4>
            <div className="output-content">
              <p><strong>Empty Tags:</strong> <span className="code-output">&lt;&gt; &lt;/&gt;</span></p>
              <p><strong>React.Fragment:</strong> <span className="code-output">Explicit syntax</span></p>
              <p><strong>Arrays:</strong> <span className="code-output">With keys</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Conditional Rendering</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Conditional rendering is like using visibility settings in Figma - show different content based on conditions.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. If/else with ternary operator
function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

// 2. Logical AND operator (&&)
function Notification({ message, show }) {
  return (
    <div>
      {show && <div className="notification">{message}</div>}
    </div>
  );
}

// 3. Multiple conditions
function UserStatus({ user }) {
  if (!user) return <div>Loading...</div>;
  if (user.error) return <div>Error: {user.error}</div>;
  if (user.isAdmin) return <AdminPanel />;
  return <UserPanel />;
}

// 4. Switch-like pattern
function getStatusColor(status) {
  switch (status) {
    case 'success': return 'green';
    case 'error': return 'red';
    case 'warning': return 'orange';
    default: return 'gray';
  }
}`}
              explanation="Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."
            />
          </div>
          <div className="output-panel">
            <h4>Conditional Patterns:</h4>
            <div className="output-content">
              <p><strong>Ternary:</strong> <span className="code-output">condition ? A : B</span></p>
              <p><strong>Logical AND:</strong> <span className="code-output">condition && element</span></p>
              <p><strong>Early Return:</strong> <span className="code-output">if (condition) return</span></p>
              <p><strong>Switch:</strong> <span className="code-output">Multiple conditions</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactCoreSection 