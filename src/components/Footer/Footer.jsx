import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { personal, socials } from "../../data/personal.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">{personal.firstName.split(" ")[0]}<span>&lt;/&gt;</span></span>
          <p>Crafting modern web experiences. Open to internships and freelance work.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href={`mailto:${personal.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>
      <div className="footer-bottom container">
        {/* CHANGE THIS: name */}
        <span>© {year} {personal.name}. All rights reserved.</span>
        <span>Built with React + Framer Motion</span>
      </div>
    </footer>
  );
}
