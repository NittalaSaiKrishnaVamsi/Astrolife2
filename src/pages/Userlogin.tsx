"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../app/globals.css";

const UserLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Ensure newErrors has correct structure
    const newErrors: { email: string; password: string } = { email: "", password: "" };
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
  
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
  
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors); // ✅ Now matches expected type
      return;
    }
  
    // Proceed with login logic
    alert("Login successful!");
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

      {/* Home and Signup Buttons */}
      <div className="absolute top-4 right-4 z-20 flex space-x-4">
        <Link
          href="/"
          className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Home
        </Link>
        <Link
          href="/UserSignup"
          className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Signup
        </Link>
      </div>

      {/* Login Form */}
      <div className="bg-white/70 p-8 rounded-lg shadow-lg text-gray-800 max-w-md w-full relative z-20 backdrop-blur-md">
        <div className="text-center mb-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/logo.png"
              alt="AstroLife Logo"
              width={150}
              height={150}
              className="mx-auto h-20 w-auto"
            />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl font-bold text-orange-800 mt-4"
          >
            User Login
          </motion.h1>
        </div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-3 left-4 bg-orange-600 px-2 text-white text-sm"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-orange-800 rounded-lg bg-transparent outline-none text-black placeholder-black"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-3 left-4 bg-orange-600 px-2 text-white text-sm"
            >
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border-2 border-orange-800 rounded-lg bg-transparent outline-none text-black placeholder-black"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-orange-800 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-white text-orange-700 font-bold rounded-lg hover:bg-gray-200 transition"
          >
            LOGIN
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default UserLogin;
