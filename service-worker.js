self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('todo-cache-v1').then((cache) => {
        return cache.addAll([
          'index.html',
          'manifest.json',
          'style.css',
          'icon-192x192.png',
          'icon-512x512.png',
          // Add other assets as needed
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  