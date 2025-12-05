# 🖼️ Image Management Guide

This guide explains how images are managed in the Tribumi Recon project.

## 📚 Current Setup (方案2)

### Directory Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── index.ts          # Centralized image exports
│   │   ├── .gitkeep          # Placeholder for git
│   │   └── README.md         # Assets documentation
│   └── ...
```

### Current Image Sources

**All images are currently hosted on Unsplash CDN:**
- ✅ No local storage needed
- ✅ High quality (1080px width)
- ✅ Fast CDN delivery
- ✅ Automatic optimization

---

## 🔄 How to Replace with Local Images

### Step 1: Create Directory Structure

```bash
cd src/assets/images
mkdir -p vehicles brands hero misc
```

### Step 2: Download Images

Download your vehicle images and place them in the appropriate folders:

```
src/assets/images/
├── vehicles/
│   ├── toyota-alphard.jpg
│   ├── honda-vezel.jpg
│   ├── mercedes-e300.jpg
│   ├── bmw-330i.jpg
│   ├── toyota-land-cruiser.jpg
│   ├── nissan-serena.jpg
│   ├── mazda-cx60.jpg
│   ├── audi-a6.jpg
│   ├── lexus-rx450h.jpg
│   └── porsche-macan.jpg
├── brands/
│   ├── toyota-logo.svg
│   ├── honda-logo.svg
│   └── ...
├── hero/
│   └── hero-bg.jpg
└── misc/
```

### Step 3: Update `src/assets/images/index.ts`

Replace the Unsplash URLs with local imports:

```typescript
// OLD (Unsplash URLs)
export const vehicleImages = {
  toyotaAlphard: 'https://images.unsplash.com/photo-...',
  // ...
}

// NEW (Local imports)
import toyotaAlphardImg from './vehicles/toyota-alphard.jpg'
import hondaVezelImg from './vehicles/honda-vezel.jpg'
import mercedesE300Img from './vehicles/mercedes-e300.jpg'
import bmw330iImg from './vehicles/bmw-330i.jpg'
import toyotaLandCruiserImg from './vehicles/toyota-land-cruiser.jpg'
import nissanSerenaImg from './vehicles/nissan-serena.jpg'
import mazdaCX60Img from './vehicles/mazda-cx60.jpg'
import audiA6Img from './vehicles/audi-a6.jpg'
import lexusRX450hImg from './vehicles/lexus-rx450h.jpg'
import porscheMacanImg from './vehicles/porsche-macan.jpg'

export const vehicleImages = {
  toyotaAlphard: toyotaAlphardImg,
  hondaVezel: hondaVezelImg,
  mercedesE300: mercedesE300Img,
  bmw330i: bmw330iImg,
  toyotaLandCruiser: toyotaLandCruiserImg,
  nissanSerena: nissanSerenaImg,
  mazdaCX60: mazdaCX60Img,
  audiA6: audiA6Img,
  lexusRX450h: lexusRX450hImg,
  porscheMacan: porscheMacanImg,
}

// Hero images
import heroBgImg from './hero/hero-bg.jpg'

export const heroImages = {
  carShowroom: heroBgImg,
  // ...
}
```

### Step 4: No Changes Needed in Components!

✅ Components already use the centralized import from `src/assets/images/index.ts`

```tsx
// vehicles.ts - Already configured correctly
import { vehicleImages } from '../assets/images'

// Home.tsx - Already configured correctly  
import { heroImages } from '../../assets/images'
```

The imports automatically switch from URLs to local images!

---

## 📦 Current Image Mapping

| Vehicle ID | Vehicle | Current Image Source |
|------------|---------|---------------------|
| jpn-001 | Toyota Alphard 2.5 SC | Unsplash |
| jpn-002 | Honda Vezel Hybrid Z | Unsplash |
| uk-001 | Mercedes-Benz E300 AMG Line | Unsplash |
| uk-002 | BMW 330i M Sport | Unsplash |
| aus-001 | Toyota Land Cruiser 300 GR Sport | Unsplash |
| jpn-003 | Nissan Serena e-Power Highway Star | Unsplash |
| jpn-004 | Mazda CX-60 XD Premium | Unsplash |
| uk-003 | Audi A6 45 TFSI Quattro S Line | Unsplash |
| jpn-005 | Lexus RX450h F Sport | Unsplash |
| uk-004 | Porsche Macan S | Unsplash |

---

## 🎨 Image Optimization Tips

### Recommended Specifications
- **Format**: JPEG for photos, SVG for logos
- **Width**: 1920px max (1080px recommended)
- **Quality**: 80-85% JPEG compression
- **File Size**: Keep under 500KB per image

### Tools for Optimization

**Online:**
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Modern image compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

**CLI:**
```bash
# Install ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Ubuntu

# Resize and compress
convert input.jpg -resize 1920x -quality 85 output.jpg
```

**Node.js:**
```bash
npm install sharp
```

```javascript
const sharp = require('sharp');

sharp('input.jpg')
  .resize(1920)
  .jpeg({ quality: 85 })
  .toFile('output.jpg');
```

---

## 🔐 Best Practices

### ✅ DO
- Use descriptive filenames: `toyota-alphard-2023.jpg`
- Optimize images before adding to repo
- Use WebP format for modern browsers (optional)
- Keep original high-res versions outside the repo
- Add alt text for accessibility

### ❌ DON'T
- Don't commit unoptimized images
- Don't use spaces in filenames
- Don't hardcode image paths in components
- Don't store images larger than 2000px width

---

## 🚀 Production Deployment

### Option 1: Keep Unsplash (Current)
✅ Pros:
- Zero storage cost
- CDN optimized
- No build size increase

❌ Cons:
- Dependent on external service
- Limited control over images

### Option 2: Local Images
✅ Pros:
- Full control
- Offline capability
- Custom branding

❌ Cons:
- Larger bundle size
- Need image optimization

### Option 3: Cloud Storage (Recommended for Production)

**Cloudinary:**
```typescript
const cloudinaryUrl = (publicId: string) => 
  `https://res.cloudinary.com/tribumi/image/upload/w_1080,q_auto,f_auto/${publicId}`

export const vehicleImages = {
  toyotaAlphard: cloudinaryUrl('vehicles/toyota-alphard'),
  // ...
}
```

**Supabase Storage:**
```typescript
import { supabase } from '../lib/supabase'

const getImageUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

export const vehicleImages = {
  toyotaAlphard: getImageUrl('vehicles', 'toyota-alphard.jpg'),
  // ...
}
```

---

## 🔧 Troubleshooting

### Issue: Images not showing after adding locally

**Solution:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Issue: Build fails with image imports

**Solution:** Make sure file extensions are correct:
```typescript
// Correct
import img from './image.jpg'  // .jpg, .jpeg, .png, .webp, .svg

// Wrong
import img from './image'  // Missing extension
```

### Issue: Images too large, slow loading

**Solution:** Optimize images before importing:
```bash
# Use sharp or imagemagick
sharp input.jpg --resize 1080 --quality 85 --output output.jpg
```

---

## 📝 Summary

✅ **Current Setup**: Unsplash CDN (方案2 with external URLs)  
✅ **Easy Switch**: Just replace URLs with imports in `index.ts`  
✅ **No Component Changes**: Centralized export system  
✅ **Production Ready**: Works with local, CDN, or cloud storage  

Need help? Check the main README or contact the dev team! 🚀
