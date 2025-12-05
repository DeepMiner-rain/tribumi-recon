import { useState } from 'react'
import { Search, Shield, Star, TrendingUp } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Input from '../ui/Input'

export default function Discovery() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('japan')
  
  const discoveryTools = [
    {
      title: 'Japan Car Check',
      description: 'Verify Japanese vehicles through Scrut.my integration',
      icon: '🇯🇵',
      features: ['Auction Grade Check', 'Mileage Verification', 'Accident History', 'Export Certificate'],
      country: 'japan',
    },
    {
      title: 'UK Car Check',
      description: 'Complete UK vehicle history via AutoTrader',
      icon: '🇬🇧',
      features: ['MOT History', 'Service Records', 'Finance Check', 'Mileage Validation'],
      country: 'uk',
    },
    {
      title: 'Australia PPSR',
      description: 'Personal Property Securities Register check',
      icon: '🇦🇺',
      features: ['Finance Owing', 'Stolen Check', 'Write-off Status', 'Odometer Reading'],
      country: 'australia',
    },
  ]
  
  const verificationServices = [
    {
      title: 'Agent Verification',
      description: 'Verify authenticity of overseas agents and dealers',
      icon: Shield,
    },
    {
      title: 'JPJ Plate Lookup',
      description: 'Check Malaysian vehicle registration details',
      icon: Search,
    },
    {
      title: 'Market Price Analysis',
      description: 'Get fair market value estimates for any vehicle',
      icon: TrendingUp,
    },
  ]
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Vehicle Discovery & Verification</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful tools to research, verify, and discover your perfect imported vehicle
          </p>
        </div>
        
        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card>
            <h3 className="mb-4">Search for Any Vehicle</h3>
            <div className="flex gap-4">
              <Input
                placeholder="Enter VIN, chassis number, or registration plate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button>
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Country Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {['japan', 'uk', 'australia'].map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedCountry === country
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {country === 'japan' && '🇯🇵 Japan'}
              {country === 'uk' && '🇬🇧 United Kingdom'}
              {country === 'australia' && '🇦🇺 Australia'}
            </button>
          ))}
        </div>
        
        {/* Discovery Tools */}
        <div className="mb-16">
          <h2 className="mb-8 text-center">Vehicle Check Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {discoveryTools
              .filter((tool) => tool.country === selectedCountry)
              .map((tool, index) => (
                <Card key={index} hover className="text-center">
                  <div className="text-6xl mb-4">{tool.icon}</div>
                  <h3 className="mb-3">{tool.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {tool.description}
                  </p>
                  <ul className="text-sm text-left space-y-2 mb-6">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Check Now</Button>
                </Card>
              ))}
          </div>
        </div>
        
        {/* Verification Services */}
        <div>
          <h2 className="mb-8 text-center">Additional Verification Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {verificationServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} hover>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-yellow-500/10">
                      <Icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2">{service.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {service.description}
                      </p>
                      <Button size="sm" variant="outline">Learn More</Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}