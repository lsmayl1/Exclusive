import React, { useState } from "react";
import Breadcrump from "./Breadcrumb.tsx";
import monitor from "../assets/images/g27cq4-500x500 1.png";
import { NavLink } from "react-router-dom";
export const CartSection = () => {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Cart", href: "/cart" },
  ];
  const [quantity, setquantity] = useState(1);
  const increase = () => {
    setquantity(quantity + 1);
  };
  const decrease = () => {
    setquantity(quantity - 1);
  };

  return (
    <div className="container flex flex-col">
      <Breadcrump paths={breadcrumbPaths} />
      <div className="mt-[80px] flex flex-col gap-[40px]">
        <div className="w-full  flex flex-col justify-center items-center  rounded-[4px]">
          <table className="border-separate border-spacing-4">
            <thead className="shadow h-[72px]">
              <tr>
                <th className="px-4 w-[400px] py-2">Product</th>
                <th className="px-4 w-[400px] py-2">Price</th>
                <th className="px-4 w-[400px] py-2">Quantity</th>
                <th className="px-4 w-[400px] py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center h-[102px] shadow">
                <td className="px-4   py-10 flex justify-center items-center">
                  {" "}
                  <div className="flex items-center justify-center gap-[22px]">
                    {" "}
                    <img src={monitor} alt="" /> <h3>LCD Monitor</h3>
                  </div>
                </td>
                <td className="px-4  py-2">$960</td>
                <td className="px-4   py-10 flex justify-center items-center">
                  {" "}
                  <div className="flex items-center justify-center relative">
                    {" "}
                    <input
                      type="number "
                      value={quantity}
                      className="border py-[10px] pl-[12px] w-[72px] h-[44px]"
                    />{" "}
                    <div className="absolute right-0 pr-2 pt-[4px]">
                      <button onClick={increase} className="flex  ">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.75732 7.36669L4.45732 10.6667L3.51465 9.72402L7.75732 5.48135L12 9.72402L11.0573 10.6667L7.75732 7.36669Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                      <button onClick={decrease}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.24268 8.63331L11.5427 5.33331L12.4854 6.27598L8.24268 10.5186L4.00002 6.27598L4.94268 5.33331L8.24268 8.63331Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-4  py-2">$960</td>
              </tr>
              <tr className="text-center h-[102px] shadow">
                <td className="px-4   py-10 flex justify-center items-center">
                  {" "}
                  <div className="flex items-center justify-center gap-[22px]">
                    {" "}
                    <img src={monitor} alt="" /> <h3>LCD Monitor</h3>
                  </div>
                </td>
                <td className="px-4  py-2">$960</td>
                <td className="px-4   py-10 flex justify-center items-center">
                  {" "}
                  <div className="flex items-center justify-center relative">
                    {" "}
                    <input
                      type="number "
                      value={quantity}
                      className="border py-[10px] pl-[12px] w-[72px] h-[44px]"
                    />{" "}
                    <div className="absolute right-0 pr-2 pt-[4px]">
                      <button onClick={increase} className="flex  ">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.75732 7.36669L4.45732 10.6667L3.51465 9.72402L7.75732 5.48135L12 9.72402L11.0573 10.6667L7.75732 7.36669Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                      <button onClick={decrease}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.24268 8.63331L11.5427 5.33331L12.4854 6.27598L8.24268 10.5186L4.00002 6.27598L4.94268 5.33331L8.24268 8.63331Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-4  py-2">$960</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between px-5">
          <button className="w-[218px] h-[56px] rounded-[4px] border font-poppins font-medium">
            Return To Shop
          </button>
          <button className="w-[218px] h-[56px] rounded-[4px] border font-poppins font-medium">
            Update Cart
          </button>
        </div>
        <div className="flex justify-between px-5 mt-[80px]">
          <div className="flex gap-[16px]">
            <input
              className="w-[300px] border py-[16px] pl-[24px] h-[56px] placeholder:py-[16px] placeholder:font-poppins placeholder:text-[16px] focus:outline-none"
              placeholder="Coupon Code"
              type="text"
            />
            <button className="w-[211px] h-[56px] rounded-[4px] border font-poppins font-medium bg-DB4444 text-white">
              Apply Coupon
            </button>
          </div>
          <div className="w-[470px] border rounded-[4px] ">
            <div className="pt-[32px] px-[24px]">
              <h1 className="text-black font-poppins font-medium text-[20px]">
                Cart Total
              </h1>
              <div className="flex flex-col gap-[10px] mt-[24px]">
                <div className="flex justify-between h-[50px] items-center border-b-2 ">
                  <h2 className="font-poppins font-normal ">Subtotal:</h2>
                  <h2 className="font-poppins font-normal ">$1750</h2>
                </div>
                <div className="flex justify-between h-[50px] items-center border-b-2 ">
                  <h2 className="font-poppins font-normal ">Shipping:</h2>
                  <h2 className="font-poppins font-normal ">Free</h2>
                </div>
                <div className="flex justify-between h-[50px] items-center ">
                  <h2 className="font-poppins font-normal ">Total:</h2>
                  <h2 className="font-poppins font-normal ">$1750</h2>
                </div>
              </div>
              <div className="flex justify-center mt-[24px] pb-[24px] ">
                <NavLink to={"/checkout"}>
                  <button className="w-[260px] h-[56px] bg-DB4444 rounded-[4px] text-white font-poppins font-medium">
                    Procees to checkout{" "}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
