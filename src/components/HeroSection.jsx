import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HeroSection = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { y: 120, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 md:pt-36 pb-12 px-6 md:px-12 overflow-hidden"
      data-testid="hero-section"
    >
      {/* top meta row */}
      <div className="flex items-start justify-between font-mono text-xs uppercase tracking-[0.25em] text-muted mb-10 md:mb-14">
        <div>
          <div>[ Portfolio / 2026 ]</div>
          <div className="mt-1 opacity-70">Kota Malang & Yogyakarta — ID</div>
        </div>
        <div className="text-right">
          <div>Available for</div>
          <div className="mt-1 opacity-70">Junior Dev / Internship / Freelance</div>
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="relative">
        {/* Nama besar */}
        <div className="relative">
          {/* Baris NAZIFA + stats block sejajar */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-4">
            <motion.h1
              variants={item}
              className="font-display font-black uppercase tracking-tighter leading-[0.85] text-[22vw] md:text-[16vw] lg:text-[13vw]"
            >
              NAZIFA
              IZZATI<span className="text-accent">.</span>
            </motion.h1>

            {/* Stats block: Currently / GPA / Stack — sejajar NAZIFA */}
            <motion.div
              variants={item}
              className="md:pb-5 lg:pb-8 md:max-w-sm flex flex-col gap-4"
            >
              <div className="border-t border-app pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Currently</div>
                <div className="font-display text-lg md:text-xl mt-1">Semester 3 · TI FV UB</div>
              </div>
              <div className="border-t border-app pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">GPA</div>
                <div className="font-display text-lg md:text-xl mt-1">
                  3.90<span className="text-accent">/</span>4.00
                </div>
              </div>
              <div className="border-t border-app pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Stack</div>
                <div className="font-mono text-xs md:text-sm mt-1">
                  Spring Boot · Angular 17 · Laravel 11 · MySQL · Azure AI
                </div>
              </div>
              <div className="border-t border-app pt-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-accent mt-4 md:mt-6"
                >
                  <span>Contact Me</span>
                  <ArrowDownRight className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={item}
          className="mt-8 md:mt-12 flex justify-center md:justify-start"
        >
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-accent text-background font-mono text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-accent-hover transition-colors"
          >
            DOWNLOAD RESUME
          </a>
        </motion.div>
        <motion.div
          variants={item}
          className="mt-4 md:mt-6 flex justify-center md:justify-start"
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;