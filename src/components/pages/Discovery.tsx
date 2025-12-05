import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';

export function Discovery() {
  const tools = [
    {
      name: 'JPJ Plate Check',
      url: 'https://www.jpj.gov.my',
      description: 'Check vehicle registration and ownership details',
      icon: '🚗'
    },
    {
      name: 'PUSPAKOM',
      url: 'https://www.puspakom.com.my',
      description: 'Vehicle inspection and certification',
      icon: '🔍'
    },
    {
      name: 'MyEG',
      url: 'https://www.myeg.com.my',
      description: 'Road tax renewal and vehicle services',
      icon: '📋'
    },
    {
      name: 'Touch n Go eWallet',
      url: 'https://www.touchngo.com.my',
      description: 'Digital wallet for tolls and parking',
      icon: '💳'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl mb-2">Discovery Tools</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Useful resources and tools for vehicle owners in Malaysia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="text-4xl mb-2">{tool.icon}</div>
              <CardTitle>{tool.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {tool.description}
              </p>
              <a href={tool.url} target="_blank" rel="noopener noreferrer">
                <Button className="w-full" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
