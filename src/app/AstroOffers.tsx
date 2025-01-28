import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const AstroOffers: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Unlock Your Destiny with Our Exclusive Offers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Embark on a transformative journey with our expert astrologers and discover the wisdom of the stars.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Offer 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-out relative">
            <Image
              src="/images/astrologer-consulting.jpg" // Replace with a relevant image
              alt="Astrologer Consultation"
              className="w-full h-56 object-cover"
              width={640}   
              height={860}
            />
            <div className="p-6">
              <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Limited Time
              </div>
              <h3 className="text-xl font-bold text-gray-900">Free Consultation</h3>
              <p className="mt-2 text-gray-600">
                Experience a personalized 30-minute session with one of our expert astrologers. Gain valuable insights into your life path and discover what the stars hold for you.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                Claim Your Free Session
              </button>
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-out relative">
            <Image
              src="/images/pooja-ceremony.jpg" // Replace with a relevant image
              alt="Pooja Ceremony"
              className="w-full h-56 object-cover"
              width={640} 
              height={360}
            />
            <div className="p-6">
              <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Exclusive Offer
              </div>
              <h3 className="text-xl font-bold text-gray-900">50% Off Pooja Services</h3>
              <p className="mt-2 text-gray-600">
                Deepen your spiritual connection and invite blessings into your life. 
                Enjoy 50% off your first Pooja service performed by our experienced priests.
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                Explore Pooja Services
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials (Optional) */}
        <div className="mt-16">
          <div className="text-center">
            {/* Testimonials */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image 
                    src="/images/testimonial-person-1.jpg" // Replace with actual image
                    alt="Testimonial Person 1" 
                    className="h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">"The free consultation was incredibly insightful! The astrologer provided valuable guidance and helped me understand my challenges with a fresh perspective."</p>
                  <p className="mt-1 text-sm text-gray-500">- Sarah J.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image 
                    src="/images/testimonial-person-2.jpg" // Replace with actual image
                    alt="Testimonial Person 2" 
                    className="h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">"I was amazed by the accuracy of the astrologer's predictions. They provided clarity and helped me make important decisions about my career."</p>
                  <p className="mt-1 text-sm text-gray-500">- John D.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image 
                    src="/images/testimonial-person-3.jpg" // Replace with actual image
                    alt="Testimonial Person 3"
                    className="h-12 w-12 rounded-full"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">"The Pooja service was a truly spiritual experience. I felt a deep sense of peace and connection. Thank you for offering such a meaningful service."</p>
                  <p className="mt-1 text-sm text-gray-500">- Maria S.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>

          {/* Add your testimonial component or code here */}
        </div>
      </div>
    </div>
  );
};

export default AstroOffers;