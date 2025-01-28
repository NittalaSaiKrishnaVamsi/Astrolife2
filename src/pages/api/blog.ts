import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import nextConnect from 'next-connect';

// Define the BlogPost interface
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  imageUrl: string; // Add an imageUrl field
  date?: string;
}

// In-memory storage for simplicity
let blogPosts: BlogPost[] = [];

// Configure multer to store uploaded images in a local folder
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads', // Save files to the public/uploads directory
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Middleware to handle multipart form data
const apiRoute = nextConnect({
  onError: (err, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).json({ error: `Something went wrong! ${err.message}` });
  },
  onNoMatch: (req, res) => {
    res.status(405).json({ message: 'Method not allowed' });
  },
});

// Use multer middleware for handling file uploads
apiRoute.use(upload.single('image'));

// Handle GET and POST requests
apiRoute.get((req, res) => {
  res.status(200).json(blogPosts);
});

apiRoute.post((req: any, res) => {
  const { title, content, author } = req.body;
  const newPost: BlogPost = {
    id: blogPosts.length + 1,
    title,
    content,
    author,
    imageUrl: `/uploads/${req.file.filename}`, // Save the uploaded image path
    date: new Date().toISOString(),
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

export default apiRoute;

// Disable bodyParser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};
