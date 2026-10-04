import { useState } from "react";
import {
  TbMail,
  TbBrandLinkedin,
  TbBrandGithub,
  TbPhone,
  TbCopy,
  TbCheck,
  TbSend,
} from "react-icons/tb";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/site";

const channels = [
  {
    label: "LinkedIn",
    value: "Fatma Aldaly",
    href: profile.linkedin,
    icon: TbBrandLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: `@${profile.githubUser}`,
    href: profile.github,
    icon: TbBrandGithub,
    external: true,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: TbPhone,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No backend on GitHub Pages: the form opens the visitor's email app, pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          index="07"
          label="Contact"
          id="contact-title"
          title="Have a project or opportunity? Let's talk."
          intro="I'm looking for opportunities to grow as a developer: junior roles, internships and projects. My inbox is always open."
        />

        <div className="contact-grid">
          <div className="contact-channels reveal">
            <div className="email-card">
              <span className="mini-label">Email me directly</span>
              <a className="email-link" href={`mailto:${profile.email}`}>
                <TbMail aria-hidden="true" />
                {profile.email}
              </a>
              <button type="button" className="btn btn-soft btn-sm" onClick={copyEmail}>
                {copied ? <TbCheck aria-hidden="true" /> : <TbCopy aria-hidden="true" />}
                {copied ? "Copied" : "Copy email"}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>

            <ul className="channel-list">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      className="channel"
                      href={channel.href}
                      {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <Icon aria-hidden="true" />
                      <span>
                        <span className="channel-label">{channel.label}</span>
                        <span className="channel-value">{channel.value}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <form className="contact-form reveal" onSubmit={submit}>
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={update}
              />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={update}
              />
            </div>
            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={update}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <TbSend aria-hidden="true" /> Send message
            </button>
            <p className="form-note">Opens your email app with the message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
