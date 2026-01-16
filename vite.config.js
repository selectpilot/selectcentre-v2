import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable source maps for production debugging
    sourcemap: true,
    
    // Optimize bundle size
    rollupOptions: {
      output: {
        // Manual chunking for better caching
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
          utils: ['clsx', 'tailwind-merge']
        }
      }
    },
    
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Minimize CSS
    cssMinify: true,
    
    // Enable compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    }
  },
  
  // Performance optimizations
  server: {
    host: '0.0.0.0', // Bind to all interfaces for Docker
    port: 5173,
    hmr: {
      overlay: true,
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
      clientPort: 5173
    },
    // Disable CORS restrictions for local dev
    cors: true,
    // Allow all origins in development
    origin: '*'
  },
  
  // Asset handling
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp'],
  
  // Define global constants
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  }
})
