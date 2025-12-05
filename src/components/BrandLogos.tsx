import { Car } from 'lucide-react'

interface Brand {
  name: string
  logo?: string
}

const brands: Brand[] = [
  { name: 'Toyota' },
  { name: 'Honda' },
  { name: 'Nissan' },
  { name: 'Hyundai' },
  { name: 'Mazda' },
  { name: 'Subaru' },
  { name: 'Mercedes-Benz' },
  { name: 'BMW' },
  { name: 'Audi' },
  { name: 'Porsche' },
  { name: 'Volkswagen' },
  { name: 'Lexus' },
  { name: 'Mitsubishi' },
  { name: 'Land Rover' },
  { name: 'Ford' },
  { name: 'Chevrolet' },
  { name: 'Jeep' },
  { name: 'Jaguar' },
  { name: 'Volvo' },
  { name: 'Tesla' },
]

export default function BrandLogos() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Premium Brands We Import</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Access to the world's most prestigious automotive brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center gap-2">
                <Car className="w-8 h-8 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                <span className="text-sm text-center group-hover:text-yellow-500 transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}