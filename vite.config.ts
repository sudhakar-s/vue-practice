import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { FontaineTransform } from 'fontaine'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    // FontaineTransform.vite({
    //   fallbacks: ["Helvetica", "Arial", "sans-serif"],
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    open: true,
    proxy: {
      '/api': 'http://localhost:4001',
    },
  },
})