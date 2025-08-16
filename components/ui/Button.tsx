import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, boxShadow: '0px 0px 20px rgba(255, 165, 0, 0.5)' },
  tap: { scale: 0.95 },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyles = 'font-bold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out focus:outline-none';
  const primaryStyles = 'bg-orange-500 text-white hover:bg-orange-600';
  const secondaryStyles = 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white';

  const styles = variant === 'primary' ? ${baseStyles} ${primaryStyles} : ${baseStyles} ${secondaryStyles};

  return (
    <motion.div
      className="styles"
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      aria-label={Button for luxury LRP cosmetics: ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;