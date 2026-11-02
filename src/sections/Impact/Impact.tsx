
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Impact.css";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { value: 850, suffix: "K+", label: "ORGANIC REACH" },
  { value: 25, suffix: "+", label: "BRANDS WORKED WITH" },
  { value: 7, suffix: "+", label: "INDUSTRIES SERVED" },
  { value: 200, suffix: "+", label: "LEADS GENERATED" },
  { value: 50, suffix: "+", label: "PROJECTS DELIVERED" },
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = bgRef.current;

    if (!section || !background) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".impact-heading");
      const stats = section.querySelectorAll(".impact-stat");
      const counters =
        section.querySelectorAll<HTMLElement>(".impact-number");
      const watermark = section.querySelector(".impact-watermark");

      if (!prefersReducedMotion) {
        // BACKGROUND PARALLAX
        gsap.fromTo(
          background,
          {
            scale: 1.12,
            yPercent: -3,
          },
          {
            scale: 1.3,
            yPercent: 5,
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

        // WATERMARK ANIMATION
        if (watermark) {
          gsap.fromTo(
            watermark,
            { xPercent: 8 },
            {
              xPercent: -5,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }

        // HEADING REVEAL
        if (heading) {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 65%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // STAT REVEAL
        gsap.fromTo(
          stats,
          { opacity: 0, y: 35, x: 12 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // COUNTER ANIMATION
        counters.forEach((counter) => {
          const target = Number(counter.dataset.value || 0);
          const suffix = counter.dataset.suffix || "";
          const count = { value: 0 };

          gsap.to(count, {
            value: target,
            duration: 2.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            onUpdate: () => {
              counter.textContent =
                Math.round(count.value).toLocaleString("en-IN") +
                suffix;
            },
          });
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
      className="impact-section"
      id="impact"
      ref={sectionRef}
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="impact-background-image"
        ref={bgRef}
        aria-hidden="true"
      />

      {/* DARK OVERLAY */}
      <div className="impact-overlay" aria-hidden="true" />

      {/* DEPTH LINES */}
      <div className="impact-depth-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* MAIN CONTENT */}
      <div className="impact-container">
        <div className="impact-left">
          <span className="impact-eyebrow">
            <span className="impact-line" />
            THE TAASH EFFECT
          </span>

          <h2 className="impact-heading">
            Numbers that
            <br />
            speak <span>louder.</span>
          </h2>

          <p className="impact-description">
            We don't just create attention. We create
            measurable growth, meaningful connections
            and lasting impact for the brands we work with.
          </p>

          <div className="impact-signature">
            CREATIVITY <span>•</span> STRATEGY <span>•</span> IMPACT
          </div>
        </div>

        <div className="impact-right">
          {achievements.map((item, index) => (
            <div className="impact-stat" key={item.label}>
              <span className="impact-index">
                0{index + 1}
              </span>

              <div className="impact-stat-content">
                <div
                  className="impact-number"
                  data-value={item.value}
                  data-suffix={item.suffix}
                >
                  0{item.suffix}
                </div>

                <div className="impact-label">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
