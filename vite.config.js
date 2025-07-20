import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using HashRouter, so we don't need the base path for routing
  // The base path is still needed for asset loading on GitHub Pages
  base: '/design-react-js-cheatsheet/'
}) 