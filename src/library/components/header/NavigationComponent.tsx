'use client'

import style from './header.module.css';

import Link from 'next/link';
import { JSX, useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function NavigationComponent(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <nav className={style.navigation}>
      <input type="checkbox" id="menu-toggle" className={style.menuToggle} onClick={toggleMenu} />
      <label htmlFor="menu-toggle" className={style.menuIcon}>
        <FaBars />
      </label>

      {isMenuOpen && (
        <ul className={style.menu}>
          <li>
            <Link href="/" aria-label="Go to Blogemi Home" className={style.navigationLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/add-blog" aria-label="Create a New Blog Post" className={style.navigationLink}>
              Create Blog
            </Link>
          </li>
          <li>
            <Link href="/blogs" aria-label="Browse Blog Posts" className={style.navigationLink}>
              Browse Blogs
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
