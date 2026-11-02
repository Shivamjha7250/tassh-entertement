
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";

const tears = [
  { left: "28%", delay: 0 },
  { left: "36%", delay: 0.12 },
  { left: "43%", delay: 0.25 },
  { left: "52%", delay: 0.08 },
  { left: "61%", delay: 0.3 },
  { left: "70%", delay: 0.18 },
  { left: "78%", delay: 0.38 },
];

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // HERO ENTRANCE
      const intro = gsap.timeline({ delay: 0.2 });

      intro.fromTo(
        eyebrowRef.current,
        { opacity: 0, x: -35, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
        }
      );

      intro.fromTo(
        h1Ref.current,
        { opacity: 0, y: 70, rotateX: 18, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.5"
      );

      intro.fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      intro.fromTo(
        actionsRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      // 3D BACKGROUND IMAGE SCROLL ANIMATION
      gsap.fromTo(
        bgImageRef.current,
        {
          scale: 1.12,
          yPercent: -2,
          z: -80,
          rotateX: 0,
        },
        {
          scale: 1.28,
          yPercent: 12,
          z: 35,
          rotateX: -2,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        }
      );

      // CONTENT PARALLAX
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // AMBIENT GOLDEN LIGHT
      gsap.to(bgGlowRef.current, {
        scale: 1.5,
        opacity: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // GOLDEN TEARS
      const drops = section.querySelectorAll(".tear-drop");

      gsap.fromTo(
        drops,
        { y: () => window.innerHeight * 0.35, opacity: 0 },
        {
          y: () => window.innerHeight * 1.1,
          opacity: 0.85,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" id="home" ref={sectionRef}>
      {/* 3D IMAGE BACKGROUND */}
      <div
        className="hero-bg-image"
        ref={bgImageRef}
        aria-hidden="true"
      />

      {/* BACKGROUND OVERLAYS */}
      <div className="hero-dark-overlay" />
      <div className="hero-image-overlay" />
      <div
        className="hero-bg-glow"
        ref={bgGlowRef}
        aria-hidden="true"
      />

      {/* GRID */}
      <div className="hero-grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* GOLDEN TEARS */}
      <div className="tear-overlay" aria-hidden="true">
        {tears.map((tear, index) => (
          <span
            className="tear-drop"
            key={index}
            style={{
              left: tear.left,
              animationDelay: `${tear.delay}s`,
            }}
          />
        ))}
      </div>

      {/* HERO CONTENT */}
      <div className="hero-content" ref={contentRef}>
        <p className="hero-eyebrow" ref={eyebrowRef}>
          <span className="hero-eyebrow-line" />
          STRATEGY. CREATIVITY. IMPACT.
        </p>

        <h1 ref={h1Ref}>
          We make brands
          <br />
          go <span>viral.</span>
        </h1>

        <p className="hero-description" ref={descRef}>
          Digital marketing agency for brands that refuse to be boring.
        </p>

        <div className="hero-actions" ref={actionsRef}>
          <Link href="#case-studies" className="hero-primary-btn">
            Explore Our Work
           
          </Link>

          <Link href="#contact" className="hero-secondary-btn">
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
        <span className="scroll-text">SCROLL</span>
      </div>

      {/* BOTTOM META */}
    
    </section>
  );
}
