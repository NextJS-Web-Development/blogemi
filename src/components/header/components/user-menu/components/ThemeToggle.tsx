import styles from '@/components/header/components/user-menu/user-menu.module.css';
import LOCAL_STORAGE from '@/lib/localStorage';

import { JSX, useEffect, useRef, useState } from 'react';
import { toggleTheme, turnOnDarkTheme, turnOnLightTheme } from '@/components/header/utils';

export default function ThemeToggle(): JSX.Element {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const toggleThemeSpanRef = useRef<HTMLDivElement>(null);

  const handleThemeToggle = () => {
    const cookieConsent = localStorage.getItem(LOCAL_STORAGE.COOKIE_CONSENT.KEY);
    if (cookieConsent == LOCAL_STORAGE.COOKIE_CONSENT.VALUES.REJECTED) {
      alert('Cookie consent is rejected, theme toggle is disabled');
      return;
    }

    toggleTheme({
      isThemeDark,
      setIsThemeDark,
      toggleThemeSpanRef,
    });
  };

  useEffect(() => {
    if (!toggleThemeSpanRef.current) return;

    const savedTheme = localStorage.getItem(LOCAL_STORAGE.THEME.KEY);
    const isDarkTheme = savedTheme === 'dark';

    setIsThemeDark(isDarkTheme);

    if (isDarkTheme) {
      turnOnDarkTheme(toggleThemeSpanRef.current, false);
    } else {
      turnOnLightTheme(toggleThemeSpanRef.current, false);
    }
  }, []);

  return (
    <label className={styles.themeToggle}>
      <input
        type="checkbox"
        aria-label="Toggle dark theme"
        onChange={handleThemeToggle}
        className={styles.themeToggleCheckbox}
      />
      <span ref={toggleThemeSpanRef}></span>
    </label>
  );
}
