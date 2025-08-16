import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'Our luxury LRP cosmetics are crafted with the finest ingredients, ensuring a flawless application and a radiant finish.',
    icon: <i className="fas fa-star text-orange-500"></i>,
  },
  {
    title: 'Elegant Packaging',
    description: 'Experience the sophistication of our beautifully designed packaging, reflecting the luxury of our brand.',
    icon: <i className="fas fa-box text-orange-500"></i>,
  },
  {
    title: 'Cruelty-Free',
    description: 'Luxury LRP cosmetics are committed to cruelty-free practices, so you can feel good about your beauty choices.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Luxurious Textures',
    description: 'Indulge in our rich and velvety textures that glide on effortlessly for an elevated makeup experience.',
    icon: <i className="fas fa-paint-brush text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold mb-10 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;