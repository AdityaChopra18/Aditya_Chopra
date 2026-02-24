import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  IMPORTANT: Change '/my-portfolio/' to '/YOUR-REPO-NAME/'
// This must match your GitHub repository name exactly.
// Example: if your repo is github.com/john/dev-portfolio
// then set base: '/dev-portfolio/'

export default defineConfig({
  plugins: [react()],
  base: '/Aditya_Chopra/',
})
