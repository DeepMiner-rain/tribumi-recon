import { useState } from 'react'
import { TrendingUp, Info } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { formatCurrency } from '../../lib/utils'

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(200000)
  const [downPayment, setDownPayment] = useState<number>(20000)
  const [interestRate, setInterestRate] = useState<number>(3.5)
  const [loanTerm, setLoanTerm] = useState<number>(9)
  
  const calculateLoan = () => {
    const principal = loanAmount - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    
    // Monthly payment calculation
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    
    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - principal
    
    return {
      principal,
      monthlyPayment,
      totalPayment,
      totalInterest,
      downPaymentPercentage: (downPayment / loanAmount) * 100,
    }
  }
  
  const loan = calculateLoan()
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Loan Calculator</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Calculate your monthly payments and total loan cost
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
              <h3>Loan Details</h3>
            </div>
            
            <div className="space-y-4">
              <Input
                label="Vehicle Price (MYR)"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                placeholder="200000"
              />
              
              <div>
                <Input
                  label={`Down Payment (${loan.downPaymentPercentage.toFixed(1)}%)`}
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  placeholder="20000"
                />
                <input
                  type="range"
                  min="0"
                  max={loanAmount}
                  step="1000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>
              
              <div>
                <Input
                  label={`Interest Rate (${interestRate}% per annum)`}
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  placeholder="3.5"
                />
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full mt-2"
                />
              </div>
              
              <div>
                <label className="block mb-2">Loan Term</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="5">5 Years</option>
                  <option value="7">7 Years</option>
                  <option value="9">9 Years</option>
                </select>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  Interest rates vary by bank and your credit profile. Contact us for the best rates.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Results Section */}
          <div className="space-y-6">
            {/* Monthly Payment Highlight */}
            <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900 border-0">
              <div className="text-center">
                <p className="text-sm mb-2 opacity-90">Estimated Monthly Payment</p>
                <p className="text-5xl mb-2">
                  {formatCurrency(loan.monthlyPayment)}
                </p>
                <p className="text-sm opacity-90">for {loanTerm * 12} months</p>
              </div>
            </Card>
            
            {/* Breakdown */}
            <Card>
              <h3 className="mb-6">Loan Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Vehicle Price</span>
                  <span>{formatCurrency(loanAmount)}</span>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Down Payment</span>
                  <span className="text-green-500">{formatCurrency(downPayment)}</span>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Loan Amount</span>
                  <span>{formatCurrency(loan.principal)}</span>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Interest Rate</span>
                  <span>{interestRate}% p.a.</span>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Loan Term</span>
                  <span>{loanTerm} years ({loanTerm * 12} months)</span>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Total Interest</span>
                  <span className="text-red-500">{formatCurrency(loan.totalInterest)}</span>
                </div>
                
                <div className="flex justify-between pt-4 border-t-2 border-yellow-500">
                  <span className="text-lg">Total Payment</span>
                  <span className="text-2xl text-yellow-500">
                    {formatCurrency(loan.totalPayment)}
                  </span>
                </div>
              </div>
            </Card>
            
            <Button className="w-full">Apply for Financing</Button>
          </div>
        </div>
      </div>
    </div>
  )
}