import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '@shared': `${path.resolve(__dirname, './src/shared/')}`,
        '@entities': `${path.resolve(__dirname, './src/entities/')}`,
        '@features': `${path.resolve(__dirname, './src/features/')}`,
        '@widgets': `${path.resolve(__dirname, './src/widgets/')}`,
        '@app': `${path.resolve(__dirname, './src/app/')}`,
        '@assets': `${path.resolve(__dirname, './src/assets/')}`,
        '@styles': `${path.resolve(__dirname, './src/app/styles')}`,
        '@pages': `${path.resolve(__dirname, './src/pages')}`,
      },
    },
  };
});
