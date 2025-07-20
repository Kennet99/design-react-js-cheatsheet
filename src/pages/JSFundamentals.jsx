import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function JSFundamentals() {
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
        <h2>JavaScript Syntax</h2>
        <div className="explanation">JavaScript syntax defines the rules and structure for writing valid JavaScript code, including statements, expressions, and code organization.</div>
        <p className="section-summary">Understanding the fundamental syntax rules of JavaScript. This includes how to write statements, use semicolons, organize code blocks, and follow JavaScript's syntax conventions.</p>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> JavaScript syntax is like Figma's design rules - it defines how elements should be structured and organized to create valid, functional designs.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax Rules:</h4>
          <SyntaxExample
            code={`// 1. On page script - Embed JavaScript directly within HTML
<script>alert('Welcome to the Bookshop!');</script>

// 2. Include external JS file - Link external JavaScript file
<script src="scripts.js"></script>

// 3. Delay - Execute function after specified delay
setTimeout(() => { alert('Book special offers!'); }, 2000);

// 4. Functions - Define reusable blocks of code
function showGreeting() { 
  alert('Welcome to Book Haven!'); 
}

// 5. Edit DOM element - Modify HTML elements
document.getElementById('title').innerHTML = 'Book Haven Sale';

// 6. Output - Display output via console, alert, or document
console.log('Books loaded successfully');

// 7. Comments - Add single-line or multi-line comments
// Single-line comment
/* Multi-line comment */

// 8. Strict mode - Enforce stricter parsing and error handling
'use strict';

// 9. Values - Store data in variables
let bookPrice = 19.99;

// 10. Operators - Perform operations on variables and values
let totalPrice = bookPrice + 5;`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Syntax Elements:</strong>
              <ul>
                <li><code>script tag</code> - HTML script embedding</li>
                <li><code>external file</code> - Linked JavaScript file</li>
                <li><code>function</code> - Reusable code block</li>
                <li><code>DOM element</code> - HTML element reference</li>
                <li><code>variable</code> - Data storage container</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Syntax Results:</strong>
              <ul>
                <li><code>executed code</code> - Running JavaScript</li>
                <li><code>DOM manipulation</code> - HTML element changes</li>
                <li><code>console output</code> - Debug information</li>
                <li><code>alert/notification</code> - User interface feedback</li>
                <li><code>function return</code> - Computed result</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// JavaScript Syntax Examples

// 1. Basic Script Embedding
<script>
  console.log('Page loaded successfully');
  alert('Welcome to our website!');
</script>

// 2. External File Inclusion
<script src="app.js"></script>
<script src="utils.js"></script>

// 3. Function Declaration
function calculateTotal(price, tax) {
  return price + (price * tax);
}

// 4. DOM Manipulation
document.getElementById('header').innerHTML = 'Welcome!';
document.querySelector('.price').textContent = '$19.99';

// 5. Event Handling
document.getElementById('buyBtn').addEventListener('click', function() {
  alert('Item added to cart!');
});

// 6. Conditional Statements
if (bookPrice > 20) {
  console.log('Eligible for free shipping');
} else {
  console.log('Shipping fee applies');
}

// 7. Switch Statement
switch (day) {
  case 1: console.log('Monday Deals'); break;
  case 2: console.log('Tuesday Discounts'); break;
  default: console.log('Regular Prices');
}

// 8. Loops
for (let i = 0; i < 5; i++) {
  console.log(\`Item \${i + 1}\`);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 9. String Operations
let bookTitle = 'JavaScript Guide';
let len = bookTitle.length;
let words = bookTitle.split(' ');
let fullTitle = bookTitle.concat(' for Beginners');

// 10. Object Creation and Access
let book = { 
  title: 'JavaScript Basics', 
  author: 'Jane Doe', 
  price: 19.99 
};
book.title;  // Access property
book.price = 21.99;  // Assign new value

// React JSX Integration
function BookComponent() {
  const [price, setPrice] = useState(19.99);
  
  return (
    <div>
      <h1>{book.title}</h1>
      <p>Price: ${price}</p>
      <button onClick={() => setPrice(price + 1)}>
        Increase Price
      </button>
    </div>
  );
}`}
              explanation="JavaScript syntax provides the foundation for writing clean, readable, and maintainable code with DOM manipulation and event handling capabilities."
            />
          </div>
          <div className="output-panel">
            <h4>Syntax Validation Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>String Operations:</label>
                  <div className="result">
                    <div>Length: {"JavaScript".length}</div>
                    <div>Split: {JSON.stringify("Hello World".split(" "))}</div>
                    <div>Concat: {"Hello" + " " + "World"}</div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Conditional Logic:</label>
                  <div className="result">
                    <div>Price {'>'} 20: {fundamentalUser.age > 20 ? "Yes" : "No"}</div>
                    <div>Age {'>='} 18: {fundamentalUser.age >= 18 ? "Adult" : "Minor"}</div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Loop Simulation:</label>
                  <div className="result">
                    {[1, 2, 3, 4, 5].map(num => (
                      <span key={num} style={{marginRight: '8px'}}>Item {num}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>JavaScript Operators</h2>
        <div className="explanation">Operators are symbols that perform operations on values, including arithmetic, comparison, logical, and assignment operations.</div>
        <p className="section-summary">Understanding how to use different types of operators in JavaScript. Operators allow you to perform calculations, compare values, combine conditions, and assign values to variables.</p>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> JavaScript operators are like Figma's mathematical functions and constraints - they help you calculate positions, sizes, and relationships between design elements.
        </div>
        <div className="syntax-example">
          <h4>Operator Types:</h4>
          <SyntaxExample
            code={`// 1. Arithmetic Operators
let a = 10, b = 5;
let sum = a + b;        // Addition: 15
let difference = a - b;  // Subtraction: 5
let product = a * b;     // Multiplication: 50
let quotient = a / b;    // Division: 2
let remainder = a % b;   // Modulus: 0
let power = a ** b;      // Exponentiation: 100000
let increment = ++a;     // Pre-increment: 11
let decrement = --b;     // Pre-decrement: 4

// 2. Assignment Operators
let x = 10;              // Simple assignment
x += 5;                  // Addition assignment: x = x + 5
x -= 3;                  // Subtraction assignment: x = x - 3
x *= 2;                  // Multiplication assignment: x = x * 2
x /= 4;                  // Division assignment: x = x / 4
x %= 3;                  // Modulus assignment: x = x % 3
x **= 2;                 // Exponentiation assignment: x = x ** 2

// 3. Comparison Operators
let num1 = 10, num2 = "10";
let equal = num1 == num2;        // Equal (loose): true
let strictEqual = num1 === num2; // Strict equal: false
let notEqual = num1 != num2;     // Not equal (loose): false
let strictNotEqual = num1 !== num2; // Strict not equal: true
let greater = num1 > 5;          // Greater than: true
let less = num1 < 20;            // Less than: true
let greaterEqual = num1 >= 10;   // Greater or equal: true
let lessEqual = num1 <= 10;      // Less or equal: true

// 4. Logical Operators
let isTrue = true, isFalse = false;
let and = isTrue && isFalse;     // Logical AND: false
let or = isTrue || isFalse;      // Logical OR: true
let not = !isTrue;               // Logical NOT: false

// 5. Bitwise Operators
let bitwiseAnd = 5 & 3;          // Bitwise AND: 1
let bitwiseOr = 5 | 3;           // Bitwise OR: 7
let bitwiseXor = 5 ^ 3;          // Bitwise XOR: 6
let bitwiseNot = ~5;             // Bitwise NOT: -6
let leftShift = 5 << 1;          // Left shift: 10
let rightShift = 5 >> 1;         // Right shift: 2
let zeroFillRightShift = 5 >>> 1; // Zero-fill right shift: 2

// 6. String Operators
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // Concatenation: "John Doe"
let greeting = \`Hello \${firstName}!\`;     // Template literal

// 7. Conditional (Ternary) Operator
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";  // Conditional: "Adult"

// 8. Nullish Coalescing Operator (??)
let value = null;
let defaultValue = value ?? "Default";  // Nullish coalescing: "Default"
let zeroValue = 0 ?? "Default";         // Returns 0 (not null/undefined)

// 9. Optional Chaining Operator (?.)
let user = { name: "John", address: { city: "NYC" } };
let city = user?.address?.city;  // Optional chaining: "NYC"
let missingCity = user?.address?.country; // undefined (safe access)

// 10. Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];      // Spread array: [1, 2, 3, 4, 5]
let obj1 = { name: "John" };
let obj2 = { ...obj1, age: 25 }; // Spread object: { name: "John", age: 25 }

// 11. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
let total = sum(1, 2, 3, 4, 5);  // Rest parameters: 15

// 12. Destructuring Assignment
let [first, second, ...rest] = [1, 2, 3, 4, 5]; // Array destructuring
let { name, age, ...otherProps } = { name: "John", age: 25, city: "NYC" }; // Object destructuring`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Operator Input:</strong>
              <ul>
                <li><code>operand1</code> (any) - First value</li>
                <li><code>operand2</code> (any) - Second value</li>
                <li><code>operator</code> (symbol) - Operation symbol</li>
                <li><code>expression</code> (any) - Complex expression</li>
                <li><code>condition</code> (boolean) - Logical condition</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Operator Output:</strong>
              <ul>
                <li><code>number</code> - Arithmetic result</li>
                <li><code>boolean</code> - Comparison/logical result</li>
                <li><code>string</code> - String operation result</li>
                <li><code>any</code> - Assignment result</li>
                <li><code>undefined</code> - Invalid operation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// JavaScript Operators in Action

// 1. Arithmetic Operations
const calculateMath = () => {
  let a = 15, b = 3;
  return {
    addition: a + b,           // 18
    subtraction: a - b,        // 12
    multiplication: a * b,     // 45
    division: a / b,           // 5
    modulus: a % b,            // 0
    power: a ** b,             // 3375
    increment: ++a,            // 16
    decrement: --b             // 2
  };
};

// 2. Comparison Operations
const compareValues = () => {
  let num1 = 10, num2 = "10", num3 = 15;
  return {
    looseEqual: num1 == num2,      // true
    strictEqual: num1 === num2,    // false
    notEqual: num1 != num3,        // true
    greaterThan: num3 > num1,      // true
    lessThan: num1 < num3,         // true
    greaterEqual: num1 >= 10,      // true
    lessEqual: num1 <= 15          // true
  };
};

// 3. Logical Operations
const logicalOperations = () => {
  let isLoggedIn = true;
  let hasPermission = false;
  let isAdmin = true;
  
  return {
    and: isLoggedIn && hasPermission,     // false
    or: isLoggedIn || hasPermission,      // true
    not: !isLoggedIn,                     // false
    complex: isLoggedIn && (hasPermission || isAdmin)  // true
  };
};

// 4. String Operations
const stringOperations = () => {
  let firstName = "Sarah";
  let lastName = "Johnson";
  let age = 28;
  
  return {
    concatenation: firstName + " " + lastName,  // "Sarah Johnson"
    template: \`\${firstName} is \${age} years old\`,  // "Sarah is 28 years old"
    length: firstName.length,                   // 5
    uppercase: firstName.toUpperCase(),         // "SARAH"
    lowercase: lastName.toLowerCase()           // "johnson"
  };
};

// 5. Assignment Operations
const assignmentOperations = () => {
  let x = 10;
  let y = 5;
  
  x += y;    // x = 15
  y *= 2;    // y = 10
  x -= 3;    // x = 12
  y /= 2;    // y = 5
  
  return { x, y };
};

// 6. Conditional (Ternary) Operations
const conditionalOperations = () => {
  let age = 20;
  let score = 85;
  
  return {
    ageStatus: age >= 18 ? "Adult" : "Minor",           // "Adult"
    grade: score >= 90 ? "A" : score >= 80 ? "B" : "C", // "B"
    canVote: age >= 18 ? "Yes" : "No"                   // "Yes"
  };
};

// React Usage Examples
function OperatorDemo() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const mathResult = calculateMath();
  const comparisonResult = compareValues();
  const logicalResult = logicalOperations();
  
  return (
    <div>
      <h2>Operator Examples</h2>
      
      {/* Arithmetic */}
      <div>
        <h3>Arithmetic: 15 + 3 = {mathResult.addition}</h3>
        <h3>Power: 15³ = {mathResult.power}</h3>
      </div>
      
      {/* Comparison */}
      <div>
        <h3>10 == "10": {comparisonResult.looseEqual.toString()}</h3>
        <h3>10 === "10": {comparisonResult.strictEqual.toString()}</h3>
      </div>
      
      {/* Logical */}
      <div>
        <h3>Complex Logic: {logicalResult.complex.toString()}</h3>
      </div>
      
      {/* Conditional Rendering */}
      {isVisible && <p>This is visible when isVisible is true</p>}
      {count > 0 ? <p>Count is positive: {count}</p> : <p>Count is zero or negative</p>}
      
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
    </div>
  );
}`}
              explanation="JavaScript operators provide powerful tools for manipulating data, making decisions, and controlling program flow."
            />
          </div>
          <div className="output-panel">
            <h4>Operator Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Arithmetic Operations:</label>
                  <div className="result">
                    <div>15 + 3 = {15 + 3}</div>
                    <div>15 - 3 = {15 - 3}</div>
                    <div>15 * 3 = {15 * 3}</div>
                    <div>15 / 3 = {15 / 3}</div>
                    <div>15 % 3 = {15 % 3}</div>
                    <div>15³ = {15 ** 3}</div>
                  </div>
                </div>
                                 <div className="demo-item">
                   <label>Comparison Operations:</label>
                   <div className="result">
                     <div>10 == "10": {(10 == "10").toString()}</div>
                     <div>10 === "10": {(10 === "10").toString()}</div>
                     <div>15 {'>'} 10: {(15 > 10).toString()}</div>
                     <div>10 {'>='} 10: {(10 >= 10).toString()}</div>
                   </div>
                 </div>
                <div className="demo-item">
                  <label>Logical Operations:</label>
                  <div className="result">
                    <div>true && false: {(true && false).toString()}</div>
                    <div>true || false: {(true || false).toString()}</div>
                    <div>!true: {(!true).toString()}</div>
                    <div>true && (false || true): {(true && (false || true)).toString()}</div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Bitwise Operations:</label>
                  <div className="result">
                    <div>5 & 3: {5 & 3}</div>
                    <div>5 | 3: {5 | 3}</div>
                    <div>5 ^ 3: {5 ^ 3}</div>
                    <div>5 {'<<'} 1: {5 << 1}</div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>String Operations:</label>
                  <div className="result">
                    <div>Concatenation: {"Hello" + " " + "World"}</div>
                    <div>Template: {`Hello ${fundamentalUser.name}!`}</div>
                    <div>Length: {"JavaScript".length}</div>
                    <div>Uppercase: {"hello".toUpperCase()}</div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Modern Operators:</label>
                  <div className="result">
                    <div>Nullish: {null ?? "Default"}</div>
                    <div>Zero value: {0 ?? "Default"}</div>
                    <div>Conditional: {20 >= 18 ? "Adult" : "Minor"}</div>
                    <div>Spread: {JSON.stringify([...fundamentalColors, "yellow"])}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Variables & Data Types</h2>
        <div className="explanation">Variables are containers for storing data values that can be changed throughout your program.</div>
        <p className="section-summary">Storing and managing data in JavaScript. Variables act as containers for different types of information that can be used and modified throughout your code.</p>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Variables are like Figma's design tokens - they store reusable values that can be referenced throughout your project.
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
        <div className="explanation">Objects are collections of key-value pairs that group related data and functionality together.</div>
        <p className="section-summary">Collections of key-value pairs that group related data and functionality together. Objects allow you to organize information into named properties that can be accessed and modified.</p>
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
        <div className="explanation">Functions are reusable blocks of code that perform specific tasks and can return values.</div>
        <p className="section-summary">Reusable blocks of code that perform specific tasks and can return values. Functions help organize code, avoid repetition, and make your programs more modular and maintainable.</p>
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
        <div className="explanation">Methods are functions that belong to objects and can access the object's properties and data.</div>
        <p className="section-summary">Functions that belong to objects and can access the object's properties and data. Methods provide functionality specific to the object they belong to, like string manipulation or array operations.</p>
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
        <div className="explanation">Classes are blueprints for creating objects with shared properties and methods.</div>
        <p className="section-summary">Blueprints for creating objects with shared properties and methods. Classes provide a way to organize code by grouping related data and functionality into reusable templates.</p>
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
        <div className="explanation">Constructors initialize object properties when creating new instances, while properties store data within objects.</div>
        <p className="section-summary">Special methods that initialize new objects and define their characteristics. Constructors set up the initial state of objects, while properties store the data and characteristics of each instance.</p>
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
        <div className="explanation">Events are actions or occurrences that trigger code execution, like clicks or form submissions.</div>
        <p className="section-summary">Actions or occurrences that trigger code execution, like clicks or form submissions. Events allow your application to respond to user interactions and create dynamic, interactive experiences.</p>
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
        <div className="explanation">Values passed into functions to customize their behavior and output. Parameters are the placeholders in function definitions, while arguments are the actual values provided when calling the function.</div>
        <p className="section-summary">Values passed into functions to customize their behavior and output. Parameters are the placeholders in function definitions, while arguments are the actual values provided when calling the function.</p>
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
        <div className="explanation">Primitive types are copied by value, while reference types are copied by reference. This affects how data is shared and modified.</div>
        <p className="section-summary">How different data types are stored and copied in memory. Primitive types (strings, numbers, booleans) are copied by value, while reference types (objects, arrays) are copied by reference.</p>
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

export default JSFundamentals