import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="transform transition-transform duration-300 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-orange-600 p-6">
        <h1 className="text-4xl font-bold text-white text-center">luxury LRP cosmetics</h1>
      </header>
      <main className="p-8">
        <SlideUp>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-orange-600">Elevate Your Beauty</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our premium range of cosmetics that embody elegance and sophistication.
              Each product is crafted with the finest ingredients, designed to enhance your natural beauty.
            </p>
          </section>
        </SlideUp>
        
        <SlideUp delay={0.2}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-orange-600">Our Collection</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our luxurious lipsticks, foundations, and skincare essentials tailored to meet the desires of discerning beauty enthusiasts.
            </p>
          </section>
        </SlideUp>
        
        <SlideUp delay={0.4}>
          <section>
            <h2 className="text-3xl font-semibold text-orange-600">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600">
              luxury LRP cosmetics is dedicated to delivering a high-end experience with each product. 
              Our formulations are cruelty-free, and we prioritize sustainability without compromising luxury.
            </p>
          </section>
        </SlideUp>
      </main>
      <footer className="bg-orange-600 p-6 text-center">
        <p className="text-white">
          © {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;