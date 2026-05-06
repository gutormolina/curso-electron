import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  main: {
    build: {
      externalizeDeps: true
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'resources',
            dest: '.'
          }
        ]
      })
    ]
  },
  preload: {},
  renderer: {
    define:{
      'process.platform': JSON.stringify(process.platform)
    },
    css: {
      postcss:{
        plugins: [
          tailwindcss({
            config: './src/renderer/tailwind.config.js'
          })
        ]
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
