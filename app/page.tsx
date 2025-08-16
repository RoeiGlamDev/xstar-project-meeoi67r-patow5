import React from 'react';
import { motion } from 'framer-motion';

const page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-orange-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">luxury LRP cosmetics</h1>
          <p className="mt-2 text-lg">Elevate Your Beauty Routine</p>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="hero bg-gradient-to-b from-orange-500 to-white py-20">
          <div className="container mx-auto text-center">
            <motion.div
              className="text-5xl font-extrabold text-orange-600 mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover the Essence of Luxury
            </motion.h2>
            <motion.div
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Indulge in our premium range of cosmetics designed to enhance your natural beauty.
            </motion.p>
            <motion.div
              className="bg-orange-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-orange-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Shop Now
            </motion.button>
          </div>
        </section>
        
        <section className="features py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-10">Our Luxurious Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-orange-600">Premium Ingredients</h3>
                <p className="mt-2 text-gray-600">Crafted from the finest ingredients, our products deliver exceptional results.</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-orange-600">Elegant Packaging</h3>
                <p className="mt-2 text-gray-600">Our luxurious packaging reflects the quality and care put into every product.</p>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold text-orange-600">Unmatched Experience</h3>
                <p className="mt-2 text-gray-600">Immerse yourself in a luxurious shopping experience designed just for you.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2023 luxury LRP cosmetics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default page;