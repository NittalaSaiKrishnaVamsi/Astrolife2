// pages/blog/[slug].tsx

import React from 'react';
import Image from 'next/image';

interface BlogPostProps {
  params: { slug: string };
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
  // You can fetch blog post data based on params.slug here
  // For now, I'll use placeholder data

  const blogData = {
    title: `Blog Post ${params.slug}`,
    image: `/images/blog-image-${params.slug}.jpg`,
    author: 'Author Name',
    date: 'January 22, 2025',
    content: 'This is the content of the blog post. You can replace this with your actual blog post content.'
  };

  return (
    <div className="blog-post-page mt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>
        <div className="mb-6">
          <Image
            src={blogData.image}
            alt={blogData.title}
            width={800} 
            height={400} 
          />
        </div>
        <div className="blog-post-meta mb-4">
          <p className="text-gray-600">
            By {blogData.author} | {blogData.date}
          </p>
        </div>
        <div className="blog-post-content">
          <p>{blogData.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;