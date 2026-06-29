import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodechef } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { socials } from "../../data/personal.js";
import "./CodingProfiles.css";

const profiles = [
  { name: "GitHub", handle: "@yourusername", Icon: FaGithub, color: "#ffffff", url: socials.github, accent: "rgba(255,255,255,0.15)" },
  { name: "LinkedIn", handle: "Your Name", Icon: FaLinkedin, color: "#0a66c2", url: socials.linkedin, accent: "rgba(10,102,194,0.25)" },
  { name: "LeetCode", handle: "@yourusername", Icon: SiLeetcode, color: "#ffa116", url: socials.leetcode, accent: "rgba(255,161,22,0.2)" },
  { name: "GeeksforGeeks", handle: "@yourusername", Icon: SiGeeksforgeeks, color: "#2f8d46", url: socials.geeksforgeeks, accent: "rgba(47,141,70,0.2)" },
  { name: "HackerRank", handle: "@yourusername", Icon: SiHackerrank, color: "#00ea64", url: socials.hackerrank, accent: "rgba(0,234,100,0.2)" },
  { name: "CodeChef", handle: "@yourusername", Icon: SiCodechef, color: "#a47b48", url: socials.codechef, accent: "rgba(164,123,72,0.25)" },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section profiles">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-eyebrow">Profiles</span>
          <h2 className="section-title">Find me <span className="grad">around the web</span></h2>
          <p className="section-sub">Where I build, share, and solve problems daily.</p>
        </motion.div>

        <div className="prof-grid">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="prof-card glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              style={{ "--ax": p.accent }}
            >
              <div className="prof-icon" style={{ color: p.color }}><p.Icon /></div>
              <div className="prof-text">
                <h4>{p.name}</h4>
                {/* CHANGE THIS: handles in src/data/personal.js (socials object) */}
                <span>{p.handle}</span>
              </div>
              <FiArrowUpRight className="prof-arrow" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
