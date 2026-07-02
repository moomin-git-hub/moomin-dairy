/* Mo'min — offline service worker */
const C = "momin-v1";
const CORE = ["./", "./index.html", "./manifest.json", "./icon.svg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(CORE)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // o'z fayllarimiz: kesh-avval, so'ng tarmoq (to'liq oflayn ishlaydi)
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const cp = res.clone(); caches.open(C).then(c => c.put(req, cp)).catch(()=>{}); return res;
      }).catch(() => caches.match("./index.html")))
    );
  } else if (url.hostname.indexOf("fonts.g") === 0 || url.hostname.indexOf("fonts.gstatic") >= 0 || url.hostname.indexOf("fonts.googleapis") >= 0) {
    // shriftlar: tarmoq, keshga zaxira
    e.respondWith(
      fetch(req).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(req, cp)).catch(()=>{}); return res; })
        .catch(() => caches.match(req))
    );
  }
  // boshqa (Firebase, Wikipedia, Aladhan, Anthropic) — tarmoqqa tegmaymiz
});
