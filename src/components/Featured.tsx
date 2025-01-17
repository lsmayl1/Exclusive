import React from "react";
import ps5 from "../assets/images/ps5-slim-goedkope-playstation_large 1.png";
import womencollection from "../assets/images/attractive-woman-wearing-hat-posing-black-background 1.png";
import speakers from "../assets/images/speaker.png";
import parfume from "../assets/images/652e82cd70aa6522dd785109a455904c.png";

export const Featured = () => {
  return (
    <div className="container mt-[140px]">
      <div>
        <div className="flex items-center gap-[16px] ">
          <div className="bg-DB4444 w-[20px] h-[40px] rounded-[4px]"></div>
          <h1 className="text-DB4444 font-poppins font-semibold">Featured</h1>
        </div>
        <div className="flex mt-[24px] justify-between items-center">
          <div className="flex items-center gap-[87px]">
            <div>
              <h1 className="text-black font-inter font-semibold text-[36px] leading-[48px] ">
                New Arrival
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[30px] mt-[60px] ">
        <div className="bg-black w-full h-[600px] flex items-end justify-center relative rounded-[4px] ">
          <div className="relative">
            <img src={ps5} alt="" />
          </div>
          <div className="absolute  bottom-0 left-0 text-white w-[242px] p-[32px]">
            <h1 className="font-inter font-semibold text-[24px] pb-[10px]">
              Playstation 5
            </h1>
            <p className="font-poppins font-normal text-[14px] pb-[10px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a
              href=""
              className="font-poppins font-Medium text-[16px] underline  underline-offset-8 "
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className=" w-full flex flex-col gap-[32px] ">
          <div className="bg-0D0D0D w-full h-[284px] flex justify-end relative rounded-[4px]">
            <div>
              <img src={womencollection} alt="" />
            </div>
            <div className="absolute   bottom-0 left-0 text-white w-[280px] pl-[32px] pb-[32px] w-[252px]">
              <h1 className="font-inter font-semibold text-[24px] pb-[10px]">
                Women’s Collections
              </h1>
              <p className="font-poppins font-normal text-[14px] pb-[10px]">
                Featured woman collections that give you another vibe.
              </p>
              <a
                href=""
                className="font-poppins font-Medium text-[16px] underline  underline-offset-8 "
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="flex gap-[30px] rounded-[4px]">
            <div className="bg-0D0D0D w-full rounded-[4px] h-[284px] flex justify-center items-center relative">
              <img src={speakers} alt="" />
              <div className="absolute  bottom-0 left-0 text-white w-[242px] pb-[24px] pl-[24px]">
                <h1 className="font-inter font-semibold text-[24px] pb-[5px]">
                  Speakers{" "}
                </h1>
                <p className="font-poppins font-normal text-[14px] pb-[5px]">
                  Amazon wireless speakers{" "}
                </p>
                <a
                  href=""
                  className="font-poppins font-Medium text-[16px] underline  underline-offset-8 "
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="bg-0D0D0D w-full rounded-[4px] h-[284px] flex justify-center items-center relative">
              <img src={parfume} alt="" />

              <div className="absolute  bottom-0 left-0 text-white w-[242px] pb-[24px] pl-[24px]">
                <h1 className="font-inter font-semibold text-[24px] pb-[5px]">
                  Perfume{" "}
                </h1>
                <p className="font-poppins font-normal text-[14px] pb-[5px]">
                  GUCCI INTENSE OUD EDP
                </p>
                <a
                  href=""
                  className="font-poppins font-Medium text-[16px] underline  underline-offset-8 "
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
