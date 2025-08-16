import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    companyName: string;
    year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName = "luxury LRP cosmetics", year }) => {
    return (
        <footer className="bg-white text-orange-600 py-8">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">{companyName}</h2>
                        <p className="text-sm">Crafting beauty with elegance and sophistication.</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <a href="/about" className="hover:text-orange-400 transition-colors duration-200">About Us</a>
                        <a href="/products" className="hover:text-orange-400 transition-colors duration-200">Our Products</a>
                        <a href="/blog" className="hover:text-orange-400 transition-colors duration-200">Blog</a>
                        <a href="/contact" className="hover:text-orange-400 transition-colors duration-200">Contact</a>
                    </div>
                </motion.div>
                <div className="mt-6 border-t border-orange-200 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">© {year} {companyName}. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/luxurylrpcosmetics" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-200">Instagram</a>
                            <a href="https://www.facebook.com/luxurylrpcosmetics" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-200">Facebook</a>
                            <a href="https://www.twitter.com/luxurylrpcosmetics" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-200">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;