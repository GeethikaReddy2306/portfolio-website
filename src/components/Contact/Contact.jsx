import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLoader } from "react-icons/fi";
import { personal, emailjsConfig } from "../../data/personal.js";
import "./Contact.css";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = (f) => {
    const e = {};
    if (!f.name.trim() || f.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email.";
    if (!f.message.trim() || f.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate(form);
    if (Object.keys(eobj).length) { setErrors(eobj); toast.error("Please fix the highlighted fields."); return; }
    setLoading(true);
    try {
      // ===============================
      // CHANGE THIS
      // Set your EmailJS credentials in src/data/personal.js
      // ===============================
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio inquiry",
          message: form.message,
        },
        emailjsConfig.publicKey
      );
      toast.success("Message sent — I'll get back to you soon!");
      setForm(initial);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send right now. Try emailing me directly.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { Icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { Icon: FiPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { Icon: FiMapPin, label: "Location", value: personal.location },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's build <span className="grad">something great</span></h2>
          <p className="section-sub">Open to internships, freelance, and collaboration. Drop a message.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Reach out directly</h3>
            <p className="contact-info-sub">Prefer email? Use the channels below — I usually reply within 24 hours.</p>

            <div className="contact-list">
              {contactItems.map(({ Icon, label, value, href }) => {
                const Tag = href ? "a" : "div";
                return (
                  <Tag key={label} href={href} className="contact-item">
                    <span className="contact-item-icon"><Icon /></span>
                    <span>
                      <small>{label}</small>
                      {/* CHANGE THIS: details in src/data/personal.js */}
                      <strong>{value}</strong>
                    </span>
                  </Tag>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            noValidate
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={onChange} placeholder="Jane Doe" maxLength={80} />
                {errors.name && <span className="form-err">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" maxLength={120} />
                {errors.email && <span className="form-err">{errors.email}</span>}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject <span className="opt">(optional)</span></label>
              <input id="subject" name="subject" type="text" value={form.subject} onChange={onChange} placeholder="Internship opportunity" maxLength={120} />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} placeholder="Tell me a little about the role or project..." maxLength={1000} />
              {errors.message && <span className="form-err">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? (<><FiLoader className="spin" /> Sending...</>) : (<><FiSend /> Send a message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
