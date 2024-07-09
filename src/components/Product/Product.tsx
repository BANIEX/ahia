import React from 'react'
import styles from './Product.module.css'
import Image from 'next/image';
import CartIcon from '@/icons/CartIcon';


const Product = ({product } : any) => {
  return (
    
      <div className={styles.section_product_container}>
        <div className={styles.section_product_sub_container}>
          <div className={styles.section_product_image}>
            <Image
              // src="/hero_images/bag.png"
              src={product.imageUrl}
              alt={product.name}
              width={261}
              height={272}
            />
          </div>
          <div className={styles.section_product_below_image}>
            <div className={styles.section_product_below_image_left}>
              <div className={styles.section_product_below_image_left_top}>
                {product.name}
              </div>
              <div className={styles.section_product_below_image_left_bottom}>
                {"\u20A6"}{product.price}
              </div>
            </div>
            <div className={styles.section_product_below_image_right}>
              {/* <FontAwesomeIcon icon={faCartShopping} /> */}
              {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Product