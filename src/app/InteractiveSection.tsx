import React from 'react';
import Link from "next/link";

const InteractiveSection = () => {
  return (
    <section className="interactive py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Get Your Personalized Reading
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Zodiac Sign Selection */}
          <div className="zodiac-selection">
            <label htmlFor="zodiac" className="block text-lg font-medium mb-2">
              Select Your Zodiac Sign:
            </label>
            <select 
              id="zodiac" 
              className="border border-gray-300 rounded-md py-2 px-4 w-full md:w-auto"
            >
              <option value="">Choose your sign</option>
              <option value="aries">Aries</option>
              <option value="taurus">Taurus</option>
              <option value="Gemini">Gemini</option>
              <option value="Cancer">Cancer</option>
              <option value="Leo">Leo</option>
              <option value="Virgo">Virgo</option>
              <option value="Libra">Libra</option>
              <option value="Scorpio">Scorpio</option>
              <option value="Sagittarius">Sagittarius</option>
              <option value="Capricorn">Capricorn</option>
              <option value="Aquarius">Aquarius</option>
              <option value="Pisces">Pisces</option>
              {/* Add other zodiac signs */}
            </select>
          </div>

          {/* Birth Date Input */}
          <div className="birth-date">
            <label htmlFor="birth-date" className="block text-lg font-medium mb-2">
              Enter Your Birth Date:
            </label>
            <input 
              type="date" 
              id="birth-date" 
              className="border border-gray-300 rounded-md py-2 px-4 w-full md:w-auto" 
            />
          </div>

          {/* Get Reading Button */}
          <Link legacyBehavior href="/your-destination-page">
  <a className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">
    Get Reading
  </a>
</Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
