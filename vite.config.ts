import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'sitemap.xml'],
      manifest: {
        name: 'Ajay Thanki - Portfolio',
        short_name: 'AT Portfolio',
        description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
        theme_color: '#0F172A',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  base: '/portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input:{
        main: path.resolve(__dirname, 'index.html'),
        404: path.resolve(__dirname, '404.html') 
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['@radix-ui/react-dropdown-menu', '@radix-ui/react-slot'],
        },
      },
    },
  },
});
