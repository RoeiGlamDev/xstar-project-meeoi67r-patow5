import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Jessica Smith',
    role: 'Founder & CEO',
    image: '/images/jessica.jpg',
    bio: 'With over a decade in the beauty industry, Jessica crafts luxurious cosmetics that embody elegance and sophistication.',
  },
  {
    name: 'Michael Johnson',
    role: 'Head of Product Development',
    image: '/images/michael.jpg',
    bio: 'An expert in formulation, Michael ensures that every product meets our high standards for quality and luxury.',
  },
  {
    name: 'Samantha Lee',
    role: 'Marketing Director',
    image: '/images/samantha.jpg',
    bio: 'Samantha brings our brand vision to life, connecting luxury LRP cosmetics with beauty enthusiasts around the globe.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.div
          className="text-gray-700 text-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At luxury LRP cosmetics, we believe that beauty is a journey of self-expression and empowerment. Founded on the principles of quality and innovation, we create products that are not only luxurious but also enhance the natural beauty of every individual. Our commitment to excellence is reflected in our meticulously crafted formulations and exquisite packaging.
        </motion.p>
        
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Mission
        </motion.h2>
        <motion.div
          className="text-gray-700 text-lg mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our mission at luxury LRP cosmetics is to empower individuals through the art of makeup. We aspire to inspire confidence and creativity, providing high-quality, luxurious products that celebrate diversity and beauty in all forms. Every product we launch is a testament to our dedication to sustainability, elegance, and the artistry of cosmetics.
        </motion.p>
        
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-600">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="text-gray-700 mt-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;