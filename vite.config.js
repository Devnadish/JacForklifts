import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build:{
  //  outDir: 'dist',
  //  sourcemap:true,
  //  emptyOutDir: true,
  //  rollupOptions:{
  //     output: {
  //       entryFileNames:"[name].jsx",
  //       chunkFileNames:"[name].js",
  //       assetFileNames:"[name].[ext]"
  //     }
  //  }

  // }
  
})