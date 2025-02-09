import React, { useRef, useState } from "react";

import { ApiCart } from "./ApiCart";
import { ReactSVG } from "react-svg";
interface props {
  text: string;
  timer: boolean;
  carousel: boolean;
  vapbutton: boolean;
  border: boolean;
  cardcount: {
    start: number;
    stop: number;
  };
  subtext: string;
  wrap: string;
}
const Cards: React.FC<props> = ({
  text,
  timer,
  carousel,
  vapbutton,
  border,
  cardcount: { start, stop },
  subtext,
  wrap,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 4;
      return nextIndex >= stop - start ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((CuurentprevIndex) => {
      const prevIndex = CuurentprevIndex - 4;
      return prevIndex < 0 ? stop - start - 4 : prevIndex;
    });
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
  return (
    <div
      className={`container flex flex-col  mt-[140px] max-sm:mt-[100px] overflow-hidden ${
        border ? "border-b-[2px]" : "border-b-[0px]"
      } `}
    >
      <div className="flex items-center gap-[16px] ">
        <div className="bg-DB4444 w-[20px] h-[40px] rounded-[4px]"></div>
        <h1 className="text-DB4444 font-poppins font-semibold">{text}</h1>
      </div>
      <div className="flex mt-[24px] justify-between items-center max-md:mt-1">
        <div className="flex items-center max-sm:mt-5 gap-[87px] max-md:gap-10 max-sm:gap-6 max-xs:flex-col max-md:items-start ">
          <h1 className="text-black font-inter font-semibold text-[36px] leading-[48px] max-md:text-[24px] max-sm:text-[20px]  max-sm:leading-6 whitespace-nowrap  max-xs:text-[16px] ">
            {subtext}
          </h1>
          <div>
            {timer && (
              <div className="max-xs:pl-[0px]">
                <div id="timer-container" className="text-center mr-5 ">
                  <div className="flex justify-center items-center space-x-4 max-md:space-x-2 max-sm:space-x-1  ">
                    <div className="text-center">
                      <h3 className="text-[12px] font-popins font-medium">
                        Days
                      </h3>
                      <span
                        id="days"
                        className="text-[32px] font-inter font-bold max-md:text-[24px] max-sm:font-medium"
                      >
                        00
                      </span>
                    </div>
                    <span className="text-4xl text-DB4444">:</span>
                    <div className="text-center">
                      <h3 className="text-[12px] font-popins font-medium">
                        Hours
                      </h3>
                      <span
                        id="hours"
                        className="text-[32px] font-inter font-bold max-md:text-[24px] max-sm:font-medium"
                      >
                        00
                      </span>
                    </div>
                    <span className="text-4xl text-DB4444">:</span>
                    <div className="text-center">
                      <h3 className="text-[12px] font-popins font-medium">
                        Minutes
                      </h3>
                      <span
                        id="minutes"
                        className="text-[32px] font-inter font-bold max-md:text-[24px] max-sm:font-medium"
                      >
                        00
                      </span>
                    </div>
                    <span className="text-4xl text-DB4444">:</span>
                    <div className="text-center">
                      <h3 className="text-[12px] font-popins font-medium">
                        Seconds
                      </h3>
                      <span
                        id="seconds"
                        className="text-[32px] font-inter font-bold max-md:text-[24px] max-sm:font-medium"
                      >
                        00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {carousel ? (
          <div className="flex gap-[8px] items-center max-xs:hidden">
            <button
              onClick={prevSlide}
              className="bg-F5F5F5 w-[46px] h-[46px] rounded-full items-center flex justify-center "
            >
              <ReactSVG
                src="/icons/icons_arrow-left.svg"
                className="stroke-2 stroke-linecap-round stroke-linejoin-round"
              />
            </button>
            <button
              onClick={nextSlide}
              className="bg-F5F5F5 w-[46px] h-[46px] rounded-full items-center flex justify-center  "
            >
              <ReactSVG
                src="/icons/iconsarrow-right.svg"
                className="stroke-2 stroke-linecap-round stroke-linejoin-round"
              />
            </button>
          </div>
        ) : (
          <button className="bg-DB4444 w-[159px] py-5 rounded-[4px] text-white font-poppins font-medium max-sm:w-[100px] max-md:py-3 max-sm:py-2">
            View All
          </button>
        )}
      </div>

      <div
        className="flex transition-transform duration-700 ease-in-out  gap-[15px]"
        style={{
          transform: `${carousel && `translateX(-${currentIndex * 250}px)`}`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ApiCart flexWrap={wrap} start={start} stop={stop} />
      </div>

      {vapbutton && (
        <div className="flex justify-center items-center mt-[50px] max-sm:mt-[25px] ">
          <button
            className="w-[234px] h-[56px] max-sm:w-[200px] bg-DB4444 rounded-[4px] text-white font-poppins font-medium
          max-xs:w-[150px] max-xs:h-[40px] max-xs:text-[14px]"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
