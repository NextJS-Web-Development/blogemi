'use client';

import { BlogProps } from '@/library/types';
import { fetchBlogs, getLatestBlogs } from '@/system/data/json-handler';
import { useEffect, useState } from 'react';

export default function Home() {
  const [latestBlogs, setLatestBlogs] = useState<BlogProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await fetchBlogs();
      const latestBlogs = getLatestBlogs({
        daysAgo: 14,
        limit: 10,
        blogs,
      });
      setLatestBlogs(latestBlogs);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Blogemi</h1>
      <p>Your go-to platform for sharing and discovering blogs.</p>
      <h2>Why Us?</h2>
      <p>
        There is no difference between us and other blogging platforms - really. But since you&apos;re here already, why
        not browse some blogs?
      </p>
      <nav>
        <ul>
          <li>
            <a href="/add-blog" aria-label="Create a New Blog Post">
              Create Blog
            </a>
          </li>
          <li>
            <a href="/browse-blogs" aria-label="Browse Blog Posts">
              Browse Blogs
            </a>
          </li>
        </ul>
      </nav>
      <h3>Recent Blogs</h3>
      {latestBlogs.length > 0 ? (
        <ul>
          {latestBlogs.map((blog) => (
            <li key={blog.id}>
              <h4>{blog.title}</h4>
              <p>
                {blog.author} - {new Date(blog.date).toLocaleDateString()}
              </p>
              <p>{blog.content.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent blogs available.</p>
      )}
    </div>
  );
}
