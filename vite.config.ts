import { join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      '@assets': join(__dirname, 'src/assets'),
      '@components': join(__dirname, 'src/components'),
      '@views': join(__dirname, 'src/views'),
    },
  },
})
