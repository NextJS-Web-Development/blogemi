'use client';

import { JSX } from 'react';
import ThemeToggle from './components/ThemeToggle';
import styles from './user-menu.module.css';

export default function UserMenu(): JSX.Element {
  return (
    <div className={styles.userMenu}>
      <ThemeToggle />
      <button aria-label="Sign in button">Sign in</button>
      <button aria-label="Sign up button">Sign up</button>
    </div>
  );
}
