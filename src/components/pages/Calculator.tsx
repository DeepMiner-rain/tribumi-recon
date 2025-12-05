import { useState } from 'react'
import { Calculator as CalcIcon, Info } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { formatCurrency } from '../../lib/utils'

export default function Calculator() {
  const [vehiclePrice, setVehiclePrice] = useState<number>(150000)
  const [country, setCountry] = useState<'japan' | 'uk' | 'australia'>('japan')
  const [vehicleAge, setVehicleAge] = useState<number>(3)
  const [engineCC, setEngineCC] = useState<number>(2000)
  
  // Calculation logic
  const calculateCosts = () => {
    // Shipping costs by country
    const shippingCosts = {
      japan: 8000,
      uk: 15000,
      australia: 12000,
    }
    
    // Import duty (based on vehicle age)
    const importDuty = vehicleAge <= 3 ? vehiclePrice * 0.30 : vehiclePrice * 0.10
    
    // Excise duty (based on engine CC)
    let exciseDuty = 0
    if (engineCC <= 1800) {
      exciseDuty = vehiclePrice * 0.75
    } else if (engineCC <= 2000) {
      exciseDuty = vehiclePrice * 0.80
    } else if (engineCC <= 3000) {
      exciseDuty = vehiclePrice * 0.90
    } else {
      exciseDuty = vehiclePrice * 1.05
    }
    
    // Sales tax (10%)
    const salesTax = (vehiclePrice + importDuty + exciseDuty) * 0.10
    
    // Other fees
    const inspectionFee = 500
    const processingFee = 1500
    const insuranceFee = 800
    const registrationFee = 1200
    
    const shipping = shippingCosts[country]
    const totalCost = vehiclePrice + shipping + importDuty + exciseDuty + salesTax + 
                     inspectionFee + processingFee + insuranceFee + registrationFee
    
    return {
      vehiclePrice,
      shipping,
      importDuty,
      exciseDuty,
      salesTax,
      inspectionFee,
      processingFee,
      insuranceFee,
      registrationFee,
      totalCost,
    }
  }
  
  const costs = calculateCosts()
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Import Cost Calculator</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Calculate the complete on-the-road price for your imported vehicle
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <CalcIcon className="w-6 h-6 text-yellow-500" />
              <h3>Vehicle Details</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Country of Origin</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="japan">🇯🇵 Japan</option>
                  <option value="uk">🇬🇧 United Kingdom</option>
                  <option value="australia">🇦🇺 Australia</option>
                </select>
              </div>
              
              <Input
                label="Vehicle Price (MYR)"
                type="number"
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(Number(e.target.value))}
                placeholder="150000"
              />
              
              <Input
                label="Vehicle Age (Years)"
                type="number"
                value={vehicleAge}
                onChange={(e) => setVehicleAge(Number(e.target.value))}
                placeholder="3"
              />
              
              <Input
                label="Engine Capacity (CC)"
                type="number"
                value={engineCC}
                onChange={(e) => setEngineCC(Number(e.target.value))}
                placeholder="2000"
              />
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  These are estimated calculations. Actual costs may vary based on current exchange rates, 
                  customs regulations, and vehicle specifications.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Results Section */}
          <Card>
            <h3 className="mb-6">Cost Breakdown</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Vehicle Price</span>
                <span>{formatCurrency(costs.vehiclePrice)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Shipping ({country.toUpperCase()})</span>
                <span>{formatCurrency(costs.shipping)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Import Duty</span>
                <span>{formatCurrency(costs.importDuty)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Excise Duty</span>
                <span>{formatCurrency(costs.exciseDuty)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Sales Tax (10%)</span>
                <span>{formatCurrency(costs.salesTax)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Inspection Fee</span>
                <span>{formatCurrency(costs.inspectionFee)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Processing Fee</span>
                <span>{formatCurrency(costs.processingFee)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Insurance</span>
                <span>{formatCurrency(costs.insuranceFee)}</span>
              </div>
              
              <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Registration</span>
                <span>{formatCurrency(costs.registrationFee)}</span>
              </div>
              
              <div className="flex justify-between pt-4 border-t-2 border-yellow-500">
                <span className="text-lg">Total On-The-Road Price</span>
                <span className="text-2xl text-yellow-500">
                  {formatCurrency(costs.totalCost)}
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full">Request Detailed Quote</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}