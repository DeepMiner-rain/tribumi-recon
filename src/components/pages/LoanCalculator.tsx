import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calculator, DollarSign, TrendingUp } from 'lucide-react';

export function LoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState<number>(200000);
  const [downPayment, setDownPayment] = useState<number>(20000);
  const [loanTerm, setLoanTerm] = useState<number>(7); // years
  const [interestRate, setInterestRate] = useState<number>(3.5); // percentage

  const calculations = useMemo(() => {
    const loanAmount = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Calculate monthly payment using loan formula
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
    
    return {
      loanAmount,
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      numberOfPayments,
    };
  }, [vehiclePrice, downPayment, loanTerm, interestRate]);

  const downPaymentPercentage = ((downPayment / vehiclePrice) * 100).toFixed(1);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-yellow-600" />
        </div>
        <h1 className="text-4xl mb-2">Loan Calculator</h1>
        <p className="text-gray-600">
          Calculate your monthly payments for your dream car
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Input Section */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Loan Details
              </CardTitle>
              <CardDescription>Enter your loan information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vehicle-price">Vehicle Price</Label>
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="down-payment">
                  Down Payment ({downPaymentPercentage}%)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    RM
                  </span>
                  <Input
                    id="down-payment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="pl-12"
                    min="0"
                    max={vehiclePrice}
                    step="1000"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max={vehiclePrice}
                  step="1000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loan-term">Loan Term</Label>
                <Select value={loanTerm.toString()} onValueChange={(v) => setLoanTerm(Number(v))}>
                  <SelectTrigger id="loan-term">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Year</SelectItem>
                    <SelectItem value="2">2 Years</SelectItem>
                    <SelectItem value="3">3 Years</SelectItem>
                    <SelectItem value="5">5 Years</SelectItem>
                    <SelectItem value="7">7 Years</SelectItem>
                    <SelectItem value="9">9 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest-rate">Interest Rate (per annum)</Label>
                <div className="relative">
                  <Input
                    id="interest-rate"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="pr-8"
                    min="0"
                    max="10"
                    step="0.1"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    %
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Typical range: 2.5% - 4.5% for new cars
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Card */}
          <Card className="border-2 border-yellow-500">
            <CardHeader className="bg-yellow-50">
              <CardTitle className="text-2xl">Monthly Payment</CardTitle>
              <CardDescription>Estimated monthly installment</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <p className="text-5xl text-yellow-600 mb-2">
                  RM {calculations.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
                <p className="text-gray-600">per month for {loanTerm} years</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                  <p className="text-xl">RM {calculations.loanAmount.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                  <p className="text-xl">RM {calculations.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600 mb-1">Total Payment</p>
                  <p className="text-xl">RM {calculations.totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Breakdown</CardTitle>
              <CardDescription>Detailed loan information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Vehicle Price</span>
                  <span>RM {vehiclePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Down Payment ({downPaymentPercentage}%)</span>
                  <span className="text-green-600">- RM {downPayment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b font-semibold">
                  <span>Loan Amount</span>
                  <span>RM {calculations.loanAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Interest Rate</span>
                  <span>{interestRate}% per annum</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Loan Term</span>
                  <span>{loanTerm} years ({calculations.numberOfPayments} months)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Total Interest Paid</span>
                  <span className="text-red-600">RM {calculations.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between py-3 bg-yellow-50 p-4 rounded">
                  <span className="text-lg">Total Amount Payable</span>
                  <span className="text-2xl text-yellow-600">
                    RM {(calculations.totalPayment + downPayment).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Tips to Save on Your Loan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Make a larger down payment to reduce loan amount and interest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Choose a shorter loan term to pay less total interest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Shop around for the best interest rates from different banks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Consider your monthly budget - keep payments under 30% of income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Check if you qualify for special rates (government servants, professionals)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-sm">
            <p className="font-semibold mb-2">Important Notes:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• This calculator provides estimates only. Actual rates may vary by bank and your credit profile.</li>
              <li>• Interest rates shown are indicative. Contact banks directly for current rates.</li>
              <li>• Additional costs may include insurance, road tax, and maintenance.</li>
              <li>• Loan approval is subject to bank's credit assessment.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}