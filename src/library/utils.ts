import fs from "fs";
import path from "path";
import { BlogProps } from "@/library/types";

export function readBlogs() {
  const filePath = path.join(process.cwd(), "src", "app", "data", "blogs.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getLatestBlogs(daysAgo: number, limit: number): BlogProps[] {
  const blogs = readBlogs();
  const now = new Date();
  const cutoffDate = new Date(now);
  cutoffDate.setDate(now.getDate() - daysAgo);

  const recentBlogs = blogs
    .filter((blog: BlogProps) => new Date(blog.date) >= cutoffDate)
    .slice(0, limit);

  return recentBlogs;
}