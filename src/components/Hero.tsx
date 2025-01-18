import React, { useState } from "react";
import Carousel from "./Carousel";

function Hero() {
  return (
    <>
      <div className="container flex ">
        <div className="category border-r h-[400px] ">
          <div className="mt-[40px] w-[217px] mr-[25px]">
            <ul className="flex flex-col gap-[13px] font-poppins leading-[24px] text-[16px] text-black">
              <li className="flex items-center justify-between relative group ">
                Woman’s Fashion{" "}
                <button>
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <div className="absolute left-full pl-[20px] top-0 w-auto bg-white  z-10 hidden  group-hover:block border  ">
                  <div className="flex">
                    <div className="whitespace-nowrap p-5">
                      <h1 className="text-black text-[20px] pb-4 font-poppins font-semibold">
                        Clothing Categories
                      </h1>
                      <ul className="flex flex-col items-start text-[14px] gap-[5px] text-gray-700">
                        <li>Dresses</li>
                        <li>Blouses & Shirts</li>
                        <li>T-Shirts & Tops</li>
                        <li>Pants & Trousers</li>
                        <li>Skirts</li>
                        <li>Jackets & Coats</li>
                      </ul>
                    </div>
                    <div className="whitespace-nowrap p-5">
                      <h1 className="text-black text-[20px] pb-4 font-poppins font-semibold">
                        Shoes & Accessories
                      </h1>
                      <ul className="flex flex-col items-start text-[14px] gap-[5px] text-gray-700">
                        <li>Shoes</li>
                        <li>BBags</li>
                        <li>Jewelry</li>
                        <li>Hats & Caps</li>
                        <li>Gloves & Scarves</li>
                        <li>Belts</li>
                      </ul>
                    </div>
                    <div className="whitespace-nowrap p-5">
                      <h1 className="text-black text-[20px] pb-4 font-poppins font-semibold">
                        Special Collections
                      </h1>
                      <ul className="flex flex-col items-start text-[14px] gap-[5px] text-gray-700">
                        <li>Evening Wear</li>
                        <li>Workwear</li>
                        <li>Casual Wear</li>
                        <li>Sports & Activewear</li>
                        <li>Plus Size</li>
                        <li>Maternity Wear</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between relative group  ">
                Man’s Fashion{" "}
                <button>
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <div className="absolute left-full pl-[20px] top-0 w-auto bg-white  z-10 hidden  group-hover:block border  ">
                  <div className="flex">
                    <div className="whitespace-nowrap p-5">
                      <h1 className="text-black text-[20px] pb-4 font-poppins font-semibold">
                        Clothing Categories
                      </h1>
                      <ul className="flex flex-col items-start text-[14px] gap-[5px] text-gray-700">
                        <li>T-Shirts & Polos</li>
                        <li>Shirts & Casual Tops</li>
                        <li>Sweaters & Hoodies</li>
                        <li>Jackets & Blazers</li>
                        <li>Suits</li>
                        <li>Activewear & Sportswear</li>
                        <li>Sleepwear & Loungewear</li>
                        <li>Outerwear</li>
                      </ul>
                    </div>
                    <div className="whitespace-nowrap p-5">
                      <h1 className="text-black text-[20px] pb-4 font-poppins font-semibold">
                        Footwear
                      </h1>
                      <ul className="flex flex-col items-start text-[14px] gap-[5px] text-gray-700">
                        <li>Sneakers</li>
                        <li>Boots</li>
                        <li>Loafers</li>
                        <li>Sandals</li>
                        <li>Formal Shoes</li>
                      </ul>
                    </div>
                    <div className="whitespace-nowrap p-5">
                      <h1 className="text-black text-[20px] pb-4 font-poppins font-semibold">
                        Accessories
                      </h1>
                      <ul className="flex flex-col items-start text-[14px] gap-[5px] text-gray-700">
                        <li>Hats & Caps</li>
                        <li>Belts</li>
                        <li>Wallets</li>
                        <li>Sunglasses</li>
                        <li>Scarves & Gloves</li>
                        <li>Ties & Bow Ties</li>
                        <li>Watches</li>
                        <li>Bags & Backpacks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="">Electronics</a>
              </li>
              <li>
                <a href="">Home & Lifestyle</a>
              </li>
              <li>
                <a href="">Medicine</a>
              </li>
              <li>
                <a href="">Sports & Outdoor</a>
              </li>
              <li>
                <a href="">Baby’s & Toys</a>
              </li>
              <li>
                <a href="">Groceries & Pets</a>
              </li>
              <li>
                <a href="">Health & Beauty</a>
              </li>
            </ul>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default Hero;
