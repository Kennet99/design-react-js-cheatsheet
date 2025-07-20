import React, { useState } from 'react'
import { SyntaxExample, CodeExample } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function PowerApps() {
  // Interactive state for Power Apps examples
  const [powerAppsUser, setPowerAppsUser] = useState({ name: 'Designer', role: 'UX Designer', isAdmin: false })
  const [powerAppsFormData, setPowerAppsFormData] = useState({ projectName: '', clientName: '', budget: 0 })
  const [powerAppsCollection, setPowerAppsCollection] = useState([
    { id: 1, name: 'Homepage Redesign', status: 'In Progress', priority: 'High' },
    { id: 2, name: 'Mobile App Design', status: 'Completed', priority: 'Medium' },
    { id: 3, name: 'Brand Guidelines', status: 'Planning', priority: 'Low' }
  ])
  const [powerAppsFilter, setPowerAppsFilter] = useState('all')
  const [powerAppsTheme, setPowerAppsTheme] = useState('light')

  return (
    <div className="section">
      <h1>Power Apps & Power Fx</h1>
      <p>Bridging Power Apps concepts with React/JavaScript for designers</p>

      <div className="concept-card">
        <h2>Core Power Fx Functions</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Power Fx functions are like Figma's smart layout and component features - they help you find, filter, and transform data automatically, just like how Figma helps you organize and manage design elements.
        </div>
        <div className="syntax-example">
          <h4>Data Functions:</h4>
          <SyntaxExample
            code={`// Filter Function
// Syntax:
Filter(Source, Condition)
Filter(Source, ColumnName = Value)

// Examples:
Filter(Products, Category = "Electronics")
Filter(Products, Category = "Electronics" && Price > 100)
Filter(Projects, Status = "In Progress" && Priority = "High")

// LookUp Function
// Syntax:
LookUp(Source, Condition [, Result])
LookUp(Source, ColumnName = Value)
LookUp(Source, ColumnName = Value, ReturnColumn)

// Examples:
LookUp(Products, Category = "Electronics")
LookUp(Products, Category = "Electronics", Name)
LookUp(Projects, ID = 1, ProjectName)

// CountRows Function
// Syntax:
CountRows(Source)
CountRows(Filter(Source, Condition))

// Examples:
CountRows(Products)
CountRows(Filter(Products, Category = "Electronics"))

// Sum Function
// Syntax:
Sum(Source, ColumnName)
Sum(Filter(Source, Condition), ColumnName)

// Examples:
Sum(Products, Price)
Sum(Filter(Products, Category = "Electronics"), Price)

// First Function
// Syntax:
First(Source)
First(Sort(Source, ColumnName, SortOrder))

// Examples:
First(Products)
First(Sort(Products, Price, Descending))

// Sort Function
// Syntax:
Sort(Source, ColumnName, SortOrder)
Sort(Source, ColumnName, Ascending)

// Examples:
Sort(Products, Price, Descending)
Sort(Projects, DueDate, Ascending)`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Power Fx Function Input:</strong>
              <ul>
                <li><code>Source</code> (table) - Data source or collection</li>
                <li><code>Condition</code> (boolean) - Filter condition</li>
                <li><code>ColumnName</code> (string) - Column to filter/sort by</li>
                <li><code>Value</code> (any) - Value to match</li>
                <li><code>SortOrder</code> (enum) - Ascending/Descending</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Power Fx Function Output:</strong>
              <ul>
                <li><code>table</code> - Filtered/sorted collection</li>
                <li><code>record</code> - Single record from LookUp</li>
                <li><code>number</code> - Count or sum result</li>
                <li><code>any</code> - Specific column value</li>
                <li><code>blank</code> - No matching records</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx Data Functions for Design Projects
// 1. Filter Projects by Status
ActiveProjects = Filter(Projects, Status = "In Progress")

// 2. LookUp Project Details
CurrentProject = LookUp(Projects, ID = 1, ProjectName)
ProjectBudget = LookUp(Projects, ID = 1, Budget)

// 3. Count Projects by Category
DesignProjects = CountRows(Filter(Projects, Category = "Design"))
DevelopmentProjects = CountRows(Filter(Projects, Category = "Development"))

// 4. Sum Budget by Category
TotalDesignBudget = Sum(Filter(Projects, Category = "Design"), Budget)
TotalDevelopmentBudget = Sum(Filter(Projects, Category = "Development"), Budget)

// 5. Get Highest Priority Project
TopPriority = First(Sort(Projects, Priority, Descending))

// 6. Sort Projects by Due Date
UpcomingProjects = Sort(Projects, DueDate, Ascending)

// 7. Complex Filter with Multiple Conditions
UrgentDesignProjects = Filter(Projects, 
  Category = "Design" && 
  Priority = "High" && 
  Status = "In Progress"
)

// 8. LookUp with Multiple Conditions
DesignerProject = LookUp(Projects, 
  Category = "Design" && AssignedTo = "Sarah", 
  ProjectName
)

// JavaScript/React Equivalents
// 1. Array filtering
const activeProjects = projects.filter(p => p.status === "In Progress");

// 2. Array finding
const currentProject = projects.find(p => p.id === 1)?.projectName;
const projectBudget = projects.find(p => p.id === 1)?.budget;

// 3. Array counting
const designProjects = projects.filter(p => p.category === "Design").length;

// 4. Array reduction
const totalDesignBudget = projects
  .filter(p => p.category === "Design")
  .reduce((sum, p) => sum + p.budget, 0);

// 5. Array sorting and finding
const topPriority = [...projects]
  .sort((a, b) => b.priority.localeCompare(a.priority))[0];

// 6. Array sorting
const upcomingProjects = [...projects]
  .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));`}
              explanation="Power Fx provides declarative data functions that automatically update when data changes, similar to React's reactive data handling."
            />
          </div>
          <div className="output-panel">
            <h4>Interactive Data Functions Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Filter Projects by Status:</label>
                  <select 
                    id="statusFilter"
                    defaultValue="In Progress"
                    onChange={(e) => {
                      const status = e.target.value;
                      const filtered = powerAppsCollection.filter(p => p.status === status);
                      document.getElementById('filteredCount').textContent = filtered.length;
                      document.getElementById('filteredProjects').innerHTML = filtered.map(p => 
                        `<div style="margin: 4px 0; padding: 4px; background: rgba(255,255,255,0.1);">${p.name} - ${p.priority}</div>`
                      ).join('');
                    }}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Planning">Planning</option>
                  </select>
                  <div className="result">Count: <span id="filteredCount">1</span></div>
                  <div id="filteredProjects">
                    <div style={{margin: '4px 0', padding: '4px', background: 'rgba(255,255,255,0.1)'}}>
                      Homepage Redesign - High
                    </div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>LookUp Project by ID:</label>
                  <input 
                    type="number" 
                    id="lookupId"
                    defaultValue="1"
                    min="1"
                    max="3"
                    onChange={(e) => {
                      const id = parseInt(e.target.value);
                      const project = powerAppsCollection.find(p => p.id === id);
                      if (project) {
                        document.getElementById('lookupResult').textContent = `${project.name} (${project.status})`;
                      } else {
                        document.getElementById('lookupResult').textContent = 'Project not found';
                      }
                    }}
                  />
                  <div className="result">Result: <span id="lookupResult">Homepage Redesign (In Progress)</span></div>
                </div>
                <div className="demo-item">
                  <label>Count by Priority:</label>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '8px'}}>
                    <div style={{padding: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px', textAlign: 'center'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>High</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>
                        {powerAppsCollection.filter(p => p.priority === 'High').length}
                      </div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px', textAlign: 'center'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Medium</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>
                        {powerAppsCollection.filter(p => p.priority === 'Medium').length}
                      </div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px', textAlign: 'center'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Low</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>
                        {powerAppsCollection.filter(p => p.priority === 'Low').length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Power Fx vs JavaScript/JSX</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Power Fx is like Figma's smart components with formulas - declarative logic that updates automatically, similar to React's reactive nature.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax Comparison:</h4>
          <SyntaxExample
            code={`// Power Fx (Power Apps)
Label1.Text = "Hello, " & User().FullName
Button1.Visible = ThisItem.Status = "Active"
Gallery1.Items = Filter(Projects, Status = "In Progress")

// JavaScript/React Equivalent
const userName = user.fullName;
const buttonVisible = item.status === "Active";
const filteredProjects = projects.filter(p => p.status === "In Progress");`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Power Fx Input:</strong>
              <ul>
                <li><code>control.property</code> - Control property reference</li>
                <li><code>function()</code> - Built-in Power Fx function</li>
                <li><code>collection</code> - Data source reference</li>
                <li><code>variable</code> - Global or context variable</li>
                <li><code>expression</code> - Mathematical/logical expression</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Power Fx Output:</strong>
              <ul>
                <li><code>any</code> - Calculated property value</li>
                <li><code>boolean</code> - Conditional visibility/state</li>
                <li><code>collection</code> - Filtered/sorted data</li>
                <li><code>string</code> - Formatted text content</li>
                <li><code>number</code> - Calculated numeric value</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx Examples (Power Apps)
// 1. Text concatenation
Label1.Text = "Welcome, " & User().FullName & "!"

// 2. Conditional visibility
Button1.Visible = ThisItem.Status = "Active"

// 3. Data filtering
Gallery1.Items = Filter(Projects, Status = "In Progress")

// 4. Mathematical calculations
TotalCost.Text = Sum(ProjectCosts, Amount)

// 5. Date formatting
DueDate.Text = Text(Project.DueDate, "mmmm dd, yyyy")

// JavaScript/React Equivalents
// 1. Template literals
const welcomeText = \`Welcome, \${user.fullName}!\`;

// 2. Conditional rendering
const buttonVisible = item.status === "Active";

// 3. Array filtering
const filteredProjects = projects.filter(p => p.status === "In Progress");

// 4. Array reduction
const totalCost = projectCosts.reduce((sum, cost) => sum + cost.amount, 0);

// 5. Date formatting
const dueDate = new Date(project.dueDate).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});`}
              explanation="Power Fx uses declarative formulas similar to React's reactive nature, where changes automatically update the UI."
            />
</div>
          <div className="output-panel">
            <h4>Interactive Comparison:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>User Welcome (Power Fx style):</label>
                  <div className="result">
                    Welcome, {powerAppsUser.name} ({powerAppsUser.role})!
                  </div>
                </div>
                <div className="demo-item">
                  <label>Conditional Button (Power Fx style):</label>
                  <button 
                    style={{
                      backgroundColor: powerAppsUser.isAdmin ? '#3b82f6' : '#6b7280',
                      color: 'white',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: powerAppsUser.isAdmin ? 'pointer' : 'not-allowed'
                    }}
                    disabled={!powerAppsUser.isAdmin}
                  >
                    {powerAppsUser.isAdmin ? 'Admin Panel' : 'Access Denied'}
                  </button>
                </div>
                <div className="demo-item">
                  <label>Filtered Projects (Power Fx style):</label>
                  <select 
                    value={powerAppsFilter} 
                    onChange={(e) => setPowerAppsFilter(e.target.value)}
                  >
                    <option value="all">All Projects</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Planning">Planning</option>
                  </select>
                  <div className="result">
                    {powerAppsCollection
                      .filter(project => powerAppsFilter === 'all' || project.status === powerAppsFilter)
                      .map(project => (
                        <div key={project.id} style={{margin: '4px 0', padding: '4px', background: 'rgba(255,255,255,0.1)'}}>
                          {project.name} - {project.status}
                  </div>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="concept-card">
        <h2>Named Formulas (Power Fx) vs React Variables</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Named formulas are like Figma's component properties - reusable values that automatically update across your entire design system.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Power Fx Named Formulas (App.Formulas)
App.Formulas: 
  PrimaryColor = ColorValue("#3b82f6");
  SecondaryColor = ColorValue("#6b7280");
  IsDarkMode = User().Email = "admin@company.com";
  ThemeBackground = If(IsDarkMode, ColorValue("#1f2937"), ColorValue("#ffffff"));

// React Equivalent (useState + useMemo)
const [isDarkMode, setIsDarkMode] = useState(false);
const primaryColor = "#3b82f6";
const secondaryColor = "#6b7280";
const themeBackground = useMemo(() => 
  isDarkMode ? "#1f2937" : "#ffffff", [isDarkMode]
);`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>Named Formula Input:</strong>
              <ul>
                <li><code>formulaName</code> (string) - Formula identifier</li>
                <li><code>expression</code> (any) - Power Fx expression</li>
                <li><code>function()</code> - Built-in Power Fx function</li>
                <li><code>control.property</code> - Control property reference</li>
                <li><code>conditional</code> - If/Then/Else logic</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>Named Formula Output:</strong>
              <ul>
                <li><code>any</code> - Calculated formula value</li>
                <li><code>color</code> - Color value for theming</li>
                <li><code>boolean</code> - Conditional logic result</li>
                <li><code>string</code> - Text or formatted value</li>
                <li><code>number</code> - Calculated numeric value</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx Named Formulas (Design System)
App.Formulas:
  // Color System
  PrimaryBlue = ColorValue("#3b82f6");
  SecondaryGray = ColorValue("#6b7280");
  SuccessGreen = ColorValue("#10b981");
  WarningOrange = ColorValue("#f59e0b");
  ErrorRed = ColorValue("#ef4444");
  
  // Typography
  HeadingFont = "Inter";
  BodyFont = "Inter";
  LargeText = 24;
  MediumText = 16;
  SmallText = 14;
  
  // Spacing
  LargeSpacing = 24;
  MediumSpacing = 16;
  SmallSpacing = 8;
  
  // Theme Logic
  IsDarkMode = User().Email = "admin@company.com";
  BackgroundColor = If(IsDarkMode, ColorValue("#1f2937"), ColorValue("#ffffff"));
  TextColor = If(IsDarkMode, ColorValue("#f9fafb"), ColorValue("#111827"));
  
  // Component States
  ButtonHoverColor = ColorFade(PrimaryBlue, 20%);
  CardShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";

// React Equivalent (Design System)
const theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#6b7280",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444"
  },
  typography: {
    headingFont: "Inter",
    bodyFont: "Inter",
    large: 24,
    medium: 16,
    small: 14
  },
  spacing: {
    large: 24,
    medium: 16,
    small: 8
  }
};

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return {
    ...theme,
    isDarkMode,
    backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
    textColor: isDarkMode ? "#f9fafb" : "#111827",
    buttonHoverColor: fade(theme.colors.primary, 0.2),
    cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  };
};`}
              explanation="Named formulas in Power Fx provide a centralized way to manage design tokens and theme logic, similar to React's theme systems."
            />
          </div>
          <div className="output-panel">
            <h4>Design System Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Theme Toggle (Power Fx style):</label>
                  <button 
                    onClick={() => setPowerAppsTheme(powerAppsTheme === 'light' ? 'dark' : 'light')}
                    style={{
                      backgroundColor: powerAppsTheme === 'dark' ? '#3b82f6' : '#6b7280',
                      color: 'white',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '4px'
                    }}
                  >
                    Switch to {powerAppsTheme === 'light' ? 'Dark' : 'Light'} Mode
                  </button>
                </div>
                <div className="demo-item">
                  <label>Design Token Usage:</label>
                  <div style={{
                    padding: '16px',
                    backgroundColor: powerAppsTheme === 'dark' ? '#1f2937' : '#ffffff',
                    color: powerAppsTheme === 'dark' ? '#f9fafb' : '#111827',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: powerAppsTheme === 'dark' ? '#374151' : '#e5e7eb'
                  }}>
                    <h3 style={{fontSize: '24px', margin: '0 0 8px 0'}}>Design System Card</h3>
                    <p style={{fontSize: '16px', margin: '0 0 16px 0'}}>This demonstrates how named formulas work like design tokens.</p>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <button style={{backgroundColor: '#3b82f6', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px'}}>
                        Primary
                      </button>
                      <button style={{backgroundColor: '#6b7280', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px'}}>
                        Secondary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>User-Defined Functions (UDFs) vs React Custom Hooks</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> UDFs are like custom Figma plugins - reusable functions that extend the platform's capabilities with your own logic.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Power Fx UDF (App.Formulas)
App.Formulas:
  CalculateProjectProgress(project) = 
    CountRows(Filter(project.Tasks, Status = "Completed")) / 
    CountRows(project.Tasks) * 100;
  
  FormatCurrency(amount) = 
    Text(amount, "[$-en-US]$#,##0.00");
  
  GetUserRole(userEmail) = 
    Switch(userEmail,
      "admin@company.com", "Administrator",
      "designer@company.com", "Designer",
      "Developer"
    );

// React Custom Hooks Equivalent
const useProjectProgress = (project) => {
  const completedTasks = project.tasks.filter(task => task.status === "Completed");
  const progress = (completedTasks.length / project.tasks.length) * 100;
  return progress;
};

const useCurrencyFormatter = () => {
  return (amount) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

const useUserRole = () => {
  return (userEmail) => {
    switch(userEmail) {
      case "admin@company.com": return "Administrator";
      case "designer@company.com": return "Designer";
      default: return "Developer";
    }
  };
};`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>UDF Input:</strong>
              <ul>
                <li><code>parameter</code> (any) - Function parameter</li>
                <li><code>collection</code> (table) - Data source</li>
                <li><code>expression</code> (any) - Power Fx expression</li>
                <li><code>conditional</code> - If/Then/Else logic</li>
                <li><code>function()</code> - Built-in function calls</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>UDF Output:</strong>
              <ul>
                <li><code>any</code> - Calculated function result</li>
                <li><code>number</code> - Numeric calculations</li>
                <li><code>string</code> - Formatted text</li>
                <li><code>boolean</code> - Logical operations</li>
                <li><code>collection</code> - Filtered data</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx UDFs for Design Workflows
App.Formulas:
  // Design Project Management
  CalculateDesignProgress(project) = 
    Switch(project.Phase,
      "Research", 10,
      "Wireframes", 30,
      "Mockups", 60,
      "Prototyping", 80,
      "Final", 100,
      0
    );
  
  GetPriorityColor(priority) = 
    Switch(priority,
      "High", ColorValue("#ef4444"),
      "Medium", ColorValue("#f59e0b"),
      "Low", ColorValue("#10b981"),
      ColorValue("#6b7280")
    );
  
  FormatDesignDate(date) = 
    Text(date, "mmmm dd, yyyy");
  
  GetClientStatus(client) = 
    If(CountRows(Filter(client.Projects, Status = "Active")) > 0,
      "Active",
      "Inactive"
    );
  
  CalculateProjectBudget(project) = 
    Sum(project.Expenses, Amount);

// React Custom Hooks for Design Workflows
const useDesignProgress = () => {
  return (project) => {
    const phaseProgress = {
      "Research": 10,
      "Wireframes": 30,
      "Mockups": 60,
      "Prototyping": 80,
      "Final": 100
    };
    return phaseProgress[project.phase] || 0;
  };
};

const usePriorityColor = () => {
  return (priority) => {
    const colors = {
      "High": "#ef4444",
      "Medium": "#f59e0b", 
      "Low": "#10b981"
    };
    return colors[priority] || "#6b7280";
  };
};

const useDesignDateFormatter = () => {
  return (date) => new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

const useClientStatus = () => {
  return (client) => {
    const hasActiveProjects = client.projects.some(p => p.status === "Active");
    return hasActiveProjects ? "Active" : "Inactive";
  };
};

const useProjectBudget = () => {
  return (project) => {
    return project.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };
};`}
              explanation="UDFs in Power Fx provide reusable business logic, similar to custom hooks in React for design workflows and data processing."
            />
          </div>
          <div className="output-panel">
            <h4>Design Workflow Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Project Progress Calculator:</label>
                  <select 
                    id="projectPhase"
                    defaultValue="Mockups"
                    onChange={(e) => {
                      const phase = e.target.value;
                      const progress = {
                        "Research": 10,
                        "Wireframes": 30,
                        "Mockups": 60,
                        "Prototyping": 80,
                        "Final": 100
                      }[phase] || 0;
                      document.getElementById('progressDisplay').textContent = progress + '%';
                    }}
                  >
                    <option value="Research">Research</option>
                    <option value="Wireframes">Wireframes</option>
                    <option value="Mockups">Mockups</option>
                    <option value="Prototyping">Prototyping</option>
                    <option value="Final">Final</option>
                  </select>
                  <div className="result">Progress: <span id="progressDisplay">60%</span></div>
                </div>
                <div className="demo-item">
                  <label>Priority Color Mapping:</label>
                  <div style={{display: 'flex', gap: '8px', marginTop: '8px'}}>
                    {['High', 'Medium', 'Low'].map(priority => {
                      const color = {
                        "High": "#ef4444",
                        "Medium": "#f59e0b",
                        "Low": "#10b981"
                      }[priority];
  return (
                        <div key={priority} style={{
                          backgroundColor: color,
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}>
                          {priority}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="demo-item">
                  <label>Budget Calculator:</label>
                  <div className="input-group">
                    <input 
                      type="number" 
                      placeholder="Expense 1" 
                      id="expense1"
                      defaultValue="500"
                    />
                    <input 
                      type="number" 
                      placeholder="Expense 2" 
                      id="expense2"
                      defaultValue="300"
                    />
                    <button onClick={() => {
                      const exp1 = parseInt(document.getElementById('expense1').value) || 0;
                      const exp2 = parseInt(document.getElementById('expense2').value) || 0;
                      document.getElementById('budgetTotal').textContent = '$' + (exp1 + exp2);
                    }}>Calculate</button>
                  </div>
                  <div className="result">Total Budget: <span id="budgetTotal">$800</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>User-Defined Types (UDTs) vs TypeScript Interfaces</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> UDTs are like Figma component properties with specific constraints - they define the structure and validation for your data, just like component properties define what can be configured.
        </div>
        <div className="syntax-example">
          <h4>Basic Syntax:</h4>
          <SyntaxExample
            code={`// Power Fx UDT (App.Formulas)
App.Formulas:
  // Design Project Type
  DesignProject = {
    Name: Text,
    Client: Text,
    StartDate: Date,
    DueDate: Date,
    Budget: Number,
    Status: Choice(["Planning", "In Progress", "Completed"]),
    Priority: Choice(["Low", "Medium", "High"]),
    Team: Table
  };
  
  // Design Asset Type
  DesignAsset = {
    Name: Text,
    Type: Choice(["Logo", "Icon", "Illustration", "Mockup"]),
    Format: Choice(["SVG", "PNG", "JPG", "PDF"]),
    FileSize: Number,
    Tags: Table
  };

// TypeScript Interface Equivalent
interface DesignProject {
  name: string;
  client: string;
  startDate: Date;
  dueDate: Date;
  budget: number;
  status: 'Planning' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  team: TeamMember[];
}

interface DesignAsset {
  name: string;
  type: 'Logo' | 'Icon' | 'Illustration' | 'Mockup';
  format: 'SVG' | 'PNG' | 'JPG' | 'PDF';
  fileSize: number;
  tags: string[];
}`}
            language="javascript"
          />
        </div>
        <div className="io-specification">
          <h4>Input/Output Specification:</h4>
          <div className="io-grid">
            <div className="io-input">
              <strong>UDT Input:</strong>
              <ul>
                <li><code>typeName</code> (string) - Type identifier</li>
                <li><code>propertyName</code> (string) - Property name</li>
                <li><code>dataType</code> (type) - Power Fx data type</li>
                <li><code>constraints</code> (choice) - Value restrictions</li>
                <li><code>validation</code> (formula) - Validation rules</li>
              </ul>
            </div>
            <div className="io-output">
              <strong>UDT Output:</strong>
              <ul>
                <li><code>type</code> - Defined data structure</li>
                <li><code>validation</code> - Type validation rules</li>
                <li><code>constraints</code> - Value constraints</li>
                <li><code>structure</code> - Property definitions</li>
                <li><code>error</code> - Validation error messages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx UDTs for Design Systems
App.Formulas:
  // Design Token Type
  DesignToken = {
    Name: Text,
    Category: Choice(["Color", "Typography", "Spacing", "Shadow"]),
    Value: Text,
    Description: Text,
    Usage: Text
  };
  
  // Component Type
  DesignComponent = {
    Name: Text,
    Category: Choice(["Button", "Card", "Input", "Navigation"]),
    Variants: Table,
    Props: Table,
    Documentation: Text
  };
  
  // Brand Guidelines Type
  BrandGuideline = {
    Section: Choice(["Colors", "Typography", "Logo", "Spacing"]),
    Title: Text,
    Description: Text,
    Examples: Table,
    Rules: Table
  };

// TypeScript Interfaces for Design Systems
interface DesignToken {
  name: string;
  category: 'Color' | 'Typography' | 'Spacing' | 'Shadow';
  value: string;
  description: string;
  usage: string;
}

interface DesignComponent {
  name: string;
  category: 'Button' | 'Card' | 'Input' | 'Navigation';
  variants: ComponentVariant[];
  props: ComponentProp[];
  documentation: string;
}

interface BrandGuideline {
  section: 'Colors' | 'Typography' | 'Logo' | 'Spacing';
  title: string;
  description: string;
  examples: Example[];
  rules: Rule[];
}

// Usage Examples
const primaryColor: DesignToken = {
  name: "Primary Blue",
  category: "Color",
  value: "#3b82f6",
  description: "Main brand color for primary actions",
  usage: "Buttons, links, and primary UI elements"
};

const buttonComponent: DesignComponent = {
  name: "Button",
  category: "Button",
  variants: [
    { name: "Primary", style: "filled" },
    { name: "Secondary", style: "outlined" }
  ],
  props: [
    { name: "variant", type: "string", required: false },
    { name: "size", type: "string", required: false }
  ],
  documentation: "Standard button component with multiple variants"
};`}
              explanation="UDTs in Power Fx provide type safety and structure for design systems, similar to TypeScript interfaces in React applications."
            />
          </div>
          <div className="output-panel">
            <h4>Design System Type Demo:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Design Token Creation:</label>
                  <div style={{display: 'grid', gap: '8px', marginBottom: '16px'}}>
                    <input placeholder="Token Name" defaultValue="Primary Blue" />
                    <select defaultValue="Color">
                      <option value="Color">Color</option>
                      <option value="Typography">Typography</option>
                      <option value="Spacing">Spacing</option>
                      <option value="Shadow">Shadow</option>
                    </select>
                    <input placeholder="Value" defaultValue="#3b82f6" />
                    <textarea placeholder="Description" defaultValue="Main brand color for primary actions" />
                  </div>
                  <div className="result" style={{
                    padding: '12px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    borderRadius: '4px',
                    textAlign: 'center'
                  }}>
                    Primary Blue: #3b82f6
                  </div>
                </div>
                <div className="demo-item">
                  <label>Component Type Validation:</label>
                  <div style={{display: 'grid', gap: '8px'}}>
                    <input placeholder="Component Name" defaultValue="Button" />
                    <select defaultValue="Button">
                      <option value="Button">Button</option>
                      <option value="Card">Card</option>
                      <option value="Input">Input</option>
                      <option value="Navigation">Navigation</option>
                    </select>
                    <div className="result" style={{fontSize: '12px', color: '#6b7280'}}>
                      ✓ Valid component type structure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concept-card">
        <h2>Data vs Design Use Cases</h2>
        <div className="figma-analogy">
          <strong>Figma Analogy:</strong> Just like Figma can be used for both data visualization and pure design, Power Apps bridges business data with design workflows.
        </div>
        <div className="interactive-example">
          <div className="code-panel">
            <CodeExample
              code={`// Power Fx - Data Use Case (Project Management)
App.Formulas:
  // Calculate project metrics
  TotalProjects = CountRows(Projects);
  ActiveProjects = CountRows(Filter(Projects, Status = "In Progress"));
  CompletionRate = (CountRows(Filter(Projects, Status = "Completed")) / TotalProjects) * 100;
  
  // Budget tracking
  TotalBudget = Sum(Projects, Budget);
  SpentBudget = Sum(ProjectExpenses, Amount);
  RemainingBudget = TotalBudget - SpentBudget;
  
  // Team utilization
  TeamWorkload = CountRows(Filter(ProjectAssignments, Status = "Active"));
  AvailableResources = TotalTeamMembers - TeamWorkload;

// Power Fx - Design Use Case (Design System Management)
App.Formulas:
  // Design token management
  ColorTokens = Filter(DesignTokens, Category = "Color");
  TypographyTokens = Filter(DesignTokens, Category = "Typography");
  SpacingTokens = Filter(DesignTokens, Category = "Spacing");
  
  // Component usage tracking
  ComponentUsage = CountRows(ComponentInstances);
  MostUsedComponent = First(Sort(ComponentUsage, Count, Descending));
  
  // Design consistency score
  ConsistencyScore = (CountRows(ConsistentElements) / CountRows(AllElements)) * 100;
  
  // Brand compliance
  CompliantDesigns = CountRows(Filter(Designs, BrandCompliant = true));
  ComplianceRate = (CompliantDesigns / CountRows(Designs)) * 100;

// React Equivalent - Data Use Case
const useProjectMetrics = () => {
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === "In Progress").length;
  const completionRate = (projects.filter(p => p.status === "Completed").length / totalProjects) * 100;
  
  return { totalProjects, activeProjects, completionRate };
};

// React Equivalent - Design Use Case
const useDesignSystem = () => {
  const colorTokens = designTokens.filter(token => token.category === "Color");
  const typographyTokens = designTokens.filter(token => token.category === "Typography");
  const componentUsage = componentInstances.length;
  
  return { colorTokens, typographyTokens, componentUsage };
};`}
              explanation="Power Fx excels at both business data processing and design system management, providing a unified platform for designers and developers."
            />
          </div>
          <div className="output-panel">
            <h4>Use Case Comparison:</h4>
            <div className="output-content">
              <div className="demo-controls">
                <div className="demo-item">
                  <label>Data Use Case - Project Metrics:</label>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px'}}>
                    <div style={{padding: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Total Projects</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>12</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Active</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>5</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Completion Rate</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>58%</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Budget Used</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>$24.5K</div>
                    </div>
                  </div>
                </div>
                <div className="demo-item">
                  <label>Design Use Case - Design System:</label>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
                    <div style={{padding: '8px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Color Tokens</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>24</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Components</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>18</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Consistency</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>92%</div>
                    </div>
                    <div style={{padding: '8px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px'}}>
                      <div style={{fontSize: '12px', color: '#6b7280'}}>Brand Compliance</div>
                      <div style={{fontSize: '18px', fontWeight: 'bold'}}>98%</div>
                    </div>
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

export default PowerApps