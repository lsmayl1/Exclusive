import jbl from "../assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
export const CategoriesAds = () => {
  return (
    <div className="md:container mt-[140px] box-border">
      <div className="w-full  bg-black flex box-border justify-between ">
        <div className="flex flex-1 py-[70px] pl-[55px] max-md:py-10 max-sm:py-5 max-sm:pl-5">
          <div className="flex flex-col justify-between gap-8 max-sm:gap-4">
            <h1 className="font-poppins font-semibold text-00FF66">
              Categories
            </h1>
            <h1 className="font-inter font-semibold text-white text-[36px] max-md:text-[30px] max-sm:text-[27px] max-xs:text-[20px]">
              Enhance Your Music Experience
            </h1>
            <div className="flex gap-[16px] max-lg:gap-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col max-md:-space-y-2 max-sm:gap-1 bg-white w-[62px] h-[62px] rounded-full justify-center items-center max-md:w-[35px] max-md:h-[35px] text-center max-sm:w-[30px] max-sm:h-[30px]"
                >
                  <h1 className="text-black font-poppins font-semibold max-md:text-[12px] max-sm:text-[8px]">
                    23
                  </h1>
                  <h1 className="text-black font-poppins text-[11px] max-md:text-[10px] max-sm:text-[6px]">
                    Days
                  </h1>
                </div>
              ))}
            </div>
            <button className="bg-00FF66 py-5 w-[50%] rounded-[4px] font-poppins font-medium text-white max-md:py-2 max-sm:py-2 max-xs:py-1 max-xs:text-[12px]">
              Buy Now!
            </button>
          </div>
        </div>
        <div className=" flex flex-1 items-center w-full mr-[60px] max-xs:mr-[30px] relative ">
          <div className="bg-gray-400 absolute w-full h-1/2 rounded-full blur-[200px] bg-center "></div>
          <img className="relative object-cover " src={jbl} alt="" />
        </div>
      </div>
    </div>
  );
};
