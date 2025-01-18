import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SingnIn";
import { WishList } from "./pages/WishList";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/wishlist" element={<WishList />} />

    </Routes>
  );
}

export default Routing;
