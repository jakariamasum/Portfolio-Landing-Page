import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Lets Design Together</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in.
      </p>

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
