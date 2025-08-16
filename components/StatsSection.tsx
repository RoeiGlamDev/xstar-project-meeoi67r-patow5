import React from 'react';
import { motion } from 'framer-motion';

interface Stats {
  title: string;
  value: number;
  description: string;
}

const statistics: Stats[] = [
  { title: 'Products Launched', value: 150, description: 'High-end cosmetics crafted with care.' },
  { title: 'Luxury Clients', value: 5000, description: 'Satisfied customers worldwide.' },
  { title: 'Awards Won', value: 25, description: 'Recognized for excellence in the cosmetics industry.' },
  { title: 'Years of Experience', value: 10, description: 'A decade of luxury in every product.' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">luxury LRP cosmetics Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {stat.value}
                </motion.span>
              </h3>
              <p className="text-lg text-gray-600">{stat.title}</p>
              <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;