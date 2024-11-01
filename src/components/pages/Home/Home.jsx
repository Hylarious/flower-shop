import Container from "../../common/Container/Container";
import Footer from "../../views/Footer/Footer";
import Hero from "../../views/Hero/Hero";
import NavBar from "../../views/NavBar/NavBar";
import Products from "../../views/Products/Products";
import Testimonials from "../../views/Testimonials/Testimonials";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.bgc}>
      <div className="container">
        <NavBar />
        <Container>
          <Hero />
          <Testimonials />
          <Products />
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
