import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

// from RW10D4 24:51
export default defineConfig({
  // vite uses this is a prefix for href and src URLs
  // 
  base: '/static/',
  build: {
    // this is the folder where vite will generate its output. Make sure django can serve files from here!
    outDir: '../navel/static',

    // delete the old build when creating the new build/
    // this is the default behavior unless outDir is outside of current directory
    emptyOutDir: true,
    sourcemap:true
  },
  plugins: [react()]
})

/* Default load SC 4/5/2023 7:37 PM
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/