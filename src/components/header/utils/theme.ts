import styles from '@/components/header/components/user-menu/user-menu.module.css';
import { Dispatch, RefObject, SetStateAction } from "react";
import { LOCAL_STORAGE } from '@/lib/localStorage';

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
    localStorage.setItem(LOCAL_STORAGE.THEME.KEY, LOCAL_STORAGE.THEME.VALUES.DARK);
  } else {
    turnOnLightTheme(spanElement, true);
    localStorage.setItem(LOCAL_STORAGE.THEME.KEY, LOCAL_STORAGE.THEME.VALUES.LIGHT);
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