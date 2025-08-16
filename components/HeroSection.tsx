import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 z-10 bg-opacity-30 backdrop-blur-md"></div>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center p-8"
      >
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          luxury LRP cosmetics
        </h1>
        <p className="text-lg font-light text-white mb-8">
          Discover the elegance of beauty with our premium cosmetics, crafted to enhance your natural allure.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.div
            href="#products"
            className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.a>
          <motion.div
            href="#about"
            className="px-6 py-3 text-lg font-semibold text-orange-500 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.a>
        </div>
        <div className="mt-12">
          <p className="text-sm text-white italic">
            Trusted by beauty experts and loved by customers worldwide.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;