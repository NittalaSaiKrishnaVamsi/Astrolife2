"use client";

import React from "react";
import Image from "next/image";

const AstrologyConsultation: React.FC = () => {
  return (
    <section className="bg-gradient-to-b to-white py-20 px-4 sm:px-6 lg:px-8"> 
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            ONLINE ASTROLOGY CONSULTATION & SERVICES
            <div className="flex justify-center mt-2 space-x-4">
              <Image
                src="/images/heading-decoration2.png"
                alt="ornament-left"
                width={30}
                height={30}
              />
              <Image
                src="/images/heading-decoration1.png"
                alt="ornament-right"
                width={30}
                height={30}
              />
            </div>
          </h2>
        </div>

        {/* Content Section */}
        <div className="prose lg:prose-lg mx-auto">
          <p>
            The online footprint of things and people has grown over the years. And AstroLife, as a brand, is using the best of it to cater online astrology services to anyone and everyone across the globe. 
            AstroLife has nurtured a community of the best astrologers with expertise in Vedic Astrology, tarot card reading, Vastu Shastra, numerology, Reiki healing, Palmistry, and many more subjects.
          </p>

          <p>
            The motive behind providing astrology predictions online is simply helping people save time, money, and pain in finding astrologers in the hustle and bustle of city life. 
            Besides, to ensure credibility, AstroLife has worked extensively to add value to customer service. And a good chunk of credit for this goes to the astrologers who work for 100% customer satisfaction using their knowledge to deliver impeccable astrology consultancy.
          </p>

          <p>
            Surely, not everything in life should revolve around money, so at AstroLife, besides online astrology, we also organize various events that help one get a better understanding of online astrology prediction and more related themes. 
            These events range from free astrology predictions sessions to live events involving Aartis and Pujas that happen across India at some of the most renowned temples. It's a way for us to connect with people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AstrologyConsultation;