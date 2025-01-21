import Title from "../ui/Title";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <Title
        title="Let's Design Together"
        description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam tortor nam diam tellus"
      />

      <form className={styles.form}>
        <input
          type="email"
          placeholder="Enter Your Email"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default Contact;
