// No-op service worker — prevents Vue Router warnings from /sw.js requests
// These requests typically come from browser extensions or cached manifests
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))
