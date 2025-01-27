
import { Top_header_arrow } from "./icons/Top_header_arrow";

function TopHeader() {
  return (
    <div className="bg-black">
      <div className="container  flex items-center  py-3 max-xs:py-2">
        <div className="flex-grow max-md:text-start max-md:flex-grow-0 text-center">
          <h1 className="text-white font-poppins font-regular text-[14px]  max-md:text-[12px] max-sm:text-[10px] max-xs:text-[6px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="text-white font-poppins underline font-semibold ml-[13px] max-xs:ml-0.5 max-md:text-[14px] max-sm:text-[11px] max-xs:text-[7px]">
              {" "}
              Shop Now
            </span>
          </h1>
        </div>

        <div className="flex item-center ml-auto">
          <h1 className="text-white max-sm:text-[10px] max-xs:text-[8px]">English</h1>
          <div className="m-auto ml-[11px] max-sm:ml-1" >
            <Top_header_arrow prop={"w-[8px] h-[13px] max-sm:w-[7px] "} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
