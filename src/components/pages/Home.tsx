import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Calculator, Shield, Search, TrendingUp, CheckCircle } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import BrandLogos from '../BrandLogos'
import { siteConfig } from '../../config/siteConfig'
import { heroImages } from '../../assets/images'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${heroImages.carShowroom}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">
              Import Your Dream Car
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-yellow-500 italic">
              <span className="font-semibold">From Far Away</span>
              {', '}
              <span className="font-semibold">To Your Driveway</span>
            </p>
            <p className="text-xl mb-12 text-gray-300">
              Malaysia's premier platform for importing premium vehicles from Japan, UK & Australia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vehicles">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Vehicles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/calculator">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Calculate Costs
                  <Calculator className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Import From 3 Countries</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Access premium vehicles from the world's top automotive markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.countries.map((country) => (
              <Card key={country.id} hover className="text-center">
                <div className="text-6xl mb-4">{country.flag}</div>
                <h3 className="mb-4">{country.name}</h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Trusted Sources:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {country.sources.map((source) => (
                      <span
                        key={source}
                        className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Specialties:</p>
                  <ul className="text-sm space-y-1">
                    {country.specialties.map((specialty) => (
                      <li key={specialty} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Tribumi?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Your trusted partner in car import excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.whyChooseUs.map((feature, index) => (
              <Card key={index} hover>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10">
                    <Shield className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">6-Step Import Process</h2>
            <p className="text-gray-600 dark:text-gray-400">
              From selection to delivery, we handle everything
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.process.map((step) => (
              <Card key={step.step} hover className="text-center">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{step.step}</span>
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <BrandLogos />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Browse our inventory or calculate your import costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vehicles">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View All Vehicles
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-yellow-500">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}