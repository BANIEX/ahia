import Image from "next/image";
import styles from "./page.module.css";
import PromotionBanner from "@/components/PromotionBanner/PromotionBanner";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProductSection from "@/components/ProductSection/ProductSection";
import SellerInfo from "@/components/SellerInfo/SellerInfo";

export default function Home() {
  return (
    <main>
      <PromotionBanner/>
      <HeroSection/>
      <ProductSection/>
      <SellerInfo/>

    </main>
  );
}
