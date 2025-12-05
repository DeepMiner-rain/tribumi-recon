# 🚗 Tribumi Recon - Car Import Platform

> **From Far Away, To Your Driveway**

Malaysia's premier platform for importing premium vehicles from Japan, United Kingdom & Australia.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-proprietary-red.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.5.3-blue.svg)
![Tailwind](https://img.shields.io/badge/tailwind-4.0.0-cyan.svg)

## ✨ Features

### 🌏 Multi-Country Import
- **Japan**: Access to USS Auctions, JAA, Honda Verified, Toyota Certified
- **United Kingdom**: BCA Auctions, Motorway, Verified Dealers with Full Service History
- **Australia**: Pickles Auctions, Manheim, PPSR Checked, Compliance Ready

### 💰 Transparent Pricing & Calculators
- **Import Cost Calculator**: Complete breakdown from purchase to delivery
- **Loan Calculator**: Monthly payment estimations with adjustable parameters
- **Real-time Calculations**: Instant cost estimates based on vehicle details
- **No Hidden Fees**: All costs disclosed upfront

### 🔍 Vehicle Verification Tools
- Japan Car Check (Scrut.my integration)
- UK Car Check (AutoTrader integration)
- Australia PPSR verification
- JPJ Malaysia plate number lookup
- Agent verification system

### 🎨 Modern User Experience
- **Dark Mode**: Full dark theme support with toggle (default)
- **Responsive Design**: Optimized for desktop, tablet & mobile
- **Smooth Animations**: Professional transitions and hover effects
- **Interactive UI**: Dynamic filtering and search

### 📋 6-Step Purchase Flow
1. **Reservation**: Book your vehicle online with deposit
2. **Purchase**: Contract agreement and vehicle securing at auction
3. **Shipping**: Professional sea freight to Port Klang
4. **RMCD Clearance**: Complete customs clearance and duty payment
5. **Inspection**: Comprehensive quality checks by certified professionals
6. **Delivery**: Direct to your driveway anywhere in Malaysia

## 🚀 Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS 4.0 (latest)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form 7.53
- **Notifications**: Sonner
- **Build Tool**: Vite 5
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/DeepMiner-rain/tribumi-recon.git

# Navigate to project directory
cd tribumi-recon

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
tribumi-recon/
├── src/
│   ├── components/
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Vehicles.tsx
│   │   │   ├── Discovery.tsx
│   │   │   ├── Calculator.tsx
│   │   │   ├── LoanCalculator.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── ContactUs.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Badge.tsx
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Logo.tsx            # Brand logo
│   │   └── BrandLogos.tsx      # Brand showcase
│   ├── config/
│   │   ├── siteConfig.ts       # Centralized configuration
│   │   └── theme.ts            # Theme settings
│   ├── contexts/
│   │   ├── AuthContext.tsx     # Authentication state
│   │   └── ThemeContext.tsx    # Dark mode state
│   ├── data/
│   │   └── vehicles.ts         # Vehicle catalog (10 cars)
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── styles/
│   │   └── globals.css         # Global styles & Tailwind
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite config
└── .gitignore
```

## 🔐 Certifications

- ✅ **AP Approved**: Approved Permit Holder (AP/2024/12345)
- ✅ **PEKEMA Member**: Malaysian Import-Export Association
- ✅ **JPJ Registered**: Road Transport Department of Malaysia

## 🎯 Why Tribumi?

1. **Licensed & Certified**: AP approved with full regulatory compliance
2. **Professional Inspection**: Comprehensive reports by certified professionals
3. **Transparent Pricing**: No markup, no hidden charges
4. **Authentic Mileage**: Guaranteed original mileage with full verification
5. **Visual Documentation**: High-quality photos and videos before shipping
6. **On-The-Road Price**: Clear pricing including all Malaysian taxes and fees

## 🌈 Supported Brands

Toyota • Honda • Nissan • Hyundai • Mazda • Subaru • Mercedes-Benz • BMW • Audi • Porsche • Volkswagen • Lexus • Mitsubishi • Land Rover • Ford • Chevrolet • Jeep • Jaguar • Volvo • Tesla

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section, features, process flow, brand showcase |
| `/vehicles` | Vehicles | Vehicle catalog with filtering and search |
| `/discovery` | Discovery | Vehicle verification and research tools |
| `/calculator` | Import Calculator | Complete cost breakdown calculator |
| `/loan-calculator` | Loan Calculator | Monthly payment estimator |
| `/about` | About Us | Company information and certifications |
| `/contact` | Contact Us | Contact form and company details |
| `/faq` | FAQ | Frequently asked questions |
| `/dashboard` | Dashboard | User account and order tracking |

## 🎨 Design System

### Colors
- **Primary**: Yellow (#EAB308) - Brand color
- **Secondary**: Blue (#3B82F6)
- **Accent**: Orange (#F59E0B)
- **Background**: White / Gray-900 (dark mode)
- **Text**: Gray-900 / Gray-100 (dark mode)

### Typography
- **Font Family**: System font stack (San Francisco, Segoe UI, Roboto)
- **Headings**: 3rem - 1rem (responsive)
- **Body**: 1rem with 1.6 line-height
- **Weight**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Components
- Button variants: primary, secondary, outline, ghost
- Card with optional hover effect
- Input with label and error states
- Badge with 5 color variants

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Type checking
npx tsc --noEmit

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.tribumi.com
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Build Output

The production build will be in the `dist/` directory.

## 📊 Current Status

- ✅ Core configuration (Vite, TypeScript, Tailwind CSS 4.0)
- ✅ All 9 pages implemented
- ✅ Responsive design
- ✅ Dark mode with persistence
- ✅ Vehicle catalog with 10 sample cars
- ✅ Import cost calculator with real calculations
- ✅ Loan calculator with adjustable parameters
- ✅ Contact form with validation
- ✅ FAQ with category filtering
- ✅ Dashboard with authentication
- ✅ Brand logos showcase (20 brands)
- ✅ Centralized site configuration

## 🔮 Future Enhancements

- [ ] Backend API integration (Supabase/Node.js)
- [ ] Real vehicle images from Unsplash
- [ ] Payment gateway integration
- [ ] WhatsApp integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Vehicle comparison tool
- [ ] Blog/News section
- [ ] Multilingual support (EN/BM/CN)
- [ ] PWA support

## 📄 License

Copyright © 2024 Tribumi Ventures Sdn Bhd. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 🤝 Contact

- **Company**: Tribumi Ventures Sdn Bhd
- **Registration**: 202401234567 (1234567-X)
- **AP Number**: AP/2024/12345
- **Address**: Level 12, Menara Tribumi, Jalan Ampang, 50450 Kuala Lumpur
- **Phone**: +60 3-2181 8888
- **Email**: hello@tribumi.com
- **WhatsApp**: +60 12-345 6789

### Social Media
- Facebook: [@tribumirecon](https://facebook.com/tribumirecon)
- Instagram: [@tribumirecon](https://instagram.com/tribumirecon)
- TikTok: [@tribumirecon](https://tiktok.com/@tribumirecon)
- YouTube: [@tribumirecon](https://youtube.com/@tribumirecon)

---

Built with ❤️ by the Tribumi Ventures Team | **From Far Away, To Your Driveway**