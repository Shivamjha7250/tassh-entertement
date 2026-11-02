
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    number: "01",
    name: "MORSO",
    category: "CAFE & HOSPITALITY",
    location: "Baner, Pune",
    quote:
      "Starting a brand from zero wasn't easy. Taash stood with us at every step.",
    paragraphs: [
      "I am a dentist, and Morso was my new income source — a café I started in Baner Pune. But Baner already had so many food courts and cafés that the competition was intense, and our presence was absolute zero. Taash Entertainment handled our complete work right from the construction phase. They shot our reels, built our social media presence from zero and created our visibility in a highly competitive market.",
      "We faced major challenges with Google My Business, Google Maps and Apple Maps registration because there were multiple duplicate IDs. Taash deleted all of them and created one perfect listing. They also completed our entire collaboration process with Zomato and Swiggy.",
      "What I loved most about working with Taash is that nothing was readymade. They gave us fully customized solutions and customized packages based on our brand's requirements.",
      "They did a professional photoshoot of all our dishes, grew our followers in 2 months, and most importantly gave us a 60-day go-to strategy. Because of that strategy, we can keep growing our brand on our own, even in the future. Starting a brand from zero wasn't easy, we faced many challenges. But Taash stood with us at every step and handled everything. I would definitely recommend them to any new cafe owner."
    ],
    result: "60-DAY GO-TO STRATEGY"
  },
  {
    number: "02",
    name: "AYURVEDIC SKINCARE",
    category: "HEALTHCARE & BEAUTY",
    location: "Doctor-led Brand",
    quote:
      "I knew formulations. But turning those formulations into a brand — that's what Taash did.",
    paragraphs: [
      "I am a skincare doctor. I had Ayurvedic knowledge and experience, but to take my products to people, I needed a brand — one that feels credible and stands out on the shelf.",
      "Taash Entertainment did my brand's complete rebranding. Based on the Panchatatva — the five elements concept — they created my brand's naming. Logo designing, package designing, and even the color palette was decided by Taash.",
      "In the B2C market, packaging is the most important factor because the customer sees the product first and buys later. Taash designed such beautiful packaging for my 6 products — face wash, scrub, face pack, kumkumadi oil, gel and serum — that even today, my products are available in the market in that same packaging design. And it still attracts people.",
      "As a doctor I knew formulations. But turning those formulations into a brand — that's what Taash did."
    ],
    result: "6 PRODUCTS REBRANDED"
  },
  {
    number: "03",
    name: "RIGHT TIME REALTORS",
    category: "REAL ESTATE",
    location: "Pune",
    quote: "Honestly, they rebranded us.",
    paragraphs: [
      "Right Time Realtors is a real estate brand, and Taash Entertainment handled our complete social media management. Not just that, Taash is also rebuilding our website.",
      "They ran ads for us that generated direct sales. They handled our project launches and product launches. They even organized an event for us during a movie's first show.",
      "Our videos were very simple and basic. Taash converted them into proper shoots. Today, the reels on our page are emotional and family-oriented — people connect with them. For Mother's Day, they even created a special song for us, which received a tremendous response.",
      "Festival posts, stories, reels — Taash creates it all. From community event ideas to complete execution, they handled everything. They recorded our construction progress and built our legacy. Honestly, they rebranded us."
    ],
    result: "BRANDING + DIGITAL GROWTH"
  },
  {
    number: "04",
    name: "KALAAYA",
    category: "FASHION & LIFESTYLE",
    location: "Saree Brand · Rebranded from Naari",
    quote:
      "Our mother-daughter small business is a proper brand today.",
    paragraphs: [
      "Our brand was originally called Naari. But searching Naari showed so many other brands and websites that our identity was getting lost. We knew rebranding was necessary, but we didn't know where to start.",
      "Taash Entertainment did our complete rebranding. Naari became Kalaaya. And it wasn't just a name change. Before designing the logo, they spoke to 100+ women, understood their opinions and thoughts, and then structured the logo. The pillar in the logo reflects Indian architecture — a tribute to our Indian artistry — and the waves represent the saree's weave and drape.",
      "3 months of deep research, 100+ interviews and then 38+ sarees shot in just 26 hours — different models, hairstyling, makeup, everything managed.",
      "They presented our sarees so beautifully that it directly benefited our sales. Our mother-daughter small business is a proper brand today. They didn't just plan things, they executed everything. And that's why we got better results."
    ],
    result: "100+ WOMEN INTERVIEWED"
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const bg = bgRef.current;

    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 901px)",
        mobile: "(max-width: 900px)",
        reduceMotion: "(prefers-reduced-motion: reduce)"
      },
      (context) => {
        const conditions = context.conditions as {
          desktop: boolean;
          mobile: boolean;
          reduceMotion: boolean;
        };

        const { desktop, reduceMotion } = conditions;

        // Reset previous transforms
        gsap.set(track, { clearProps: "transform" });

        if (bg) {
          gsap.set(bg, { clearProps: "transform" });
        }

        // DESKTOP HORIZONTAL CARD SCROLL
        if (desktop && !reduceMotion) {
          const getDistance = () =>
            Math.max(0, track.scrollWidth - window.innerWidth);

          gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () =>
                `+=${Math.max(getDistance(), 1) + window.innerHeight}`,
              scrub: 1,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true
            }
          });
        }

        // 3D SMOOTH BACKGROUND PARALLAX
        if (bg && !reduceMotion) {
          gsap.set(bg, {
            scale: 1.18,
            yPercent: -5,
            rotationX: 0,
            transformPerspective: 1200,
            transformOrigin: "center center",
            force3D: true
          });

          gsap.to(bg, {
            yPercent: 10,
            scale: 1.08,
            rotationX: 2,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
              invalidateOnRefresh: true
            }
          });
        }

        // REFRESH AFTER LAYOUT
        const refresh = () => ScrollTrigger.refresh();

        const timer = window.setTimeout(refresh, 500);
        window.addEventListener("resize", refresh);

        return () => {
          window.clearTimeout(timer);
          window.removeEventListener("resize", refresh);
        };
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="testimonials-bg" ref={bgRef} />
      <div className="testimonials-overlay" />

      <div className="testimonials-heading">
        <span className="testimonials-eyebrow">
          TAASH ENTERTAINMENT / TESTIMONIALS
        </span>

        <h2>
          Don't take
          <br />
          <span>our word for it.</span>
        </h2>

        <p>
          Real stories from brands that trusted us.
          <br />
          Their journey. Their experience. Their words.
        </p>
      </div>

      <div className="testimonials-track" ref={trackRef}>
        {testimonials.map((item) => (
          <article
            className="testimonial-card"
            key={item.number}
          >
            <div className="testimonial-card-top">
              <span className="testimonial-number">
                {item.number}
              </span>

              <span className="testimonial-category">
                {item.category}
              </span>
            </div>

            <div className="testimonial-quote-mark">"</div>

            <h3>{item.quote}</h3>

            <div className="testimonial-story">
              {item.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="testimonial-card-footer">
              <div>
                <h4>{item.name}</h4>
                <span>{item.location}</span>
              </div>

              <span className="testimonial-result">
                {item.result}
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonials-scroll-note">
        <span>SCROLL TO EXPLORE</span>
        <span className="testimonials-scroll-line" />
      </div>
    </section>
  );
}
