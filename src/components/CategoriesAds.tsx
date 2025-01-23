import jbl from "../assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
export const CategoriesAds = () => {
  return (
    <div className="container mt-[140px] box-border">
      <div className="w-full h-[500px] bg-black flex box-border justify-between ">
        <div className="flex  p-[56px] w-[600px] h-[500px] ">
          <div className="flex flex-col justify-between">
            <h1 className="font-poppins font-semibold text-00FF66">
              Categories
            </h1>
            <h1 className="font-inter font-semibold text-white text-[36px]">
              Enhance Your Music Experience
            </h1>
            <div className="flex gap-[24px]">
              <div className="flex flex-col bg-white w-[62px] h-[62px] rounded-full justify-center items-center ">
                <h1 className="text-black font-poppins font-semibold">23</h1>
                <h1 className="text-black font-poppins text-[11px]">Days</h1>
              </div>
              <div className="flex flex-col bg-white w-[62px] h-[62px] rounded-full justify-center items-center ">
                <h1 className="text-black font-poppins font-semibold">05</h1>
                <h1 className="text-black font-poppins text-[11px]">Hours</h1>
              </div>
              <div className="flex flex-col bg-white w-[62px] h-[62px] rounded-full justify-center items-center ">
                <h1 className="text-black font-poppins font-semibold">59</h1>
                <h1 className="text-black font-poppins text-[11px]">Minutes</h1>
              </div>
              <div className="flex flex-col bg-white w-[62px] h-[62px] rounded-full justify-center items-center ">
                <h1 className="text-black font-poppins font-semibold">23</h1>
                <h1 className="text-black font-poppins text-[11px]">Seconds</h1>
              </div>
            </div>
            <button className="bg-00FF66 w-[171px]  h-[56px] rounded-[4px] font-poppins font-medium text-white ">
              Buy Now!
            </button>
          </div>
        </div>
        <div className=" flex items-center w-full ml-[10%] mr-[60px] ">
          <div className="bg-gray-400 absolute  w-[500px] h-[500px] rounded-full blur-[200px] bg-center "></div>
          <img className="relative object-cover   " src={jbl} alt="" />
        </div>
      </div>
    </div>
  );
};
