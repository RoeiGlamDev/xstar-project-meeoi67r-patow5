import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  name: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    name: 'Luxury LRP Essentials',
    price: '$99',
    features: ['Free consultation', 'Personalized skincare routine', 'Exclusive product samples'],
  },
  {
    name: 'Luxury LRP Deluxe',
    price: '$199',
    features: ['All Essentials features', 'Premium product selection', 'Follow-up consultation'],
  },
  {
    name: 'Luxury LRP Ultimate',
    price: '$299',
    features: ['All Deluxe features', 'VIP customer support', 'Special discounts on future purchases'],
  },
];

const FAQs = [
  {
    question: 'What is included in the Luxury LRP Essentials package?',
    answer: 'The Essentials package includes a free consultation, a personalized skincare routine, and exclusive samples tailored to your needs.',
  },
  {
    question: 'How often can I schedule consultations?',
    answer: 'Consultations can be scheduled as frequently as you prefer, especially for our Deluxe and Ultimate clients who receive follow-up support.',
  },
  {
    question: 'Are your products suitable for all skin types?',
    answer: 'Yes, at luxury LRP cosmetics, we offer a range of products designed for all skin types, ensuring a luxurious experience for everyone.',
  },
];

const Page: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-10">
      <motion.div
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing for Luxury LRP Cosmetics
      </motion.h1>
      <motion.div
        className="mb-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Experience the elegance of luxury with our exclusive pricing options tailored to enhance your beauty journey.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option) => (
          <motion.div
            key={option.name}
            className="bg-orange-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold">{option.name}</h2>
            <p className="text-xl font-bold">{option.price}</p>
            <ul className="mt-4">
              {option.features.map((feature, index) => (
                <li key={index} className="text-lg">{• ${feature}}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <motion.div
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="bg-orange-100 p-6 rounded-lg">
          {FAQs.map((faq, index) => (
            <div key={index} className="mb-4">
              <motion.div
                className="font-semibold text-lg"
                whileHover={{ color: '#FF5722' }}
              >
                {faq.question}
              </motion.h3>
              <p className="text-md">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;