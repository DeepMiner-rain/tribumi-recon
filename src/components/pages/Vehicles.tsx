import { useState } from 'react'
import { Search, Filter, MapPin, Gauge, Fuel, Calendar } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Input from '../ui/Input'
import { vehicles } from '../../data/vehicles'
import { formatCurrency, formatNumber } from '../../lib/utils'

export default function Vehicles() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<string>('all')
  const [selectedBrand, setSelectedBrand] = useState<string>('all')
  
  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = selectedCountry === 'all' || vehicle.country === selectedCountry
    const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand
    
    return matchesSearch && matchesCountry && matchesBrand
  })
  
  const brands = Array.from(new Set(vehicles.map(v => v.brand))).sort()
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">Available Vehicles</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse our current inventory of premium imported vehicles
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <Input
              placeholder="Search brand or model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Countries</option>
              <option value="japan">🇯🇵 Japan</option>
              <option value="uk">🇬🇧 United Kingdom</option>
              <option value="australia">🇦🇺 Australia</option>
            </select>
            
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredVehicles.length} vehicles
          </p>
        </div>
        
        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} hover className="overflow-hidden">
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 mb-4 rounded-lg flex items-center justify-center">
                <p className="text-4xl">{vehicle.brand === 'Toyota' ? '🚗' : vehicle.brand === 'Honda' ? '🚙' : vehicle.brand === 'Mercedes-Benz' ? '🚘' : vehicle.brand === 'BMW' ? '🏎️' : '🚕'}</p>
              </div>
              
              {/* Badges */}
              <div className="flex gap-2 mb-3">
                <Badge variant="primary">
                  {vehicle.country === 'japan' ? '🇯🇵 Japan' : vehicle.country === 'uk' ? '🇬🇧 UK' : '🇦🇺 Australia'}
                </Badge>
                {vehicle.verified && (
                  <Badge variant="success">✓ Verified</Badge>
                )}
                {vehicle.reserved && (
                  <Badge variant="warning">Reserved</Badge>
                )}
              </div>
              
              {/* Title */}
              <h3 className="mb-2">{vehicle.brand} {vehicle.model}</h3>
              <p className="text-2xl mb-4 text-yellow-500">
                {formatCurrency(vehicle.price)}
              </p>
              
              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {vehicle.year}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Gauge className="w-4 h-4" />
                  {formatNumber(vehicle.mileage)} km
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Fuel className="w-4 h-4" />
                  {vehicle.fuelType}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {vehicle.transmission}
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Key Features:</p>
                <div className="flex flex-wrap gap-1">
                  {vehicle.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                  {vehicle.features.length > 3 && (
                    <span className="text-xs px-2 py-0.5 text-gray-500">+{vehicle.features.length - 3}</span>
                  )}
                </div>
              </div>
              
              <Button className="w-full" disabled={vehicle.reserved}>
                {vehicle.reserved ? 'Reserved' : 'View Details'}
              </Button>
            </Card>
          ))}
        </div>
        
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No vehicles found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}