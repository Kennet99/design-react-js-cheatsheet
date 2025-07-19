import React, { useState, useEffect } from 'react'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import CodeExample from './CodeExample'

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
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Basic useState</h4>
              <p><code>const [count, setCount] = useState(0);</code></p>
              <p>Creates a state variable <code>count</code> starting at 0, and a function <code>setCount</code> to update it. Like creating a dynamic property in Figma.</p>
            </div>
            <div className="explanation-item">
              <h4>Object State</h4>
              <p><code>const [user, setUser] = useState({`{name: '', email: ''}`});</code></p>
              <p>Stores multiple related values in one object. When updating, you must spread the previous values to avoid losing data.</p>
            </div>
            <div className="explanation-item">
              <h4>Array State</h4>
              <p><code>const [todos, setTodos] = useState([]);</code></p>
              <p>Stores a list of items. Use spread operator <code>...</code> to add new items without mutating the original array.</p>
            </div>
            <div className="explanation-item">
              <h4>Functional Updates</h4>
              <p><code>setCount(prevCount =&gt; prevCount + 1);</code></p>
              <p>Safer way to update state when the new value depends on the previous value. Prevents race conditions.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// State variables used in the demo above
const [useStateDemoCounter, setUseStateDemoCounter] = useState(0);
const [useStateDemoUser, setUseStateDemoUser] = useState({ name: '', email: '' });
const [useStateDemoTodoInput, setUseStateDemoTodoInput] = useState('');
const [useStateDemoTodos, setUseStateDemoTodos] = useState([]);

// Counter controls
&lt;button onClick={() =&gt; setUseStateDemoCounter(useStateDemoCounter - 1)}&gt;
  &lt;Minus size={16} /&gt;
&lt;/button&gt;
&lt;button onClick={() =&gt; setUseStateDemoCounter(useStateDemoCounter + 1)}&gt;
  &lt;Plus size={16} /&gt;
&lt;/button&gt;

// User form with object state
&lt;input 
  value={useStateDemoUser.name} 
  onChange={(e) =&gt; setUseStateDemoUser(prev =&gt; ({...prev, name: e.target.value}))}
  placeholder="Name"
/&gt;
&lt;input 
  value={useStateDemoUser.email} 
  onChange={(e) =&gt; setUseStateDemoUser(prev =&gt; ({...prev, email: e.target.value}))}
  placeholder="Email"
/&gt;

// Todo list with array state
const addTodo = () =&gt; {
  if (useStateDemoTodoInput.trim()) {
    setUseStateDemoTodos(prev =&gt; [...prev, {
      id: Date.now(),
      text: useStateDemoTodoInput,
      completed: false
    }]);
    setUseStateDemoTodoInput('');
  }
};

const toggleTodo = (id) =&gt; {
  setUseStateDemoTodos(prev =&gt; prev.map(todo =&gt;
    todo.id === id ? {...todo, completed: !todo.completed} : todo
  ));
};

// Todo input and list
&lt;input 
  value={useStateDemoTodoInput} 
  onChange={(e) =&gt; setUseStateDemoTodoInput(e.target.value)}
  placeholder="Add todo"
/&gt;
&lt;button onClick={addTodo}&gt;Add&lt;/button&gt;

{useStateDemoTodos.map(todo =&gt; (
  &lt;li 
    key={todo.id}
    onClick={() =&gt; toggleTodo(todo.id)}
    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
  &gt;
    {todo.text}
  &lt;/li&gt;
))}`}
              explanation="This shows the actual useState hooks and state management code used in the interactive demo above."
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
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Basic useEffect</h4>
              <p><code>useEffect(() =&gt; {'{'} console.log('Component rendered'); {'}'});</code></p>
              <p>Runs after every render. Like an auto-layout rule in Figma that updates every time you change something.</p>
            </div>
            <div className="explanation-item">
              <h4>Empty Dependencies</h4>
              <p><code>useEffect(() =&gt; {'{'} ... {'}'}, []);</code></p>
              <p>Runs only once when component mounts. The empty array <code>[]</code> means "no dependencies to watch".</p>
            </div>
            <div className="explanation-item">
              <h4>With Dependencies</h4>
              <p><code>useEffect(() =&gt; {'{'} fetchUserData(userId); {'}'}, [userId]);</code></p>
              <p>Runs when <code>userId</code> changes. Like a smart animate that triggers when a specific property changes.</p>
            </div>
            <div className="explanation-item">
              <h4>Cleanup Function</h4>
              <p><code>return () =&gt; {'{'} clearInterval(timer); {'}'};</code></p>
              <p>Runs before the component unmounts or before the effect runs again. Prevents memory leaks by cleaning up resources.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// useEffect hooks used in the demo above

// State for the demo
const [useEffectDemoTitle, setUseEffectDemoTitle] = useState('React Cheatsheet');
const [useEffectDemoCount, setUseEffectDemoCount] = useState(0);
const [useEffectDemoWindowSize, setUseEffectDemoWindowSize] = useState({ 
  width: window.innerWidth, 
  height: window.innerHeight 
});

// Effect 1: Update document title when title changes
useEffect(() =&gt; {
  document.title = useEffectDemoTitle;
}, [useEffectDemoTitle]);

// Effect 2: Track window resize with cleanup
useEffect(() =&gt; {
  const handleResize = () =&gt; {
    setUseEffectDemoWindowSize({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });
  };
  
  window.addEventListener('resize', handleResize);
  
  // Cleanup function
  return () =&gt; window.removeEventListener('resize', handleResize);
}, []);

// Input field that triggers the title effect
&lt;input 
  value={useEffectDemoTitle} 
  onChange={(e) =&gt; setUseEffectDemoTitle(e.target.value)}
  placeholder="Enter page title"
/&gt;

// Counter that shows effect dependency
&lt;button onClick={() =&gt; setUseEffectDemoCount(useEffectDemoCount + 1)}&gt;
  &lt;Plus size={16} /&gt;
&lt;/button&gt;
&lt;span&gt;{useEffectDemoCount}&lt;/span&gt;

// Display that shows effect result
&lt;div&gt;Effect runs when count changes: {useEffectDemoCount % 2 === 0 ? 'Even' : 'Odd'}&lt;/div&gt;

// Display window size (updated by effect)
&lt;div&gt;Window size: {useEffectDemoWindowSize.width} x {useEffectDemoWindowSize.height}&lt;/div&gt;`}
              explanation="This shows the actual useEffect hooks and side effects used in the interactive demo above."
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

export default HooksSection 