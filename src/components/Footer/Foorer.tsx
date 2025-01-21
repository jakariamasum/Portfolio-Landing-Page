import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Mumair
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="#about">About Me</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className={styles.socialLinks}>
          <Link href="#">
            <FaFacebook />
          </Link>
          <Link href="#">
            <FaTwitter />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaLinkedin />
          </Link>
        </div>

        <p className={styles.copyright}>
          © 2023 Mumair. All Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
