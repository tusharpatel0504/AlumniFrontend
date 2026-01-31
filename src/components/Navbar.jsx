import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [style, setStyle] = useState({
    maxWidth: "1100px",
    backgroundColor: "rgba(30,30,30,0.85)",
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const handleScroll = () => {
      if (!hero) return;

      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;

      const rawProgress = 1 - scrollY / heroHeight;
      const progress = Math.max(0, Math.min(rawProgress, 1));

      const maxWidth = 1100;
      const minWidth = 720;
      const width = minWidth + (maxWidth - minWidth) * progress;

      const maxOpacity = 0.85;
      const minOpacity = 0.25;
      const opacity =
        maxOpacity - (maxOpacity - minOpacity) * progress;

      setStyle({
        maxWidth: `${width}px`,
        backgroundColor: `rgba(30,30,30,${opacity})`,
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setOpen(false);
    const el = document.getElementById(sectionId);
    if (!el) return;

    const offset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={style}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[calc(100%-2rem)]
        backdrop-blur-xl
        transition-all duration-300 ease-out
        rounded-xl px-4 py-3
        will-change-[max-width,background-color]
      "
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg text-white italic font-semibold nav-glow glow-text"
        >
          Falcon
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li>
            <Link
              to="/jobs"
              className="hover:text-white font-semibold cursor-pointer transition glow-text"
            >
              Jobs
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3 items-center">
          <Link
            to="/login"
            className="text-white text-sm px-4 py-2 rounded-lg hover:bg-white/10 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-black text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open && "rotate-45 translate-y-[6px]"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open && "opacity-0"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition ${
              open && "-rotate-45 -translate-y-[6px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <ul className="flex flex-col gap-4 text-sm text-gray-300">
            <li>
              <Link
                to="/jobs"
                onClick={() => setOpen(false)}
                className="hover:text-white cursor-pointer"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                onClick={() => setOpen(false)}
                className="hover:text-white cursor-pointer"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 w-full bg-white/10 text-white py-2 rounded-lg hover:bg-white/20 transition"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
