import React, { useState } from "react";
import gamepad from "../assets/images/Gamepad.png";
interface Card {
  image: string;
  discount: number;
  title: string;
  rating: number;
  price: number;
  pastprice: number;
  discountElement: boolean;
  isnew: boolean;
  hascolor:boolean
}
export const Card: React.FC<Card> = ({
  image,
  discount,
  title,
  rating,
  price,
  pastprice,
  discountElement,
  isnew,
  hascolor,
}) => {
  const [activeButton, setActiveButton] = useState("button1");
  const stars = [];
  for (let i = 0; i <= 4; i++) {
    stars.push(i <= rating - 1 ? "filled" : "empty");
  }
  return (
    <div className="Card">
      <div className="bg-F5F5F5 w-[270px] h-[250px] justify-center flex items-center relative group">
        {discountElement ? (
          <div className="absolute clear-none bg-DB4444 px-[12px] py-[4px] rounded-[4px] top-[7%] right-[70%] text-white ">
            -{discount}%
          </div>
        ) : (
          ""
        )}
        {isnew ? (
          <div className="absolute clear-none bg-00FF66 px-[12px] py-[4px] rounded-[4px] top-[7%] right-[70%] text-white ">
            New
          </div>
        ) : (
          ""
        )}

        <div className="absolute top-[5%] right-[5%]">
          <div className="gap-[6px] flex flex-col">
            <div className=" bg-white w-[34px] h-[34px] rounded-full items-center flex flex-col justify-center">
              <button>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className=" bg-white w-[34px] h-[34px] rounded-full items-center flex flex-col justify-center">
              <button>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full hidden group-hover:block ">
          <div className="flex justify-center w-full bg-black h-[41px] text-center items-center  rounded-b-[4px] ">
            <a href="">
              <h1 className=" text-white font-poppins font-medium">
                Add to Cart
              </h1>
            </a>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
      <div>
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-black font-poppins font-medium font-[16px]">
            {title}
          </h1>
          <div className="flex gap-[12px]">
            <h1 className="text-DB4444 font-poppins font-medium">${price}</h1>
            <h1 className="text-gray-500 font-poppins font-medium line-through text-center">
              ${pastprice}
            </h1>
          </div>
          <div className="flex">
            {stars.map((star, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill={star === "filled" ? "#FFAD33" : "lightgray"} // Renk dolmuş veya boş yıldız için
              >
                <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
              </svg>
            ))}
          </div>
          {hascolor ? <div className="flex gap-4">
            <button
              onClick={() => setActiveButton("button1")}
              className={` w-[20px] h-[20px] bg-DB4444 rounded-full ${
                activeButton === "button1"
                  ? "border-2 border-black"
                  : ""
              }`}
            >
            </button>

            <button
              onClick={() => setActiveButton("button2")}
              className={` w-[20px] h-[20px] bg-DB4444 rounded-full ${
                activeButton === "button1"
                  ? ""
                  : "border-2 border-black"
              }`}
            >
            </button>
          </div> : ""} 
         
        </div>
      </div>
    </div>
  );
};
