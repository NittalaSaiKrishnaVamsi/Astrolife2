// pages/blog.tsx
"use client";
import '../app/globals.css';
import React, { useState, useEffect } from 'react';
import Header from '../app/Header';
import Footer from '../app/Footer';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  // Add other properties like date, image, etc.
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog'); // Replace with your API endpoint
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/blog', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const data = await response.json();
        setBlogPosts([...blogPosts, data]);
        setNewPost({ title: '', content: '', author: '' });
      } else {
        console.error('Error creating blog post:', response.status);
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-orange-500 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                AstroLife Blog
              </h1>
              <p className="mt-4 text-xl text-white">
                Explore the fascinating world of astrology and spirituality.
              </p>
            </div>
            <div>
                          <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                              aria-hidden="true"
                              className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div className="flex items-center space-x-6 lg:space-x-8">
                                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                    <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                      <Image
                                        src="/images/kundli1.jpg" // Replace with actual image
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                        width={176}
                                        height={256}
                                      />
                                    </div>
                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                      <Image
                                        src="/images/kundli2.jpg" // Replace with actual image
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                        width={176}
                                        height={256}
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                      <Image
                                        src="/images/kundli3.jpg" // Replace with actual image
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                        width={176}
                                        height={256}
                                      />
                                    </div>
                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                      <Image
                                        src="/images/kundli4.jpg" // Replace with actual image
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                        width={176}
                                        height={256}
                                      />
                                    </div>
                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                      <Image
                                        src="/images/kundli5.jpg" // Replace with actual image
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                        width={176}
                                        height={256}
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                      <Image
                                        src="/images/kundli6.jpg" // Replace with actual image
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                        width={176}
                                        height={256}
                                      />
                                    </div>
                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                      <Image
                                        src="/images/kundli7.jpg" // Replace with actual image
                                        alt=""
                                        className="w-full h-full object-center object-cover"
                                        width={176}
                                        height={256}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
            
                            <a 
              href="#" 
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-orange-600 hover:bg-orange-50"
            >
              Get Started
            </a>
            
                          </div>
                        </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto py-8">
        {/* Create New Post Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
                Content:
              </label>
              <textarea
                id="content"
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-700 font-bold mb-2">
                Author:
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={newPost.author}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Post
            </button>
          </form>
        </div>

        {/* Blog Posts Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <p className="text-gray-600 text-sm">By {post.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AstroLife on YouTube Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Subscribe to AstroLife on YouTube
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              {/* ... your YouTube channel description ... */}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#" // Replace with your YouTube channel link
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  <Image
                    src="/images/youtube-logo.png" // Replace with YouTube logo
                    alt="YouTube logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;