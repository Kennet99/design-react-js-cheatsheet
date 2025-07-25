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
        <div className="explanation">
          JavaScript syntax defines the rules and structure for writing valid JavaScript code, including statements, expressions, and code organization. This section is based on the <a href="https://quickref.me/javascript.html" target="_blank" rel="noopener noreferrer">JavaScript Cheatsheet by QuickRef.ME</a>.
        </div>
        <p className="section-summary">Below is a comprehensive list of JavaScript syntax basics, what they do, and simple code examples for each.</p>
        <div className="syntax-example">
          <div className="syntax-group">
            <h4>Console Output</h4>
            <p>Print messages or errors to the console.</p>
            <SyntaxExample code={`console.log('Hello world!');
console.warn('hello %s', 'QuickRef.ME');
console.error(new Error('Oops!'));`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Numbers</h4>
            <p>Declare and use numbers.</p>
            <SyntaxExample code={`let amount = 6;
let price = 4.99;`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Variables</h4>
            <p>Store and reference values using <code>let</code>, <code>const</code>, or <code>var</code>.</p>
            <SyntaxExample code={`let x = null;
let name = "Tammy";
const found = false;
console.log(name, found, x);
var a;
console.log(a); // => undefined`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Strings</h4>
            <p>Declare and manipulate text values.</p>
            <SyntaxExample code={`let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";
console.log(single.length); // => 21`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Arithmetic Operators</h4>
            <p>Perform basic math operations.</p>
            <SyntaxExample code={`5 + 5 // 10     Addition
10 - 5 // 5     Subtraction
5 * 10 // 50    Multiplication
10 / 5 // 2     Division
10 % 5 // 0     Modulo`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Comments</h4>
            <p>Add notes or explanations to your code.</p>
            <SyntaxExample code={`// This line will denote a comment
/*  
The below configuration must be 
changed before deployment. 
*/`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Assignment Operators</h4>
            <p>Assign or update values in variables.</p>
            <SyntaxExample code={`let number = 100;
number = number + 10;
number += 10;
console.log(number); // => 120`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>String Interpolation</h4>
            <p>Combine variables and text using concatenation or template literals.</p>
            <SyntaxExample code={`let age = 7;
'Tommy is ' + age + ' years old.';
` + '`Tommy is ${age} years old.`;' } language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>let Keyword</h4>
            <p>Declare a block-scoped variable that can be reassigned.</p>
            <SyntaxExample code={`let count;
console.log(count); // => undefined
count = 10;
console.log(count); // => 10`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>const Keyword</h4>
            <p>Declare a block-scoped constant that cannot be reassigned.</p>
            <SyntaxExample code={`const numberOfColumns = 4;
// numberOfColumns = 8; // TypeError`} language="javascript" />
          </div>
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Syntax Elements:</strong>
              <ul>
                <li><code>variable</code> - Data storage container</li>
                <li><code>function</code> - Reusable code block</li>
                <li><code>array</code> - List of values</li>
                <li><code>object</code> - Key-value pairs</li>
                <li><code>statement</code> - Code instruction</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Syntax Results:</strong>
              <ul>
                <li><code>executed code</code> - Running JavaScript</li>
                <li><code>console output</code> - Debug information</li>
                <li><code>function return</code> - Computed result</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Interactive demo removed as requested */}
      </div>

      <div className="concept-card">
        <h2>JavaScript Operators</h2>
        <div className="explanation">
          Operators are symbols that perform operations on values, including arithmetic, comparison, logical, and assignment operations. This section is based on the <a href="https://www.30secondsofcode.org/js/s/operator-cheatsheet/" target="_blank" rel="noopener noreferrer">JavaScript Operator Cheatsheet by 30 seconds of code</a>.
        </div>
        <p className="section-summary">Below is a comprehensive list of JavaScript operators, what they do, and simple code examples for each.</p>
        <div className="syntax-example">
          <div className="syntax-group">
            <h4>Assignment Operator (=)</h4>
            <p>Assigns a value to a variable.</p>
            <SyntaxExample code={`let x = 5; // x is now 5`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Equality Comparison Operators (==, !=, ===, !==)</h4>
            <p>Compare two values for equality or inequality. <code>==</code> and <code>!=</code> are loose (type-converting), <code>===</code> and <code>!==</code> are strict (no type conversion).</p>
            <SyntaxExample code={`10 == '10';   // true (loose equality)
10 != '10';   // false (loose inequality)
10 === '10';  // false (strict equality)
10 !== '10';  // true (strict inequality)`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Comparison Operators (&gt;, &lt;, &gt;=, &lt;=)</h4>
            <p>Compare two values, like in math.</p>
            <SyntaxExample code={`5 > 3;   // true
5 < 3;   // false
5 >= 5;  // true
5 <= 4;  // false`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Math Operators (+, -, *, /, %, **, - (unary))</h4>
            <p>Perform basic arithmetic operations.</p>
            <SyntaxExample code={`const a = 5, b = 2;
a + b;    // 7 (addition)
a - b;    // 3 (subtraction)
a * b;    // 10 (multiplication)
a / b;    // 2.5 (division)
a % b;    // 1 (modulo)
a ** b;   // 25 (exponentiation)
-a;       // -5 (negation)`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Math Assignment Operators (+=, -=, *=, /=, %=, **=)</h4>
            <p>Combine assignment with math operations.</p>
            <SyntaxExample code={`let a = 5, b = 2;
a += b;   // 7
a -= b;   // 5
a *= b;   // 10
a /= b;   // 5
a %= b;   // 1
a **= b;  // 25`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Increment &amp; Decrement Operators (++/--)</h4>
            <p>Shorthand for adding or subtracting 1. Prefix (<code>++a</code>) changes before use, postfix (<code>a++</code>) after use.</p>
            <SyntaxExample code={`let a = 5, b = 5;
let c = ++a; // a=6, c=6
let d = b++; // b=6, d=5
let e = --a; // a=5, e=5
let f = b--; // b=5, f=6`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>String Concatenation Operator (+)</h4>
            <p>Joins two strings together.</p>
            <SyntaxExample code={`const str1 = 'Hello';
const str2 = 'World';
const greeting = str1 + ' ' + str2; // 'Hello World'`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Logical Operators (&&, ||, !)</h4>
            <p>Combine or negate boolean values.</p>
            <SyntaxExample code={`const a = true, b = false;
a && b; // false (AND)
a || b; // true (OR)
!a;     // false (NOT)`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Logical Assignment Operators (&&=, ||=)</h4>
            <p>Combine logical operations with assignment.</p>
            <SyntaxExample code={`let a = true, b = false, c = true;
a &&= b; // a is now false
b ||= c; // b is now true`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Double Negation (!!)</h4>
            <p>Converts a value to its boolean equivalent.</p>
            <SyntaxExample code={`const str = 'Hello';
!!str; // true
const num = 0;
!!num; // false`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Ternary Operator (?:)</h4>
            <p>Shorthand for <code>if...else</code> statements.</p>
            <SyntaxExample code={`const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No'; // 'Yes'`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Spread Operator (...)</h4>
            <p>Expands an iterable (like an array or object) into its elements.</p>
            <SyntaxExample code={`const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 }; // { a: 1, b: 2, c: 3 }`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Bitwise Operators (&, |, ^, ~, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code>)</h4>
            <p>Operate on the binary representations of numbers.</p>
            <SyntaxExample code={`const a = 5; // 0101
const b = 3; // 0011
a & b;   // 1 (AND)
a | b;   // 7 (OR)
a ^ b;   // 6 (XOR)
~a;      // -6 (NOT)
a << 1;  // 10 (left shift)
a >> 1;  // 2 (right shift)
a >>> 1; // 2 (unsigned right shift)`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Bitwise Assignment Operators (&=, |=, ^=, <code>&lt;&lt;=</code>, <code>&gt;&gt;=</code>, <code>&gt;&gt;&gt;=</code>)</h4>
            <p>Combine bitwise operations with assignment.</p>
            <SyntaxExample code={`let a = 5, b = 3;
a &= b;   // 1
a |= b;   // 3
a ^= b;   // 0
a <<= 1;  // 0
a >>= 1;  // 0
a >>>= 1; // 0`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Nullish Coalescing Operator (??)</h4>
            <p>Returns the right-hand value if the left is <code>null</code> or <code>undefined</code>.</p>
            <SyntaxExample code={`const a = null, b = 5;
const c = a ?? b; // 5
const d = 0;
const e = d ?? b; // 0`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Nullish Assignment Operator (??=)</h4>
            <p>Assigns the right-hand value only if the left is <code>null</code> or <code>undefined</code>.</p>
            <SyntaxExample code={`let a = null, b = 5;
a ??= b; // a is now 5
let c = 0;
c ??= b; // c is still 0`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Property Access Operator (.)</h4>
            <p>Accesses properties of objects.</p>
            <SyntaxExample code={`const obj = { a: 1 };
const value = obj.a; // 1`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Optional Chaining Operator (?.)</h4>
            <p>Safely access deeply nested properties without errors if a property is missing.</p>
            <SyntaxExample code={`const obj = { a: { b: { c: 1 } } };
const value = obj?.a?.b?.c;   // 1
const value2 = obj?.a?.b?.d;  // undefined`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Comma Operator (,)</h4>
            <p>Evaluates each operand and returns the value of the last one.</p>
            <SyntaxExample code={`const a = (1, 2, 3); // a is 3`} language="javascript" />
          </div>

          <div className="syntax-group">
            <h4>Arrow Function Operator (<code>=&gt;</code>)</h4>
            <p>Shorthand for writing function expressions.</p>
            <SyntaxExample code={`const add = (a, b) => a + b;
add(2, 3); // 5`} language="javascript" />
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