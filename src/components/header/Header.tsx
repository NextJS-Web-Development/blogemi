import styles from "./header.module.css";

import { JSX } from "react";
import Navigation from './components/navigation/Navigation';
import UserMenu from './components/user-menu/UserMenu';
import Head from "next/head";

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