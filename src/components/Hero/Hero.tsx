import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./hero.module.css";
import image from "../../assests/image.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi I am</p>
        <h1 className={styles.name}>Muhammad Umair</h1>
        <h2 className={styles.title}>UI & UX Designer</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className={styles.hireButton}>Hire Me</button>
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
      </div>
      <div className={styles.imageWrapper}>
        <div></div>
        <Image
          src={image}
          alt="Profile"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
