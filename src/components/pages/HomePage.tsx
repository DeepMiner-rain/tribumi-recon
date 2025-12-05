import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowRight, Shield, ClipboardCheck, DollarSign, Gauge, FileText, Image, UserCheck, Building2, ShieldCheck, Calculator, Search, FileSearch, Hash, BookmarkCheck, Landmark, Truck, ChevronLeft, ChevronRight, X, Volume2, VolumeX, Ship } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useRef, useState, useEffect } from 'react';

export function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-dark-tunnel-2030-large.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        setShowVideo(false);
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, []);

  const handleSkipVideo = () => {
    setShowVideo(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const process = [
    { icon: BookmarkCheck, title: 'Reservation', description: 'Visit the Tribumi website and book your vehicle' },
    { icon: DollarSign, title: 'Purchase', description: 'Once the contract is agreed, we\'ll secure your vehicle immediately' },
    { icon: Ship, title: 'Shipping', description: 'We\'ll take care of sending your vehicle to Malaysia' },
    { icon: Landmark, title: 'RMCD', description: 'Customs: We\'ll handle all the customs paperwork for your vehicle' },
    { icon: ClipboardCheck, title: 'Inspection', description: 'We\'ll ensure your vehicle passes all necessary inspections' },
    { icon: Truck, title: 'Delivery', description: 'When everything is done, your vehicle will be delivered to you' }
  ];

  const certifications = [
    { name: 'AP Approved', description: 'Approved Permit Holder' },
    { name: 'PEKEMA Member', description: 'Malaysian Import-Export Association' },
    { name: 'JPJ Registered', description: 'Road Transport Department' }
  ];

  const carBrands = [
    { name: 'Toyota', icon: '🚗' }, { name: 'Honda', icon: '🚙' }, { name: 'Nissan', icon: '🚕' },
    { name: 'Hyundai', icon: '🚙' }, { name: 'Mazda', icon: '🚓' }, { name: 'Subaru', icon: '🚐' },
    { name: 'Mercedes-Benz', icon: '🚗' }, { name: 'BMW', icon: '🏎️' }, { name: 'Audi', icon: '🚙' },
    { name: 'Porsche', icon: '🏁' }, { name: 'Volkswagen', icon: '🚗' }, { name: 'Lexus', icon: '🚙' },
    { name: 'Mitsubishi', icon: '🚕' }, { name: 'Lamborghini', icon: '🏎️' }, { name: 'Bugatti', icon: '🏎️' },
    { name: 'Ferrari', icon: '🏎️' }, { name: 'Land Rover', icon: '🚙' }, { name: 'Ford', icon: '🚙' },
    { name: 'Chevrolet', icon: '🚙' }, { name: 'Jeep', icon: '🚙' }, { name: 'Jaguar', icon: '🏎️' },
    { name: 'Volvo', icon: '🚗' }, { name: 'Tesla', icon: '⚡' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Intro Video */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black">
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted={isMuted} playsInline src={videoUrl}>
            Your browser does not support the video tag.
          </video>
          <button onClick={handleSkipVideo} className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-yellow-500" aria-label="Skip video">
            <span>Skip</span>
            <X className="w-4 h-4" />
          </button>
          <button onClick={toggleMute} className="absolute bottom-6 right-6 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-yellow-500" aria-label={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm opacity-70">Tribumi - Import Your Dream, Drive Your Passion</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback src="https://images.unsplash.com/photo-1742056024244-02a093dae0b5?w=1080" alt="Luxury Car" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-yellow-500 text-gray-900">We Help You</Badge>
            <h1 className="text-4xl lg:text-6xl mb-6">IMPORT YOUR DREAM CAR FROM JAPAN, UK & AUSTRALIA</h1>
            <p className="text-2xl lg:text-3xl italic text-yellow-400 mb-6 tracking-wide">From Far Away, To Your Driveway</p>
            <p className="text-xl text-gray-300 mb-8">Tribumi is Malaysia\'s largest imported car platform, with presence in Malaysia, Japan, Australia and United Kingdom.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="text-gray-400">Approved by:</span>
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="border-yellow-500 text-yellow-500">{cert.name}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/vehicles"><Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">Browse Vehicles<ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <Link to="/calculator"><Button size="lg" variant="outline" className="border-yellow-500 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900">Calculate Import Cost</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Why Choose Tribumi?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Experience transparency and quality at every step of your vehicle import journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            <Card className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"><Shield className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
                <CardTitle className="text-lg">Licensed & Certified</CardTitle>
              </CardHeader>
              <CardContent><p className="text-gray-600 dark:text-gray-300">AP approved importer with PEKEMA membership and JPJ registration</p></CardContent>
            </Card>
            <Card className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"><ClipboardCheck className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
                <CardTitle className="text-lg">Professional Inspection</CardTitle>
              </CardHeader>
              <CardContent><p className="text-gray-600 dark:text-gray-300">Comprehensive vehicle inspection report by certified professionals before purchase</p></CardContent>
            </Card>
            <Card className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"><DollarSign className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
                <CardTitle className="text-lg">Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent><p className="text-gray-600 dark:text-gray-300">No markup, no hidden charges. Complete cost breakdown from purchase to delivery</p></CardContent>
            </Card>
            <Card className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"><Gauge className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
                <CardTitle className="text-lg">Authentic Mileage</CardTitle>
              </CardHeader>
              <CardContent><p className="text-gray-600 dark:text-gray-300">Guaranteed original mileage with no adjustments. Full vehicle history included</p></CardContent>
            </Card>
            <Card className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"><Image className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
                <CardTitle className="text-lg">Visual Documentation</CardTitle>
              </CardHeader>
              <CardContent><p className="text-gray-600 dark:text-gray-300">High-quality photos and videos of your vehicle before shipping from source country</p></CardContent>
            </Card>
            <Card className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"><FileText className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
                <CardTitle className="text-lg">On-The-Road Price</CardTitle>
              </CardHeader>
              <CardContent><p className="text-gray-600 dark:text-gray-300">Clear pricing including all taxes, duties, and registration fees in Malaysia</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Import Countries */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="https://jpauc.com/auction" target="_blank" rel="noopener noreferrer" className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <ImageWithFallback src="https://images.unsplash.com/photo-1568702891238-727460342811?w=1080" alt="Japan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 border-4 border-yellow-500 group-hover:border-yellow-400 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm mb-2 text-yellow-400">Direct Import From</p>
                <h3 className="text-4xl">Japan</h3>
              </div>
            </a>
            <a href="https://www.autotrader.com.au/" target="_blank" rel="noopener noreferrer" className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <ImageWithFallback src="https://images.unsplash.com/photo-1568702891238-727460342811?w=1080" alt="Australia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 border-4 border-yellow-500 group-hover:border-yellow-400 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm mb-2 text-yellow-400">Direct Import From</p>
                <h3 className="text-4xl">Australia</h3>
              </div>
            </a>
            <a href="https://www.autotrader.co.uk/" target="_blank" rel="noopener noreferrer" className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <ImageWithFallback src="https://images.unsplash.com/photo-1568702891238-727460342811?w=1080" alt="UK" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 border-4 border-yellow-500 group-hover:border-yellow-400 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm mb-2 text-yellow-400">Direct Import From</p>
                <h3 className="text-4xl">United Kingdom</h3>
              </div>
            </a>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            <Link to="/dashboard" className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors group">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 transition-colors"><UserCheck className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
              <span className="text-center text-sm">Verify Agent</span>
            </Link>
            <Link to="/loan-calculator" className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors group">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 transition-colors"><Building2 className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
              <span className="text-center text-sm">Loan Calculator</span>
            </Link>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors group cursor-pointer">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 transition-colors"><ShieldCheck className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
              <span className="text-center text-sm">Insurance Calculator</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors group cursor-pointer">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 transition-colors"><Calculator className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
              <span className="text-center text-sm">Road Tax Calculator</span>
            </div>
            <a href="https://scrut.my/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors group">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 transition-colors"><Search className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
              <span className="text-center text-sm">Japan Car Check</span>
            </a>
            <a href="https://www.autotrader.co.uk/cars/vehicle-check" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors group">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 transition-colors"><FileSearch className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
              <span className="text-center text-sm">UK Car Check</span>
            </a>
            <a href="https://jpj.my/JPJ_Latest_Number_Plates.htm" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-800 transition-colors group">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/30 transition-colors"><Hash className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
              <span className="text-center text-sm">JPJ Car Plate</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Purchase Flow</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">6-step journey from booking to delivery - transparent and hassle-free</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="border-t-4 border-t-yellow-500 hover:shadow-xl transition-all dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-4"><step.icon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" /></div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600 dark:text-gray-300">{step.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Brands */}
      <section className="py-16 bg-[rgb(30,41,57)] dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Ready to Import Your Dream Car?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">Start browsing our catalog or calculate your import costs today</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/vehicles"><Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">View All Vehicles</Button></Link>
              <Link to="/calculator"><Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 dark:border-yellow-500 dark:text-yellow-400 dark:bg-transparent dark:hover:bg-yellow-500 dark:hover:text-gray-900">Cost Calculator</Button></Link>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {showLeftArrow && (
              <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-700/80 hover:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-600" aria-label="Scroll left">
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
            )}
            {showRightArrow && (
              <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-700/80 hover:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-600" aria-label="Scroll right">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            )}
            <div ref={scrollContainerRef} onScroll={handleScroll} className="overflow-x-auto scrollbar-hide px-12">
              <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
                {carBrands.map((brand, index) => (
                  <Link to="/vehicles" key={index} className="group flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-800/50 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-700 group-hover:border-yellow-500 group-hover:-translate-y-1 group-hover:bg-gray-800/70">
                      <div className="w-14 h-14 bg-white/95 rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 p-1">
                        <span className="text-2xl">{brand.icon}</span>
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-yellow-400 transition-colors text-center px-2">{brand.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[rgb(30,41,57)] dark:from-gray-950 via-[rgb(30,41,57)]/50 dark:via-gray-950/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[rgb(30,41,57)] dark:from-gray-950 via-[rgb(30,41,57)]/50 dark:via-gray-950/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}