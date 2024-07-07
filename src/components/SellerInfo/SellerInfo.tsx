import React from 'react'
import styles from './SellerInfo.module.css'
import Image from 'next/image';

const SellerInfo = () => {
  return (
    <section className={styles.seller_info_wrapper}>
      <div className={styles.seller_info_sub_wrapper}>
        <div className={styles.seller_info_left}>
          <div className={styles.seller_info_left_sub_container}>
            <div className={styles.seller_info_left_content_wrapper}>
              <div className={styles.seller_info_left_top}>
                SELLER INFORMATION
              </div>
              <div className={styles.seller_info_left_middle}>
                <div className={styles.seller_info_left_middle_picture}>
                  <Image
                    src="/hero_images/girl_circle.png"
                    alt="girl"
                    width={64}
                    height={64}
                  />
                </div>
                <div className={styles.seller_info_left_middle_texts}>
                  <div className={styles.seller_info_left_middle_main_text}>
                    YAFEH FASHION HOUSE
                  </div>
                  <div className={styles.seller_info_left_middle_message_text}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H18V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
                        fill="#FAFAFA"
                      />
                    </svg>
                    <span>Typically replies within 24 hours</span>
                  </div>
                </div>
              </div>
              <div className={styles.seller_info_left_bottom}>Send Message</div>
            </div>
          </div>
        </div>
        <div className={styles.seller_info_right}>
          <Image
            src="/hero_images/white_girl.png"
            alt="girl"
            width={550}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}

export default SellerInfo