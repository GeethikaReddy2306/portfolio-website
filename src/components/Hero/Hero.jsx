import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowDown, FiMail, FiGithub } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiPython, SiTailwindcss } from "react-icons/si";
import { personal, socials } from "../../data/personal.js";
import "./Hero.css";

const floatingIcons = [
  { Icon: SiReact, color: "#61dafb", top: "12%", left: "8%", delay: 0 },
  { Icon: SiNodedotjs, color: "#3c873a", top: "72%", left: "4%", delay: 0.3 },
  { Icon: SiJavascript, color: "#f7df1e", top: "20%", right: "10%", delay: 0.6 },
  { Icon: SiTypescript, color: "#3178c6", top: "78%", right: "12%", delay: 0.9 },
  { Icon: SiPython, color: "#3776ab", top: "48%", left: "2%", delay: 1.2 },
  { Icon: SiTailwindcss, color: "#38bdf8", top: "8%", right: "40%", delay: 1.5 },
];

function Typer({ words, speed = 90, pause = 1400 }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return (
    <span className="hero-typer">
      {text}
      <span className="hero-caret" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="hero-dot" /> Available for internships
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hi, I'm <span className="hero-name">{personal.firstName.split(" ")[0]}</span>
          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <Typer words={personal.titles} />
          </motion.h2>

          <motion.p
            className="hero-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
          >
            <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              View Projects
            </a>
            {/* CHANGE THIS: resume path is set in src/data/personal.js */}
            <a className="btn btn-ghost" href={personal.resume} target="_blank" rel="noopener noreferrer">
              <FiDownload /> Download Resume
            </a>
            <a className="btn btn-outline" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              <FiMail /> Contact Me
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href={`mailto:${personal.email}`} aria-label="Email"><FiMail /></a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero-portrait-glow" />
          <motion.div
            className="hero-portrait"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* CHANGE THIS: profile image path in src/data/personal.js */}
            <img src={personal.profileImage} alt={personal.name} loading="lazy" />
            <div className="hero-portrait-ring" />
          </motion.div>

          {floatingIcons.map(({ Icon, color, top, left, right, delay }, idx) => (
            <motion.div
              key={idx}
              className="hero-float"
              style={{ top, left, right, color }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { delay: 0.6 + delay, duration: 0.6 },
                scale: { delay: 0.6 + delay, duration: 0.6 },
                y: { duration: 4 + idx * 0.4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown />
        </motion.div>
      </motion.a>
    </section>
  );
}
