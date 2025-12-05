import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockVehicles } from '../../data/vehicles';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Calendar, Gauge, Fuel, Cog, Palette, Car, FileCheck, Ship, Phone } from 'lucide-react';
import { ReservationDialog } from '../ReservationDialog';

export function VehicleDetails() {
  const { id } = useParams<{ id: string }>();
  const vehicle = mockVehicles.find(v => v.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reservationOpen, setReservationOpen] = useState(false);

  if (!vehicle) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl mb-4">Vehicle not found</h1>
        <Link to="/vehicles">
          <Button>Back to Catalog</Button>
        </Link>
      </div>
    );
  }

  const specifications = [
    { icon: Calendar, label: 'Year', value: vehicle.year },
    { icon: Gauge, label: 'Mileage', value: `${vehicle.mileage.toLocaleString()} km` },
    { icon: Cog, label: 'Transmission', value: vehicle.transmission },
    { icon: Fuel, label: 'Fuel Type', value: vehicle.fuelType },
    { icon: Car, label: 'Body Type', value: vehicle.bodyType },
    { icon: Palette, label: 'Color', value: vehicle.color },
  ];

  const estimatedCosts = [
    { label: 'Vehicle Price', amount: vehicle.price },
    { label: 'Shipping (Estimated)', amount: 15000 },
    { label: 'Import Duty (10%)', amount: vehicle.price * 0.1 },
    { label: 'Excise Duty (Estimated)', amount: 25000 },
    { label: 'Customs & Clearance', amount: 5000 },
    { label: 'JPJ Registration', amount: 3000 },
    { label: 'Inspection & Puspakom', amount: 2000 },
  ];

  const totalEstimated = estimatedCosts.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/vehicles">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Catalog
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative h-96 bg-gray-200">
                  <ImageWithFallback
                    src={vehicle.images[currentImageIndex] || vehicle.images[0]}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">
                      {vehicle.country === 'Japan' ? '🇯🇵' : vehicle.country === 'UK' ? '🇬🇧' : '🇦🇺'} {vehicle.country}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={
                        vehicle.status === 'Available' ? 'bg-green-600' :
                        vehicle.status === 'Reserved' ? 'bg-yellow-600' :
                        vehicle.status === 'Sold' ? 'bg-red-600' :
                        'bg-blue-600'
                      }
                    >
                      {vehicle.status}
                    </Badge>
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                {vehicle.images.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                          currentImageIndex === index ? 'border-yellow-500' : 'border-gray-300'
                        }`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Vehicle Information */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl">{vehicle.brand} {vehicle.model}</CardTitle>
                    <p className="text-gray-600 mt-2">{vehicle.year} • {vehicle.engineSize} • {vehicle.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Starting from</p>
                    <p className="text-3xl text-gray-900 dark:text-white font-semibold">RM {vehicle.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">FOB Price</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="inspection">Inspection</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div>
                      <h3 className="mb-2">Description</h3>
                      <p className="text-gray-600">{vehicle.description}</p>
                    </div>

                    {vehicle.auction && (
                      <div>
                        <h3 className="mb-2">Source</h3>
                        <Badge variant="outline">{vehicle.auction}</Badge>
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                      {specifications.map((spec, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded">
                          <spec.icon className="w-5 h-5 text-yellow-600 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{spec.label}</p>
                            <p>{spec.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="specs" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Brand</span>
                        <span>{vehicle.brand}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Model</span>
                        <span>{vehicle.model}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Year</span>
                        <span>{vehicle.year}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Mileage</span>
                        <span>{vehicle.mileage.toLocaleString()} km</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Engine Size</span>
                        <span>{vehicle.engineSize}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Transmission</span>
                        <span>{vehicle.transmission}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Fuel Type</span>
                        <span>{vehicle.fuelType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Body Type</span>
                        <span>{vehicle.bodyType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Color</span>
                        <span>{vehicle.color}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Country of Origin</span>
                        <span>{vehicle.country}</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="inspection" className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded border border-green-200">
                      <FileCheck className="w-6 h-6 text-green-600" />
                      <div>
                        <p>Inspection Available</p>
                        <p className="text-sm text-gray-600">
                          This vehicle can be inspected by our certified partners before purchase
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3>Inspection Process:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            1
                          </div>
                          <div>
                            <p>Pre-Purchase Inspection</p>
                            <p className="text-sm text-gray-600">
                              Our local partner conducts thorough inspection
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            2
                          </div>
                          <div>
                            <p>Detailed Report</p>
                            <p className="text-sm text-gray-600">
                              Comprehensive report with photos and videos
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            3
                          </div>
                          <div>
                            <p>Pre-Delivery Inspection</p>
                            <p className="text-sm text-gray-600">
                              Final check in Malaysia before handover
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Pricing and Actions */}
          <div className="space-y-6">
            {/* Cost Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Estimated Total Cost</CardTitle>
                <p className="text-sm text-gray-600">On-the-road price in Malaysia</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {estimatedCosts.map((cost, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{cost.label}</span>
                      <span>RM {cost.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span>Total Estimated</span>
                    <span className="text-2xl text-gray-900 dark:text-white font-semibold">RM {totalEstimated.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Actual costs may vary based on final inspections and current rates
                  </p>
                </div>

                <Link to="/calculator" className="block">
                  <Button variant="outline" className="w-full">
                    Detailed Cost Calculator
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Interested in this vehicle?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {vehicle.status === 'Available' && (
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                    onClick={() => setReservationOpen(true)}
                  >
                    Reserve Now
                  </Button>
                )}
                
                {vehicle.status === 'Reserved' && (
                  <Button className="w-full" disabled>
                    Currently Reserved
                  </Button>
                )}

                {vehicle.status === 'Sold' && (
                  <Button className="w-full" disabled>
                    Sold
                  </Button>
                )}

                <a href="tel:+60323582242" className="block">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>

                <a 
                  href={`https://wa.me/60323582242?text=Hi, I'm interested in ${vehicle.brand} ${vehicle.model} (${vehicle.year})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full">
                    WhatsApp Inquiry
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Import Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p>Week 1-2</p>
                      <p className="text-sm text-gray-600">Reservation & Inspection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                      <Ship className="w-4 h-4" />
                    </div>
                    <div>
                      <p>Week 3-6</p>
                      <p className="text-sm text-gray-600">Shipping to Malaysia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <p>Week 7-8</p>
                      <p className="text-sm text-gray-600">Clearance & Registration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ReservationDialog
        open={reservationOpen}
        onOpenChange={setReservationOpen}
        vehicle={vehicle}
      />
    </div>
  );
}