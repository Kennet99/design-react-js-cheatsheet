import React, { useState } from 'react'
import CodeExample from './CodeExample'

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
  
  // State for button control demo
  const [dataHandlingButtonForm, setDataHandlingButtonForm] = useState({ name: '', email: '', isSubmitting: false })
  const [dataHandlingButtonLoading, setDataHandlingButtonLoading] = useState(false)
  const [dataHandlingButtonToggle, setDataHandlingButtonToggle] = useState(false)
  
  // State for key-value pairs demo
  const [dataHandlingKeyValueUser, setDataHandlingKeyValueUser] = useState({ name: 'Sarah', age: 28, role: 'Designer', isActive: true })
  const [dataHandlingKeyValueNewKey, setDataHandlingKeyValueNewKey] = useState('')
  const [dataHandlingKeyValueNewValue, setDataHandlingKeyValueNewValue] = useState('')
  const [dataHandlingKeyValueSpread, setDataHandlingKeyValueSpread] = useState({ name: 'Sarah', age: 28, role: 'Designer', isActive: true })

  return (
    <div className="section">
      <h1>Data Handling</h1>
      <p>Working with dynamic data and lists</p>

      <div className="concept-card">
        <h2>Mapping Arrays</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> map() is like duplicating components in Figma - you create multiple instances from a list.
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
                      `${dataHandlingTasks.filter(t => t.completed).length} completed tasks`
                    }
                    {dataHandlingFilter === 'pending' && 
                      `${dataHandlingTasks.filter(t => !t.completed).length} pending tasks`
                    }
                    {dataHandlingFilter === 'all' && 
                      `${dataHandlingTasks.length} total tasks`
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
        <h2>Button State Control</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Button state control is like creating interactive components in Figma - buttons can be enabled, disabled, or show different states based on conditions.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Button state control (like interactive components in Figma)
function SubmitButton({ formData, isLoading, isSubmitting }) {
  // Disable button when form is invalid or submitting
  const isDisabled = !formData.name || !formData.email || isSubmitting;
  
  // Show different text based on state
  const buttonText = isSubmitting ? "Submitting..." : "Submit";
  
  return (
    <button 
      onClick={handleSubmit}
      disabled={isDisabled}
      className={isDisabled ? "btn-disabled" : "btn-primary"}
    >
      {buttonText}
    </button>
  );
}

// Common button states:
// - disabled: When form is invalid or action in progress
// - loading: Show spinner or different text
// - success/error: Visual feedback after action
// - hover/focus: CSS states for interaction`}
              explanation="Button state control allows you to disable buttons, show loading states, and provide visual feedback based on application state."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Button States:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Form Validation Button:</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      value={dataHandlingButtonForm.name}
                      onChange={(e) => setDataHandlingButtonForm(prev => ({...prev, name: e.target.value}))}
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      value={dataHandlingButtonForm.email}
                      onChange={(e) => setDataHandlingButtonForm(prev => ({...prev, email: e.target.value}))}
                    />
                  </div>
                  <button 
                    disabled={!dataHandlingButtonForm.name || !dataHandlingButtonForm.email || dataHandlingButtonForm.isSubmitting}
                    onClick={() => {
                      setDataHandlingButtonForm(prev => ({...prev, isSubmitting: true}))
                      setTimeout(() => {
                        setDataHandlingButtonForm(prev => ({...prev, isSubmitting: false}))
                        alert('Form submitted!')
                      }, 2000)
                    }}
                    style={{
                      backgroundColor: (!dataHandlingButtonForm.name || !dataHandlingButtonForm.email || dataHandlingButtonForm.isSubmitting) ? '#9ca3af' : '#3b82f6',
                      cursor: (!dataHandlingButtonForm.name || !dataHandlingButtonForm.email || dataHandlingButtonForm.isSubmitting) ? 'not-allowed' : 'pointer',
                      opacity: (!dataHandlingButtonForm.name || !dataHandlingButtonForm.email || dataHandlingButtonForm.isSubmitting) ? 0.6 : 1
                    }}
                  >
                    {dataHandlingButtonForm.isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  <div className="result">
                    {!dataHandlingButtonForm.name && <div style={{color: '#ef4444'}}>❌ Name required</div>}
                    {!dataHandlingButtonForm.email && <div style={{color: '#ef4444'}}>❌ Email required</div>}
                    {dataHandlingButtonForm.name && dataHandlingButtonForm.email && !dataHandlingButtonForm.isSubmitting && 
                      <div style={{color: '#10b981'}}>✅ Form valid - button enabled</div>
                    }
                  </div>
                </div>
                <div className="demo-item">
                  <label>Loading State Button:</label>
                  <div className="button-group">
                    <button 
                      disabled={dataHandlingButtonLoading}
                      onClick={() => {
                        setDataHandlingButtonLoading(true)
                        setTimeout(() => setDataHandlingButtonLoading(false), 3000)
                      }}
                      style={{
                        backgroundColor: dataHandlingButtonLoading ? '#9ca3af' : '#10b981',
                        cursor: dataHandlingButtonLoading ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {dataHandlingButtonLoading ? '⏳ Processing...' : 'Start Process'}
                    </button>
                    <button 
                      onClick={() => setDataHandlingButtonLoading(false)}
                      disabled={!dataHandlingButtonLoading}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Toggle Button States:</label>
                  <div className="button-group">
                    <button 
                      onClick={() => setDataHandlingButtonToggle(!dataHandlingButtonToggle)}
                      style={{
                        backgroundColor: dataHandlingButtonToggle ? '#10b981' : '#ef4444'
                      }}
                    >
                      {dataHandlingButtonToggle ? 'ON' : 'OFF'}
                    </button>
                    <button 
                      disabled={dataHandlingButtonToggle}
                      onClick={() => alert('This button is only enabled when toggle is OFF')}
                    >
                      Conditional Action
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
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Key-value pairs (like component properties in Figma)
const user = {
  name: "Sarah",        // key: "name", value: "Sarah"
  age: 28,             // key: "age", value: 28
  role: "Designer",    // key: "role", value: "Designer"
  isActive: true       // key: "isActive", value: true
};

// Accessing values by key
console.log(user.name);        // "Sarah" (dot notation)
console.log(user["age"]);      // 28 (bracket notation)

// Adding new key-value pairs
user.skills = ["Figma", "React"];  // Add new property
user["location"] = "NYC";          // Add using bracket notation

// Updating existing values
user.age = 29;                    // Update age
user["role"] = "Senior Designer"; // Update role

// Removing key-value pairs
delete user.isActive;             // Remove property

// Object destructuring (extract specific keys)
const { name, age, role } = user;
console.log(name);  // "Sarah"
console.log(age);   // 29

// Spread operator (create new object with changes)
const updatedUser = { ...user, age: 30, role: "Lead Designer" };`}
              explanation="Key-value pairs are the fundamental way objects store data. Each key is unique and maps to a specific value, allowing you to organize and access data efficiently."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Key-Value Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Object (Key-Value Pairs):</label>
                  <div className="result">
                    {Object.entries(dataHandlingKeyValueUser).map(([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Add New Key-Value Pair:</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Key" 
                      value={dataHandlingKeyValueNewKey}
                      onChange={(e) => setDataHandlingKeyValueNewKey(e.target.value)}
                    />
                    <input 
                      type="text" 
                      placeholder="Value" 
                      value={dataHandlingKeyValueNewValue}
                      onChange={(e) => setDataHandlingKeyValueNewValue(e.target.value)}
                    />
                    <button onClick={() => {
                      if (dataHandlingKeyValueNewKey && dataHandlingKeyValueNewValue) {
                        setDataHandlingKeyValueUser(prev => ({
                          ...prev,
                          [dataHandlingKeyValueNewKey]: dataHandlingKeyValueNewValue
                        }))
                        setDataHandlingKeyValueNewKey('')
                        setDataHandlingKeyValueNewValue('')
                      }
                    }}>Add Property</button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Update Existing Values:</label>
                  <div className="button-group">
                    <button onClick={() => setDataHandlingKeyValueUser(prev => ({...prev, age: prev.age + 1}))}>
                      Increment Age
                    </button>
                    <button onClick={() => setDataHandlingKeyValueUser(prev => ({...prev, role: 'Senior ' + prev.role}))}>
                      Promote Role
                    </button>
                    <button onClick={() => setDataHandlingKeyValueUser(prev => ({...prev, isActive: !prev.isActive}))}>
                      Toggle Active
                    </button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Object Destructuring Demo:</label>
                  <div className="result">
                    <div>Name: {dataHandlingKeyValueUser.name}</div>
                    <div>Age: {dataHandlingKeyValueUser.age}</div>
                    <div>Role: {dataHandlingKeyValueUser.role}</div>
                    <div>Active: {dataHandlingKeyValueUser.isActive ? 'Yes' : 'No'}</div>
                  </div>
                  <div className="result" style={{fontSize: '12px', color: '#94a3b8'}}>
                    Destructured values: {dataHandlingKeyValueUser.name}, {dataHandlingKeyValueUser.age}, {dataHandlingKeyValueUser.role}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Spread Operator Demo:</label>
                  <div className="result">
                    <div>Original: {dataHandlingKeyValueUser.name} ({dataHandlingKeyValueUser.age})</div>
                    <div>Spread copy: {dataHandlingKeyValueSpread.name} ({dataHandlingKeyValueSpread.age})</div>
                  </div>
                  <div className="button-group">
                    <button onClick={() => setDataHandlingKeyValueSpread(prev => ({...prev, age: prev.age + 5}))}>
                      Age +5 in Copy
                    </button>
                    <button onClick={() => {
                      setDataHandlingKeyValueUser({name: 'Sarah', age: 28, role: 'Designer', isActive: true})
                      setDataHandlingKeyValueSpread({name: 'Sarah', age: 28, role: 'Designer', isActive: true})
                    }}>
                      Reset Both
                    </button>
                  </div>
                  <div className="result" style={{fontSize: '12px', color: '#10b981'}}>
                    Spread creates independent copy - changes don't affect original
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

export default DataHandlingSection 