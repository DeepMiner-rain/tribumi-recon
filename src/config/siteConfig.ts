// 网站配置文件 - 所有可修改的信息都在这里
// Site Configuration - All editable information is here

export const siteConfig = {
  // 公司信息 / Company Information
  company: {
    name: 'Tribumi',
    slogan: 'Import Your Dream, Drive Your Passion',
    established: '2025',
    description: 'Malaysia\'s trusted platform for importing quality reconditioned vehicles from Japan, UK, and Australia.',
  },

  // 联系信息 / Contact Information
  contact: {
    phone: '+60124122268',
    email: 'admin@tribumi.com',
    address: {
      street: 'No. 123, Jalan Recon Auto',
      area: 'Taman Industri Klang',
      city: 'Klang',
      state: 'Selangor',
      postcode: '41200',
      country: 'Malaysia',
    },
    businessHours: {
      weekdays: 'Mon - Fri: 9:00 AM - 6:00 PM',
      saturday: 'Sat: 9:00 AM - 2:00 PM',
      sunday: 'Sun: Closed',
    },
    whatsapp: '+60124122268',
  },

  // 社交媒体 / Social Media
  social: {
    facebook: 'https://facebook.com/tribumi',
    instagram: 'https://instagram.com/tribumi',
    tiktok: 'https://tiktok.com/@tribumi',
    youtube: 'https://youtube.com/@tribumi',
  },

  // 业务范围 / Business Scope
  markets: [
    {
      country: 'Japan',
      flag: '🇯🇵',
      description: 'Wide selection of JDM vehicles from trusted auctions',
      features: ['USS Auctions', 'JAA', 'Honda Verified', 'Toyota Certified'],
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      description: 'Premium UK imports, right-hand drive ready',
      features: ['BCA Auctions', 'Motorway', 'Verified Dealers', 'Full History'],
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      description: 'Quality Australian vehicles with detailed reports',
      features: ['Pickles Auctions', 'Manheim', 'PPSR Checked', 'Compliance Ready'],
    },
  ],

  // 车型种类 / Vehicle Types
  vehicleTypes: ['Sedan', 'SUV', 'MPV', 'Sports Car', 'Classic/Vintage'],

  // 费用计算 / Cost Calculation (可根据实际情况调整)
  costs: {
    shipping: {
      Japan: 12000,
      UK: 18000,
      Australia: 15000,
    },
    importDutyRate: 0.10, // 10%
    salesTaxRate: 0.10, // 10%
    customsClearance: 5000,
    jpjRegistration: 3000,
    puspakomInspection: 2000,
    insuranceRate: 0.02, // 2% of vehicle price
    agentFee: 3000,
    // 消费税率按引擎大小 / Excise duty rates by engine size
    exciseDutyRates: {
      '<1.8L': 0.65,
      '1.8-2.0L': 0.80,
      '2.0-2.5L': 1.00,
      '2.5-3.0L': 1.50,
      '>3.0L': 2.00,
    },
  },

  // 付款信息 / Payment Information
  payment: {
    depositPercentage: 10, // 10% deposit
    methods: ['Bank Transfer', 'Online Banking', 'Cashier\'s Cheque'],
    refundPolicy: 'Full refund before purchase confirmation, minus admin fee',
  },

  // 进口流程时间线 / Import Timeline
  timeline: {
    inspectionAndPurchase: '1-2 weeks',
    shipping: '3-5 weeks',
    clearanceAndRegistration: '1-2 weeks',
    total: '6-8 weeks',
  },

  // 服务特色 / Service Features
  services: {
    uniqueSellingPoints: [
      'Transparent pricing with no hidden fees',
      'Comprehensive inspection reports',
      'End-to-end import assistance',
      'Competitive exchange rates',
    ],
    afterSales: [
      'Registration assistance',
      'Insurance recommendations',
      'Maintenance guidance',
      'Warranty options available',
    ],
    warranty: {
      available: true,
      description: 'Warranty varies by vehicle. Extended warranty packages available.',
    },
    inspection: {
      prePurchase: true,
      preDelivery: true,
      description: 'Thorough inspection by certified professionals',
    },
  },

  // 认证信息 / Certifications
  certifications: [
    { name: 'AP Approved Permit', description: 'Licensed importer with government-approved permit' },
    { name: 'PEKEMA Member', description: 'Malaysian Import-Export Merchants Association' },
    { name: 'JPJ Registered', description: 'Road Transport Department Malaysia' },
  ],
};
