import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@components' : path.resolve(__dirname, './src/components'),
      '@elements' : path.resolve(__dirname, './src/elements'),
      '@services' : path.resolve(__dirname, './src/services')
    },
  },
  plugins: [react()],
})
