const CACHE='freenet-sg-v12';
const ASSETS=['./','./index.html','./app.js','./manifest.webmanifest','./essential-knowledge.json'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try {
   const response=await fetch(event.request,{cache:'no-store'});
   if(response.ok)await cache.put(event.request,response.clone());
   return response;
  }catch{
   return await cache.match(event.request)||await caches.match(event.request)||Response.error();
  }
 })());
});
