import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../../Context/ThemeContext.jsx";
import { personal } from "../../data/personal.js";
import "./Navbar.css";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`nav ${scrolled ? "nav-scrolled" : ""}`}
    >
      <div className="container nav-inner">
        <motion.a
          href="#home"
          onClick={(e) => handleNav(e, "#home")}
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
        >
          <span className="nav-logo-name">{personal.firstName.split(" ")[0]}</span>
          <span className="nav-logo-tag">&lt;/&gt;</span>
        </motion.a>

        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className={`nav-link ${active === l.href.slice(1) ? "is-active" : ""}`}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <motion.span layoutId="active-pill" className="nav-pill" />
              )}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="nav-icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <HiSun /> : <HiMoon />}
          </button>
          <button className="nav-icon nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="nav-mobile"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className={`nav-mobile-link ${active === l.href.slice(1) ? "is-active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
