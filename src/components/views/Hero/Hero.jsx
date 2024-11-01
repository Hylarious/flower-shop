import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          <span className={styles.hero__title_line}>Bloom</span>
          <span className={styles.hero__title_line}>&amp; Flourish</span>
        </h1>
        <p className={styles.hero__description}>
          Brighten any space with handpicked, farm-fresh blooms delivered right
          to your door. Shop our curated bouquets and bring nature home
        </p>
        <button className={styles.hero__btn}>Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
