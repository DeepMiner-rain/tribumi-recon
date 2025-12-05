# Tribumi Recon - Car Import Platform

🚗 **Malaysia's trusted platform for importing quality reconditioned vehicles from Japan, UK, and Australia**

## 🎯 Project Overview

Tribumi Recon is a comprehensive car import website built with modern web technologies, featuring:
- 🌍 Vehicle catalog from Japan, UK & Australia
- 💰 Cost calculator and loan calculator
- 📱 Responsive design with Dark Mode support
- 🎥 Full-screen intro video player
- 🎨 Yellow-themed design with professional UI

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **UI Components**: Custom component library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Theme & Configuration

### Primary Color
The website uses **yellow** as the primary color theme:
- Primary: `#EAB308` (yellow-500)
- Dark backgrounds: `#111827` (gray-900)

### Dark Mode
Dark mode is **enabled by default** and uses localStorage to persist user preference.

### Site Configuration
All company information, contact details, and pricing are centralized in:
- `src/config/siteConfig.ts` - Company info, contact, markets, costs
- `src/config/theme.ts` - Color scheme and theme configuration

## 📁 Project Structure

```
tribumi-recon/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── LoginDialog.tsx
│   │   ├── ReservationDialog.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── VehicleCatalog.tsx
│   │   │   ├── VehicleDetails.tsx
│   │   │   ├── CostCalculator.tsx
│   │   │   ├── LoanCalculator.tsx
│   │   │   ├── UserDashboard.tsx
│   │   │   ├── Discovery.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── ContactUs.tsx
│   │   │   └── FAQPage.tsx
│   │   └── ui/
│   │       └── (shadcn/ui components)
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── config/
│   │   ├── siteConfig.ts
│   │   └── theme.ts
│   ├── data/
│   │   └── vehicles.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## ⚙️ Key Features

### 1. Homepage
- Full-screen intro video with skip/mute controls
- Hero section with company slogan: "From Far Away, To Your Driveway"
- Market cards (Japan, UK, Australia)
- Why Choose Us section (6 key features)
- Import process flow (6 steps)
- Popular car brands showcase with horizontal scroll
- Quick tools (Loan calculator, Car check, JPJ plates, etc.)

### 2. Vehicle Catalog
- Browse vehicles from all markets
- Filter by country, brand, price range, transmission
- Status badges (New Arrived, Available, Reserved, Sold)
- Vehicle cards with images and key specs

### 3. Cost Calculator
- Calculate total import costs
- Include shipping, duties, taxes, registration
- Breakdown by country and engine size
- Generate detailed cost reports

### 4. Loan Calculator
- Calculate monthly loan payments
- Adjust interest rate, down payment, loan period
- Visual amortization breakdown

### 5. User Dashboard
- View saved vehicles
- Track reservations
- Manage profile

## 🎬 Intro Video

The homepage features a full-screen intro video with:
- **Skip button** (top-right corner)
- **Mute/Unmute toggle** (bottom-right corner)
- Auto-hide after video ends
- Smooth transitions

To customize the video, edit the `videoUrl` in `src/components/pages/HomePage.tsx`

## 🔧 Configuration Guide

### Update Company Information

Edit `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  company: {
    name: 'Tribumi',
    slogan: 'Import Your Dream, Drive Your Passion',
    ...
  },
  contact: {
    phone: '+60124122268',
    email: 'admin@tribumi.com',
    ...
  },
  ...
}
```

### Update Costs & Pricing

Edit the `costs` section in `src/config/siteConfig.ts`:

```typescript
costs: {
  shipping: {
    Japan: 12000,
    UK: 18000,
    Australia: 15000,
  },
  importDutyRate: 0.10, // 10%
  salesTaxRate: 0.10, // 10%
  ...
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy with one click

**Important**: Make sure `@import "tailwindcss";` is at the top of `src/styles/globals.css`

### Build Settings

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## ⚠️ Important Notes

### Tailwind CSS v4
This project uses **Tailwind CSS v4** with CSS-first configuration. The `@import "tailwindcss";` statement **must** be at the top of `globals.css`.

### Logo Images
The logo files use `figma:asset` imports which only work in Figma Make environment. For production:
1. Export logo images from Figma
2. Place them in `public/logos/`
3. Update imports in `Header.tsx` and `Logo.tsx`:
   ```typescript
   import logoLight from "/logos/logo-light.png";
   import logoDark from "/logos/logo-dark.png";
   ```

### Car Brand Logos
Similar to the company logo, car brand logos use `figma:asset` imports. Update these in `HomePage.tsx` for production.

## 📝 Slogan

The official company slogan is:

> **"From Far Away, To Your Driveway"**

This slogan emphasizes the rhyming effect and the journey from international markets to the customer's home.

## 🎨 Brand Colors

- **Primary**: Yellow (#EAB308)
- **Background (Dark)**: Gray-900 (#111827)
- **Background (Light)**: White (#FFFFFF)
- **Accent**: Orange for "New Arrived" badges
- **Success**: Green for "Available" status

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔄 Sync Status

✅ **Synced from Figma Make (Primary Source)** - December 2024

Figma Make is the **primary development environment**. Changes should be made there and synced to GitHub.

## 📧 Contact

- **Phone**: +60124122268
- **Email**: admin@tribumi.com
- **Location**: Klang, Selangor, Malaysia

## 📄 License

All rights reserved © 2025 Tribumi

---

**Made with ❤️ for car enthusiasts in Malaysia**
