import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Foorer";
import Services from "@/components/Services/Services";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/Projects/Projects";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
