import React from 'react';
import Image from 'next/image';

interface Expert {
  name: string;
  specialization: string;
  image: string;
  description?: string; // Add an optional description
}

const Experts: React.FC = () => {
  const experts: Expert[] = [
    {
      name: 'Dr. Jane Doe',
      specialization: 'Vedic Astrology',
      image: '/images/expert1.jpg',
      description:
        'Dr. Jane Doe is a renowned Vedic astrologer with over 20 years of experience. She specializes in providing personalized readings and guidance on relationships, career, and life purpose.',
    },
    {
      name: 'John Smith',
      specialization: 'Tarot Reading',
      image: '/images/expert2.jpg',
      description:
        'John Smith is a gifted tarot reader with an intuitive understanding of the cards. He offers insightful readings that help clients gain clarity and make empowered choices.',
    },
    {
      name: 'Alice Johnson',
      specialization: 'Numerology',
      image: '/images/expert3.jpg',
      description:
        'Alice Johnson is a certified numerologist who helps clients understand the deeper meaning of numbers in their lives. She provides personalized readings that reveal hidden patterns and potential.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Meet Our Expert Astrologers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Connect with experienced and insightful guides who can help you navigate your life&#39;s journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-out"
            >
              <Image
                src={expert.image}
                alt={expert.name}
                className="w-full h-56 object-cover"
                width={640}
                height={360}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                <p className="mt-2 text-gray-600">{expert.specialization}</p>
                {expert.description && (
                  <p className="mt-4 text-gray-500 text-sm">{expert.description}</p>
                )}
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
