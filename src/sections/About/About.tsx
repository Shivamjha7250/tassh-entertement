
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    if (!section || !bg || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(content, { clearProps: "all" });
        return;
      }

      // Background parallax scrolling
      gsap.fromTo(
        bg,
        {
          scale: 1.12,
          yPercent: -4,
        },
        {
          scale: 1.3,
          yPercent: 6,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );

      // Content reveal animation (no pinning)
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraph reveal
      const descriptions = section.querySelectorAll(
        ".about-description"
      );

      gsap.fromTo(
        descriptions,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button reveal
      const button = section.querySelector(".about-button");

      if (button) {
        gsap.fromTo(
          button,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: content,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Depth gradient animation
      const gradient = section.querySelector(
        ".about-depth-gradient"
      );

      if (gradient) {
        gsap.to(gradient, {
          backgroundPosition: "70% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, section);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      {/* Background */}
      <div
        className="about-bg-layer"
        ref={bgRef}
        aria-hidden="true"
      />

      {/* Overlays */}
      <div
        className="about-video-overlay"
        aria-hidden="true"
      />

      <div
        className="about-depth-gradient"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="about-container">
        <div
          className="about-content"
          ref={contentRef}
        >
          <span className="about-label">
            WHO WE ARE ?
          </span>

          <h2>
            ABOUT <span>TAASH</span>
          </h2>

          <p className="about-description">
            We are a creative entertainment and digital marketing
            company driven by imagination, strategy and innovation.
            We transform ideas into powerful brand experiences that
            capture attention and create lasting impressions.
          </p>

          <p className="about-description">
            From creative storytelling to digital experiences, we
            bring brands to life with purpose, passion and a vision
            that goes beyond the ordinary.
          </p>

          <Link
            href="/about"
            className="about-button"
          >
            DISCOVER OUR STORY
          </Link>

          <div className="about-tagline">
            IMAGINATION. STRATEGY. INNOVATION.
          </div>
        </div>
      </div>

      <div className="about-bottom-line" />
    </section>
  );
}
