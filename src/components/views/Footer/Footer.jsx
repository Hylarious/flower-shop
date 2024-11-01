import Container from "../../common/Container/Container";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.footer__section}>
            <h3>About Us</h3>
            <p>
              Bringing nature’s beauty to your doorstep with passion and care,
              every day.
            </p>
          </div>
          <div className={styles.footer__section}>
            <h3>Contact</h3>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className={styles.footer__section}>
            <h3>Follow Us</h3>
            <div className={styles.footer__social_links}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.footer__bottom}>
        <p>&copy; {currentYear} FlowerShop. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
