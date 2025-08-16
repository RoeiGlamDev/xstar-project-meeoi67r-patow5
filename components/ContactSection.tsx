import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  inquiryType: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    inquiryType: 'General Inquiry',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid';
    if (!formState.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Here you would normally handle form submission
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>

      {submitted ? (
        <motion.div
          className="text-lg text-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for your inquiry! We will get back to you shortly.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              className={border-2 border-orange-500 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-orange-300 ${errors.name ? 'border-red-500' : ''}}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
              className={border-2 border-orange-500 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-orange-300 ${errors.email ? 'border-red-500' : ''}}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700" htmlFor="inquiryType">Reason for Inquiry</label>
            <select
              name="inquiryType"
              id="inquiryType"
              value={formState.inquiryType}
              onChange={handleChange}
              className="border-2 border-orange-500 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Feedback">Product Feedback</option>
              <option value="Collaboration Request">Collaboration Request</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formState.message}
              onChange={handleChange}
              className={border-2 border-orange-500 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-orange-300 ${errors.message ? 'border-red-500' : ''}}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-orange-500">Business Information</h3>
        <p className="text-gray-700">luxury LRP cosmetics</p>
        <p className="text-gray-700">Location: 123 Luxury Ave, Glam City, CA 90210</p>
        <p className="text-gray-700">Business Hours: Monday - Friday, 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;