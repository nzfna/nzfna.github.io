import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme, toggle } = useTheme();
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-app px-6 md:px-12 py-10 md:py-12" data-testid="footer">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
          <span className="w-2 h-2 bg-accent pulse-dot" />
          <span>NAZIFA IZZATI · PORTFOLIO © {year}</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-muted">
          <button onClick={toggle} className="hover:text-accent transition-colors" data-testid="footer-theme-toggle">
            [ {theme === "dark" ? "Light" : "Dark"} mode ]
          </button>
        </div>
      </div>
      <div className="mt-6 font-mono text-[11px] text-muted opacity-70">
        Built with React · Framer Motion · Lenis · Tailwind. Ready for GitHub Pages.
      </div>
    </footer>
  );
};

export default Footer;
