import StarIcon from "../../common/StarIcon/StarIcon";
import styles from "./TestimonialCard.module.scss";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={styles.testimonial_card}>
      <div className={styles.testimonial_card__header}>
        <h3 className={styles.testimonial_card__name}>{testimonial.title}</h3>
        <div
          className={styles.testimonial_card__rating}
          aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
        >
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} filled={index < testimonial.rating} />
          ))}
        </div>
      </div>
      <p className={styles.testimonial_card__content}>
        {testimonial.testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;
