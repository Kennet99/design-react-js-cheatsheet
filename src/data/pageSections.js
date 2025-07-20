// Page sections data for accordion navigation
export const pageSections = {
  'js-fundamentals': [
    { title: 'Variables', type: 'section', summary: 'Containers for storing data values that can be changed throughout your program.' },
    { title: 'Objects', type: 'section', summary: 'Collections of key-value pairs that group related data and functionality together.' },
    { title: 'Functions', type: 'section', summary: 'Reusable blocks of code that perform specific tasks and can return values.' },
    { title: 'Methods', type: 'section', summary: 'Functions that belong to objects and can access the object\'s properties and data.' },
    { title: 'Classes', type: 'section', summary: 'Blueprints for creating objects with shared properties and methods.' },
    { title: 'Constructors & Properties', type: 'section', summary: 'Special methods that initialize new objects and define their characteristics.' },
    { title: 'Events', type: 'section', summary: 'Actions or occurrences that trigger code execution, like clicks or form submissions.' },
    { title: 'Parameters & Arguments', type: 'section', summary: 'Values passed into functions to customize their behavior and output.' },
    { title: 'Primitive vs Reference Data Types', type: 'section', summary: 'How different data types are stored and copied in memory.' }
  ],
  'react-core': [
    { title: 'What is React?', type: 'section', summary: 'A JavaScript library for building user interfaces with reusable components.' },
    { title: 'JSX - JavaScript XML', type: 'section', summary: 'Syntax extension that allows you to write HTML-like code in JavaScript.' },
    { title: 'Component Types', type: 'section', summary: 'Different ways to create React components: function components and class components.' },
    { title: 'Fragments & Multiple Elements', type: 'section', summary: 'How to return multiple elements without adding extra DOM nodes.' },
    { title: 'Conditional Rendering', type: 'section', summary: 'Techniques to show or hide elements based on conditions and state.' },
    { title: 'Variables & State', type: 'section', summary: 'How to store and manage data that can change and trigger re-renders.' },
    { title: 'Arrow Functions', type: 'section', summary: 'Concise function syntax that preserves the context of \'this\' keyword.' },
    { title: 'Ternary Operator', type: 'section', summary: 'Shorthand conditional operator for inline if-else statements.' },
    { title: 'Logical AND (&&) Operator', type: 'section', summary: 'Conditional rendering technique that shows elements only when conditions are true.' },
    { title: 'Template Literals', type: 'section', summary: 'String literals that allow embedded expressions and multi-line strings.' },
    { title: 'Array Methods', type: 'section', summary: 'Built-in functions for transforming and manipulating arrays in React.' },
    { title: 'Destructuring', type: 'section', summary: 'Syntax for extracting values from objects and arrays into variables.' }
  ],
  'components': [
    { title: 'Props Deep Dive', type: 'section', summary: 'How to pass data between components and handle prop validation and defaults.' },
    { title: 'Component Composition Patterns', type: 'section', summary: 'Techniques for combining components to create complex UI structures.' },
    { title: 'Component Best Practices', type: 'section', summary: 'Guidelines for writing maintainable, reusable, and performant components.' }
  ],
  'hooks': [
    { title: 'useState Hook Deep Dive', type: 'section', summary: 'React hook for managing component state and triggering re-renders when data changes.' },
    { title: 'useEffect Hook Deep Dive', type: 'section', summary: 'Hook for handling side effects like API calls, subscriptions, and DOM manipulation.' },
    { title: 'Additional Hooks', type: 'section', summary: 'Other built-in React hooks like useContext, useRef, useMemo, and useCallback.' },
    { title: 'Custom Hooks', type: 'section', summary: 'How to create your own reusable hooks to extract and share stateful logic.' }
  ],
  'data-handling': [
    { title: 'Mapping Arrays', type: 'section', summary: 'Transforming arrays into React elements for dynamic list rendering.' },
    { title: 'Filtering Data', type: 'section', summary: 'Techniques for showing only specific data based on conditions and criteria.' },
    { title: 'Conditional Rendering', type: 'section', summary: 'Displaying different content based on data state and user interactions.' },
    { title: 'Key-Value Pairs & Object Manipulation', type: 'section', summary: 'Working with object data structures and accessing nested properties.' },
    { title: 'Button State Control', type: 'section', summary: 'Managing button interactions, loading states, and user feedback.' }
  ],
  'events-interactions': [
    { title: 'Event Handlers', type: 'section', summary: 'Functions that respond to user interactions like clicks, form submissions, and keyboard events.' },
    { title: 'Form Handling', type: 'section', summary: 'Managing form data, validation, and submission in React components.' },
    { title: 'State Updates', type: 'section', summary: 'Best practices for updating component state and handling asynchronous operations.' }
  ],
  'navigation-routing': [
    { title: 'React Router Basics', type: 'section', summary: 'Setting up client-side routing to navigate between different pages without page reloads.' },
    { title: 'Dynamic Routes & Parameters', type: 'section', summary: 'Creating routes that accept dynamic values and URL parameters.' },
    { title: 'Protected Routes & Authentication', type: 'section', summary: 'Controlling access to routes based on user authentication and permissions.' },
    { title: 'Navigation Patterns', type: 'section', summary: 'Common patterns for programmatic navigation and route management.' }
  ],
  'power-apps': [
    { title: 'Core Power Fx Functions', type: 'section', summary: 'Essential Power Fx functions for data manipulation and business logic in Power Apps.' },
    { title: 'Power Fx vs JavaScript/JSX', type: 'section', summary: 'Comparing Power Apps formula language with React JavaScript syntax and patterns.' },
    { title: 'Named Formulas (Power Fx) vs React Variables', type: 'section', summary: 'How Power Apps named formulas compare to React variable declarations and state management.' },
    { title: 'User-Defined Functions (UDFs) vs React Custom Hooks', type: 'section', summary: 'Creating reusable logic in Power Apps vs React custom hooks for shared functionality.' },
    { title: 'User-Defined Types (UDTs) vs TypeScript Interfaces', type: 'section', summary: 'Type definitions in Power Apps compared to TypeScript interfaces for type safety.' },
    { title: 'Dataverse Functions & Design Integration', type: 'section', summary: 'Using Dataverse functions to integrate design systems and maintain consistency.' },
    { title: 'Dataverse Functions - Design Context', type: 'section', summary: 'Applying Dataverse functions in design workflows and component management.' },
    { title: 'Data vs Design Use Cases', type: 'section', summary: 'Different applications of Power Fx for data processing versus design system management.' },
    { title: 'HTML Text Controls in Power Apps', type: 'section', summary: 'Using HTML, CSS, and JavaScript within Power Apps for custom UI components and styling.' }
  ],
  'styling-design': [
    { title: 'CSS-in-JS (Styled Components)', type: 'section', summary: 'Writing CSS directly in JavaScript components for scoped and dynamic styling.' },
    { title: 'CSS Modules & Scoped Styling', type: 'section', summary: 'CSS files that automatically scope styles to prevent naming conflicts.' },
    { title: 'Utility-First CSS (Tailwind)', type: 'section', summary: 'Using utility classes for rapid UI development and consistent design systems.' },
    { title: 'Responsive Design Patterns', type: 'section', summary: 'Techniques for creating layouts that adapt to different screen sizes and devices.' }
  ],
  'html-css': [
    { title: 'HTML Elements Reference', type: 'section', summary: 'Common HTML elements and their usage for structuring web content.' },
    { title: 'CSS Properties Reference', type: 'section', summary: 'Essential CSS properties for styling layout, typography, and visual effects.' },
    { title: 'Quick Reference', type: 'section', summary: 'Quick lookup guide for HTML and CSS syntax, properties, and common patterns.' }
  ],
  'css-frameworks': [
    { title: 'CSS Custom Properties & Variables', type: 'section', summary: 'Dynamic CSS variables that can be changed at runtime for theming and customization.' },
    { title: 'CSS Preprocessors & Mixins', type: 'section', summary: 'Advanced CSS tools like Sass and Less for more powerful styling capabilities.' },
    { title: 'CSS Frameworks & Libraries', type: 'section', summary: 'Pre-built CSS frameworks and libraries for rapid UI development.' },
    { title: 'Modern CSS Features', type: 'section', summary: 'Latest CSS features like Grid, Flexbox, and advanced selectors for modern layouts.' },
    { title: 'Quick Reference', type: 'section', summary: 'Quick reference guide for CSS frameworks, preprocessors, and modern CSS syntax.' }
  ],
  'figma-mapping': [
    { title: 'Design Tokens', type: 'section', summary: 'Reusable design values like colors, typography, and spacing that maintain consistency.' },
    { title: 'Component Mapping', type: 'section', summary: 'Translating Figma components into React components with proper structure and props.' },
    { title: 'Layout Systems', type: 'section', summary: 'Converting Figma layouts and grids into responsive CSS layouts and React components.' },
    { title: 'Typography', type: 'section', summary: 'Mapping Figma text styles to CSS typography properties and React typography components.' },
    { title: 'Color Systems', type: 'section', summary: 'Converting Figma color palettes into CSS variables and design tokens for consistent theming.' },
    { title: 'Spacing Systems', type: 'section', summary: 'Translating Figma spacing and sizing into CSS spacing utilities and layout systems.' },
    { title: 'Icon Systems', type: 'section', summary: 'Converting Figma icons into React icon components and SVG implementations.' }
  ]
} 