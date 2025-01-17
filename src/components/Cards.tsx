import React, { useState } from "react";
import { Card } from "./Card";
import monitor from "../assets/images/Monitor.png";
import gamepad from "../assets/images/Gamepad.png";
import keyboard from "../assets/images/keyboard.png";
import chair from "../assets/images/Chair.png";
interface props {
  text: string;
  timer: boolean;
  carousel: boolean;
  vapbutton: boolean;
  discountElement: boolean;
  border: boolean;
  isnew:boolean;
}
const Cards: React.FC<props> = ({
  text,
  timer,
  carousel,
  discountElement,
  vapbutton,
  border,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false,
    },
    {
      image: keyboard,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: chair,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: chair,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: gamepad,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },

    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },
    {
      image: monitor,
      discount: 40,
      title: "HAVIT HV-G92 Gamepad",
      rating: 5,
      price: 120,
      pastprice: 160,
      hascolor:false
    },

  ];

  // Sonraki kart
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 4;
      return nextIndex >= cards.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((CuurentprevIndex) => {
      const prevIndex = CuurentprevIndex - 4;
      // Eğer prevIndex < 0 ise, en son dört kartın başına git
      return prevIndex < 0 ? cards.length - 4 : prevIndex;
    });
  };

  return (
    <div
      className={`container mt-[140px] overflow-hidden ${
        border ? "border-b-[2px]" : "border-b-[0px]"
      } `}
    >
      <div>
        <div className="flex items-center gap-[16px] ">
          <div className="bg-DB4444 w-[20px] h-[40px] rounded-[4px]"></div>
          <h1 className="text-DB4444 font-poppins font-semibold">{text}</h1>
        </div>
      </div>
      <div className="flex mt-[24px] justify-between items-center">
        <div className="flex items-center gap-[87px]">
          <div>
            <h1 className="text-black font-inter font-semibold text-[36px] leading-[48px] ">
              Flash Sales
            </h1>
          </div>
          <div>
            {timer ? (
              <div id="timer-container" className="text-center mr-5">
                <div className="flex justify-center items-center space-x-4">
                  <div className="text-center">
                    <h3 className="text-[12px] font-popins font-medium">
                      Days
                    </h3>
                    <span
                      id="days"
                      className="text-[32px] font-inter font-bold"
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
                      className="text-[32px] font-inter font-bold"
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
                      className="text-[32px] font-inter font-bold"
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
                      className="text-[32px] font-inter font-bold"
                    >
                      00
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {carousel ? (
          <div className="flex gap-[8px] items-center">
            <button
              onClick={prevSlide}
              className="bg-F5F5F5 w-[46px] h-[46px] rounded-full items-center flex justify-center "
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 8L8 15M1 8H17"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-F5F5F5 w-[46px] h-[46px] rounded-full items-center flex justify-center  "
            >
              <svg
                className="rotate-180"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 8L8 15M1 8H17"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div>
            <button className="bg-DB4444 w-[159px] h-[56px] rounded-[4px] text-white font-poppins font-medium">
              View All
            </button>
          </div>
        )}
      </div>
      <div
        className="flex transition-transform duration-700 ease-in-out mt-[40px] gap-[30px]"
        style={{
          transform: `translateX(-${currentIndex * 250}px)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-none w-[270px]" // Kartların arası için gap ayarı
          >
            <Card
            hascolor={card.hascolor}
              isnew={false}
              discountElement={discountElement}
              image={card.image}
              discount={card.discount}
              title={card.title}
              rating={card.rating}
              price={card.price}
              pastprice={card.pastprice}
            />
          </div>
        ))}
      </div>
      {vapbutton ? (
        <div className="flex justify-center items-center my-[50px] ">
          <button className="w-[234px] h-[56px] bg-DB4444 rounded-[4px] text-white font-poppins font-medium">
            View All Products
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;
