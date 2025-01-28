"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../app/globals.css";

// Define the structure of formData
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  timeOfBirth: string;
  phoneNumber: string;
}

const UserSignup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    timeOfBirth: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [id]: "",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.gender.trim()) newErrors.gender = "Gender is required.";
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = "Date of birth is required.";
    if (!formData.placeOfBirth.trim()) newErrors.placeOfBirth = "Place of birth is required.";
    if (!formData.timeOfBirth.trim()) newErrors.timeOfBirth = "Time of birth is required.";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted with data:", formData);
      alert("Signup successful!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/astrology-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full">
        {/* Navigation */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <Link
            href="/"
            className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/Userlogin"
            className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Login
          </Link>
        </div>

        {/* Signup Form */}
        <div className="bg-white/70 p-8 rounded-lg shadow-lg text-gray-800 max-w-md w-full backdrop-blur-md">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <Image
              src="/images/logo.png"
              alt="AstroLife Logo"
              width={150}
              height={150}
              className="mx-auto h-20 w-auto"
            />
            <h1 className="text-3xl font-bold text-orange-800 mt-4">
              User Signup
            </h1>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {Object.keys(formData).map((key) => {
              const fieldType =
                key === "gender"
                  ? "select"
                  : key.includes("password")
                  ? "password"
                  : key.includes("email")
                  ? "email"
                  : key.includes("phoneNumber")
                  ? "tel"
                  : key.includes("dateOfBirth")
                  ? "date"
                  : key.includes("timeOfBirth")
                  ? "time"
                  : "text";

              const fieldLabel = key.replace(/([A-Z])/g, " $1").toUpperCase();

              return (
                <div key={key} className="relative">
                  <label
                    htmlFor={key}
                    className="absolute -top-3 left-4 bg-orange-600 px-2 text-white text-sm"
                  >
                    {fieldLabel}
                  </label>
                  {fieldType === "select" ? (
                    <select
                      id={key}
                      value={(formData as any)[key]}
                      onChange={handleChange}
                      className="flex-1 p-2 bg-transparent outline-none text-black placeholder-black border-2 border-orange-800 rounded-lg w-full"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  ) : (
                    <input
                      type={fieldType}
                      id={key}
                      value={(formData as any)[key]}
                      onChange={handleChange}
                      className="flex-1 p-2 bg-transparent outline-none text-black placeholder-black border-2 border-orange-800 rounded-lg w-full"
                      placeholder={`Enter your ${fieldLabel.toLowerCase()}`}
                    />
                  )}
                  {errors[key as keyof FormData] && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors[key as keyof FormData]}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-white text-orange-700 font-bold rounded-lg hover:bg-gray-200 transition"
            >
              SIGN UP
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default UserSignup;