import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export interface HandleProps {
  req: NextApiRequest;
  res: NextApiResponse;
  filePath: string;
  fileContents: string;
  blogs: { title: string; content: string; }[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const filePath = path.join(process.cwd(), 'src', 'system', 'data', 'blogs.json')
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileContents);
  
  const handleProps: HandleProps = {
    req,
    res,
    filePath,
    fileContents,
    blogs
  };
  
  if (req.method == 'POST') {
    return handlePost(handleProps);
  } else if (req.method == 'GET') {
    return handleGet(handleProps);
  }
}

function handlePost(props: HandleProps): void {
  const newBlog = props.req.body;
  props.blogs.push(newBlog);
  fs.writeFileSync(props.filePath, JSON.stringify(props.blogs, null, 2), 'utf-8');
  return props.res.status(201).json({ message: 'Blog added successfully' });
}

function handleGet(props: HandleProps): void {
  return props.res.status(200).json(props.blogs);
}