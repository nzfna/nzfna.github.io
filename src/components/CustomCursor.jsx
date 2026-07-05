import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const raf = () => {
      curX += (mouseX - curX) * 0.22;
      curY += (mouseY - curY) * 0.22;
      dot.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    };

    const onOver = (e) => {
      const t = e.target;
      if (t.closest && t.closest("a, button, [data-cursor='hover'], input, textarea")) {
        dot.classList.add("hover");
      }
    };
    const onOut = (e) => {
      const t = e.target;
      if (t.closest && t.closest("a, button, [data-cursor='hover'], input, textarea")) {
        dot.classList.remove("hover");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot hidden md:block" data-testid="custom-cursor" />;
};

export default CustomCursor;
