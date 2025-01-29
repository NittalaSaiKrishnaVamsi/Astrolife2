"use client";
import "../app/globals.css";
import React, { useState, useEffect } from "react";
import Header from "../app/Header";
import Footer from "../app/Footer";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState<BlogPost>({
    id: 0,
    title: "",
    content: "",
    author: "",
    category: "",
    tags: [],
  });

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
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

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({
      ...newPost,
      tags: event.target.value.split(",").map(tag => tag.trim()),
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const method = editingPost ? "PUT" : "POST";
      const url = editingPost ? `/api/blog/${editingPost.id}` : "/api/blog";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const data = await response.json();
        setBlogPosts(editingPost 
          ? blogPosts.map(post => (post.id === data.id ? data : post)) 
          : [...blogPosts, data]
        );
        setNewPost({ id: 0, title: "", content: "", author: "", category: "", tags: [] });
        setEditingPost(null);
      } else {
        console.error("Error saving blog post:", response.status);
      }
    } catch (error) {
      console.error("Error saving blog post:", error);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setNewPost(post);
    setEditingPost(post);
  };

  const confirmDelete = (id: number) => {
    setDeleteId(id);
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`/api/blog/${deleteId}`, { method: "DELETE" });

      if (response.ok) {
        setBlogPosts(blogPosts.filter(post => post.id !== deleteId));
        setDeleteId(null);
      } else {
        console.error("Error deleting blog post:", response.status);
      }
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="relative bg-orange-500 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              AstroLife Blog
            </h1>
            <p className="mt-4 text-xl text-white">Explore the fascinating world of astrology and spirituality.</p>
          </div>
        </div>
      </div>

      {/* Create / Edit Post Section */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">{editingPost ? "Edit Post" : "Create New Post"}</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <input type="hidden" name="id" value={newPost.id} />
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title:</label>
            <input type="text" name="title" value={newPost.title} onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Content:</label>
            <textarea name="content" value={newPost.content} onChange={handleInputChange} className="w-full p-2 border rounded"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Author:</label>
            <input type="text" name="author" value={newPost.author} onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Category:</label>
            <input type="text" name="category" value={newPost.category} onChange={handleInputChange} className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Tags (comma separated):</label>
            <input type="text" name="tags" value={newPost.tags.join(", ")} onChange={handleTagsChange} className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingPost ? "Update Post" : "Create Post"}</button>
        </form>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content}</p>
            <p className="text-gray-600 text-sm">
              By {post.author} | Category: {post.category} | Tags: {(post.tags || []).join(", ")}
            </p>
            <button onClick={() => handleEdit(post)} className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2">
              Edit
            </button>
            <button onClick={() => confirmDelete(post.id)} className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <p>Are you sure you want to delete this post?</p>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            <button onClick={() => setDeleteId(null)} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;
