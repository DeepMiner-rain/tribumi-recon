/**
 * Centralized image exports
 * 
 * This file exports all image URLs for easy import across the application.
 * Images are currently hosted on Unsplash CDN.
 * 
 * Future: Replace with local imports when images are downloaded to /src/assets/images/
 */

// Vehicle Images
export const vehicleImages = {
  toyotaAlphard: 'https://images.unsplash.com/photo-1689182441262-64e78e223584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBhbHBoYXJkJTIwbHV4dXJ5JTIwd2hpdGV8ZW58MXx8fHwxNzY0OTE0NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  hondaVezel: 'https://images.unsplash.com/photo-1759367202095-01e3bcf1106a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMHZlemVsJTIwaHlicmlkJTIwcmVkfGVufDF8fHx8MTc2NDkxNDY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  mercedesE300: 'https://images.unsplash.com/photo-1711716854806-189ae6524a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJjZWRlcyUyMGJlbnolMjBlJTIwY2xhc3MlMjBibGFja3xlbnwxfHx8fDE3NjQ5MTQ2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  bmw330i: 'https://images.unsplash.com/photo-1609781465248-63a3b89d9060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibXclMjAzJTIwc2VyaWVzJTIwd2hpdGV8ZW58MXx8fHwxNzY0OTE0NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  toyotaLandCruiser: 'https://images.unsplash.com/photo-1643580356145-45297d3077cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBsYW5kJTIwY3J1aXNlciUyMHdoaXRlfGVufDF8fHx8MTc2NDkxNDY0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  nissanSerena: 'https://images.unsplash.com/photo-1688489191142-9a3f8d36b2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaXNzYW4lMjBzZXJlbmElMjBibGFja3xlbnwxfHx8fDE3NjQ5MTQ2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  mazdaCX60: 'https://images.unsplash.com/photo-1659123780680-5ae0c388dcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXpkYSUyMGN4NSUyMHJlZHxlbnwxfHx8fDE3NjQ5MTQ2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  audiA6: 'https://images.unsplash.com/photo-1624893101114-c0a7c3bfe3de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpJTIwYTYlMjBibGFja3xlbnwxfHx8fDE3NjQ5MTQ2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  lexusRX450h: 'https://images.unsplash.com/photo-1742941129482-843e7492aa0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXh1cyUyMHJ4JTIwaHlicmlkfGVufDF8fHx8MTc2NDkxNDY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
  porscheMacan: 'https://images.unsplash.com/photo-1710042871028-a26849edc0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwbWFjYW4lMjBibHVlfGVufDF8fHx8MTc2NDkxNDY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
}

// Hero Images
export const heroImages = {
  carShowroom: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80',
  luxuryCars: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1920&q=80',
  carImport: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=1920&q=80',
}

// Country Flags (using emoji or can be replaced with SVG paths)
export const countryFlags = {
  japan: '🇯🇵',
  uk: '🇬🇧',
  australia: '🇦🇺',
  malaysia: '🇲🇾',
}

// Helper function to get vehicle image by ID
export const getVehicleImage = (vehicleId: string): string => {
  const imageMap: Record<string, string> = {
    'jpn-001': vehicleImages.toyotaAlphard,
    'jpn-002': vehicleImages.hondaVezel,
    'uk-001': vehicleImages.mercedesE300,
    'uk-002': vehicleImages.bmw330i,
    'aus-001': vehicleImages.toyotaLandCruiser,
    'jpn-003': vehicleImages.nissanSerena,
    'jpn-004': vehicleImages.mazdaCX60,
    'uk-003': vehicleImages.audiA6,
    'jpn-005': vehicleImages.lexusRX450h,
    'uk-004': vehicleImages.porscheMacan,
  }
  
  return imageMap[vehicleId] || vehicleImages.toyotaAlphard
}
