import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Buy Crypto", path: "/" },
  { label: "Markets", path: "/markets" },
  { label: "Trade", path: "/trade" },
  { label: "Futures", path: "/futures" },
  { label: "Earn", path: "/earn" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-kc-bg/95 backdrop-blur-md border-b border-kc-border"
          : "bg-kc-bg border-b border-kc-border"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-kc-green flex items-center justify-center">
              <span className="text-black font-extrabold text-sm">K</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              KuCoin
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "text-kc-green bg-kc-green/10"
                      : "text-kc-muted hover:text-white hover:bg-kc-surface"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-kc-muted hover:text-white hover:bg-kc-surface transition"
              aria-label="Search"
            >
              <FaSearch size={14} />
            </button>

            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-kc-text hover:text-kc-green transition"
            >
              Log In
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 text-sm font-semibold kc-btn-primary"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-white"
            aria-label="Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
    </header>
  );
}
