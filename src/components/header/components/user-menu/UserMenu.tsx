'use client';

import styles from './user-menu.module.css';
import ThemeToggle from '@/components/header/components/user-menu/components/ThemeToggle';

import { JSX } from 'react';

export default function UserMenu(): JSX.Element {
  return (
    <div className={styles.userMenu}>
      <ThemeToggle />
      <button aria-label="Sign in button">Sign in</button>
      <button aria-label="Sign up button">Sign up</button>
    </div>
  );
}
