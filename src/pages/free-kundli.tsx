"use client";
import '../app/globals.css';
import React, { useState } from 'react';
import Header from '../app/Header'; 
import Footer from '../app/Footer';
import Image from 'next/image';
import { KundliData } from '../app/types'; // Assuming you have types defined

// Define interface for formData
interface FormData {
  name: string;
  gender: string;
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  second: string;
  latitude: string;
  longitude: string;
  timezone: string;
}

const FreeKundli: React.FC = () => {
  const [kundliData, setKundliData] = useState<KundliData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    hour: '',
    minute: '',
    second: '',
    latitude: '',
    longitude: '',
    timezone: '',
  });
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state
    setError(null); // Clear any previous errors

    try {
      const response = await fetch('https://app.vedicastroapi.com/api/kundli', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer de88d891-e475-5210-92c9-ce22b3918ea5',
        },
        body: JSON.stringify({
          'date_of_birth': `${formData.year}-${formData.month}-${formData.day}`,
          'time_of_birth': `${formData.hour}:${formData.minute}:${formData.second}`,
          'latitude': parseFloat(formData.latitude),
          'longitude': parseFloat(formData.longitude),
          'timezone': parseFloat(formData.timezone),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setKundliData(data);
    } catch (error) {
      console.error('Error fetching Kundli data:', error);
      setError('An error occurred while fetching Kundli data.'); // Set error message
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-orange-500 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Free Kundli Online
              </h1>
              <p className="mt-4 text-xl text-white">
                Get instant & accurate Janam Kundli with detailed predictions and analysis.
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
                            src="/images/kundli1.jpg" // Replace with actual image
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/kundli2.jpg" // Replace with actual image
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/kundli3.jpg" // Replace with actual image
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/kundli4.jpg" // Replace with actual image
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/kundli5.jpg" // Replace with actual image
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/kundli6.jpg" // Replace with actual image
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/images/kundli7.jpg" // Replace with actual image
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={176}
                            height={256}
                          />
                        </div>
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
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-b from-orange-100 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* About Kundli Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Free Kundli Online - Get Your Detailed Birth Chart with Predictions
                <div className="flex justify-center mt-2 space-x-4">
                  {/* ... ornaments ... */}
                </div>
              </h2>
            </div>
            <div className="prose lg:prose-lg mx-auto">
              <p>
                {/* ... your content here ... */}
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                GENERATE YOUR HOROSCOPE
                <div className="flex justify-center mt-2 space-x-4">
                  {/* ... ornaments ... */}
                </div>
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* ... input fields ... */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                {/* ... other input fields ... */}
              </div>

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md mt-4"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Generating...' : 'Generate Horoscope'}
              </button>

              {/* Display Error Message */}
              {error && (
                <div className="text-red-500 mt-2">{error}</div>
              )}
            </form>
          </div>

          {/* Display Kundli Data */}
          {kundliData && (
            <div className="mt-12">
              {/* ... display kundliData ... */}
            </div>
          )}
        </div>
      </div>

      {/* AstroLife on YouTube Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Subscribe to AstroLife on YouTube
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              {/* ... your YouTube channel description ... */}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#" // Replace with your YouTube channel link
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  <Image
                    src="/images/youtube-logo.png" // Replace with YouTube logo
                    alt="YouTube logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreeKundli;