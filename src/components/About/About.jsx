import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiCpu, FiTarget } from "react-icons/fi";
import { personal } from "../../data/personal.js";
import { highlights, education } from "../../data/content.js";
import "./About.css";

const cards = [
  { Icon: FiCode, title: "Web Development", text: "Designing and building fast, accessible web apps with React, Next.js, and TypeScript." },
  { Icon: FiCpu, title: "Backend & APIs", text: "Robust REST and GraphQL APIs powered by Node.js, with thoughtful DB and caching strategy." },
  { Icon: FiTarget, title: "Problem Solving", text: "DSA-driven thinking applied to real product problems — performance, UX, and reliability." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">A bit <span className="grad">about me</span></h2>
          <p className="section-sub">Education, focus, and what I bring to a team.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-photo glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* CHANGE THIS: about/secondary image in src/data/personal.js */}
            <img src={personal.aboutImage} alt={personal.name} loading="lazy" />
            <div className="about-photo-tag">
              <span className="dot" /> {/* CHANGE THIS */} {personal.location}
            </div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="about-name">I'm <span className="grad">{personal.name}</span></h3>
            <p className="about-text">{personal.about}</p>

            <div className="about-edu">
              <FiBookOpen className="about-edu-icon" />
              <div>
                {education.map((e) => (
                  <div key={e.school} className="about-edu-row">
                    <strong>{e.degree}</strong>
                    <span>{e.school} · {e.period}</span>
                    <p>{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-stats">
              {highlights.map((h) => (
                <div key={h.label} className="about-stat">
                  <div className="about-stat-value">{h.value}</div>
                  <div className="about-stat-label">{h.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-cards"
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {cards.map(({ Icon, title, text }) => (
            <motion.div key={title} className="about-card glass" variants={fadeUp} whileHover={{ y: -6 }}>
              <div className="about-card-icon"><Icon /></div>
              <h4>{title}</h4>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
