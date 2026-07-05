import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    provider: "Dicoding Indonesia × Microsoft",
    date: "Desember 2025",
    verify: "dicoding.com/certificates/72ZDJL56QZYW",
    href: "https://dicoding.com/certificates/72ZDJL56QZYW",
  },
  {
    title: "Data Science End-to-End dengan Microsoft Fabric",
    provider: "Dicoding Indonesia × Microsoft",
    date: "Desember 2025",
    verify: "dicoding.com/certificates/KEXL2W850ZG2",
    href: "https://dicoding.com/certificates/KEXL2W850ZG2",
  },
  {
    title: "Belajar Dasar AI",
    provider: "Pijak x IBM SkillsBuild X Dicoding",
    date: "July 2026",
    verify: "dicoding.com/certificates/JLX1V8OJJZ72",
    href: "https://dicoding.com/certificates/JLX1V8OJJZ72",
  },
];

const languages = [
  { name: "Bahasa Indonesia", level: "Native", value: 100 },
  { name: "English", level: "Professional Working", value: 78 },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-24 md:py-32 px-6 md:px-12 border-t border-app" data-testid="certs-section">
      <div className="flex items-center justify-between mb-14 md:mb-20">
        <span className="section-label">05 · Credentials</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted hidden md:block">/ Certs & Languages</span>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-6">Certifications</h3>
          <ul className="border-t border-app">
            {certs.map((c, i) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border-b border-app py-6 group"
                data-testid={`cert-${i}`}
              >
                <a href={c.href} target="_blank" rel="noreferrer" className="flex items-start justify-between gap-6">
                  <div>
                    <div className="font-display text-xl md:text-2xl group-hover:text-accent transition-colors">
                      {c.title}
                    </div>
                    <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                      {c.provider} · {c.date}
                    </div>
                    <div className="mt-2 font-mono text-[11px] text-muted opacity-70 break-all">
                      {c.verify}
                    </div>
                  </div>
                  <ExternalLink size={20} className="shrink-0 text-muted group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l border-app">
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted mb-6">Languages</h3>
          <div className="space-y-8">
            {languages.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-2xl md:text-3xl">{l.name}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted">{l.level}</div>
                </div>
                <div className="mt-3 h-[2px] w-full bg-app relative overflow-hidden" style={{ background: "var(--border)" }}>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: l.value / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.76, 0, 0.24, 1] }}
                    style={{ transformOrigin: "left" }}
                    className="absolute inset-0 bg-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 border border-app p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Soft Skills</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Problem Solving", "Teamwork", "Time Management", "Self-Learning", "Detail-Oriented", "Initiative"].map((s) => (
                <span key={s} className="font-mono text-[11px] uppercase tracking-widest border border-app px-2.5 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
