import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";
import { projects } from "../../data/content.js";
import "./Projects.css";

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">Selected <span className="grad">work</span></h2>
          <p className="section-sub">Production-grade builds — from idea to deploy.</p>
        </motion.div>

        <div className="proj-filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`proj-filter ${filter === c ? "is-active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div className="proj-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="proj-card glass"
              >
                <div className="proj-media">
                  {/* CHANGE THIS: project image in src/data/content.js */}
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="proj-media-overlay">
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-media-btn" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="proj-media-btn" aria-label="Live demo">
                      <FiExternalLink />
                    </a>
                  </div>
                  <span className="proj-cat">{p.category}</span>
                </div>

                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <ul className="proj-features">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f}><FiCheck /> {f}</li>
                    ))}
                  </ul>

                  <div className="proj-tech">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>

                  <div className="proj-actions">
                    <a className="btn btn-ghost btn-sm" href={p.github} target="_blank" rel="noreferrer">
                      <FiGithub /> Repository
                    </a>
                    <a className="btn btn-primary btn-sm" href={p.demo} target="_blank" rel="noreferrer">
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
