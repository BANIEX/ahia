import React from 'react'
import styles from './CartContent.module.css'
import Image from 'next/image';
import Link from "next/link";


const CartContent = () => {

  const cart_products_array = [
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
    },
    {
      id: 4,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_four.png",
    },
    {
      id: 5,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_five.png",
    },
    {
      id: 6,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_six.png",
    },
    {
      id: 7,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_seven.png",
    },
    {
      id: 8,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_eight.png",
    },
    {
      id: 9,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_nine.png",
    },
    {
      id: 10,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_ten.png",
    },
    {
      id: 11,
      name: "Second Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_eleven.png",
    },
  ];


  return (
    <div className={styles.cart_content}>
      <div className={styles.cart_content_top}>
        <div className={styles.cart_content_top_your_cart}>Your cart</div>
        <div className={styles.cart_content_top_continue_shopping}>
          <Link href='/'>Continue shopping</Link>
        </div>
      </div>
      <div className={styles.cart_content_middle}>
        {/* There is an 's' in this classname title */}
        <div className={styles.cart_content_middle_titles}>
          <div className={styles.cart_content_middle_title_product_text}>
            PRODUCT
          </div>
          <div className={styles.cart_content_middle_title_quantity_text}>
            QUANTITY
          </div>
          <div className={styles.cart_content_middle_title_total_text}>
            TOTAL
          </div>
        </div>
        <div className={styles.cart_content_middle_content}>
          <div className={styles.cart_content_middle_content_sub_container}>
            <div className={styles.cart_content_middle_product_content}>
              <div className={styles.cart_content_middle_product_content_image}>
                <Image
                  src="/hero_images/cart_image_one.png"
                  alt="cart image"
                  width={100}
                  height={100}
                />
              </div>
              <div
                className={
                  styles.cart_content_middle_product_content_text_wrapper
                }
              >
                <div
                  className={
                    styles.cart_content_middle_product_content_main_text
                  }
                >
                  Bo soft Strap
                </div>
                <div
                  className={
                    styles.cart_content_middle_product_content_sub_text
                  }
                >
                  Color: Cotton candy
                </div>
                <div
                  className={
                    styles.cart_content_middle_product_content_mobile_category
                  }
                >
                  Mobile boys
                </div>
              </div>
            </div>
            <div className={styles.cart_content_middle_quantity_content}>
              <div
                className={
                  styles.cart_content_middle_quantity_content_sub_wrapper
                }
              >
                <div
                  className={
                    styles.cart_content_middle_quantity_content_counter
                  }
                >
                  <span>-</span> <span>0</span> <span>+</span>
                </div>
                <div
                  className={
                    styles.cart_content_middle_quantity_content_cart_icon
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.97 5.5H16.5C16.6326 5.5 16.7598 5.55268 16.8536 5.64645C16.9473 5.74021 17 5.86739 17 6C17 6.13261 16.9473 6.25979 16.8536 6.35355C16.7598 6.44732 16.6326 6.5 16.5 6.5H15.25V16.5C15.25 16.6326 15.1973 16.7598 15.1036 16.8536C15.0098 16.9473 14.8826 17 14.75 17H6.25C5.97 17 5.75 16.78 5.75 16.5V6.5H4.5C4.36739 6.5 4.24021 6.44732 4.14645 6.35355C4.05268 6.25979 4 6.13261 4 6C4 5.86739 4.05268 5.74021 4.14645 5.64645C4.24021 5.55268 4.36739 5.5 4.5 5.5H8.03C8.06454 4.9032 8.27312 4.32958 8.63 3.85C9.06 3.32 9.7 3 10.5 3C11.3 3 11.94 3.32 12.37 3.85C12.7264 4.32986 12.9349 4.90332 12.97 5.5ZM10.5 4C9.99 4 9.64 4.19 9.41 4.48C9.22 4.72 9.1 5.08 9.05 5.5H11.95C11.89 5.08 11.79 4.72 11.59 4.48C11.35 4.19 11.01 4 10.5 4ZM6.75 6.5V16H14.25V6.5H6.75ZM8.69643 7.89645C8.7902 7.80268 8.91738 7.75 9.04999 7.75C9.1826 7.75 9.30977 7.80268 9.40354 7.89645C9.49731 7.99021 9.54999 8.11739 9.54999 8.25V14.25C9.54999 14.3826 9.49731 14.5098 9.40354 14.6036C9.30977 14.6973 9.1826 14.75 9.04999 14.75C8.91738 14.75 8.7902 14.6973 8.69643 14.6036C8.60267 14.5098 8.54999 14.3826 8.54999 14.25V8.25C8.54999 8.11739 8.60267 7.99021 8.69643 7.89645ZM11.5964 7.89645C11.6902 7.80268 11.8174 7.75 11.95 7.75C12.0826 7.75 12.2098 7.80268 12.3035 7.89645C12.3973 7.99021 12.45 8.11739 12.45 8.25V14.25C12.45 14.3826 12.3973 14.5098 12.3035 14.6036C12.2098 14.6973 12.0826 14.75 11.95 14.75C11.8174 14.75 11.6902 14.6973 11.5964 14.6036C11.5027 14.5098 11.45 14.3826 11.45 14.25V8.25C11.45 8.11739 11.5027 7.99021 11.5964 7.89645Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.cart_content_middle_total_content}>
              36,500.00
            </div>
          </div>
          <div className={styles.cart_content_middle_content_sub_container}>
            <div className={styles.cart_content_middle_product_content}>
              <div className={styles.cart_content_middle_product_content_image}>
                <Image
                  src="/hero_images/cart_image_one.png"
                  alt="cart image"
                  width={100}
                  height={100}
                />
              </div>
              <div
                className={
                  styles.cart_content_middle_product_content_text_wrapper
                }
              >
                <div
                  className={
                    styles.cart_content_middle_product_content_main_text
                  }
                >
                  Bo soft Strap
                </div>
                <div
                  className={
                    styles.cart_content_middle_product_content_sub_text
                  }
                >
                  Color: Cotton candy
                </div>
                <div
                  className={
                    styles.cart_content_middle_product_content_mobile_category
                  }
                >
                  <div
                    className={
                      styles.cart_content_middle_quantity_content_sub_wrapper
                    }
                  >
                    <div
                      className={
                        styles.cart_content_middle_quantity_content_counter
                      }
                    >
                      <span>-</span> <span>0</span> <span>+</span>
                    </div>
                    <div
                      className={
                        styles.cart_content_middle_quantity_content_cart_icon
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.97 5.5H16.5C16.6326 5.5 16.7598 5.55268 16.8536 5.64645C16.9473 5.74021 17 5.86739 17 6C17 6.13261 16.9473 6.25979 16.8536 6.35355C16.7598 6.44732 16.6326 6.5 16.5 6.5H15.25V16.5C15.25 16.6326 15.1973 16.7598 15.1036 16.8536C15.0098 16.9473 14.8826 17 14.75 17H6.25C5.97 17 5.75 16.78 5.75 16.5V6.5H4.5C4.36739 6.5 4.24021 6.44732 4.14645 6.35355C4.05268 6.25979 4 6.13261 4 6C4 5.86739 4.05268 5.74021 4.14645 5.64645C4.24021 5.55268 4.36739 5.5 4.5 5.5H8.03C8.06454 4.9032 8.27312 4.32958 8.63 3.85C9.06 3.32 9.7 3 10.5 3C11.3 3 11.94 3.32 12.37 3.85C12.7264 4.32986 12.9349 4.90332 12.97 5.5ZM10.5 4C9.99 4 9.64 4.19 9.41 4.48C9.22 4.72 9.1 5.08 9.05 5.5H11.95C11.89 5.08 11.79 4.72 11.59 4.48C11.35 4.19 11.01 4 10.5 4ZM6.75 6.5V16H14.25V6.5H6.75ZM8.69643 7.89645C8.7902 7.80268 8.91738 7.75 9.04999 7.75C9.1826 7.75 9.30977 7.80268 9.40354 7.89645C9.49731 7.99021 9.54999 8.11739 9.54999 8.25V14.25C9.54999 14.3826 9.49731 14.5098 9.40354 14.6036C9.30977 14.6973 9.1826 14.75 9.04999 14.75C8.91738 14.75 8.7902 14.6973 8.69643 14.6036C8.60267 14.5098 8.54999 14.3826 8.54999 14.25V8.25C8.54999 8.11739 8.60267 7.99021 8.69643 7.89645ZM11.5964 7.89645C11.6902 7.80268 11.8174 7.75 11.95 7.75C12.0826 7.75 12.2098 7.80268 12.3035 7.89645C12.3973 7.99021 12.45 8.11739 12.45 8.25V14.25C12.45 14.3826 12.3973 14.5098 12.3035 14.6036C12.2098 14.6973 12.0826 14.75 11.95 14.75C11.8174 14.75 11.6902 14.6973 11.5964 14.6036C11.5027 14.5098 11.45 14.3826 11.45 14.25V8.25C11.45 8.11739 11.5027 7.99021 11.5964 7.89645Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cart_content_middle_quantity_content}>
              <div
                className={
                  styles.cart_content_middle_quantity_content_sub_wrapper
                }
              >
                <div
                  className={
                    styles.cart_content_middle_quantity_content_counter
                  }
                >
                  <span>-</span> <span>0</span> <span>+</span>
                </div>
                <div
                  className={
                    styles.cart_content_middle_quantity_content_cart_icon
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.97 5.5H16.5C16.6326 5.5 16.7598 5.55268 16.8536 5.64645C16.9473 5.74021 17 5.86739 17 6C17 6.13261 16.9473 6.25979 16.8536 6.35355C16.7598 6.44732 16.6326 6.5 16.5 6.5H15.25V16.5C15.25 16.6326 15.1973 16.7598 15.1036 16.8536C15.0098 16.9473 14.8826 17 14.75 17H6.25C5.97 17 5.75 16.78 5.75 16.5V6.5H4.5C4.36739 6.5 4.24021 6.44732 4.14645 6.35355C4.05268 6.25979 4 6.13261 4 6C4 5.86739 4.05268 5.74021 4.14645 5.64645C4.24021 5.55268 4.36739 5.5 4.5 5.5H8.03C8.06454 4.9032 8.27312 4.32958 8.63 3.85C9.06 3.32 9.7 3 10.5 3C11.3 3 11.94 3.32 12.37 3.85C12.7264 4.32986 12.9349 4.90332 12.97 5.5ZM10.5 4C9.99 4 9.64 4.19 9.41 4.48C9.22 4.72 9.1 5.08 9.05 5.5H11.95C11.89 5.08 11.79 4.72 11.59 4.48C11.35 4.19 11.01 4 10.5 4ZM6.75 6.5V16H14.25V6.5H6.75ZM8.69643 7.89645C8.7902 7.80268 8.91738 7.75 9.04999 7.75C9.1826 7.75 9.30977 7.80268 9.40354 7.89645C9.49731 7.99021 9.54999 8.11739 9.54999 8.25V14.25C9.54999 14.3826 9.49731 14.5098 9.40354 14.6036C9.30977 14.6973 9.1826 14.75 9.04999 14.75C8.91738 14.75 8.7902 14.6973 8.69643 14.6036C8.60267 14.5098 8.54999 14.3826 8.54999 14.25V8.25C8.54999 8.11739 8.60267 7.99021 8.69643 7.89645ZM11.5964 7.89645C11.6902 7.80268 11.8174 7.75 11.95 7.75C12.0826 7.75 12.2098 7.80268 12.3035 7.89645C12.3973 7.99021 12.45 8.11739 12.45 8.25V14.25C12.45 14.3826 12.3973 14.5098 12.3035 14.6036C12.2098 14.6973 12.0826 14.75 11.95 14.75C11.8174 14.75 11.6902 14.6973 11.5964 14.6036C11.5027 14.5098 11.45 14.3826 11.45 14.25V8.25C11.45 8.11739 11.5027 7.99021 11.5964 7.89645Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.cart_content_middle_total_content}>
              36,500.00
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cart_content_bottom}>
        <div>Subtotal 131,500</div>
        <div>Taxes and shipping calculated at checkout</div>
        <div className={styles.checkout_button}>
          <div>
            {" "}
            <Link href="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContent