import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Works", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between backdrop-blur-sm"
      style={{ background: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
      data-testid="navbar"
    >
      <a href="#top" className="flex items-center gap-3 font-mono text-sm tracking-widest" data-testid="brand-link">
        <span className="w-2.5 h-2.5 bg-accent pulse-dot" />
        <span className="uppercase">NZF.IZZATI</span>
      </a>

      <ul className="hidden md:flex items-center gap-9 font-mono text-xs uppercase tracking-[0.25em]">
        {links.map((l, i) => {
          const isActive = active === l.id;
          return (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 group"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                <span className={`mr-2 transition-opacity ${isActive ? "opacity-100 text-accent" : "opacity-60"}`}>
                  0{i + 1}
                </span>
                <span className={`transition-colors ${isActive ? "text-accent" : "group-hover:text-accent"}`}>
                  {l.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="w-11 h-11 border border-app flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group"
          data-testid="theme-toggle"
          aria-label="toggle theme"
        >
          {theme === "dark" ? (
            <Sun size={16} className="group-hover:rotate-45 transition-transform" />
          ) : (
            <Moon size={16} className="group-hover:-rotate-12 transition-transform" />
          )}
        </button>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden w-11 h-11 border border-app flex items-center justify-center"
          data-testid="mobile-menu-toggle"
          aria-label="toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden absolute top-full left-0 right-0 border-t border-app px-6 py-8 flex flex-col gap-6"
            style={{ background: "var(--bg)" }}
            data-testid="mobile-menu"
          >
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-sm uppercase tracking-[0.25em] ${active === l.id ? "text-accent" : ""}`}
              >
                0{i + 1} · {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
