
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyTaash.css";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What makes Taash Entertainment different?",
    answer:
      "We're the agency we wished existed — honest, creative, collaborative and focused on real business results, not just deliverables."
  },
  {
    question: "What services do you offer?",
    answer:
      "We work across three core areas: Brand, Media and Tech. This includes brand identity, logo design, packaging, social media, reels, content creation, advertising, websites, landing pages, UI/UX and SEO."
  },
  {
    question: "Do the founders work on our brand directly?",
    answer:
      "Yes. Our founders stay directly involved in the thinking, planning and execution of your brand. We believe important decisions deserve personal attention."
  },
  {
    question: "How is your pricing structured?",
    answer:
      "Our pricing depends on your goals, requirements and scope of work. We believe in honest and transparent pricing, with customised solutions rather than one-size-fits-all packages."
  },
  {
    question: "Can you handle branding, content and website together?",
    answer:
      "Absolutely. Our Brand, Media and Tech teams work together, so your identity, communication and digital presence feel consistent across every touchpoint."
  },
  {
    question: "What if we only need a specific service?",
    answer:
      "That's completely fine. You don't need to take every service. We'll understand what your business actually needs and recommend only the relevant solutions."
  },
  {
    question: "How quickly do you respond?",
    answer:
      "You'll speak with real people, not bots. We aim to respond to enquiries as quickly as possible and keep communication clear throughout the project."
  }
];

export default function WhyTaash() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".why-taash-intro > *", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true
        }
      });

      gsap.from(".why-taash-faq-item", {
        x: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-taash-faq-list",
          start: "top 80%",
          once: true
        }
      });

      // ── BACKGROUND PARALLAX ─────────────────────
      const bgEl = section.querySelector(".why-taash-bg") as HTMLElement;
      if (bgEl) {
        gsap.fromTo(
          bgEl,
          { backgroundPositionY: "30%" },
          {
            backgroundPositionY: "70%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // ── SECTION ENTRANCE ─────────────────────────
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
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="why-taash-section" id="why-taash" ref={sectionRef}>
      <div className="why-taash-bg" />
      <div className="why-taash-overlay" />

      <div className="why-taash-container">
        <div className="why-taash-intro">
          <span className="why-taash-eyebrow">
            THE TAASH DIFFERENCE / FAQ
          </span>

          <h2>
            Why
            <br />
            <span>TAASH</span>
            <br />
            Entertainment?
          </h2>

          <p>
            The questions you&apos;re probably thinking.
            <br />
            Answered honestly, the Taash way.
          </p>

          <div className="why-taash-intro-bottom">
            <span>GOOD WORK. HONEST PEOPLE.</span>
            <span className="why-taash-intro-line" />
          </div>
        </div>

        <div className="why-taash-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`why-taash-faq-item ${isOpen ? "active" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="why-taash-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="why-taash-faq-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`why-taash-faq-answer ${
                    isOpen ? "open" : ""
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
