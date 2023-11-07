import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        "@shared": `${path.resolve(__dirname, "./src/shared/")}`,
        "@entites": `${path.resolve(__dirname, "./src/entites/")}`,
        "@features": `${path.resolve(__dirname, "./src/features/")}`,
        "@widgets": `${path.resolve(__dirname, "./src/widgets/")}`,
        "@app": `${path.resolve(__dirname, "./src/app/")}`,
        "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
        "@styles": `${path.resolve(__dirname, "./src/shared/styles")}`,
      },
    },
  }
})