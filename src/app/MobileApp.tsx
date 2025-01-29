import React from "react";
import Image from "next/image";

const MobileApp = () => {
  return (
    <section className="mobile-app py-16 bg-orange-500 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the App for On-the-Go Insights
          </h2>
          <p className="text-lg md:text-xl">
            Download our mobile app for personalized horoscopes, daily readings,
            and expert consultations at your fingertips.
          </p>
        </div>
        {/* App Store Buttons */}
        <div className="flex justify-center md:justify-end gap-4">
          <a href="#" className="app-store-button">
            <Image
              src="/images/app-store-badge.png"
              alt="Download on the App Store"
              width={135}
              height={40}
            />
          </a>
          <a href="#" className="app-store-button">
            <Image
              src="/images/google-play-badge.png"
              alt="Get it on Google Play"
              width={135}
              height={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
