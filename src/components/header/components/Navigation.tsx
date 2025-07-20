import Link from "next/link";
import { JSX } from "react";

export default function Navigation(): JSX.Element {
  return (
    <nav aria-label="Main navigation">
      <Link href="/">
        <strong>Blogemi</strong>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/create-blog">Create Blog</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}