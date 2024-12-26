import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://sxntiBG.github.io/portfolio',
  build: {
    outDir: 'dist',
  }
})
