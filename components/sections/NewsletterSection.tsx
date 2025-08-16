import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Join the luxury LRP cosmetics Family",
  description = "Subscribe to our newsletter for exclusive offers, new product launches, and beauty tips.",
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission (e.g., API call)
    console.log("Email submitted:", email);
    setEmail('');
  };

  return (
    <section className="bg-white py-10 px-5">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div 
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="border-2 border-orange-600 rounded-lg p-3 text-gray-800 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 ease-in-out"
          />
          <motion.div 
            type="submit"
            className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;