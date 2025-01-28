"use client";
import '../app/globals.css';
import React, { useState, useEffect } from 'react';
import Header from '../app/Header';
import Footer from '../app/Footer';
import Image from 'next/image';

interface Horoscope {
  date: string;
  horoscope: string;
  sunsign: string;
}

const HoroscopePage: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [horoscopeData, setHoroscopeData] = useState<Horoscope | null>(null);

  const handleSignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSign(event.target.value);
  };

  const fetchHoroscope = async () => {
    if (!selectedSign) return;

    try {
      const response = await fetch(
        `https://api.vedicastroapi.com/json/horoscope/daily/${selectedSign}?api_key=de88d891-e475-5210-92c9-ce22b3918ea5`
      );
      const data = await response.json();
      setHoroscopeData(data);
    } catch (error) {
      console.error('Error fetching horoscope:', error);
    }
  };

  useEffect(() => {
    fetchHoroscope();
  }, [selectedSign]);

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-orange-500 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                AstroLife Horoscope
              </h1>
              <p className="mt-4 text-xl text-white">
                Explore the fascinating world of astrology and spirituality.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <Image
                            src="/images/kundli1.jpg" // Replace with actual image path
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/kundli2.jpg" // Replace with actual image path
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                        {/*... other images... */}
                      </div>
                      {/*... other image grids... */}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-orange-600 hover:bg-orange-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horoscope Content */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Daily Horoscope</h1>

        <div className="mb-4">
          <label htmlFor="sign" className="block text-gray-700 font-bold mb-2">
            Select Your Sign:
          </label>
          <select
            id="sign"
            value={selectedSign}
            onChange={handleSignChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Choose a sign</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </div>

        {horoscopeData && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">
              {horoscopeData.sunsign} - {horoscopeData.date}
            </h2>
            <p className="text-gray-700">{horoscopeData.horoscope}</p>
          </div>
        )}
      </div>

      {/* AstroLife on YouTube Section - This is the part you didn't provide 
          If you have the code for this section, please provide it, and I'll add it here.
      */}

      <Footer />
    </div>
  );
};

export default HoroscopePage;