import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const SkillsSection = () => {
  const categories = [
    {
      label: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP 8.2", "Blade", "Tailwind CSS", "Bootstrap", "Vite"],
    },
    {
      label: "Backend",
      items: ["Java 21", "Spring Boot 3.5", "Spring Security", "REST API", "JWT (JJWT 0.12)", "Lombok", "Laravel 11"],
    },
    {
      label: "Frontend",
      items: ["Angular 17 Signals", "RxJS", "HttpInterceptorFn", "Alpine.js", "Chart.js", "Responsive Design"],
    },
    {
      label: "Database",
      items: ["MySQL", "SQL", "ER Diagram", "JPQL", "Query Optimization", "Indexing"],
    },
    {
      label: "Testing & DevOps",
      items: ["Pest / PHPUnit", "Playwright E2E", "Postman", "Thunder Client", "Git", "GitHub PR/Review", "Maven"],
    },
    {
      label: "AI & Cloud",
      items: ["Microsoft Azure", "Azure AI Foundry", "Generative AI", "RAG"],
    },
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-app overflow-hidden" data-testid="skills-section">
      <div className="px-6 md:px-12 flex items-center justify-between mb-14 md:mb-20">
        <span className="section-label">03 · Skills</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted hidden md:block">/ Toolkit</span>
      </div>

      <Marquee gradient={false} speed={45} className="mb-6">
        <div className="flex items-center gap-10 pr-10">
          {["ENGINEERING", "•", "DESIGN SYSTEMS", "•", "AUTOMATION", "•", "GEN AI", "•", "FULL-STACK", "•"].map((t, i) => (
            <span
              key={i}
              className={`font-display font-black uppercase tracking-tight text-[14vw] md:text-[10vw] leading-none ${i % 3 === 1 ? "text-accent" : "stroke-text"}`}
            >
              {t}
            </span>
          ))}
        </div>
      </Marquee>

      <Marquee gradient={false} speed={35} direction="right" className="mb-16 md:mb-20">
        <div className="flex items-center gap-10 pr-10">
          {["SPRING BOOT", "★", "ANGULAR", "★", "LARAVEL", "★", "AZURE", "★", "MYSQL", "★"].map((t, i) => (
            <span
              key={i}
              className={`font-display font-black uppercase tracking-tight text-[10vw] md:text-[7vw] leading-none ${i % 3 === 1 ? "text-accent" : ""}`}
            >
              {t}
            </span>
          ))}
        </div>
      </Marquee>

      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {categories.map((c, idx) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.76, 0, 0.24, 1] }}
          >
            <TiltCard
              className="border border-app p-6 md:p-7 hover:border-accent transition-colors group overflow-hidden"
              data-cursor="hover"
              data-testid={`skill-card-${idx}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">/ {String(idx + 1).padStart(2, "0")}</div>
                <div className="w-2 h-2 bg-accent group-hover:scale-150 transition-transform" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl uppercase leading-none">{c.label}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.items.map((s) => (
                  <span key={s} className="font-mono text-[11px] uppercase tracking-widest border border-app px-2.5 py-1 hover:bg-accent hover:border-accent hover:text-white transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
