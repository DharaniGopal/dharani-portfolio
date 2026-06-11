import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        fixed
        top-20
        right-6
        z-50

        w-12
        h-12

        flex
        items-center
        justify-center

        rounded-full

        bg-white
        dark:bg-white/5

        border
        border-black/10
        dark:border-white/10

        text-gray-800
        dark:text-white

        shadow-lg
        dark:shadow-none

        backdrop-blur-xl

        hover:scale-110
        hover:border-purple-500/40
        hover:text-purple-500

        transition-all
        duration-300
      "
    >
      <span className="text-xl">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}

export default ThemeToggle;
