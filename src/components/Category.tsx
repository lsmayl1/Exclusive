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
      <div className="flex items-center gap-[16px] ">
        <div className="bg-DB4444 w-[20px] h-[40px] rounded-[4px]"></div>
        <h1 className="text-DB4444 font-poppins font-semibold">Categories</h1>
      </div>
      <div className="flex mt-[24px] justify-between items-center">
        <div className="flex items-center gap-[87px]">
          
            <h1 className="text-black font-inter font-semibold text-[36px] leading-[48px] max-md:text-[24px] max-xs:text-[16px] ">
              Browse By Category
            </h1>
          
        </div>
        <div className="flex gap-[8px] items-center max-xs:hidden">
          <button className="bg-F5F5F5 w-[46px] h-[46px] rounded-full items-center flex justify-center ">
            <ReactSVG
              src="/icons/icons_arrow-left.svg"
              className="stroke-2 stroke-linecap-round stroke-linejoin-round"
            />
          </button>
          <button className="bg-F5F5F5 w-[46px] h-[46px] rounded-full items-center flex justify-center  ">
            <ReactSVG
              src="/icons/iconsarrow-right.svg"
              className="stroke-2 stroke-linecap-round stroke-linejoin-round"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-[30px] mt-[60px] justify-center mb-[70px] max-lg:gap-5 max-md:flex-wrap">
        {category.map((category, index) => (
          <div
            key={index}
            className="flex justify-center items-center border-[2px] rounded-[4px] w-[170px] h-[145px] group hover:bg-DB4444
            max-lg:w-[110px] max-lg:h-[106px] max-md:w-1/4 max-xs:w-1/3"
          >
            <button>
              <div className="flex flex-col juustify-center items-center  gap-[16px] max-lg:gap-1">
                <ReactSVG
                  src={category.icon}
                  className="group-hover:text-white" 
                />

                <h1 className="text-black font-poppins group-hover:text-white max-lg:text-[14px]">
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
