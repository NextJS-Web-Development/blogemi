import { JSX } from "react";
import Navigation from "./components/Navigation";
import UserMenu from "./components/UserMenu";

export default function Header(): JSX.Element {
  return (
    <header>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navigation />
      <UserMenu />
    </header>
  )
}