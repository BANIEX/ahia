"use client"
import React from 'react'
import styles from './ProductSection.module.css'

import { ShoppingCart } from "lucide-react";
import CartIcon from '@/icons/CartIcon';
import Product from '../Product/Product';
import { useState } from 'react';
import Link from 'next/link'



const ProductSection = () => {
  // const bag_products_array = [
  //   {
  //     id: 1,
  //     name: "Hobowww small",
  //     price: "95,000",
  //     imageUrl: "/bag_images/bag_one.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Secondww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_two.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Secondww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_three.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Secondwww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_four.png",
  //   },
  //   {
  //     id: 5,
  //     name: "Secondwww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_five.png",
  //   },
  //   {
  //     id: 6,
  //     name: "Secondwww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_six.png",
  //   },
  //   {
  //     id: 7,
  //     name: "Secondww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_seven.png",
  //   },
  //   {
  //     id: 8,
  //     name: "Secondww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_eight.png",
  //   },
  //   {
  //     id: 9,
  //     name: "Secondwww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_nine.png",
  //   },
  //   {
  //     id: 10,
  //     name: "Secondww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_ten.png",
  //   },
  //   {
  //     id: 11,
  //     name: "Secondww Product",
  //     price: "55,000",
  //     imageUrl: "/bag_images/bag_eleven.png",
  //   },
  // ];


  const bag_products_array = [
    {
      id: 1,
      name: "Elegant Hobo",
      price: "95,000",
      imageUrl: "/bag_images/bag_one.png",
    },
    {
      id: 2,
      name: "Chic Satchel",
      price: "55,000",
      imageUrl: "/bag_images/bag_two.png",
    },
    {
      id: 3,
      name: "Classic Tote",
      price: "55,000",
      imageUrl: "/bag_images/bag_three.png",
    },
    {
      id: 4,
      name: "Sophisticated Clutch",
      price: "55,000",
      imageUrl: "/bag_images/bag_four.png",
    },
    {
      id: 5,
      name: "Stylish Backpack",
      price: "55,000",
      imageUrl: "/bag_images/bag_five.png",
    },
    {
      id: 6,
      name: "Modern Messenger",
      price: "55,000",
      imageUrl: "/bag_images/bag_six.png",
    },
    {
      id: 7,
      name: "Elegant Envelope",
      price: "55,000",
      imageUrl: "/bag_images/bag_seven.png",
    },
    {
      id: 8,
      name: "Trendy Crossbody",
      price: "55,000",
      imageUrl: "/bag_images/bag_eight.png",
    },
    {
      id: 9,
      name: "Luxury Baguette",
      price: "55,000",
      imageUrl: "/bag_images/bag_nine.png",
    },
    {
      id: 10,
      name: "Glamorous Bucket",
      price: "55,000",
      imageUrl: "/bag_images/bag_ten.png",
    },
    {
      id: 11,
      name: "Fashionable Wristlet",
      price: "55,000",
      imageUrl: "/bag_images/bag_eleven.png",
    },
  ];

  const [currentProducts, setCurrentProducts] = useState(bag_products_array);
  const [activeTab, setActiveTab] = useState("bags");

  const shoe_products_array = [
    {
      id: 1,
      name: "Stiletto Charm",
      price: "95,000",
      imageUrl: "/shoe_images/shoe_one.png",
    },
    {
      id: 2,
      name: "Elegant Pumps",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_two.png",
    },
    {
      id: 3,
      name: "Classic Kitten Heels",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_three.png",
    },
    {
      id: 4,
      name: "Chic Slingbacks",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_four.png",
    },
    {
      id: 5,
      name: "Graceful D'Orsay",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_five.png",
    },
    {
      id: 6,
      name: "Trendy Wedge Heels",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_six.png",
    },
    {
      id: 7,
      name: "Fashion Ankle Strap",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_seven.png",
    },
    {
      id: 8,
      name: "Sleek Cone Heels",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_eight.png",
    },
    {
      id: 9,
      name: "Classy T-Strap",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_nine.png",
    },
    {
      id: 10,
      name: "Modern Mule Heels",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_ten.png",
    },
    {
      id: 11,
      name: "Designer Mary Janes",
      price: "55,000",
      imageUrl: "/shoe_images/shoe_eleven.png",
    },
  ];


     const handleTabSwitch = (category : any) => {
       if (category === "bags") {
         setCurrentProducts(bag_products_array);
       } else if (category === "shoes") {
         setCurrentProducts(shoe_products_array);
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
            <Link href='/cart' key={productObject.id}>
            <Product key={productObject.id} product={productObject} />
            </Link>
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






