import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { siteConfig } from '../../config/siteConfig'
import { toast } from 'sonner'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Message sent! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Have questions? We're here to help you import your dream car
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h5 className="mb-1">Office Address</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {siteConfig.company.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10">
                    <Phone className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <a
                      href={`tel:${siteConfig.company.phone}`}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-500"
                    >
                      {siteConfig.company.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10">
                    <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <a
                      href={`mailto:${siteConfig.company.email}`}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-500"
                    >
                      {siteConfig.company.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10">
                    <MessageCircle className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h5 className="mb-1">WhatsApp</h5>
                    <a
                      href={`https://wa.me/${siteConfig.company.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-500"
                    >
                      {siteConfig.company.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <h4 className="mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card>
            <h3 className="mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              
              <Input
                label="Phone"
                type="tel"
                placeholder="+60 12-345 6789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              
              <Input
                label="Subject"
                placeholder="Inquiry about importing a vehicle"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 min-h-[150px]"
                  placeholder="Tell us about your dream car..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}