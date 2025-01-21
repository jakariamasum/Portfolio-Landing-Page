"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", name: "Home" },
    { href: "#about", name: "About me" },
    { href: "#services", name: "Services" },
    { href: "#projects", name: "Projects" },
    { href: "#testimonials", name: "Testimonials" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Mumair
        </Link>

        {isMobile ? (
          <>
            <button className={styles.menuButton} onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
              {navItems.map((nav) => (
                <Link key={nav.href} href={nav.href} onClick={toggleMenu}>
                  {nav.name}
                </Link>
              ))}
            </nav>
          </>
        ) : (
          <nav className={styles.nav}>
            {navItems.map((nav) => (
              <Link key={nav.href} href={nav.href} onClick={toggleMenu}>
                {nav.name}
              </Link>
            ))}
          </nav>
        )}

        <button className={styles.downloadButton}>Download CV</button>
      </div>
    </header>
  );
};
export default Header;
