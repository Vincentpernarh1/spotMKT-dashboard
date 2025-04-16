import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // optional, for cleaner imports like '@/components/Button'
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // 👈 this is the key!
  },
})
