import styles from '@/components/header/components/user-menu/user-menu.module.css';
import { Dispatch, RefObject, SetStateAction } from "react";
import { LOCAL_STORAGE_KEYS } from '@/lib/storageKeys';

interface ThemeProps {
  isThemeDark: boolean;
  setIsThemeDark: Dispatch<SetStateAction<boolean>>;
  toggleThemeSpanRef: RefObject<HTMLDivElement | null>;
}

export function toggleTheme({
  isThemeDark,
  setIsThemeDark,
  toggleThemeSpanRef
}: ThemeProps): void {
  if (!toggleThemeSpanRef.current) return;

  const spanElement = toggleThemeSpanRef.current;
  const newIsThemeDark = !isThemeDark;
  setIsThemeDark(newIsThemeDark);

  if (newIsThemeDark) {
    turnOnDarkTheme(spanElement, true);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, 'dark');
  } else {
    turnOnLightTheme(spanElement, true);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, 'light');
  }
}

export function turnOnDarkTheme(spanElement: HTMLDivElement, useAnimation: boolean): void {
  spanElement.textContent = '☾';

  if (useAnimation) {
    spanElement.classList.add(styles.themeDark);
    spanElement.classList.remove(styles.themeLight);
  }
}

export function turnOnLightTheme(spanElement: HTMLDivElement, useAnimation: boolean): void {
  spanElement.textContent = '☀︎';

  if (useAnimation) {
    spanElement.classList.add(styles.themeLight);
    spanElement.classList.remove(styles.themeDark);
  }
}