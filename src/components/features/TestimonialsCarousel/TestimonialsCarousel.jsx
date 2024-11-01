import { useEffect, useState } from "react";
import testimonials from "../../../data/testimonials";
import styles from "./TestimonialsCarousel.module.scss";
import Swipeable from "../Swipeable/Swipable";
import TestimonialCard from "../../views/TestimonialCard/TestimonialCard";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Swipeable onSwipeLeft={prevSlide} onSwipeRight={nextSlide}>
      <div className={styles.simple_carousel}>
        <div className={styles.carousel_container}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`${styles.carousel_slide} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
        <button
          className={`${styles.carousel_button} ${styles.prev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <i className="fa fa-chevron-left"></i>
        </button>
        <button
          className={`${styles.carousel_button} ${styles.next}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <i className="fa fa-chevron-right"></i>
        </button>
        <div className={styles.carousel_indicators}>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </Swipeable>
  );
};

export default TestimonialsCarousel;
