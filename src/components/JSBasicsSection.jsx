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
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>useState Hook</h4>
              <p><code>const [counter, setCounter] = useState(0)</code></p>
              <p>This creates a variable called <code>counter</code> that starts at 0, and a function <code>setCounter</code> to update it. Think of it like creating a dynamic text field in Figma that can change.</p>
            </div>
            <div className="explanation-item">
              <h4>Object State</h4>
              <p><code>const [user, setUser] = useState({'{'} name: 'Sarah', role: 'UX Designer' {'}'})</code></p>
              <p>This stores an object with multiple properties. Like having a component in Figma with multiple properties (name, role, etc.) that can all be updated together.</p>
            </div>
            <div className="explanation-item">
              <h4>Array State</h4>
              <p><code>const [colors, setColors] = useState(['red', 'blue', 'green'])</code></p>
              <p>This stores a list of values. Similar to a color palette in Figma where you can add, remove, or reorder colors.</p>
            </div>
            <div className="explanation-item">
              <h4>Boolean State</h4>
              <p><code>const [isVisible, setIsVisible] = useState(true)</code></p>
              <p>This stores true/false values. Like the visibility toggle in Figma - something is either visible (true) or hidden (false).</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// State variables used in the demo above
const [counter, setCounter] = useState(0);
const [userName, setUserName] = useState('Designer');
const [isVisible, setIsVisible] = useState(true);
const [user, setUser] = useState({ name: 'Sarah', role: 'UX Designer' });

// Counter controls
&lt;button onClick={() =&gt; setCounter(counter - 1)}&gt;&lt;Minus size={16} /&gt;&lt;/button&gt;
&lt;button onClick={() =&gt; setCounter(counter + 1)}&gt;&lt;Plus size={16} /&gt;&lt;/button&gt;
&lt;button onClick={() =&gt; setCounter(0)}&gt;&lt;RotateCcw size={16} /&gt;&lt;/button&gt;

// Input field for user name
&lt;input 
  value={userName} 
  onChange={(e) =&gt; setUserName(e.target.value)}
  placeholder="Enter name"
/&gt;

// Visibility toggle
&lt;button onClick={() =&gt; setIsVisible(!isVisible)}&gt;
  {isVisible ? &lt;Eye size={16} /&gt; : &lt;EyeOff size={16} /&gt;}
  {isVisible ? ' Hide' : ' Show'}
&lt;/button&gt;

// Display user object
&lt;div className="object-display"&gt;
  &lt;span&gt;Name: {user.name}&lt;/span&gt;
  &lt;span&gt;Role: {user.role}&lt;/span&gt;
&lt;/div&gt;`}
              explanation="This shows the actual state variables and event handlers used in the interactive demo above."
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
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Traditional Function</h4>
              <p><code>function calculateArea(width, height) {'{'} return width * height; {'}'}</code></p>
              <p>This is the old way of writing functions. It's like creating a full plugin in Figma - more verbose but very clear about what it does.</p>
            </div>
            <div className="explanation-item">
              <h4>Arrow Function (Full)</h4>
              <p><code>const calculateArea = (width, height) =&gt; {'{'} return width * height; {'}'}</code></p>
              <p>This is the modern way. The <code>=&gt;</code> arrow replaces the <code>function</code> keyword. It's shorter and cleaner.</p>
            </div>
            <div className="explanation-item">
              <h4>Arrow Function (Short)</h4>
              <p><code>const calculateArea = (width, height) =&gt; width * height;</code></p>
              <p>When you only have one line that returns a value, you can skip the <code>{'{'}</code> and <code>return</code> keyword. It automatically returns the result.</p>
            </div>
            <div className="explanation-item">
              <h4>Single Parameter</h4>
              <p><code>const double = x =&gt; x * 2;</code></p>
              <p>When you only have one parameter, you can skip the parentheses around it. This makes it even shorter.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Functions used in the demo above

// Area calculation function
const calculateArea = (width, height) =&gt; width * height;

// Double function
const double = x =&gt; x * 2;

// Random number function
const getRandomNumber = () =&gt; Math.random();

// Event handlers using arrow functions
&lt;button onClick={() =&gt; {
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;
  alert(\`Area: \${width * height}\`);
}}&gt;Calculate&lt;/button&gt;

&lt;button onClick={() =&gt; {
  const num = document.getElementById('doubleInput').value;
  alert(\`Double: \${num * 2}\`);
}}&gt;Double&lt;/button&gt;

&lt;button onClick={() =&gt; alert(\`Random: \${Math.random().toFixed(3)}\`)}&gt;
  Generate
&lt;/button&gt;

// Input fields
&lt;input type="number" placeholder="Width" id="width" defaultValue="10" /&gt;
&lt;input type="number" placeholder="Height" id="height" defaultValue="5" /&gt;
&lt;input type="number" placeholder="Number" id="doubleInput" defaultValue="8" /&gt;`}
              explanation="This shows the actual arrow functions and event handlers used in the interactive demo above."
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
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Basic Ternary</h4>
              <p><code>condition ? valueIfTrue : valueIfFalse</code></p>
              <p>This is a shorthand way to write an if/else statement. If the condition is true, use the first value. If false, use the second value.</p>
            </div>
            <div className="explanation-item">
              <h4>Real Example</h4>
              <p><code>const message = userRole === "Designer" ? "Show design tools" : "Show general tools";</code></p>
              <p>If the user is a designer, show "Show design tools". Otherwise, show "Show general tools". Much shorter than writing a full if/else block.</p>
            </div>
            <div className="explanation-item">
              <h4>Multiple Conditions</h4>
              <p><code>const status = user.isActive ? "Online" : user.lastSeen ? "Last seen recently" : "Offline";</code></p>
              <p>You can chain ternaries together. First check if active, if not, check if last seen, if not, show offline. Like nested if statements but in one line.</p>
            </div>
            <div className="explanation-item">
              <h4>In JSX</h4>
              <p><code>{`const buttonText = isLoading ? "Loading..." : "Submit";`}</code></p>
              <p>Very useful in React for showing different text or styles based on conditions. Like changing button text when a form is submitting.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Ternary operators used in the demo above

// Role-based message
const message = userRole === "Designer" ? "Show design tools" : "Show general tools";

// Loading state toggle
const buttonText = isLoading ? "Loading..." : "Submit";
const buttonColor = isLoading ? "#f59e0b" : "#3b82f6";

// Theme toggle
const themeText = currentTheme === "Light" ? "Dark" : "Light";
const themeColor = currentTheme === "Dark" ? "#fbbf24" : "#1f2937";

// Event handlers using ternary operators
&lt;select onChange={(e) =&gt; {
  const role = e.target.value;
  const message = role === "Designer" ? "Show design tools" : "Show general tools";
  document.getElementById('roleMessage').textContent = message;
}}&gt;
  &lt;option value="Designer"&gt;Designer&lt;/option&gt;
  &lt;option value="Developer"&gt;Developer&lt;/option&gt;
&lt;/select&gt;

&lt;button onClick={() =&gt; {
  const btn = document.getElementById('loadingBtn');
  btn.textContent = btn.textContent === 'Submit' ? 'Loading...' : 'Submit';
  btn.style.backgroundColor = btn.textContent === 'Loading...' ? '#f59e0b' : '#3b82f6';
}}&gt;Submit&lt;/button&gt;

&lt;button onClick={() =&gt; {
  const theme = document.getElementById('themeDisplay');
  theme.textContent = theme.textContent === 'Light' ? 'Dark' : 'Light';
  theme.style.color = theme.textContent === 'Dark' ? '#fbbf24' : '#1f2937';
}}&gt;Toggle Theme&lt;/button&gt;`}
              explanation="This shows the actual ternary operators and conditional logic used in the interactive demo above."
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