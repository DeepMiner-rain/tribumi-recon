# Images Folder

This folder contains all static images for the Tribumi Recon website.

## Structure

```
images/
├── logo-light.png          # Light theme logo
├── logo-dark.png           # Dark theme logo
├── brands/                 # Car brand logos
│   ├── toyota.png
│   ├── honda.png
│   ├── nissan.png
│   └── ...
└── vehicles/               # Vehicle images
    ├── japan/
    ├── uk/
    └── australia/
```

## How to Use

In your React components, reference images using absolute paths:

```tsx
// Example 1: Direct reference
<img src="/images/logo-light.png" alt="Logo" />

// Example 2: With ImageWithFallback component
<ImageWithFallback src="/images/brands/toyota.png" alt="Toyota" />
```

## Adding New Images

1. Upload your image files to this folder
2. Commit and push to GitHub
3. Vercel will automatically deploy the new images
4. Reference them in code using `/images/your-image.png`

## Image Requirements

- **Logos**: PNG with transparent background, recommended size 200x200px
- **Brand Logos**: PNG with transparent background, 100x100px
- **Vehicle Photos**: JPG, minimum 1200px width for good quality

## Current Status

The site currently uses:
- Text-based logo (yellow badge with "Tribumi Recon")
- Emoji icons for car brands
- Unsplash images for vehicle photos

You can replace these by uploading actual images to this folder.
