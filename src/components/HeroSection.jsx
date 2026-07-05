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
        <div className="relative">
          <motion.h1
            variants={item}
            className="font-display font-black uppercase tracking-tighter leading-[0.85] text-[22vw] md:text-[16vw] lg:text-[13vw]"
          >
            NAZIFA
          </motion.h1>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-4 mt-2 md:mt-0">
            <motion.h1
              variants={item}
              className="font-display font-black uppercase tracking-tighter leading-[0.85] text-[22vw] md:text-[16vw] lg:text-[13vw]"
            >
              IZZATI<span className="text-accent">.</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="md:pb-5 lg:pb-8 md:max-w-xs font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-muted"
            >
              <div className="flex items-start gap-2">
                <ArrowDownRight size={16} className="text-accent shrink-0 mt-0.5" />
                <p>
                  Full-Stack Developer & Mahasiswa Teknologi Informasi — Universitas Brawijaya. Building modern web experiences where clean architecture meets sharp UI.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-12 md:mt-16 items-end">
          <motion.div variants={item} className="col-span-12 md:col-span-4 order-2 md:order-1">
            <div className="flex flex-col gap-6">
              <div className="border-t border-app pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Currently</div>
                <div className="font-display text-2xl md:text-3xl mt-2">Semester 2 · TI Vokasi UB</div>
              </div>
              <div className="border-t border-app pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">GPA</div>
                <div className="font-display text-2xl md:text-3xl mt-2">
                  3.90<span className="text-accent">/</span>4.00
                </div>
              </div>
              <div className="border-t border-app pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Stack</div>
                <div className="font-mono text-sm mt-2">
                  Spring Boot · Angular 17 · Laravel 11 · MySQL · Azure AI
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="col-span-12 md:col-span-5 order-1 md:order-2 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-transparent">
                <img 
                  src="/photo.png"
                  alt="Nazifa Izzati portrait"
                  className="hero-portrait w-full h-full object-cover"
                  data-testid="hero-portrait"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="col-span-12 md:col-span-3 order-3 flex flex-col items-start md:items-end gap-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</div>
            <div className="font-display text-6xl md:text-7xl leading-none">01</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">to explore</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
