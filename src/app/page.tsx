import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Foorer";
import Services from "@/components/Services/Services";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Testimonials from "@/components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
