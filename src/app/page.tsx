import Image from "next/image";
import styles from "./page.module.css";
import PromotionBanner from "@/components/PromotionBanner/PromotionBanner";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProductSection from "@/components/ProductSection/ProductSection";
import SellerInfo from "@/components/SellerInfo/SellerInfo";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Copyright/Copyright";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <PromotionBanner/>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <SellerInfo/>
      <Footer/>
      <Copyright/>

    </main>
  );
}
