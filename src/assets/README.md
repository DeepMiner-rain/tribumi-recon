# Assets Directory

This directory contains all static assets including images, icons, and other media files.

## Directory Structure

```
assets/
├── images/
│   ├── vehicles/       # Vehicle photos
│   ├── brands/         # Brand logos
│   ├── hero/           # Hero section images
│   └── misc/           # Other images
└── icons/              # Custom icons/SVGs
```

## Image Sources

### Vehicle Images
All vehicle images are sourced from Unsplash with proper attribution.
Images are optimized for web display (1080px width).

### Brand Logos
Brand logos should be official logos or icon representations.
Prefer SVG format for scalability.

## Usage

### Method 1: Direct Import (Recommended for /src/assets)
```tsx
import toyotaAlphard from '../assets/images/vehicles/toyota-alphard.jpg'

<img src={toyotaAlphard} alt="Toyota Alphard" />
```

### Method 2: Via Image Assets Index
```tsx
import { vehicleImages } from '../assets/images'

<img src={vehicleImages.toyotaAlphard} alt="Toyota Alphard" />
```

## Image Optimization

- All images should be optimized before adding
- Recommended max width: 1920px
- Use WebP format when possible
- Compress images to reduce file size

## Attribution

Images from Unsplash require attribution:
- Photos by Unsplash contributors
- Licensed under Unsplash License
