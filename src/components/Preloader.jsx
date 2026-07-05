import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "NAZIFA IZZATI";

const Preloader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const letters = NAME.split("");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.045, delayChildren: 0.1 },
    },
  };
  const letter = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: "var(--bg)" }}
          data-testid="preloader"
        >
          <motion.div
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center font-display font-black uppercase tracking-tighter text-[10vw] md:text-[5vw] leading-none"
            >
              {letters.map((l, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className={l === " " ? "w-4 md:w-8" : ""}
                >
                  {l === " " ? "\u00A0" : l}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-8 w-40 md:w-56 h-[2px] bg-app relative overflow-hidden" style={{ background: "var(--border)" }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-0 bg-accent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
