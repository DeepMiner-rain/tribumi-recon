import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { siteConfig } from '../../config/siteConfig';
import { Shield, Award, Users, Target } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl mb-2">About {siteConfig.company.name}</h1>
        <p className="text-xl text-yellow-500 italic mb-4">"{siteConfig.company.slogan}"</p>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {siteConfig.company.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <Shield className="w-12 h-12 text-yellow-500 mb-4" />
            <CardTitle>Trusted Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Established in {siteConfig.company.established}, we bring years of experience in vehicle imports.
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <Award className="w-12 h-12 text-yellow-500 mb-4" />
            <CardTitle>Quality Assured</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Every vehicle undergoes thorough inspection and comes with detailed reports.
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <Users className="w-12 h-12 text-yellow-500 mb-4" />
            <CardTitle>Customer Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We guide you through every step of the import process with transparent communication.
            </p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <Target className="w-12 h-12 text-yellow-500 mb-4" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Making dream car imports accessible and hassle-free for Malaysians.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
