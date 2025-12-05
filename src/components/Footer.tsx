import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { siteConfig } from '../config/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/about#process' },
      { name: 'Why Choose Us', href: '/about#why' },
      { name: 'Certifications', href: '/about#certifications' },
    ],
    services: [
      { name: 'Browse Vehicles', href: '/vehicles' },
      { name: 'Import Calculator', href: '/calculator' },
      { name: 'Loan Calculator', href: '/loan-calculator' },
      { name: 'Vehicle Discovery', href: '/discovery' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Track Order', href: '/dashboard' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  }
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm mb-4 text-gray-400">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-gray-500">
              {siteConfig.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.company.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{siteConfig.company.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${siteConfig.company.phone}`} className="hover:text-yellow-500">
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-yellow-500">
                  {siteConfig.company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {siteConfig.company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span>AP: {siteConfig.company.apNumber}</span>
            <span>Reg: {siteConfig.company.registration}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}