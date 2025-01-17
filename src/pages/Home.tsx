import React from "react";
import "../assets/css/index.css";
import "../assets/css/Global.css";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import { Category } from "../components/Category";
import { CategoriesAds } from "../components/CategoriesAds";
import OurProducts from "../components/OurProducts";
import { Featured } from "../components/Featured";
function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <Hero />
      <Cards
        isnew={false}
        text="Today`s"
        timer={true}
        carousel={true}
        vapbutton={true}
        discountElement={true}
        border={false}
      />
      <Category />
      <Cards
        isnew={false}
        text="This Month"
        timer={false}
        carousel={false}
        vapbutton={false}
        discountElement={false}
        border={false}
      />
      <CategoriesAds />
    
      <OurProducts
        text="This Month"
        timer={false}
        carousel={false}
        vapbutton={true}
        discountElement={false}
        border={true}
      />
      <Featured/>
    </>
  );
}

export default Home;
