# Mo'min — Kun tartibi (PWA)

Bu ilova endi to'liq **PWA (Progressive Web App)** — Chrome orqali kompyuter va
telefonga alohida dastur sifatida o'rnatiladi, oflayn ham ishlaydi.

## Fayl tuzilmasi

```
momin-pwa/
├── index.html          ← asosiy ilova
├── manifest.json        ← ilova nomi, rangi, ikonkalari
├── service-worker.js    ← oflayn kesh
└── icons/                ← barcha o'lchamdagi ikonkalar (72–512px + maskable)
```

**Muhim:** bu 4 ta narsa (index.html, manifest.json, service-worker.js, icons/)
bir xil papkada, bir-biriga nisbatan **shu joylashuvda** turishi shart —
chunki index.html ular ichidan nisbiy yo'l (`./manifest.json`,
`./icons/...`) bilan chaqiradi.

## Nega hoziroq "faylni ochsam" o'rnatilmayapti?

Chrome PWA'ni faqat **HTTPS** (yoki `localhost`) orqali ochilgan sahifada
o'rnatishga ruxsat beradi. Kompyuteringizda `index.html`ni ikki marta bosib
ochsangiz (`file:///...`), manifest va service worker ishlamaydi — bu
Chrome'ning xavfsizlik qoidasi, ilovaning kamchiligi emas.

Shuning uchun ilovani biror joyga **bepul hosting**ga qo'yish kerak. Eng
oson yo'llar:

### 1-variant: GitHub Pages (bepul, oson)
1. GitHub'da yangi repository yarating (masalan `momin`).
2. Shu papkadagi 4 ta narsani (index.html, manifest.json, service-worker.js,
   icons/) repo ildiziga yuklang.
3. Repo **Settings → Pages** → Source: `main` branch, `/ (root)` → Save.
4. Bir necha daqiqadan so'ng `https://username.github.io/momin/` manzili
   ishga tushadi.

### 2-variant: Netlify (bepul, drag-and-drop)
1. https://app.netlify.com/drop sahifasini oching.
2. Shu papkani (momin-pwa) to'g'ridan-to'g'ri sudrab tashlang.
3. Netlify avtomatik HTTPS manzil beradi — tayyor.

### 3-variant: Vercel, Cloudflare Pages — xuddi shunga o'xshash, bepul.

## O'rnatish (hosting qilingandan keyin)

**Kompyuterda (Windows / macOS / Linux, Chrome):**
1. Sayt manzilini oching.
2. Manzil satrining o'ng tarafida ⊕/⬇ belgisi chiqadi → bosing → "O'rnatish".
   (Yoki Sozlamalar sahifasidagi **"⬇ O'rnatish"** tugmasini bosing.)
3. Ilova endi alohida oyna sifatida ochiladi, Boshlash menyusi/Dock'da
   ikonkasi bo'ladi.

**Telefonda (Android, Chrome):**
1. Sayt manzilini oching.
2. Tepadagi ⋮ menyu → **"Ilova qo'shish"** yoki **"Bosh ekranga qo'shish"**.
3. Ikonka bosh ekranga tushadi, oddiy ilovadek ochiladi.

**iPhone (Safari):**
1. Sayt manzilini oching.
2. Pastdagi Ulashish (Share) tugmasi → **"Add to Home Screen"**.

## Oflayn ishlash

`service-worker.js` ilova qobig'ini (index.html) keshga saqlaydi — internet
uzilsa ham ilova ochiladi. Internet mavjud bo'lganda har safar eng yangi
versiya avtomatik yuklanadi.

## Ikonka

Ikonka ilovaning o'zidagi tong yarim oyi belgisi (`.mark` SVG) asosida
yaratildi — qorong'i ko'k fon (#0A0F1E) ustida oltin rang (#E7B45C) yarim oy.
`icons/` papkasida 72px dan 512px gacha barcha standart o'lchamlar, shuningdek
Android uchun **maskable** (doira/kvadrat ichiga moslashuvchi) versiyalari bor.
Agar ikonkani o'zgartirmoqchi bo'lsangiz — shunchaki `icons/icon-*.png`
fayllarini xohlagan rasmingiz bilan almashtiring (nomlari va o'lchamlari
bir xil qolsin).
