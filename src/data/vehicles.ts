export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  mileage: number;
  country: 'Japan' | 'UK' | 'Australia';
  transmission: 'Automatic' | 'Manual';
  fuelType: string;
  engineSize: string;
  color: string;
  bodyType: string;
  images: string[];
  status: 'New Arrived' | 'Available' | 'Reserved' | 'Sold' | 'In Transit';
  auction?: string;
  chassisNumber?: string;
  inspectionReport?: string;
  description: string;
}

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Alphard 2.5 SC',
    year: 2020,
    price: 280000,
    currency: 'MYR',
    mileage: 45000,
    country: 'Japan',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    engineSize: '2.5L',
    color: 'Pearl White',
    bodyType: 'MPV',
    images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800'],
    status: 'Available',
    auction: 'USS Tokyo',
    description: 'Well-maintained Toyota Alphard with full service history. Executive lounge package with luxury features.'
  },
  {
    id: '2',
    brand: 'Nissan',
    model: 'GT-R R35',
    year: 2019,
    price: 520000,
    currency: 'MYR',
    mileage: 28000,
    country: 'Japan',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    engineSize: '3.8L Twin Turbo',
    color: 'Gun Metallic',
    bodyType: 'Coupe',
    images: ['https://images.unsplash.com/photo-1742056024244-02a093dae0b5?w=800'],
    status: 'New Arrived',
    auction: 'USS Osaka',
    description: 'Legendary GT-R R35 in excellent condition. Premium edition with Recaro seats and Bose sound system.'
  },
  {
    id: '3',
    brand: 'Honda',
    model: 'Civic Type R FK8',
    year: 2021,
    price: 320000,
    currency: 'MYR',
    mileage: 15000,
    country: 'UK',
    transmission: 'Manual',
    fuelType: 'Petrol',
    engineSize: '2.0L Turbo',
    color: 'Championship White',
    bodyType: 'Hatchback',
    images: ['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'],
    status: 'Available',
    description: 'Pristine FK8 Type R with low mileage. Full Honda service history and warranty transferable.'
  },
  {
    id: '4',
    brand: 'Toyota',
    model: 'Land Cruiser 300 ZX',
    year: 2022,
    price: 680000,
    currency: 'MYR',
    mileage: 12000,
    country: 'Australia',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    engineSize: '3.3L Twin Turbo',
    color: 'Attitude Black',
    bodyType: 'SUV',
    images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'],
    status: 'Reserved',
    description: 'Brand new generation Land Cruiser 300. Luxury package with all modern safety features.'
  },
  {
    id: '5',
    brand: 'Mazda',
    model: 'RX-7 FD3S',
    year: 2002,
    price: 180000,
    currency: 'MYR',
    mileage: 68000,
    country: 'Japan',
    transmission: 'Manual',
    fuelType: 'Petrol',
    engineSize: '1.3L Rotary',
    color: 'Velocity Red',
    bodyType: 'Coupe',
    images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'],
    status: 'Available',
    auction: 'JAA',
    description: 'Classic RX-7 FD in excellent condition. Well-maintained rotary engine with documented service history.'
  },
  {
    id: '6',
    brand: 'Mercedes-Benz',
    model: 'C63 AMG',
    year: 2020,
    price: 450000,
    currency: 'MYR',
    mileage: 22000,
    country: 'UK',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    engineSize: '4.0L V8 Biturbo',
    color: 'Obsidian Black',
    bodyType: 'Sedan',
    images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'],
    status: 'Available',
    description: 'Powerful C63 AMG with full performance package. Premium Plus package with all options.'
  },
  {
    id: '7',
    brand: 'Subaru',
    model: 'WRX STI',
    year: 2018,
    price: 195000,
    currency: 'MYR',
    mileage: 35000,
    country: 'Japan',
    transmission: 'Manual',
    fuelType: 'Petrol',
    engineSize: '2.5L Turbo',
    color: 'WR Blue',
    bodyType: 'Sedan',
    images: ['https://images.unsplash.com/photo-1554744512-d6c603f27c54?w=800'],
    status: 'Available',
    auction: 'USS Saitama',
    description: 'Iconic WRX STI in signature blue. Modified with quality aftermarket parts, well documented.'
  },
  {
    id: '8',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2021,
    price: 850000,
    currency: 'MYR',
    mileage: 8000,
    country: 'UK',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    engineSize: '3.0L Twin Turbo',
    color: 'Racing Yellow',
    bodyType: 'Coupe',
    images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'],
    status: 'Available',
    description: 'Stunning 911 Carrera S with Sport Chrono package. Full Porsche warranty remaining.'
  }
];