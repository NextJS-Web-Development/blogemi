import { BlogProps } from "@/library/types";

export async function fetchBlogs() {
  const res = await fetch('http://localhost:3000/api/blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (!res.ok)
    throw new Error('Failed to fetch blogs');
  
  const blogs = await res.json();
  return blogs
}

export function getLatestBlogs({
  daysAgo,
  limit,
  blogs
}: {
  daysAgo: number;
  limit: number;
  blogs: BlogProps[];
}): BlogProps[] {
  const now = new Date();
  const cutoffDate = new Date(now);
  cutoffDate.setDate(now.getDate() - daysAgo);
  cutoffDate.setHours(0, 0, 0, 0); 

  const recentBlogs = blogs
    .filter((blog: BlogProps) => new Date(blog.date) >= cutoffDate)
    .slice(0, limit);

  return recentBlogs;
}