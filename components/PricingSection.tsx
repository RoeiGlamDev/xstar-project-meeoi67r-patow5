import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Signature Glow Facial',
    price: '$120',
    features: [
      '60-minute treatment',
      'Custom skincare consultation',
      'Luxury facial massage',
      'Premium product selection',
      'Complimentary skincare sample',
    ],
  },
  {
    name: 'Deluxe Rejuvenation Package',
    price: '$200',
    features: [
      '90-minute treatment',
      'Advanced skin analysis',
      'Luxury facial massage',
      'Exclusive product line',
      'Complimentary skincare gift set',
    ],
  },
  {
    name: 'Ultimate Indulgence Experience',
    price: '$350',
    features: [
      '2-hour treatment',
      'Personal skincare consultant',
      'Luxury aromatherapy',
      'Custom luxury facial',
      'Full body treatment option',
      'Exclusive membership benefits',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-orange-500 mb-8">
          Luxury LRP Cosmetics Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white border border-orange-500 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              aria-label={${tier.name} pricing tier}
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                {tier.name}
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded transition hover:bg-orange-600">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;