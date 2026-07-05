import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Customer Care Ticketing System",
    role: "Full-Stack · Solo",
    year: "2026",
    tags: ["Spring Boot 3.5", "Angular 17", "MySQL", "JWT", "JPQL"],
    desc: "Aplikasi web ticketing end-to-end dengan arsitektur Controller → Service → Repository, JWT auth, role-based access (Customer/Agent), dan JPQL query dinamis.",
    href: "https://github.com/nzfna/custemer-care",
    img: "/custemer-care.png",
  },
  {
    id: "02",
    name: "Greenvest.co",
    role: "Lead Dev · Team of 3",
    year: "2026",
    tags: ["Laravel 11", "Alpine.js", "Tailwind", "Pest", "Playwright"],
    desc: "Platform edukasi investasi hijau dengan device fingerprinting anti-spam (12+ signals SHA-256), gamifikasi literasi mingguan, dan simulasi compound interest.",
    href: "https://github.com/nzfna/Greenvest",
    img: "/greenvest.co.png",
  },
];

const ProjectsSection = () => {
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12 border-t border-app"
      data-testid="projects-section"
      onMouseMove={onMove}
      ref={containerRef}
    >
      <div className="flex items-center justify-between mb-14 md:mb-20">
        <span className="section-label">04 · Selected Works</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted hidden md:block">/ 2024 — 2026</span>
      </div>

      <motion.div
        className="pointer-events-none fixed z-40 hidden md:block"
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.85,
        }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        style={{
          left: pos.x + (containerRef.current?.getBoundingClientRect().left || 0) + 30,
          top: pos.y + (containerRef.current?.getBoundingClientRect().top || 0) - 100,
          width: 280,
          height: 200,
        }}
      >
        {projects.map((p) => (
          <img
            key={p.id}
            src={p.img}
            alt={p.name}
            className={`absolute inset-0 w-full h-full object-cover border border-accent transition-opacity duration-300 ${hovered === p.id ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </motion.div>

      <div className="border-t border-app">
        {projects.map((p, idx) => (
          <motion.a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.76, 0, 0.24, 1] }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            className="project-row block py-8 md:py-12 group relative"
            data-testid={`project-row-${p.id}`}
          >
            <div className="grid grid-cols-12 gap-4 items-baseline">
              <div className="col-span-1 font-mono text-xs md:text-sm text-muted">{p.id}</div>
              <div className="col-span-11 md:col-span-6">
                <h3 className="font-display uppercase tracking-tighter leading-[0.9] text-4xl md:text-6xl lg:text-7xl group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="mt-3 text-muted text-sm md:text-base max-w-xl">{p.desc}</p>
              </div>
              <div className="col-span-6 md:col-span-3 mt-4 md:mt-0">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-widest border border-app px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-5 md:col-span-2 mt-4 md:mt-0 flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{p.role}</div>
                  <div className="font-mono text-sm">{p.year}</div>
                </div>
                <ArrowUpRight className="text-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
