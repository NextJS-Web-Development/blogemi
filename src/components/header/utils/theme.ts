import styles from '@/components/header/components/user-menu/user-menu.module.css';
import { Dispatch, RefObject, SetStateAction } from "react";

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
  setIsThemeDark(!isThemeDark);

  const spanElement = toggleThemeSpanRef.current;
  if (isThemeDark)
    turnOnDarkTheme(spanElement, true);
  else
    turnOnLightTheme(spanElement, true);
}

export function turnOnDarkTheme(spanElement: HTMLDivElement, useAnimation: boolean): void {
  spanElement.innerText = '☾';

  if (useAnimation) {
    spanElement.classList.add(styles.themeDark);
    spanElement.classList.remove(styles.themeLight);
  }
}

function turnOnLightTheme(spanElement: HTMLDivElement, useAnimation: boolean): void {
  spanElement.innerText = '☀︎';

  if (useAnimation) {
    spanElement.classList.add(styles.themeLight);
    spanElement.classList.remove(styles.themeDark);
  }
}