import ps5 from "../assets/images/ps5-slim-goedkope-playstation_large 1.png";
import womencollection from "../assets/images/attractive-woman-wearing-hat-posing-black-background 1.png";
import speakers from "../assets/images/speaker.png";
import parfume from "../assets/images/652e82cd70aa6522dd785109a455904c.png";

export const Featured = () => {
  return (
    <div className="xs:container mt-[140px] max-xs:mt-[70px]">
      <div className="container">
        <div className="flex items-center gap-[16px] ">
          <div className="bg-DB4444 w-[20px] h-[40px] rounded-[4px]"></div>
          <h1 className="text-DB4444 font-poppins font-semibold ">Featured</h1>
        </div>
        <div className="flex mt-[24px] justify-between items-center">
          <div className="flex items-center gap-[87px]">
              <h1 className="text-black font-inter font-semibold text-[36px] leading-[48px] max-xs:text-[25px] max-xs:leading-3 ">
                New Arrival
           </h1>
          </div>
        </div>
      </div>

      <div className="flex gap-[30px] mt-[60px] max-lg:gap-2 max-xs:flex-col">
        <div className="bg-black w-full flex items-end justify-center relative rounded-[4px] ">
          <div className="max-xs:pt-[20px]">
            <img src={ps5} alt="" />
          </div>
          <div className="absolute  bottom-0 left-0 text-white max-w-[240px] p-[32px] max-sm:p-5">
            <h1 className="font-inter font-semibold text-[24px] pb-[10px] max-sm:text-[12px]">
              Playstation 5
            </h1>
            <p className="font-poppins font-normal text-[14px] pb-[10px] max-sm:text-[12px]">
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

        <div className="w-full flex flex-col gap-[32px] max-lg:gap-2 max-md:gap-1 ">
          <div className="bg-0D0D0D w-full  flex justify-end relative rounded">
            <div>
              <img src={womencollection} alt="" />
            </div>
            <div className="absolute  w-full bottom-0 left-0 text-white pl-[32px] pb-[32px] max-md:w-[60%] max-md:pl-4 max-md:pb-5">
              <h1 className="font-inter font-semibold text-[24px] pb-[10px]  max-md:text-[14px] max-sm:text-[12px] max-sm:pb-1 ">
                Women’s Collections
              </h1>
              <p className="font-poppins font-normal text-[14px] pb-[10px] max-md:text-[10px] max-sm:text-[8px] max-sm:pb-1">
                Featured woman collections that give you another vibe.
              </p>
              <a
                href=""
                className="font-poppins font-Medium text-[16px] underline  underline-offset-8 max-sm:text-[10px] "
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="flex gap-[30px] rounded-[4px] max-lg:gap-4 max-md:gap-1">
            <div className="bg-0D0D0D w-full rounded p-10 flex justify-center items-center relative max-sm:p-5">
              <img src={speakers} alt="" />
              <div className="absolute  bottom-0 left-0 text-white w-full pb-[24px] pl-[24px] max-lg:pl-3 max-lg:pb-3 max-sm:pb-1">
                <h1 className="font-inter font-semibold text-[24px] pb-[5px] max-lg:text-[16px] max-md:pb-0 max-md:text-[12px] max-sm:text-[10px] ">
                  Speakers{" "}
                </h1>
                <p className="font-poppins font-normal text-[14px] pb-[5px] max-lg:w-1/2 max-lg:text-[12px] max-md:pb-0 max-md:w-full max-md:text-[10px] max-sm:text-[8px]">
                  Amazon wireless speakers{" "}
                </p>
                <a
                  href=""
                  className="font-poppins font-Medium text-[16px] underline  underline-offset-8 max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] "
                >
                  Shop Now
                </a>
              </div>
            </div>

            <div className="bg-0D0D0D w-full rounded p-10 flex justify-center items-center relative max-sm:p-5">
              <img src={parfume} alt="" className="" />
              <div className="absolute  bottom-0 left-0 text-white pb-[24px] pl-[24px] max-lg:pl-3 max-lg:pb-3 max-sm:pb-1 w-full">
                <h1 className="font-inter font-semibold text-[24px] pb-[5px] max-lg:text-[16px] max-sm:text-[10px] max-md:text-[12px] max-md:pb-0">
                  Perfume{" "}
                </h1>
                <p className="font-poppins font-normal text-[14px] pb-[5px] max-lg:text-[12px] max-lg:w-1/2 max-md:w-full max-md:text-[10px] max-sm:text-[8px] max-md:pb-0">
                  GUCCI INTENSE OUD EDP
                </p>
                <a
                  href=""
                  className="font-poppins font-Medium text-[16px] underline  underline-offset-8 max-lg:text-[14px] max-sm:text-[12px] "
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
