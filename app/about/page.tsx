import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Luxe',
    position: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Ethan Glow',
    position: 'Creative Director',
    image: '/images/team/ethan.jpg',
  },
  {
    name: 'Isabella Radiance',
    position: 'Head of Product Development',
    image: '/images/team/isabella.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">About luxury LRP cosmetics</h1>
        <p className="text-lg">Where Elegance Meets Excellence</p>
      </header>
      
      <section className="max-w-4xl mx-auto px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <p className="text-md leading-relaxed">
            Founded with a passion for beauty and a commitment to luxury, luxury LRP cosmetics has redefined the standards of the cosmetics industry. Our journey began in 2015, driven by a vision to create high-quality, luxurious products that celebrate individual beauty. 
          </p>
          <p className="text-md leading-relaxed mt-4">
            Each product is crafted with the finest ingredients and innovative formulas, ensuring that our clients experience the true essence of luxury in every application.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-md leading-relaxed">
            <li>Quality: Uncompromising standards in every product.</li>
            <li>Innovation: Constantly evolving to meet the needs of our clients.</li>
            <li>Integrity: Honesty and transparency in everything we do.</li>
            <li>Elegance: A commitment to timeless beauty and sophistication.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-md">{member.position}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;