import { BlogProps } from "@/library/types";
import { getAllBlogs } from "@/system/data/json-handler";
import { Dispatch, SetStateAction } from "react";
import { distance } from "fastest-levenshtein";

interface BrowseBlogsProps {
  searchQuery: string
  setLoadedBlogs: Dispatch<SetStateAction<BlogProps[]>>;
}

export default async function browseBlogs({
  searchQuery,
  setLoadedBlogs
}: BrowseBlogsProps): Promise<void> {
  if (searchQuery.length == 0) return;
  
  const blogs = await getAllBlogs();
  const filteredBlogs = filterBlogsWithLevenshtein(blogs, searchQuery);
  setLoadedBlogs(filteredBlogs);
}

function filterBlogsWithLevenshtein(blogs: BlogProps[], searchQuery: string): BlogProps[] {
  const filteredBlogs = blogs.filter((blog) => {
    const titleDistance = distance(blog.title.toLowerCase(), searchQuery.toLowerCase());
    const tagsDistance = blog.tags.some(tag => distance(tag.toLowerCase(), searchQuery.toLowerCase()) <= 2);
    
    return titleDistance <= 2 || tagsDistance;
  });
  
  return filteredBlogs;
}

