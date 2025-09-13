import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: { enabled: true },
      manifest: {
        name: 'ResQWings',
        short_name: 'ResQWings',
        description: 'ResQWings progressive web app',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0ea5e9',
        icons: [
          // Ensure PNG icons are present for installability in Chromium
          { src: 'https://via.placeholder.com/192.png?text=ResQ', sizes: '192x192', type: 'image/png' },
          { src: 'https://via.placeholder.com/512.png?text=ResQ', sizes: '512x512', type: 'image/png' },
          // Using your provided logo file for PWA icons (JPEG). For best results, supply square PNGs later.
          { src: '/logo.png.jpg', sizes: '192x192', type: 'image/jpeg' },
          { src: '/logo.png.jpg', sizes: '512x512', type: 'image/jpeg' },
        ],
      },
    }),
  ],
})
