import styles from './ProductCard.module.scss'


const ProductCard = ({product}) => {

  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.image}
      />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
