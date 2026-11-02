
"use client";

import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Why Taash?", href: "#why-taash" },
  { label: "Blogs", href: "#blogs" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Brand",
    description: "Logos, identity, packaging, naming and rebranding.",
  },
  {
    number: "02",
    title: "Media",
    description: "Social media, reels, content, ads and influencer collaborations.",
  },
  {
    number: "03",
    title: "Tech",
    description: "Websites, landing pages, UI/UX and SEO.",
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/taashentertainment?stkn=MXd2eHExYWFzc2xmNQ==",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/taashentertainment/",
    icon: (
      <>
        <path d="M5 9v10" />
        <path d="M5 5v.01" />
        <path d="M9 19v-6a4 4 0 0 1 8 0v6" />
        <path d="M9 9v10" />
      </>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@taashentertainment?si=IsiL9F_hnA5wEaYt",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pin.it/7zgx1kkuP",
    icon: (
      <>
        <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9" />
        <path d="m9 22 2-8" />
        <path d="M9 11c0-3 2-5 5-5 2.5 0 4 1.8 4 4 0 3-1.5 6-4 6-1.2 0-2-.8-2-2" />
      </>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@taashentertainment?igshid=NTc4MTIwNjQ2YQ==",
    icon: (
      <>
        <path d="M19 8.5c-.7-3.5-3-5.5-6.7-5.5C7.5 3 5 6.5 5 12c0 5.7 2.5 9 7 9 3.5 0 6-2 6-5 0-2.8-1.8-4.5-5-4.5-2.2 0-3.5 1-3.5 2.5S10.7 16.5 13 16.5c3 0 4.5-2 4.5-5" />
      </>
    ),
  },
  {
    name: "X",
    href: "https://x.com/taashent?s=11",
    icon: (
      <>
        <path d="M4 4l16 16" />
        <path d="M20 4 4 20" />
        <path d="M4 4h5l11 16h-5z" />
      </>
    ),
  },
];

function ContactIcon({ type }: { type: "phone" | "email" | "location" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "phone" && (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
      )}
      {type === "email" && (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </>
      )}
      {type === "location" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="taash-footer" id="footer">
      <div className="taash-footer-bg" />
      <div className="taash-footer-overlay" />

      <div className="taash-footer-container">
        <div className="taash-footer-grid">

          {/* COLUMN 1: BRAND */}
          <div className="taash-footer-brand">
            <a href="#home" className="taash-footer-logo">
              <img
                src="/images/logo/taash-logo.png"
                alt="Taash Entertainment"
              />
            </a>

            <div className="taash-footer-brand-line" />

            <h3 className="taash-footer-tagline">
              A creative agency for brands
              <br />
              that refuse to be boring.
            </h3>

            <p className="taash-footer-brand-description">
              We turn ideas into identities, stories into
              connections and brands into experiences.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="taash-footer-column">
            <h3 className="taash-footer-heading">QUICK LINKS</h3>

            <ul className="taash-footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="footer-link-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="taash-footer-column">
            <h3 className="taash-footer-heading">WHAT WE DO</h3>

            <div className="taash-footer-service-list">
              {services.map((service) => (
                <a
                  href="#services"
                  className="taash-footer-service"
                  key={service.number}
                >
                  <span className="taash-footer-service-number">
                    {service.number}
                  </span>

                  <span className="taash-footer-service-content">
                    <strong>{service.title}</strong>
                    <small>{service.description}</small>
                  </span>

                  <span className="taash-footer-service-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div className="taash-footer-column taash-footer-connect">
            <h3 className="taash-footer-heading">LET'S CONNECT</h3>

            <p className="taash-footer-connect-text">
              Have a project in mind?
              <br />
              Let's create something memorable.
            </p>

            <div className="taash-footer-contact-list">
              <a href="tel:+91XXXXXXXXXX" className="taash-footer-contact">
                <span className="taash-footer-contact-icon">
                  <ContactIcon type="phone" />
                </span>
                <span>+91 XXXXX XXXXX</span>
              </a>

              <a
                href="mailto:hello@taashentertainment.com"
                className="taash-footer-contact"
              >
                <span className="taash-footer-contact-icon">
                  <ContactIcon type="email" />
                </span>
                <span>hello@taashentertainment.com</span>
              </a>

              <div className="taash-footer-contact">
                <span className="taash-footer-contact-icon">
                  <ContactIcon type="location" />
                </span>
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="taash-footer-divider" />

            <h3 className="taash-footer-heading taash-footer-follow-heading">
              FOLLOW US
            </h3>

            <div className="taash-footer-socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="taash-footer-bottom">
          <p>
            © {new Date().getFullYear()} TAASH ENTERTAINMENT.
            ALL RIGHTS RESERVED.
          </p>

          <div className="taash-footer-bottom-links">
            <a href="/privacy-policy">PRIVACY POLICY</a>
            <span>|</span>
            <a href="/terms">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
