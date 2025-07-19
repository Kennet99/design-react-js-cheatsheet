import React, { useState } from 'react'
import { Plus, Minus, RotateCcw, Search, Filter, SortAsc, SortDesc } from 'lucide-react'
import CodeExample from './CodeExample'

// Dynamic Data Section
function DynamicDataSection() {
  // Interactive state for examples
  const [dynamicDataUsers, setDynamicDataUsers] = useState([
    { id: 1, name: 'Sarah Chen', role: 'UX Designer', experience: 3, skills: ['Figma', 'React', 'Prototyping'] },
    { id: 2, name: 'Alex Johnson', role: 'UI Designer', experience: 5, skills: ['Sketch', 'CSS', 'Animation'] },
    { id: 3, name: 'Maria Garcia', role: 'UX Designer', experience: 2, skills: ['Figma', 'User Research', 'Wireframing'] },
    { id: 4, name: 'David Kim', role: 'Product Designer', experience: 7, skills: ['Figma', 'React', 'Strategy'] },
    { id: 5, name: 'Emma Wilson', role: 'UI Designer', experience: 1, skills: ['Sketch', 'CSS', 'Typography'] }
  ])
  
  const [dynamicDataFilter, setDynamicDataFilter] = useState('all')
  const [dynamicDataSearch, setDynamicDataSearch] = useState('')
  const [dynamicDataSortBy, setDynamicDataSortBy] = useState('name')
  const [dynamicDataNewUser, setDynamicDataNewUser] = useState({ name: '', role: '', experience: '' })
  const [dynamicDataNewSkill, setDynamicDataNewSkill] = useState('')

  return (
    <div className="section">
      <h1>Dynamic Data</h1>
      <p>Working with arrays and dynamic content in React</p>

      <div className="concept-card">
        <h2>Array Methods - .map()</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> .map() is like duplicating components in Figma - you create multiple instances from a list, each with different properties.
        </div>
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Basic Mapping</h4>
              <p><code>users.map(user =&gt; &lt;UserCard key={user.id} user={user} /&gt;)</code></p>
              <p>Transforms each item in an array into a React component. Like duplicating a component in Figma and changing its properties for each instance.</p>
            </div>
            <div className="explanation-item">
              <h4>Key Prop</h4>
              <p><code>key={user.id}</code></p>
              <p>React needs a unique identifier for each mapped element. This helps React track changes efficiently and update only what's necessary.</p>
            </div>
            <div className="explanation-item">
              <h4>Conditional Rendering</h4>
              <p><code>{`{users.map(user => user.active && <UserCard key={user.id} user={user} />)}`}</code></p>
              <p>You can add conditions inside map to only render certain items. Like using visibility settings in Figma to show/hide components.</p>
            </div>
            <div className="explanation-item">
              <h4>Transforming Data</h4>
              <p><code>names.map(name =&gt; name.toUpperCase())</code></p>
              <p>Map can transform data before rendering. Useful for formatting text, calculating values, or creating new objects.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// State for the interactive demo
const [dynamicDataUsers, setDynamicDataUsers] = useState([
  { id: 1, name: 'Sarah Chen', role: 'UX Designer', experience: 3, skills: ['Figma', 'React', 'Prototyping'] },
  { id: 2, name: 'Alex Johnson', role: 'UI Designer', experience: 5, skills: ['Sketch', 'CSS', 'Animation'] },
  { id: 3, name: 'Maria Garcia', role: 'UX Designer', experience: 2, skills: ['Figma', 'User Research', 'Wireframing'] }
]);

// Adding new user functionality
const [dynamicDataNewUser, setDynamicDataNewUser] = useState({ name: '', role: '', experience: '' });

const addUser = () => {
  if (dynamicDataNewUser.name && dynamicDataNewUser.role) {
    setDynamicDataUsers(prev => [...prev, {
      id: Date.now(),
      name: dynamicDataNewUser.name,
      role: dynamicDataNewUser.role,
      experience: parseInt(dynamicDataNewUser.experience) || 0,
      skills: []
    }]);
    setDynamicDataNewUser({ name: '', role: '', experience: '' });
  }
};

// The actual JSX that renders the user list
&lt;div className="user-list-display"&gt;
  {dynamicDataUsers.map(user =&gt; (
    &lt;div key={user.id} className="user-card-display"&gt;
      &lt;strong&gt;{user.name}&lt;/strong&gt;
      &lt;span&gt;{user.role}&lt;/span&gt;
      &lt;span&gt;{user.experience} years&lt;/span&gt;
    &lt;/div&gt;
  ))}
&lt;/div&gt;

// Form for adding new users
&lt;div className="input-group"&gt;
  &lt;input 
    value={dynamicDataNewUser.name} 
    onChange={(e) =&gt; setDynamicDataNewUser(prev =&gt; ({...prev, name: e.target.value}))}
    placeholder="Name"
  /&gt;
  &lt;input 
    value={dynamicDataNewUser.role} 
    onChange={(e) =&gt; setDynamicDataNewUser(prev =&gt; ({...prev, role: e.target.value}))}
    placeholder="Role"
  /&gt;
  &lt;button onClick={addUser}&gt;Add User&lt;/button&gt;
&lt;/div&gt;`}
              explanation="This is the actual code that powers the interactive demo above. It shows how to use .map() with state management to create dynamic user lists."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive .map() Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User List (Mapped from Array):</label>
                  <div className="user-list-display">
                    {dynamicDataUsers.map(user => (
                      <div key={user.id} className="user-card-display">
                        <strong>{user.name}</strong>
                        <span>{user.role}</span>
                        <span>{user.experience} years</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Add New User:</label>
                  <div className="input-group">
                    <input 
                      value={dynamicDataNewUser.name} 
                      onChange={(e) => setDynamicDataNewUser(prev => ({...prev, name: e.target.value}))}
                      placeholder="Name"
                    />
                    <input 
                      value={dynamicDataNewUser.role} 
                      onChange={(e) => setDynamicDataNewUser(prev => ({...prev, role: e.target.value}))}
                      placeholder="Role"
                    />
                    <input 
                      type="number"
                      value={dynamicDataNewUser.experience} 
                      onChange={(e) => setDynamicDataNewUser(prev => ({...prev, experience: e.target.value}))}
                      placeholder="Experience"
                    />
                    <button onClick={() => {
                      if (dynamicDataNewUser.name && dynamicDataNewUser.role) {
                        setDynamicDataUsers(prev => [...prev, {
                          id: Date.now(),
                          name: dynamicDataNewUser.name,
                          role: dynamicDataNewUser.role,
                          experience: parseInt(dynamicDataNewUser.experience) || 0,
                          skills: []
                        }])
                        setDynamicDataNewUser({ name: '', role: '', experience: '' })
                      }
                    }}>Add User</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Array Methods - .filter()</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> .filter() is like using the layers panel to show/hide elements based on criteria - you create a subset of your data.
        </div>
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Basic Filtering</h4>
              <p><code>users.filter(user =&gt; user.role === 'UX Designer')</code></p>
              <p>Creates a new array with only elements that pass the test. Like hiding layers in Figma that don't match certain criteria.</p>
            </div>
            <div className="explanation-item">
              <h4>Multiple Conditions</h4>
              <p><code>users.filter(user =&gt; user.experience &gt; 3 &amp;&amp; user.role === 'Designer')</code></p>
              <p>Combine multiple conditions using logical operators. Only items that pass ALL conditions are included.</p>
            </div>
            <div className="explanation-item">
              <h4>Search Filtering</h4>
              <p><code>users.filter(user =&gt; user.name.toLowerCase().includes(searchTerm))</code></p>
              <p>Common pattern for search functionality. Converts to lowercase and checks if the search term is included.</p>
            </div>
            <div className="explanation-item">
              <h4>Chaining with Map</h4>
              <p><code>users.filter(...).map(...)</code></p>
              <p>Filter first, then map. This is more efficient than mapping everything and using conditional rendering.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// State for filtering demo
const [dynamicDataFilter, setDynamicDataFilter] = useState('all');
const [dynamicDataSearch, setDynamicDataSearch] = useState('');

// Filter by role
const filteredByRole = dynamicDataUsers.filter(user => 
  dynamicDataFilter === 'all' || user.role === dynamicDataFilter
);

// Search filtering
const searchResults = dynamicDataUsers.filter(user => 
  user.name.toLowerCase().includes(dynamicDataSearch.toLowerCase())
);

// Combined filtering (role + search)
const finalResults = dynamicDataUsers
  .filter(user => dynamicDataFilter === 'all' || user.role === dynamicDataFilter)
  .filter(user => user.name.toLowerCase().includes(dynamicDataSearch.toLowerCase()));

// The actual JSX that renders filtered results
&lt;div className="user-list-display"&gt;
  {finalResults.map(user =&gt; (
    &lt;div key={user.id} className="user-card-display"&gt;
      &lt;strong&gt;{user.name}&lt;/strong&gt;
      &lt;span&gt;{user.role}&lt;/span&gt;
      &lt;span&gt;{user.experience} years&lt;/span&gt;
    &lt;/div&gt;
  ))}
&lt;/div&gt;

// Filter controls
&lt;select value={dynamicDataFilter} onChange={(e) =&gt; setDynamicDataFilter(e.target.value)}&gt;
  &lt;option value="all"&gt;All Roles&lt;/option&gt;
  &lt;option value="UX Designer"&gt;UX Designers&lt;/option&gt;
  &lt;option value="UI Designer"&gt;UI Designers&lt;/option&gt;
&lt;/select&gt;

&lt;input 
  value={dynamicDataSearch} 
  onChange={(e) =&gt; setDynamicDataSearch(e.target.value)}
  placeholder="Search users..."
/&gt;`}
              explanation="This shows the actual filtering logic used in the demo above, combining role filtering with search functionality."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive .filter() Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Filter by Role:</label>
                  <select 
                    value={dynamicDataFilter} 
                    onChange={(e) => setDynamicDataFilter(e.target.value)}
                  >
                    <option value="all">All Roles</option>
                    <option value="UX Designer">UX Designers</option>
                    <option value="UI Designer">UI Designers</option>
                    <option value="Product Designer">Product Designers</option>
                  </select>
                </div>
                <div className="demo-item">
                  <label>Search by Name:</label>
                  <input 
                    value={dynamicDataSearch} 
                    onChange={(e) => setDynamicDataSearch(e.target.value)}
                    placeholder="Search users..."
                  />
                </div>
                <div className="demo-item">
                  <label>Filtered Results:</label>
                  <div className="user-list-display">
                    {dynamicDataUsers
                      .filter(user => dynamicDataFilter === 'all' || user.role === dynamicDataFilter)
                      .filter(user => user.name.toLowerCase().includes(dynamicDataSearch.toLowerCase()))
                      .map(user => (
                        <div key={user.id} className="user-card-display">
                          <strong>{user.name}</strong>
                          <span>{user.role}</span>
                          <span>{user.experience} years</span>
                        </div>
                      ))
                    }
                  </div>
                  <div className="result">
                    Showing {dynamicDataUsers
                      .filter(user => dynamicDataFilter === 'all' || user.role === dynamicDataFilter)
                      .filter(user => user.name.toLowerCase().includes(dynamicDataSearch.toLowerCase())).length} of {dynamicDataUsers.length} users
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Array Methods - .find() & .findIndex()</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> .find() is like using the search function in Figma - you locate the first element that matches your criteria.
        </div>
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Finding Elements</h4>
              <p><code>const user = users.find(user =&gt; user.id === 1);</code></p>
              <p>Returns the first element that matches the condition, or undefined if none found. Like finding the first component that matches your search.</p>
            </div>
            <div className="explanation-item">
              <h4>Finding Index</h4>
              <p><code>const index = users.findIndex(user =&gt; user.id === 1);</code></p>
              <p>Returns the index of the first matching element, or -1 if none found. Useful for updating or removing specific items.</p>
            </div>
            <div className="explanation-item">
              <h4>Complex Conditions</h4>
              <p><code>const designer = users.find(user =&gt; user.role === 'UX Designer' &amp;&amp; user.experience &gt; 5);</code></p>
              <p>You can use complex conditions to find specific items. Returns the first match, not all matches.</p>
            </div>
            <div className="explanation-item">
              <h4>Safe Access</h4>
              <p><code>const userName = users.find(u =&gt; u.id === 1)?.name || 'Not found';</code></p>
              <p>Use optional chaining (?.) to safely access properties when the element might not exist.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Finding specific elements
const users = [
  { id: 1, name: 'Sarah', role: 'UX Designer' },
  { id: 2, name: 'Alex', role: 'UI Designer' },
  { id: 3, name: 'Maria', role: 'UX Designer' }
];

// Find by ID
const user = users.find(user => user.id === 2);
console.log(user); // { id: 2, name: 'Alex', role: 'UI Designer' }

// Find by condition
const uxDesigner = users.find(user => user.role === 'UX Designer');
console.log(uxDesigner); // { id: 1, name: 'Sarah', role: 'UX Designer' }

// Find index for updating
const index = users.findIndex(user => user.id === 2);
if (index !== -1) {
  users[index] = { ...users[index], name: 'Alexander' };
}

// Safe access with optional chaining
const userName = users.find(u => u.id === 999)?.name || 'User not found';`}
              explanation=".find() and .findIndex() are useful for locating specific items in arrays and updating them."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive .find() Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Find User by ID:</label>
                  <div className="input-group">
                    <input 
                      type="number"
                      placeholder="Enter user ID"
                      id="findUserId"
                      defaultValue="1"
                    />
                    <button onClick={() => {
                      const id = parseInt(document.getElementById('findUserId').value)
                      const user = dynamicDataUsers.find(u => u.id === id)
                      if (user) {
                        alert(`Found: ${user.name} - ${user.role}`)
                      } else {
                        alert('User not found')
                      }
                    }}>Find User</button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Find First UX Designer:</label>
                  <button onClick={() => {
                    const uxDesigner = dynamicDataUsers.find(user => user.role === 'UX Designer')
                    if (uxDesigner) {
                      alert(`First UX Designer: ${uxDesigner.name} (${uxDesigner.experience} years experience)`)
                    } else {
                      alert('No UX Designer found')
                    }
                  }}>Find UX Designer</button>
                </div>
                <div className="demo-item">
                  <label>Find Experienced Designer (&gt;3 years):</label>
                  <button onClick={() => {
                    const experienced = dynamicDataUsers.find(user => user.experience > 3)
                    if (experienced) {
                      alert(`Experienced designer: ${experienced.name} - ${experienced.role} (${experienced.experience} years)`)
                    } else {
                      alert('No experienced designer found')
                    }
                  }}>Find Experienced</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Array Methods - .reduce()</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> .reduce() is like using auto-layout to calculate total dimensions - you combine multiple values into a single result.
        </div>
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Basic Reduction</h4>
              <p><code>numbers.reduce((sum, num) =&gt; sum + num, 0)</code></p>
              <p>Combines all elements into a single value. The second parameter (0) is the initial value. Like adding up all the widths in a row.</p>
            </div>
            <div className="explanation-item">
              <h4>Counting Items</h4>
              <p><code>users.reduce((count, user) =&gt; count + (user.role === 'Designer' ? 1 : 0), 0)</code></p>
              <p>Counts items that match a condition. Useful for creating statistics and summaries from your data.</p>
            </div>
            <div className="explanation-item">
              <h4>Grouping Data</h4>
              <p><code>users.reduce((groups, user) =&gt; {'{'} ...groups, [user.role]: [...(groups[user.role] || []), user] {'}'}, {'{}'})</code></p>
              <p>Groups items by a property. Creates an object where each key is a category and the value is an array of items.</p>
            </div>
            <div className="explanation-item">
              <h4>Creating Objects</h4>
              <p><code>users.reduce((obj, user) =&gt; {'{'} ...obj, [user.id]: user {'}'}, {'{}'})</code></p>
              <p>Transforms an array into an object for faster lookups. Each item becomes a key-value pair.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Reducing arrays to single values
const users = [
  { id: 1, name: 'Sarah', role: 'UX Designer', experience: 3 },
  { id: 2, name: 'Alex', role: 'UI Designer', experience: 5 },
  { id: 3, name: 'Maria', role: 'UX Designer', experience: 2 }
];

// Sum total experience
const totalExperience = users.reduce((sum, user) => sum + user.experience, 0);
console.log(totalExperience); // 10

// Count by role
const roleCounts = users.reduce((counts, user) => {
  counts[user.role] = (counts[user.role] || 0) + 1;
  return counts;
}, {});
console.log(roleCounts); // { 'UX Designer': 2, 'UI Designer': 1 }

// Group by role
const groupedByRole = users.reduce((groups, user) => {
  if (!groups[user.role]) {
    groups[user.role] = [];
  }
  groups[user.role].push(user);
  return groups;
}, {});

// Create lookup object
const userLookup = users.reduce((lookup, user) => {
  lookup[user.id] = user;
  return lookup;
}, {});`}
              explanation=".reduce() is powerful for transforming arrays into different data structures and calculating summaries."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive .reduce() Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Total Experience:</label>
                  <div className="result">
                    {dynamicDataUsers.reduce((sum, user) => sum + user.experience, 0)} years total
                  </div>
                </div>
                <div className="demo-item">
                  <label>Role Distribution:</label>
                  <div className="result">
                    {Object.entries(dynamicDataUsers.reduce((counts, user) => {
                      counts[user.role] = (counts[user.role] || 0) + 1;
                      return counts;
                    }, {})).map(([role, count]) => `${role}: ${count}`).join(', ')}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Average Experience:</label>
                  <div className="result">
                    {(dynamicDataUsers.reduce((sum, user) => sum + user.experience, 0) / dynamicDataUsers.length).toFixed(1)} years average
                  </div>
                </div>
                <div className="demo-item">
                  <label>Most Experienced:</label>
                  <div className="result">
                    {dynamicDataUsers.reduce((max, user) => user.experience > max.experience ? user : max, dynamicDataUsers[0])?.name || 'None'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Adding Data to Components</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Adding data to components is like creating instances in Figma - you start with a master component and customize each instance with different data.
        </div>
        
        {/* Code Explanation Section */}
        <div className="code-explanation-section">
          <h3>📝 Code Explanation</h3>
          <div className="explanation-grid">
            <div className="explanation-item">
              <h4>Props for Data</h4>
              <p><code>function UserCard({`{user}`}) {'{'} return &lt;div&gt;{user.name}&lt;/div&gt;; {'}'}</code></p>
              <p>Pass data to components through props. The component receives the data and renders it. Like passing properties to a Figma component instance.</p>
            </div>
            <div className="explanation-item">
              <h4>State for Dynamic Data</h4>
              <p><code>const [users, setUsers] = useState([]);</code></p>
              <p>Use state to store data that can change. When state updates, the component re-renders with new data.</p>
            </div>
            <div className="explanation-item">
              <h4>Adding New Items</h4>
              <p><code>setUsers(prev =&gt; [...prev, newUser]);</code></p>
              <p>Use the spread operator to add new items to arrays. This creates a new array instead of mutating the existing one.</p>
            </div>
            <div className="explanation-item">
              <h4>Updating Items</h4>
              <p><code>setUsers(prev =&gt; prev.map(user =&gt; user.id === id ? {'{...user, name: newName}'} : user));</code></p>
              <p>Use map to update specific items while keeping others unchanged. The spread operator preserves existing properties.</p>
            </div>
          </div>
        </div>

        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Component that receives data via props
function UserCard({ user, onEdit, onDelete }) {
  return (
    &lt;div className="user-card"&gt;
      &lt;h3&gt;{user.name}&lt;/h3&gt;
      &lt;p&gt;{user.role}&lt;/p&gt;
      &lt;p&gt;{user.experience} years experience&lt;/p&gt;
      &lt;button onClick={() =&gt; onEdit(user.id)}&gt;Edit&lt;/button&gt;
      &lt;button onClick={() =&gt; onDelete(user.id)}&gt;Delete&lt;/button&gt;
    &lt;/div&gt;
  );
}

// Parent component that manages data
function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  const addUser = () =&gt; {
    if (newUser.name && newUser.role) {
      setUsers(prev =&gt; [...prev, {
        id: Date.now(),
        ...newUser,
        experience: 0
      }]);
      setNewUser({ name: '', role: '' });
    }
  };

  const updateUser = (id, updates) =&gt; {
    setUsers(prev =&gt; prev.map(user =&gt; 
      user.id === id ? { ...user, ...updates } : user
    ));
  };

  const deleteUser = (id) =&gt; {
    setUsers(prev =&gt; prev.filter(user =&gt; user.id !== id));
  };

  return (
    &lt;div&gt;
      {/* Add new user form */}
      &lt;div className="add-user-form"&gt;
        &lt;input
          value={newUser.name}
          onChange={(e) =&gt; setNewUser(prev =&gt; ({ ...prev, name: e.target.value }))}
          placeholder="Name"
        /&gt;
        &lt;input
          value={newUser.role}
          onChange={(e) =&gt; setNewUser(prev =&gt; ({ ...prev, role: e.target.value }))}
          placeholder="Role"
        /&gt;
        &lt;button onClick={addUser}&gt;Add User&lt;/button&gt;
      &lt;/div&gt;

      {/* Display users */}
      &lt;div className="user-list"&gt;
        {users.map(user =&gt; (
          &lt;UserCard
            key={user.id}
            user={user}
            onEdit={(id) =&gt; updateUser(id, { experience: user.experience + 1 })}
            onDelete={deleteUser}
          /&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}`}
              explanation="Components become dynamic when you pass data to them and allow users to add, edit, and remove that data."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Data Management Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Add Skill to User:</label>
                  <div className="input-group">
                    <select 
                      onChange={(e) => {
                        const userId = parseInt(e.target.value)
                        const user = dynamicDataUsers.find(u => u.id === userId)
                        if (user) {
                          document.getElementById('skillUser').textContent = user.name
                        }
                      }}
                    >
                      <option value="">Select user</option>
                      {dynamicDataUsers.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                      ))}
                    </select>
                    <input 
                      value={dynamicDataNewSkill} 
                      onChange={(e) => setDynamicDataNewSkill(e.target.value)}
                      placeholder="New skill"
                    />
                    <button onClick={() => {
                      const select = document.querySelector('select')
                      const userId = parseInt(select.value)
                      if (userId && dynamicDataNewSkill) {
                        setDynamicDataUsers(prev => prev.map(user => 
                          user.id === userId 
                            ? { ...user, skills: [...user.skills, dynamicDataNewSkill] }
                            : user
                        ))
                        setDynamicDataNewSkill('')
                      }
                    }}>Add Skill</button>
                  </div>
                </div>
                <div className="demo-item">
                  <label>User Skills:</label>
                  <div className="user-list-display">
                    {dynamicDataUsers.map(user => (
                      <div key={user.id} className="user-card-display">
                        <strong>{user.name}</strong>
                        <span>Skills: {user.skills.join(', ') || 'None'}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Sort Users:</label>
                  <div className="button-group">
                    <button onClick={() => setDynamicDataSortBy('name')}>By Name</button>
                    <button onClick={() => setDynamicDataSortBy('experience')}>By Experience</button>
                    <button onClick={() => setDynamicDataSortBy('role')}>By Role</button>
                  </div>
                  <div className="user-list-display">
                    {[...dynamicDataUsers].sort((a, b) => {
                      if (dynamicDataSortBy === 'name') return a.name.localeCompare(b.name)
                      if (dynamicDataSortBy === 'experience') return b.experience - a.experience
                      if (dynamicDataSortBy === 'role') return a.role.localeCompare(b.role)
                      return 0
                    }).map(user => (
                      <div key={user.id} className="user-card-display">
                        <strong>{user.name}</strong>
                        <span>{user.role}</span>
                        <span>{user.experience} years</span>
                      </div>
                    ))}
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

export default DynamicDataSection 