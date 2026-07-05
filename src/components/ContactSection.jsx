import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Marquee from "react-fast-marquee";

const links = [
  {
    id: "email",
    label: "Email",
    value: "nzf.zza@gmail.com",
    href: "mailto:nzf.zza@gmail.com",
    icon: Mail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+62 831-4516-8063",
    href: "https://wa.me/6283145168063",
    icon: MessageCircle,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/nzfna",
    href: "https://github.com/nzfna",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/nazifa-izzati",
    href: "https://www.linkedin.com/in/nazifa-izzati-307483378/",
    icon: Linkedin,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen border-t border-app overflow-hidden flex flex-col justify-between py-16 md:py-20"
      data-testid="contact-section"
    >
      <div className="absolute inset-0 flex items-center pointer-events-none opacity-100">
        <Marquee gradient={false} speed={30} className="w-full">
          <div className="flex items-center gap-10 pr-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="font-display font-black uppercase tracking-tighter leading-none text-[24vw] stroke-text-accent whitespace-nowrap"
              >
                HUBUNGI SAYA —
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="relative z-10 px-6 md:px-12 flex items-center justify-between">
        <span className="section-label">06 · Contact</span>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted hidden md:block">/ Let's talk</span>
      </div>

      <div className="relative z-10 px-6 md:px-12 mt-16 md:mt-0">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="font-display font-black uppercase tracking-tighter leading-[0.85] text-[16vw] md:text-[12vw] lg:text-[10vw]"
        >
          HUBUNGI
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="font-display font-black uppercase tracking-tighter leading-[0.85] text-[16vw] md:text-[12vw] lg:text-[10vw]"
        >
          <span className="text-accent">SAYA</span>
          <span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 md:mt-10 max-w-2xl text-base md:text-lg text-muted"
        >
          Terbuka untuk junior dev, magang, dan proyek freelance full-stack. Klik salah satu tombol di bawah — biasanya saya balas dalam 24 jam.
        </motion.p>
      </div>

      <div className="relative z-10 px-6 md:px-12 mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {links.map((l, i) => {
          const Icon = l.icon;
          return (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.09, ease: [0.76, 0, 0.24, 1] }}
            >
              <MagneticButton
                as="a"
                href={l.href}
                target={l.id === "email" ? undefined : "_blank"}
                rel="noreferrer"
                strength={0.2}
                className="group flex items-center justify-between border border-app hover:border-accent hover:bg-accent transition-colors px-6 md:px-8 py-6 md:py-7 w-full text-left"
                data-testid={`contact-${l.id}`}
              >
                <div className="flex items-center gap-5 md:gap-6">
                  <Icon size={28} className="shrink-0 group-hover:text-white transition-colors" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted group-hover:text-white/80">
                      {l.label}
                    </div>
                    <div className="mt-1 font-display text-2xl md:text-3xl group-hover:text-white transition-colors">
                      {l.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={30} className="group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </MagneticButton>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
