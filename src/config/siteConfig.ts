export const siteConfig = {
  name: 'Tribumi Recon',
  tagline: 'From Far Away, To Your Driveway',
  description: "Malaysia's premier car import platform for premium vehicles from Japan, UK & Australia",
  
  company: {
    name: 'Tribumi Ventures Sdn Bhd',
    registration: '202401234567 (1234567-X)',
    apNumber: 'AP/2024/12345',
    address: 'Level 12, Menara Tribumi, Jalan Ampang, 50450 Kuala Lumpur, Malaysia',
    phone: '+60 3-2181 8888',
    email: 'hello@tribumi.com',
    whatsapp: '+60 12-345 6789',
  },
  
  social: {
    facebook: 'https://facebook.com/tribumirecon',
    instagram: 'https://instagram.com/tribumirecon',
    tiktok: 'https://tiktok.com/@tribumirecon',
    youtube: 'https://youtube.com/@tribumirecon',
  },
  
  countries: [
    {
      id: 'japan',
      name: 'Japan',
      flag: '🇯🇵',
      sources: ['USS Auctions', 'JAA', 'Honda Verified', 'Toyota Certified'],
      specialties: ['JDM Performance', 'Kei Cars', 'Hybrid Technology'],
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      sources: ['BCA Auctions', 'Motorway', 'Verified Dealers'],
      specialties: ['Luxury Sedans', 'Premium SUVs', 'Classic Cars'],
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      sources: ['Pickles Auctions', 'Manheim', 'PPSR Checked'],
      specialties: ['Right-Hand Drive', 'Utes & Trucks', 'Adventure SUVs'],
    },
  ],
  
  certifications: [
    { name: 'AP Approved', icon: '✓', description: 'Approved Permit Holder' },
    { name: 'PEKEMA Member', icon: '✓', description: 'Malaysian Import-Export Association' },
    { name: 'JPJ Registered', icon: '✓', description: 'Road Transport Department' },
  ],
  
  process: [
    { step: 1, title: 'Reservation', description: 'Book your dream car online', icon: 'Search' },
    { step: 2, title: 'Purchase', description: 'Secure the vehicle at auction', icon: 'ShoppingCart' },
    { step: 3, title: 'Shipping', description: 'Professional sea freight to Malaysia', icon: 'Ship' },
    { step: 4, title: 'RMCD', description: 'Customs clearance & duty payment', icon: 'FileText' },
    { step: 5, title: 'Inspection', description: 'Comprehensive quality check', icon: 'CheckCircle' },
    { step: 6, title: 'Delivery', description: 'Direct to your driveway', icon: 'Truck' },
  ],
  
  whyChooseUs: [
    { title: 'Licensed & Certified', description: 'AP approved with full regulatory compliance' },
    { title: 'Professional Inspection', description: 'Comprehensive reports by certified professionals' },
    { title: 'Transparent Pricing', description: 'No markup, no hidden charges' },
    { title: 'Authentic Mileage', description: 'Guaranteed original with full history' },
    { title: 'Visual Documentation', description: 'HD photos and videos before shipping' },
    { title: 'On-The-Road Price', description: 'Clear pricing including all Malaysian fees' },
  ],
}