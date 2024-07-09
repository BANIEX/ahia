"use client"
import React from 'react'
import styles from './ProductSection.module.css'
import Image from 'next/image';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-light-svg-icons";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { all } from "@awesome.me/kit-KIT_CODE/icons";
// 

import { ShoppingCart } from "lucide-react";
import CartIcon from '@/icons/CartIcon';
import Product from '../Product/Product';
import { useState } from 'react';
// library.add(...all);


const ProductSection = () => {
  const products_array = [
    {
      id: 1,
      name: "Hobowww small",
      price: "95,000",
      imageUrl: "/bag_images/bag_one.png",
    },
    {
      id: 2,
      name: "Secondww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_two.png",
    },
    {
      id: 3,
      name: "Secondww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_three.png",
    },
    {
      id: 4,
      name: "Secondwww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_four.png",
    },
    {
      id: 5,
      name: "Secondwww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_five.png",
    },
    {
      id: 6,
      name: "Secondwww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_six.png",
    },
    {
      id: 7,
      name: "Secondww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_seven.png",
    },
    {
      id: 8,
      name: "Secondww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_eight.png",
    },
    {
      id: 9,
      name: "Secondwww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_nine.png",
    },
    {
      id: 10,
      name: "Secondww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_ten.png",
    },
    {
      id: 11,
      name: "Secondww Product",
      price: "55,000",
      imageUrl: "/bag_images/bag_eleven.png",
    },
  ];


  const [currentProducts, setCurrentProducts] = useState(products_array);
  const [activeTab, setActiveTab] = useState("bags");

  const bag_products_array = [
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


     const handleTabSwitch = (category : any) => {
       if (category === "bags") {
         setCurrentProducts(bag_products_array);
       } else if (category === "shoes") {
         setCurrentProducts(products_array);
       }
       setActiveTab(category)
     };




  return (
    <section className={styles.section}>
      <div className={styles.section_tab}>
        <div className={styles.section_tab_left}>
          <div
            className={activeTab === "bags" ? `${styles.active}` : ""}
            onClick={() => {
              handleTabSwitch("bags");
            }}
          >
            Bags
          </div>
        </div>
        <div className={styles.section_tab_right}>
          <div
            className={activeTab === "shoes" ? `${styles.active}` : ""}
            onClick={() => {
              handleTabSwitch("shoes");
            }}
          >
            Shoes
          </div>
        </div>
      </div>
      <div className={styles.section_products_wrapper}>
        <div className={styles.section_products_sub_wrapper}>
          {currentProducts.map((productObject) => (
            <Product key={productObject.id} product={productObject} />
          ))}

          {/* 
          <Product />
          
          <Product />
          <Product />
          <Product /> */}
        </div>
      </div>
    </section>
  );
}

export default ProductSection






