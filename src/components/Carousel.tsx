import React, { useState } from "react";
import iphone from "../assets/images/Iphone_14.png";
import AppleLogo from "../assets/images/AppleLogo.png";
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

 const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative max-w-[900px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="banner flex-shrink-0  h-[344px] bg-black mt-[40px] ml-[45px] flex justify-between items-center">
          <div className="mt-[px] ml-[64px] mb-[47px] flex flex-col gap-[22px] w-[294px]">
            <div className="flex items-center gap-[24px]">
              <img src={AppleLogo} alt="" />
              <h1 className="text-white font-poppins text-[16px] leading-[24px]">
                iPhone 14 Series
              </h1>
            </div>
            <div>
              <h1 className="text-white font-inter font-semibold text-[48px] leading-[60px]">
                Up to 10% off Voucher
              </h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <a href="">
                {" "}
                <h1 className="underline underline-offset-[6px] font-poppins font-medium leading-[24px]">
                  Shop now
                </h1>
              </a>

              <a href="">
                {" "}
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img src={iphone} alt="" />
          </div>
        </div>
        <div className="banner flex-shrink-0 h-[344px] bg-black mt-[40px] ml-[45px] flex justify-between items-center">
          <div className="mt-[px] ml-[64px] mb-[47px] flex flex-col gap-[22px] w-[294px]">
            <div className="flex items-center gap-[24px]">
              <img src={AppleLogo} alt="" />
              <h1 className="text-white font-poppins text-[16px] leading-[24px]">
                iPhone 14 Series
              </h1>
            </div>
            <div>
              <h1 className="text-white font-inter font-semibold text-[48px] leading-[60px]">
                Up to 10% off Voucher
              </h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <a href="">
                {" "}
                <h1 className="underline underline-offset-[6px] font-poppins font-medium leading-[24px]">
                  Shop now
                </h1>
              </a>

              <a href="">
                {" "}
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img src={iphone} alt="" />
          </div>
        </div>
		<div className="banner flex-shrink-0 h-[344px] bg-black mt-[40px] ml-[45px] flex justify-between items-center">
          <div className="mt-[px] ml-[64px] mb-[47px] flex flex-col gap-[22px] w-[294px]">
            <div className="flex items-center gap-[24px]">
              <img src={AppleLogo} alt="" />
              <h1 className="text-white font-poppins text-[16px] leading-[24px]">
                iPhone 14 Series
              </h1>
            </div>
            <div>
              <h1 className="text-white font-inter font-semibold text-[48px] leading-[60px]">
                Up to 10% off Voucher
              </h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <a href="">
                {" "}
                <h1 className="underline underline-offset-[6px] font-poppins font-medium leading-[24px]">
                  Shop now
                </h1>
              </a>

              <a href="">
                {" "}
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img src={iphone} alt="" />
          </div>
        </div>
		<div className="banner flex-shrink-0 h-[344px] bg-black mt-[40px] ml-[45px] flex justify-between items-center">
          <div className="mt-[px] ml-[64px] mb-[47px] flex flex-col gap-[22px] w-[294px]">
            <div className="flex items-center gap-[24px]">
              <img src={AppleLogo} alt="" />
              <h1 className="text-white font-poppins text-[16px] leading-[24px]">
                iPhone 14 Series
              </h1>
            </div>
            <div>
              <h1 className="text-white font-inter font-semibold text-[48px] leading-[60px]">
                Up to 10% off Voucher
              </h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <a href="">
                {" "}
                <h1 className="underline underline-offset-[6px] font-poppins font-medium leading-[24px]">
                  Shop now
                </h1>
              </a>

              <a href="">
                {" "}
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img src={iphone} alt="" />
          </div>
        </div>
		<div className="banner flex-shrink-0 h-[344px] bg-black mt-[40px] ml-[45px] flex justify-between items-center">
          <div className="mt-[px] ml-[64px] mb-[47px] flex flex-col gap-[22px] w-[294px]">
            <div className="flex items-center gap-[24px]">
              <img src={AppleLogo} alt="" />
              <h1 className="text-white font-poppins text-[16px] leading-[24px]">
                iPhone 14 Series
              </h1>
            </div>
            <div>
              <h1 className="text-white font-inter font-semibold text-[48px] leading-[60px]">
                Up to 10% off Voucher
              </h1>
            </div>

            <div className="flex items-center gap-[10px]">
              <a href="">
                {" "}
                <h1 className="underline underline-offset-[6px] font-poppins font-medium leading-[24px]">
                  Shop now
                </h1>
              </a>

              <a href="">
                {" "}
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img src={iphone} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: 5}).map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-red-500 border-2 " : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
