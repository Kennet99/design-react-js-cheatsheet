import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function ReactCore() {
  // Interactive state for examples from JSBasics
  const [counter, setCounter] = useState(0)
  const [userName, setUserName] = useState('Designer')
  const [isVisible, setIsVisible] = useState(true)
  const [colors, setColors] = useState(['red', 'blue', 'green'])
  const [user, setUser] = useState({ name: 'Sarah', role: 'UX Designer' })
  const [jsBasicsLogicalAnd, setJSBasicsLogicalAnd] = useState({ 
    showMessage: false, 
    showCount: false, 
    hasError: false, 
    count: 5 
  })

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
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// JSX combines HTML with JavaScript
const element = (
  <div className="container">
    <h1>Hello, {userName}!</h1>
    <p>Count: {count}</p>
    <button onClick={handleClick}>
      Click me
    </button>
  </div>
);

// JSX Rules:
// 1. Use className instead of class
// 2. Use camelCase for attributes
// 3. Use {} for JavaScript expressions
// 4. Must return single parent element`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>JSX Input:</strong>
              <ul>
                <li><code>variable</code> (any) - JavaScript variable</li>
                <li><code>expression</code> (any) - JavaScript expression</li>
                <li><code>function</code> (function) - Event handler</li>
                <li><code>className</code> (string) - CSS class name</li>
                <li><code>{}</code> - JavaScript expression syntax</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>JSX Output:</strong>
              <ul>
                <li><code>JSX.Element</code> - React element object</li>
                <li><code>string</code> - Interpolated text content</li>
                <li><code>number</code> - Rendered numeric values</li>
                <li><code>function</code> - Event handler binding</li>
                <li><code>DOM</code> - Rendered HTML elements</li>
              </ul>
            </div>
          </div>
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
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Function Component (Modern)
function ComponentName({ prop1, prop2 }) {
  return <div>Content</div>;
}

// Arrow Function Component
const ComponentName = ({ prop1, prop2 }) => {
  return <div>Content</div>;
};

// Class Component (Legacy)
class ComponentName extends React.Component {
  render() {
    return <div>Content</div>;
  }
}

// Pure Component
const PureComponent = React.memo(({ prop1 }) => {
  return <div>Content</div>;
});`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Component Input:</strong>
              <ul>
                <li><code>props</code> (object) - Component properties</li>
                <li><code>prop1, prop2</code> (any) - Destructured props</li>
                <li><code>children</code> (JSX) - Child components</li>
                <li><code>state</code> (any) - Internal component state</li>
                <li><code>context</code> (any) - React context values</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Component Output:</strong>
              <ul>
                <li><code>JSX.Element</code> - Rendered component</li>
                <li><code>null</code> - No rendering</li>
                <li><code>string</code> - Text content</li>
                <li><code>array</code> - Multiple elements</li>
                <li><code>Fragment</code> - Wrapper-free elements</li>
              </ul>
            </div>
          </div>
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

      {/* JavaScript Basics Section - Merged from JSBasics */}
      <div className="concept-card">
        <h2>Variables & State</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Variables are like text styles or color styles in Figma - they store reusable values.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// React state
const [state, setState] = useState(initialValue);

// Examples:
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('');
const [isVisible, setIsVisible] = useState(true);

// Objects and arrays
const user = { name: 'Sarah', role: 'Designer' };
const colors = ['red', 'blue', 'green'];`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>useState Hook Input:</strong>
              <ul>
                <li><code>initialValue</code> (any) - Starting state value</li>
                <li><code>setState</code> (function) - State updater function</li>
                <li><code>newValue</code> (any) - Direct value assignment</li>
                <li><code>updater</code> (function) - Function-based update</li>
                <li><code>lazyInit</code> (function) - Expensive computation</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>State Types:</strong>
              <ul>
                <li><code>any</code> - Any data type for state</li>
                <li><code>number</code> - Numeric state values</li>
                <li><code>string</code> - Text state values</li>
                <li><code>boolean</code> - Boolean state values</li>
                <li><code>object</code> - Complex state objects</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// React state (like dynamic properties in Figma)
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('Designer');
const [isVisible, setIsVisible] = useState(true);

// Objects (like component properties in Figma)
const user = { name: 'Sarah', role: 'UX Designer' };

// Arrays (like color palettes in Figma)
const colors = ['red', 'blue', 'green'];`}
              explanation="State variables can change over time, just like how you can update text or colors in Figma."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Counter: {counter}</label>
                  <div className="button-group">
                    <button onClick={() => setCounter(counter - 1)}><Minus size={16} /></button>
                    <button onClick={() => setCounter(counter + 1)}><Plus size={16} /></button>
                    <button onClick={() => setCounter(0)}><RotateCcw size={16} /></button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>User Name:</label>
                  <input 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter name"
                  />
                </div>
                <div className="demo-item">
                  <label>Visibility:</label>
                  <button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                    {isVisible ? ' Hide' : ' Show'}
                  </button>
                </div>
                <div className="demo-item">
                  <label>User Object:</label>
                  <div className="object-display">
                    <span>Name: {user.name}</span>
                    <span>Role: {user.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Arrow Functions</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Arrow functions are like quick actions in Figma - shorter, more concise ways to perform tasks.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Traditional function
function functionName(parameters) {
  return value;
}

// Long arrow function (explicit return)
const functionName = (parameters) => {
  return value;
};

// Short arrow function (implicit return)
const functionName = (parameters) => value;

// Single parameter (parentheses optional)
const functionName = parameter => value;

// No parameters
const functionName = () => value;

// Examples:
function calculateArea(width, height) {
  return width * height;
}

const calculateArea = (width, height) => {
  return width * height;
};

const calculateArea = (width, height) => width * height;`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Arrow Function Input:</strong>
              <ul>
                <li><code>parameter</code> (any) - Function parameter</li>
                <li><code>param1, param2</code> (any) - Multiple parameters</li>
                <li><code>()</code> - No parameters (empty parentheses)</li>
                <li><code>singleParam</code> (any) - Single parameter (no parentheses)</li>
                <li><code>defaultValue</code> (any) - Default parameter value</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Return Values:</strong>
              <ul>
                <li><code>any</code> - Implicit return value</li>
                <li><code>any</code> - Explicit return value</li>
                <li><code>undefined</code> - No return statement</li>
                <li><code>Promise</code> - Async arrow function</li>
                <li><code>generator</code> - Generator arrow function</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Traditional function (like a full plugin in Figma)
function calculateArea(width, height) {
  return width * height;
}

// Arrow function (like a quick action in Figma)
const calculateArea = (width, height) => {
  return width * height;
};

// Shorter arrow function (implicit return)
const calculateArea = (width, height) => width * height;

// Single parameter (parentheses optional)
const double = x => x * 2;

// No parameters
const getRandomNumber = () => Math.random();

// Usage examples
console.log(calculateArea(10, 5));  // 50
console.log(double(8));            // 16
console.log(getRandomNumber());    // 0.123...`}
              explanation="Arrow functions provide a shorter, more modern syntax for writing functions in JavaScript."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Calculate Area:</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      placeholder="Width" 
                      id="width"
                      defaultValue="10"
                    />
                    <input 
                      type="number" 
                      placeholder="Height" 
                      id="height"
                      defaultValue="5"
                    />
                    <button onClick={() => {
                      const width = document.getElementById('width').value
                      const height = document.getElementById('height').value
                      alert('Area: ' + (width * height))
                    }}>Calculate</button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Double Number:</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      placeholder="Number" 
                      id="doubleInput"
                      defaultValue="8"
                    />
                    <button onClick={() => {
                      const num = document.getElementById('doubleInput').value
                      alert(`Double: ${num * 2}`)
                    }}>Double</button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Random Number:</label>
                  <button onClick={() => alert(`Random: ${Math.random().toFixed(3)}`)}>
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Ternary Operator</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Ternary operators are like conditional visibility in Figma - show one thing if true, another if false.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Ternary operator
condition ? valueIfTrue : valueIfFalse

// Examples:
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';
const status = user.isActive ? 'Online' : 'Offline';
const buttonText = isLoading ? 'Loading...' : 'Submit';

// In JSX:
{isVisible ? <Component /> : null}
{user ? <UserProfile /> : <LoginForm />}`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Ternary Input:</strong>
              <ul>
                <li><code>condition</code> (boolean) - True/false expression</li>
                <li><code>truthyValue</code> (any) - Value if condition is true</li>
                <li><code>falsyValue</code> (any) - Value if condition is false</li>
                <li><code>expression</code> (any) - Boolean expression</li>
                <li><code>comparison</code> (boolean) - Comparison result</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Return Values:</strong>
              <ul>
                <li><code>any</code> - Truthy value if condition is true</li>
                <li><code>any</code> - Falsy value if condition is false</li>
                <li><code>JSX</code> - Conditional component rendering</li>
                <li><code>null</code> - No rendering (falsy condition)</li>
                <li><code>undefined</code> - Undefined value</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Ternary operator: condition ? valueIfTrue : valueIfFalse
const userRole = "Designer";
const message = userRole === "Designer" ? "Show design tools" : "Show general tools";

// Multiple conditions
const status = user.isActive 
  ? "Online" 
  : user.lastSeen 
    ? "Last seen recently" 
    : "Offline";

// In JSX (React)
const buttonText = isLoading ? "Loading..." : "Submit";
const buttonColor = isError ? "red" : "blue";

// Usage examples
console.log(message);  // "Show design tools"
console.log(status);   // "Online" or "Last seen recently" or "Offline"`}
              explanation="Ternary operators provide a concise way to write conditional logic in a single line."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Role:</label>
                  <select 
                    id="userRole"
                    defaultValue="Designer"
                    onChange={(e) => {
                      const role = e.target.value
                      const message = role === "Designer" ? "Show design tools" : "Show general tools"
                      document.getElementById('roleMessage').textContent = message
                    }}
                  >
                    <option value="Designer">Designer</option>
                    <option value="Developer">Developer</option>
                    <option value="Manager">Manager</option>
                  </select>
                  <div className="result">Message: <span id="roleMessage">Show design tools</span></div>
                </div>
                <div className="demo-item">
                  <label>Loading State:</label>
                  <div className="button-group">
                    <button 
                      onClick={() => {
                        const btn = document.getElementById('loadingBtn')
                        btn.textContent = btn.textContent === 'Submit' ? 'Loading...' : 'Submit'
                        btn.style.backgroundColor = btn.textContent === 'Loading...' ? '#f59e0b' : '#3b82f6'
                      }}
                      id="loadingBtn"
                      style={{backgroundColor: '#3b82f6'}}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Theme Toggle:</label>
                  <button 
                    onClick={() => {
                      const theme = document.getElementById('themeDisplay')
                      theme.textContent = theme.textContent === 'Light' ? 'Dark' : 'Light'
                      theme.style.color = theme.textContent === 'Dark' ? '#fbbf24' : '#1f2937'
                    }}
                  >
                    Toggle Theme
                  </button>
                  <div className="result">Current: <span id="themeDisplay" style={{color: '#1f2937'}}>Light</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Destructuring</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Destructuring is like extracting specific properties from a component in Figma - you pull out just what you need.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Object destructuring
const { property1, property2 } = object;

// Array destructuring
const [item1, item2] = array;

// Renaming variables
const { property1: newName } = object;

// Default values
const { property1 = defaultValue } = object;`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Destructuring Input:</strong>
              <ul>
                <li><code>object</code> (object) - Source object to extract from</li>
                <li><code>array</code> (array) - Source array to extract from</li>
                <li><code>propertyName</code> (string) - Object property to extract</li>
                <li><code>index</code> (number) - Array position to extract</li>
                <li><code>defaultValue</code> (any) - Fallback value if undefined</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Destructuring Output:</strong>
              <ul>
                <li><code>any</code> - Extracted object property value</li>
                <li><code>any</code> - Extracted array element value</li>
                <li><code>undefined</code> - If property/element doesn't exist</li>
                <li><code>defaultValue</code> - If property/element is undefined</li>
                <li><code>variable</code> - New variable with extracted value</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Object destructuring (like extracting component properties)
const user = {
  name: "Sarah",
  role: "UX Designer",
  skills: ["Figma", "React"],
  isActive: true
};

// Extract specific properties
const { name, role } = user;
console.log(name);  // "Sarah"
console.log(role);  // "UX Designer"

// Rename variables
const { name: userName, role: userRole } = user;

// Default values
const { theme = "light", language = "en" } = user;

// Array destructuring
const colors = ["red", "blue", "green"];
const [firstColor, secondColor] = colors;
console.log(firstColor);   // "red"
console.log(secondColor);  // "blue"

// Skip elements
const [primary, , tertiary] = colors;
console.log(primary);   // "red"
console.log(tertiary);  // "green"`}
              explanation="Destructuring allows you to extract values from objects and arrays into separate variables."
            />
          </div>
          <div className="output-panel">
            <h4>Output:</h4>
            <div className="output-content">
              <p><strong>name:</strong> <span className="code-output">Sarah</span></p>
              <p><strong>role:</strong> <span className="code-output">UX Designer</span></p>
              <p><strong>firstColor:</strong> <span className="code-output">red</span></p>
              <p><strong>tertiary:</strong> <span className="code-output">green</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Template Literals</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Template literals are like smart text in Figma - they combine static text with dynamic values.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Template literals
const message = \`Text with \${variable}\`;

// Multi-line strings
const multiLine = \`
  Line 1
  Line 2
  \${expression}
\`;

// Expression evaluation
const result = \`Value: \${2 + 2}\`;`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Template Literal Input:</strong>
              <ul>
                <li><code>variable</code> (any) - Variable to interpolate</li>
                <li><code>expression</code> (any) - JavaScript expression</li>
                <li><code>string</code> (string) - Static text content</li>
                <li><code>function</code> (function) - Function call result</li>
                <li><code>object.property</code> (any) - Object property access</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Template Literal Output:</strong>
              <ul>
                <li><code>string</code> - Interpolated string result</li>
                <li><code>string</code> - Multi-line formatted text</li>
                <li><code>string</code> - Expression evaluation result</li>
                <li><code>string</code> - Function return value as string</li>
                <li><code>string</code> - Object property value as string</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Template literals (like smart text in Figma)
const userName = "Sarah";
const taskCount = 5;

// Old way (concatenation)
const message1 = "Hello " + userName + ", you have " + taskCount + " tasks";

// Template literal (modern way)
const message2 = \`Hello \${userName}, you have \${taskCount} tasks\`;

// Multi-line strings
const emailTemplate = \`
  Dear \${userName},
  
  You have \${taskCount} pending tasks.
  Please complete them by the end of the week.
  
  Best regards,
  The Team
\`;

// Expressions in template literals
const status = \`User is \${userName ? 'logged in' : 'logged out'}\`;

console.log(message2);  // "Hello Sarah, you have 5 tasks"`}
              explanation="Template literals provide a cleaner way to create strings with embedded expressions."
            />
          </div>
          <div className="output-panel">
            <h4>Output:</h4>
            <div className="output-content">
              <p><strong>message2:</strong> <span className="code-output">Hello Sarah, you have 5 tasks</span></p>
              <p><strong>status:</strong> <span className="code-output">User is logged in</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Array Methods</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Array methods are like layer operations in Figma - you can filter, transform, and organize your data.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Array methods (like layer operations in Figma)
const tasks = [
  { id: 1, title: "Design homepage", completed: false, priority: "high" },
  { id: 2, title: "Create wireframes", completed: true, priority: "medium" },
  { id: 3, title: "Build prototype", completed: false, priority: "high" }
];

// map() - transform each item (like duplicating and modifying layers)
const taskTitles = tasks.map(task => task.title);
console.log(taskTitles); // ["Design homepage", "Create wireframes", "Build prototype"]

// filter() - show only items that match criteria (like hiding layers)
const highPriorityTasks = tasks.filter(task => task.priority === "high");
const incompleteTasks = tasks.filter(task => !task.completed);

// find() - find first matching item (like selecting a specific layer)
const firstHighPriority = tasks.find(task => task.priority === "high");

// reduce() - combine all items into one value (like grouping layers)
const totalTasks = tasks.reduce((count, task) => count + 1, 0);
const completedCount = tasks.reduce((count, task) => 
  task.completed ? count + 1 : count, 0
);`}
              explanation="Array methods provide powerful ways to manipulate and transform data collections."
            />
          </div>
          <div className="output-panel">
            <h4>Output:</h4>
            <div className="output-content">
              <p><strong>taskTitles:</strong> <span className="code-output">["Design homepage", "Create wireframes", "Build prototype"]</span></p>
              <p><strong>highPriorityTasks:</strong> <span className="code-output">2 items</span></p>
              <p><strong>totalTasks:</strong> <span className="code-output">3</span></p>
              <p><strong>completedCount:</strong> <span className="code-output">1</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Logical AND (&&) Operator</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Logical AND is like conditional visibility in Figma - only show an element when a condition is true.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Logical AND operator
{condition && <Component />}

// Examples:
{isLoggedIn && <UserProfile />}
{hasError && <ErrorMessage />}
{isLoading && <Spinner />}
{user && <WelcomeMessage user={user} />}

// Multiple conditions
{isLoggedIn && isAdmin && <AdminPanel />}
{hasData && !isLoading && <DataDisplay />}

// With expressions
{count > 0 && <span>Items: {count}</span>}
{name && <h1>Hello, {name}!</h1>}`}
            language="javascript"
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Logical AND examples
function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div>
      {/* Show notification count only if there are notifications */}
      {notifications.length > 0 && (
        <span className="badge">{notifications.length}</span>
      )}
      
      {/* Show notification panel only if toggle is on */}
      {showNotifications && (
        <div className="notification-panel">
          {notifications.map(notification => (
            <div key={notification.id}>{notification.message}</div>
          ))}
        </div>
      )}
      
      {/* Show empty state only if no notifications */}
      {notifications.length === 0 && (
        <p>No notifications</p>
      )}
    </div>
  );
}

// Common patterns
function UserInterface({ user, isLoading, error }) {
  return (
    <div>
      {/* Loading state */}
      {isLoading && <Spinner />}
      
      {/* Error state */}
      {error && <ErrorMessage message={error} />}
      
      {/* User content only when not loading and no error */}
      {!isLoading && !error && user && (
        <UserDashboard user={user} />
      )}
    </div>
  );
}`}
              explanation="The logical AND operator (&&) is perfect for conditional rendering - it only renders the right side when the left side is truthy."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Logical AND Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Toggle Conditions:</label>
                  <div className="button-group">
                    <button onClick={() => setJSBasicsLogicalAnd(prev => ({...prev, showMessage: !prev.showMessage}))}>
                      {jsBasicsLogicalAnd.showMessage ? 'Hide' : 'Show'} Message
                    </button>
                    <button onClick={() => setJSBasicsLogicalAnd(prev => ({...prev, showCount: !prev.showCount}))}>
                      {jsBasicsLogicalAnd.showCount ? 'Hide' : 'Show'} Count
                    </button>
                    <button onClick={() => setJSBasicsLogicalAnd(prev => ({...prev, hasError: !prev.hasError}))}>
                      {jsBasicsLogicalAnd.hasError ? 'Clear' : 'Show'} Error
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Conditional Elements:</label>
                  <div className="result">
                    {jsBasicsLogicalAnd.showMessage && (
                      <div style={{color: '#10b981', marginBottom: '8px'}}>
                        ✅ This message only shows when condition is true
                      </div>
                    )}
                    {jsBasicsLogicalAnd.showCount && (
                      <div style={{color: '#3b82f6', marginBottom: '8px'}}>
                        📊 Count: {jsBasicsLogicalAnd.count}
                      </div>
                    )}
                    {jsBasicsLogicalAnd.hasError && (
                      <div style={{color: '#ef4444', marginBottom: '8px'}}>
                        ❌ Error: Something went wrong!
                      </div>
                    )}
                    {!jsBasicsLogicalAnd.showMessage && !jsBasicsLogicalAnd.showCount && !jsBasicsLogicalAnd.hasError && (
                      <div style={{color: '#94a3b8'}}>
                        No conditions are true - nothing to show
                      </div>
                    )}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Multiple Conditions:</label>
                  <div className="result">
                    {jsBasicsLogicalAnd.showMessage && jsBasicsLogicalAnd.showCount && (
                      <div style={{color: '#8b5cf6'}}>
                        🎉 Both conditions are true!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ReactCore