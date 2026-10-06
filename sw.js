const CACHE_NAME='swami-garage-v2';
const APP_FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE_NAME).then(x=>x.put(r,cp))}return res}).catch(()=>caches.match('./index.html'))))});
