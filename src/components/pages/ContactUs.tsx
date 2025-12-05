import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to backend
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl mb-2">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400">Get in touch with our team for any inquiries</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>We're here to help with your import needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-1" />
                <div>
                  <p className="dark:text-white">Phone</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-500">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-1" />
                <div>
                  <p className="dark:text-white">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-500">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-1" />
                <div>
                  <p className="dark:text-white">Office Address</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {siteConfig.contact.address.street},<br />
                    {siteConfig.contact.address.area},<br />
                    {siteConfig.contact.address.postcode} {siteConfig.contact.address.city},<br />
                    {siteConfig.contact.address.state}, {siteConfig.contact.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-1" />
                <div>
                  <p className="dark:text-white">Business Hours</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {siteConfig.contact.businessHours.weekdays}<br />
                    {siteConfig.contact.businessHours.saturday}<br />
                    {siteConfig.contact.businessHours.sunday}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-500" />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                For faster response, chat with us on WhatsApp
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Chat on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+60 12-345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your import needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FAQ Quick Links */}
          <Card className="mt-6 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Before contacting us, you might find answers to common questions:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-500">•</span>
                    <span className="dark:text-gray-300">How long does the import process take? ({siteConfig.timeline.total})</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-500">•</span>
                    <span className="dark:text-gray-300">What is the deposit amount required? ({siteConfig.payment.depositPercentage}% of vehicle price)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-500">•</span>
                    <span className="dark:text-gray-300">Do you provide inspection reports? (Yes, {siteConfig.services.inspection.description.toLowerCase()})</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 dark:text-yellow-500">•</span>
                    <span className="dark:text-gray-300">Is there a warranty? ({siteConfig.services.warranty.description})</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}