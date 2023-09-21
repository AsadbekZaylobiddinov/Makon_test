import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto' ,
      includeAssets: ['logo5.png', 'logo5.png', 'logo5.png'],
      manifest: {
        name: 'Makon',
        short_name: 'Makon',
        description: 'Makonda hamma narsa bor',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo5.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'logo256.png',
            sizes: '256x256',
            type: 'image/png'
          }

        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches: true
     }
    })
  ],
})
