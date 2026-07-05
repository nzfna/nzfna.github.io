import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TiltCard = ({ children, className = "", maxTilt = 10, ...rest }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const ry = (px - 0.5) * maxTilt * 2;
    const rx = -(py - 0.5) * maxTilt * 2;

    setTilt({ rx, ry, glareX: px * 100, glareY: py * 100 });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.6 }}
      style={{ transformStyle: "preserve-3d", perspective: 800, position: "relative" }}
      className={className}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, color-mix(in srgb, var(--accent) 15%, transparent), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export default TiltCard;
