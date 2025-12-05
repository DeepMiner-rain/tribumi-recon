import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { LoginDialog } from './LoginDialog';
import { siteConfig } from '../config/siteConfig';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-black/30 py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-yellow-400 transition">
              <Phone className="w-4 h-4" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-yellow-400 transition">
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{siteConfig.contact.address.city}, {siteConfig.contact.address.country}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-10">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 text-gray-900 px-3 py-2 rounded font-bold text-xl">
                {siteConfig.company.name}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 relative z-10">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/vehicles" className="hover:text-yellow-400 transition">Vehicles</Link>
            <Link to="/discovery" className="hover:text-yellow-400 transition">Discover</Link>
            
            <ThemeToggle />
            
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" onClick={logout} className="text-white hover:text-yellow-400">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={() => setLoginOpen(true)} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                Login / Register
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/" className="hover:text-yellow-400 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/vehicles" className="hover:text-yellow-400 transition" onClick={() => setMobileMenuOpen(false)}>Vehicles</Link>
            <Link to="/discovery" className="hover:text-yellow-400 transition" onClick={() => setMobileMenuOpen(false)}>Discover</Link>
            
            <div className="flex items-center gap-2">
              <span className="text-sm">Theme:</span>
              <ThemeToggle />
            </div>
            
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" onClick={() => { logout(); setMobileMenuOpen(false); }} className="text-white hover:text-yellow-400">
                  Logout
                </Button>
              </>
            ) : (
              <Button onClick={() => { setLoginOpen(true); setMobileMenuOpen(false); }} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-full">
                Login / Register
              </Button>
            )}
          </nav>
        )}
      </div>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </header>
  );
}