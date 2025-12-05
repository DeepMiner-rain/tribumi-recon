import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { siteConfig } from '../../config/siteConfig';

export function FAQPage() {
  const faqs = [
    {
      question: 'How long does the import process take?',
      answer: `The typical timeline is ${siteConfig.timeline.total}. This includes sourcing, shipping, customs clearance, and final delivery.`
    },
    {
      question: 'What is the deposit amount required?',
      answer: `We require a ${siteConfig.payment.depositPercentage}% deposit to secure your vehicle reservation.`
    },
    {
      question: 'Do you provide vehicle inspection reports?',
      answer: `Yes! ${siteConfig.services.inspection.description}`
    },
    {
      question: 'Is there a warranty on imported vehicles?',
      answer: siteConfig.services.warranty.description
    },
    {
      question: 'Which countries do you import from?',
      answer: `We import quality reconditioned vehicles from ${siteConfig.markets.map(m => m.country).join(', ')}.`
    },
    {
      question: 'What costs are involved in importing a car?',
      answer: 'The total cost includes the vehicle price, shipping fees, import duties, sales tax, registration fees, and our service fee. Use our cost calculator for an accurate estimate.'
    },
    {
      question: 'Can I choose my own vehicle?',
      answer: 'Yes! You can browse our catalog or request us to find a specific vehicle for you from auctions and dealerships.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers and other secure payment methods. Full payment details will be provided during the reservation process.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 dark:text-gray-400">Find answers to common questions about importing vehicles</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
