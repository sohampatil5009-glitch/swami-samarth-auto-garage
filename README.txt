# Swami Samarth Auto Garage — PWA package

## What is included
- `index.html`: your standalone garage app
- `manifest.webmanifest`: installable-app metadata
- `sw.js`: offline app-shell cache
- `icon.svg`: app icon

## Important limitations
- This package is prepared for PWA hosting, but it is not an APK.
- To install as a PWA, upload these files to a static HTTPS host (for example, GitHub Pages or another static host), then open the hosted URL in Chrome and choose **Install app** / **Add to Home screen**.
- Service workers generally do not run from a `file://` URL, so opening `index.html` directly does not activate PWA offline caching.
- Garage records are stored in browser localStorage on each device. This does **not** automatically sync data between your phone, your father's phone, and a PC. Keep regular backups using the app's backup feature.
- Printing uses the browser print dialog. An 80 mm thermal printer must be paired/installed with the phone or PC and selected in the print dialog; exact paper layout depends on the printer/browser driver.
