import { JSX } from "react";
import Link from "next/link";

export default function HeaderComponent(): JSX.Element {
  return (
    <header>
      <p>Blogemi</p>
      <nav>
        <Link href="/" aria-label='Go to Blogemi Home'>Home</Link>
        <Link href="/add-blog" aria-label='Create a New Blog Post'>Create Blog</Link>
        <Link href="/blogs" aria-label='Browse Blog Posts'>Browse Blogs</Link>
      </nav>
    </header>
  );
}