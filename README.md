# ResQWings (React + Vite + Tailwind + PWA)

This project is scaffolded manually to avoid interactive prompts and includes a PWA setup so users can install the app from the browser.

## Scripts

- `npm install` – install dependencies
- `npm run dev` – start the dev server
- `npm run build` – build for production
- `npm run preview` – preview the production build

## PWA

The app uses `vite-plugin-pwa` with `autoUpdate`. During development, the service worker is enabled via `devOptions.enabled`. The `Install App` button appears when the browser fires the `beforeinstallprompt` event.

Add PNG icons into `public/` and uncomment the icon entries in `vite.config.js` for best install UX. Recommended sizes: 192x192, 512x512, and a maskable 512x512.
