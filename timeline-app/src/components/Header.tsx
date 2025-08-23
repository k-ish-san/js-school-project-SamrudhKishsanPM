import { useTheme } from "../hooks/useTheme";
import "../styles/Header.scss";

export default function Header() {
  const { theme, toggleTheme } = useTheme(); //array destructuring

  return (
    <header aria-label="Timeline header">
      {/* Logo */}
      <svg
        id="logo"
        width="80"
        height="80"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Timeline Logo"
      >
        <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#000" />
        <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#000" />
        <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#000" />
      </svg>
      <h1>Timeline</h1>

      {/* Theme Toggle */}
      <label id="theme-toggle">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          name="theme-toggle"
          aria-checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </header>
  );
}
