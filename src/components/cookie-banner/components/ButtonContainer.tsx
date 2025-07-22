'use client';

import styles from '@/components/cookie-banner/cookie-banner.module.css';

import { Dispatch, JSX, SetStateAction } from 'react';
import { LOCAL_STORAGE } from '@/lib/localStorage';

interface ButtonContainerProps {
  setShowBanner: Dispatch<SetStateAction<boolean>>;
}

export default function ButtonContainer({ setShowBanner }: ButtonContainerProps): JSX.Element {
  const handleAccept = () => {
    localStorage.setItem(LOCAL_STORAGE.COOKIE_CONSENT.KEY, LOCAL_STORAGE.COOKIE_CONSENT.VALUES.ACCEPTED);
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(LOCAL_STORAGE.COOKIE_CONSENT.KEY, LOCAL_STORAGE.COOKIE_CONSENT.VALUES.REJECTED);
    setShowBanner(false);
  };

  return (
    <div className={styles.buttonContainer}>
      <button aria-label="Accept Cookies" onClick={handleAccept}>
        Accept
      </button>
      <button aria-label="Reject Cookies" onClick={handleReject}>
        Reject
      </button>
    </div>
  );
}
