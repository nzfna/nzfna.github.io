import { useEffect } from "react";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider>
      <div className="App grain">
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <Portfolio />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
