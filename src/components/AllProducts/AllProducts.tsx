import React from 'react'
import Image from 'next/image';
import styles from "./AllProducts.module.css"
import { ShoppingCart } from "lucide-react";
import CartIcon from '@/icons/CartIcon';
import Product from '../Product/Product';


const AllProducts = () => {
  const all_products_array = [
    {
      id: 1,
      name: "Hobo small",
      price: "95,000",
      imageUrl: "/bag_images/bag_one.png",
    },
    {
      id: 2,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_two.png",
    },
    {
      id: 3,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_three.png",
    }
  ];
  return (
    <div>
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
                  
                  <CartIcon />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.section_product_container}>
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
                  
                  <CartIcon />
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
                  
                  <CartIcon />
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
                 
                  <CartIcon />
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
                  
                  <CartIcon />
                </div>
              </div>
            </div>
          </div> */}
          

          {all_products_array.map((productObject) => (
            <Product key={productObject.id} product={productObject} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts