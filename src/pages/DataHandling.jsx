import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function DataHandling() {
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

export default DataHandling