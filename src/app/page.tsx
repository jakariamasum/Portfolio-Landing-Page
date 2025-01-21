import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
