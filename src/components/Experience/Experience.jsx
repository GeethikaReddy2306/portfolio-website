import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { experience } from "../../data/content.js";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-eyebrow">Experience</span>
          <h2 className="section-title">Where I've <span className="grad">worked</span></h2>
          <p className="section-sub">A timeline of internships, freelance work, and open source.</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experience.map((item, i) => (
            <motion.div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-dot"><FiBriefcase /></div>
              <div className="timeline-card glass">
                <div className="timeline-period">{item.period}</div>
                <h3>{item.role}</h3>
                <div className="timeline-meta">
                  <span className="timeline-company">{item.company}</span>
                  <span className="timeline-loc"><FiMapPin /> {item.location}</span>
                </div>
                <ul>
                  {item.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
