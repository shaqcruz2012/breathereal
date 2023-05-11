import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

/*
So here's the issue:
I'm trying to use dotenv to hide the IPGEOLOCATION secret keys, but it's not being called in my utilities.jsx. Thought

*/

// dotenv.config({ path: '../../.env'})
dotenv.config({ path: './.env' })


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
