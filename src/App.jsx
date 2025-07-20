import React, { useState, useEffect, useRef, useMemo, useCallback, useReducer } from 'react'
import { BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Plus, Minus, RotateCcw, Eye, EyeOff, Navigation, Paintbrush, Globe, Type, Sparkles, Menu, X } from 'lucide-react'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import './App.css'

// Main App component - this is like the "master frame" in Figma
// It contains all the other components and manages the overall layout
function App() {
  // State to track which section is currently active
  // This is like having different pages in Figma - you can only see one at a time
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation items - like the pages panel in Figma
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'js-fundamentals', label: 'JS Fundamentals', icon: FileText },
    { id: 'js-basics', label: 'React Basics', icon: Code },
    { id: 'react-core', label: 'React Core', icon: Zap },
    { id: 'components', label: 'Components', icon: Layers },
    { id: 'hooks', label: 'Hooks', icon: Settings },
    { id: 'data-handling', label: 'Data Handling', icon: Database },
    { id: 'events-interactions', label: 'Events & Interactions', icon: Users },
    { id: 'navigation-routing', label: 'Navigation & Routing', icon: Navigation },
    { id: 'power-apps', label: 'Power Apps', icon: Zap },
    { id: 'styling-design', label: 'Styling & Design', icon: Paintbrush },
    { id: 'html-css', label: 'HTML & CSS', icon: Globe },
    { id: 'css-frameworks', label: 'CSS Frameworks', icon: Sparkles },
    { id: 'figma-mapping', label: 'Figma Mapping', icon: Palette }
  ]

  return (
    <div className="app">
      {/* Header - like the top toolbar in Figma */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo">
              <BookOpen className="logo-icon" />
              React JS Cheatsheet
            </h1>
            <p className="subtitle">For UX Designers with Figma Analogies</p>
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation - like the left sidebar in Figma */}
      <nav className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-items">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMobileMenuOpen(false) // Close mobile menu when item is selected
                }}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Main content area - like the canvas in Figma */}
      <main className="main-content">
        <div className="container">
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'js-fundamentals' && <JSFundamentalsSection />}
          {activeSection === 'js-basics' && <JSBasicsSection />}
          {activeSection === 'react-core' && <ReactCoreSection />}
          {activeSection === 'components' && <ComponentsSection />}
          {activeSection === 'hooks' && <HooksSection />}
          {activeSection === 'data-handling' && <DataHandlingSection />}
          {activeSection === 'events-interactions' && <EventsInteractionsSection />}
          {activeSection === 'navigation-routing' && <NavigationRoutingSection />}
          {activeSection === 'power-apps' && <PowerAppsSection />}
          {activeSection === 'styling-design' && <StylingDesignSection />}
          {activeSection === 'html-css' && <HTMLCSSSection />}
          {activeSection === 'css-frameworks' && <CSSFrameworksSection />}
          {activeSection === 'figma-mapping' && <FigmaMappingSection />}
        </div>
      </main>
    </div>
  )
}

// Home section component
function HomeSection() {
  return (
    <div className="section">
      <h1>Welcome to React JS Cheatsheet</h1>
      <p className="lead">
        A comprehensive guide to JavaScript and React concepts, explained through the lens of Figma and design thinking.
      </p>
      
      {/* <div className="feature-grid">
        <div className="feature-card">
          <Code className="feature-icon" />
          <h3>React Basics</h3>
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
      </div> */}

      <div className="getting-started">
        <h2>🎯 How to Use This Cheatsheet</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Start with React Basics</h4>
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

// JavaScript Fundamentals Section
function JSFundamentalsSection() {
  // Interactive state for examples
  const [fundamentalCounter, setFundamentalCounter] = useState(0)
  const [fundamentalUser, setFundamentalUser] = useState({ name: 'John', age: 25 })
  const [fundamentalMessage, setFundamentalMessage] = useState('')
  const [fundamentalColors, setFundamentalColors] = useState(['red', 'blue', 'green'])
  
  // State for primitive vs reference demo
  const [fundamentalPrimitiveName, setFundamentalPrimitiveName] = useState('Sarah')
  const [fundamentalPrimitiveNameCopy, setFundamentalPrimitiveNameCopy] = useState('Sarah')
  const [fundamentalReferenceUser, setFundamentalReferenceUser] = useState({ name: 'Sarah', age: 28 })
  const [fundamentalReferenceUserCopy, setFundamentalReferenceUserCopy] = useState({ name: 'Sarah', age: 28 })
  const [fundamentalReferenceArray, setFundamentalReferenceArray] = useState(['red', 'blue', 'green'])
  const [fundamentalReferenceArraySpread, setFundamentalReferenceArraySpread] = useState(['red', 'blue', 'green'])
  const [fundamentalReactUser, setFundamentalReactUser] = useState({ name: 'Alex', age: 25, skills: ['JavaScript', 'CSS'] })
  
  // State for constructors and properties demo
  const [fundamentalConstructorUser, setFundamentalConstructorUser] = useState({ name: 'John', age: 30, role: 'Developer' })
  const [fundamentalConstructorMessage, setFundamentalConstructorMessage] = useState('')

  return (
    <div className="section">
      <h1>JavaScript Fundamentals</h1>
      <p>Core JavaScript concepts with interactive examples</p>

      <div className="concept-card">
        <h2>Variables</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Variables are like text styles in Figma - they store values that you can reuse throughout your design.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`let variableName = value;
const constantName = value;
var oldWay = value;`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Variable Declaration:</strong>
              <ul>
                <li><code>value</code> (any) - Initial value to assign</li>
                <li><code>variableName</code> (string) - Variable identifier</li>
                <li><code>initialValue</code> (any) - useState initial value</li>
                <li><code>newValue</code> (any) - Value to reassign</li>
                <li><code>expression</code> (any) - Computed value</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Variable Types:</strong>
              <ul>
                <li><code>string</code> - Text values</li>
                <li><code>number</code> - Numeric values</li>
                <li><code>boolean</code> - True/false values</li>
                <li><code>object</code> - Complex data structures</li>
                <li><code>array</code> - List of values</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Variable declaration and assignment
let userName = "Sarah";           // let = can be changed
const userAge = 28;              // const = cannot be changed
var oldWay = "avoid this";       // var = old way (avoid)

// Using variables in JSX
function UserProfile() {
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <p>Age: {userAge}</p>
      <p>Old way: {oldWay}</p>
    </div>
  );
}

// Reassigning let variables
userName = "Sarah Johnson";      // ✅ This works
// userAge = 29;                 // ❌ This would cause an error

// Using variables in React state
function DynamicUserProfile() {
  const [name, setName] = useState("Sarah");
  const [age, setAge] = useState(28);
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <button onClick={() => setName("Jane")}>Change Name</button>
      <button onClick={() => setAge(prev => prev + 1)}>Increment Age</button>
    </div>
  );
}`}
              explanation="Variables store data that can be used and modified throughout your code."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Variable Examples:</label>
                  <div className="result">
                    userName: <span className="code-output">Sarah</span><br/>
                    userAge: <span className="code-output">28</span><br/>
                    oldWay: <span className="code-output">avoid this</span>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Change Variable:</label>
                  <input 
                    value={fundamentalMessage} 
                    onChange={(e) => setFundamentalMessage(e.target.value)}
                    placeholder="Enter a new message"
                  />
                  <div className="result">Message: {fundamentalMessage || 'No message set'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Objects</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Objects are like component properties in Figma - they group related data together.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`const objectName = {
  key1: value1,
  key2: value2
};

objectName.key1;           // Access property
objectName["key2"];        // Bracket notation`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Object Properties:</strong>
              <ul>
                <li><code>propertyName</code> (string) - Object property name</li>
                <li><code>propertyValue</code> (any) - Property value to assign</li>
                <li><code>key</code> (string/symbol) - Property key</li>
                <li><code>index</code> (number) - Array-like access</li>
                <li><code>computedKey</code> (expression) - Dynamic property name</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Property Access:</strong>
              <ul>
                <li><code>any</code> - Property value</li>
                <li><code>string</code> - String property values</li>
                <li><code>number</code> - Numeric property values</li>
                <li><code>boolean</code> - Boolean property values</li>
                <li><code>undefined</code> - Non-existent properties</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Creating an object
const user = {
  name: "Sarah",
  age: 28,
  role: "UX Designer",
  isActive: true
};

// Using objects in JSX
function UserCard() {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}

// Accessing object properties
console.log(user.name);          // "Sarah"
console.log(user["age"]);        // 28

// Adding new properties
user.skills = ["Figma", "React"];

// Object destructuring in JSX
function UserInfo({ user }) {
  const { name, age, role } = user;
  
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

// Using objects with React state
function DynamicUserCard() {
  const [user, setUser] = useState({
    name: "Sarah",
    age: 28,
    role: "UX Designer"
  });
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser(prev => ({...prev, age: prev.age + 1}))}>
        Increment Age
      </button>
    </div>
  );
}`}
              explanation="Objects group related data together using key-value pairs."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Object:</label>
                  <div className="object-display">
                    <span>Name: {fundamentalUser.name}</span>
                    <span>Age: {fundamentalUser.age}</span>
                  </div>
                  <div className="button-group">
                    <button onClick={() => setFundamentalUser(prev => ({...prev, age: prev.age + 1}))}>
                      Increment Age
                    </button>
                    <button onClick={() => setFundamentalUser(prev => ({...prev, name: 'Jane'}))}>
                      Change Name
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Functions</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Functions are like reusable actions in Figma - they perform specific tasks when called.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`function functionName(parameter) {
  return value;
}

const arrowFunction = (param) => value;

functionName(argument);     // Call function`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Input Parameters:</strong>
              <ul>
                <li><code>parameter</code> (any) - Function parameter value</li>
                <li><code>param1, param2</code> (any) - Multiple parameters</li>
                <li><code>event</code> (Event) - DOM event object (optional)</li>
                <li><code>callback</code> (function) - Function to execute</li>
                <li><code>defaultValue</code> (any) - Default parameter value</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Output Values:</strong>
              <ul>
                <li><code>any</code> - Returned value from function</li>
                <li><code>undefined</code> - For functions with no return</li>
                <li><code>void</code> - For functions that don't return values</li>
                <li><code>Promise</code> - For async functions</li>
                <li><code>generator</code> - For generator functions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Function declaration
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function expression
const calculateArea = function(width, height) {
  return width * height;
};

// Arrow function
const double = (num) => num * 2;

// Using functions in JSX
function GreetingCard() {
  const userName = "Sarah";
  
  return (
    <div>
      <h1>{greetUser(userName)}</h1>
      <p>Area of 5x3: {calculateArea(5, 3)}</p>
      <p>Double of 4: {double(4)}</p>
    </div>
  );
}

// Event handler functions in JSX
function InteractiveCard() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  
  const handleNameChange = (name) => {
    console.log("Name changed to:", name);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleNameChange("Jane")}>Change Name</button>
    </div>
  );
}

// Functions with React state
function DynamicGreeting() {
  const [name, setName] = useState("Sarah");
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(prev => prev + 1);
  };
  
  return (
    <div>
      <h1>{greetUser(name)}</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={() => setName("Jane")}>Change Name</button>
    </div>
  );
}`}
              explanation="Functions are reusable blocks of code that perform specific tasks."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Function Examples:</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Enter name" 
                      id="greetInput"
                      defaultValue="Sarah"
                    />
                    <button onClick={() => {
                      const name = document.getElementById('greetInput').value
                      alert(`Hello, ${name}!`)
                    }}>Greet</button>
                  </div>
                  <div className="input-group">
                    <input 
                      type="number" 
                      placeholder="Width" 
                      id="areaWidth"
                      defaultValue="5"
                    />
                    <input 
                      type="number" 
                      placeholder="Height" 
                      id="areaHeight"
                      defaultValue="3"
                    />
                    <button onClick={() => {
                      const width = document.getElementById('areaWidth').value
                      const height = document.getElementById('areaHeight').value
                      alert(`Area: ${width * height}`)
                    }}>Calculate Area</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Methods</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Methods are like built-in actions in Figma - they're functions that belong to objects.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`string.method();           // String methods
array.method();             // Array methods
object.method();            // Object methods

const obj = {
  methodName() {
    return value;
  }
};`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Method Input:</strong>
              <ul>
                <li><code>methodName()</code> - Method call with no parameters</li>
                <li><code>methodName(param)</code> - Method call with parameter</li>
                <li><code>property</code> - Property access (no parameters)</li>
                <li><code>index</code> (number) - Array index position</li>
                <li><code>callback</code> (function) - Function parameter</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Return Values:</strong>
              <ul>
                <li><code>any</code> - Method return value</li>
                <li><code>number</code> - Length or count values</li>
                <li><code>boolean</code> - True/false results</li>
                <li><code>array</code> - Modified array (mutates original)</li>
                <li><code>object</code> - Modified object (mutates original)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// String methods
const message = "Hello World";
console.log(message.toUpperCase());    // "HELLO WORLD"
console.log(message.toLowerCase());    // "hello world"
console.log(message.length);           // 11

// Using string methods in JSX
function StringDisplay() {
  const text = "Hello World";
  
  return (
    <div>
      <p>Original: {text}</p>
      <p>Uppercase: {text.toUpperCase()}</p>
      <p>Lowercase: {text.toLowerCase()}</p>
      <p>Length: {text.length}</p>
    </div>
  );
}

// Array methods
const colors = ["red", "blue", "green"];
colors.push("yellow");                 // Add to end
colors.pop();                          // Remove from end
colors.unshift("purple");              // Add to beginning

// Using array methods in JSX
function ColorList() {
  const [colorList, setColorList] = useState(["red", "blue", "green"]);
  
  const addColor = (color) => {
    setColorList(prev => [...prev, color]);
  };
  
  const removeLast = () => {
    setColorList(prev => prev.slice(0, -1));
  };
  
  return (
    <div>
      <p>Colors: {colorList.join(', ')}</p>
      <button onClick={() => addColor('yellow')}>Add Yellow</button>
      <button onClick={removeLast}>Remove Last</button>
    </div>
  );
}

// Object methods
const user = {
  name: "Sarah",
  greet() {
    return "Hello, " + this.name;
  }
};

// Using object methods in JSX
function UserGreeting() {
  return (
    <div>
      <h1>{user.greet()}</h1>
      <p>User name: {user.name}</p>
    </div>
  );
}

// React component methods
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prev => prev + 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}
              explanation="Methods are functions that belong to objects and can access the object's data."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Array Methods:</label>
                  <div className="button-group">
                    <button onClick={() => setFundamentalColors(prev => [...prev, 'yellow'])}>
                      Push Yellow
                    </button>
                    <button onClick={() => setFundamentalColors(prev => prev.slice(0, -1))}>
                      Pop Last
                    </button>
                    <button onClick={() => setFundamentalColors(prev => ['purple', ...prev])}>
                      Unshift Purple
                    </button>
                  </div>
                  <div className="result">Colors: [{fundamentalColors.join(', ')}]</div>
                </div>
                <div className="demo-item">
                  <label>String Methods:</label>
                  <input 
                    type="text" 
                    placeholder="Enter text" 
                    id="stringInput"
                    defaultValue="Hello World"
                  />
                  <div className="button-group">
                    <button onClick={() => {
                      const text = document.getElementById('stringInput').value
                      alert(text.toUpperCase())
                    }}>To Uppercase</button>
                    <button onClick={() => {
                      const text = document.getElementById('stringInput').value
                      alert(`Length: ${text.length}`)
                    }}>Get Length</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Classes</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Classes are like component templates in Figma - they define the structure for creating multiple instances.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }
  
  methodName() {
    return value;
  }
}

const instance = new ClassName(value);`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Constructor Input:</strong>
              <ul>
                <li><code>parameter</code> (any) - Constructor parameter</li>
                <li><code>param1, param2</code> (any) - Multiple parameters</li>
                <li><code>defaultValue</code> (any) - Default parameter value</li>
                <li><code>options</code> (object) - Configuration object</li>
                <li><code>callback</code> (function) - Initialization function</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Method Returns:</strong>
              <ul>
                <li><code>any</code> - Method return value</li>
                <li><code>void</code> - Methods that modify instance</li>
                <li><code>instance</code> - Instance object with properties</li>
                <li><code>Promise</code> - Async method results</li>
                <li><code>boolean</code> - Validation or check results</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Class definition
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.isActive = true;
  }

  greet() {
    return "Hello, I'm " + this.name;
  }

  changeRole(newRole) {
    this.role = newRole;
  }
}

// Creating instances
const user1 = new User("Sarah", "Designer");
const user2 = new User("John", "Developer");

console.log(user1.greet());           // "Hello, I'm Sarah"
user1.changeRole("Senior Designer");`}
              explanation="Classes are templates for creating objects with shared properties and methods."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Class Instance:</label>
                  <div className="result">
                    Name: <span className="code-output">Sarah</span><br/>
                    Role: <span className="code-output">Designer</span><br/>
                    Greeting: <span className="code-output">Hello, I'm Sarah</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Constructors & Properties</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Constructors are like component creation in Figma - they set up the initial properties when you create a new instance.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`class ClassName {
  constructor(parameter) {
    this.property = parameter;    // Instance property
  }
}

// Property access
instance.property;               // Direct access
instance["property"];           // Bracket notation

// Property assignment
instance.property = newValue;   // Change property value`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Constructor Parameters:</strong>
              <ul>
                <li><code>parameter</code> (any) - Constructor parameter</li>
                <li><code>param1, param2</code> (any) - Multiple parameters</li>
                <li><code>options</code> (object) - Configuration object</li>
                <li><code>defaultValue</code> (any) - Default parameter value</li>
                <li><code>callback</code> (function) - Initialization function</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Property Types:</strong>
              <ul>
                <li><code>any</code> - Instance property value</li>
                <li><code>string</code> - Text property values</li>
                <li><code>number</code> - Numeric property values</li>
                <li><code>boolean</code> - Boolean property values</li>
                <li><code>object</code> - Complex property values</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Constructor function
class User {
  constructor(name, age, role) {
    this.name = name;           // Instance property
    this.age = age;             // Instance property
    this.role = role;           // Instance property
    this.createdAt = new Date(); // Auto-generated property
  }

  // Method to access properties
  getInfo() {
    return \`\${this.name} is a \${this.age}-year-old \${this.role}\`;
  }

  // Method to modify properties
  updateRole(newRole) {
    this.role = newRole;
  }

  // Method to add new properties
  addSkill(skill) {
    if (!this.skills) {
      this.skills = [];
    }
    this.skills.push(skill);
  }
}

// Creating instances with constructor
const user1 = new User("Sarah", 28, "Designer");
const user2 = new User("John", 32, "Developer");

// Accessing properties
console.log(user1.name);        // "Sarah"
console.log(user1["age"]);      // 28
console.log(user1.getInfo());   // "Sarah is a 28-year-old Designer"

// Modifying properties
user1.updateRole("Senior Designer");
user1.addSkill("React");

// Property enumeration
for (let prop in user1) {
  console.log(\`\${prop}: \${user1[prop]}\`);
}

// Using constructors in React
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>
      {user.skills && (
        <p>Skills: {user.skills.join(", ")}</p>
      )}
    </div>
  );
}`}
              explanation="Constructors initialize object properties when creating new instances, while properties store data within objects."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Instance Properties:</label>
                  <div className="result">
                    Name: <span className="code-output">{fundamentalConstructorUser.name}</span><br/>
                    Age: <span className="code-output">{fundamentalConstructorUser.age}</span><br/>
                    Role: <span className="code-output">{fundamentalConstructorUser.role}</span><br/>
                    {fundamentalConstructorUser.skills && (
                      <>Skills: <span className="code-output">{fundamentalConstructorUser.skills.join(", ")}</span><br/></>
                    )}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Modify Properties:</label>
                  <div className="input-group">
                    <input 
                      value={fundamentalConstructorUser.name} 
                      onChange={(e) => setFundamentalConstructorUser(prev => ({...prev, name: e.target.value}))}
                      placeholder="Name"
                    />
                    <input 
                      type="number"
                      value={fundamentalConstructorUser.age} 
                      onChange={(e) => setFundamentalConstructorUser(prev => ({...prev, age: parseInt(e.target.value) || 0}))}
                      placeholder="Age"
                    />
                    <select 
                      value={fundamentalConstructorUser.role} 
                      onChange={(e) => setFundamentalConstructorUser(prev => ({...prev, role: e.target.value}))}
                    >
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                      <option value="Manager">Manager</option>
                      <option value="Tester">Tester</option>
                    </select>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Add Skills:</label>
                  <div className="input-group">
                    <input 
                      value={fundamentalConstructorMessage} 
                      onChange={(e) => setFundamentalConstructorMessage(e.target.value)}
                      placeholder="Enter a skill"
                    />
                    <button onClick={() => {
                      if (fundamentalConstructorMessage.trim()) {
                        setFundamentalConstructorUser(prev => ({
                          ...prev, 
                          skills: [...(prev.skills || []), fundamentalConstructorMessage.trim()]
                        }))
                        setFundamentalConstructorMessage('')
                      }
                    }}>
                      Add Skill
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Property Info:</label>
                  <div className="result">
                    {fundamentalConstructorUser.name} is a {fundamentalConstructorUser.age}-year-old {fundamentalConstructorUser.role}
                    {fundamentalConstructorUser.skills && fundamentalConstructorUser.skills.length > 0 && (
                      <> with skills in {fundamentalConstructorUser.skills.join(", ")}</>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Events</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Events are like interactions in Figma prototypes - they respond to user actions.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`element.addEventListener('event', handler);

// In React JSX:
<button onClick={handleClick}>
  Click me
</button>

const handleClick = (event) => {
  // Handle event
};`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Event Handler Input:</strong>
              <ul>
                <li><code>event</code> (Event) - DOM event object</li>
                <li><code>event.target</code> (Element) - Triggered element</li>
                <li><code>event.target.value</code> (any) - Element value</li>
                <li><code>event.preventDefault()</code> - Prevent default behavior</li>
                <li><code>event.stopPropagation()</code> - Stop event bubbling</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Handler Returns:</strong>
              <ul>
                <li><code>void</code> - Most event handlers</li>
                <li><code>boolean</code> - Return false to prevent default</li>
                <li><code>undefined</code> - Implicit return</li>
                <li><code>any</code> - Processed event data</li>
                <li><code>Promise</code> - Async event handling</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Event handling
function handleClick() {
  console.log("Button clicked!");
}

function handleInput(event) {
  console.log("Input value:", event.target.value);
}

// In HTML/JSX:
// <button onClick={handleClick}>Click me</button>
// <input onChange={handleInput} />

// Common events:
// - click: Mouse click
// - change: Input value changes
// - submit: Form submission
// - keydown: Key pressed
// - mouseover: Mouse hovers over element`}
              explanation="Events allow your code to respond to user interactions and system changes."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Event Examples:</label>
                  <div className="button-group">
                    <button onClick={() => alert('Button clicked!')}>
                      Click Event
                    </button>
                    <button onMouseOver={() => alert('Mouse over!')}>
                      Mouse Over
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Input Event:</label>
                  <input 
                    type="text" 
                    placeholder="Type something..."
                    onChange={(e) => setFundamentalMessage(e.target.value)}
                  />
                  <div className="result">You typed: {fundamentalMessage}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Parameters & Arguments</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Parameters are like input fields in Figma components - they define what data the function needs.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`function functionName(parameter1, parameter2) {
  // Function body
}

functionName(argument1, argument2);  // Call with arguments

function greet(name = "User") {     // Default parameter
  return "Hello, " + name;
}`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Function Parameters:</strong>
              <ul>
                <li><code>parameter</code> (any) - Function parameter</li>
                <li><code>param1, param2</code> (any) - Multiple parameters</li>
                <li><code>defaultValue</code> (any) - Default parameter value</li>
                <li><code>options</code> (object) - Configuration object</li>
                <li><code>callback</code> (function) - Function parameter</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Function Returns:</strong>
              <ul>
                <li><code>any</code> - Function return value</li>
                <li><code>undefined</code> - If no return statement</li>
                <li><code>Promise</code> - For async functions</li>
                <li><code>generator</code> - For generator functions</li>
                <li><code>void</code> - For functions with no return</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Parameters (in function definition)
function calculateTotal(price, tax, discount) {
  const subtotal = price * (1 - discount);
  return subtotal * (1 + tax);
}

// Arguments (when calling the function)
const total1 = calculateTotal(100, 0.1, 0.2);  // price=100, tax=0.1, discount=0.2
const total2 = calculateTotal(50, 0.05, 0.1);  // price=50, tax=0.05, discount=0.1

// Default parameters
function greet(name = "User") {
  return "Hello, " + name;
}

console.log(greet());        // "Hello, User"
console.log(greet("Sarah")); // "Hello, Sarah"`}
              explanation="Parameters define what data a function expects, arguments are the actual values passed when calling the function."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Calculate Total:</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      placeholder="Price" 
                      id="priceInput"
                      defaultValue="100"
                    />
                    <input 
                      type="number" 
                      placeholder="Tax %" 
                      id="taxInput"
                      defaultValue="10"
                    />
                    <input 
                      type="number" 
                      placeholder="Discount %" 
                      id="discountInput"
                      defaultValue="20"
                    />
                    <button onClick={() => {
                      const price = parseFloat(document.getElementById('priceInput').value)
                      const tax = parseFloat(document.getElementById('taxInput').value) / 100
                      const discount = parseFloat(document.getElementById('discountInput').value) / 100
                      const total = price * (1 - discount) * (1 + tax)
                      alert(`Total: $${total.toFixed(2)}`)
                    }}>Calculate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Primitive vs Reference Data Types</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Primitives are like individual text elements in Figma, while references are like components - changing a component affects all instances.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Primitive types (copied by value)
let primitive = "value";
let copy = primitive;        // Independent copy

// Reference types (copied by reference)
let reference = { key: "value" };
let refCopy = reference;     // Same reference

// Creating true copies
let deepCopy = { ...reference };     // Spread operator
let arrayCopy = [...array];          // Array spread`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Assignment Input:</strong>
              <ul>
                <li><code>primitive</code> (string/number/boolean) - Direct value</li>
                <li><code>reference</code> (object/array) - Memory reference</li>
                <li><code>spread</code> (...) - Spread operator for copying</li>
                <li><code>Object.assign()</code> - Target and source objects</li>
                <li><code>structuredClone()</code> - Deep copy function</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Copy Behavior:</strong>
              <ul>
                <li><code>independent</code> - Primitive copies are separate</li>
                <li><code>shared</code> - Reference copies point to same data</li>
                <li><code>new object</code> - Spread creates new instance</li>
                <li><code>shallow copy</code> - Nested objects still shared</li>
                <li><code>deep copy</code> - Complete independent copy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// PRIMITIVE TYPES (copied by value)
let name = "Sarah";
let age = 28;
let isActive = true;

// When you assign primitives, you copy the value
let nameCopy = name;  // Creates a copy
nameCopy = "Jane";    // Only changes the copy
console.log(name);    // Still "Sarah"
console.log(nameCopy); // "Jane"

// REFERENCE TYPES (copied by reference)
let user = { name: "Sarah", age: 28 };
let colors = ["red", "blue", "green"];

// When you assign references, you copy the reference
let userCopy = user;      // Copies the reference (same object)
userCopy.name = "Jane";   // Changes the original object
console.log(user.name);   // "Jane" (original changed!)
console.log(userCopy.name); // "Jane"

// To create a true copy of objects/arrays:
let userDeepCopy = { ...user };           // Spread operator
let colorsDeepCopy = [...colors];         // Spread operator
let userDeepCopy2 = Object.assign({}, user); // Object.assign`}
              explanation="Primitive types are copied by value, while reference types are copied by reference. This affects how data is shared and modified."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Primitive Types (Copied by Value):</label>
                  <div className="result">
                    <div>Original name: <span className="code-output">{fundamentalPrimitiveName}</span></div>
                    <div>Copy name: <span className="code-output">{fundamentalPrimitiveNameCopy}</span></div>
                  </div>
                  <div className="button-group">
                    <button onClick={() => {
                      setFundamentalPrimitiveNameCopy('Jane')
                    }}>Change Copy to "Jane"</button>
                    <button onClick={() => {
                      setFundamentalPrimitiveName('Sarah')
                      setFundamentalPrimitiveNameCopy('Sarah')
                    }}>Reset Both</button>
                  </div>
                  <div className="result" style={{fontSize: '12px', color: '#94a3b8'}}>
                    Notice: Changing the copy doesn't affect the original
                  </div>
                </div>
                <div className="demo-item">
                  <label>Reference Types (Copied by Reference):</label>
                  <div className="result">
                    <div>Original user: <span className="code-output">{fundamentalReferenceUser.name}</span></div>
                    <div>Copy user: <span className="code-output">{fundamentalReferenceUserCopy.name}</span></div>
                  </div>
                  <div className="button-group">
                    <button onClick={() => {
                      setFundamentalReferenceUserCopy(prev => ({...prev, name: 'Jane'}))
                    }}>Change Copy to "Jane"</button>
                    <button onClick={() => {
                      setFundamentalReferenceUser({name: 'Sarah', age: 28})
                      setFundamentalReferenceUserCopy({name: 'Sarah', age: 28})
                    }}>Reset Both</button>
                  </div>
                  <div className="result" style={{fontSize: '12px', color: '#ef4444'}}>
                    Notice: Changing the copy affects the original!
                  </div>
                </div>
                <div className="demo-item">
                  <label>Creating True Copies:</label>
                  <div className="result">
                    <div>Original array: [{fundamentalReferenceArray.join(', ')}]</div>
                    <div>Spread copy: [{fundamentalReferenceArraySpread.join(', ')}]</div>
                  </div>
                  <div className="button-group">
                    <button onClick={() => {
                      setFundamentalReferenceArraySpread(prev => [...prev, 'yellow'])
                    }}>Add "yellow" to spread copy</button>
                    <button onClick={() => {
                      setFundamentalReferenceArray(['red', 'blue', 'green'])
                      setFundamentalReferenceArraySpread(['red', 'blue', 'green'])
                    }}>Reset Arrays</button>
                  </div>
                  <div className="result" style={{fontSize: '12px', color: '#10b981'}}>
                    Notice: Spread operator creates independent copies
                  </div>
                </div>
                <div className="demo-item">
                  <label>React State Implications:</label>
                  <div className="result">
                    <div>User state: {fundamentalReactUser.name} (age: {fundamentalReactUser.age})</div>
                    <div>Skills: [{fundamentalReactUser.skills.join(', ')}]</div>
                  </div>
                  <div className="button-group">
                    <button onClick={() => {
                      // ❌ Wrong way - mutates original object
                      fundamentalReactUser.age = fundamentalReactUser.age + 1
                      setFundamentalReactUser(fundamentalReactUser) // React won't re-render!
                    }}>Wrong: Direct Mutation</button>
                    <button onClick={() => {
                      // ✅ Correct way - creates new object
                      setFundamentalReactUser(prev => ({...prev, age: prev.age + 1}))
                    }}>Correct: New Object</button>
                    <button onClick={() => {
                      // ✅ Correct way - creates new array
                      setFundamentalReactUser(prev => ({
                        ...prev, 
                        skills: [...prev.skills, 'React']
                      }))
                    }}>Add Skill</button>
                  </div>
                  <div className="result" style={{fontSize: '12px', color: '#f59e0b'}}>
                    Try the "Wrong" button - notice React doesn't update! Then try "Correct" buttons.
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

// React Basics Section
function JSBasicsSection() {
  // Interactive state for examples
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
      <h1>React Basics</h1>
      <p>Core React concepts explained with Figma analogies</p>

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
    </div>
  )
}

// Power Apps Section
function PowerAppsSection() {
  // Interactive state for Power Apps examples
  const [powerAppsUser, setPowerAppsUser] = useState({ name: 'Designer', role: 'UX Designer', isAdmin: false })
  const [powerAppsFormData, setPowerAppsFormData] = useState({ projectName: '', clientName: '', budget: 0 })
  const [powerAppsCollection, setPowerAppsCollection] = useState([
    { id: 1, name: 'Homepage Redesign', status: 'In Progress', priority: 'High' },
    { id: 2, name: 'Mobile App Design', status: 'Completed', priority: 'Medium' },
    { id: 3, name: 'Brand Guidelines', status: 'Planning', priority: 'Low' }
  ])
  const [powerAppsFilter, setPowerAppsFilter] = useState('all')
  const [powerAppsTheme, setPowerAppsTheme] = useState('light')

  return (
    <div className="section">
      <h1>Power Apps & Power Fx</h1>
      <p>Bridging Power Apps concepts with React/JavaScript for designers</p>

      <div className="concept-card">
        <h2>Core Power Fx Functions</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Power Fx functions are like Figma's smart layout and component features - they help you find, filter, and transform data automatically, just like how Figma helps you organize and manage design elements.
        </div>
        <div className="syntax-example">
          <h4>Data Functions:</h4>
          <SyntaxExample
            code={`// Filter Function
// Syntax:
Filter(Source, Condition)
Filter(Source, ColumnName = Value)

// Examples:
Filter(Products, Category = "Electronics")
Filter(Products, Category = "Electronics" && Price > 100)
Filter(Projects, Status = "In Progress" && Priority = "High")

// LookUp Function
// Syntax:
LookUp(Source, Condition [, Result])
LookUp(Source, ColumnName = Value)
LookUp(Source, ColumnName = Value, ReturnColumn)

// Examples:
LookUp(Products, Category = "Electronics")
LookUp(Products, Category = "Electronics", Name)
LookUp(Projects, ID = 1, ProjectName)

// CountRows Function
// Syntax:
CountRows(Source)
CountRows(Filter(Source, Condition))

// Examples:
CountRows(Products)
CountRows(Filter(Products, Category = "Electronics"))

// Sum Function
// Syntax:
Sum(Source, ColumnName)
Sum(Filter(Source, Condition), ColumnName)

// Examples:
Sum(Products, Price)
Sum(Filter(Products, Category = "Electronics"), Price)

// First Function
// Syntax:
First(Source)
First(Sort(Source, ColumnName, SortOrder))

// Examples:
First(Products)
First(Sort(Products, Price, Descending))

// Sort Function
// Syntax:
Sort(Source, ColumnName, SortOrder)
Sort(Source, ColumnName, Ascending)

// Examples:
Sort(Products, Price, Descending)
Sort(Projects, DueDate, Ascending)`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Power Fx Function Input:</strong>
              <ul>
                <li><code>Source</code> (table) - Data source or collection</li>
                <li><code>Condition</code> (boolean) - Filter condition</li>
                <li><code>ColumnName</code> (string) - Column to filter/sort by</li>
                <li><code>Value</code> (any) - Value to match</li>
                <li><code>SortOrder</code> (enum) - Ascending/Descending</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Power Fx Function Output:</strong>
              <ul>
                <li><code>table</code> - Filtered/sorted collection</li>
                <li><code>record</code> - Single record from LookUp</li>
                <li><code>number</code> - Count or sum result</li>
                <li><code>any</code> - Specific column value</li>
                <li><code>blank</code> - No matching records</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx Data Functions for Design Projects
// 1. Filter Projects by Status
ActiveProjects = Filter(Projects, Status = "In Progress")

// 2. LookUp Project Details
CurrentProject = LookUp(Projects, ID = 1, ProjectName)
ProjectBudget = LookUp(Projects, ID = 1, Budget)

// 3. Count Projects by Category
DesignProjects = CountRows(Filter(Projects, Category = "Design"))
DevelopmentProjects = CountRows(Filter(Projects, Category = "Development"))

// 4. Sum Budget by Category
TotalDesignBudget = Sum(Filter(Projects, Category = "Design"), Budget)
TotalDevelopmentBudget = Sum(Filter(Projects, Category = "Development"), Budget)

// 5. Get Highest Priority Project
TopPriority = First(Sort(Projects, Priority, Descending))

// 6. Sort Projects by Due Date
UpcomingProjects = Sort(Projects, DueDate, Ascending)

// 7. Complex Filter with Multiple Conditions
UrgentDesignProjects = Filter(Projects, 
  Category = "Design" && 
  Priority = "High" && 
  Status = "In Progress"
)

// 8. LookUp with Multiple Conditions
DesignerProject = LookUp(Projects, 
  Category = "Design" && AssignedTo = "Sarah", 
  ProjectName
)

// JavaScript/React Equivalents
// 1. Array filtering
const activeProjects = projects.filter(p => p.status === "In Progress");

// 2. Array finding
const currentProject = projects.find(p => p.id === 1)?.projectName;
const projectBudget = projects.find(p => p.id === 1)?.budget;

// 3. Array counting
const designProjects = projects.filter(p => p.category === "Design").length;

// 4. Array reduction
const totalDesignBudget = projects
  .filter(p => p.category === "Design")
  .reduce((sum, p) => sum + p.budget, 0);

// 5. Array sorting and finding
const topPriority = [...projects]
  .sort((a, b) => b.priority.localeCompare(a.priority))[0];

// 6. Array sorting
const upcomingProjects = [...projects]
  .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));`}
              explanation="Power Fx provides declarative data functions that automatically update when data changes, similar to React's reactive data handling."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Data Functions Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Filter Projects by Status:</label>
                  <select 
                    id="statusFilter"
                    defaultValue="In Progress"
                    onChange={(e) => {
                      const status = e.target.value;
                      const filtered = powerAppsCollection.filter(p => p.status === status);
                      document.getElementById('filteredCount').textContent = filtered.length;
                      document.getElementById('filteredProjects').innerHTML = filtered.map(p => 
                        `<div style="margin: 4px 0; padding: 4px; background: rgba(255,255,255,0.1);">${p.name} - ${p.priority}</div>`
                      ).join('');
                    }}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Planning">Planning</option>
                  </select>
                  <div className="result">Count: <span id="filteredCount">1</span></div>
                  <div id="filteredProjects">
                    <div style={{margin: '4px 0', padding: '4px', background: 'rgba(255,255,255,0.1)'}}>
                      Homepage Redesign - High
                    </div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>LookUp Project by ID:</label>
                  <input 
                    type="number" 
                    id="lookupId"
                    defaultValue="1"
                    min="1"
                    max="3"
                    onChange={(e) => {
                      const id = parseInt(e.target.value);
                      const project = powerAppsCollection.find(p => p.id === id);
                      if (project) {
                        document.getElementById('lookupResult').textContent = `${project.name} (${project.status})`;
                      } else {
                        document.getElementById('lookupResult').textContent = 'Project not found';
                      }
                    }}
                  />
                  <div className="result">Result: <span id="lookupResult">Homepage Redesign (In Progress)</span></div>
                </div>
                <div className="demo-item">
                  <label>Count by Priority:</label>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '8px'}}>
                    <div style={{padding: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px', textAlign: 'center'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>High</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>
                        {powerAppsCollection.filter(p => p.priority === 'High').length}
                      </div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px', textAlign: 'center'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Medium</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>
                        {powerAppsCollection.filter(p => p.priority === 'Medium').length}
                      </div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px', textAlign: 'center'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Low</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>
                        {powerAppsCollection.filter(p => p.priority === 'Low').length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Power Fx vs JavaScript/JSX</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Power Fx is like Figma's smart components with formulas - declarative logic that updates automatically, similar to React's reactive nature.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax Comparison:</h4>
          <SyntaxExample
            code={`// Power Fx (Power Apps)
Label1.Text = "Hello, " & User().FullName
Button1.Visible = ThisItem.Status = "Active"
Gallery1.Items = Filter(Projects, Status = "In Progress")

// JavaScript/React Equivalent
const userName = user.fullName;
const buttonVisible = item.status === "Active";
const filteredProjects = projects.filter(p => p.status === "In Progress");`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Power Fx Input:</strong>
              <ul>
                <li><code>control.property</code> - Control property reference</li>
                <li><code>function()</code> - Built-in Power Fx function</li>
                <li><code>collection</code> - Data source reference</li>
                <li><code>variable</code> - Global or context variable</li>
                <li><code>expression</code> - Mathematical/logical expression</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Power Fx Output:</strong>
              <ul>
                <li><code>any</code> - Calculated property value</li>
                <li><code>boolean</code> - Conditional visibility/state</li>
                <li><code>collection</code> - Filtered/sorted data</li>
                <li><code>string</code> - Formatted text content</li>
                <li><code>number</code> - Calculated numeric value</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx Examples (Power Apps)
// 1. Text concatenation
Label1.Text = "Welcome, " & User().FullName & "!"

// 2. Conditional visibility
Button1.Visible = ThisItem.Status = "Active"

// 3. Data filtering
Gallery1.Items = Filter(Projects, Status = "In Progress")

// 4. Mathematical calculations
TotalCost.Text = Sum(ProjectCosts, Amount)

// 5. Date formatting
DueDate.Text = Text(Project.DueDate, "mmmm dd, yyyy")

// JavaScript/React Equivalents
// 1. Template literals
const welcomeText = \`Welcome, \${user.fullName}!\`;

// 2. Conditional rendering
const buttonVisible = item.status === "Active";

// 3. Array filtering
const filteredProjects = projects.filter(p => p.status === "In Progress");

// 4. Array reduction
const totalCost = projectCosts.reduce((sum, cost) => sum + cost.amount, 0);

// 5. Date formatting
const dueDate = new Date(project.dueDate).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});`}
              explanation="Power Fx uses declarative formulas similar to React's reactive nature, where changes automatically update the UI."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Comparison:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Welcome (Power Fx style):</label>
                  <div className="result">
                    Welcome, {powerAppsUser.name} ({powerAppsUser.role})!
                  </div>
                </div>
                <div className="demo-item">
                  <label>Conditional Button (Power Fx style):</label>
                  <button 
                    style={{
                      backgroundColor: powerAppsUser.isAdmin ? '#3b82f6' : '#6b7280',
                      color: 'white',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: powerAppsUser.isAdmin ? 'pointer' : 'not-allowed'
                    }}
                    disabled={!powerAppsUser.isAdmin}
                  >
                    {powerAppsUser.isAdmin ? 'Admin Panel' : 'Access Denied'}
                  </button>
                </div>
                <div className="demo-item">
                  <label>Filtered Projects (Power Fx style):</label>
                  <select 
                    value={powerAppsFilter} 
                    onChange={(e) => setPowerAppsFilter(e.target.value)}
                  >
                    <option value="all">All Projects</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Planning">Planning</option>
                  </select>
                  <div className="result">
                    {powerAppsCollection
                      .filter(project => powerAppsFilter === 'all' || project.status === powerAppsFilter)
                      .map(project => (
                        <div key={project.id} style={{margin: '4px 0', padding: '4px', background: 'rgba(255,255,255,0.1)'}}>
                          {project.name} - {project.status}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Named Formulas (Power Fx) vs React Variables</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Named formulas are like Figma's component properties - reusable values that automatically update across your entire design system.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Power Fx Named Formulas (App.Formulas)
App.Formulas: 
  PrimaryColor = ColorValue("#3b82f6");
  SecondaryColor = ColorValue("#6b7280");
  IsDarkMode = User().Email = "admin@company.com";
  ThemeBackground = If(IsDarkMode, ColorValue("#1f2937"), ColorValue("#ffffff"));

// React Equivalent (useState + useMemo)
const [isDarkMode, setIsDarkMode] = useState(false);
const primaryColor = "#3b82f6";
const secondaryColor = "#6b7280";
const themeBackground = useMemo(() => 
  isDarkMode ? "#1f2937" : "#ffffff", [isDarkMode]
);`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Named Formula Input:</strong>
              <ul>
                <li><code>formulaName</code> (string) - Formula identifier</li>
                <li><code>expression</code> (any) - Power Fx expression</li>
                <li><code>function()</code> - Built-in Power Fx function</li>
                <li><code>control.property</code> - Control property reference</li>
                <li><code>conditional</code> - If/Then/Else logic</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Named Formula Output:</strong>
              <ul>
                <li><code>any</code> - Calculated formula value</li>
                <li><code>color</code> - Color value for theming</li>
                <li><code>boolean</code> - Conditional logic result</li>
                <li><code>string</code> - Text or formatted value</li>
                <li><code>number</code> - Calculated numeric value</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx Named Formulas (Design System)
App.Formulas:
  // Color System
  PrimaryBlue = ColorValue("#3b82f6");
  SecondaryGray = ColorValue("#6b7280");
  SuccessGreen = ColorValue("#10b981");
  WarningOrange = ColorValue("#f59e0b");
  ErrorRed = ColorValue("#ef4444");
  
  // Typography
  HeadingFont = "Inter";
  BodyFont = "Inter";
  LargeText = 24;
  MediumText = 16;
  SmallText = 14;
  
  // Spacing
  LargeSpacing = 24;
  MediumSpacing = 16;
  SmallSpacing = 8;
  
  // Theme Logic
  IsDarkMode = User().Email = "admin@company.com";
  BackgroundColor = If(IsDarkMode, ColorValue("#1f2937"), ColorValue("#ffffff"));
  TextColor = If(IsDarkMode, ColorValue("#f9fafb"), ColorValue("#111827"));
  
  // Component States
  ButtonHoverColor = ColorFade(PrimaryBlue, 20%);
  CardShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";

// React Equivalent (Design System)
const theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6b7280",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444"
  },
  typography: {
    headingFont: "Inter",
    bodyFont: "Inter",
    large: 24,
    medium: 16,
    small: 14
  },
  spacing: {
    large: 24,
    medium: 16,
    small: 8
  }
};

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return {
    ...theme,
    isDarkMode,
    backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
    textColor: isDarkMode ? "#f9fafb" : "#111827",
    buttonHoverColor: fade(theme.colors.primary, 0.2),
    cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  };
};`}
              explanation="Named formulas in Power Fx provide a centralized way to manage design tokens and theme logic, similar to React's theme systems."
            />
          </div>
          <div className="output-panel">
            <h4>Design System Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Theme Toggle (Power Fx style):</label>
                  <button 
                    onClick={() => setPowerAppsTheme(powerAppsTheme === 'light' ? 'dark' : 'light')}
                    style={{
                      backgroundColor: powerAppsTheme === 'dark' ? '#3b82f6' : '#6b7280',
                      color: 'white',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '4px'
                    }}
                  >
                    Switch to {powerAppsTheme === 'light' ? 'Dark' : 'Light'} Mode
                  </button>
                </div>
                <div className="demo-item">
                  <label>Design Token Usage:</label>
                  <div style={{
                    padding: '16px',
                    backgroundColor: powerAppsTheme === 'dark' ? '#1f2937' : '#ffffff',
                    color: powerAppsTheme === 'dark' ? '#f9fafb' : '#111827',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: powerAppsTheme === 'dark' ? '#374151' : '#e5e7eb'
                  }}>
                    <h3 style={{fontSize: '24px', margin: '0 0 8px 0'}}>Design System Card</h3>
                    <p style={{fontSize: '16px', margin: '0 0 16px 0'}}>This demonstrates how named formulas work like design tokens.</p>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <button style={{backgroundColor: '#3b82f6', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px'}}>
                        Primary
                      </button>
                      <button style={{backgroundColor: '#6b7280', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px'}}>
                        Secondary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>User-Defined Functions (UDFs) vs React Custom Hooks</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> UDFs are like custom Figma plugins - reusable functions that extend the platform's capabilities with your own logic.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Power Fx UDF (App.Formulas)
App.Formulas:
  CalculateProjectProgress(project) = 
    CountRows(Filter(project.Tasks, Status = "Completed")) / 
    CountRows(project.Tasks) * 100;
  
  FormatCurrency(amount) = 
    Text(amount, "[$-en-US]$#,##0.00");
  
  GetUserRole(userEmail) = 
    Switch(userEmail,
      "admin@company.com", "Administrator",
      "designer@company.com", "Designer",
      "Developer"
    );

// React Custom Hooks Equivalent
const useProjectProgress = (project) => {
  const completedTasks = project.tasks.filter(task => task.status === "Completed");
  const progress = (completedTasks.length / project.tasks.length) * 100;
  return progress;
};

const useCurrencyFormatter = () => {
  return (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

const useUserRole = () => {
  return (userEmail) => {
    switch(userEmail) {
      case "admin@company.com": return "Administrator";
      case "designer@company.com": return "Designer";
      default: return "Developer";
    }
  };
};`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>UDF Input:</strong>
              <ul>
                <li><code>parameter</code> (any) - Function parameter</li>
                <li><code>collection</code> (table) - Data source</li>
                <li><code>expression</code> (any) - Power Fx expression</li>
                <li><code>conditional</code> - If/Then/Else logic</li>
                <li><code>function()</code> - Built-in function calls</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>UDF Output:</strong>
              <ul>
                <li><code>any</code> - Calculated function result</li>
                <li><code>number</code> - Numeric calculations</li>
                <li><code>string</code> - Formatted text</li>
                <li><code>boolean</code> - Logical operations</li>
                <li><code>collection</code> - Filtered data</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx UDFs for Design Workflows
App.Formulas:
  // Design Project Management
  CalculateDesignProgress(project) = 
    Switch(project.Phase,
      "Research", 10,
      "Wireframes", 30,
      "Mockups", 60,
      "Prototyping", 80,
      "Final", 100,
      0
    );
  
  GetPriorityColor(priority) = 
    Switch(priority,
      "High", ColorValue("#ef4444"),
      "Medium", ColorValue("#f59e0b"),
      "Low", ColorValue("#10b981"),
      ColorValue("#6b7280")
    );
  
  FormatDesignDate(date) = 
    Text(date, "mmmm dd, yyyy");
  
  GetClientStatus(client) = 
    If(CountRows(Filter(client.Projects, Status = "Active")) > 0,
      "Active",
      "Inactive"
    );
  
  CalculateProjectBudget(project) = 
    Sum(project.Expenses, Amount);

// React Custom Hooks for Design Workflows
const useDesignProgress = () => {
  return (project) => {
    const phaseProgress = {
      "Research": 10,
      "Wireframes": 30,
      "Mockups": 60,
      "Prototyping": 80,
      "Final": 100
    };
    return phaseProgress[project.phase] || 0;
  };
};

const usePriorityColor = () => {
  return (priority) => {
    const colors = {
      "High": "#ef4444",
      "Medium": "#f59e0b", 
      "Low": "#10b981"
    };
    return colors[priority] || "#6b7280";
  };
};

const useDesignDateFormatter = () => {
  return (date) => new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const useClientStatus = () => {
  return (client) => {
    const hasActiveProjects = client.projects.some(p => p.status === "Active");
    return hasActiveProjects ? "Active" : "Inactive";
  };
};

const useProjectBudget = () => {
  return (project) => {
    return project.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };
};`}
              explanation="UDFs in Power Fx provide reusable business logic, similar to custom hooks in React for design workflows and data processing."
            />
          </div>
          <div className="output-panel">
            <h4>Design Workflow Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Project Progress Calculator:</label>
                  <select 
                    id="projectPhase"
                    defaultValue="Mockups"
                    onChange={(e) => {
                      const phase = e.target.value;
                      const progress = {
                        "Research": 10,
                        "Wireframes": 30,
                        "Mockups": 60,
                        "Prototyping": 80,
                        "Final": 100
                      }[phase] || 0;
                      document.getElementById('progressDisplay').textContent = progress + '%';
                    }}
                  >
                    <option value="Research">Research</option>
                    <option value="Wireframes">Wireframes</option>
                    <option value="Mockups">Mockups</option>
                    <option value="Prototyping">Prototyping</option>
                    <option value="Final">Final</option>
                  </select>
                  <div className="result">Progress: <span id="progressDisplay">60%</span></div>
                </div>
                <div className="demo-item">
                  <label>Priority Color Mapping:</label>
                  <div style={{display: 'flex', gap: '8px', marginTop: '8px'}}>
                    {['High', 'Medium', 'Low'].map(priority => {
                      const color = {
                        "High": "#ef4444",
                        "Medium": "#f59e0b",
                        "Low": "#10b981"
                      }[priority];
                      return (
                        <div key={priority} style={{
                          backgroundColor: color,
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}>
                          {priority}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Budget Calculator:</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      placeholder="Expense 1" 
                      id="expense1"
                      defaultValue="500"
                    />
                    <input 
                      type="number" 
                      placeholder="Expense 2" 
                      id="expense2"
                      defaultValue="300"
                    />
                    <button onClick={() => {
                      const exp1 = parseInt(document.getElementById('expense1').value) || 0;
                      const exp2 = parseInt(document.getElementById('expense2').value) || 0;
                      document.getElementById('budgetTotal').textContent = '$' + (exp1 + exp2);
                    }}>Calculate</button>
                  </div>
                  <div className="result">Total Budget: <span id="budgetTotal">$800</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>User-Defined Types (UDTs) vs TypeScript Interfaces</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> UDTs are like Figma component properties with specific constraints - they define the structure and validation for your data, just like component properties define what can be configured.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Power Fx UDT (App.Formulas)
App.Formulas:
  // Design Project Type
  DesignProject = {
    Name: Text,
    Client: Text,
    StartDate: Date,
    DueDate: Date,
    Budget: Number,
    Status: Choice(["Planning", "In Progress", "Completed"]),
    Priority: Choice(["Low", "Medium", "High"]),
    Team: Table
  };
  
  // Design Asset Type
  DesignAsset = {
    Name: Text,
    Type: Choice(["Logo", "Icon", "Illustration", "Mockup"]),
    Format: Choice(["SVG", "PNG", "JPG", "PDF"]),
    FileSize: Number,
    Tags: Table
  };

// TypeScript Interface Equivalent
interface DesignProject {
  name: string;
  client: string;
  startDate: Date;
  dueDate: Date;
  budget: number;
  status: 'Planning' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  team: TeamMember[];
}

interface DesignAsset {
  name: string;
  type: 'Logo' | 'Icon' | 'Illustration' | 'Mockup';
  format: 'SVG' | 'PNG' | 'JPG' | 'PDF';
  fileSize: number;
  tags: string[];
}`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>UDT Input:</strong>
              <ul>
                <li><code>typeName</code> (string) - Type identifier</li>
                <li><code>propertyName</code> (string) - Property name</li>
                <li><code>dataType</code> (type) - Power Fx data type</li>
                <li><code>constraints</code> (choice) - Value restrictions</li>
                <li><code>validation</code> (formula) - Validation rules</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>UDT Output:</strong>
              <ul>
                <li><code>type</code> - Defined data structure</li>
                <li><code>validation</code> - Type validation rules</li>
                <li><code>constraints</code> - Value constraints</li>
                <li><code>structure</code> - Property definitions</li>
                <li><code>error</code> - Validation error messages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx UDTs for Design Systems
App.Formulas:
  // Design Token Type
  DesignToken = {
    Name: Text,
    Category: Choice(["Color", "Typography", "Spacing", "Shadow"]),
    Value: Text,
    Description: Text,
    Usage: Text
  };
  
  // Component Type
  DesignComponent = {
    Name: Text,
    Category: Choice(["Button", "Card", "Input", "Navigation"]),
    Variants: Table,
    Props: Table,
    Documentation: Text
  };
  
  // Brand Guidelines Type
  BrandGuideline = {
    Section: Choice(["Colors", "Typography", "Logo", "Spacing"]),
    Title: Text,
    Description: Text,
    Examples: Table,
    Rules: Table
  };

// TypeScript Interfaces for Design Systems
interface DesignToken {
  name: string;
  category: 'Color' | 'Typography' | 'Spacing' | 'Shadow';
  value: string;
  description: string;
  usage: string;
}

interface DesignComponent {
  name: string;
  category: 'Button' | 'Card' | 'Input' | 'Navigation';
  variants: ComponentVariant[];
  props: ComponentProp[];
  documentation: string;
}

interface BrandGuideline {
  section: 'Colors' | 'Typography' | 'Logo' | 'Spacing';
  title: string;
  description: string;
  examples: Example[];
  rules: Rule[];
}

// Usage Examples
const primaryColor: DesignToken = {
  name: "Primary Blue",
  category: "Color",
  value: "#3b82f6",
  description: "Main brand color for primary actions",
  usage: "Buttons, links, and primary UI elements"
};

const buttonComponent: DesignComponent = {
  name: "Button",
  category: "Button",
  variants: [
    { name: "Primary", style: "filled" },
    { name: "Secondary", style: "outlined" }
  ],
  props: [
    { name: "variant", type: "string", required: false },
    { name: "size", type: "string", required: false }
  ],
  documentation: "Standard button component with multiple variants"
};`}
              explanation="UDTs in Power Fx provide type safety and structure for design systems, similar to TypeScript interfaces in React applications."
            />
          </div>
          <div className="output-panel">
            <h4>Design System Type Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Design Token Creation:</label>
                  <div style={{display: 'grid', gap: '8px', marginBottom: '16px'}}>
                    <input placeholder="Token Name" defaultValue="Primary Blue" />
                    <select defaultValue="Color">
                      <option value="Color">Color</option>
                      <option value="Typography">Typography</option>
                      <option value="Spacing">Spacing</option>
                      <option value="Shadow">Shadow</option>
                    </select>
                    <input placeholder="Value" defaultValue="#3b82f6" />
                    <textarea placeholder="Description" defaultValue="Main brand color for primary actions" />
                  </div>
                  <div className="result" style={{
                    padding: '12px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    borderRadius: '4px',
                    textAlign: 'center'
                  }}>
                    Primary Blue: #3b82f6
                  </div>
                </div>
                <div className="demo-item">
                  <label>Component Type Validation:</label>
                  <div style={{display: 'grid', gap: '8px'}}>
                    <input placeholder="Component Name" defaultValue="Button" />
                    <select defaultValue="Button">
                      <option value="Button">Button</option>
                      <option value="Card">Card</option>
                      <option value="Input">Input</option>
                      <option value="Navigation">Navigation</option>
                    </select>
                    <div className="result" style={{fontSize: '12px', color: '#6b7280'}}>
                      ✓ Valid component type structure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Data vs Design Use Cases</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Just like Figma can be used for both data visualization and pure design, Power Apps bridges business data with design workflows.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx - Data Use Case (Project Management)
App.Formulas:
  // Calculate project metrics
  TotalProjects = CountRows(Projects);
  ActiveProjects = CountRows(Filter(Projects, Status = "In Progress"));
  CompletionRate = (CountRows(Filter(Projects, Status = "Completed")) / TotalProjects) * 100;
  
  // Budget tracking
  TotalBudget = Sum(Projects, Budget);
  SpentBudget = Sum(ProjectExpenses, Amount);
  RemainingBudget = TotalBudget - SpentBudget;
  
  // Team utilization
  TeamWorkload = CountRows(Filter(ProjectAssignments, Status = "Active"));
  AvailableResources = TotalTeamMembers - TeamWorkload;

// Power Fx - Design Use Case (Design System Management)
App.Formulas:
  // Design token management
  ColorTokens = Filter(DesignTokens, Category = "Color");
  TypographyTokens = Filter(DesignTokens, Category = "Typography");
  SpacingTokens = Filter(DesignTokens, Category = "Spacing");
  
  // Component usage tracking
  ComponentUsage = CountRows(ComponentInstances);
  MostUsedComponent = First(Sort(ComponentUsage, Count, Descending));
  
  // Design consistency score
  ConsistencyScore = (CountRows(ConsistentElements) / CountRows(AllElements)) * 100;
  
  // Brand compliance
  CompliantDesigns = CountRows(Filter(Designs, BrandCompliant = true));
  ComplianceRate = (CompliantDesigns / CountRows(Designs)) * 100;

// React Equivalent - Data Use Case
const useProjectMetrics = () => {
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === "In Progress").length;
  const completionRate = (projects.filter(p => p.status === "Completed").length / totalProjects) * 100;
  
  return { totalProjects, activeProjects, completionRate };
};

// React Equivalent - Design Use Case
const useDesignSystem = () => {
  const colorTokens = designTokens.filter(token => token.category === "Color");
  const typographyTokens = designTokens.filter(token => token.category === "Typography");
  const componentUsage = componentInstances.length;
  
  return { colorTokens, typographyTokens, componentUsage };
};`}
              explanation="Power Fx excels at both business data processing and design system management, providing a unified platform for designers and developers."
            />
          </div>
          <div className="output-panel">
            <h4>Use Case Comparison:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Data Use Case - Project Metrics:</label>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px'}}>
                    <div style={{padding: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Total Projects</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>12</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Active</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>5</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Completion Rate</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>58%</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Budget Used</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>$24.5K</div>
                    </div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Design Use Case - Design System:</label>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
                    <div style={{padding: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Color Tokens</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>24</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Components</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>18</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Consistency</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>92%</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Brand Compliance</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>98%</div>
                    </div>
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

// Components Section
function ComponentsSection() {
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
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Component composition is like building complex designs in Figma by combining and nesting simple components.
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

// Hooks Section
function HooksSection() {
  // Interactive state for useState demo
  const [useStateDemoCounter, setUseStateDemoCounter] = useState(0)
  const [useStateDemoUser, setUseStateDemoUser] = useState({ name: '', email: '' })
  const [useStateDemoTodoInput, setUseStateDemoTodoInput] = useState('')
  const [useStateDemoTodos, setUseStateDemoTodos] = useState([])

  // Interactive state for useEffect demo
  const [useEffectDemoTitle, setUseEffectDemoTitle] = useState('React Cheatsheet')
  const [useEffectDemoCount, setUseEffectDemoCount] = useState(0)
  const [useEffectDemoWindowSize, setUseEffectDemoWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })

  // useEffect examples
  useEffect(() => {
    document.title = useEffectDemoTitle
  }, [useEffectDemoTitle])

  useEffect(() => {
    const handleResize = () => {
      setUseEffectDemoWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="section">
      <h1>React Hooks</h1>
      <p>Managing state and side effects in components</p>

      <div className="concept-card">
        <h2>useState Hook Deep Dive</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> useState is like having interactive properties in Figma - values that can change and update the UI.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`const [state, setState] = useState(initialValue);

// Examples:
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const [user, setUser] = useState({ name: '', email: '' });
const [todos, setTodos] = useState([]);`}
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
              <strong>useState Returns:</strong>
              <ul>
                <li><code>[state, setState]</code> - Current state and setter</li>
                <li><code>state</code> (any) - Current state value</li>
                <li><code>setState</code> (function) - State updater function</li>
                <li><code>void</code> - setState doesn't return value</li>
                <li><code>any</code> - State can be any data type</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. Basic useState
const [count, setCount] = useState(0);

// 2. Multiple state variables
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [isSubscribed, setIsSubscribed] = useState(false);

// 3. Object state
const [user, setUser] = useState({
  name: '',
  email: '',
  preferences: {}
});

// 4. Array state
const [todos, setTodos] = useState([]);

// 5. Functional initial state (lazy initialization)
const [expensiveValue, setExpensiveValue] = useState(() => {
  return computeExpensiveValue();
});

// 6. State updates
// Direct update
setCount(count + 1);

// Functional update (safer for multiple updates)
setCount(prevCount => prevCount + 1);

// Object update (preserve other properties)
setUser(prevUser => ({
  ...prevUser,
  name: 'New Name'
}));

// Array update
setTodos(prevTodos => [...prevTodos, newTodo]);

// 7. State update patterns
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue(''); // Clear input
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
              explanation="useState is the most fundamental hook for managing component state. It returns the current state and a function to update it."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive useState Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Counter: {useStateDemoCounter}</label>
                  <div className="button-group">
                    <button onClick={() => setUseStateDemoCounter(useStateDemoCounter - 1)}><Minus size={16} /></button>
                    <button onClick={() => setUseStateDemoCounter(useStateDemoCounter + 1)}><Plus size={16} /></button>
                    <button onClick={() => setUseStateDemoCounter(0)}><RotateCcw size={16} /></button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>User Form:</label>
                  <input 
                    value={useStateDemoUser.name} 
                    onChange={(e) => setUseStateDemoUser(prev => ({...prev, name: e.target.value}))}
                    placeholder="Name"
                  />
                  <input 
                    value={useStateDemoUser.email} 
                    onChange={(e) => setUseStateDemoUser(prev => ({...prev, email: e.target.value}))}
                    placeholder="Email"
                  />
                  <div className="result">
                    Name: {useStateDemoUser.name || 'Not set'} | Email: {useStateDemoUser.email || 'Not set'}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Todo List:</label>
                  <div className="input-group">
                    <input 
                      value={useStateDemoTodoInput} 
                      onChange={(e) => setUseStateDemoTodoInput(e.target.value)}
                      placeholder="Add todo"
                    />
                    <button onClick={() => {
                      if (useStateDemoTodoInput.trim()) {
                        setUseStateDemoTodos(prev => [...prev, {id: Date.now(), text: useStateDemoTodoInput, completed: false}])
                        setUseStateDemoTodoInput('')
                      }
                    }}>Add</button>
                  </div>
                  <ul className="todo-list">
                    {useStateDemoTodos.map(todo => (
                      <li 
                        key={todo.id}
                        onClick={() => setUseStateDemoTodos(prev => prev.map(t => 
                          t.id === todo.id ? {...t, completed: !t.completed} : t
                        ))}
                        style={{textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer'}}
                      >
                        {todo.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>useEffect Hook Deep Dive</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> useEffect is like auto-layout or smart animate in Figma - it runs code when something changes.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`useEffect(() => {
  // Effect code
}, [dependencies]);

// Examples:
useEffect(() => {}, []);           // Run once
useEffect(() => {}, [dep]);        // Run when dep changes
useEffect(() => {
  return () => cleanup();          // Cleanup function
}, []);`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>useEffect Hook Input:</strong>
              <ul>
                <li><code>effect</code> (function) - Effect function to run</li>
                <li><code>dependencies</code> (array) - Values that trigger effect</li>
                <li><code>[]</code> (empty array) - Run only once</li>
                <li><code>[dep1, dep2]</code> (array) - Run when deps change</li>
                <li><code>cleanup</code> (function) - Cleanup function</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>useEffect Behavior:</strong>
              <ul>
                <li><code>void</code> - Effect doesn't return value</li>
                <li><code>cleanup</code> (function) - Optional cleanup function</li>
                <li><code>undefined</code> - No cleanup function</li>
                <li><code>side effect</code> - Performs side effects</li>
                <li><code>subscription</code> - Sets up subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. Basic useEffect (runs after every render)
useEffect(() => {
  console.log('Component rendered');
});

// 2. Empty dependency array (runs only once)
useEffect(() => {
  console.log('Component mounted');
  // Cleanup function
  return () => {
    console.log('Component will unmount');
  };
}, []);

// 3. With dependencies (runs when dependencies change)
useEffect(() => {
  fetchUserData(userId);
}, [userId]);

// 4. Cleanup function
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup
  };
}, []);

// 5. Multiple effects
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effect for user data
  useEffect(() => {
    setLoading(true);
    fetchUser(userId)
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  // Effect for user posts
  useEffect(() => {
    if (user) {
      fetchUserPosts(user.id)
        .then(data => setPosts(data));
    }
  }, [user]);

  // Effect for document title
  useEffect(() => {
    if (user) {
      document.title = \`Profile - \${user.name}\`;
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Posts ({posts.length})</h2>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`}
              explanation="useEffect handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive useEffect Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Document Title Effect:</label>
                  <input 
                    value={useEffectDemoTitle} 
                    onChange={(e) => setUseEffectDemoTitle(e.target.value)}
                    placeholder="Enter page title"
                  />
                  <div className="result">Current title: {document.title}</div>
                </div>
                <div className="demo-item">
                  <label>Counter with Effect:</label>
                  <div className="button-group">
                    <button onClick={() => setUseEffectDemoCount(useEffectDemoCount - 1)}><Minus size={16} /></button>
                    <span style={{padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px'}}>{useEffectDemoCount}</span>
                    <button onClick={() => setUseEffectDemoCount(useEffectDemoCount + 1)}><Plus size={16} /></button>
                  </div>
                  <div className="result">Effect runs when count changes: {useEffectDemoCount % 2 === 0 ? 'Even' : 'Odd'}</div>
                </div>
                <div className="demo-item">
                  <label>Window Size Effect:</label>
                  <div className="result">
                    Window size: {useEffectDemoWindowSize.width} x {useEffectDemoWindowSize.height}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Additional Hooks</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Additional hooks are like specialized tools in Figma - each serves a specific purpose.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. useRef - Access DOM elements
function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </>
  );
}

// 2. useMemo - Memoize expensive calculations
function ExpensiveComponent({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>Total: {expensiveValue}</div>;
}

// 3. useCallback - Memoize functions
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array = function never changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

// 4. useReducer - Complex state logic
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id 
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_TODO', text: 'New Todo' })}>
        Add Todo
      </button>
      {todos.map(todo => (
        <div key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
            Toggle
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}`}
              explanation="Additional hooks provide specialized functionality for different use cases in React applications."
            />
          </div>
          <div className="output-panel">
            <h4>Additional Hooks:</h4>
            <div className="output-content">
              <p><strong>useRef:</strong> <span className="code-output">DOM access</span></p>
              <p><strong>useMemo:</strong> <span className="code-output">Memoize values</span></p>
              <p><strong>useCallback:</strong> <span className="code-output">Memoize functions</span></p>
              <p><strong>useReducer:</strong> <span className="code-output">Complex state</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Custom Hooks</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Custom hooks are like creating your own plugins in Figma - reusable logic that can be shared between components.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// 1. Basic custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// 2. Data fetching hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// 3. Local storage hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [key, value]);

  return [value, setValue];
}

// 4. Window size hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Using custom hooks
function App() {
  const { count, increment, decrement, reset } = useCounter(10);
  const { data, loading, error } = useFetch('/api/users');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Custom Hooks Demo</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <p>Window: {width} x {height}</p>
        <p>Theme: {theme}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}`}
              explanation="Custom hooks let you extract and reuse stateful logic between components, making your code more modular and reusable."
            />
          </div>
          <div className="output-panel">
            <h4>Custom Hook Benefits:</h4>
            <div className="output-content">
              <p><strong>Reusability:</strong> <span className="code-output">Share logic</span></p>
              <p><strong>Cleaner Components:</strong> <span className="code-output">Less complexity</span></p>
              <p><strong>Testing:</strong> <span className="code-output">Easier to test</span></p>
              <p><strong>Composition:</strong> <span className="code-output">Combine hooks</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Data Handling Section
function DataHandlingSection() {
  // Interactive state for examples
  const [dataHandlingTasks, setDataHandlingTasks] = useState([
    { id: 1, title: "Design homepage", completed: false, category: "design" },
    { id: 2, title: "Create wireframes", completed: true, category: "design" },
    { id: 3, title: "Build prototype", completed: false, category: "development" },
    { id: 4, title: "Write tests", completed: false, category: "testing" },
    { id: 5, title: "Deploy app", completed: false, category: "deployment" }
  ])
  const [dataHandlingFilter, setDataHandlingFilter] = useState('all')
  const [dataHandlingNewTask, setDataHandlingNewTask] = useState('')
  const [dataHandlingUser, setDataHandlingUser] = useState({ name: 'Sarah', isAdmin: false, loading: false, error: null })
  const [dataHandlingFormData, setDataHandlingFormData] = useState({ name: '', email: '' })
  const [dataHandlingFormLoading, setDataHandlingFormLoading] = useState(false)
  const [dataHandlingButtonDisabled, setDataHandlingButtonDisabled] = useState(false)
  const [dataHandlingButtonLoading, setDataHandlingButtonLoading] = useState(false)
  const [dataHandlingButtonClicks, setDataHandlingButtonClicks] = useState(0)

  return (
    <div className="section">
      <h1>Data Handling</h1>
      <p>Working with dynamic data and lists</p>

      <div className="concept-card">
        <h2>Mapping Arrays</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> map() is like duplicating components in Figma - you create multiple instances from a list.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`array.map(item => (
  <Component key={item.id}>
    {item.property}
  </Component>
));

// Examples:
items.map(item => <li key={item.id}>{item.name}</li>);
users.map(user => <UserCard key={user.id} user={user} />);`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>map() Function Input:</strong>
              <ul>
                <li><code>array</code> (array) - Source array to transform</li>
                <li><code>item</code> (any) - Current array element</li>
                <li><code>index</code> (number) - Current element index</li>
                <li><code>callback</code> (function) - Transformation function</li>
                <li><code>thisArg</code> (any) - Context for callback</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>map() Returns:</strong>
              <ul>
                <li><code>array</code> - New array with transformed elements</li>
                <li><code>JSX[]</code> - Array of React components</li>
                <li><code>any[]</code> - Array of transformed values</li>
                <li><code>[]</code> - Empty array if source is empty</li>
                <li><code>array</code> - Same length as original array</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Mapping over arrays (like duplicating components in Figma)
const tasks = [
  { id: 1, title: "Design homepage", completed: false },
  { id: 2, title: "Create wireframes", completed: true },
  { id: 3, title: "Build prototype", completed: false }
];

function TaskList() {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}`}
              explanation="map() transforms each item in an array into a React element, creating a list of components from your data."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Array Mapping:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Task List (Mapped from Array):</label>
                  <ul className="todo-list">
                    {dataHandlingTasks.map(task => (
                      <li 
                        key={task.id}
                        onClick={() => setDataHandlingTasks(prev => prev.map(t => 
                          t.id === task.id ? {...t, completed: !t.completed} : t
                        ))}
                        style={{
                          textDecoration: task.completed ? 'line-through' : 'none',
                          cursor: 'pointer',
                          opacity: task.completed ? 0.6 : 1
                        }}
                      >
                        {task.title} {task.completed && '✓'}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="demo-item">
                  <label>Add New Task:</label>
                  <div className="input-group">
                    <input 
                      value={dataHandlingNewTask} 
                      onChange={(e) => setDataHandlingNewTask(e.target.value)}
                      placeholder="Enter task title"
                    />
                    <button onClick={() => {
                      if (dataHandlingNewTask.trim()) {
                        setDataHandlingTasks(prev => [...prev, {
                          id: Date.now(),
                          title: dataHandlingNewTask,
                          completed: false,
                          category: 'general'
                        }])
                        setDataHandlingNewTask('')
                      }
                    }}>Add Task</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Filtering Data</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> filter() is like using the layers panel to show/hide elements based on criteria.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`array.filter(item => condition);

// Examples:
items.filter(item => item.completed);
users.filter(user => user.isActive);
tasks.filter(task => task.category === 'design');

// Combined with map:
array.filter(item => condition).map(item => <Component />);`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>filter() Function Input:</strong>
              <ul>
                <li><code>array</code> (array) - Source array to filter</li>
                <li><code>item</code> (any) - Current array element</li>
                <li><code>condition</code> (boolean) - Filter condition</li>
                <li><code>callback</code> (function) - Filter function</li>
                <li><code>thisArg</code> (any) - Context for callback</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>filter() Returns:</strong>
              <ul>
                <li><code>array</code> - New array with filtered elements</li>
                <li><code>any[]</code> - Array of matching elements</li>
                <li><code>[]</code> - Empty array if no matches</li>
                <li><code>array</code> - Same or smaller length than original</li>
                <li><code>array</code> - Preserves original element order</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Filtering data (like showing/hiding layers in Figma)
const allTasks = [
  { id: 1, title: "Design", category: "design" },
  { id: 2, title: "Code", category: "development" },
  { id: 3, title: "Test", category: "testing" }
];

function TaskFilter({ category }) {
  // Filter tasks by category
  const filteredTasks = allTasks.filter(task => 
    task.category === category
  );
  
  return (
    <div>
      <h3>{category} Tasks:</h3>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
              explanation="filter() creates a new array with only the elements that pass a test, perfect for creating filtered views of your data."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Data Filtering:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Filter by Category:</label>
                  <select 
                    value={dataHandlingFilter} 
                    onChange={(e) => setDataHandlingFilter(e.target.value)}
                  >
                    <option value="all">All Tasks</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="testing">Testing</option>
                    <option value="deployment">Deployment</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div className="demo-item">
                  <label>Filtered Tasks:</label>
                  <ul className="todo-list">
                    {dataHandlingTasks
                      .filter(task => dataHandlingFilter === 'all' || task.category === dataHandlingFilter)
                      .map(task => (
                        <li key={task.id} style={{opacity: task.completed ? 0.6 : 1}}>
                          {task.title} ({task.category}) {task.completed && '✓'}
                        </li>
                      ))
                    }
                  </ul>
                  <div className="result">
                    Showing {dataHandlingTasks.filter(task => dataHandlingFilter === 'all' || task.category === dataHandlingFilter).length} of {dataHandlingTasks.length} tasks
                  </div>
                </div>
                <div className="demo-item">
                  <label>Filter by Status:</label>
                  <div className="button-group">
                    <button onClick={() => setDataHandlingFilter('completed')}>Show Completed</button>
                    <button onClick={() => setDataHandlingFilter('pending')}>Show Pending</button>
                    <button onClick={() => setDataHandlingFilter('all')}>Show All</button>
                  </div>
                  <div className="result">
                    {dataHandlingFilter === 'completed' && 
                      dataHandlingTasks.filter(t => t.completed).length + ' completed tasks'
                    }
                    {dataHandlingFilter === 'pending' && 
                      dataHandlingTasks.filter(t => !t.completed).length + ' pending tasks'
                    }
                    {dataHandlingFilter === 'all' && 
                      dataHandlingTasks.length + ' total tasks'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Conditional Rendering</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Conditional rendering is like using visibility settings in Figma - showing/hiding elements based on conditions.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`{condition && <Component />}
{condition ? <ComponentA /> : <ComponentB />}

// Examples:
{isLoading && <Spinner />}
{user ? <UserProfile /> : <LoginForm />}
{items.length > 0 ? <ItemList /> : <EmptyState />}`}
            language="javascript"
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Conditional rendering (like visibility settings in Figma)
function UserDashboard({ user, isAdmin }) {
  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      
      {/* Show different content based on user role */}
      {isAdmin ? (
        <AdminPanel />
      ) : (
        <UserPanel />
      )}
      
      {/* Show loading state */}
      {user.loading && <Spinner />}
      
      {/* Show error if exists */}
      {user.error && (
        <div className="error">
          Error: {user.error}
        </div>
      )}
    </div>
  );
}`}
              explanation="Conditional rendering allows you to show different UI based on conditions, just like how you control visibility in Figma."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Conditional Rendering:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Role Toggle:</label>
                  <div className="button-group">
                    <button 
                      onClick={() => setDataHandlingUser(prev => ({...prev, isAdmin: !prev.isAdmin}))}
                      style={{backgroundColor: dataHandlingUser.isAdmin ? '#10b981' : '#6b7280'}}
                    >
                      {dataHandlingUser.isAdmin ? 'Admin Mode' : 'User Mode'}
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Dashboard Preview:</label>
                  <div className="jsx-preview">
                    <div className="card">
                      <h2>Welcome, {dataHandlingUser.name}!</h2>
                      
                      {dataHandlingUser.isAdmin ? (
                        <div style={{background: '#fef3c7', padding: '12px', borderRadius: '4px', border: '1px solid #f59e0b'}}>
                          <strong>Admin Panel:</strong> You have full access to all features
                        </div>
                      ) : (
                        <div style={{background: '#dbeafe', padding: '12px', borderRadius: '4px', border: '1px solid #3b82f6'}}>
                          <strong>User Panel:</strong> Limited access to basic features
                        </div>
                      )}
                      
                      {dataHandlingUser.loading && (
                        <div style={{background: '#f3f4f6', padding: '12px', borderRadius: '4px', textAlign: 'center'}}>
                          ⏳ Loading...
                        </div>
                      )}
                      
                      {dataHandlingUser.error && (
                        <div style={{background: '#fee2e2', padding: '12px', borderRadius: '4px', border: '1px solid #ef4444', color: '#dc2626'}}>
                          Error: {dataHandlingUser.error}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Simulate States:</label>
                  <div className="button-group">
                    <button onClick={() => setDataHandlingUser(prev => ({...prev, loading: !prev.loading}))}>
                      {dataHandlingUser.loading ? 'Stop Loading' : 'Start Loading'}
                    </button>
                    <button onClick={() => setDataHandlingUser(prev => ({...prev, error: prev.error ? null : 'Something went wrong!'}))}>
                      {dataHandlingUser.error ? 'Clear Error' : 'Show Error'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Key-Value Pairs & Object Manipulation</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Key-value pairs are like component properties in Figma - each property has a name (key) and a value that can be changed.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`const object = {
  key: value,
  property: data
};

object.key;              // Access
object["key"];           // Bracket notation
object.newKey = value;   // Add property
const { key } = object;  // Destructuring`}
            language="javascript"
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Key-value pairs in objects (like Figma component properties)
const user = {
  name: "Sarah",           // key: "name", value: "Sarah"
  age: 28,                 // key: "age", value: 28
  isAdmin: false,          // key: "isAdmin", value: false
  preferences: {           // nested object
    theme: "dark",
    language: "en"
  }
};

// Accessing values
console.log(user.name);           // "Sarah"
console.log(user["age"]);         // 28 (bracket notation)
console.log(user.preferences.theme); // "dark"

// Updating values
user.age = 29;                    // Direct assignment
user["isAdmin"] = true;           // Bracket notation
user.preferences.theme = "light"; // Nested update

// Adding new key-value pairs
user.email = "sarah@example.com";
user["lastLogin"] = new Date();

// Destructuring (extracting values)
const { name, age, isAdmin } = user;
const { preferences: { theme } } = user; // Nested destructuring

// Object spread (creating copies)
const updatedUser = { ...user, age: 30 };
const userWithNewProps = { ...user, department: "Design" };`}
              explanation="Objects are collections of key-value pairs, where each key is a string and each value can be any data type. This is fundamental for managing state and data in React."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Object Manipulation:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Object:</label>
                  <div className="result">
                    <pre style={{fontSize: '12px', textAlign: 'left'}}>
                      {JSON.stringify(dataHandlingUser, null, 2)}
                    </pre>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Update User Properties:</label>
                  <div className="input-group">
                    <input 
                      placeholder="New name"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim()) {
                          setDataHandlingUser(prev => ({...prev, name: e.target.value}))
                          e.target.value = ''
                        }
                      }}
                    />
                    <button onClick={() => setDataHandlingUser(prev => ({...prev, isAdmin: !prev.isAdmin}))}>
                      Toggle Admin
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Add New Properties:</label>
                  <div className="input-group">
                    <input 
                      placeholder="Property name"
                      id="propName"
                    />
                    <input 
                      placeholder="Property value"
                      id="propValue"
                    />
                    <button onClick={() => {
                      const name = document.getElementById('propName').value
                      const value = document.getElementById('propValue').value
                      if (name && value) {
                        setDataHandlingUser(prev => ({...prev, [name]: value}))
                        document.getElementById('propName').value = ''
                        document.getElementById('propValue').value = ''
                      }
                    }}>Add Property</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Button State Control</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Button states are like component variants in Figma - different visual states (normal, hover, disabled) for the same component.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`<button 
  disabled={isDisabled}
  onClick={handleClick}
  style={{ opacity: isDisabled ? 0.6 : 1 }}
>
  {isLoading ? 'Loading...' : 'Click me'}
</button>

// State variables:
const [isDisabled, setIsDisabled] = useState(false);
const [isLoading, setIsLoading] = useState(false);`}
            language="javascript"
          />
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Button state control (like Figma component variants)
function SmartButton({ 
  children, 
  onClick, 
  disabled = false, 
  loading = false,
  variant = 'primary' 
}) {
  // Determine button state
  const isDisabled = disabled || loading;
  
  // Dynamic styling based on state
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.6 : 1,
    backgroundColor: variant === 'primary' ? '#3b82f6' : '#6b7280',
    color: 'white'
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      disabled={isDisabled}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

// Usage examples
function FormWithButtons() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email;

  return (
    <div>
      <input 
        value={formData.name}
        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        placeholder="Name"
      />
      <input 
        value={formData.email}
        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        placeholder="Email"
      />
      
      <SmartButton 
        onClick={handleSubmit}
        disabled={!isFormValid}
        loading={isSubmitting}
      >
        Submit Form
      </SmartButton>
    </div>
  );
}`}
              explanation="Button state control involves managing different states (enabled, disabled, loading) and providing visual feedback to users based on the current state."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Button States:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Form Validation Demo:</label>
                  <div className="input-group">
                    <input 
                      placeholder="Name"
                      value={dataHandlingFormData.name}
                      onChange={(e) => setDataHandlingFormData(prev => ({...prev, name: e.target.value}))}
                    />
                    <input 
                      placeholder="Email"
                      value={dataHandlingFormData.email}
                      onChange={(e) => setDataHandlingFormData(prev => ({...prev, email: e.target.value}))}
                    />
                  </div>
                  <div className="button-group">
                    <button 
                      onClick={() => {
                        setDataHandlingFormLoading(true)
                        setTimeout(() => setDataHandlingFormLoading(false), 2000)
                      }}
                      disabled={!dataHandlingFormData.name || !dataHandlingFormData.email || dataHandlingFormLoading}
                      style={{
                        backgroundColor: (!dataHandlingFormData.name || !dataHandlingFormData.email) ? '#6b7280' : '#3b82f6',
                        opacity: (!dataHandlingFormData.name || !dataHandlingFormData.email || dataHandlingFormLoading) ? 0.6 : 1,
                        cursor: (!dataHandlingFormData.name || !dataHandlingFormData.email || dataHandlingFormLoading) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {dataHandlingFormLoading ? 'Submitting...' : 'Submit Form'}
                    </button>
                  </div>
                  <div className="result">
                    Form valid: {dataHandlingFormData.name && dataHandlingFormData.email ? '✅' : '❌'}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Button State Toggle:</label>
                  <div className="button-group">
                    <button 
                      onClick={() => setDataHandlingButtonDisabled(!dataHandlingButtonDisabled)}
                      style={{backgroundColor: dataHandlingButtonDisabled ? '#ef4444' : '#10b981'}}
                    >
                      {dataHandlingButtonDisabled ? 'Enable Button' : 'Disable Button'}
                    </button>
                    <button 
                      onClick={() => setDataHandlingButtonLoading(!dataHandlingButtonLoading)}
                      style={{backgroundColor: dataHandlingButtonLoading ? '#f59e0b' : '#8b5cf6'}}
                    >
                      {dataHandlingButtonLoading ? 'Stop Loading' : 'Start Loading'}
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Controlled Button:</label>
                  <div className="button-group">
                    <button 
                      onClick={() => setDataHandlingButtonClicks(prev => prev + 1)}
                      disabled={dataHandlingButtonDisabled || dataHandlingButtonLoading}
                      style={{
                        backgroundColor: dataHandlingButtonDisabled ? '#6b7280' : '#3b82f6',
                        opacity: (dataHandlingButtonDisabled || dataHandlingButtonLoading) ? 0.6 : 1,
                        cursor: (dataHandlingButtonDisabled || dataHandlingButtonLoading) ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {dataHandlingButtonLoading ? 'Loading...' : 'Click me! (' + dataHandlingButtonClicks + ')'}
                    </button>
                  </div>
                  <div className="result">
                    Button state: {dataHandlingButtonDisabled ? 'Disabled' : dataHandlingButtonLoading ? 'Loading' : 'Enabled'}
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

// Events & Interactions Section
function EventsInteractionsSection() {
  // Interactive state for examples
  const [eventsCounter, setEventsCounter] = useState(0)
  const [eventsMousePosition, setEventsMousePosition] = useState({ x: 0, y: 0 })
  const [eventsFormData, setEventsFormData] = useState({ name: '', email: '', message: '' })
  const [eventsLastEvent, setEventsLastEvent] = useState('No events yet')

  return (
    <div className="section">
      <h1>Events & Interactions</h1>
      <p>Making your UI interactive like Figma prototypes</p>

      <div className="concept-card">
        <h2>Event Handlers</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Event handlers are like interactions in Figma - they respond to user actions.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Event handler function
const handleEvent = (event) => {
  // Handle the event
};

// In JSX
<button onClick={handleEvent}>Click me</button>
<input onChange={handleEvent} />
<form onSubmit={handleEvent}>

// Inline handler
<button onClick={() => console.log('clicked')}>
  Click me
</button>

// Common events:
// onClick, onChange, onSubmit, onKeyDown, onMouseEnter, onMouseLeave`}
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Event Handler Input:</strong>
              <ul>
                <li><code>event</code> (Event) - DOM event object</li>
                <li><code>event.target</code> (Element) - Triggered element</li>
                <li><code>event.target.value</code> (string) - Input value</li>
                <li><code>event.clientX/Y</code> (number) - Mouse coordinates</li>
                <li><code>event.key</code> (string) - Key pressed</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Event Handler Output:</strong>
              <ul>
                <li><code>void</code> - Most event handlers</li>
                <li><code>boolean</code> - Return false to prevent default</li>
                <li><code>undefined</code> - Implicit return</li>
                <li><code>string</code> - Input value processing</li>
                <li><code>number</code> - Calculated values</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Event handlers (like Figma interactions)
function InteractiveButton() {
  const handleClick = () => {
    console.log("Button clicked!");
    alert("Hello from React!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered button");
  };

  return (
    <button 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => console.log("Mouse left button")}
    >
      Click me!
    </button>
  );
}

// Common events: onClick, onChange, onSubmit, onKeyDown, etc.`}
              explanation="Event handlers are functions that run when users interact with your UI, just like interactions in Figma prototypes."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Event Examples:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Click Events:</label>
                  <div className="button-group">
                    <button 
                      onClick={() => {
                        setEventsCounter(prev => prev + 1)
                        setEventsLastEvent('Button clicked!')
                      }}
                    >
                      Click Counter: {eventsCounter}
                    </button>
                    <button 
                      onMouseEnter={() => setEventsLastEvent('Mouse entered button')}
                      onMouseLeave={() => setEventsLastEvent('Mouse left button')}
                    >
                      Hover Me
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Mouse Position Tracker:</label>
                  <div 
                    style={{
                      width: '200px',
                      height: '100px',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                    onMouseMove={(e) => {
                      const rect = e.target.getBoundingClientRect()
                      setEventsMousePosition({
                        x: Math.round(e.clientX - rect.left),
                        y: Math.round(e.clientY - rect.top)
                      })
                    }}
                  >
                    Move mouse here
                    <div style={{
                      position: 'absolute',
                      top: '4px',
                      left: '4px',
                      fontSize: '12px',
                      color: '#94a3b8'
                    }}>
                      X: {eventsMousePosition.x}, Y: {eventsMousePosition.y}
                    </div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Last Event:</label>
                  <div className="result">{eventsLastEvent}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Form Handling</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Form handling is like creating input fields in Figma - you collect and process user input.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Form state
const [formData, setFormData] = useState({
  name: '',
  email: ''
});

// Handle input changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Process form data
};

// In JSX
<form onSubmit={handleSubmit}>
  <input
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</form>`}
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Form Handler Input:</strong>
              <ul>
                <li><code>e.target.name</code> (string) - Input field name</li>
                <li><code>e.target.value</code> (any) - Input field value</li>
                <li><code>formData</code> (object) - Current form state</li>
                <li><code>e.preventDefault()</code> - Prevent form submission</li>
                <li><code>validation</code> (function) - Input validation</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Form Handler Output:</strong>
              <ul>
                <li><code>object</code> - Updated form data</li>
                <li><code>boolean</code> - Validation result</li>
                <li><code>void</code> - Form submission handler</li>
                <li><code>string</code> - Error messages</li>
                <li><code>Promise</code> - Async form submission</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Form handling (like input fields in Figma)
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Send data to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <button type="submit">Send Message</button>
    </form>
  );
}`}
              explanation="Form handling allows you to collect and process user input, similar to how you create input fields in Figma prototypes."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Form Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Contact Form:</label>
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    alert(`Form submitted!\nName: ${eventsFormData.name}\nEmail: ${eventsFormData.email}\nMessage: ${eventsFormData.message}`)
                    setEventsFormData({ name: '', email: '', message: '' })
                  }}>
                    <input
                      type="text"
                      name="name"
                      value={eventsFormData.name}
                      onChange={(e) => setEventsFormData(prev => ({...prev, name: e.target.value}))}
                      placeholder="Your name"
                      style={{marginBottom: '8px'}}
                    />
                    <input
                      type="email"
                      name="email"
                      value={eventsFormData.email}
                      onChange={(e) => setEventsFormData(prev => ({...prev, email: e.target.value}))}
                      placeholder="Your email"
                      style={{marginBottom: '8px'}}
                    />
                    <textarea
                      name="message"
                      value={eventsFormData.message}
                      onChange={(e) => setEventsFormData(prev => ({...prev, message: e.target.value}))}
                      placeholder="Your message"
                      style={{marginBottom: '8px', minHeight: '60px'}}
                    />
                    <button type="submit" style={{width: '100%'}}>Send Message</button>
                  </form>
                </div>
                <div className="demo-item">
                  <label>Form Data Preview:</label>
                  <div className="result">
                    <div>Name: {eventsFormData.name || 'Not entered'}</div>
                    <div>Email: {eventsFormData.email || 'Not entered'}</div>
                    <div>Message: {eventsFormData.message || 'Not entered'}</div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Form Validation:</label>
                  <div className="result">
                    {!eventsFormData.name && <div style={{color: '#ef4444'}}>❌ Name is required</div>}
                    {!eventsFormData.email && <div style={{color: '#ef4444'}}>❌ Email is required</div>}
                    {!eventsFormData.message && <div style={{color: '#ef4444'}}>❌ Message is required</div>}
                    {eventsFormData.name && eventsFormData.email && eventsFormData.message && 
                      <div style={{color: '#10b981'}}>✅ Form is complete</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>State Updates</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> State updates are like changing properties in Figma - they trigger visual updates.
        </div>
        <CodeExample
          code={`// State updates (like changing properties in Figma)
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue(''); // Clear input
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
          explanation="State updates trigger re-renders, just like how changing properties in Figma updates the visual appearance."
        />
      </div>
    </div>
  )
}

// Styling & Design Section
function StylingDesignSection() {
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

// Navigation & Routing Section
function NavigationRoutingSection() {
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

// HTML & CSS Section
function HTMLCSSSection() {
  const [activeTab, setActiveTab] = useState('html')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState(new Set())
  const [allExpanded, setAllExpanded] = useState(false)

  const htmlElements = [
    {
      category: 'Document Structure',
      elements: [
        { tag: '<!DOCTYPE html>', description: 'Document type declaration', example: '<!DOCTYPE html>' },
        { tag: '<html>', description: 'Root element', example: '<html lang="en">' },
        { tag: '<head>', description: 'Document metadata', example: '<head><title>Page Title</title></head>' },
        { tag: '<title>', description: 'Page title', example: '<title>My Website</title>' },
        { tag: '<body>', description: 'Document body', example: '<body>Content here</body>' },
        { tag: '<meta>', description: 'Metadata', example: '<meta charset="UTF-8">' },
        { tag: '<link>', description: 'External resource link', example: '<link rel="stylesheet" href="style.css">' },
        { tag: '<script>', description: 'JavaScript code', example: '<script src="script.js"></script>' }
      ]
    },
    {
      category: 'Text Elements',
      elements: [
        { tag: '<h1> to <h6>', description: 'Headings', example: '<h1>Main Heading</h1>' },
        { tag: '<p>', description: 'Paragraph', example: '<p>This is a paragraph.</p>' },
        { tag: '<span>', description: 'Inline text', example: '<span>Inline text</span>' },
        { tag: '<div>', description: 'Block container', example: '<div>Block content</div>' },
        { tag: '<br>', description: 'Line break', example: 'Text<br>New line' },
        { tag: '<hr>', description: 'Horizontal rule', example: '<hr>' },
        { tag: '<strong>', description: 'Bold text', example: '<strong>Bold text</strong>' },
        { tag: '<em>', description: 'Italic text', example: '<em>Italic text</em>' },
        { tag: '<mark>', description: 'Highlighted text', example: '<mark>Highlighted</mark>' },
        { tag: '<small>', description: 'Small text', example: '<small>Small text</small>' },
        { tag: '<sub>', description: 'Subscript', example: 'H<sub>2</sub>O' },
        { tag: '<sup>', description: 'Superscript', example: 'x<sup>2</sup>' }
      ]
    },
    {
      category: 'Lists',
      elements: [
        { tag: '<ul>', description: 'Unordered list', example: '<ul><li>Item 1</li></ul>' },
        { tag: '<ol>', description: 'Ordered list', example: '<ol><li>Item 1</li></ol>' },
        { tag: '<li>', description: 'List item', example: '<li>List item</li>' },
        { tag: '<dl>', description: 'Description list', example: '<dl><dt>Term</dt><dd>Definition</dd></dl>' },
        { tag: '<dt>', description: 'Description term', example: '<dt>Term</dt>' },
        { tag: '<dd>', description: 'Description details', example: '<dd>Definition</dd>' }
      ]
    },
    {
      category: 'Links & Media',
      elements: [
        { tag: '<a>', description: 'Hyperlink', example: '<a href="https://example.com">Link</a>' },
        { tag: '<img>', description: 'Image', example: '<img src="image.jpg" alt="Description">' },
        { tag: '<video>', description: 'Video', example: '<video src="video.mp4" controls></video>' },
        { tag: '<audio>', description: 'Audio', example: '<audio src="audio.mp3" controls></audio>' },
        { tag: '<iframe>', description: 'Inline frame', example: '<iframe src="https://example.com"></iframe>' }
      ]
    },
    {
      category: 'Forms',
      elements: [
        { tag: '<form>', description: 'Form container', example: '<form action="/submit" method="post">' },
        { tag: '<input>', description: 'Input field', example: '<input type="text" name="username">' },
        { tag: '<label>', description: 'Form label', example: '<label for="username">Username:</label>' },
        { tag: '<textarea>', description: 'Multi-line input', example: '<textarea name="message"></textarea>' },
        { tag: '<select>', description: 'Dropdown', example: '<select><option>Option 1</option></select>' },
        { tag: '<option>', description: 'Dropdown option', example: '<option value="1">Option 1</option>' },
        { tag: '<button>', description: 'Button', example: '<button type="submit">Submit</button>' },
        { tag: '<fieldset>', description: 'Form group', example: '<fieldset><legend>Group</legend></fieldset>' },
        { tag: '<legend>', description: 'Fieldset title', example: '<legend>Form Group</legend>' }
      ]
    },
    {
      category: 'Tables',
      elements: [
        { tag: '<table>', description: 'Table container', example: '<table></table>' },
        { tag: '<thead>', description: 'Table header', example: '<thead><tr><th>Header</th></tr></thead>' },
        { tag: '<tbody>', description: 'Table body', example: '<tbody><tr><td>Data</td></tr></tbody>' },
        { tag: '<tfoot>', description: 'Table footer', example: '<tfoot><tr><td>Footer</td></tr></tfoot>' },
        { tag: '<tr>', description: 'Table row', example: '<tr><td>Cell</td></tr>' },
        { tag: '<th>', description: 'Header cell', example: '<th>Header Cell</th>' },
        { tag: '<td>', description: 'Data cell', example: '<td>Data Cell</td>' },
        { tag: '<caption>', description: 'Table caption', example: '<caption>Table Title</caption>' }
      ]
    },
    {
      category: 'Semantic Elements',
      elements: [
        { tag: '<header>', description: 'Page header', example: '<header>Header content</header>' },
        { tag: '<nav>', description: 'Navigation', example: '<nav>Navigation links</nav>' },
        { tag: '<main>', description: 'Main content', example: '<main>Main content</main>' },
        { tag: '<section>', description: 'Content section', example: '<section>Section content</section>' },
        { tag: '<article>', description: 'Article content', example: '<article>Article content</article>' },
        { tag: '<aside>', description: 'Sidebar content', example: '<aside>Sidebar content</aside>' },
        { tag: '<footer>', description: 'Page footer', example: '<footer>Footer content</footer>' },
        { tag: '<figure>', description: 'Figure container', example: '<figure><img src="image.jpg"><figcaption>Caption</figcaption></figure>' },
        { tag: '<figcaption>', description: 'Figure caption', example: '<figcaption>Image description</figcaption>' }
      ]
    }
  ]

  const cssProperties = [
    {
      category: 'Layout & Display',
      properties: [
        { property: 'display', values: 'block, inline, inline-block, flex, grid, none, table, table-cell, table-row, contents, flow-root, list-item, run-in, ruby, ruby-base, ruby-text, ruby-base-container, ruby-text-container', description: 'Element display type' },
        { property: 'position', values: 'static, relative, absolute, fixed, sticky', description: 'Positioning method (affects how element is positioned relative to parent)' },
        { property: 'top', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'Y-axis top position offset (distance from top of positioned parent)' },
        { property: 'right', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'X-axis right position offset (distance from right of positioned parent)' },
        { property: 'bottom', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'Y-axis bottom position offset (distance from bottom of positioned parent)' },
        { property: 'left', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'X-axis left position offset (distance from left of positioned parent)' },
        { property: 'float', values: 'left, right, none, inline-start, inline-end', description: 'Element floating' },
        { property: 'clear', values: 'left, right, both, none, inline-start, inline-end', description: 'Clear floating elements' },
        { property: 'z-index', values: 'auto, 0, 1, 999, -1, inherit, initial, unset', description: 'Stacking order' },
        { property: 'overflow', values: 'visible, hidden, scroll, auto, clip, overlay', description: 'Content overflow handling' },
        { property: 'overflow-x', values: 'visible, hidden, scroll, auto, clip', description: 'Horizontal overflow' },
        { property: 'overflow-y', values: 'visible, hidden, scroll, auto, clip', description: 'Vertical overflow' },
        { property: 'visibility', values: 'visible, hidden, collapse', description: 'Element visibility' },
        { property: 'clip', values: 'auto, rect(0, 0, 0, 0), inherit, initial, unset', description: 'Element clipping (deprecated)' },
        { property: 'clip-path', values: 'none, url(), inset(), circle(), ellipse(), polygon(), path()', description: 'Element clipping path' },
        { property: 'contain', values: 'none, strict, content, size, layout, style, paint', description: 'Containment' }
      ]
    },
    {
      category: 'Box Model',
      properties: [
        { property: 'width', values: 'auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset', description: 'Element width' },
        { property: 'height', values: 'auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset', description: 'Element height' },
        { property: 'min-width', values: 'auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset', description: 'Minimum width' },
        { property: 'max-width', values: 'none, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset', description: 'Maximum width' },
        { property: 'min-height', values: 'auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset', description: 'Minimum height' },
        { property: 'max-height', values: 'none, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset', description: 'Maximum height' },
        { property: 'margin', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'Margin shorthand (space outside element - affects spacing with siblings)' },
        { property: 'margin-top', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'Y-axis top margin (space above element)' },
        { property: 'margin-right', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'X-axis right margin (space to the right of element)' },
        { property: 'margin-bottom', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'Y-axis bottom margin (space below element)' },
        { property: 'margin-left', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'X-axis left margin (space to the left of element)' },
        { property: 'padding', values: '0, 10px, 1em, inherit, initial, unset', description: 'Padding shorthand (space inside element - affects content spacing)' },
        { property: 'padding-top', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis top padding (space inside top of element)' },
        { property: 'padding-right', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis right padding (space inside right of element)' },
        { property: 'padding-bottom', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis bottom padding (space inside bottom of element)' },
        { property: 'padding-left', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis left padding (space inside left of element)' },
        { property: 'border', values: '1px solid black, none, inherit, initial, unset', description: 'Border shorthand' },
        { property: 'border-width', values: 'thin, medium, thick, 1px, inherit, initial, unset', description: 'Border width' },
        { property: 'border-style', values: 'none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset', description: 'Border style' },
        { property: 'border-color', values: 'black, #000, rgb(0,0,0), currentColor, transparent, inherit, initial, unset', description: 'Border color' },
        { property: 'border-top', values: '1px solid black, inherit, initial, unset', description: 'Top border shorthand' },
        { property: 'border-right', values: '1px solid black, inherit, initial, unset', description: 'Right border shorthand' },
        { property: 'border-bottom', values: '1px solid black, inherit, initial, unset', description: 'Bottom border shorthand' },
        { property: 'border-left', values: '1px solid black, inherit, initial, unset', description: 'Left border shorthand' },
        { property: 'border-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Border radius' },
        { property: 'border-top-left-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Top-left border radius' },
        { property: 'border-top-right-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Top-right border radius' },
        { property: 'border-bottom-right-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Bottom-right border radius' },
        { property: 'border-bottom-left-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Bottom-left border radius' },
        { property: 'box-sizing', values: 'content-box, border-box, inherit, initial, unset', description: 'Box model calculation' },
        { property: 'box-shadow', values: 'none, 2px 2px 5px rgba(0,0,0,0.3), inset 2px 2px 5px rgba(0,0,0,0.3), inherit, initial, unset', description: 'Box shadow' },
        { property: 'outline', values: 'none, 1px solid black, inherit, initial, unset', description: 'Outline shorthand' },
        { property: 'outline-width', values: 'thin, medium, thick, 1px, inherit, initial, unset', description: 'Outline width' },
        { property: 'outline-style', values: 'none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset', description: 'Outline style' },
        { property: 'outline-color', values: 'black, #000, rgb(0,0,0), invert, inherit, initial, unset', description: 'Outline color' },
        { property: 'outline-offset', values: '0, 5px, inherit, initial, unset', description: 'Outline offset' }
      ]
    },
    {
      category: 'Flexbox',
      properties: [
        { property: 'display: flex', values: 'flex, inline-flex', description: 'Flex container (parent element)' },
        { property: 'flex-direction', values: 'row, row-reverse, column, column-reverse, inherit, initial, unset', description: 'Flex direction (parent - determines x-axis vs y-axis)' },
        { property: 'flex-wrap', values: 'nowrap, wrap, wrap-reverse, inherit, initial, unset', description: 'Flex wrapping (parent - allows items to wrap to new lines)' },
        { property: 'flex-flow', values: 'row nowrap, column wrap, inherit, initial, unset', description: 'Flex direction and wrap shorthand (parent)' },
        { property: 'justify-content', values: 'flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right, inherit, initial, unset', description: 'X-axis alignment (parent - aligns items horizontally)' },
        { property: 'align-items', values: 'stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end, self-start, self-end, inherit, initial, unset', description: 'Y-axis alignment (parent - aligns items vertically)' },
        { property: 'align-content', values: 'flex-start, flex-end, center, space-between, space-around, space-evenly, stretch, start, end, baseline, first baseline, last baseline, inherit, initial, unset', description: 'Multi-line Y-axis alignment (parent - when items wrap)' },
        { property: 'align-self', values: 'auto, flex-start, flex-end, center, baseline, stretch, inherit, initial, unset', description: 'Individual item Y-axis alignment (child - overrides parent align-items)' },
        { property: 'flex-grow', values: '0, 1, 2, inherit, initial, unset', description: 'Growth factor (child - how much item can grow)' },
        { property: 'flex-shrink', values: '0, 1, 2, inherit, initial, unset', description: 'Shrink factor (child - how much item can shrink)' },
        { property: 'flex-basis', values: 'auto, 0, 100px, 50%, content, inherit, initial, unset', description: 'Initial size (child - starting size before growing/shrinking)' },
        { property: 'flex', values: '0 1 auto, 1, 1 0 100px, none, inherit, initial, unset', description: 'Flex shorthand (child - combines grow, shrink, basis)' },
        { property: 'order', values: '0, 1, -1, inherit, initial, unset', description: 'Flex item order (child - changes display order)' }
      ]
    },
    {
      category: 'Grid',
      properties: [
        { property: 'display: grid', values: 'grid, inline-grid, subgrid', description: 'Grid container (parent element)' },
        { property: 'grid-template-columns', values: 'none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset', description: 'X-axis column definitions (parent - defines column widths)' },
        { property: 'grid-template-rows', values: 'none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset', description: 'Y-axis row definitions (parent - defines row heights)' },
        { property: 'grid-template-areas', values: 'none, "header header" "sidebar main", inherit, initial, unset', description: 'Grid area definitions (parent - creates named areas)' },
        { property: 'grid-template', values: 'none, "header header" 100px / 1fr 1fr, inherit, initial, unset', description: 'Grid template shorthand (parent)' },
        { property: 'grid-column-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis column gaps (parent - deprecated, use column-gap)' },
        { property: 'grid-row-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis row gaps (parent - deprecated, use row-gap)' },
        { property: 'grid-gap', values: '0, 10px, 10px 20px, inherit, initial, unset', description: 'Grid gaps shorthand (parent - deprecated, use gap)' },
        { property: 'gap', values: '0, 10px, 10px 20px, inherit, initial, unset', description: 'Grid and flexbox gaps (parent - combines row-gap and column-gap)' },
        { property: 'row-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis row gaps (parent)' },
        { property: 'column-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis column gaps (parent)' },
        { property: 'grid-column', values: 'auto, 1, 1 / 3, span 2, inherit, initial, unset', description: 'X-axis column placement (child - which columns item occupies)' },
        { property: 'grid-row', values: 'auto, 1, 1 / 3, span 2, inherit, initial, unset', description: 'Y-axis row placement (child - which rows item occupies)' },
        { property: 'grid-column-start', values: 'auto, 1, span 2, inherit, initial, unset', description: 'X-axis column start position (child)' },
        { property: 'grid-column-end', values: 'auto, 1, span 2, inherit, initial, unset', description: 'X-axis column end position (child)' },
        { property: 'grid-row-start', values: 'auto, 1, span 2, inherit, initial, unset', description: 'Y-axis row start position (child)' },
        { property: 'grid-row-end', values: 'auto, 1, span 2, inherit, initial, unset', description: 'Y-axis row end position (child)' },
        { property: 'grid-area', values: 'auto, 1, header, inherit, initial, unset', description: 'Grid area shorthand (child - combines row and column placement)' },
        { property: 'justify-items', values: 'start, end, center, stretch, inherit, initial, unset', description: 'X-axis item alignment (parent - aligns all items horizontally)' },
        { property: 'align-items', values: 'start, end, center, stretch, inherit, initial, unset', description: 'Y-axis item alignment (parent - aligns all items vertically)' },
        { property: 'justify-self', values: 'auto, start, end, center, stretch, inherit, initial, unset', description: 'Individual X-axis alignment (child - overrides parent justify-items)' },
        { property: 'align-self', values: 'auto, start, end, center, stretch, inherit, initial, unset', description: 'Individual Y-axis alignment (child - overrides parent align-items)' },
        { property: 'justify-content', values: 'start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset', description: 'X-axis content alignment (parent - when grid is smaller than container)' },
        { property: 'align-content', values: 'start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset', description: 'Y-axis content alignment (parent - when grid is smaller than container)' },
        { property: 'grid-auto-columns', values: 'auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset', description: 'Auto-generated X-axis column size (parent)' },
        { property: 'grid-auto-rows', values: 'auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset', description: 'Auto-generated Y-axis row size (parent)' },
        { property: 'grid-auto-flow', values: 'row, column, row dense, column dense, inherit, initial, unset', description: 'Auto-placement algorithm (parent - how items flow when not explicitly placed)' }
      ]
    },
    {
      category: 'Typography',
      properties: [
        { property: 'font-family', values: 'Arial, "Times New Roman", sans-serif, etc.', description: 'Font family' },
        { property: 'font-size', values: '16px, 1em, 1.2rem, 120%, etc.', description: 'Font size' },
        { property: 'font-weight', values: 'normal, bold, 100-900, etc.', description: 'Font weight' },
        { property: 'font-style', values: 'normal, italic, oblique', description: 'Font style' },
        { property: 'line-height', values: 'normal, 1.5, 24px, etc.', description: 'Line height' },
        { property: 'text-align', values: 'left, center, right, justify', description: 'Text alignment' },
        { property: 'text-decoration', values: 'none, underline, overline, line-through', description: 'Text decoration' },
        { property: 'text-transform', values: 'none, uppercase, lowercase, capitalize', description: 'Text transformation' },
        { property: 'letter-spacing', values: 'normal, 1px, 0.1em, etc.', description: 'Letter spacing' },
        { property: 'word-spacing', values: 'normal, 2px, 0.2em, etc.', description: 'Word spacing' },
        { property: 'white-space', values: 'normal, nowrap, pre, pre-wrap', description: 'White space handling' },
        { property: 'text-overflow', values: 'clip, ellipsis', description: 'Text overflow' }
      ]
    },
    {
      category: 'Colors & Backgrounds',
      properties: [
        { property: 'color', values: 'black, #000, rgb(0,0,0), rgba(0,0,0,0.5), etc.', description: 'Text color' },
        { property: 'background-color', values: 'white, #fff, rgb(255,255,255), etc.', description: 'Background color' },
        { property: 'background-image', values: 'url("image.jpg"), linear-gradient(), etc.', description: 'Background image' },
        { property: 'background-repeat', values: 'repeat, no-repeat, repeat-x, repeat-y', description: 'Background repeat' },
        { property: 'background-position', values: 'center, top left, 50% 50%, etc.', description: 'Background position' },
        { property: 'background-size', values: 'auto, cover, contain, 100px 200px', description: 'Background size' },
        { property: 'background-attachment', values: 'scroll, fixed, local', description: 'Background attachment' },
        { property: 'background', values: 'shorthand for all background properties', description: 'Background shorthand' },
        { property: 'opacity', values: '0, 0.5, 1, etc.', description: 'Element opacity' }
      ]
    },
    {
      category: 'Transforms & Animations',
      properties: [
        { property: 'transform', values: 'translate(), rotate(), scale(), skew(), etc.', description: 'Element transformation' },
        { property: 'transform-origin', values: 'center, top left, 50% 50%, etc.', description: 'Transform origin' },
        { property: 'transition', values: 'all 0.3s ease, width 0.5s linear, etc.', description: 'Transition shorthand' },
        { property: 'transition-property', values: 'all, width, height, color, etc.', description: 'Transition properties' },
        { property: 'transition-duration', values: '0s, 0.3s, 1s, etc.', description: 'Transition duration' },
        { property: 'transition-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out', description: 'Transition timing' },
        { property: 'animation', values: 'slideIn 1s ease-in-out, etc.', description: 'Animation shorthand' },
        { property: 'animation-name', values: 'slideIn, fadeOut, bounce, etc.', description: 'Animation name' },
        { property: 'animation-duration', values: '0s, 1s, 2.5s, etc.', description: 'Animation duration' },
        { property: 'animation-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out', description: 'Animation timing' },
        { property: 'animation-delay', values: '0s, 1s, -1s, etc.', description: 'Animation delay' },
        { property: 'animation-iteration-count', values: '1, infinite, 3, etc.', description: 'Animation iterations' },
        { property: 'animation-direction', values: 'normal, reverse, alternate, alternate-reverse', description: 'Animation direction' },
        { property: 'animation-fill-mode', values: 'none, forwards, backwards, both', description: 'Animation fill mode' }
      ]
    },
    {
      category: 'Responsive Design',
      properties: [
        { property: '@media', values: '@media (max-width: 768px) { }', description: 'Media queries' },
        { property: 'min-width', values: '320px, 768px, 1024px, etc.', description: 'Minimum width' },
        { property: 'max-width', values: '767px, 1023px, 1200px, etc.', description: 'Maximum width' },
        { property: 'orientation', values: 'portrait, landscape', description: 'Device orientation' },
        { property: 'aspect-ratio', values: '16/9, 4/3, 1/1, etc.', description: 'Aspect ratio' },
        { property: 'viewport', values: 'width=device-width, initial-scale=1.0', description: 'Viewport meta tag' }
      ]
    },
    {
      category: 'Pseudo-classes & Pseudo-elements',
      properties: [
        { property: ':hover', values: 'element:hover { }', description: 'Mouse hover state' },
        { property: ':active', values: 'element:active { }', description: 'Active state' },
        { property: ':focus', values: 'element:focus { }', description: 'Focus state' },
        { property: ':focus-within', values: 'element:focus-within { }', description: 'Focus within element' },
        { property: ':focus-visible', values: 'element:focus-visible { }', description: 'Focus visible state' },
        { property: ':visited', values: 'a:visited { }', description: 'Visited link state' },
        { property: ':link', values: 'a:link { }', description: 'Unvisited link state' },
        { property: ':target', values: 'element:target { }', description: 'Target element' },
        { property: ':first-child', values: 'element:first-child { }', description: 'First child element' },
        { property: ':last-child', values: 'element:last-child { }', description: 'Last child element' },
        { property: ':only-child', values: 'element:only-child { }', description: 'Only child element' },
        { property: ':first-of-type', values: 'element:first-of-type { }', description: 'First of type element' },
        { property: ':last-of-type', values: 'element:last-of-type { }', description: 'Last of type element' },
        { property: ':only-of-type', values: 'element:only-of-type { }', description: 'Only of type element' },
        { property: ':nth-child()', values: 'element:nth-child(2n) { }', description: 'Nth child element' },
        { property: ':nth-last-child()', values: 'element:nth-last-child(2n) { }', description: 'Nth last child element' },
        { property: ':nth-of-type()', values: 'element:nth-of-type(2n) { }', description: 'Nth of type element' },
        { property: ':nth-last-of-type()', values: 'element:nth-last-of-type(2n) { }', description: 'Nth last of type element' },
        { property: ':empty', values: 'element:empty { }', description: 'Empty element' },
        { property: ':root', values: ':root { }', description: 'Root element' },
        { property: ':not()', values: 'element:not(.class) { }', description: 'Not selector' },
        { property: ':is()', values: ':is(h1, h2, h3) { }', description: 'Is selector' },
        { property: ':where()', values: ':where(h1, h2, h3) { }', description: 'Where selector' },
        { property: ':has()', values: 'element:has(child) { }', description: 'Has selector' },
        { property: '::before', values: 'element::before { content: ""; }', description: 'Before pseudo-element' },
        { property: '::after', values: 'element::after { content: ""; }', description: 'After pseudo-element' },
        { property: '::first-line', values: 'p::first-line { }', description: 'First line of text' },
        { property: '::first-letter', values: 'p::first-letter { }', description: 'First letter of text' },
        { property: '::selection', values: '::selection { }', description: 'Selected text' },
        { property: '::placeholder', values: 'input::placeholder { }', description: 'Input placeholder' },
        { property: '::marker', values: 'li::marker { }', description: 'List marker' },
        { property: '::backdrop', values: '::backdrop { }', description: 'Backdrop element' }
      ]
    },
    {
      category: 'Backgrounds & Borders',
      properties: [
        { property: 'background', values: 'red, url(image.jpg), linear-gradient(), inherit, initial, unset', description: 'Background shorthand' },
        { property: 'background-color', values: 'transparent, red, #ff0000, rgb(255,0,0), rgba(255,0,0,0.5), inherit, initial, unset', description: 'Background color' },
        { property: 'background-image', values: 'none, url(image.jpg), linear-gradient(), radial-gradient(), conic-gradient(), inherit, initial, unset', description: 'Background image' },
        { property: 'background-repeat', values: 'repeat, no-repeat, repeat-x, repeat-y, space, round, inherit, initial, unset', description: 'Background repeat' },
        { property: 'background-attachment', values: 'scroll, fixed, local, inherit, initial, unset', description: 'Background attachment' },
        { property: 'background-position', values: 'center, top left, 50% 50%, inherit, initial, unset', description: 'Background position' },
        { property: 'background-size', values: 'auto, cover, contain, 100px 200px, 50% 100%, inherit, initial, unset', description: 'Background size' },
        { property: 'background-clip', values: 'border-box, padding-box, content-box, text, inherit, initial, unset', description: 'Background clip' },
        { property: 'background-origin', values: 'border-box, padding-box, content-box, inherit, initial, unset', description: 'Background origin' },
        { property: 'border-image', values: 'none, url(image.jpg) 30 stretch, inherit, initial, unset', description: 'Border image' },
        { property: 'border-image-source', values: 'none, url(image.jpg), inherit, initial, unset', description: 'Border image source' },
        { property: 'border-image-slice', values: '100%, 30, 30 30 30, inherit, initial, unset', description: 'Border image slice' },
        { property: 'border-image-width', values: '1, 30px, 30%, inherit, initial, unset', description: 'Border image width' },
        { property: 'border-image-outset', values: '0, 30px, inherit, initial, unset', description: 'Border image outset' },
        { property: 'border-image-repeat', values: 'stretch, repeat, round, space, inherit, initial, unset', description: 'Border image repeat' }
      ]
    },
    {
      category: 'Text & Fonts',
      properties: [
        { property: 'font', values: 'italic bold 12px/1.5 Arial, inherit, initial, unset', description: 'Font shorthand' },
        { property: 'font-family', values: 'Arial, "Times New Roman", serif, sans-serif, monospace, inherit, initial, unset', description: 'Font family' },
        { property: 'font-size', values: '16px, 1em, 1.2rem, 120%, inherit, initial, unset', description: 'Font size' },
        { property: 'font-weight', values: 'normal, bold, 100-900, inherit, initial, unset', description: 'Font weight' },
        { property: 'font-style', values: 'normal, italic, oblique, inherit, initial, unset', description: 'Font style' },
        { property: 'font-variant', values: 'normal, small-caps, inherit, initial, unset', description: 'Font variant' },
        { property: 'font-stretch', values: 'normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded, inherit, initial, unset', description: 'Font stretch' },
        { property: 'font-size-adjust', values: 'none, 0.5, inherit, initial, unset', description: 'Font size adjust' },
        { property: 'font-synthesis', values: 'none, weight, style, weight style, inherit, initial, unset', description: 'Font synthesis' },
        { property: 'text-align', values: 'left, right, center, justify, start, end, inherit, initial, unset', description: 'X-axis text alignment (horizontal alignment of text content)' },
        { property: 'text-align-last', values: 'auto, left, right, center, justify, start, end, inherit, initial, unset', description: 'X-axis last line alignment (horizontal alignment of last line in justified text)' },
        { property: 'text-decoration', values: 'none, underline, overline, line-through, inherit, initial, unset', description: 'Text decoration shorthand' },
        { property: 'text-decoration-line', values: 'none, underline, overline, line-through, blink, inherit, initial, unset', description: 'Text decoration line' },
        { property: 'text-decoration-style', values: 'solid, double, dotted, dashed, wavy, inherit, initial, unset', description: 'Text decoration style' },
        { property: 'text-decoration-color', values: 'currentColor, red, #ff0000, inherit, initial, unset', description: 'Text decoration color' },
        { property: 'text-decoration-thickness', values: 'auto, 1px, 0.1em, inherit, initial, unset', description: 'Text decoration thickness' },
        { property: 'text-underline-offset', values: 'auto, 1px, inherit, initial, unset', description: 'Text underline offset' },
        { property: 'text-underline-position', values: 'auto, under, left, right, inherit, initial, unset', description: 'Text underline position' },
        { property: 'text-transform', values: 'none, uppercase, lowercase, capitalize, full-width, full-size-kana, inherit, initial, unset', description: 'Text transformation' },
        { property: 'text-indent', values: '0, 20px, 2em, inherit, initial, unset', description: 'Text indent' },
        { property: 'text-overflow', values: 'clip, ellipsis, inherit, initial, unset', description: 'Text overflow' },
        { property: 'white-space', values: 'normal, nowrap, pre, pre-wrap, pre-line, break-spaces, inherit, initial, unset', description: 'White space handling' },
        { property: 'word-spacing', values: 'normal, 2px, 0.2em, inherit, initial, unset', description: 'Word spacing' },
        { property: 'letter-spacing', values: 'normal, 1px, 0.1em, inherit, initial, unset', description: 'Letter spacing' },
        { property: 'line-height', values: 'normal, 1.5, 24px, inherit, initial, unset', description: 'Line height' },
        { property: 'vertical-align', values: 'baseline, sub, super, top, text-top, middle, bottom, text-bottom, inherit, initial, unset', description: 'Vertical alignment' },
        { property: 'word-break', values: 'normal, break-all, keep-all, break-word, inherit, initial, unset', description: 'Word break' },
        { property: 'word-wrap', values: 'normal, break-word, inherit, initial, unset', description: 'Word wrap (deprecated)' },
        { property: 'overflow-wrap', values: 'normal, break-word, anywhere, inherit, initial, unset', description: 'Overflow wrap' },
        { property: 'hyphens', values: 'none, manual, auto, inherit, initial, unset', description: 'Hyphenation' },
        { property: 'tab-size', values: '4, 8, inherit, initial, unset', description: 'Tab size' },
        { property: 'text-orientation', values: 'mixed, upright, sideways, inherit, initial, unset', description: 'Text orientation' },
        { property: 'writing-mode', values: 'horizontal-tb, vertical-rl, vertical-lr, sideways-rl, sideways-lr, inherit, initial, unset', description: 'Writing mode' },
        { property: 'direction', values: 'ltr, rtl, inherit, initial, unset', description: 'Text direction' },
        { property: 'unicode-bidi', values: 'normal, embed, isolate, bidi-override, isolate-override, plaintext, inherit, initial, unset', description: 'Unicode bidirectional' }
      ]
    },
    {
      category: 'Transforms & 3D',
      properties: [
        { property: 'transform', values: 'none, translate(10px), rotate(45deg), scale(2), skew(10deg), inherit, initial, unset', description: 'Element transformation (moves, rotates, scales, or skews element)' },
        { property: 'transform-origin', values: 'center, top left, 50% 50%, inherit, initial, unset', description: 'Transform origin (point around which transformations happen)' },
        { property: 'transform-style', values: 'flat, preserve-3d, inherit, initial, unset', description: 'Transform style' },
        { property: 'perspective', values: 'none, 1000px, inherit, initial, unset', description: 'Perspective' },
        { property: 'perspective-origin', values: 'center, top left, 50% 50%, inherit, initial, unset', description: 'Perspective origin' },
        { property: 'backface-visibility', values: 'visible, hidden, inherit, initial, unset', description: 'Backface visibility' },
        { property: 'translate', values: 'none, 10px, 10px 20px, inherit, initial, unset', description: 'Translate shorthand (moves element on X and Y axes)' },
        { property: 'rotate', values: 'none, 45deg, inherit, initial, unset', description: 'Rotate shorthand (rotates element around its center)' },
        { property: 'scale', values: 'none, 2, 2 3, inherit, initial, unset', description: 'Scale shorthand (scales element on X and Y axes)' },
        { property: 'skew', values: 'none, 10deg, 10deg 20deg, inherit, initial, unset', description: 'Skew shorthand (skews element on X and Y axes)' }
      ]
    },
    {
      category: 'Transitions & Animations',
      properties: [
        { property: 'transition', values: 'all 0.3s ease, width 0.5s linear, inherit, initial, unset', description: 'Transition shorthand' },
        { property: 'transition-property', values: 'all, width, height, color, inherit, initial, unset', description: 'Transition properties' },
        { property: 'transition-duration', values: '0s, 0.3s, 1s, inherit, initial, unset', description: 'Transition duration' },
        { property: 'transition-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset', description: 'Transition timing' },
        { property: 'transition-delay', values: '0s, 1s, inherit, initial, unset', description: 'Transition delay' },
        { property: 'animation', values: 'slideIn 1s ease-in-out, inherit, initial, unset', description: 'Animation shorthand' },
        { property: 'animation-name', values: 'none, slideIn, fadeOut, inherit, initial, unset', description: 'Animation name' },
        { property: 'animation-duration', values: '0s, 1s, 2.5s, inherit, initial, unset', description: 'Animation duration' },
        { property: 'animation-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset', description: 'Animation timing' },
        { property: 'animation-delay', values: '0s, 1s, -1s, inherit, initial, unset', description: 'Animation delay' },
        { property: 'animation-iteration-count', values: '1, infinite, 3, inherit, initial, unset', description: 'Animation iterations' },
        { property: 'animation-direction', values: 'normal, reverse, alternate, alternate-reverse, inherit, initial, unset', description: 'Animation direction' },
        { property: 'animation-fill-mode', values: 'none, forwards, backwards, both, inherit, initial, unset', description: 'Animation fill mode' },
        { property: 'animation-play-state', values: 'running, paused, inherit, initial, unset', description: 'Animation play state' },
        { property: '@keyframes', values: '@keyframes slideIn { from { } to { } }', description: 'Keyframe animation definition' }
      ]
    },
    {
      category: 'Tables',
      properties: [
        { property: 'table-layout', values: 'auto, fixed, inherit, initial, unset', description: 'Table layout algorithm (parent - how table calculates column widths)' },
        { property: 'border-collapse', values: 'separate, collapse, inherit, initial, unset', description: 'Border collapse (parent - how borders between cells are handled)' },
        { property: 'border-spacing', values: '0, 10px, 10px 20px, inherit, initial, unset', description: 'Border spacing (parent - space between table cells)' },
        { property: 'caption-side', values: 'top, bottom, inherit, initial, unset', description: 'Caption side (parent - where table caption appears)' },
        { property: 'empty-cells', values: 'show, hide, inherit, initial, unset', description: 'Empty cells (parent - how empty table cells are displayed)' }
      ]
    },
    {
      category: 'Lists',
      properties: [
        { property: 'list-style', values: 'disc outside none, inherit, initial, unset', description: 'List style shorthand (parent - affects all list items)' },
        { property: 'list-style-type', values: 'disc, circle, square, decimal, lower-alpha, upper-alpha, inherit, initial, unset', description: 'List style type (parent - bullet/number style for list items)' },
        { property: 'list-style-position', values: 'outside, inside, inherit, initial, unset', description: 'List style position (parent - where bullets/numbers appear relative to list items)' },
        { property: 'list-style-image', values: 'none, url(image.jpg), inherit, initial, unset', description: 'List style image (parent - custom image for bullets)' }
      ]
    },
    {
      category: 'Counters',
      properties: [
        { property: 'counter-reset', values: 'none, counter 0, inherit, initial, unset', description: 'Counter reset' },
        { property: 'counter-increment', values: 'none, counter 1, inherit, initial, unset', description: 'Counter increment' },
        { property: 'content', values: 'normal, "text", url(), counter(), attr(), inherit, initial, unset', description: 'Content' }
      ]
    },
    {
      category: 'Generated Content',
      properties: [
        { property: 'quotes', values: 'auto, "«" "»" "‹" "›", inherit, initial, unset', description: 'Quotes' },
        { property: 'resize', values: 'none, both, horizontal, vertical, inherit, initial, unset', description: 'Resize' },
        { property: 'cursor', values: 'auto, pointer, default, text, move, inherit, initial, unset', description: 'Cursor' },
        { property: 'caret-color', values: 'auto, red, #ff0000, inherit, initial, unset', description: 'Caret color' },
        { property: 'user-select', values: 'auto, none, text, all, contain, inherit, initial, unset', description: 'User select' },
        { property: 'appearance', values: 'auto, none, inherit, initial, unset', description: 'Appearance' },
        { property: 'accent-color', values: 'auto, red, #ff0000, inherit, initial, unset', description: 'Accent color' }
      ]
    }
  ]

  // Accordion functions
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }

  const expandAll = () => {
    const allSectionIds = [
      ...htmlElements.map(cat => `html-${cat.category}`),
      ...cssProperties.map(cat => `css-${cat.category}`)
    ]
    setExpandedSections(new Set(allSectionIds))
    setAllExpanded(true)
  }

  const collapseAll = () => {
    setExpandedSections(new Set())
    setAllExpanded(false)
  }

  // Auto-expand sections that contain search results
  React.useEffect(() => {
    if (searchTerm.trim()) {
      const sectionsToExpand = new Set()
      
      htmlElements.forEach(category => {
        const hasMatch = category.elements.some(element =>
          element.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
          element.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        if (hasMatch) {
          sectionsToExpand.add(`html-${category.category}`)
        }
      })
      
      cssProperties.forEach(category => {
        const hasMatch = category.properties.some(prop =>
          prop.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prop.values.toLowerCase().includes(searchTerm.toLowerCase())
        )
        if (hasMatch) {
          sectionsToExpand.add(`css-${category.category}`)
        }
      })
      
      setExpandedSections(sectionsToExpand)
    } else {
      // Collapse all when search is cleared
      setExpandedSections(new Set())
    }
  }, [searchTerm])

  const filteredHTMLElements = htmlElements.map(category => ({
    ...category,
    elements: category.elements.filter(element =>
      element.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.elements.length > 0)

  const filteredCSSProperties = cssProperties.map(category => ({
    ...category,
    properties: category.properties.filter(prop =>
      prop.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.properties.length > 0)

  return (
    <div className="section">
      <h1>HTML & CSS Cheatsheet</h1>
      <p>Complete reference for HTML elements and CSS properties</p>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search HTML elements or CSS properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab ${activeTab === 'html' ? 'active' : ''}`}
          onClick={() => setActiveTab('html')}
        >
          <Globe className="tab-icon" />
          HTML Elements
        </button>
        <button
          className={`tab ${activeTab === 'css' ? 'active' : ''}`}
          onClick={() => setActiveTab('css')}
        >
          <Type className="tab-icon" />
          CSS Properties
        </button>
      </div>

      {/* HTML Elements Tab */}
      {activeTab === 'html' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>HTML Elements Reference</h2>
            <p>Complete list of HTML elements organized by category. Click on any element to see its usage.</p>
            <div className="accordion-controls">
              <button onClick={expandAll} className="accordion-btn">
                Expand All
              </button>
              <button onClick={collapseAll} className="accordion-btn">
                Collapse All
              </button>
            </div>
          </div>

          {filteredHTMLElements.map((category, index) => {
            const sectionId = `html-${category.category}`
            const isExpanded = expandedSections.has(sectionId)
            
            return (
              <div key={index} className="cheatsheet-category accordion-section">
                <div 
                  className="accordion-header"
                  onClick={() => toggleSection(sectionId)}
                >
                  <h3 className="category-title">{category.category}</h3>
                  <span className="accordion-icon">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
                {isExpanded && (
                  <div className="accordion-content">
                    <div className="elements-grid">
                      {category.elements.map((element, elementIndex) => (
                        <div key={elementIndex} className="element-card">
                          <div className="element-header">
                            <code className="element-tag">{element.tag}</code>
                            <span className="element-description">{element.description}</span>
                          </div>
                          <div className="element-example">
                            <strong>Example:</strong>
                            <code className="example-code">{element.example}</code>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* CSS Properties Tab */}
      {activeTab === 'css' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>CSS Properties Reference</h2>
            <p>Complete list of CSS properties organized by category. Common values and usage examples included.</p>
            <div className="accordion-controls">
              <button onClick={expandAll} className="accordion-btn">
                Expand All
              </button>
              <button onClick={collapseAll} className="accordion-btn">
                Collapse All
              </button>
            </div>
          </div>

          {/* Box Model Visual */}
          <div className="box-model-visual">
            <h3>CSS Box Model</h3>
            <div className="box-model-container">
              <div className="box-model-margin">
                <div className="box-model-border">
                  <div className="box-model-padding">
                    <div className="box-model-content">
                      <span>Content</span>
                      <div className="box-model-label content-label">Content Area</div>
                    </div>
                    <div className="box-model-label padding-label">Padding</div>
                  </div>
                  <div className="box-model-label border-label">Border</div>
                </div>
                <div className="box-model-label margin-label">Margin</div>
              </div>
            </div>
            <div className="box-model-explanation">
              <div className="explanation-item">
                <div className="explanation-color margin-color"></div>
                <div>
                  <strong>Margin:</strong> Outer spacing between elements
                </div>
              </div>
              <div className="explanation-item">
                <div className="explanation-color border-color"></div>
                <div>
                  <strong>Border:</strong> Visible border around the element
                </div>
              </div>
              <div className="explanation-item">
                <div className="explanation-color padding-color"></div>
                <div>
                  <strong>Padding:</strong> Inner spacing between content and border
                </div>
              </div>
              <div className="explanation-item">
                <div className="explanation-color content-color"></div>
                <div>
                  <strong>Content:</strong> The actual content area (text, images, etc.)
                </div>
              </div>
            </div>
          </div>

          {filteredCSSProperties.map((category, index) => {
            const sectionId = `css-${category.category}`
            const isExpanded = expandedSections.has(sectionId)
            
            return (
              <div key={index} className="cheatsheet-category accordion-section">
                <div 
                  className="accordion-header"
                  onClick={() => toggleSection(sectionId)}
                >
                  <h3 className="category-title">{category.category}</h3>
                  <span className="accordion-icon">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
                {isExpanded && (
                  <div className="accordion-content">
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
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Quick Reference */}
      <div className="quick-reference">
        <h2>Quick Reference</h2>
        <div className="reference-grid">
          <div className="reference-card">
            <h3>HTML Structure</h3>
            <ReferenceCode
              code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`}
              language="html"
            />
          </div>
          <div className="reference-card">
            <h3>CSS Box Model</h3>
            <ReferenceCode
              code={`/* Box Model Properties */
.element {
  width: 200px;        /* Content width */
  height: 100px;       /* Content height */
  padding: 20px;       /* Inner spacing */
  border: 2px solid;   /* Border */
  margin: 10px;        /* Outer spacing */
  box-sizing: border-box; /* Include border in width */
}`}
              language="css"
            />
          </div>
          <div className="reference-card">
            <h3>Flexbox Layout</h3>
            <ReferenceCode
              code={`/* Flexbox Container */
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* Flexbox Items */
.item {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}`}
              language="css"
            />
          </div>
          <div className="reference-card">
            <h3>CSS Grid Layout</h3>
            <ReferenceCode
              code={`/* Grid Container */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  grid-template-areas: 
    "header header"
    "sidebar main";
}

/* Grid Items */
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`}
              language="css"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// CSS Frameworks Section
function CSSFrameworksSection() {
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
            <p>Modern CSS variables and dynamic styling capabilities.</p>
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
            <p>SCSS, Sass, Less, and other CSS preprocessor features.</p>
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
            <p>Popular CSS frameworks, utility libraries, and CSS-in-JS solutions.</p>
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
            <p>Latest CSS features and experimental capabilities.</p>
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

// Figma Mapping Section
function FigmaMappingSection() {
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

// Syntax Highlighted Code Component
function SyntaxHighlightedCode({ code, language = 'javascript', explanation }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  // Force JSX language detection for React code
  const detectedLanguage = code.includes('<') && code.includes('>') 
    ? 'javascript' 
    : language

  return (
    <div className="code-example">
      <pre>
        <code ref={codeRef} className={`language-${detectedLanguage}`} style={{ color: '#d4d4d4' }}>
          {code}
        </code>
      </pre>
      {explanation && (
        <div className="explanation">
          <strong>💡 Explanation:</strong> {explanation}
        </div>
      )}
    </div>
  )
}

// Code Example Component (for backward compatibility)
function CodeExample({ code, explanation, language = 'javascript' }) {
  // Force JSX language detection for React code
  const detectedLanguage = code.includes('<') && code.includes('>') 
    ? 'javascript' 
    : language
  
  return <SyntaxHighlightedCode code={code} language={detectedLanguage} explanation={explanation} />
}

// Syntax Example Component for syntax-code sections
function SyntaxExample({ code, language = 'javascript' }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  // Force JSX language detection for React code
  const detectedLanguage = code.includes('<') && code.includes('>') 
    ? 'javascript' 
    : language

  return (
    <pre className="syntax-code">
      <code ref={codeRef} className={`language-${detectedLanguage}`} style={{ color: '#d4d4d4' }}>
        {code}
      </code>
    </pre>
  )
}

// Reference Code Component for quick reference sections
function ReferenceCode({ code, language = 'javascript' }) {
  const codeRef = useRef(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [code])

  return (
    <pre className="reference-code">
      <code ref={codeRef} className={`language-${language}`} style={{ color: '#d4d4d4' }}>
        {code}
      </code>
    </pre>
  )
}

export default App 