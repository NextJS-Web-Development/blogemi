'use client';
import styles from '@/components/cookie-banner/cookie-banner.module.css';

import Image from 'next/image';
import CookieCrumb from '@/components/cookie-banner/components/CookieCrumb';
import ButtonContainer from '@/components/cookie-banner/components/ButtonContainer';

import { LOCAL_STORAGE_KEYS } from '@/lib/storageKeys';
import { JSX, useEffect, useState } from 'react';

export default function CookieBanner(): JSX.Element {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem(LOCAL_STORAGE_KEYS.COOKIE_CONSENT);
    if (!cookieConsent) setShowBanner(true);
  }, []);

  return (
    (showBanner && (
      <div className={styles.overlay}>
        <div className={styles.banner}>
          <div className={styles.bannerTitle}>
            <Image src="/cookies/cookies.svg" alt="Picture of Cookies" width={106} height={80} />
            <h1>COOKIES</h1>
          </div>

          <div className={styles.bannerDescription}>
            <p>
              This Site uses cookies to remember your preferences and improve your experience. <br /> By clicking Accept
              we will only do the following things:
            </p>
            <ul>
              <CookieCrumb content="Store your theme preference" />
            </ul>
            <p>
              <small>We do not use tracking or advertising cookies</small>
            </p>
          </div>

          <ButtonContainer setShowBanner={setShowBanner} />
        </div>
      </div>
    )) || <></>
  );
}
