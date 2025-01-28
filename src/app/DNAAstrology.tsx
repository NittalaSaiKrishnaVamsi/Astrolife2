"use client";

import React from "react";
import Image from "next/image";

const DNAAstrology: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8"> 
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            UNDERSTANDING DNA ASTROLOGY
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
            Curious about how Artificial Intelligence can revolutionize your astrological experience?
            Discover the future of astrology with our advanced AI astrology services.
          </p>

          <p>
            At AstroLife, we offer an AI-powered platform that provides personalized AI horoscope readings,
            AI Kundli generation, and consultations with AI astrologers. Our cutting-edge AI technology analyzes
            vast amounts of astrological data to deliver accurate and customized predictions and insights.
            Whether you're looking for an AI Kundli that incorporates the latest astrological algorithms or an
            AI astrologer who can provide instant, precise answers to your questions, AstroLife is your go-to destination.
          </p>

          <p>
            Our AI astrology services combine the wisdom of traditional astrology with the power of Artificial
            Intelligence, ensuring that you receive the most accurate and insightful readings available. Embrace
            the future with our AI-enabled astrology, where technology meets tradition, to guide you through life's
            uncertainties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DNAAstrology;