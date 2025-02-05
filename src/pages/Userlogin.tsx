"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "../app/globals.css";

const UserLogin: React.FC = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    const newErrors: { email?: string; password?: string } = {};

    
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

  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      alert("Login successful!");
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex items-center justify-center relative"
    >
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/astrology-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="absolute top-4 right-4 flex space-x-4">
        <Link href="/" className="bg-white text-orange-600 px-4 py-2 rounded-md">Home</Link>
        <Link href="/UserSignup" className="bg-white text-orange-600 px-4 py-2 rounded-md">Signup</Link>
      </div>

      <div className="bg-white/80 p-8 rounded-lg shadow-lg max-w-md w-full backdrop-blur-md relative">
        <div className="text-center mb-6">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} className="mx-auto h-20 w-auto" />
          <h1 className="text-3xl font-bold text-orange-800 mt-4">User Login</h1>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="absolute -top-3 left-4 bg-orange-600 px-2 text-white text-sm">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-orange-800 rounded-lg bg-transparent text-black placeholder-black outline-none"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <label htmlFor="password" className="absolute -top-3 left-4 bg-orange-600 px-2 text-white text-sm">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border-2 border-orange-800 rounded-lg bg-transparent text-black placeholder-black outline-none"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between text-orange-800 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-600 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default UserLogin;
