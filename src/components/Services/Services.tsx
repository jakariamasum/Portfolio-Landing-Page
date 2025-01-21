import styles from "./services.module.css";
import web from "../../assests/web.png";
import app from "../../assests/app.png";
import graphic from "../../assests/graphic.png";
import ui from "../../assests/ui.png";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: ui,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam tortor nam diam tellus.",
    },
    {
      icon: web,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam tortor nam diam tellus.",
    },
    {
      icon: app,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam tortor nam diam tellus.",
    },
    {
      icon: graphic,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam tortor nam diam tellus.",
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>Services</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in.
      </p>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.title} className={styles.card}>
            {/* <div className={styles.icon}>{service.icon}</div> */}
            <Image src={service.icon} alt={service.title} />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
