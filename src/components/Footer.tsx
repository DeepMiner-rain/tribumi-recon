import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/siteConfig';

export function Footer() {
  const fullAddress = `${siteConfig.contact.address.street}, ${siteConfig.contact.address.area}, ${siteConfig.contact.address.postcode} ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}, ${siteConfig.contact.address.country}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-2">
              {siteConfig.company.description}
            </p>
            <p className="text-sm text-yellow-400 italic mb-4">
              "{siteConfig.company.slogan}"
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} className="hover:text-yellow-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.instagram} className="hover:text-yellow-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.tiktok} className="hover:text-yellow-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.youtube} className="hover:text-yellow-400 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/vehicles" className="text-gray-400 hover:text-yellow-400 transition">Vehicle Catalog</Link></li>
              <li><Link to="/calculator" className="text-gray-400 hover:text-yellow-400 transition">Cost Calculator</Link></li>
              <li><Link to="/loan-calculator" className="text-gray-400 hover:text-yellow-400 transition">Loan Calculator</Link></li>
              <li><Link to="/discovery" className="text-gray-400 hover:text-yellow-400 transition">Discovery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-yellow-400 transition">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h3 className="mb-4">Our Markets</h3>
            <ul className="space-y-2 text-gray-400">
              {siteConfig.markets.map((market, index) => (
                <li key={index}>{market.flag} {market.country}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {siteConfig.company.established} {siteConfig.company.name}. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-400 transition">Terms & Conditions</Link>
            <Link to="/refund" className="hover:text-yellow-400 transition">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}