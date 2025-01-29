// pages/api/blog.js

let blogPosts = []; // Temporary in-memory storage

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(blogPosts);
  } else if (req.method === 'POST') {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newPost = {
      id: blogPosts.length + 1,
      title,
      content,
      author,
    };

    blogPosts.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
