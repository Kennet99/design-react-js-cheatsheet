import React, { useState } from 'react'
import CodeExample from './CodeExample'

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

  return (
    <div className="section">
      <h1>JavaScript Fundamentals</h1>
      <p>Core JavaScript concepts with interactive examples</p>

      <div className="concept-card">
        <h2>Variables</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Variables are like text styles in Figma - they store values that you can reuse throughout your design.
        </div>
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>let Declaration</h4>
              <p><code>let userName = "Sarah";</code></p>
              <p>Creates a variable that can be changed later. Like a text style in Figma that you can update throughout your design.</p>
            </div>
            <div className="explanation-item">
              <h4>const Declaration</h4>
              <p><code>const userAge = 28;</code></p>
              <p>Creates a variable that cannot be changed. Like a locked property in Figma that stays the same.</p>
            </div>
            <div className="explanation-item">
              <h4>var Declaration</h4>
              <p><code>var oldWay = "avoid this";</code></p>
              <p>Old way of declaring variables. Has issues with scope and hoisting. Use <code>let</code> or <code>const</code> instead.</p>
            </div>
            <div className="explanation-item">
              <h4>Reassignment</h4>
              <p><code>userName = "Sarah Johnson"; // ✅ Works with let</code><br/>
                 <code>userAge = 29; // ❌ Error with const</code></p>
              <p>You can change <code>let</code> variables but not <code>const</code> variables. This helps prevent accidental changes.</p>
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

// Using variables
console.log(userName);           // "Sarah"
console.log(userAge);            // 28

// Reassigning let variables
userName = "Sarah Johnson";      // ✅ This works
// userAge = 29;                 // ❌ This would cause an error`}
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
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Object Creation</h4>
              <p><code>const user = {'{'} name: "Sarah", age: 28 {'}'};</code></p>
              <p>Objects group related data using key-value pairs. Like having multiple properties for a component in Figma.</p>
            </div>
            <div className="explanation-item">
              <h4>Property Access</h4>
              <p><code>user.name // "Sarah"</code><br/>
                 <code>user["age"] // 28</code></p>
              <p>Two ways to access object properties: dot notation and bracket notation. Bracket notation is useful when the property name is dynamic.</p>
            </div>
            <div className="explanation-item">
              <h4>Adding Properties</h4>
              <p><code>user.skills = ["Figma", "React"];</code></p>
              <p>You can add new properties to objects at any time. Like adding new properties to a component in Figma.</p>
            </div>
            <div className="explanation-item">
              <h4>Destructuring</h4>
              <p><code>const {`{name, age}`} = user;</code></p>
              <p>Extract specific properties from an object into separate variables. Makes your code cleaner and more readable.</p>
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

// Accessing object properties
console.log(user.name);          // "Sarah"
console.log(user["age"]);        // 28

// Adding new properties
user.skills = ["Figma", "React"];

// Object destructuring
const { name, age } = user;
console.log(name);               // "Sarah"`}
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
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Function Declaration</h4>
              <p><code>function greetUser(name) {'{'} return "Hello, " + name + "!"; {'}'}</code></p>
              <p>Traditional way to create functions. The function is "hoisted" (available before it's declared in the code).</p>
            </div>
            <div className="explanation-item">
              <h4>Function Expression</h4>
              <p><code>const calculateArea = function(width, height) {'{'} return width * height; {'}'};</code></p>
              <p>Function assigned to a variable. Must be declared before it can be used. More flexible than function declarations.</p>
            </div>
            <div className="explanation-item">
              <h4>Arrow Function</h4>
              <p><code>const double = (num) =&gt; num * 2;</code></p>
              <p>Modern, concise syntax for functions. The <code>=&gt;</code> arrow replaces the <code>function</code> keyword. Automatically returns the result.</p>
            </div>
            <div className="explanation-item">
              <h4>Function Calls</h4>
              <p><code>greetUser("Sarah"); // "Hello, Sarah!"</code><br/>
                 <code>calculateArea(5, 3); // 15</code></p>
              <p>Call functions by using their name followed by parentheses. Pass arguments inside the parentheses.</p>
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

// Calling functions
console.log(greetUser("Sarah"));     // "Hello, Sarah!"
console.log(calculateArea(5, 3));    // 15
console.log(double(4));              // 8`}
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
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// String methods
const message = "Hello World";
console.log(message.toUpperCase());    // "HELLO WORLD"
console.log(message.toLowerCase());    // "hello world"
console.log(message.length);           // 11

// Array methods
const colors = ["red", "blue", "green"];
colors.push("yellow");                 // Add to end
colors.pop();                          // Remove from end
colors.unshift("purple");              // Add to beginning

// Object methods
const user = {
  name: "Sarah",
  greet() {
    return "Hello, " + this.name;
  }
};
console.log(user.greet());             // "Hello, Sarah"`}
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
        <h2>Events</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Events are like interactions in Figma prototypes - they respond to user actions.
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

export default JSFundamentalsSection 