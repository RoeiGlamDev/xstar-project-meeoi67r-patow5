import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  message: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Johnson',
    message: 'Luxury LRP cosmetics transformed my skincare routine! The products are high-quality and truly deliver on their promises.',
    rating: 5,
    photo: 'https://example.com/photos/sophia.jpg',
  },
  {
    name: 'Isabella Martinez',
    message: 'I absolutely love the luxurious feel of the lipsticks! They glide on perfectly and the colors are stunning.',
    rating: 5,
    photo: 'https://example.com/photos/isabella.jpg',
  },
  {
    name: 'Olivia Brown',
    message: 'The customer service at luxury LRP cosmetics is exceptional. They really care about their clients and their needs.',
    rating: 5,
    photo: 'https://example.com/photos/olivia.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonial.photo}
                alt={Photo of ${testimonial.name}}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-orange-600">{testimonial.name}</h3>
              <p className="text-gray-700 italic mb-2">"{testimonial.message}"</p>
              <div className="flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.121-6.536L1 6.545l6.636-.577L10 0l2.364 5.968 6.636.577-4.243 4.009 1.121 6.536z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;