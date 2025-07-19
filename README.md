# React JS Cheatsheet for UX Designers

A comprehensive React JS cheatsheet that explains JavaScript and React concepts through the lens of Figma and design thinking. Perfect for UX designers learning to code!

## 🎨 Features

- **Figma Analogies**: Every programming concept is explained using familiar Figma terminology
- **Interactive Examples**: Live code examples with detailed explanations
- **Progressive Learning**: From JavaScript basics to advanced React concepts
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional design inspired by modern design tools

## 📚 What's Covered

### JavaScript Basics
- Variables (like text/color styles in Figma)
- Objects (like component instances)
- Functions (like reusable actions/plugins)
- Arrays and methods
- Events and handlers

### React Core Concepts
- Components (like Figma components)
- Props (like component properties)
- JSX (like design specs)
- State management
- Component lifecycle

### Advanced Topics
- React Hooks (useState, useEffect)
- Data handling with map() and filter()
- Component composition
- Event handling
- Conditional rendering

### Figma Mapping
- Direct comparisons between Figma features and React concepts
- Visual analogies for better understanding
- Practical examples of design-to-code translation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download this project**
   ```bash
   git clone <repository-url>
   cd react-js-cheatsheet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the cheatsheet

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with the production-ready files.

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. **Push your code to GitHub**
2. **Deploy automatically**
   ```bash
   npm run deploy
   ```
   This will build the project and deploy it to GitHub Pages.

3. **Your site will be available at**
   `https://yourusername.github.io/react-js-cheatsheet/`

### Option 2: Netlify (Free)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop the `dist` folder to Netlify**
   Or connect your GitHub repository for automatic deployments.

### Option 3: Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🛠️ Project Structure

```
react-js-cheatsheet/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎯 How to Use This Cheatsheet

1. **Start with the Home section** to get an overview
2. **Follow the navigation** from JavaScript Basics to React concepts
3. **Read the Figma analogies** to understand programming concepts
4. **Study the code examples** with their explanations
5. **Use it as a reference** when building your own React projects

## 💡 Learning Tips for UX Designers

- **Think in Components**: Just like Figma components, React components are reusable UI pieces
- **Props are Properties**: Like component properties in Figma, props customize your components
- **State is Interactive**: Like interactive properties in Figma, state makes your UI dynamic
- **Events are Interactions**: Like Figma interactions, events respond to user actions

## 🔧 Customization

### Adding New Sections

1. **Add a new section component** in `App.jsx`
2. **Add navigation item** to the `navItems` array
3. **Add the section to the main content area**
4. **Style as needed** in `App.css`

### Modifying Styles

The project uses CSS custom properties (variables) for consistent theming. Modify the `:root` section in `src/index.css` to change colors, spacing, and typography.

## 📖 Resources

- [React Official Documentation](https://react.dev/)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Figma Design System](https://www.figma.com/design-systems/)

## 🤝 Contributing

Feel free to contribute improvements, additional examples, or better Figma analogies!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎨💻** 