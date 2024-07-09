import React from 'react'
import styles from "./ProductSuggestion.module.css"
import ProductSection from '../ProductSection/ProductSection';
import AllProducts from '../AllProducts/AllProducts';


const ProductSuggestion = () => {
  return (
    <div className={styles.product_suggestion_wrapper}>
      <div className={styles.product_suggestion_sub_wrapper}>
        <div className={styles.product_suggestion_main_text}>
          You may also like
        </div>
        <div className={styles.product_suggestion_products_wrapper}>
          {/* <ProductSection/> */}
          <AllProducts/>
        </div>
        <div className={styles.product_suggestion_view_all}>
          <div>VIEW ALL</div>
        </div>
      </div>
    </div>
  );
}

export default ProductSuggestion