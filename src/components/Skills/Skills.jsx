import { motion } from "framer-motion";
import { skillGroups } from "../../data/content.js";
import "./Skills.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div className="section-header"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">My <span className="grad">tech stack</span></h2>
          <p className="section-sub">Tools and technologies I use to ship modern products end-to-end.</p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className="skill-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="skill-card-head">
                <span className="skill-num">0{gi + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <motion.div
                className="skill-items"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              >
                {group.items.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    className="skill-pill"
                    variants={fadeUp}
                    whileHover={{ scale: 1.06, y: -3 }}
                  >
                    <Icon style={{ color }} />
                    <span>{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
