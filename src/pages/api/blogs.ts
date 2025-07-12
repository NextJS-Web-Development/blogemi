import path from 'path';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'src', 'system', 'data', 'blogs.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileContents);

  res.status(200).json(blogs);
}