import { JSX } from "react";

export default function UserMenu(): JSX.Element {
  return (
    <div>
      <input type="checkbox" aria-label='Dark/Light Mode toggle' />
      <button aria-label='Sign in button'>
        Sign in
      </button>
      <button aria-label='Sign up button'>
        Sign up
      </button>
    </div>
  )
}