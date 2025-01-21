import Image from "next/image";
import styles from "./about.module.css";
import image from "../../assests/image.png";

const About = () => {
  const skills = [
    { name: "UX", percentage: 90 },
    { name: "Website Design", percentage: 85 },
    { name: "App Design", percentage: 80 },
    { name: "Graphic Design", percentage: 75 },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageDecoration}></div>
            <Image
              src={image}
              alt="About Me"
              width={400}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skill}>
                  <div className={styles.skillHeader}>
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progress}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
