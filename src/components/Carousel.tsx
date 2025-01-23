import React, { useState } from "react";
import iphone from "../assets/images/Iphone_14.png";
import AppleLogo from "../assets/images/AppleLogo.png";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
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
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0  h-[344px] bg-black mt-[40px] ml-[45px] flex justify-between items-center max-lg:"
          >
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
                <NavLink to={"/"}>
                  <h1 className="underline underline-offset-[6px] font-poppins font-medium leading-[24px]">
                    Shop now
                  </h1>
                </NavLink>

                <NavLink to={"/"}>
                  <ReactSVG src={"/icons/HeroShopNowArrow.svg"} />
                </NavLink>
              </div>
            </div>
            <div>
              <img src={iphone} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
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
