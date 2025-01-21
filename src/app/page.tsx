import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Foorer";
import Services from "@/components/Services/Services";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
