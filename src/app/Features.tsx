import React from 'react';
import {
  MdOutlineArticle,
  MdOutlineSupportAgent,
  MdOutlineScale,
} from 'react-icons/md'; // Import only the used icons

const Features = () => {
  const features = [
    {
      icon: MdOutlineArticle,
      title: 'Personalized Readings',
      description: 'Get in-depth insights into your birth chart, relationships, and life path.',
    },
    {
      icon: MdOutlineSupportAgent,
      title: 'Expert Consultations',
      description: 'Connect with experienced astrologers for personalized guidance and advice.',
    },
    {
      icon: MdOutlineScale,
      title: 'Daily Horoscopes',
      description: 'Receive daily astrological insights and predictions tailored to your zodiac sign.',
    },
    //... other features
  ];

  return (
    <section className="features bg-gradient-to-b to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/*... (heading and subtitle)... */}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-out">
              <div className="p-6">
                <div className="icon mb-4 text-4xl text-orange-500 flex justify-center">
                  {/* Render the icon dynamically */}
                  {React.createElement(feature.icon, { className: 'h-8 w-8' })} 
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;