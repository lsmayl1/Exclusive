import React, { useRef, useState } from "react";
import iphone from "../assets/images/Iphone_14.png";
import AppleLogo from "../assets/images/AppleLogo.png";
import { NavLink } from "react-router-dom";
import { ShopNowArrow } from "./icons/ShopNowArrow";
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Kaydırma sola
      if (currentIndex < 5 - 1) setCurrentIndex(currentIndex + 1);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Kaydırma sağa
      if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }
  };
  0;
  return (
    <div className="relative overflow-hidden w-full 2xl:w-[1000px] pl-[40px] max-md:pl-0 pt-[30px] max-lg:pt-[20px]">
      <div
        className="flex transition-transform duration-500 ease-in-out 2xl:justify-center"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full 2xl:w-[1000px] h-full  bg-black  flex justify-between relative"
          >
            <div className="flex flex-col gap-[22px] pl-[50px] max-lg:pl-[30px] py-[50px]  flex-1 z-10 max-xs:py-[20px] max-xs:gap-3">
              <div className="flex items-center justify-start gap-[24px] flex-1 max-sm:gap-3 ">
                <img src={AppleLogo} alt="" className="max-xs:w-[25px]" />
                <h1 className="text-white font-poppins text-[16px] leading-[24px] max-sm:text-[14px] max-xs:text-[12px] ">
                  iPhone 14 Series
                </h1>
              </div>
              <div>
                <h1 className="text-white font-inter font-semibold text-[48px] leading-[60px] max-lg:text-[36px] max-sm:text-[20px] max-sm:leading-8 ">
                  Up to 10% <br /> off Voucher
                </h1>
              </div>
              <div className="flex items-center gap-[10px]">
                <NavLink to={"/"}>
                  <h1 className="underline underline-offset-[6px] font-poppins font-medium leading-[24px] max-xs:text-[14px]">
                    Shop now
                  </h1>
                </NavLink>

                <NavLink to={"/"} className={""}>
                  <ShopNowArrow prop={"max-xs:w-4"} />
                </NavLink>
              </div>
            </div>
            <div className="absolute right-0 pr-10 pt-5 z-1 pb-5 max-lg:pt-[50px] max-lg:pr-3 max-sm:pt-[60px] max-xs:pt-7 ">
              <img
                src={iphone}
                alt=""
                className="max-lg:w-[250px] max-sm:w-[200px] max-xs:w-[150px]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute pb-3 bottom-0  transform  flex space-x-2  left-1/2 -translate-x-1/2 max-xs:pb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 max-sm:w-2 max-sm:h-2  rounded-full cursor-pointer ${
              currentIndex === index ? "bg-red-500 border-2 " : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
