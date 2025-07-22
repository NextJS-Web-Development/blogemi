import styles from '@/components/cookie-banner/cookie-banner.module.css';
import Image from 'next/image';

import { JSX } from 'react';

interface CookieCrumbProps {
  content: string;
}

export default function CookieCrumb({ content }: CookieCrumbProps): JSX.Element {
  return (
    <li className={styles.listElement}>
      <Image src="/cookiebanner/cookie-crumb.png" alt="Cookie Crumb" width={12} height={12} className={styles.listImage} />
      <span>{content}</span>
    </li>
  );
}
