import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockVehicles } from '../../data/vehicles';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Search, SlidersHorizontal } from 'lucide-react';

export function VehicleCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(mockVehicles.map(v => v.brand)));
    return ['all', ...uniqueBrands];
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(mockVehicles.map(v => v.year))).sort((a, b) => b - a);
    return ['all', ...uniqueYears.map(String)];
  }, []);

  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter(vehicle => {
      const matchesSearch = searchTerm === '' || 
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
      const matchesCountry = selectedCountry === 'all' || vehicle.country === selectedCountry;
      const matchesYear = selectedYear === 'all' || vehicle.year === parseInt(selectedYear);
      const matchesTransmission = selectedTransmission === 'all' || vehicle.transmission === selectedTransmission;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        matchesPrice = max ? (vehicle.price >= min && vehicle.price <= max) : vehicle.price >= min;
      }

      return matchesSearch && matchesBrand && matchesCountry && matchesYear && matchesTransmission && matchesPrice;
    });
  }, [searchTerm, selectedBrand, selectedCountry, selectedYear, selectedTransmission, priceRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrand('all');
    setSelectedCountry('all');
    setSelectedYear('all');
    setSelectedTransmission('all');
    setPriceRange('all');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Vehicle Catalog</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse our selection of imported vehicles from Japan, UK, and Australia</p>
      </div>

      {/* Filters */}
      <Card className="mb-8 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              <h2>Filters</h2>
            </div>
            <Button variant="ghost" onClick={resetFilters}>Reset All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="space-y-2 lg:col-span-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <Input
                  id="search"
                  placeholder="Search by brand or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger id="brand">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>
                      {brand === 'all' ? 'All Brands' : brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Country Filter */}
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger id="country">
                  <SelectValue placeholder="All Countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="Japan">🇯🇵 Japan</SelectItem>
                  <SelectItem value="UK">🇬🇧 United Kingdom</SelectItem>
                  <SelectItem value="Australia">🇦🇺 Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Year Filter */}
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger id="year">
                  <SelectValue placeholder="All Years" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Transmission Filter */}
            <div className="space-y-2">
              <Label htmlFor="transmission">Transmission</Label>
              <Select value={selectedTransmission} onValueChange={setSelectedTransmission}>
                <SelectTrigger id="transmission">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Automatic">Automatic</SelectItem>
                  <SelectItem value="Manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-2">
              <Label htmlFor="price">Price Range</Label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger id="price">
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-200000">Under RM200k</SelectItem>
                  <SelectItem value="200000-400000">RM200k - RM400k</SelectItem>
                  <SelectItem value="400000-600000">RM400k - RM600k</SelectItem>
                  <SelectItem value="600000">Above RM600k</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredVehicles.length} of {mockVehicles.length} vehicles
        </p>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVehicles.map(vehicle => (
          <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
              <ImageWithFallback
                src={vehicle.images[0]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge 
                  className={
                    vehicle.status === 'Available' ? 'bg-green-600' :
                    vehicle.status === 'Reserved' ? 'bg-yellow-600' :
                    vehicle.status === 'Sold' ? 'bg-red-600' :
                    'bg-blue-600'
                  }
                >
                  {vehicle.status}
                </Badge>
              </div>
              <div className="absolute top-2 left-2">
                <Badge variant="secondary">
                  {vehicle.country === 'Japan' ? '🇯🇵' : vehicle.country === 'UK' ? '🇬🇧' : '🇦🇺'} {vehicle.country}
                </Badge>
              </div>
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <h3>{vehicle.brand} {vehicle.model}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{vehicle.year}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 dark:text-white font-semibold">RM {vehicle.price.toLocaleString()}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-600 dark:text-gray-400">Mileage:</div>
                <div className="dark:text-gray-300">{vehicle.mileage.toLocaleString()} km</div>
                <div className="text-gray-600 dark:text-gray-400">Transmission:</div>
                <div className="dark:text-gray-300">{vehicle.transmission}</div>
                <div className="text-gray-600 dark:text-gray-400">Fuel Type:</div>
                <div className="dark:text-gray-300">{vehicle.fuelType}</div>
                <div className="text-gray-600 dark:text-gray-400">Engine:</div>
                <div className="dark:text-gray-300">{vehicle.engineSize}</div>
              </div>
            </CardContent>

            <CardFooter>
              <Link to={`/vehicle/${vehicle.id}`} className="w-full">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No vehicles found matching your criteria.</p>
          <Button variant="ghost" onClick={resetFilters} className="mt-4">
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}