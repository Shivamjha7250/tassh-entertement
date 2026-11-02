
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CaseStudies.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    name: "MORSO",
    category: "FOOD & BEVERAGE",
    logo: "/images/case-studies/logos/morso.png",
    description:
      "From a cafe idea to a brand people discover, visit and remember.",
    services: "Brand Strategy · Social Media · Food Photography",
    link: "/case-studies/morso",
  },
  {
    number: "02",
    name: "KALAAYA",
    category: "FASHION & LIFESTYLE",
    logo: "/images/case-studies/logos/kalaaya.png",
    description:
      "A complete brand transformation built around Indian identity and the stories of women.",
    services: "Naming · Branding · Art Direction",
    link: "/case-studies/kalaaya",
  },
  {
    number: "03",
    name: "RIGHT TIME REALTORS",
    category: "REAL ESTATE",
    logo: "/images/case-studies/logos/right-time-realtors.png",
    description:
      "Turning property marketing into meaningful stories, campaigns and digital experiences.",
    services: "Website · Digital Marketing · Campaigns",
    link: "/case-studies/right-time-realtors",
  },
  {
    number: "04",
    name: "HERIYTAGE",
    category: "HOSPITALITY",
    logo: "/images/case-studies/logos/heriytage.png",
    description:
      "Bringing two decades of celebrations and memories into the digital world.",
    services: "Content Creation · Cinematic Reels · Social Media",
    link: "/case-studies/heriytage",
  },
  {
    number: "05",
    name: "PANCHATATVA",
    category: "BEAUTY & WELLNESS",
    logo: "/images/case-studies/logos/panchatatva.svg",
    description:
      "Building a distinctive Ayurvedic skincare identity through thoughtful naming and packaging.",
    services: "Brand Identity · Packaging · Art Direction",
    link: "/case-studies/panchatatva",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const bg = bgRef.current;

    if (!section || !viewport || !track) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector<HTMLElement>(".case-heading");
      const cards = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll(".case-study-card")
      );
      const bottom = section.querySelector<HTMLElement>(".case-bottom");

      if (!heading || !bottom || !cards.length) return;

      const isMobile = window.matchMedia("(max-width: 700px)").matches;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // MOBILE / REDUCED MOTION
      if (isMobile || reducedMotion) {
        gsap.set([heading, ...cards, bottom], {
          clearProps: "all",
        });

        if (!reducedMotion) {
          gsap.from(heading, {
            autoAlpha: 0,
            y: 35,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              once: true,
            },
          });

          gsap.from(cards, {
            autoAlpha: 0,
            y: 35,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: viewport,
              start: "top 85%",
              once: true,
            },
          });

          gsap.from(bottom, {
            autoAlpha: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottom,
              start: "top 95%",
              once: true,
            },
          });
        }

        return;
      }

      // DESKTOP INITIAL STATES
      gsap.set(heading, {
        autoAlpha: 0,
        y: 45,
      });

      gsap.set(cards, {
        autoAlpha: 0,
        y: 55,
        scale: 0.96,
      });

      gsap.set(bottom, {
        autoAlpha: 0,
        y: 20,
      });

      const getDistance = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth);

      // MAIN SCROLL TIMELINE
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(2200, 1200 + getDistance() * 1.5)}`,
          scrub: 0.8,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // HEADING
      timeline.to(heading, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // PROJECT CARDS
      timeline.to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        "+=0.15"
      );

      // HORIZONTAL CARD MOVEMENT
      if (getDistance() > 0) {
        timeline.to(
          track,
          {
            x: () => -getDistance(),
            duration: 2.5,
            ease: "none",
          },
          "+=0.2"
        );
      }

      // BOTTOM CONTENT
      timeline.to(
        bottom,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.1"
      );

      // FINAL HOLD
      timeline.to({}, { duration: 1 });

      // BACKGROUND PARALLAX
      if (bg) {
        gsap.fromTo(
          bg,
          {
            scale: 1.08,
            yPercent: 0,
          },
          {
            scale: 1.18,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }, section);

    // Refresh after the initial browser layout
    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="case-studies-section"
      id="case-studies"
      ref={sectionRef}
    >
      <div className="case-background" ref={bgRef} />
      <div className="case-overlay" />
      <div className="case-light-effect" />

      <div className="case-content">
        {/* HEADING */}
        <div className="case-heading">
          <span className="case-eyebrow">
            <i />
            THE WORK SPEAKS
            <i />
          </span>

          <h2>
            Ideas into
            <br />
            <span>Impact.</span>
          </h2>

          <p>
            Real brands. Real challenges. Work that makes a difference.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="case-cards-viewport" ref={viewportRef}>
          <div className="case-cards-track" ref={trackRef}>
            {projects.map((project) => (
              <article
                className="case-study-card"
                key={project.number}
              >
                <div className="case-card-image">
                  <span className="case-card-number">
                    {project.number}
                  </span>

                  <div className="case-logo-wrap">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                    />
                  </div>
                </div>

                <div className="case-card-info">
                  <div className="case-card-topline">
                    <span className="case-card-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p className="case-card-description">
                    {project.description}
                  </p>

                  <div className="case-card-services">
                    {project.services}
                  </div>

                  <a
                    href={project.link}
                    className="case-card-link"
                  >
                    EXPLORE PROJECT
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="case-bottom">
          <div className="case-scroll-note">
            <span className="case-scroll-line" />
            SCROLL TO EXPLORE
          </div>

          <a href="/case-studies" className="case-read-all">
            READ ALL CASE STUDIES
          </a>

          <span className="case-bottom-caption">
            STRATEGY. CREATIVITY. IMPACT.
          </span>
        </div>
      </div>
    </section>
  );
}
