import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SingnIn";
import { WishList } from "./pages/WishList";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import Account from "./pages/Account";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductDetails } from "./pages/ProductDetails";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="*" Component={NotFoundPage} />
    </Routes>
  );
}

export default Routing;
