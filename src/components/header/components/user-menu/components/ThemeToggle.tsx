import { JSX, useEffect, useRef, useState } from 'react';
import styles from '@/components/header/components/user-menu/user-menu.module.css'
import { toggleTheme, turnOnDarkTheme } from '@/components/header/utils';

export default function ThemeToggle(): JSX.Element {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const toggleThemeSpanRef = useRef<HTMLDivElement>(null);

  const handleThemeToggle = () => {
    toggleTheme({
      isThemeDark,
      setIsThemeDark,
      toggleThemeSpanRef,
    });
  };

  useEffect(() => {
    if (toggleThemeSpanRef.current) turnOnDarkTheme(toggleThemeSpanRef.current, false);
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
