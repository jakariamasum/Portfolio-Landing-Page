import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Foorer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
