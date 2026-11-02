
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    number: "01",
    title: "BRAND",
    tagline: "Build & Grow Your Brand",
    image: "/images/services/brand-card.png",
    services: ["Logo", "Identity", "Packaging", "Naming", "Rebranding"],
  },
  {
    number: "02",
    title: "MEDIA",
    tagline: "Create, Capture & Amplify",
    image: "/images/services/media-card.png",
    services: [
      "Social Media",
      "Reels",
      "Content",
      "Ads",
      "Influencer Collaborations",
    ],
  },
  {
    number: "03",
    title: "TECH",
    tagline: "Turn Ideas into Digital Experiences",
    image: "/images/services/tech-card.png",
    services: ["Websites", "Landing Pages", "UI/UX", "SEO"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const detailCards = gsap.utils.toArray<HTMLElement>(
        ".services-detail-card"
      );

      const detailItems = gsap.utils.toArray<HTMLElement>(
        ".services-detail-item"
      );

      detailCards.forEach((card) => {
        const items = card.querySelectorAll(".services-detail-item");

        gsap.fromTo(
          card,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          items,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".services-overview-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-overview",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-section"
      id="services"
      ref={sectionRef}
    >
      <div className="services-background" aria-hidden="true" />
      <div className="services-background-overlay" aria-hidden="true" />

      {/* SECTION HEADING */}
      <div className="services-heading">
        <div className="services-eyebrow">
          <span />
          OUR SERVICES
          <span />
        </div>

        <h2>What We Do</h2>
      </div>

      {/* STICKY IMAGE CARDS */}
      <div className="services-overview">
        <div className="services-overview-cards">
          {categories.map((category) => (
            <article
              className="services-overview-card"
              key={category.title}
            >
              <div
                className="services-overview-image"
                style={{
                  backgroundImage: `url("${category.image}")`,
                }}
              />

              <div className="services-overview-shade" />

              <div className="services-overview-copy">
                <span className="services-card-number">
                  {category.number}
                </span>

                <h3>{category.title}</h3>
                <p>{category.tagline}</p>
              </div>

              {/* RAY STARTS FROM BOTTOM OF EACH CARD */}
              <div className="services-card-ray" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DETAIL SECTION */}
      <div className="services-details">
        <div className="services-detail-heading">
          <div className="services-eyebrow">
            <span />
            WHAT WE OFFER
            <span />
          </div>

          <h2>Our Expertise</h2>
        </div>

        <div className="services-detail-cards">
          {categories.map((category) => (
            <article
              className="services-detail-card"
              key={category.title}
            >
              <div className="services-detail-top">
                <span className="services-detail-number">
                  {category.number}
                </span>

                <h3>{category.title}</h3>
                <p>{category.tagline}</p>
              </div>

              <div className="services-detail-list">
                {category.services.map((service, index) => (
                  <div
                    className="services-detail-item"
                    key={service}
                  >
                    <span className="services-item-number">
                      0{index + 1}
                    </span>

                    <span className="services-item-name">
                      {service}
                    </span>

                    <span className="services-item-arrow">↗</span>
                  </div>
                ))}
              </div>

              <div className="services-detail-card-glow" />
            </article>
          ))}
        </div>

        <div className="services-bottom-line">
          CREATIVITY <span>•</span> STRATEGY <span>•</span> EXECUTION
        </div>
      </div>
    </section>
  );
}
