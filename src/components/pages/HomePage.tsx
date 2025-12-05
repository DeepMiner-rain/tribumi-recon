// HomePage - Complete version will be synced soon
// This is a placeholder to prevent build errors
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Tribumi Recon</h1>
          <p className="text-2xl text-yellow-500 italic mb-8">
            "From Far Away, To Your Driveway"
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Import quality reconditioned vehicles from Japan, UK & Australia
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/vehicles">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg px-8 py-6">
                Browse Vehicles
              </Button>
            </Link>
            <Link to="/calculator">
              <Button variant="outline" className="text-lg px-8 py-6">
                Calculate Costs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
