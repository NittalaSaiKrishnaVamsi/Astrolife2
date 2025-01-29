"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../app/globals.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error message on change
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation rules
    const newErrors: { username?: string; password?: string } = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
      <div className="absolute inset-0 z-10"></div>

      {/* Home and Signup Buttons */}
      <div className="absolute top-4 right-4 z-20 flex space-x-4">
        <Link
          href="/"
          className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Home
        </Link>
        <Link
          href="/signup"
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
              alt="Suneshine Astrolife Logo"
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
            Astrologer&apos;s Login
          </motion.h1>
        </div>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <label
              htmlFor="username"
              className="absolute -top-3 left-4 bg-orange-600 px-2 text-white text-sm"
            >
              USERNAME
            </label>
            <div className="flex items-center border-2 border-orange-800 rounded-lg overflow-hidden">
              <span className="p-2 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 19.5a7.5 7.5 0 00-15 0"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="flex-1 p-2 bg-transparent outline-none text-black placeholder-black"
                placeholder="Enter your username"
              />
            </div>
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-3 left-4 bg-orange-600 px-2 text-white text-sm"
            >
              PASSWORD
            </label>
            <div className="flex items-center border-2 border-orange-800 rounded-lg overflow-hidden">
              <span className="p-2 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V7.875a4.125 4.125 0 10-9 0V10.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.875 10.5h14.25M7.5 10.5h9"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="flex-1 p-2 bg-transparent outline-none text-black placeholder-black"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-orange-800 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="underline">
              Forgot password?
            </a>
          </div>

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

export default LoginPage;