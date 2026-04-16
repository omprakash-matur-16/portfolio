import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/' on Vercel or local, but '/portfolio/' for GitHub Pages
  base: process.env.VERCEL ? '/' : '/portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
