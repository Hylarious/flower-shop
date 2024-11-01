import { useRef } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const navRef = useRef();


  const showNavBar = () => {
    navRef.current.classList.toggle(`${styles.responsiveNav}`);
  };

  return (
    <header className="container">
      <a href="/">
        <img className={styles.logo} src="/FlowerWhite.png" alt="Logo" />
      </a>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Flowers</a>
        <a href="/">
          <span className="fa fa-shopping-cart" />
        </a>
        <button
          className={`${styles.navBtn} + ${styles.navBtnClosed}`}
          onClick={showNavBar}
        >
          <p>
            <span className="fa fa-times" />
          </p>
        </button>
      </nav>
      <button className={styles.navBtn} onClick={showNavBar}>
        <span className="fa fa-bars" />
      </button>
    </header>
  );
};

export default NavBar;
