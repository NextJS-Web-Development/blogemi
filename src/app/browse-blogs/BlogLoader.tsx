import { BlogProps } from "@/library/types";
import { JSX } from "react";

interface BlogLoaderProps {
  loadedBlogs: BlogProps[];
  isSearchTriggered: boolean;
  searchQuery: string;
}

export default function BlogLoaderComponent({
  loadedBlogs,
  isSearchTriggered,
  searchQuery,
}: BlogLoaderProps): JSX.Element {
  return (
    <div>
      {loadedBlogs.length > 0 ? (
        <ul>
          {loadedBlogs.map((blog) => (
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
        isSearchTriggered && searchQuery.length > 0 && <p>We had problems finding what you are looking for.</p>
      )}
    </div>
  );
}