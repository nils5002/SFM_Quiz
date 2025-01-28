import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'https://github.com/Makc240305/Counter-App.git',
  plugins: [react()],
})
