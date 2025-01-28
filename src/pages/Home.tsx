import "../assets/css/index.css";
import "../assets/css/Global.css";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import { Category } from "../components/Category";
import { CategoriesAds } from "../components/CategoriesAds";
import { Featured } from "../components/Featured";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
function Home() {
  return (
    <div className="">
      <TopHeader />
      <Header />
      <Hero />
      <Cards
        wrap="nowrap"
        cardcount={{ start: 0, stop: 10 }}
        text="Today`s"
        timer={true}
        carousel={true}
        vapbutton={true}
        border={false}
        subtext="Flash Sales"
      />
      <Category />
      <Cards
        wrap="nowrap"
        text="This Month"
        timer={false}
        subtext={"Best Selling Products"}
        carousel={false}
        vapbutton={false}
        border={false}
        cardcount={{ start: 0, stop: 4 }}
      />
      <CategoriesAds />
      <Cards
        wrap="wrap"
        text="Our Products"
        timer={false}
        subtext={"Explore Our Products"}
        carousel={false}
        vapbutton={false}
        border={false}
        cardcount={{ start: 8, stop: 16 }}
      />
      <Featured />

      <Services />

      <Footer />
    </div>
  );
}

export default Home;
