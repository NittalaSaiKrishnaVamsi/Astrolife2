"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SocialMediaSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={toggleSidebar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-4 rounded-l-lg focus:outline-none focus:ring focus:ring-orange-300 transition-colors duration-300 ${
          isOpen ? 'bg-orange-600 text-white' : 'bg-orange-500 text-gray-300'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>

      {/* Sidebar Content */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { x: 0 },
          closed: { x: '100%' },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-orange-500 p-4 rounded-l-lg flex flex-col items-center space-y-4 shadow-md"
      >
        <a href="https://www.instagram.com/sunshinecosma/" className="social-icon">
          <Image
            src="/images/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform duration-200" 
          />
        </a>
        <a href="https://www.facebook.com/your-facebook-page" className="social-icon">
          <Image
            src="/images/facebook.png"
            alt="Facebook"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform duration-200" 
          />
        </a>
        {/* Add other social media icons with similar structure */}
      </motion.div>
    </div>
  );
};

export default SocialMediaSidebar;