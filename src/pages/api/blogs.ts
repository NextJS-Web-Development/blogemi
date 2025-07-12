import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'src', 'system', 'data', 'blogs.json')
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileContents);
  
  if (req.method == 'POST') {
    const newBlog = req.body;
    blogs.push(newBlog);
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), 'utf-8');
    return res.status(201).json({ message: 'Blog added successfully' });
  } else if (req.method == 'GET') {
    return res.status(200).json(blogs);
  }
}