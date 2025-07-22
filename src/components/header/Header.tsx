import styles from './header.module.css';

import { JSX } from 'react';
import { Navigation, UserMenu } from '@/components/header/components/index';
import Head from 'next/head';

export default function Header(): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <Navigation />
        <UserMenu />
      </header>
    </>
  );
}
