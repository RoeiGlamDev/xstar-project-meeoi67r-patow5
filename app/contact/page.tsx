import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <motion.div 
                className="text-5xl font-bold text-orange-600 mb-8" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                Contact Us at luxury LRP cosmetics
            </motion.h1>
            <p className="text-lg text-gray-600 mb-4">
                We’re here to assist you with all your luxury cosmetics needs. Reach out to us!
            </p>
            <form className="w-full max-w-lg bg-orange-100 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-orange-600 font-semibold mb-2" htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-orange-600 font-semibold mb-2" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-orange-600 font-semibold mb-2" htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" 
                        rows={4} 
                        required 
                    ></textarea>
                </div>
                <motion.div 
                    type="submit" 
                    className="bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-orange-500 transform hover:scale-105" 
                    whileHover={{ scale: 1.05 }}
                >
                    Send Message
                </motion.button>
            </form>
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Location</h2>
                <p className="text-lg text-gray-600">Visit us at:</p>
                <p className="text-lg text-gray-600">123 Luxury Lane, Glamour City, NY 10001</p>
                <h3 className="text-lg font-semibold text-orange-600 mt-4">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
            </div>
        </div>
    );
};

export default ContactPage;