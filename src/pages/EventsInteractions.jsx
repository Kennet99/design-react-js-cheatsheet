import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function EventsInteractions() {
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

export default EventsInteractions