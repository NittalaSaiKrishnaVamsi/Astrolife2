import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component

const Hero = () => {
  return (
    <div>
      <section className="hero relative mt-30">
        
      </section>
    {/* Call to Action Buttons */}
<section className="call-to-action ">
  <div className="bg-gradient-to-r from-orange-400 to-orange-600 py-8 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link
          href="/talk-to-astrologer"
          className="bg-white text-orange-600 hover:text-orange-700 rounded-lg shadow-md hover:shadow-lg py-4 px-6 flex flex-col items-center transition-colors duration-200"
        >
          <Image
            src="/images/Phone.png"
            alt="Talk to Astrologer"
            width={60}
            height={60}
          />
          <span className="mt-2 font-medium">Talk to Astrologer</span>
        </Link>
        <Link
          href="/chat-with-astrologer"
          className="bg-white text-orange-600 hover:text-orange-700 rounded-lg shadow-md hover:shadow-lg py-4 px-6 flex flex-col items-center transition-colors duration-200"
        >
          <Image
            src="/images/chat.png"
            alt="Chat with Astrologer"
            width={60}
            height={60}
          />
          <span className="mt-2 font-medium">Chat with Astrologer</span>
        </Link>
        <Link
          href="/astromall-shop"
          className="bg-white text-orange-600 hover:text-orange-700 rounded-lg shadow-md hover:shadow-lg py-4 px-6 flex flex-col items-center transition-colors duration-200"
        >
          <Image
            src="/images/shop.png"
            alt="Astromall Shop"
            width={60}
            height={60}
          />
          <span className="mt-2 font-medium">Astromall Shop</span>
        </Link>
        <Link
          href="/book-a-pooja"
          className="bg-white text-orange-600 hover:text-orange-700 rounded-lg shadow-md hover:shadow-lg py-4 px-6 flex flex-col items-center transition-colors duration-200"
        >
          <Image
            src="/images/book.png"
            alt="Book A Pooja"
            width={60}
            height={60}
          />
          <span className="mt-2 font-medium">Book A Pooja</span>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Astrology Prediction Section */}
      <section
        className="astrology-prediction mt-20 py-4"
        style={{ background: "#F5F5F5" }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex-shrink-0">
              <Image
                src="/images/heading-decoration2.png"
                alt="Decoration"
                width={30}
                height={30}
              />
            </div>
            <h2 className="text-3xl font-bold mx-4">Astrology Prediction</h2>
            <div className="flex-shrink-0">
              <Image
                src="/images/heading-decoration1.png"
                alt="Decoration"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-14 mt-8">
            {Array.from({ length: 12 }, (_, index) => (
              <button key={index} className="symbol-button">
                <Image
                  src={`/images/zodiac-${index + 1}.png`} // Assuming you have images named zodiac-1.png, zodiac-2.png, etc.
                  alt={`Zodiac ${index + 1}`}
                  width={50}
                  height={50}
                />
                <span className="mt-2 text-sm">
                  {["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"][
                    index
                  ]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Astrology Services Section */}
      <section className="complementary-services mt-20">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-8">
            {/* Added margin-bottom */}
            <div className="flex-shrink-0">
              <Image
                src="/images/heading-decoration2.png"
                alt="Decoration"
                width={30}
                height={30}
              />
            </div>
            <h2 className="text-3xl font-bold mx-4">
              COMPLIMENTARY ASTROLOGY SERVICES
            </h2>
            <div className="flex-shrink-0">
              <Image
                src="/images/heading-decoration1.png"
                alt="Decoration"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="service-card border-2 border-orange-500 rounded-lg p-6">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src="/images/om.png"
                  alt="Om Symbol"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Shubh Muhurat Selection
              </h3>
              <p className="text-gray-600">
                Choose the most auspicious time for important events in your
                life, aligned with cosmic energies...
              </p>
              <button className="text-orange-500 mt-4">Read more</button>{" "}
              {/* Added margin-top */}
            </div>

            {/* Service Card 2 (Kundali Matching) */}
            <div className="service-card border-2 border-orange-500 rounded-lg p-6">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src="/images/kundali-matching.png"
                  alt="Kundali Matching Symbol"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Kundali Matching Services
              </h3>
              <p className="text-gray-600">
                Ensure a perfect match for marriage with our detailed Kundali
                analysis by expert astrologers...
              </p>
              <button className="text-orange-500 mt-4">Read more</button>
            </div>

            {/* Service Card 3 (Vastu Consultation) */}
            <div className="service-card border-2 border-orange-500 rounded-lg p-6">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src="/images/vastu.png"
                  alt="Vastu Symbol"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Vastu Consultation</h3>
              <p className="text-gray-600">
                Create a positive living environment with Vastu tips and
                suggestions tailored to your space...
              </p>
              <button className="text-orange-500 mt-4">Read more</button>
            </div>
          </div>
        </div>
      </section>

     {/* AstroLife on YouTube Section */}
<section className="astrolife-youtube mt-20">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <div className="flex justify-center items-center mb-8">
      <div className="flex-shrink-0">
        <Image
          src="/images/heading-decoration2.png"
          alt="Decoration Left"
          width={30}
          height={30}
        />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold mx-4 text-center text-orange-600">
        AstroLife ON YOUTUBE
      </h2>
      <div className="flex-shrink-0">
        <Image
          src="/images/heading-decoration1.png"
          alt="Decoration Right"
          width={30}
          height={30}
        />
      </div>
    </div>

    {/* Main YouTube Video */}
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/p57JAMLp1a4" // Corrected embed URL
        title="AstroLife YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* Other YouTube Videos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {Array.from({ length: 4 }, (_, index) => (
        <a
          key={index}
          href={`https://www.youtube.com/watch?v=p57JAMLp1a4`} // Replace with your actual YouTube video link
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative">
            <Image
              src={`/images/youtube-thumbnail-${index + 1}.jpg`} // Replace with your thumbnail images
              alt={`YouTube Video ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="mt-2 text-sm text-center text-gray-700 font-medium">
            Video Title {index + 1} {/* Replace with dynamic or specific title */}
          </p>
        </a>
      ))}
    </div>
  </div>
</section>


      {/* Top Blogs from AstroLife Section */}
<section className="top-blogs mt-20 bg-gradient-to-b to-white py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
        Top Blogs from AstroLife
      </h2>
    </div>

    {/* Blog Posts */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }, (_, index) => (
        <Link key={index} href={`/blog/${index + 1}`} className="group">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200">
            <Image
              src={`/images/blog-image-${index + 1}.jpg`}
              alt={`Blog Post ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
          </div>
          <div className="bg-white p-6 rounded-b-lg">
            <h3 className="text-lg font-bold text-gray-900">
              1st Blog of 2025
            </h3>
            <div className="flex justify-between text-gray-600 mt-2">
              <p className="text-sm">By author name</p>
              <p className="text-sm">DATE</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

       {/* Daily Horoscope Section */}
<section className="daily-horoscope mt-20">
  <div className="container mx-auto">
    <div className="flex justify-center items-center mb-8 py-2 px-4 rounded-full">
      <div className="flex-shrink-0">
        <Image
          src="/images/heading-decoration2.png"
          alt="Decoration"
          width={30}
          height={30}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mx-4 text-black">
        DAILY HOROSCOPE
      </h2>
      <div className="flex-shrink-0">
        <Image
          src="/images/heading-decoration1.png"
          alt="Decoration"
          width={30}
          height={30}
        />
      </div>
    </div>

    {/* Horoscope Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        { name: "Aries", img: "/images/zodiac-1.png", date: "Jan 17, 2025", description: "Today is a day to take bold steps in your personal life..." },
        { name: "Taurus", img: "/images/zodiac-2.png", date: "Jan 17, 2025", description: "Focus on financial stability and career growth..." },
        { name: "Gemini", img: "/images/zodiac-3.png", date: "Jan 17, 2025", description: "Good communication will bring you closer to loved ones..." },
        { name: "Cancer", img: "/images/zodiac-4.png", date: "Jan 17, 2025", description: "Emotional stability will help you make clear decisions..." },
        // Add the remaining zodiac signs here
      ].map((zodiac, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className="flex items-center mb-4">
            <Image src={zodiac.img} alt={`${zodiac.name} Horoscope`} width={50} height={50} />
            <h3 className="text-xl font-bold ml-4">{zodiac.name}</h3>
          </div>
          <p className="mb-2">
            <span className="font-bold">{zodiac.date}</span>
          </p>
          <p className="text-gray-700">
            {zodiac.description}
            <Link href="#" className="text-red-500 ml-1">
              More
            </Link>
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero;