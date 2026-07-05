import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 px-6 md:px-12 border-t border-app" data-testid="about-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="flex items-center justify-between mb-14 md:mb-20"
      >
        <span className="section-label">02 · About</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted hidden md:block">/ Bio & Education</span>
      </motion.div>

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="col-span-12 md:col-span-7"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Mahasiswa TI Vokasi <span className="text-accent">Universitas Brawijaya</span> — membangun aplikasi web full-stack end-to-end secara mandiri.
          </h2>

          <p className="mt-8 md:mt-10 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
            Cepat belajar, detail-oriented, terbiasa membangun sistem dari database hingga UI. Berpengalaman dengan Spring Boot + Angular untuk sistem ticketing berbasis JWT, dan Laravel 11 untuk platform edukasi investasi hijau dengan anti-spam device fingerprinting & gamifikasi literasi. Tersertifikasi Gen AI Microsoft Azure.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          className="col-span-12 md:col-span-5 md:pl-6 md:border-l border-app"
        >
          <ul className="space-y-6 font-mono text-sm">
            {[
              ["01", "Full-Stack Web Development"],
              ["02", "Backend Architecture (Spring Boot / Laravel)"],
              ["03", "Frontend Engineering (Angular / Alpine)"],
              ["04", "Auth · JWT · Security · Testing"],
              ["05", "Gen AI · Microsoft Azure Foundry"],
            ].map(([n, t]) => (
              <li key={n} className="flex items-start gap-4 group cursor-default" data-cursor="hover">
                <span className="text-accent">{n}</span>
                <span className="group-hover:translate-x-1 transition-transform">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="border border-app p-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted">Location</div>
              <div className="mt-1 font-display text-lg">Kota Malang & Yogyakarta</div>
            </div>
            <div className="border border-app p-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted">Since</div>
              <div className="mt-1 font-display text-lg">2024 — Now</div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default AboutSection;
