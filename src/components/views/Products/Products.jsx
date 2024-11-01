import products from "../../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import styles from './Products.module.scss'

const Products = () => {
  return (
    <div className={styles.products}>
      <h1 className={styles.title}>Our Flower Arrangements</h1>
      <div className={styles.cardGrid}>
        {products.map((p,index) => (
            <ProductCard key={index} product={p}/>
        ))}

      </div>
    </div>
  );
};

export default Products;
