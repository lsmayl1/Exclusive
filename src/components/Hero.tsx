import React, { useState } from "react";
import Carousel from "./Carousel";

function Hero() {
  return (
    <>
      <div className="container flex ">
        <div className="category border-r h-[400px] ">
          <div className="mt-[40px] w-[217px] mr-[25px]">
            <ul className="flex flex-col gap-[13px] font-poppins leading-[24px] text-[16px] text-black">
              <li className="flex items-center justify-between">
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
              </li>
              <li className="flex items-center justify-between">
                Men’s Fashion{" "}
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
        <Carousel/>
      </div>
    </>
  );
}

export default Hero;
