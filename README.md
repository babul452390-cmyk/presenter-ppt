# Presenter — Offline PPTX Viewer

Browser-based `.pptx` presenter — **সম্পূর্ণ offline**, কোনো server লাগে না।

## 🌐 Live App
👉 **[Open Presenter](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)**

## ✨ Features
- `.pptx` file open করে present করা
- Camera PiP (face bubble) সহ Screen Recording
- Presenter View (dual monitor)
- Annotations, drawings
- PWA — Home screen এ install করা যায়
- সম্পূর্ণ offline (Service Worker cache)

## 🚀 GitHub Pages Setup
1. এই repo fork বা upload করো
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Save করো — কয়েক মিনিটে live হবে

## 📱 Android এ Camera
`content://` বা `file://` URL এ camera কাজ করে না।  
GitHub Pages (`https://`) URL থেকে open করলে camera সহ সব feature কাজ করবে।

## 📦 Files
| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~164 KB | Main app |
| `lib-pptx.js` | ~624 KB | PPTX parser |
| `lib-jspdf.js` | ~1.5 MB | PDF export |
| `lib-h2c.js` | ~446 KB | html2canvas |
| `sw.js` | ~2 KB | Service Worker (offline cache) |
