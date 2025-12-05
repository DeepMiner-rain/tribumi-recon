import { Award } from 'lucide-react'
import Card from '../ui/Card'
import { siteConfig } from '../../config/siteConfig'

export default function AboutUs() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="mb-6">About Tribumi Recon</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {siteConfig.tagline}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            We are Malaysia's premier car import platform, specializing in bringing premium vehicles 
            from Japan, United Kingdom, and Australia directly to your driveway. With full regulatory 
            compliance and transparent pricing, we make importing your dream car simple and stress-free.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <div className="text-4xl mb-2 text-yellow-500">500+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vehicles Imported</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-2 text-yellow-500">3</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Countries</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-2 text-yellow-500">98%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</p>
          </Card>
          <Card className="text-center">
            <div className="text-4xl mb-2 text-yellow-500">100%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Licensed & Certified</p>
          </Card>
        </div>
        
        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="mb-8 text-center">Our Mission</h2>
          <Card>
            <p className="text-center text-gray-600 dark:text-gray-400">
              To revolutionize car importing in Malaysia by providing transparent, professional, 
              and customer-focused services that make premium vehicles accessible to everyone. 
              We believe in honesty, quality, and delivering dreams one car at a time.
            </p>
          </Card>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="mb-8 text-center">Why Choose Tribumi?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.whyChooseUs.map((item, index) => (
              <Card key={index} hover>
                <h4 className="mb-3">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h2 className="mb-8 text-center">Certifications & Licenses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.certifications.map((cert, index) => (
              <Card key={index} className="text-center" hover>
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Process */}
        <div>
          <h2 className="mb-8 text-center">Our 6-Step Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.process.map((step) => (
              <Card key={step.step} hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center flex-shrink-0">
                    <span>{step.step}</span>
                  </div>
                  <div>
                    <h4 className="mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}