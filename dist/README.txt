Place your branding assets here:

- logo.png -> used in the TopBar and as the website favicon.
  Recommended size: ~256px height, any width. Transparent background preferred.

- icons/pwa-192x192.png -> Android/Chrome install icon (square PNG)
- icons/pwa-512x512.png -> Android/Chrome install icon (square PNG)
- icons/maskable-512x512.png -> Maskable icon for Android (square PNG)

Note: The PWA manifest currently uses temporary remote icons so the app is installable during development. Once you add the PNGs above, update vite.config.js to reference these local files and remove the temporary URLs.
