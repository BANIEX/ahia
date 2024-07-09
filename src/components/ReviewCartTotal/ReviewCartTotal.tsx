import React from 'react'
import styles from './ReviewCartTotal.module.css'

const ReviewCartTotal = () => {
  return (
    <div className={styles.review_cart_total_container}>
      <div className={styles.review_cart_total_sub_container}>
        <div className={styles.review_cart_total_coupon_code_input}>
          <input type="text" placeholder="Enter coupon code here" />
        </div>
        <div className={styles.review_cart_total_sub_total_and_shipping}>
          <div className={styles.review_cart_total_sub_total}>
            <span>Subtotal</span>
            <span>131,500</span>
          </div>
          <div className={styles.review_cart_total_shipping}>
            <span>Shipping</span>
            <span>4,000</span>
          </div>
        </div>
        <div className={styles.review_cart_total_amount_wrapper}>
          <span>Total</span>
          <span>200,000</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCartTotal