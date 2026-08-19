import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración recomendada para GitHub Pages (base relativa para assets)
export default defineConfig({
  plugins: [react()],
  base: './',
})
