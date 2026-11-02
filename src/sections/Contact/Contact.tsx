
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.from(".contact-main-heading, .contact-sub-heading", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      // CTA button
      gsap.from(".contact-cta-btn", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          once: true,
        },
      });

      // Glow pulse
      gsap.to(".contact-glow", {
        scale: 1.25,
        opacity: 0.12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ── BACKGROUND DEPTH PARALLAX ───────────────
      const bgEl = section.querySelector(".contact-cinematic-bg") as HTMLElement;
      if (bgEl) {
        gsap.to(bgEl, {
          backgroundPositionY: "60%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            invalidateOnRefresh: true,
          },
        });
      }

      // ── SECTION 3D ENTRANCE ─────────────────────
      gsap.fromTo(
        section,
        { clipPath: "inset(4% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "top 45%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );

      // ── INFO ITEMS STAGGER REVEAL ────────────────
      gsap.fromTo(
        ".contact-info-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-row",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-cinematic-section" id="contact" ref={sectionRef}>
      {/* Background */}
      <div className="contact-cinematic-bg" />
      <div className="contact-cinematic-overlay" />

      {/* Decorative glow */}
      <div className="contact-glow" aria-hidden="true" />

      {/* Grid lines */}
      <div className="contact-grid-lines" aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className="contact-cinematic-content">
        <span className="contact-eyebrow">
          <span className="contact-eyebrow-line" />
          START A PROJECT
        </span>

        <h2 className="contact-main-heading">
          Let&apos;s build something
          <br />
          <span>remarkable.</span>
        </h2>

        <p className="contact-sub-heading">
          Have an idea? A challenge? A brand that needs to break through?
          <br />
          We&apos;re ready to make it happen.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:hello@taashentertainment.com"
            className="contact-cta-btn"
          >
            Get In Touch
            <span className="contact-btn-arrow">↗</span>
          </a>

          <a
            href="https://www.instagram.com/taashentertainment"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
          >
            @taashentertainment
          </a>
        </div>

        <div className="contact-info-row">
          <div className="contact-info-item">
            <span className="contact-info-label">EMAIL</span>
            <a href="mailto:hello@taashentertainment.com">
              hello@taashentertainment.com
            </a>
          </div>

          <div className="contact-info-divider" aria-hidden="true" />

          <div className="contact-info-item">
            <span className="contact-info-label">LOCATION</span>
            <span>Pune, Maharashtra, India</span>
          </div>

          <div className="contact-info-divider" aria-hidden="true" />

          <div className="contact-info-item">
            <span className="contact-info-label">AVAILABILITY</span>
            <span>Open for new projects</span>
          </div>
        </div>
      </div>

      <div className="contact-bottom-meta" aria-hidden="true">
        <span>TAASH ENTERTAINMENT © 2025</span>
        <span>STRATEGY · CREATIVITY · IMPACT</span>
      </div>
    </section>
  );
}
