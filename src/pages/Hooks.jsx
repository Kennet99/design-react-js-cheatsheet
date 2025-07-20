import React, { useState, useEffect, useReducer } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function Hooks() {
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
        <h2>useState Hook</h2>
        <div className="explanation">useState is the fundamental hook for managing component state in functional components.</div>
        <p className="section-summary">Managing state in functional components. useState allows you to add stateful behavior to function components, enabling them to store and update data that triggers re-renders.</p>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> useState is like Figma's component properties - it stores values that can change and automatically updates the UI when they do.
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
        <h2>useEffect Hook</h2>
        <div className="explanation">useEffect handles side effects in functional components, such as data fetching, subscriptions, or DOM manipulation.</div>
        <p className="section-summary">Handles side effects in functional components like API calls, subscriptions, and DOM manipulation. useEffect runs after render and can perform cleanup when components unmount.</p>
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
useEffect(() => {}, []);           // Run only once
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
        <div className="explanation">Additional hooks provide specialized functionality for different use cases in React applications.</div>
        <p className="section-summary">Specialized hooks for specific use cases like DOM access, performance optimization, and complex state management. These hooks provide advanced functionality beyond basic state and effects.</p>
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
        <div className="explanation">Custom hooks let you extract and reuse stateful logic between components, making your code more modular and reusable.</div>
        <p className="section-summary">Creating reusable logic by extracting stateful behavior into custom functions. Custom hooks allow you to share stateful logic between components and build your own hook library.</p>
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

export default Hooks