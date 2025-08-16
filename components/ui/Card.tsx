import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-orange-500 opacity-30 rounded-lg" />
      </div>
      <div className="p-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg">
        <h2 className="text-2xl font-bold text-orange-600">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;