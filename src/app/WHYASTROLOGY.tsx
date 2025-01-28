// WHYASTROLOGY.tsx
"use client";
import React from "react";
import Image from "next/image";

const WHYASTROLOGY: React.FC = () => {
  return (
    <section className="bg-gradient-to-b  to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            WHY ASTROLOGY ?
            <div className="flex justify-center mt-2 space-x-4">
              <Image
                src="/images/heading-decoration2.png"
                alt="ornament-left"
                width={80}
                height={80}
              />
              <Image
                src="/images/heading-decoration1.png"
                alt="ornament-right"
                width={80}
                height={80}
              />
            </div>
          </h2>
        </div>

        {/* Content Section */}
        <div className="prose lg:prose-lg mx-auto">
          <p>
            Astrology reveals the will of God. It is a predictive science with its own sets of methods, claims, and findings that have forever inspired and allowed people with insights into different aspects of their life. Astrology, with its wows and hows, is contentful and approving enough to make people believers. And thankfully, it continues to do so despite the world shifting bases from what they believe in and what they don’t.
          </p>

          <p>
            If one has to go into the technicalities of astrology, it is the study of different cosmic objects, which are usually stars and planets, that have an effect on the lives of the people. You must be aware that there are as many as 8 planets in the solar system. However, if I ask an online astrologer near me about the planets in astrology, they will tell me that there are as many as 9 planets in astrology, also called Navagrahas. And surprisingly, the planet Earth, in astrology, is not counted among the nine planets.
          </p>

          <p>
            The 9 planets in astrology are Sun (Surya), Moon (Chandra), Mars (Mangala), Mercury (Budha), Jupiter (Brihaspati), Venus (Shukra), Saturn (Shani), Rahu (north node of the moon), and Ketu (south node of the moon).
          </p>

          <p>
            Among these planets, some planets are called friendly planets, meaning their presence brings positivity to your life. And then, there are also planets that have a negative influence on humans. The latter would be planets like Rahu and Ketu. Their presence in one’s Kundli is said to bring pain and misery. However, there is another aspect one needs to be aware of. It’s the fact that the presence of Ketu in one’s horoscope is not always bad and similarly, the presence of Jupiter in one’s Kundli might not be the best every time.
          </p>

          <p>
            It all depends on which houses these planets are sitting in. If you ever had the opportunity to talk to an astrologer online, then s/he must have told you about houses in astrology and the movements of planets in the same. There are as many as 12 houses in Kundli. And all of these houses represent one thing or the other. You can check your free kundali online.
          </p>

          <p>
            For example, the first house, which any online astrology consultation would tell you is also the ascendant of the person, is the house of self. It represents a person’s personality and physical traits. Similarly, the fifth house in the Vedic horoscope, also known as Putra Bhava, is the house of creativity, playfulness, joy, pleasure, and romance. If, for example, a good planet, like Jupiter, is camping in the fifth house, your love life will excel. Likewise, if Rahu is camping in the same house, then you might feel the need for online astrology consultation to deal with the woes.
          </p>

          <p>
            Then there are other things in astrology like elements, the Moon sign of an individual, numerology, tarot, and so much more that is impossible to wind up here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WHYASTROLOGY;