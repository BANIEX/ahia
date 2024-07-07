"use client"
import React from 'react'
import styles from "./HeroSection.module.css"

// import { Swiper, } from "swiper";
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import Image from 'next/image'
// import hero_image_one from 'public/hero_images'


const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div>AHIA is your one store shopping site</div>
            <div>You want it. We have it</div>
            <div>Shop now</div> */}
          <div className={styles.swiper_texts_wrapper}>
            <div className={styles.swiper_texts}>
              <div className={styles.swiper_main_text}>
                AHIA is your one store shopping site
              </div>
              <div className={styles.swiper_sub_text}>
                You want it? We have it
              </div>
              <div className={styles.swiper_shop_now}>SHOP NOW</div>
            </div>
          </div>
          <Image
            src="/hero_images/hero_image_one.png"
            alt="hi"
            width={1200}
            height={394}
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div>AHIA is your one store shopping site</div>
            <div>You want it. We have it</div>
            <div>Shop now</div> */}
          <div className={styles.swiper_texts_wrapper}>
            <div className={styles.swiper_texts}>
              <div className={styles.swiper_main_text}>
                Join the Market Place
              </div>
              <div className={styles.swiper_sub_text}>
                Become an AHIA Vendor
              </div>
              <div className={styles.swiper_shop_now}>SIGN UP</div>
            </div>
          </div>
          <Image
            src="/hero_images/hero_image_two.png"
            alt="hi"
            width={1200}
            height={394}
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <div>AHIA is your one store shopping site</div>
            <div>You want it. We have it</div>
            <div>Shop now</div> */}
          <div className={styles.swiper_texts_wrapper}>
            <div className={styles.swiper_texts}>
              <div className={styles.swiper_main_text}>
                Discover the Latest Trends in Handbags and Shoes
              </div>
              <div className={styles.swiper_sub_text}>
                Shop the newest arrivals now
              </div>
              <div className={styles.swiper_shop_now}>SHOP NOW</div>
            </div>
          </div>
          <Image
            src="/hero_images/hero_image_three.png"
            alt="hi"
            width={1200}
            height={394}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            src="/hero_images/hero_image_two.png"
            alt="hi"
            width={1200}
            height={394}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/hero_images/hero_image_three.png"
            alt="hi"
            width={1200}
            height={394}
          />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}

export default HeroSection