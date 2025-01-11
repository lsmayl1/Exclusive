import React from "react";

function TopHeader() {
  return (
    <div className="bg-black h-[48px] flex items-center justify-center">
      <div className="container flex items-center">
        <div className="flex-1 flex justify-center">
          <h1 className="text-white font-poppins font-regular text-[14px] leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a href="#" className="underline font-semibold ml-[13px]" >
              Shop Now
            </a>
          </h1>
        </div>

        <div className="ml-auto flex item-center justify-center">
			<div>
          <h1 className="text-white ">English</h1>
		  </div>
		  <div  className="m-auto ml-[11px]">
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
              fill="white"
            />
          </svg>
		  </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
