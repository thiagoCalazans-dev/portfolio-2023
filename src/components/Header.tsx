import { useTheme } from "next-themes";
import Link from "next/link";
import { LightbulbFilament, Moon, Sun } from "phosphor-react";

export function Header() {
  const { setTheme, theme } = useTheme();

  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="fixed overflow-hidden z-30 border-b ">
      <nav className="flex p-4 justify-between w-screen">
        <span className="uppercase font-extrabold text-lg">DEV-TCalazans</span>
        <ul className="flex gap-3 text-xl">
          <li>
            <Link href="/">About me</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/">Experience</Link>
          </li>
          <li>
            <Link href="/">Articles</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div>
          <button
            className="rounded-full p-1 bg-base-200 dark:bg-base-800"
            onClick={switchTheme}
          >
            {theme === "light" && <Moon className="text-xl text-blue-900" />}
            {theme === "dark" && <Sun className="text-xl text-yellow-500" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
