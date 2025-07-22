import styles from '@/components/header/components/navigation/navigation.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { JSX } from 'react';

export default function Navigation(): JSX.Element {
  return (
    <nav aria-label="Main navigation" className={styles.navigation}>
      <Link href="/">
        <Image src="/blogemi-logo.png" alt="Blogemi Logo" width={70} height={70} priority={true} />
      </Link>
      <ul className={styles.linkContainer}>
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
