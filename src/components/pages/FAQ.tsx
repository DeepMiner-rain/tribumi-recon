import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import Card from '../ui/Card'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is a recon car?',
    answer: 'A recon (reconditioned) car is a used vehicle imported from countries like Japan, UK, or Australia. These cars are inspected, refurbished if needed, and registered for use in Malaysia.',
  },
  {
    category: 'General',
    question: 'Why should I import a car instead of buying locally?',
    answer: 'Imported cars often offer better value, higher specifications, authentic mileage, and access to models not available in Malaysia. Many also come with verified service histories.',
  },
  {
    category: 'Process',
    question: 'How long does the import process take?',
    answer: 'Typically 2-3 months from vehicle selection to delivery, including shipping (30-45 days), customs clearance (2-3 weeks), and inspection/registration (1-2 weeks).',
  },
  {
    category: 'Process',
    question: 'Can I choose the specific vehicle I want?',
    answer: 'Yes! You can browse our current inventory or request us to find a specific make, model, and specification from our overseas auction partners.',
  },
  {
    category: 'Costs',
    question: 'What costs are involved in importing a car?',
    answer: 'Costs include vehicle price, shipping, import duty (10-30%), excise duty (75-105%), sales tax (10%), inspection, insurance, and registration fees. Use our calculator for estimates.',
  },
  {
    category: 'Costs',
    question: 'Are there any hidden charges?',
    answer: 'No! We believe in complete transparency. All costs are disclosed upfront in our quotation. What you see is what you pay.',
  },
  {
    category: 'Verification',
    question: 'How do I verify the vehicle condition?',
    answer: 'We provide auction reports (Japan), MOT/service history (UK), PPSR checks (Australia), HD photos, videos, and professional inspection reports before purchase.',
  },
  {
    category: 'Verification',
    question: 'Is the mileage authentic?',
    answer: 'Yes, we only source from verified platforms with strict odometer regulations. Japan has auction grades, UK has MOT records, and Australia has PPSR verification.',
  },
  {
    category: 'Financing',
    question: 'Can I get a loan for an imported car?',
    answer: 'Yes, most Malaysian banks offer financing for imported vehicles. We can assist you with loan applications and connecting you with our banking partners.',
  },
  {
    category: 'Financing',
    question: 'What down payment is required?',
    answer: 'Typically 10-20% of the vehicle price, though this varies by bank and your credit profile. Some banks may require higher down payments for older vehicles.',
  },
  {
    category: 'Warranty',
    question: 'Do imported cars come with warranty?',
    answer: 'Used imports don\'t have manufacturer warranty, but we offer optional extended warranty packages covering major components for peace of mind.',
  },
  {
    category: 'After Sales',
    question: 'Where can I service my imported car?',
    answer: 'Imported cars can be serviced at any authorized service center or reputable workshop. Parts are readily available for popular models.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))]
  
  const filteredFAQs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory)
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-4">
            <HelpCircle className="w-8 h-8 text-yellow-500" />
          </div>
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find answers to common questions about importing cars with Tribumi
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card
              key={index}
              className="cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500">
                      {faq.category}
                    </span>
                  </div>
                  <h4 className="mb-2">{faq.question}</h4>
                  {openIndex === index && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}