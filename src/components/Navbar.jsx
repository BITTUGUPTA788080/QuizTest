import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // ✅ Apply dark mode on <html> tag
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <nav
        className="w-full px-6 py-4 shadow-lg transition-all duration-300
        bg-blue-600 text-white 
        dark:bg-gray-900 dark:text-gray-200"
      >
        <div className="flex justify-between items-center">

          {/* Title */}
          <h1 className="text-2xl font-bold">QuizTest</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-lg">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/quiz" className="hover:text-gray-300">Quiz</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
          </ul>

          {/* Desktop Toggle Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
            >
              {dark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="md:hidden mt-4 flex flex-col gap-4 text-lg
            bg-blue-700 dark:bg-gray-800 p-4 rounded-xl"
          >
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/quiz">Quiz</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/login">Login</Link>

            {/* Mobile Dark Mode Button */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 bg-white/20 rounded-xl mt-2"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
