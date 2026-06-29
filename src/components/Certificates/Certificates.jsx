import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certificates } from "../../data/content.js";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="section certs">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-eyebrow">Certificates</span>
          <h2 className="section-title">Continuous <span className="grad">learning</span></h2>
          <p className="section-sub">Verified credentials from courses and platforms I trust.</p>
        </motion.div>

        <div className="certs-grid">
          {certificates.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* CHANGE THIS: certificate image in src/data/content.js */}
              <div className="cert-img"><img src={c.image} alt={c.title} loading="lazy" /></div>
              <div className="cert-body">
                <div className="cert-badge"><FiAward /></div>
                <h3>{c.title}</h3>
                <p>{c.issuer}</p>
                <div className="cert-meta">
                  <span>{c.date}</span>
                  <span className="cert-view">View <FiExternalLink /></span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
