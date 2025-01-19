import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import gamepad from "../assets/images/Gamepad.png";
import visa from "../assets/images/Visa.png";
import mastercard from "../assets/images/Mastercard.png";
import bkash from "../assets/images/Bkash.png";
import nagad from "../assets/images/Nagad.png";

export const CheckoutSection = () => {
  const breadcrumb = [
    { name: "Account", href: "/account" },
    { name: "Myaccount", href: "/myaccount" },
    { name: "Product", href: "/product" },
    { name: "View Cart", href: "/cart" },
    { name: "CheckOut", href: "/checkout" },
  ];
  const [checkbox, setCheckbox] = useState(false);
  const [Bank, setBank] = useState(true);
  const [Cash, setCash] = useState(false);

  const BankCheck = () => {
    setBank(true);
    setCash(false);
  };
  const CashCheck = () => {
    setBank(false);
    setCash(true);
  };

  const checked = () => {
    setCheckbox(!checkbox);
  };
  return (
    <div className="container">
      <Breadcrumb paths={breadcrumb} />
      <div className="flex gap-[173px] mt-[80px]">
        <div>
          <h1 className="font-inter font-medium text-[36px] text-black">
            Billing Details
          </h1>
          <div className="mt-[48px]">
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-gray-400 "
                >
                  FirstName<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-F5F5F5 w-[470px] h-[50px] rounded-[4px] focus:outline-none p-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-gray-400 "
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="bg-F5F5F5 w-[470px] h-[50px] rounded-[4px] focus:outline-none p-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-gray-400 "
                >
                  Street Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-F5F5F5 w-[470px] h-[50px] rounded-[4px] focus:outline-none p-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-gray-400 "
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  className="bg-F5F5F5 w-[470px] h-[50px] rounded-[4px] focus:outline-none p-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-gray-400 "
                >
                  Town/City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-F5F5F5 w-[470px] h-[50px] rounded-[4px] focus:outline-none p-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-gray-400 "
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-F5F5F5 w-[470px] h-[50px] rounded-[4px] focus:outline-none p-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="font-poppins font-normal text-gray-400 "
                >
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-F5F5F5 w-[470px] h-[50px] rounded-[4px] focus:outline-none p-5"
                />
              </div>
              <div className="flex gap-[16px]">
                <button
                  onClick={checked}
                  className={`w-[24px] h-[24px] border flex justify-center items-center rounded-[4px] ${
                    checkbox ? "bg-DB4444" : "bg-white"
                  } `}
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6L6.25 11L15 1"
                      stroke={`${checkbox ? "white" : "black"}`}
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <h4 className="font-poppins font-normal text-[16px]">
                  Save this information for faster check-out next time
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-[110px]">
            <div className="flex flex-col gap-[32px] w-[425px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-[24px] items-center">
                  <img className="w-[54px] h-[54px]" src={gamepad} alt="" />
                  <h4>GamePad</h4>
                </div>
                <div>
                  <h4>$650</h4>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[24px] items-center">
                  <img className="w-[54px] h-[54px]" src={gamepad} alt="" />
                  <h4>GamePad</h4>
                </div>
                <div>
                  <h4>$650</h4>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
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
              <div className="flex flex-col gap-[32px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[16px]">
                    <button
                      onClick={BankCheck}
                      className="border-black border-[1.5px] flex justify-center  items-center w-[24px] h-[24px] rounded-full"
                    >
                      {Bank && (
                        <div className=" w-[14px] h-[14px] rounded-full bg-black"></div>
                      )}
                    </button>
                    <h4 className="font-poppins font-normal">Bank</h4>
                  </div>
                  <ul className="flex gap-[8px]">
                    <li>
                      <img src={bkash} alt="" />
                    </li>

                    <li>
                      <img src={visa} alt="" />
                    </li>
                    <li>
                      <img src={mastercard} alt="" />
                    </li>

                    <li>
                      <img src={nagad} alt="" />
                    </li>
                  </ul>
                </div>

                <div className="flex gap-[16px]">
                  <button
                    onClick={CashCheck}
                    className="border-black border-[1.5px] flex justify-center  items-center w-[24px] h-[24px] rounded-full"
                  >
                    {Cash && (
                      <div className=" w-[14px] h-[14px] rounded-full bg-black"></div>
                    )}
                  </button>
                  <h4 className="font-poppins font-normal">Cash on delivery</h4>
                </div>
              </div>
              <div className="flex gap-[16px]">
                <input
                  className="w-[300px] border border-black py-[16px] pl-[24px] h-[56px] placeholder:py-[16px] placeholder:font-poppins placeholder:text-[16px] focus:outline-none rounded-[4px]"
                  placeholder="Coupon Code"
                  type="text"
                />
                <button className="w-[211px] h-[56px] rounded-[4px] border font-poppins font-medium bg-DB4444 text-white">
                  Apply Coupon
                </button>
              </div>
              <button className="w-[190px] h-[56px] rounded-[4px] border font-poppins font-medium bg-DB4444 text-white">
                  Place Order
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
