import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      <motion.div
        className={block text-lg font-semibold text-orange-600 ${isFocused || value ? 'transform -translate-y-4 scale-75' : ''} transition-all duration-300}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
      >
        {label}
      </motion.label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={mt-2 block w-full px-4 py-2 border-2 rounded-lg transition duration-300 
          ${isFocused ? 'border-orange-500 shadow-lg' : 'border-gray-300'} 
          focus:outline-none focus:border-orange-500 bg-white text-gray-800}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.05 }}
      />
      {required && !value && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
  );
};

export default Input;