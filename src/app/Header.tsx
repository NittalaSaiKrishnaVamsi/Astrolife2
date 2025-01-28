"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-0 sticky top-0 z-50" 
      style={{ 
        background: 'radial-gradient(circle, #FFAE00, #EC3900)' 
      }}>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-2 md:mb-0"> 
          <Image 
            src="/images/Logo.png"
            alt="AstroLife Logo"
            width={40} 
            height={40} 
          />
          <span className="ml-2 text-xl font-bold">AstroLife</span>
        </div>

        {/* Hamburger Icon for Mobile - Right Side */}
        <div className="md:hidden flex justify-end"> 
          <button 
            className="text-white focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`md:flex ${showMobileMenu ? 'block' : 'hidden'}`}> 
          <ul className="flex flex-col md:flex-row md:justify-end gap-4 mt-4 md:mt-0">
            <li>
              <Link href="/" className="hover:text-orange-200">Home</Link> 
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-200">About Us</Link>
            </li>
            <li>
              <Link href="/astrologers" className="hover:text-orange-200">Astrologers</Link>
            </li>
            <li>
              <Link href="/language" className="hover:text-orange-200">Language</Link>
            </li>
            <li>
              {/* Dropdown for Login */}
              <div className="relative inline-block text-left"> 
                <button onClick={toggleDropdown} className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-md inline-flex items-center">
                  <span>Login</span>
                  <svg 
                    className="ml-2 -mr-1 h-4 w-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    /> 
                  </svg>
                </button>
                {showDropdown && ( 
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/LoginPage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Astrologer Login</Link>
                      <Link href="/Userlogin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">User Login</Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>

          {/* Sub-navigation - Only on smaller screens */}
          <div className="md:hidden"> 
            <nav className="flex flex-col mt-4"> 
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/free-kundli" className="hover:text-orange-200">Free Kundli</Link>
                </li>
                <li>
                  <Link href="/free-kundli" className="hover:text-orange-200">Kundli Matching</Link>
                </li>
                <li>
                  <Link href="/horoscope" className="hover:text-orange-200">Horoscopes</Link>
                </li>
                <li>
                  <Link href="/free-kundli" className="hover:text-orange-200">Rasifal</Link>
                </li>
                <li>
                  <Link href="/free-kundli" className="hover:text-orange-200">Rituals</Link>
                </li>
                <li>
                  <Link href="/free-kundli" className="hover:text-orange-200">Panchang</Link>
                </li>
                <li>
                  <Link href="/Blog" className="hover:text-orange-200">Blog</Link>
                </li>
                <li>
                  <Link href="/free-kundli" className="hover:text-orange-200">Spirituality</Link>
                </li>
                <li>
                  <Link href="/free-kundli" className="hover:text-orange-200">More</Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>

      {/* Sub-navigation - Only on larger screens */}
      <nav className="bg-orange-700 py-2 mt-4 hidden md:block"> 
        <div className="container mx-auto" >
          <ul className="flex flex-wrap justify-center gap-10">
            <li>
              <Link href="/free-kundli" className="hover:text-orange-200">Free Kundli</Link>
            </li>
            <li>
              <Link href="/free-kundli" className="hover:text-orange-200">Kundli Matching</Link>
            </li>
            <li>
              <Link href="/horoscope" className="hover:text-orange-200">Horoscopes</Link>
            </li>
            <li>
              <Link href="/free-kundli" className="hover:text-orange-200">Rasifal</Link>
            </li>
            <li>
              <Link href="/free-kundli" className="hover:text-orange-200">Rituals</Link>
            </li>
            <li>
              <Link href="/free-kundli" className="hover:text-orange-200">Panchang</Link>
            </li>
            <li>
              <Link href="/Blog" className="hover:text-orange-200">Blog</Link>
            </li>
            <li>
              <Link href="/free-kundli" className="hover:text-orange-200">Spirituality</Link>
            </li>
            <li>
              <Link href="/free-kundli" className="hover:text-orange-200">More</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;