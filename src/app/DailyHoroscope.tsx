"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const DailyHoroscope = () => {
  const [horoscope, setHoroscope] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchDailyHoroscope = async () => {
    try {
      const response = await fetch(
        "https://vedicastroapi.com/api/horoscope/daily?zodiac=aries&apiKey=de88d891-e475-5210-92c9-ce22b3918ea5"
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setHoroscope(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the daily horoscope:", error);
      setHoroscope(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyHoroscope();
  }, []);

  return (
    <section className="daily-horoscope mt-20 py-8" style={{ background: "#FFFAF0" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Daily Horoscope</h2>

        {loading ? (
          <p>Loading your daily horoscope...</p>
        ) : horoscope ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div key={horoscope.sign} className="zodiac-card border-2 border-orange-500 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <Image
                  src={`/images/zodiac-${horoscope.sign.toLowerCase()}.png`}
                  alt={horoscope.sign}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{horoscope.sign}</h3>
              <p className="text-gray-600">{horoscope.horoscope}</p>
            </div>
          </div>
        ) : (
          <p>Failed to load your horoscope. Please try again later.</p>
        )}
      </div>
    </section>
  );
};

export default DailyHoroscope;
    