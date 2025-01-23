
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import { ProductDetailsSection } from "../components/ProductDetailsSection";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";

export const ProductDetails = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <ProductDetailsSection />
      <Cards
        wrap="nowrap"
        text={"Related Item"}
        carousel={true}
        timer={false}
        vapbutton={false}
        border={false}
        subtext="Hello"
        cardcount={{ start: 10, stop: 16 }}
      />
      <Footer />
    </>
  );
};
