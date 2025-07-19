import React, { useState } from 'react'
import { Minus, Plus, RotateCcw, Eye, EyeOff } from 'lucide-react'
import CodeExample from './CodeExample'

// JavaScript Basics Section
function JSBasicsSection() {
  // Interactive state for examples
  const [counter, setCounter] = useState(0)
  const [userName, setUserName] = useState('Designer')
  const [isVisible, setIsVisible] = useState(true)
  const [colors, setColors] = useState(['red', 'blue', 'green'])
  const [user, setUser] = useState({ name: 'Sarah', role: 'UX Designer' })

  return (
    <div className="section">
      <h1>JavaScript Basics</h1>
      <p>Core JavaScript concepts explained with Figma analogies</p>

      <div className="concept-card">
        <h2>Variables & State</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Variables are like text styles or color styles in Figma - they store reusable values.
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
                      alert(`Area: ${width * height}`)
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
    </div>
  )
}

export default JSBasicsSection 