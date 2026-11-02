
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blogs", href: "#blogs" },
  { label: "Careers", href: "#careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">

        <Link href="#home" className="header-logo" onClick={closeMenu}>
          <Image
            src="/images/logo/taash-logo.png"
            alt="Taash Entertainment"
            width={170}
            height={65}
            priority
            className="logo-image"
          />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="header-contact-btn"
            onClick={closeMenu}
          >
            Contact Us 
          </Link>
        </nav>

      </div>
    </header>
  );
}
