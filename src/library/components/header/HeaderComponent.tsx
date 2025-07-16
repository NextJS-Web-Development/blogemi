import style from './header.module.css';

import { JSX } from 'react';
import NavigationComponent from './NavigationComponent';

export default function HeaderComponent(): JSX.Element {
  return (
    <header className={style.header}>
      <p className={style.logoText}>Blogemi</p>
      <NavigationComponent/>
    </header>
  );
}
