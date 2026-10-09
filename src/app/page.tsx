import Image from "next/image";
import Slide from "../app/_components/Slider/Slider";
import imag1 from "../assets/images/hero-1.jpg";
import imag2 from "../assets/images/hero-2.jpg";
import imag3 from "../assets/images/hero-3.jpg";

import CardOne from "./_components/Home/CardOne";
import PromoBanners from './_components/PromoBanners/PromoBanners';
import StayConnected from './_components/StayConnected/StayConnected';
import ShopCategories from "./_components/ShopCategories/ShopCategories";
export default async function Home() {
  // إضافة async في حال كنت تجلب البيانات داخل الصفحة
  // إذا كنت تعتمد على جلب البيانات من الـ API وتمريرها للمكون:
  // const categories = await getShopCategories();

  return (
    <>
      <Slide
        spaceBetween={2}
        slidesPerView={1}
        pageList={[imag1.src, imag2.src, imag3.src]}
      />
  
      <PromoBanners />
      <ShopCategories />
      <CardOne />
      <StayConnected/>
    </>
  );
}
