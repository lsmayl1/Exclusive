import axios from "axios";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
interface category {
  name: any;
  icon: any;
}
export const Category = () => {
  const [category, setCategory] = useState<category[]>([]);

  useEffect(() => {
    const FetchCategory = async () => {
      try {
        const response = await axios.get("/products.json");
        setCategory(response.data.category);
      } catch {}
    };
    FetchCategory();
  }, []);

  return (
    <div className="container mt-[80px] border-b">
      <div>
        <div className="flex items-center gap-[16px] ">
          <div className="bg-DB4444 w-[20px] h-[40px] rounded-[4px]"></div>
          <h1 className="text-DB4444 font-poppins font-semibold">Categories</h1>
        </div>
      </div>
      <div className="flex mt-[24px] justify-between items-center">
        <div className="flex items-center gap-[87px]">
          <div>
            <h1 className="text-black font-inter font-semibold text-[36px] leading-[48px] ">
              Browse By Category
            </h1>
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <button
            // onClick={prevSlide}
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
            // onClick={nextSlide}
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
      </div>
      <div className="flex gap-[30px] mt-[60px] justify-center mb-[70px]">
        {category.map((category, index) => (
          <div
            key={index}
            className="flex justify-center items-center border-[2px] rounded-[4px] w-[170px] h-[145px] group hover:bg-DB4444"
          >
            <button>
              <div className="flex flex-col juustify-center items-center  gap-[16px]">
                <ReactSVG
                  src={category.icon}
                  className="group-hover:text-white"
                />

                <h1 className="text-black font-poppins group-hover:text-white">
                  {category.name}
                </h1>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
