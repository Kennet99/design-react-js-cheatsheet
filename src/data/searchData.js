// Search data for global search functionality
export const searchData = [
  {
    page: 'Home',
    path: '/',
    sections: [
      { title: 'Welcome to React JS Cheatsheet', type: 'page-title' },
      { title: 'Getting Started', type: 'section' },
      { title: 'Quick Start Guide', type: 'section' },
      { title: 'What You\'ll Learn', type: 'section' }
    ]
  },
  {
    page: 'JS Fundamentals',
    path: '/js-fundamentals',
    sections: [
      { title: 'JavaScript Fundamentals', type: 'page-title' },
      // Main sections
      { title: 'JavaScript Syntax', type: 'section' },
      { title: 'JavaScript Operators', type: 'section' },
      { title: 'Variables & Data Types', type: 'section' },
      { title: 'Objects', type: 'section' },
      { title: 'Functions', type: 'section' },
      { title: 'Methods', type: 'section' },
      { title: 'Classes', type: 'section' },
      { title: 'Constructors & Properties', type: 'section' },
      { title: 'Events', type: 'section' },
      { title: 'Parameters & Arguments', type: 'section' },
      { title: 'Primitive vs Reference Data Types', type: 'section' },
      // Syntax subsections
      { title: 'Console Output', type: 'subsection' },
      { title: 'Numbers', type: 'subsection' },
      { title: 'Variables', type: 'subsection' },
      { title: 'Strings', type: 'subsection' },
      { title: 'Arithmetic Operators', type: 'subsection' },
      { title: 'Comments', type: 'subsection' },
      { title: 'Assignment Operators', type: 'subsection' },
      { title: 'String Interpolation', type: 'subsection' },
      { title: 'let Keyword', type: 'subsection' },
      { title: 'const Keyword', type: 'subsection' },
      { title: 'if Statement', type: 'subsection' },
      { title: 'else if / else', type: 'subsection' },
      { title: 'switch Statement', type: 'subsection' },
      { title: 'Ternary Operator', type: 'subsection' },
      { title: '== vs ===', type: 'subsection' },
      { title: 'Logical Operators', type: 'subsection' },
      { title: 'Nullish Coalescing Operator (??)', type: 'subsection' },
      { title: 'Function Declaration', type: 'subsection' },
      { title: 'Anonymous Functions', type: 'subsection' },
      { title: 'Arrow Functions', type: 'subsection' },
      { title: 'Function Parameters & Return', type: 'subsection' },
      { title: 'Scope', type: 'subsection' },
      { title: 'Block vs Global Scope', type: 'subsection' },
      { title: 'Closures', type: 'subsection' },
      { title: 'Hoisting', type: 'subsection' },
      { title: 'Arrays', type: 'subsection' },
      { title: 'Array .length & Index', type: 'subsection' },
      { title: 'Array Methods: push, pop, shift, unshift, concat', type: 'subsection' },
      { title: 'Looping Through Arrays', type: 'subsection' },
      { title: 'While Loop', type: 'subsection' },
      { title: 'Do...While Loop', type: 'subsection' },
      { title: 'For Loop', type: 'subsection' },
      { title: 'for...in & for...of Loops', type: 'subsection' },
      { title: 'Break & Continue', type: 'subsection' },
      { title: 'Array Methods: map, forEach, filter, reduce', type: 'subsection' },
      { title: 'Callback Functions', type: 'subsection' },
      { title: 'Objects', type: 'subsection' },
      { title: 'Object Properties & Methods', type: 'subsection' },
      { title: 'Shorthand Object Creation & Destructuring', type: 'subsection' },
      { title: 'Getters & Setters', type: 'subsection' },
      { title: 'this Keyword', type: 'subsection' },
      { title: 'Classes', type: 'subsection' },
      { title: 'Class Inheritance (extends)', type: 'subsection' },
      { title: 'Export & Import (ES6 Modules)', type: 'subsection' },
      { title: 'CommonJS Modules (require/module.exports)', type: 'subsection' },
      { title: 'Promises', type: 'subsection' },
      { title: 'Async/Await', type: 'subsection' },
      { title: 'JSON', type: 'subsection' },
      { title: 'XMLHttpRequest', type: 'subsection' },
      { title: 'fetch API', type: 'subsection' },
      { title: 'Error Handling (try/catch)', type: 'subsection' },
      // Operators subsections
      { title: 'Assignment Operator (=)', type: 'subsection' },
      { title: 'Equality Comparison Operators (==, !=, ===, !==)', type: 'subsection' },
      { title: 'Comparison Operators (>, <, >=, <=)', type: 'subsection' },
      { title: 'Math Operators (+, -, *, /, %, **, - (unary))', type: 'subsection' },
      { title: 'Math Assignment Operators (+=, -=, *=, /=, %=, **=)', type: 'subsection' },
      { title: 'Increment & Decrement Operators (++/--)', type: 'subsection' },
      { title: 'String Concatenation Operator (+)', type: 'subsection' },
      { title: 'Logical Operators (&&, ||, !)', type: 'subsection' },
      { title: 'Logical Assignment Operators (&&=, ||=)', type: 'subsection' },
      { title: 'Double Negation (!!)', type: 'subsection' },
      { title: 'Ternary Operator (?:)', type: 'subsection' },
      { title: 'Spread Operator (...)', type: 'subsection' },
      { title: 'Bitwise Operators (&, |, ^, ~, <<, >>, >>>)', type: 'subsection' },
      { title: 'Bitwise Assignment Operators (&=, |=, ^=, <<=, >>=, >>>=)', type: 'subsection' },
      { title: 'Nullish Coalescing Operator (??)', type: 'subsection' },
      { title: 'Nullish Assignment Operator (??=)', type: 'subsection' },
      { title: 'Property Access Operator (.)', type: 'subsection' },
      { title: 'Optional Chaining Operator (?.)', type: 'subsection' },
      { title: 'Comma Operator (,)', type: 'subsection' },
      { title: 'Arrow Function Operator (=>)', type: 'subsection' }
    ]
  },
  {
    page: 'React Core',
    path: '/react-core',
    sections: [
      { title: 'React Core Concepts', type: 'page-title' },
      { title: 'What is React?', type: 'section' },
      { title: 'JSX - JavaScript XML', type: 'section' },
      { title: 'Component Types', type: 'section' },
      { title: 'Fragments & Multiple Elements', type: 'section' },
      { title: 'Conditional Rendering', type: 'section' },
      { title: 'Variables & State', type: 'section' },
      { title: 'Arrow Functions', type: 'section' },
      { title: 'Ternary Operator', type: 'section' },
      { title: 'Logical AND (&&) Operator', type: 'section' },
      { title: 'Template Literals', type: 'section' },
      { title: 'Array Methods', type: 'section' },
      { title: 'Destructuring', type: 'section' }
    ]
  },
  {
    page: 'Components',
    path: '/components',
    sections: [
      { title: 'React Components', type: 'page-title' },
      { title: 'Props Deep Dive', type: 'section' },
      { title: 'Component Composition Patterns', type: 'section' },
      { title: 'Component Best Practices', type: 'section' }
    ]
  },
  {
    page: 'Hooks',
    path: '/hooks',
    sections: [
      { title: 'React Hooks', type: 'page-title' },
      { title: 'useState Hook Deep Dive', type: 'section' },
      { title: 'useEffect Hook Deep Dive', type: 'section' },
      { title: 'Additional Hooks', type: 'section' },
      { title: 'Custom Hooks', type: 'section' }
    ]
  },
  {
    page: 'Data Handling',
    path: '/data-handling',
    sections: [
      { title: 'Data Handling in React', type: 'page-title' },
      { title: 'Mapping Arrays', type: 'section' },
      { title: 'Filtering Data', type: 'section' },
      { title: 'Conditional Rendering', type: 'section' },
      { title: 'Key-Value Pairs & Object Manipulation', type: 'section' },
      { title: 'Button State Control', type: 'section' }
    ]
  },
  {
    page: 'Events & Interactions',
    path: '/events-interactions',
    sections: [
      { title: 'Events and Interactions', type: 'page-title' },
      { title: 'Event Handlers', type: 'section' },
      { title: 'Form Handling', type: 'section' },
      { title: 'State Updates', type: 'section' }
    ]
  },
  {
    page: 'Navigation & Routing',
    path: '/navigation-routing',
    sections: [
      { title: 'Navigation and Routing', type: 'page-title' },
      { title: 'React Router Basics', type: 'section' },
      { title: 'Dynamic Routes & Parameters', type: 'section' },
      { title: 'Protected Routes & Authentication', type: 'section' },
      { title: 'Navigation Patterns', type: 'section' }
    ]
  },
  {
    page: 'Power Apps',
    path: '/power-apps',
    sections: [
      { title: 'Power Apps Integration', type: 'page-title' },
      { title: 'Core Power Fx Functions', type: 'section' },
      { title: 'Power Fx vs JavaScript/JSX', type: 'section' },
      { title: 'Named Formulas (Power Fx) vs React Variables', type: 'section' },
      { title: 'User-Defined Functions (UDFs) vs React Custom Hooks', type: 'section' },
      { title: 'User-Defined Types (UDTs) vs TypeScript Interfaces', type: 'section' },
      { title: 'Dataverse Functions & Design Integration', type: 'section' },
      { title: 'Dataverse Functions - Design Context', type: 'section' },
      { title: 'Data vs Design Use Cases', type: 'section' },
      { title: 'HTML Text Controls in Power Apps', type: 'section' }
    ]
  },
  {
    page: 'Styling & Design',
    path: '/styling-design',
    sections: [
      { title: 'Styling and Design', type: 'page-title' },
      { title: 'CSS-in-JS (Styled Components)', type: 'section' },
      { title: 'CSS Modules & Scoped Styling', type: 'section' },
      { title: 'Utility-First CSS (Tailwind)', type: 'section' },
      { title: 'Responsive Design Patterns', type: 'section' }
    ]
  },
  {
    page: 'HTML & CSS',
    path: '/html-css',
    sections: [
      { title: 'HTML & CSS Cheatsheet', type: 'page-title' },
      { title: 'HTML Elements Reference', type: 'section' },
      { title: 'CSS Properties Reference', type: 'section' },
      { title: 'Quick Reference', type: 'section' }
    ]
  },
  {
    page: 'CSS Frameworks',
    path: '/css-frameworks',
    sections: [
      { title: 'CSS Frameworks', type: 'page-title' },
      { title: 'CSS Custom Properties & Variables', type: 'section' },
      { title: 'CSS Preprocessors & Mixins', type: 'section' },
      { title: 'CSS Frameworks & Libraries', type: 'section' },
      { title: 'Modern CSS Features', type: 'section' },
      { title: 'Quick Reference', type: 'section' }
    ]
  },
  {
    page: 'Figma Mapping',
    path: '/figma-mapping',
    sections: [
      { title: 'Figma to React Mapping', type: 'page-title' },
      { title: 'Design Tokens', type: 'section' },
      { title: 'Component Mapping', type: 'section' },
      { title: 'Layout Systems', type: 'section' },
      { title: 'Typography', type: 'section' },
      { title: 'Color Systems', type: 'section' },
      { title: 'Spacing Systems', type: 'section' },
      { title: 'Icon Systems', type: 'section' }
    ]
  }
]

// Search function that filters by title only
export const searchPages = (query) => {
  if (!query.trim()) return []
  
  const searchTerm = query.toLowerCase()
  const results = []
  
  searchData.forEach(pageData => {
    pageData.sections.forEach(section => {
      if (section.title.toLowerCase().includes(searchTerm)) {
        results.push({
          page: pageData.page,
          path: pageData.path,
          title: section.title,
          type: section.type
        })
      }
    })
  })
  
  return results.slice(0, 10) // Limit to 10 results
} 