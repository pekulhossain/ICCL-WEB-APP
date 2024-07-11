import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  devServer: {
    bonjour: true,
  },
  plugins: [react()],
  assetsInclude: ['**/*.JPG']
})



