import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // Site URL for deployment
  site: 'https://emmanuelre8.vercel.app',
  
  // Output mode for static generation
  output: 'static',
  
  // Integrations
  integrations: [react()],
  
  // Build output directory
  outDir: './dist',
  
  // Vite configuration
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
