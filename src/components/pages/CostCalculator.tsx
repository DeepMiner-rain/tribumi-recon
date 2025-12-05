import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Calculator, Download } from 'lucide-react';

export function CostCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState<number>(200000);
  const [country, setCountry] = useState<string>('Japan');
  const [engineSize, setEngineSize] = useState<number>(2.0);
  const [vehicleAge, setVehicleAge] = useState<number>(3);

  // Shipping costs by country (estimated)
  const shippingCosts = {
    'Japan': 12000,
    'UK': 18000,
    'Australia': 15000,
  };

  // Calculate duties and taxes
  const calculations = useMemo(() => {
    const shipping = shippingCosts[country as keyof typeof shippingCosts] || 12000;
    
    // Import Duty (10% of CIF value)
    const cifValue = vehiclePrice + shipping;
    const importDuty = cifValue * 0.10;
    
    // Excise Duty (estimated based on engine size and vehicle type)
    let exciseDutyRate = 0.65; // Base rate for <1800cc
    if (engineSize >= 1.8 && engineSize < 2.0) exciseDutyRate = 0.80;
    if (engineSize >= 2.0 && engineSize < 2.5) exciseDutyRate = 1.00;
    if (engineSize >= 2.5 && engineSize < 3.0) exciseDutyRate = 1.50;
    if (engineSize >= 3.0) exciseDutyRate = 2.00;
    
    const exciseDuty = (cifValue + importDuty) * exciseDutyRate;
    
    // Sales Tax/SST (10%)
    const salesTax = (cifValue + importDuty + exciseDuty) * 0.10;
    
    // Other costs
    const customsClearance = 5000;
    const jpjRegistration = 3000;
    const puspakomInspection = 2000;
    const insurance = vehiclePrice * 0.02; // 2% estimated
    const agentFee = 3000;
    
    const totalDutiesAndTaxes = importDuty + exciseDuty + salesTax;
    const totalOtherCosts = customsClearance + jpjRegistration + puspakomInspection + insurance + agentFee;
    const totalCost = vehiclePrice + shipping + totalDutiesAndTaxes + totalOtherCosts;
    
    return {
      vehiclePrice,
      shipping,
      cifValue,
      importDuty,
      exciseDuty,
      salesTax,
      totalDutiesAndTaxes,
      customsClearance,
      jpjRegistration,
      puspakomInspection,
      insurance,
      agentFee,
      totalOtherCosts,
      totalCost,
    };
  }, [vehiclePrice, country, engineSize]);

  const resetCalculator = () => {
    setVehiclePrice(200000);
    setCountry('Japan');
    setEngineSize(2.0);
    setVehicleAge(3);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Import Cost Calculator</h1>
        <p className="text-gray-600">
          Calculate the total on-the-road price for importing a vehicle to Malaysia
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Vehicle Details
              </CardTitle>
              <CardDescription>Enter vehicle and import details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vehicle-price">Vehicle Price (FOB)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    RM
                  </span>
                  <Input
                    id="vehicle-price"
                    type="number"
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="pl-12"
                    min="0"
                    step="1000"
                  />
                </div>
                <p className="text-xs text-gray-500">Free On Board price in seller's country</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country of Origin</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Japan">🇯🇵 Japan</SelectItem>
                    <SelectItem value="UK">🇬🇧 United Kingdom</SelectItem>
                    <SelectItem value="Australia">🇦🇺 Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="engine-size">Engine Size (Liters)</Label>
                <Input
                  id="engine-size"
                  type="number"
                  value={engineSize}
                  onChange={(e) => setEngineSize(Number(e.target.value))}
                  min="0.5"
                  max="8.0"
                  step="0.1"
                />
                <p className="text-xs text-gray-500">
                  Larger engines have higher excise duty rates
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle-age">Vehicle Age (Years)</Label>
                <Input
                  id="vehicle-age"
                  type="number"
                  value={vehicleAge}
                  onChange={(e) => setVehicleAge(Number(e.target.value))}
                  min="0"
                  max="20"
                />
                <p className="text-xs text-gray-500">
                  Vehicle must be less than 5 years old for most imports
                </p>
              </div>

              <Button onClick={resetCalculator} variant="outline" className="w-full">
                Reset Calculator
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Card */}
          <Card className="border-2 border-red-600">
            <CardHeader className="bg-red-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Total On-The-Road Price</CardTitle>
                  <CardDescription>Estimated total cost in Malaysia</CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-4xl text-red-600">
                    RM {calculations.totalCost.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600 mb-1">Vehicle + Shipping</p>
                  <p className="text-xl">RM {(calculations.vehiclePrice + calculations.shipping).toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600 mb-1">Duties & Taxes</p>
                  <p className="text-xl">RM {calculations.totalDutiesAndTaxes.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600 mb-1">Other Costs</p>
                  <p className="text-xl">RM {calculations.totalOtherCosts.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Cost Breakdown</CardTitle>
              <CardDescription>Complete breakdown of all costs and fees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Base Costs */}
              <div>
                <h3 className="mb-3 pb-2 border-b">Base Costs</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vehicle Price (FOB)</span>
                    <span>RM {calculations.vehiclePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping ({country})</span>
                    <span>RM {calculations.shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>CIF Value (Cost, Insurance, Freight)</span>
                    <span>RM {calculations.cifValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Duties and Taxes */}
              <div>
                <h3 className="mb-3 pb-2 border-b">Duties & Taxes</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Import Duty (10% of CIF)</span>
                    <span>RM {calculations.importDuty.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Excise Duty ({engineSize}L engine)</span>
                    <span>RM {calculations.exciseDuty.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sales Tax (10%)</span>
                    <span>RM {calculations.salesTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Total Duties & Taxes</span>
                    <span>RM {calculations.totalDutiesAndTaxes.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Other Costs */}
              <div>
                <h3 className="mb-3 pb-2 border-b">Other Costs & Fees</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customs Clearance</span>
                    <span>RM {calculations.customsClearance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">JPJ Registration</span>
                    <span>RM {calculations.jpjRegistration.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puspakom Inspection</span>
                    <span>RM {calculations.puspakomInspection.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance (Estimated)</span>
                    <span>RM {calculations.insurance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Agent/Service Fee</span>
                    <span>RM {calculations.agentFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Total Other Costs</span>
                    <span>RM {calculations.totalOtherCosts.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Grand Total */}
              <div className="bg-red-50 p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-xl">Grand Total (On-The-Road)</span>
                  <span className="text-3xl text-red-600">
                    RM {calculations.totalCost.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                <p className="text-sm text-yellow-900">
                  <strong>Important Notes:</strong>
                </p>
                <ul className="text-sm text-yellow-800 mt-2 space-y-1 list-disc list-inside">
                  <li>This is an estimated calculation. Actual costs may vary.</li>
                  <li>Excise duty rates depend on vehicle type, engine size, and year.</li>
                  <li>Additional costs may apply for special vehicles or modifications.</li>
                  <li>Exchange rates and shipping costs fluctuate.</li>
                  <li>Vehicles must meet Malaysian safety and emission standards.</li>
                </ul>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700">
                <Download className="w-4 h-4 mr-2" />
                Download Full Quotation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
