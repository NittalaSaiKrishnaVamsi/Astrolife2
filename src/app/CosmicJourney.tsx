"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Holiday {
  festival: string;
  holiday: string;
  calendar: string;
  imageUrl?: string;
}

const CosmicJourney: React.FC = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([
    {
      festival: "Pongal 2025",
      holiday: "January 14, 2025",
      calendar: "Tamil Calendar",
      imageUrl: "/images/pongal.jpg",
    },
    {
      festival: "Mahashivratri 2025",
      holiday: "February 28, 2025",
      calendar: "Hindu Lunar Calendar",
      imageUrl: "/images/mahashivratri.jpg",
    },
    {
      festival: "Holika Dahan 2025",
      holiday: "March 8, 2025",
      calendar: "Hindu Calendar",
      imageUrl: "/images/holika-dahan.jpg",
    },
    {
      festival: "Holi 2025",
      holiday: "March 9, 2025",
      calendar: "Hindu Calendar",
      imageUrl: "/images/holi.jpg",
    },
    {
      festival: "Cheti Chand 2025",
      holiday: "March 21, 2025",
      calendar: "Sindhi Calendar",
      imageUrl: "/images/cheti-chand.jpg",
    },
  ]);

  const addHoliday = () => {
    const festival = prompt("Enter the name of the festival:");
    const holiday = prompt("Enter the date of the holiday (e.g., March 15, 2025):");
    const calendar = prompt("Enter the calendar name (e.g., Hindu Calendar):");
    const imageUrl = prompt("Enter the URL of the image:");

    if (festival && holiday && calendar && imageUrl) {
      setHolidays([...holidays, { festival, holiday, calendar, imageUrl }]);
    } else {
      alert("Please fill in all the fields to add a holiday.");
    }
  };

  const removeHoliday = (index: number) => {
    if (window.confirm("Are you sure you want to delete this holiday?")) {
      setHolidays(holidays.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Embark on Your Cosmic Journey
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore the celestial wonders and auspicious occasions
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-8 rounded-lg shadow-md w-full md:w-1/3 text-center">
          <h3 className="text-xl font-bold text-orange-600">
            Connect with Our Astrologers
          </h3>
          <p className="text-gray-600 mt-2">
            Seek guidance, find answers, and illuminate your path
          </p>
          <img
            src="/images/astrologer-image.png"
            alt="Astrologer"
            className="mx-auto rounded-lg w-48 h-auto mt-4"
          />
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out">
            Consult Now
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3">
          <div className="mb-4 flex justify-end">
            <button
              onClick={addHoliday}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
            >
              Add Holiday
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gradient-to-r from-orange-400 to-orange-600">
                <tr>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Festival
                  </th>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Holiday
                  </th>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Calendar
                  </th>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((holiday, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {holiday.imageUrl && (
                        <div className="flex items-center">
                          <Image
                            src={holiday.imageUrl}
                            alt={holiday.festival}
                            className="w-10 h-10 rounded-full mr-2"
                            width={40}
                            height={40}
                          />
                          {holiday.festival}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {holiday.holiday}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {holiday.calendar}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        onClick={() => removeHoliday(index)}
                        className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmicJourney;