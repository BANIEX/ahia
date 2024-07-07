import React from 'react'
import styles from './ProductSection.module.css'
import Image from 'next/image';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-light-svg-icons";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { all } from "@awesome.me/kit-KIT_CODE/icons";
// 

import { ShoppingCart } from "lucide-react";
// library.add(...all);


const ProductSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section_tab}>
        <div className={styles.section_tab_left}>
          <div>Bags</div>
        </div>
        <div className={styles.section_tab_right}>
          <div>Shoes</div>
        </div>
      </div>
      <div className={styles.section_products_wrapper}>
        <div className={styles.section_products_sub_wrapper}>
          <div className={styles.section_product_container}>
            <div className={styles.section_product_sub_container}>
              <div className={styles.section_product_image}>
                <Image
                  src="/hero_images/bag.png"
                  alt="bag"
                  width={261}
                  height={272}
                />
              </div>
              <div className={styles.section_product_below_image}>
                <div className={styles.section_product_below_image_left}>
                  <div className={styles.section_product_below_image_left_top}>
                    Hobo Small
                  </div>
                  <div
                    className={styles.section_product_below_image_left_bottom}
                  >
                    {"\u20A6"}95,000
                  </div>
                </div>
                <div className={styles.section_product_below_image_right}>
                  {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                  {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_product_container}>
            <div className={styles.section_product_sub_container}>
              <div className={styles.section_product_image}>
                <Image
                  src="/hero_images/bag.png"
                  alt="bag"
                  width={261}
                  height={272}
                />
              </div>
              <div className={styles.section_product_below_image}>
                <div className={styles.section_product_below_image_left}>
                  <div className={styles.section_product_below_image_left_top}>
                    Hobo Small
                  </div>
                  <div
                    className={styles.section_product_below_image_left_bottom}
                  >
                    {"\u20A6"}95,000
                  </div>
                </div>
                <div className={styles.section_product_below_image_right}>
                  {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                  {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_product_container}>
            <div className={styles.section_product_sub_container}>
              <div className={styles.section_product_image}>
                <Image
                  src="/hero_images/bag.png"
                  alt="bag"
                  width={261}
                  height={272}
                />
              </div>
              <div className={styles.section_product_below_image}>
                <div className={styles.section_product_below_image_left}>
                  <div className={styles.section_product_below_image_left_top}>
                    Hobo Small
                  </div>
                  <div
                    className={styles.section_product_below_image_left_bottom}
                  >
                    {"\u20A6"}95,000
                  </div>
                </div>
                <div className={styles.section_product_below_image_right}>
                  {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                  {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_product_container}>
            <div className={styles.section_product_sub_container}>
              <div className={styles.section_product_image}>
                <Image
                  src="/hero_images/bag.png"
                  alt="bag"
                  width={261}
                  height={272}
                />
              </div>
              <div className={styles.section_product_below_image}>
                <div className={styles.section_product_below_image_left}>
                  <div className={styles.section_product_below_image_left_top}>
                    Hobo Small
                  </div>
                  <div
                    className={styles.section_product_below_image_left_bottom}
                  >
                    {"\u20A6"}95,000
                  </div>
                </div>
                <div className={styles.section_product_below_image_right}>
                  {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                  {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section_product_container}>
            <div className={styles.section_product_sub_container}>
              <div className={styles.section_product_image}>
                <Image
                  src="/hero_images/bag.png"
                  alt="bag"
                  width={261}
                  height={272}
                />
              </div>
              <div className={styles.section_product_below_image}>
                <div className={styles.section_product_below_image_left}>
                  <div className={styles.section_product_below_image_left_top}>
                    Hobo Small
                  </div>
                  <div
                    className={styles.section_product_below_image_left_bottom}
                  >
                    {"\u20A6"}95,000
                  </div>
                </div>
                <div className={styles.section_product_below_image_right}>
                  {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                  {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection






