import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // needed for docker container to pick up changes (when saving and update the build immediately)
    },
  },
  base: "./", 
})
